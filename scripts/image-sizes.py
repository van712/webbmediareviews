"""Writes src/data/image-sizes.json: {"/images/...": [width, height]} for every image in public/images.
Run after adding images: python3 scripts/image-sizes.py"""
import json, pathlib
from PIL import Image
root = pathlib.Path(__file__).resolve().parent.parent
out = {}
for p in sorted((root / "public/images").rglob("*")):
    if p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}:
        with Image.open(p) as im:
            out["/" + str(p.relative_to(root / "public"))] = list(im.size)
(root / "src/data/image-sizes.json").write_text(json.dumps(out, indent=2) + "\n")
print(len(out), "images")
