#!/usr/bin/env python3
"""Nettoie chaque partie : ne garde que la plus grande composante connexe
(supprime les fragments parasites des parties voisines), puis recadre serré."""
import numpy as np
from PIL import Image
import glob, os

for fp in sorted(glob.glob("parts/part_*.png")):
    im = Image.open(fp).convert("RGBA")
    a = np.array(im)
    alpha = a[:, :, 3]
    mask = alpha > 60
    H, W = mask.shape
    ys, xs = np.nonzero(mask)
    if len(ys) == 0:
        continue
    order = -np.ones((H, W), dtype=np.int64)
    for k in range(len(ys)):
        order[ys[k], xs[k]] = k
    parent = np.arange(len(ys), dtype=np.int64)

    def find(x):
        root = x
        while parent[root] != root:
            root = parent[root]
        while parent[x] != root:
            parent[x], x = root, parent[x]
        return root

    for k in range(len(ys)):
        y, x = ys[k], xs[k]
        if x > 0 and order[y, x - 1] >= 0:
            ra, rb = find(k), find(order[y, x - 1])
            if ra != rb: parent[rb] = ra
        if y > 0 and order[y - 1, x] >= 0:
            ra, rb = find(k), find(order[y - 1, x])
            if ra != rb: parent[rb] = ra

    roots = np.array([find(k) for k in range(len(ys))])
    vals, counts = np.unique(roots, return_counts=True)
    keep = vals[counts.argmax()]
    drop = roots != keep
    a[ys[drop], xs[drop], 3] = 0  # efface les autres blobs

    # recadrage serré sur ce qui reste
    al2 = a[:, :, 3] > 16
    ny, nx = np.nonzero(al2)
    y0, y1, x0, x1 = ny.min(), ny.max() + 1, nx.min(), nx.max() + 1
    a = a[y0:y1, x0:x1]
    Image.fromarray(a).save(fp)
    print(f"{os.path.basename(fp)}  -> {a.shape[1]}x{a.shape[0]}  (gardé {counts.max()} px)")
print("nettoyage terminé")
