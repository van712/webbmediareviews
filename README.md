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
2. On the OAuth consent screen, set the app to **In production**, not Testing. In Testing mode the refresh token expires after 7 days and the sync stops. Then create an OAuth client (type "Web application", redirect URI `https://developers.google.com/oauthplayground`).
3. In the [OAuth Playground](https://developers.google.com/oauthplayground), tick "Use your own OAuth credentials", authorise the scope `https://www.googleapis.com/auth/business.manage` with the Google account that manages the profile, and exchange for a **refresh token**.
4. Add 3 GitHub repo secrets: `GBP_CLIENT_ID`, `GBP_CLIENT_SECRET` and `GBP_REFRESH_TOKEN`. The script finds the "Webb Media" location by itself. (`GBP_ACCOUNT_ID` and `GBP_LOCATION_ID` are optional overrides.) Then run the workflow once from the Actions tab.

Until that's set up, reviews can be added by hand to `google-reviews.json` (word for word).

### Adding images

Put them in `public/images/`, then run `python3 scripts/image-sizes.py` so pages reserve the right space for them (no layout jump).

## Deploy

1. **Vercel:** in the "Webb Media's projects" team, click Add New → Project, import `van712/webbmediareviews` and press Deploy. It auto-detects Astro, so no settings are needed.
2. **Domains:** go to Project → Settings → Domains and add both domains:
   - `webbmediareviews.com.au` (primary)
   - `www.webbmediareviews.com.au`, set to redirect to the primary
3. **GoDaddy DNS:** go to My Products → `webbmediareviews.com.au` → DNS. Make these changes:
   - **Delete** both existing `A @` records: `3.33.130.190` and `15.197.148.33`. These are GoDaddy's parking page.
   - **Add** these 2 records:

     | Type | Name | Value | TTL |
     |---|---|---|---|
     | A | @ | `216.150.1.1` | 1 hour |
     | A | @ | `216.150.16.1` | 1 hour |

   - **Edit** the existing `CNAME www` record. Change its value from `@` to `9d3fb10ff2c303a0.vercel-dns-016.com`.
   - If **Forwarding** is turned on for the domain, turn it off.

   These values come from Vercel's recommended config for this domain (3 Nov 2026, for the webbmediareviews project). If Vercel's Domains page shows different values, use the ones it shows.
4. **Google Search Console:** add the site and submit `https://webbmediareviews.com.au/sitemap-index.xml`.
