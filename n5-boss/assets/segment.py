#!/usr/bin/env python3
"""Segmente la planche tanuki (RGBA, fond transparent) en parties individuelles."""
import numpy as np
from PIL import Image
import os, json

SRC = "source/tanuki-sheet.png"
OUT = "parts"
os.makedirs(OUT, exist_ok=True)

im = Image.open(SRC).convert("RGBA")
arr = np.array(im)
H, W = arr.shape[:2]
alpha = arr[:, :, 3]
mask = alpha > 110  # seuil élevé : ne garde que le corps solide de chaque partie

# --- downsample par moyenne puis seuil (facteur f) ---
f = 4
hs, ws = H // f, W // f
dens = mask[:hs * f, :ws * f].reshape(hs, f, ws, f).mean(axis=(1, 3))
small = dens > 0.5

# --- érosion binaire (casse les ponts fins de fourrure entre parties) ---
def erode(m):
    e = m.copy()
    e[1:, :] &= m[:-1, :]; e[:-1, :] &= m[1:, :]
    e[:, 1:] &= m[:, :-1]; e[:, :-1] &= m[:, 1:]
    return e
sm = erode(small)

# --- composantes connexes (union-find, 8-connexité) ---
parent = {}
def find(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]; x = parent[x]
    return x
def union(a, b):
    ra, rb = find(a), find(b)
    if ra != rb: parent[rb] = ra

labels = -np.ones((hs, ws), dtype=int)
nid = 0
for y in range(hs):
    for x in range(ws):
        if not sm[y, x]:
            continue
        nb = []
        for dy, dx in ((-1, -1), (-1, 0), (-1, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < hs and 0 <= nx < ws and labels[ny, nx] >= 0:
                nb.append(labels[ny, nx])
        if not nb:
            parent[nid] = nid; labels[y, x] = nid; nid += 1
        else:
            m = min(nb); labels[y, x] = m
            for o in nb: union(m, o)

# applique les racines + collecte bbox/area
roots = {}
for y in range(hs):
    for x in range(ws):
        l = labels[y, x]
        if l < 0: continue
        r = find(l); labels[y, x] = r
        b = roots.get(r)
        if b is None:
            roots[r] = [x, y, x, y, 1]
        else:
            b[0] = min(b[0], x); b[1] = min(b[1], y)
            b[2] = max(b[2], x); b[3] = max(b[3], y); b[4] += 1

# garde les composantes assez grandes
comps = [b for b in roots.values() if b[4] * f * f > 5000]
# tri par position de lecture (ligne puis colonne)
comps.sort(key=lambda b: (round((b[1]) / 6), b[0]))

boxes = []
for i, (x0, y0, x1, y1, area) in enumerate(comps):
    # repasse en pleine résolution + padding
    pad = 3
    X0 = max(0, (x0 - pad) * f); Y0 = max(0, (y0 - pad) * f)
    X1 = min(W, (x1 + 1 + pad) * f); Y1 = min(H, (y1 + 1 + pad) * f)
    crop = arr[Y0:Y1, X0:X1]
    Image.fromarray(crop, "RGBA").save(f"{OUT}/part_{i:02d}.png")
    boxes.append({"i": i, "x": int(X0), "y": int(Y0), "w": int(X1 - X0), "h": int(Y1 - Y0), "area": int(area * f * f)})

json.dump(boxes, open(f"{OUT}/boxes.json", "w"), indent=1)
print(f"{len(boxes)} parties extraites")
for b in boxes:
    print(f"  part_{b['i']:02d}  {b['w']}x{b['h']}  @({b['x']},{b['y']})  area~{b['area']}")
