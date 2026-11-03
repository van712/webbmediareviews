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
| Google reviews (synced, verbatim) | `src/data/google-reviews.json` |
| Review labels (service, business, case study) | `src/data/reviews.ts` |
| Case studies / results | `src/data/case-studies.ts` |
| Contact details, links, nav | `src/data/site.ts` |
| FAQ copy | `src/data/faq.ts` |
| Pages | `src/pages/` |
| Styles (brand colours, fonts) | `src/styles/global.css` |

### Google reviews sync

Reviews come from the Google Business Profile API and update automatically:

- `scripts/sync-google-reviews.mjs` pulls every review, word for word, into `src/data/google-reviews.json`.
- `.github/workflows/sync-reviews.yml` runs it daily. If anything changed it commits the file, and Vercel redeploys. Counts, averages and dates update everywhere on the site.
- To label a new review (which service, which business, which case study), add the reviewer's Google display name to `TAGS` in `src/data/reviews.ts`. Untagged reviews still show; they just have no labels.

One-time setup (the Google side):

1. In Google Cloud, create a project and request **Google Business Profile API** access (Google approves it, usually within a few days). Then enable the *My Business Account Management*, *My Business Business Information* and *Google My Business* APIs.
2. Create an OAuth client (type "Web application", redirect URI `https://developers.google.com/oauthplayground`).
3. In the [OAuth Playground](https://developers.google.com/oauthplayground), tick "Use your own OAuth credentials", authorise the scope `https://www.googleapis.com/auth/business.manage` with the Google account that manages the profile, and exchange for a **refresh token**.
4. Find the IDs: `GBP_CLIENT_ID=… GBP_CLIENT_SECRET=… GBP_REFRESH_TOKEN=… node scripts/sync-google-reviews.mjs --list`
5. Add the 5 values as GitHub repo secrets: `GBP_CLIENT_ID`, `GBP_CLIENT_SECRET`, `GBP_REFRESH_TOKEN`, `GBP_ACCOUNT_ID`, `GBP_LOCATION_ID`. Then run the workflow once from the Actions tab.

Until that's set up, reviews can be added by hand to `google-reviews.json` (word for word).

### Adding images

Put them in `public/images/`, then run `python3 scripts/image-sizes.py` so pages reserve the right space for them (no layout jump).

## Deploy

1. Import the GitHub repo into Vercel. It auto-detects Astro, so no config is needed.
2. Vercel → Project → Settings → Domains: add `webbmediareviews.com.au` (primary) and `www.webbmediareviews.com.au` (redirects to it).
3. In GoDaddy DNS, add the records Vercel shows. These are usually `A @ 76.76.21.21` and `CNAME www cname.vercel-dns.com`.
4. Add the site to Google Search Console and submit `https://webbmediareviews.com.au/sitemap-index.xml`.
