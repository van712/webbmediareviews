# webbmediareviews.com.au: gameplan

**Goal:** when anyone searches "Webb Media reviews" (or "Van Topham reviews", "is Webb Media legit", "Webb Media results"), page one is full of real, checkable proof: this site, webbmedia.com.au, the Google Business Profile and third-party review profiles.

**Opportunity:** a search for `"Webb Media" reviews` currently shows only unrelated businesses, mostly overseas. Nobody owns it yet.

---

## 1. Positioning: why the site doesn't pretend to be independent

The site is styled as a neutral proof hub: no sales pitch, no "book a call" buttons, and every claim links to its source. It does **not** pretend a third party made it. The footer says Webb Media runs it, and `/how-we-source-reviews/` explains the rules.

Why not disguise it:

- **Australian Consumer Law.** Making a business-run review site look independent is misleading conduct under s18. The ACCC has fined businesses for exactly this, and for showing reviews from related parties.
- **Google.** Sites built to look like independent reviews of their owner fall under Google's deceptive-practices spam rules. If Google spots it, it can drop the site and hurt webbmedia.com.au too.
- **It backfires.** One WHOIS lookup or competitor post saying "Webb Media runs its own fake review site" would rank for your brand name for years.

A transparent site still ranks, and the trust comes from the proof being checkable.

## 2. What's built

26 static pages, built with Astro and styled to match webbmedia.com.au:

- Home
- All reviews, plus review pages for Facebook ads and for website design
- 15 case studies
- Video testimonials
- About Van
- Is Webb Media legit?
- How reviews are sourced
- Leave a review (noindex)

### Reviews auto-update

A GitHub Action runs every day. It pulls every review from the Google Business Profile API, word for word, into `src/data/google-reviews.json` and commits it. Vercel then redeploys, so counts, averages and dates update by themselves. The setup steps are in the README.

A Google review widget (Elfsight, Trustindex, etc.) wouldn't do this job. It loads inside an iframe or script, so Google doesn't count the text as part of your page, and the reviews would add nothing to SEO.

### Trust rules built into the code

- Every written client review is shown, whatever its rating.
- All 24 Google reviews are loaded from Van's paste (3 Nov), with dates and Webb Media's replies. **19 client reviews are shown.** Reviews from non-clients and related parties are excluded, and the site says so publicly. The excluded 5 are:
  - Giulio and Ben (Venture Ascend partners)
  - Waheeb (prospect)
  - Poppy (personal connection)
  - Liam (another agency)
- The site's review count and 5.0 average are worked out from the 19 shown, not Google's headline number.
- New reviews are tagged and linked: Nick Quinlan (Pristine, now the home page quote), Mitch Newton (KN Exteriors), John Kearns (All-Bright Pressure Cleaning) and Jessica Vella (CJM Lawn Care).
- Case-study quotes that only appear on webbmedia.com.au, with no email or video to back them up, are left off. These are the quotes for Joe, Munya, Quinton, Christian, Rabih and Nick & Matt, and the three "Team" quotes.
- Each Meta ads case study has a "Checked in Meta Ads Manager (Nov 2026)" box with lifetime spend, leads and cost per lead.

---

## 3. Case study audit (Ads Manager, Gmail, Drive, GHL, Nov 2026)

**Already on the site (15):** RKS, Pristine, Clean Coast, CAF, Richie's, Mobile Mates, Cleana, IQ, All Pro, Reset, BrisBathCo, Wild Landscape Co, Elite Detail, Spray Pave Perth, Lindsay Catlin Fencing.

**Verified in Ads Manager:**

| Client | Total spend | Leads | Cost per lead | Note |
|---|---|---|---|---|
| Cleana Carpets | $38,962 | 4,238 (+135 calls) | $9.19 | Strongest figures, still running |
| Pristine Pressure Washing | $8,051 | 575 | $14.00 | |
| Clean Coast Pressure Washing | $3,565 | 422 | $8.45 | |
| CAF Pressure Washing | $1,200 | 109 | $11.01 | |
| Richie's Painting | $2,511 | 120 | $20.92 | |
| RKS Renovations | $6,101 | 83 | $73.51 | |
| All Pro Pressure Washing | | 145 (2026 campaign) | $72.64 → $22.12 | Before vs after Webb Media |

**New candidates (not ready yet, so not added):**

1. **KN Exteriors** (Mitch & Oli, Newcastle). 38 leads at $20 in 4 weeks, and Mitch has left a Google review. Revisit in December.
2. **Refined Mobile Detailing** (Macauley, Sippy Downs). 65 leads at $3.09, but from only 8 days and $200 of spend. Revisit in 4–6 weeks.
3. **All Bright Pressure Cleaning** (John). Strong review ("Van the Man"), but no results data yet.
4. **CJM Lawn Care** (Jessica). Website plus a review. Needs lead numbers.
5. **Lovewood Designs**, **QLD Concrete Constructions**, **George Painting** and **Maroochydore Tiling**. Too early.
6. Website-only builds (All Powered Electrical, Kisses Detailing, Taylor Epoxy, Mystic Tree, Bird of Paradise). These could become a "websites we've built" gallery once you've checked each one is live.

**Leave out:** The Experts Group (churned after a late launch), HPS Exterior Cleaning (went quiet), and anything connected to the Vex Media dispute.

**Results chosen (3 Nov 2026).** Where Webb Media's docs disagreed, each case study uses the figure with the strongest source. The order is: the client's own words, then Meta Ads Manager, then Van's latest dated record. The same figures are used on webbmedia.com.au.

| Client | Figure used | Source |
|---|---|---|
| Pristine | $50K a month on about $100 a day; revenue 4x in the first 3 months; 575 leads at $14 | Van (3 Nov; matches Oct spend in Ads Manager); Nick's review |
| CAF | $12,288 of jobs from $1,200 in ads (10x); 109 leads | Sam's Aug, Sep and Oct revenue emails, totalled; Ads Manager spend |
| Richie's | $50K lined up in month one; booked out 5 months ahead; $6.5K closed from the first $196 | Van (3 Nov); 16 Jul record |
| Cleana | $115K revenue from the $21K "Ad Launch" campaign; 4,238 leads at $9.19 | 20 Oct record; campaign spend matches Ads Manager |
| RKS | $92K of work from $6,101 total spend (15x); the $42K job came within the first $474 | 20 Oct record; Ads Manager |
| Wild Landscape Co | $30K in the first week; $110K in the first 8 months | Results deck |
| Clean Coast | $18K in the first month from $900 | Matches July spend in Ads Manager |
| BrisBathCo | $1.1M in quotes in 6 months; $85K in month one | Proof Bank |
| Elite Detail | +30% conversion | The lower of two figures, so it's safe if anyone checks |

**Featured clients:** Van confirmed (3 Nov) that every client shown, including those who have finished with Webb Media, is happy to be featured.

---

## 4. Phases

**Phase 1 — launch**

1. ~~Create the repo.~~ Done.
2. Import the project into Vercel and add the GoDaddy DNS records (see the README).
3. Set up the review sync.
4. ~~Settle the number conflicts.~~ Done.
5. Submit to Google Search Console and Bing Webmaster Tools.
6. Merge the webbmedia.com.au fixes branch, which also adds the footer link to this site.

**Phase 2 — weeks 2–4**

1. Review push to every current client: KN, All Bright, Pristine, Richie's, Cleana, Clean Coast, CAF, Lovewood, CJM.
2. Set up ProductReview.com.au, Trustpilot and Clutch profiles.
3. Add video transcripts.

**Phase 3 — months 2–3**

1. Add KN Exteriors and Refined Mobile Detailing as case studies.
2. Add industry review pages (pressure washing, detailing, painting) once each has 3+ reviews.
3. Post a monthly "results this month" update.

**Email quotes in use** (verbatim, permission given 3 Nov): Sam (CAF) and Hogan (Clean Coast) on their case studies, and John (Euro Chiptuning / IGLA) on the IGLA card.

---

## 5. Fixes on webbmedia.com.au (approved 3 Nov)

These are on branch `fix/verified-results-and-reviews` in the `webbmedia` repo:

- The same result figures as this site, everywhere they appear.
- The untraceable case-study quotes are replaced with the clients' real Google reviews.
- The 6 placeholder bootcamp testimonials are removed.
- The Google reviews list is updated, with related-party reviews excluded.
- A footer link and schema `sameAs` pointing to this site.

Still for Van: ask Poppy to remove her Google reviews. Google bans reviews from family members, and a profile can be penalised for them.
