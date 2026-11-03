# webbmediareviews.com.au

Reviews, testimonials and client results for [Webb Media](https://www.webbmedia.com.au). Static site built with [Astro](https://astro.build), hosted on Vercel.

See **[GAMEPLAN.md](./GAMEPLAN.md)** for the SEO, design and content plan.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Where things live

| What | File |
|---|---|
| Google reviews (verbatim only) | `src/data/reviews.ts` |
| Case studies / results | `src/data/case-studies.ts` |
| Contact details, links, nav | `src/data/site.ts` |
| FAQ copy | `src/data/faq.ts` |
| Pages | `src/pages/` |
| Styles (brand colours, fonts) | `src/styles/global.css` |

### Adding a new Google review

1. Copy the review **word for word** into `REVIEWS` in `src/data/reviews.ts` (keep typos).
2. Tag its `services`, and add `business` / `caseStudy` if you know them for sure.
3. Update `REVIEWS_LAST_SYNCED` in `src/data/site.ts`.
4. Push. Vercel redeploys automatically. The review count updates everywhere, apart from the share image (step 5).
5. If the count changed, update the number in `scripts/og-image.html` and run `node scripts/shots.mjs` (with `npm run preview` running) to regenerate the share image.

### Adding images

Put them in `public/images/`, then run `python3 scripts/image-sizes.py` so pages reserve the right space for them (no layout jump).

## Deploy

1. Import the GitHub repo into Vercel. It auto-detects Astro, so no config is needed.
2. Vercel → Project → Settings → Domains: add `webbmediareviews.com.au` (primary) and `www.webbmediareviews.com.au` (redirects to it).
3. In GoDaddy DNS, add the records Vercel shows. These are usually `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`.
4. Add the site to Google Search Console and submit `https://webbmediareviews.com.au/sitemap-index.xml`.
