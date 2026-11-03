# webbmediareviews.com.au: gameplan

**Goal:** when anyone searches "Webb Media reviews" (or "Van Topham reviews", "is Webb Media legit", "Webb Media results"…), page one is full of Webb Media's own proof: this site, the main site, the Google Business Profile and third-party review profiles.

**Good news:** a search for `"Webb Media" reviews` today shows nothing relevant. It's a mix of unrelated businesses (Webbmedia Group in the US, Webb Marketing Services, etc). Nobody owns this search yet, so a focused site on an exact-match domain should rank quickly once it's indexed and linked from webbmedia.com.au.

---

## 1. What's built (v1, in this repo)

25 static pages, built with Astro, styled to match webbmedia.com.au (black, Webb Media red, Satoshi font).

| Page | Targets |
|---|---|
| `/` | webb media reviews, webb media testimonials |
| `/reviews/` | all 18 Google reviews, word for word |
| `/reviews/facebook-ads/` | webb media facebook ads reviews |
| `/reviews/website-design/` | webb media website / web design reviews |
| `/case-studies/` + 15 case study pages | webb media results, "<client> webb media" |
| `/video-testimonials/` | webb media video testimonials |
| `/about/` | van topham, van topham reviews |
| `/is-webb-media-legit/` | is webb media legit, webb media scam |
| `/leave-a-review/` | (noindex) the link you send clients for reviews |

SEO plumbing that's already in:
- A unique title and description per page, canonical URLs, a sitemap, robots.txt and an Open Graph share image.
- Organization schema using the **same `@id` as webbmedia.com.au**, so Google treats both sites as one entity.
- Breadcrumb schema, FAQ schema, and Person schema for Van.
- Static HTML with no client-side framework, so pages load fast. Videos only load when someone clicks play.

### Trust rules (important)

- **Reviews are word for word from Google.** Typos stay, and every review links to Google.
- **No made-up or reworded quotes.** The case-study quotes on webbmedia.com.au that don't match a Google review or video (Joe, Munya, Quinton, Christian, Rabih, Nick & Matt, and the "Team" quotes for BrisBathCo, Wild Landscape and Elite Detail) are **left off** this site. If they're real (from a text, email or video), send me the source and they go back on.
- **No review star markup.** Google doesn't show stars for reviews a business hosts about itself ("self-serving reviews"). Faking it risks a penalty. The stars that matter appear on the Google Business Profile.

---

## 2. Design direction

- **Look:** the same brand as webbmedia.com.au, so visitors know it's you. Dark background, red accents, gold Google stars.
- **Feel:** a "proof wall". The reviews and numbers do the talking. The copy is short, plain English and Aussie, written in the same voice as the main site.
- **Every page ends in one action:** book a call on webbmedia.com.au. This site is the trust step; the main site does the selling.
- **Later polish (v2):** real photos of Van and clients on the job, logo marquee, short looping clips from the video testimonials, and a "latest review" ticker.

---

## 3. Content plan

**Phase 1 — launch (this week)**
1. Create the repo, deploy to Vercel and point the domain (see section 5).
2. Submit to Google Search Console and Bing Webmaster Tools, and submit `sitemap-index.xml`.
3. Add a link from webbmedia.com.au to this site: footer "Reviews" plus a "Read all our reviews" link on the testimonials section. I can do this in the `webbmedia` repo.
4. Point a few "Website by Webb Media" credits on client sites at `webbmediareviews.com.au/reviews/`.

**Phase 2 — more proof (weeks 2–4)**
1. **Review push:** ask every current and past client for a Google review, using `/leave-a-review/` as the link. Ask them to mention their trade, their suburb and what you did. Target: 18 → 40 reviews.
2. **Third-party profiles:** for "brand + reviews" searches, Google loves review platforms. Set up and collect a few reviews on each, and they'll rank alongside this site and take up more of page one:
   - ProductReview.com.au
   - Trustpilot
   - Clutch
   - Facebook page reviews
   - Hotfrog / Yellow Pages / True Local, using the same name, phone and website everywhere
3. **Client interviews:** a 10-minute call or voice memo per case study, written up as a unique story with real quotes. This is the biggest SEO upgrade, because the case studies are currently close copies of the main site's.
4. **Video transcripts** under each video testimonial: unique text, plus VideoObject schema (which needs upload dates).

**Phase 3 — grow (months 2–3)**
1. Industry pages once each has 3+ reviews, e.g. `/reviews/pressure-washing/`, `/reviews/painters/` and `/reviews/renovations/`.
2. Location pages, but only with real local reviews, e.g. "Webb Media Gold Coast reviews".
3. A "Results this month" log: one short post per client win, which keeps the site fresh.
4. Re-sync Google reviews monthly (copy new ones into `src/data/reviews.ts`). This could be automated later with the Google Business Profile API.

**Brand-name note:** there are other "Webb Media" and "Webbmedia" businesses overseas. Always pair the name with *Australia*, *tradies* or *Van Topham* in titles and profiles, so Google knows which Webb Media this is. The site already does this.

---

## 4. What I need from Van

In priority order:

1. **GitHub repo.** Create an empty private repo `van712/webbmediareviews` (no README), or reconnect GitHub at claude.ai/connect-github. Then I'll push this code.
2. **Hosting go-ahead.** OK to put it on Vercel in the same team as webbmedia.com.au?
3. **GoDaddy DNS.** Once Vercel is set up, add the 2 records it shows in GoDaddy → My Products → DNS. They're usually:
   - `A @ 76.76.21.21`
   - `CNAME www cname.vercel-dns.com`

   Use the exact values Vercel gives you.
4. **Google reviews.**
   - Any new reviews since October? Paste them or send a screenshot.
   - The direct "write a review" link: Google Business Profile → *Ask for reviews*.
5. **Confirm who's who:**
   - Is Munya Johnstone from All Pro Pressure Washing?
   - Is Christian Greenhalgh from Reset Exterior Cleaning?
   - Is TnbQuan Quinton from IQ Pressure Washing?
   - Is John Sav from Euro Chiptuning?

   If yes, I'll link each review to that client's results.
6. **The case-study quotes** listed in section 1: are they real? If so, send the texts, emails or videos.
7. **Client OK.** Are all named clients happy to be featured? They're already on webbmedia.com.au, so this is likely yes.
8. **Photos:**
   - Van, ideally a front-on shot.
   - Van with clients or on jobs.
   - Before/after photos from client campaigns.
   - Any more ad or result screenshots.
9. **Video details:**
   - Upload dates for the 4 YouTube Shorts.
   - Any other video testimonials.
   - Is the Instagram one OK to embed?
10. **Profile links:**
    - The Facebook page.
    - Any existing Trustpilot, ProductReview or Clutch listings.
    - Your base suburb or city.
11. **Selling points to confirm.** Eddie's review contrasts you with "companies with lock in contracts". Is it true that Webb Media has no lock-in contracts? If so, that's a strong line to add. Also confirm the "performance guarantee" from the main site's FAQ.
