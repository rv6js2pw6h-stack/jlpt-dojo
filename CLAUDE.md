# JLPT Study — État du projet

## Structure
```
/Users/bilal/JLPT study/
  index.html + app.js + grammar-n2.js + styles.css + sw.js + manifest.json  ← N2 (racine)
  n3/   ← N3 道場 (182 pts, 365 questions, cache n3dojo-v3, grammar v3)
  n4/   ← N4 道場 (132 pts, 264 questions, cache n4dojo-v2, grammar v2)
  n5/   ← N5 道場 (84 pts,  218 questions, cache n5dojo-v2, grammar v2)
```

## Chaque sous-dossier contient
`index.html` `app.js` `styles.css` `grammar-nX.js` `manifest.json` `sw.js` + icônes copiées.

## Points clés
- **Format identique au N2** — seul le niveau (brand-mark, STORE_KEY, window.NX_GRAMMAR, export filename) change.
- **Stockage isolé** : `n3dojo.v1` / `n4dojo.v1` / `n5dojo.v1` en localStorage.
- **SW scopés** : `/n3/` `/n4/` `/n5/` — pas de conflit avec le SW racine N2.
- Toutes les vues testées et validées : dashboard, quiz SRS, flashcards, défi chrono, référence + recherche, thème, réglages, manifest, SW.
- **Commit** : `7dce9e5` sur `main` — 27 fichiers, 12 486 insertions.

## Serveur local
```bash
cd "/Users/bilal/JLPT study" && python3 -m http.server 8123
# → http://localhost:8123/n3/  http://localhost:8123/n4/  http://localhost:8123/n5/
```
Preview tool : serverId `dc0b1f43-284e-4580-8664-106176568cf5` (launch.json : n2dojo, port 8123).

## Catégories grammaire (identiques N3/N4/N5)
`particle` `contrast` `time` `condition` `modality` `express`

## Si quelque chose est cassé
1. Purger SW + caches dans le navigateur (ou via eval).
2. Recharger avec `?fresh=timestamp`.
3. Relancer python3 http.server si mort.
