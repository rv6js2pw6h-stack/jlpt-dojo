#!/usr/bin/env python3
"""
translate_grammar.py — Traduit automatiquement les fichiers grammar-nX.js (FR → EN)
via l'API DeepL gratuite (500 000 caractères/mois, pas de CB requise).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ÉTAPE 1 — Créer un compte DeepL gratuit :
    → https://www.deepl.com/pro#developer
    → "Free" (pas Pro) → récupérer la clé API (se termine par :fx)

  ÉTAPE 2 — Lancer le script :
    python3 translate_grammar.py VOTRE_CLE_API
    python3 translate_grammar.py VOTRE_CLE_API n3       ← un seul niveau
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Champs traduits : m (sens), note (explication), fr (trad. exemples),
                   e (explication quiz), o (options françaises), labels CATEGORIES/TIERS.
  Les fichiers originaux sont dans backup-fr/ — aucun risque.
"""

import sys, re, json, time, os
import urllib.request, urllib.parse, urllib.error

# ─── Chemins ────────────────────────────────────────────────────────────────
BASE = os.path.dirname(os.path.abspath(__file__))
FILES = {
    "n2": os.path.join(BASE, "n2", "grammar-n2.js"),
    "n3": os.path.join(BASE, "n3", "grammar-n3.js"),
    "n4": os.path.join(BASE, "n4", "grammar-n4.js"),
    "n5": os.path.join(BASE, "n5", "grammar-n5.js"),
}
DEEPL_URL = "https://api-free.deepl.com/v2/translate"

# ─── Helpers ────────────────────────────────────────────────────────────────
def has_cjk(text):
    return any('　' <= c <= '鿿' or '＀' <= c <= '￯'
               or '぀' <= c <= 'ヿ' for c in text)

def is_french(text):
    """True si le texte a des lettres latines et pas de CJK."""
    if not text or not text.strip():
        return False
    if has_cjk(text):
        return False
    return any(c.isalpha() for c in text)

def unescape_js(s):
    """Déséchapper une chaîne JS pour l'envoyer à DeepL."""
    return s.replace('\\"', '"').replace("\\'", "'").replace('\\n', '\n').replace('\\\\', '\\')

def escape_js(s):
    """Réechapper une chaîne pour l'insérer dans du JS."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

# ─── API DeepL ──────────────────────────────────────────────────────────────
def deepl_translate(texts, api_key):
    """Traduit une liste de textes FR→EN via DeepL. Retourne la liste traduite."""
    if not texts:
        return []

    pairs = [(i, t) for i, t in enumerate(texts) if t and t.strip()]
    if not pairs:
        return texts

    data = urllib.parse.urlencode(
        [("source_lang", "FR"), ("target_lang", "EN")] +
        [("text", t) for _, t in pairs],
        encoding="utf-8"
    ).encode()

    req = urllib.request.Request(DEEPL_URL, data=data, method="POST")
    req.add_header("Content-Type", "application/x-www-form-urlencoded")
    req.add_header("Authorization", f"DeepL-Auth-Key {api_key}")

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            result = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"\n  ✗ Erreur DeepL {e.code}: {body}")
        if e.code == 403:
            print("  → Clé API invalide. Vérifiez qu'elle se termine par :fx")
        elif e.code == 456:
            print("  → Quota mensuel dépassé (500 000 car/mois).")
        raise SystemExit(1)

    translations = [r["text"] for r in result["translations"]]
    out = list(texts)
    for (i, _), tr in zip(pairs, translations):
        out[i] = tr
    return out

# ─── Extraction des chaînes françaises ──────────────────────────────────────
def collect_replacements(content):
    """
    Parcourt le fichier JS et retourne une liste de dicts :
      { start, end, original (escaped), unescaped, translated }
    triée par position croissante.
    """
    hits = {}   # (start,end) → dict, pour dédupliquer

    def add(start, end, raw_text, require_french=True):
        text = unescape_js(raw_text)
        if not text.strip():
            return
        if require_french and not is_french(text):
            return
        key = (start, end)
        if key not in hits:
            hits[key] = {"start": start, "end": end,
                         "original": raw_text, "unescaped": text,
                         "translated": None}

    # ── 1. Champs clés : m, note, fr, e, label ──────────────────────────────
    #    Ces champs sont TOUJOURS en français (même s'ils contiennent des
    #    kanas comme は ou が dans le texte — DeepL les préserve très bien).
    #    On ne filtre PAS par is_french() ici.
    KEY_PAT = re.compile(
        r'(?<![A-Za-z_])(m|note|fr|e|label)\s*:\s*"((?:[^"\\]|\\.)*)"'
    )
    for mo in KEY_PAT.finditer(content):
        add(mo.start(2), mo.end(2), mo.group(2), require_french=False)

    # ── 2. Options o: [...] — traduit uniquement les chaînes sans CJK ────────
    O_PAT  = re.compile(r'\bo\s*:\s*\[([^\]]+)\]')
    STR_PAT = re.compile(r'"((?:[^"\\]|\\.)*)"')
    for om in O_PAT.finditer(content):
        block_start = om.start(1)
        for sm in STR_PAT.finditer(om.group(1)):
            add(block_start + sm.start(1), block_start + sm.end(1), sm.group(1))

    # ── 3. Valeurs dans TIERS = { 1: "...", ... } ───────────────────────────
    TIERS_PAT = re.compile(r'TIERS\s*=\s*\{([^}]+)\}')
    tm = TIERS_PAT.search(content)
    if tm:
        base = tm.start(1)
        for sm in STR_PAT.finditer(tm.group(1)):
            add(base + sm.start(1), base + sm.end(1), sm.group(1))

    result = sorted(hits.values(), key=lambda r: r["start"])
    return result

# ─── Traduction d'un fichier ─────────────────────────────────────────────────
def translate_file(filepath, api_key):
    name = os.path.basename(filepath)
    bar  = "─" * 55
    print(f"\n{bar}")
    print(f"  {name}")
    print(bar)

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    replacements = collect_replacements(content)
    total = len(replacements)
    print(f"  {total} chaînes françaises détectées")

    if total == 0:
        print("  (rien à faire — déjà traduit ?)")
        return 0

    # Batch par 50 (limite DeepL par requête)
    BATCH = 50
    texts = [r["unescaped"] for r in replacements]
    translated_all = []

    for i in range(0, total, BATCH):
        batch = texts[i:i+BATCH]
        n_batch = len(batch)
        batch_num  = i // BATCH + 1
        n_batches  = (total - 1) // BATCH + 1
        print(f"  Lot {batch_num}/{n_batches}  ({n_batch} textes)...", end="", flush=True)
        tr = deepl_translate(batch, api_key)
        translated_all.extend(tr)
        print(" ✓")
        if i + BATCH < total:
            time.sleep(0.4)   # poli envers l'API

    for r, tr in zip(replacements, translated_all):
        r["translated"] = tr

    # Appliquer en ordre inverse pour ne pas décaler les positions
    chars = list(content)
    for r in reversed(replacements):
        replacement = list(escape_js(r["translated"]))
        chars[r["start"]:r["end"]] = replacement

    new_content = "".join(chars)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"  ✓ Fichier mis à jour ({total} remplacements)")
    return total

# ─── Point d'entrée ──────────────────────────────────────────────────────────
def main():
    if len(sys.argv) < 2 or sys.argv[1] in ("-h", "--help"):
        print(__doc__)
        sys.exit(0)

    api_key = sys.argv[1].strip()
    args    = sys.argv[2:]

    if not args or args == ["all"]:
        targets = list(FILES.items())
    else:
        targets = []
        for a in args:
            a = a.lower()
            if a in FILES:
                targets.append((a, FILES[a]))
            else:
                print(f"  ⚠  Niveau inconnu : {a}  (valides : n2 n3 n4 n5)")

    if not targets:
        sys.exit(1)

    grand_total = 0
    for level, path in targets:
        if not os.path.exists(path):
            print(f"\n  ⚠  Introuvable : {path}")
            continue
        grand_total += translate_file(path, api_key)

    print(f"\n{'═'*55}")
    print(f"  ✅  Terminé — {grand_total} chaînes traduites au total")
    print(f"{'═'*55}")
    print()
    print("  Pense à incrémenter les versions dans index.html + sw.js")
    print("  (ex: grammar-n3.js?v=4 et cache n3dojo-v5)")
    print("  pour forcer le rechargement chez les utilisateurs.")
    print()

if __name__ == "__main__":
    main()
