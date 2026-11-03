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

27 static pages, built with Astro and styled to match webbmedia.com.au:

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
- Reviews from non-clients and related parties are excluded, and the site says so publicly. Currently excluded:
  - Giulio and Ben (Venture Ascend partners)
  - Waheeb (prospect)
  - Poppy (personal connection)
  - Liam (another agency)
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

**RKS change:** I replaced RKS's "88.6x ROAS" headline with "$42K job". That 88.6x is the job value divided by only the first $474 of spend, while the account spent $6,101 in total, so it reads as misleading.

**New candidates (not ready yet, so not added):**

1. **KN Exteriors** (Mitch & Oli, Newcastle). 38 leads at $20 in 4 weeks, and Mitch has left a Google review. Revisit in December.
2. **Refined Mobile Detailing** (Macauley, Sippy Downs). 65 leads at $3.09, but from only 8 days and $200 of spend. Revisit in 4–6 weeks.
3. **All Bright Pressure Cleaning** (John). Strong review ("Van the Man"), but no results data yet.
4. **CJM Lawn Care** (Jessica). Website plus a review. Needs lead numbers.
5. **Lovewood Designs**, **QLD Concrete Constructions**, **George Painting** and **Maroochydore Tiling**. Too early.
6. Website-only builds (All Powered Electrical, Kisses Detailing, Taylor Epoxy, Mystic Tree, Bird of Paradise). These could become a "websites we've built" gallery once you've checked each one is live.

**Leave out:** The Experts Group (churned after a late launch), HPS Exterior Cleaning (went quiet), and anything connected to the Vex Media dispute.

**Launch blocker: the same client has different numbers in different docs.** Before launch, choose one figure for each client and keep its source (a screenshot or an email):

| Client | Versions found |
|---|---|
| Clean Coast | $900 → $18K, or $380 → $11K |
| Richie's | $50K lined up, $196 → $6.5K, or $140K in 4 months |
| Cleana | $19K → $77K, $1.1K → $8.2K, or $21K → $115K |
| RKS | $474 → $42K job, $4.7K → $38K, or $5K → $92K |
| BrisBathCo | $1.1M in quotes / $85K, or 2 deals at 16x |
| Elite Detail | +30% conversion, or +62% |
| Wild Landscape Co | $110K in 6 months, or 8 months, or "in quotes" |

Different numbers may all be true at different dates. If so, put a date on each one.

**Churned clients still featured:** IQ, All Pro, RKS and Reset have ended, and Mobile Mates has an unpaid balance. Their reviews and results are real, but message each one before launch to check they're still happy to be shown. It's the right thing to do, and it protects you if someone complains.

---

## 4. Phases

**Phase 1 — launch**

1. Create the repo, Vercel project and DNS.
2. Set up the review sync.
3. Settle the number conflicts above.
4. Submit to Google Search Console and Bing Webmaster Tools, and link the site from the webbmedia.com.au footer.

**Phase 2 — weeks 2–4**

1. Review push to every current client: KN, All Bright, Pristine, Richie's, Cleana, Clean Coast, CAF, Lovewood, CJM.
2. Set up ProductReview.com.au, Trustpilot and Clutch profiles.
3. Ask permission to quote the praise found in emails (list below).
4. Add video transcripts.

**Phase 3 — months 2–3**

1. Add KN Exteriors and Refined Mobile Detailing as case studies.
2. Add industry review pages (pressure washing, detailing, painting) once each has 3+ reviews.
3. Post a monthly "results this month" update.

**Email praise worth asking permission for:**

- John (Euro Chiptuning / IGLA), 3 Oct: "Mate, what can I say?! You have absolutely smashed it. I absolutely love it."
- Sam (CAF), 28 Sep: "This month's revenue from the ads will be $8,114.32 … Super happy with how they went."
- Hogan (Clean Coast), 22 Jun: "Brooo! Those are sick man, super happy with them!"

---

## 5. Also worth fixing on webbmedia.com.au

These are on your main site, not this one, but the same ACCC rules apply:

- `/bootcamp` shows six **placeholder testimonials with stock photos** ("Ryan Mitchell, Plumber"). It's noindexed, but anyone can still see it. Remove them.
- The case-study quotes in `src/constants/projects.ts` that can't be traced to a client should be backed up or removed: Joe, Munya, Quinton, Christian, Rabih, and the three "Team" quotes.
- Ask Poppy to remove her two Google reviews. Google's rules ban reviews from family members, and a profile can be penalised for them.

I can make these changes in the `webbmedia` repo whenever you say.
