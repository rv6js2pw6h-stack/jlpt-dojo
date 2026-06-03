#!/usr/bin/env python3
"""
build_vocab.py — Generate the N2 語彙 道場 vocabulary dataset with the Claude API.

Pipeline
--------
1. Download the open-source JLPT N2 word list (jamsinclair/open-anki-jlpt-decks,
   based on the free JMdict dictionary).
2. Clean it: drop the "～"-prefixed counter/suffix entries (they make poor vocab
   cards), de-duplicate by word, keep word + reading + English gloss.
3. Select the first --limit words (optionally re-ranked by a frequency list).
4. For each word, ask Claude to produce, as ONE structured-JSON batch call:
     - part-of-speech category + frequency tier
     - a fill-in-the-blank context sentence (the heart of the app) with 3
       plausible distractors, an English translation, and an explanation
     - a meaning multiple-choice question with 3 distractors + explanation
     - one natural N2-level example sentence (JP + EN)
5. Checkpoint every finished word to a JSONL cache so a crash/Ctrl-C resumes
   instead of re-paying for completed work.
6. Emit vocab-n2.generated.js — a drop-in replacement for vocab-n2.js.

Usage
-----
    pip install anthropic
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 build_vocab.py --limit 2000

    # cheaper run (~40% less): swap the model
    python3 build_vocab.py --limit 2000 --model claude-sonnet-4-6

    # resume a partial run — just run the same command again; done words are skipped
    # rank by your own frequency list (one word per line, most-frequent first):
    python3 build_vocab.py --limit 2000 --freq-list n2_frequency.txt

Design notes
------------
- Model: claude-opus-4-8 by default (most capable). --model lets you pick
  claude-sonnet-4-6 to cut cost; quality is still very good for this task.
- Prompt caching: the long system prompt (rubric + few-shot) is sent with a
  cache_control breakpoint, so every batch after the first reads it from cache
  at ~0.1x price. Watch the per-batch "cache_read" log to confirm it engages.
- Structured output: output_config.format with a json_schema guarantees parseable
  JSON; we still validate counts/indices client-side (schema can't constrain
  array length).
- Concurrency: a thread pool runs several batches in parallel. The SDK retries
  429/5xx automatically.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import threading
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass

import anthropic

# --------------------------------------------------------------------------- #
# Constants
# --------------------------------------------------------------------------- #

WORDLIST_URL = "https://www.jlptstudy.net/N2/lists/n2_vocab-list.json"

# Categories MUST match the keys the app expects (vocab-n2.js / app.js).
CATEGORIES = ("verb", "noun", "naadj", "iadj", "adv")

# Prices ($ per 1M tokens) for the end-of-run cost estimate.
PRICES = {
    "claude-opus-4-8":   {"in": 5.00, "out": 25.00, "cache_read": 0.50, "cache_write": 6.25},
    "claude-opus-4-7":   {"in": 5.00, "out": 25.00, "cache_read": 0.50, "cache_write": 6.25},
    "claude-sonnet-4-6": {"in": 3.00, "out": 15.00, "cache_read": 0.30, "cache_write": 3.75},
    "claude-haiku-4-5":  {"in": 1.00, "out":  5.00, "cache_read": 0.10, "cache_write": 1.25},
}

# --------------------------------------------------------------------------- #
# System prompt — rubric + few-shot. Kept deliberately rich: it improves output
# quality AND pushes the prefix over the model's minimum cacheable size.
# --------------------------------------------------------------------------- #

SYSTEM_PROMPT = """\
You are a senior Japanese-language exam author who writes JLPT N2 vocabulary \
study material for English-speaking learners. You produce clean, exam-accurate \
JSON. The single most important product is the FILL-IN-THE-BLANK question: it \
teaches a word *in context*, exactly like the N2 文脈規定 section, which is far \
more effective than isolated flashcards.

For every word you are given (Japanese form, hiragana reading, English gloss, and \
part-of-speech category), produce an object with these fields. The category is \
provided to you — use it to keep distractors the same part of speech; do not output \
it.

1. `tier` — frequency tier for N2 study: 1 = core / very common,
   2 = common, 3 = less common / advanced. Be honest; most everyday words are 1–2.

3. `fitb` — the fill-in-the-blank question:
     - `s`  : a natural Japanese sentence at N2 level with the target word
              REMOVED and replaced by exactly four full-width underscores ＿＿＿＿.
              The sentence must make the answer unambiguous from context, and
              must NOT contain the answer anywhere else.
     - `en` : a natural English translation of the COMPLETE sentence (with the
              word filled in).
     - `options` : exactly 4 strings. options[0] MUST be the correct answer —
              the form of the target word that fits the blank (conjugate it
              naturally if needed, e.g. て-form, past, negative). The other 3 are
              plausible distractors: same part of speech, similar register, each
              grammatically able to slot into the blank but wrong in meaning or
              nuance. Distractors must be DIFFERENT from the answer and from each
              other. Avoid distractors that would also be correct.
     - `e`  : a one- or two-sentence English explanation of why the answer fits
              and, when useful, why a tempting distractor does not. May include a
              short collocation (e.g. "目標を達成する = to achieve a goal").

4. `meaning` — a meaning multiple-choice question:
     - `s`  : the prompt, formatted as 「WORD」の意味は？ using the Japanese word.
     - `options` : exactly 4 English glosses. options[0] MUST be the correct
              meaning. The other 3 are plausible-but-wrong English meanings,
              ideally near-synonyms or easily confused concepts (not absurd ones).
     - `e`  : a one-sentence English explanation of the core meaning / usage.

5. `example` — one extra natural N2 example sentence:
     - `jp` : the full Japanese sentence USING the word (not blanked).
     - `en` : a natural English translation.

Rules:
- Output MUST conform to the provided JSON schema. Return results in the SAME
  ORDER as the input words.
- Keep Japanese natural and idiomatic; avoid stiff textbook phrasing.
- Never reveal the answer inside the `s` field of the fill-in-the-blank.
- options[0] is always the correct answer for BOTH questions (the app shuffles
  options at display time).

Example of the quality bar for a single word — input
  word "達成", reading "たっせい", gloss "achievement; attainment", category "noun":
{
  "tier": 1,
  "fitb": {
    "s": "５年間の努力の末、ついに目標を＿＿＿＿することができた。",
    "en": "After five years of effort, I was finally able to achieve my goal.",
    "options": ["達成", "失敗", "経験", "想像"],
    "e": "目標を達成する = to achieve a goal. 失敗 (failure) is the opposite; the 'after five years of effort' context demands a positive outcome."
  },
  "meaning": {
    "s": "「達成」の意味は？",
    "options": ["achievement; attainment", "failure; setback", "experience; firsthand knowledge", "imagination; fantasy"],
    "e": "達成 refers to successfully reaching or accomplishing a goal."
  },
  "example": {
    "jp": "目標を達成するためには、毎日の努力が欠かせない。",
    "en": "To achieve your goal, daily effort is indispensable."
  }
}
"""

# --------------------------------------------------------------------------- #
# JSON schema for structured output. Every object sets additionalProperties:false
# and lists all properties in `required` (structured-output requirements).
# Array length (exactly 4 options) is validated client-side — the schema layer
# does not support array-length constraints.
# --------------------------------------------------------------------------- #

def _question_schema(extra_props: dict | None = None) -> dict:
    props = {
        "s": {"type": "string"},
        "options": {"type": "array", "items": {"type": "string"}},
        "e": {"type": "string"},
    }
    required = ["s", "options", "e"]
    if extra_props:
        props.update(extra_props)
        required = list(props.keys())
    return {
        "type": "object",
        "properties": props,
        "required": required,
        "additionalProperties": False,
    }


WORD_SCHEMA = {
    "type": "object",
    "properties": {
        "tier": {"type": "integer", "enum": [1, 2, 3]},
        "fitb": _question_schema({"s": {"type": "string"},
                                  "en": {"type": "string"},
                                  "options": {"type": "array", "items": {"type": "string"}},
                                  "e": {"type": "string"}}),
        "meaning": _question_schema(),
        "example": {
            "type": "object",
            "properties": {"jp": {"type": "string"}, "en": {"type": "string"}},
            "required": ["jp", "en"],
            "additionalProperties": False,
        },
    },
    "required": ["tier", "fitb", "meaning", "example"],
    "additionalProperties": False,
}

BATCH_SCHEMA = {
    "type": "object",
    "properties": {
        "words": {"type": "array", "items": WORD_SCHEMA},
    },
    "required": ["words"],
    "additionalProperties": False,
}

# --------------------------------------------------------------------------- #
# Word list acquisition + cleaning
# --------------------------------------------------------------------------- #

@dataclass
class SourceWord:
    word: str       # kanji form, or kana if the word has no kanji
    reading: str    # hiragana/katakana reading
    gloss: str      # English meaning
    category: str   # one of CATEGORIES, derived from the source POS tags


def _is_real_verb(t: str) -> bool:
    """True for genuine conjugating-verb tags. Excludes bare 'vs'/'vs-c', which
    mark a *noun* that can take する (e.g. 愛, 挨拶) — those stay nouns."""
    if t in ("vs", "vs-c"):
        return False
    if t in ("vi", "vt", "vk", "vr", "vn", "vz", "vs-i", "vs-s", "aux-v"):
        return True
    return t[:2] in ("v1", "v2", "v4", "v5")


def categorize(type_field: str, reading: str) -> str:
    """Map EDICT-style POS tags (e.g. 'n,vs', 'adj-na', 'v5r') to an app category.
    Priority: real verb → い-adj → な-adj → adverb → noun (default)."""
    tags = [t.strip() for t in (type_field or "").split(",") if t.strip()]
    s = set(tags)
    if any(_is_real_verb(t) for t in tags):
        return "verb"
    if "adj-i" in s:
        return "iadj"
    if "adj-na" in s or "adj-no" in s:
        return "naadj"
    if "adj" in s:                                   # bare 'adj': い-ending → iadj else naadj
        return "iadj" if reading.endswith("い") else "naadj"
    if "adv" in s:
        return "adv"
    return "noun"                                    # n*, exp, int, conj, pn … → noun


def fetch_wordlist() -> list[SourceWord]:
    print(f"↓ downloading word list … {WORDLIST_URL}")
    with urllib.request.urlopen(WORDLIST_URL, timeout=60) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    entries = data["vocabulary"]["word"]
    words: list[SourceWord] = []
    seen: set[str] = set()
    for e in entries:
        kana = (e.get("kana") or "").strip()
        kanji = (e.get("kanji") or "").strip()
        defn = e.get("definition")
        if isinstance(defn, list):
            gloss = "; ".join(d.strip() for d in defn if d and d.strip())
        else:
            gloss = (defn or "").strip()
        word = kanji or kana
        if not word or not kana or not gloss:
            continue
        if word in seen:
            continue
        seen.add(word)
        words.append(SourceWord(
            word=word, reading=kana, gloss=gloss,
            category=categorize(e.get("type", ""), kana),
        ))
    print(f"  parsed → {len(words)} usable words")
    return words


def rank_by_frequency(words: list[SourceWord], freq_path: str) -> list[SourceWord]:
    with open(freq_path, encoding="utf-8") as f:
        order = {line.strip(): i for i, line in enumerate(f) if line.strip()}
    # Words present in the frequency list sort by rank; the rest keep CSV order
    # after them.
    ranked = sorted(words, key=lambda sw: order.get(sw.word, len(order) + 1))
    print(f"  re-ranked by frequency list ({len(order)} entries)")
    return ranked


# --------------------------------------------------------------------------- #
# Checkpointing
# --------------------------------------------------------------------------- #

class Checkpoint:
    """One JSONL line per finished word, keyed by source index. Resumable."""

    def __init__(self, path: str):
        self.path = path
        self.done: dict[int, dict] = {}
        self._lock = threading.Lock()
        if os.path.exists(path):
            with open(path, encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    rec = json.loads(line)
                    self.done[rec["idx"]] = rec
            print(f"  resuming: {len(self.done)} words already cached in {path}")
        self._fh = open(path, "a", encoding="utf-8")

    def has(self, idx: int) -> bool:
        return idx in self.done

    def write(self, rec: dict) -> None:
        with self._lock:
            self.done[rec["idx"]] = rec
            self._fh.write(json.dumps(rec, ensure_ascii=False) + "\n")
            self._fh.flush()

    def close(self) -> None:
        self._fh.close()


# --------------------------------------------------------------------------- #
# Generation
# --------------------------------------------------------------------------- #

class Usage:
    def __init__(self):
        self.input = self.output = self.cache_read = self.cache_write = 0
        self._lock = threading.Lock()

    def add(self, u) -> None:
        with self._lock:
            self.input += u.input_tokens
            self.output += u.output_tokens
            self.cache_read += getattr(u, "cache_read_input_tokens", 0) or 0
            self.cache_write += getattr(u, "cache_creation_input_tokens", 0) or 0

    def cost(self, model: str) -> float:
        p = PRICES.get(model, PRICES["claude-opus-4-8"])
        return (
            self.input / 1e6 * p["in"]
            + self.output / 1e6 * p["out"]
            + self.cache_read / 1e6 * p["cache_read"]
            + self.cache_write / 1e6 * p["cache_write"]
        )


def validate_word(w: dict) -> None:
    """Raise ValueError if the model returned a malformed word object."""
    for key in ("fitb", "meaning"):
        opts = w[key]["options"]
        if len(opts) != 4 or len(set(opts)) != 4:
            raise ValueError(f"{key}: need 4 unique options, got {opts!r}")
    if "＿" not in w["fitb"]["s"]:
        raise ValueError("fitb sentence has no ＿ blank")


def generate_batch(
    client: anthropic.Anthropic,
    model: str,
    effort: str,
    batch: list[tuple[int, SourceWord]],
    usage: Usage,
) -> list[tuple[int, dict]]:
    payload = [
        {"word": sw.word, "reading": sw.reading, "gloss": sw.gloss, "category": sw.category}
        for _, sw in batch
    ]
    user_msg = (
        "Generate study material for these "
        f"{len(payload)} JLPT N2 words, in order:\n\n"
        + json.dumps(payload, ensure_ascii=False, indent=2)
    )

    resp = client.messages.create(
        model=model,
        max_tokens=16000,
        thinking={"type": "adaptive"},
        system=[
            {
                "type": "text",
                "text": SYSTEM_PROMPT,
                "cache_control": {"type": "ephemeral"},  # cache the rubric prefix
            }
        ],
        output_config={
            "effort": effort,  # low | medium | high
            "format": {"type": "json_schema", "schema": BATCH_SCHEMA},
        },
        messages=[{"role": "user", "content": user_msg}],
    )
    usage.add(resp.usage)

    text = next(b.text for b in resp.content if b.type == "text")
    data = json.loads(text)
    out = data["words"]
    if len(out) != len(batch):
        raise ValueError(f"expected {len(batch)} words, model returned {len(out)}")

    results: list[tuple[int, dict]] = []
    for (idx, sw), w in zip(batch, out):
        validate_word(w)
        results.append((idx, {"idx": idx, "src": sw.__dict__, "gen": w}))
    return results


# --------------------------------------------------------------------------- #
# Assemble the .js output file
# --------------------------------------------------------------------------- #

def assemble_js(records: list[dict], out_path: str) -> None:
    def jstr(s: str) -> str:
        return json.dumps(s, ensure_ascii=False)

    lines: list[str] = []
    lines.append("/* ===========================================================")
    lines.append("   N2 語彙 道場 — Vocabulary Dataset (generated by build_vocab.py)")
    lines.append("   Drop-in replacement for vocab-n2.js. Do not hand-edit;")
    lines.append("   regenerate from source instead.")
    lines.append("   =========================================================== */")
    lines.append("")
    lines.append("var VOCAB_CATEGORIES = {")
    lines.append('  verb:  { label: "Verbs",          icon: "動", color: "#6366f1" },')
    lines.append('  noun:  { label: "Nouns",          icon: "名", color: "#06b6d4" },')
    lines.append('  naadj: { label: "Na-adjectives",  icon: "な", color: "#f59e0b" },')
    lines.append('  iadj:  { label: "I-adjectives",   icon: "い", color: "#10b981" },')
    lines.append('  adv:   { label: "Adverbs",        icon: "副", color: "#ec4899" },')
    lines.append("};")
    lines.append("")
    lines.append('var VOCAB_TIERS = { 1: "Core", 2: "Common", 3: "Advanced" };')
    lines.append("")
    lines.append("var N2_VOCAB = [")

    for n, rec in enumerate(sorted(records, key=lambda r: r["idx"]), start=1):
        src, g = rec["src"], rec["gen"]
        vid = f"n2-{n:04d}"
        fitb, mean, ex = g["fitb"], g["meaning"], g["example"]
        lines.append("  {")
        lines.append(
            f"    id: {jstr(vid)}, w: {jstr(src['word'])}, r: {jstr(src['reading'])}, "
            f"m: {jstr(src['gloss'])}, c: {jstr(src['category'])}, lv: {g['tier']},"
        )
        lines.append(
            f"    ex: [{{ jp: {jstr(ex['jp'])}, en: {jstr(ex['en'])} }}],"
        )
        lines.append("    qs: [")
        lines.append(
            "      { t: \"fitb\", s: " + jstr(fitb["s"])
            + ", en: " + jstr(fitb["en"])
            + ", o: " + json.dumps(fitb["options"], ensure_ascii=False)
            + ", a: 0, e: " + jstr(fitb["e"]) + " },"
        )
        lines.append(
            "      { t: \"meaning\", s: " + jstr(mean["s"])
            + ", o: " + json.dumps(mean["options"], ensure_ascii=False)
            + ", a: 0, e: " + jstr(mean["e"]) + " }"
        )
        lines.append("    ]")
        lines.append("  },")

    lines.append("];")
    lines.append("")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"✓ wrote {out_path} ({len(records)} words)")


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #

def main() -> int:
    ap = argparse.ArgumentParser(description="Generate the N2 vocab dataset.")
    ap.add_argument("--limit", type=int, default=2000, help="number of words (default 2000)")
    ap.add_argument("--model", default="claude-opus-4-8",
                    help="claude-opus-4-8 (default) | claude-sonnet-4-6 | …")
    ap.add_argument("--effort", default="medium", choices=["low", "medium", "high"],
                    help="thinking/effort level (default medium; 'low' is cheaper)")
    ap.add_argument("--batch-size", type=int, default=12, help="words per API call")
    ap.add_argument("--workers", type=int, default=5, help="concurrent API calls")
    ap.add_argument("--freq-list", help="optional path to a frequency list to re-rank by")
    ap.add_argument("--checkpoint", default="vocab-n2.checkpoint.jsonl")
    ap.add_argument("--out", default="vocab-n2.generated.js")
    args = ap.parse_args()

    if not (os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_AUTH_TOKEN")):
        print("error: set ANTHROPIC_API_KEY in your environment first.", file=sys.stderr)
        return 1

    words = fetch_wordlist()
    if args.freq_list:
        words = rank_by_frequency(words, args.freq_list)
    words = words[: args.limit]
    print(f"  target: {len(words)} words, batch={args.batch_size}, workers={args.workers}, "
          f"model={args.model}, effort={args.effort}")

    client = anthropic.Anthropic()
    ckpt = Checkpoint(args.checkpoint)
    usage = Usage()

    # Build the list of pending batches (skip words already in the checkpoint).
    pending = [(i, sw) for i, sw in enumerate(words) if not ckpt.has(i)]
    batches = [pending[i : i + args.batch_size] for i in range(0, len(pending), args.batch_size)]
    print(f"  {len(pending)} words pending → {len(batches)} batches")

    if batches:
        done_batches = 0
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = {
                pool.submit(generate_batch, client, args.model, args.effort, b, usage): b
                for b in batches
            }
            for fut in as_completed(futures):
                b = futures[fut]
                try:
                    for _idx, rec in fut.result():
                        ckpt.write(rec)
                except Exception as e:  # noqa: BLE001
                    import traceback
                    sample = b[0][1].word if b else "?"
                    print(f"  ! batch failed (near {sample}): {e}", file=sys.stderr)
                    with open("vocab-n2.errors.log", "a", encoding="utf-8") as lg:
                        lg.write(f"\n=== batch near {sample} ===\n")
                        lg.write(traceback.format_exc())
                done_batches += 1
                print(f"  …{done_batches}/{len(batches)} batches "
                      f"(${usage.cost(args.model):.2f} so far, "
                      f"cache_read={usage.cache_read})", end="\r", flush=True)
        print()

    ckpt.close()

    # Assemble whatever we have (full set on a clean run; partial if some failed).
    records = [ckpt.done[i] for i in sorted(ckpt.done) if i < len(words)]
    assemble_js(records, args.out)

    print(f"\nTokens — in:{usage.input} out:{usage.output} "
          f"cache_read:{usage.cache_read} cache_write:{usage.cache_write}")
    print(f"Estimated cost: ${usage.cost(args.model):.2f}")
    if len(records) < len(words):
        print(f"NOTE: {len(words) - len(records)} words missing (failed batches). "
              f"Re-run the same command to retry just those.")
    else:
        print(f"All {len(records)} words generated. "
              f"Copy {args.out} over vocab-n2.js to ship it.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
