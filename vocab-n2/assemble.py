#!/usr/bin/env python3
"""
assemble.py — append an authored batch and rebuild vocab-n2.js.

Usage:  python3 assemble.py _batch.json
  - _batch.json : list of authored word records (schema below)
  - appends new records (deduped by `w`) to _generated.jsonl  (the resumable store)
  - rebuilds vocab-n2.js from header + every record in _generated.jsonl, in order,
    assigning sequential ids n2-0001, n2-0002, …

Record schema (authored by hand, high quality):
{
  "w": "発売", "r": "はつばい", "m": "release; going on sale", "c": "noun", "lv": 1,
  "ex": [{"jp": "...", "en": "..."}],
  "qs": [
    {"t":"fitb","s":"...＿＿＿＿...","en":"...","o":["correct","d1","d2","d3"],"a":0,"e":"..."},
    {"t":"meaning","s":"「発売」の意味は？","o":["correct","d1","d2","d3"],"a":0,"e":"..."}
  ]
}
"""
import sys, json, os

STORE = "_generated.jsonl"
OUT = "vocab-n2.js"

HEADER = '''/* =========================================================================
   N2 語彙 道場 — Vocabulary Dataset (authored, JMdict/jamsinclair-based)
   Frequency-ordered, N2-only. Schema:
     w word · r reading · m meaning · c category · lv tier
     ex [{jp,en}] · qs [{t:"fitb"|"meaning", s, en?, o[4], a, e}]
   ========================================================================= */

var VOCAB_CATEGORIES = {
  verb:  { label: "Verbs",          icon: "動", color: "#6366f1" },
  noun:  { label: "Nouns",          icon: "名", color: "#06b6d4" },
  naadj: { label: "Na-adjectives",  icon: "な", color: "#f59e0b" },
  iadj:  { label: "I-adjectives",   icon: "い", color: "#10b981" },
  adv:   { label: "Adverbs",        icon: "副", color: "#ec4899" },
};

var VOCAB_TIERS = { 1: "Core", 2: "Common", 3: "Advanced" };

var N2_VOCAB = [
'''

def jstr(s): return json.dumps(s, ensure_ascii=False)

def rebuild(records):
    lines = [HEADER]
    for n, r in enumerate(records, 1):
        vid = f"n2-{n:04d}"
        ex = "".join(f'{{ jp: {jstr(e["jp"])}, en: {jstr(e["en"])} }}' for e in r.get("ex", []))
        qparts = []
        for q in r["qs"]:
            if q["t"] == "fitb":
                qparts.append(
                    '      { t: "fitb", s: ' + jstr(q["s"]) + ', en: ' + jstr(q["en"])
                    + ', o: ' + json.dumps(q["o"], ensure_ascii=False)
                    + ', a: ' + str(q["a"]) + ', e: ' + jstr(q["e"]) + ' }')
            else:
                qparts.append(
                    '      { t: "meaning", s: ' + jstr(q["s"])
                    + ', o: ' + json.dumps(q["o"], ensure_ascii=False)
                    + ', a: ' + str(q["a"]) + ', e: ' + jstr(q["e"]) + ' }')
        lines.append(
            "  {\n"
            f'    id: {jstr(vid)}, w: {jstr(r["w"])}, r: {jstr(r["r"])}, m: {jstr(r["m"])}, '
            f'c: {jstr(r["c"])}, lv: {r["lv"]},\n'
            f'    ex: [{ex}],\n'
            f'    qs: [\n' + ",\n".join(qparts) + "\n    ]\n"
            "  },")
    lines.append("];\n")
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

def main():
    batch = json.load(open(sys.argv[1], encoding="utf-8"))
    records = []
    seen = set()
    if os.path.exists(STORE):
        for line in open(STORE, encoding="utf-8"):
            line = line.strip()
            if line:
                r = json.loads(line); records.append(r); seen.add(r["w"])
    added = 0
    with open(STORE, "a", encoding="utf-8") as fh:
        for r in batch:
            if r["w"] in seen:
                continue
            seen.add(r["w"]); records.append(r)
            fh.write(json.dumps(r, ensure_ascii=False) + "\n"); added += 1
    rebuild(records)
    print(f"appended {added} new words → total {len(records)} in {OUT}")

if __name__ == "__main__":
    main()
