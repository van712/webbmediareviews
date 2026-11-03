// Usage: node scripts/shots.mjs <outDir>   (needs `npm run preview` on :4321)
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import path from "node:path";
const out = process.argv[2] ?? ".";
const b = await chromium.launch();
const og = await b.newPage({ viewport: { width: 1200, height: 630 } });
await og.goto("file://" + path.resolve("scripts/og-image.html"));
await og.waitForTimeout(400);
await og.screenshot({ path: "public/images/og-image.png" });
for (const [name, url, w] of [
  ["home-desktop", "/", 1440], ["home-mobile", "/", 390], ["reviews-desktop", "/reviews/", 1440],
  ["case-desktop", "/case-studies/clean-coast-pressure-washing/", 1440], ["case-mobile", "/case-studies/rks-renovations/", 390],
]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto("http://localhost:4321" + url, { waitUntil: "networkidle" });
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  console.log(name, "horizontal overflow:", overflow);
}
await b.close();
