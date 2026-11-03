/**
 * Client results. Numbers and descriptions come from Webb Media's own case
 * studies (van712/webbmedia src/constants/projects.ts).
 *
 * Quotes: only a client's own public words go on this site. Each case study
 * links to that client's Google review (`reviewId`) or video testimonial
 * instead of a written quote. Quotes on the main site that aren't on Google or
 * on video are left out until the client confirms them (see GAMEPLAN.md).
 */

export interface CaseStudy {
    slug: string;
    company: string;
    /** First name(s) of the owner, as used on the main site. */
    client: string;
    industry: string;
    service: "facebook-ads" | "websites";
    /** Headline result, used in titles and cards. */
    headline: string;
    stat: string;
    description: string;
    whatWasDone: string;
    metrics: { label: string; value: string }[];
    highlights: string[];
    logo?: string;
    /** Ads Manager / analytics screenshots, plus client messages. */
    proof: { src: string; alt: string }[];
    siteImage?: string;
    siteUrl?: string;
    /** Google review from this client (verbatim, see reviews.ts). */
    reviewId?: string;
    video?: { url: string; youtubeId?: string; platform: "YouTube" | "Instagram" };
    mainSiteUrl: string;
    /** Lifetime numbers read straight from the client's Meta Ads Manager account. */
    adsManager?: { asOf: string; items: { label: string; value: string }[]; note?: string };
}

const main = (slug: string) => `https://www.webbmedia.com.au/case-studies/${slug}`;

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "rks-renovations",
        company: "RKS Renovations",
        client: "Rabih",
        industry: "Renovations",
        service: "facebook-ads",
        headline: "$42,000 renovation job from $474 in ad spend",
        stat: "$42K job",
        description: "Rabih closed a $42,000 renovation job from a lead that came in within his first $474 of ad spend.",
        whatWasDone:
            "Meta ads aimed at homeowners planning a proper renovation, not people chasing the cheapest quote. The ads used video walk-throughs of RKS's finished jobs so people could see the standard of work before they enquired.",
        metrics: [
            { label: "Spend when the job came in", value: "$474" },
            { label: "Job value", value: "$42,000" },
            { label: "Leads to date", value: "83" },
        ],
        highlights: ["$42,000 job within the first $474 of ad spend", "Video walk-throughs of finished jobs", "Aimed at homeowners with real budgets"],
        logo: "/images/logos/rks-renovations.png",
        proof: [
            { src: "/images/proof/rks-renovations.png", alt: "RKS Renovations Meta Ads Manager results" },
            { src: "/images/proof/rks-renovations-2.png", alt: "RKS Renovations ad spend and results" },
            { src: "/images/proof/messages-rks-renovations-1.jpg", alt: "Message from RKS Renovations to Van" },
        ],
        mainSiteUrl: main("rks-renovations"),
        adsManager: { asOf: "November 2026", items: [{ label: "Total ad spend", value: "$6,101" }, { label: "Leads", value: "83" }, { label: "Cost per lead", value: "$73.51" }], note: "The $42,000 job came in within the first $474 of spend. The campaign kept running after that." },
    },
    {
        slug: "pristine-pressure-washing",
        company: "Pristine Pressure Washing",
        client: "Nick & Matt",
        industry: "Pressure washing",
        service: "facebook-ads",
        headline: "$30K a month in added revenue from $50 a day in ad spend",
        stat: "20x ROAS",
        description: "Added a consistent $30,000 a month in revenue for Nick and Matt from just $50 a day in ad spend, a 20x return.",
        whatWasDone:
            "Built a repeatable local campaign around before/after pressure washing content, tight suburb targeting and a quick quote flow. Kept the daily budget small and let the results compound month after month.",
        metrics: [
            { label: "Ad spend", value: "$50/day" },
            { label: "Monthly revenue", value: "$30,000" },
            { label: "Return on spend", value: "20x" },
        ],
        highlights: ["$30,000 a month, consistently", "$50 a day in ad spend", "20x return on ad spend", "Before/after creative that sells itself"],
        logo: "/images/logos/pristine-pressure-washing.png",
        proof: [
            { src: "/images/proof/pristine-pressure-washing.png", alt: "Pristine Pressure Washing Meta Ads Manager results" },
            { src: "/images/proof/messages-pristine-pressure-washing-1.jpg", alt: "Message from Pristine Pressure Washing to Van" },
            { src: "/images/proof/messages-pristine-pressure-washing-2.jpg", alt: "Second message from Pristine Pressure Washing" },
        ],
        video: { url: "https://www.youtube.com/shorts/ipMNRP0meKE", youtubeId: "ipMNRP0meKE", platform: "YouTube" },
        mainSiteUrl: main("pristine-pressure-washing"),
        adsManager: { asOf: "November 2026", items: [{ label: "Total ad spend", value: "$8,051" }, { label: "Leads", value: "575" }, { label: "Cost per lead", value: "$14.00" }] },
    },
    {
        slug: "clean-coast-pressure-washing",
        company: "Clean Coast Pressure Washing",
        client: "Hogan",
        industry: "Pressure washing",
        service: "facebook-ads",
        headline: "$18K in the first month from $900 in ad spend",
        stat: "20x ROAS",
        description: "Generated $18,000 in pressure washing jobs in Hogan's first month from $900 in ad spend, a 20x return.",
        whatWasDone:
            "Launched from a standing start with local Meta Ads, simple offer-led creative and a fast enquiry flow. Focused the budget on the suburbs Hogan actually wanted to work in and followed up every lead the same day.",
        metrics: [
            { label: "Ad spend", value: "$900" },
            { label: "Revenue (month 1)", value: "$18,000" },
            { label: "Return on spend", value: "20x" },
        ],
        highlights: ["$18,000 in the first month", "$900 total ad spend", "20x return on ad spend", "Same-day lead follow-up"],
        logo: "/images/logos/clean-coast-pressure-washing.jpg",
        proof: [
            { src: "/images/proof/clean-coast-pressure-washing.png", alt: "Clean Coast Pressure Washing Meta Ads Manager: 317 leads at $8.12 each" },
            { src: "/images/proof/messages-clean-coast-pressure-washing-1.jpg", alt: "Message from Clean Coast Pressure Washing to Van" },
        ],
        reviewId: "hogan-radic",
        video: { url: "https://www.youtube.com/shorts/XWom9IXqob4", youtubeId: "XWom9IXqob4", platform: "YouTube" },
        mainSiteUrl: main("clean-coast-pressure-washing"),
        adsManager: { asOf: "November 2026", items: [{ label: "Total ad spend", value: "$3,565" }, { label: "Leads", value: "422" }, { label: "Cost per lead", value: "$8.45" }] },
    },
    {
        slug: "caf-pressure-washing",
        company: "CAF Pressure Washing",
        client: "Sam",
        industry: "Pressure washing",
        service: "facebook-ads",
        headline: "$0 to $15K in his first month",
        stat: "17x ROAS",
        description: "Took Sam from $0 to $15,000 in his first month of running ads, a 17x return on ad spend.",
        whatWasDone:
            "Started from nothing: no past customers, no reviews. Built the offer, the creative and the enquiry flow from scratch and ran local Meta Ads until the calendar filled.",
        metrics: [
            { label: "Starting point", value: "$0" },
            { label: "Revenue (month 1)", value: "$15,000" },
            { label: "Return on spend", value: "17x" },
        ],
        highlights: ["$0 to $15,000 in month one", "17x return on ad spend", "Built from scratch, no prior customers", "Local suburb targeting"],
        logo: "/images/logos/caf-pressure-washing.jpg",
        proof: [{ src: "/images/proof/caf-pressure-washing.png", alt: "CAF Pressure Washing Meta Ads Manager results" }],
        reviewId: "sam-hoffensetz",
        video: { url: "https://www.youtube.com/shorts/5wAWkU_4ZQo", youtubeId: "5wAWkU_4ZQo", platform: "YouTube" },
        mainSiteUrl: main("caf-pressure-washing"),
        adsManager: { asOf: "November 2026", items: [{ label: "Total ad spend", value: "$1,200" }, { label: "Leads", value: "109" }, { label: "Cost per lead", value: "$11.01" }] },
    },
    {
        slug: "richies-painting",
        company: "Richie's Painting Service",
        client: "Anthony",
        industry: "Painting",
        service: "facebook-ads",
        headline: "Fully booked in the first month, with $50K of work lined up",
        stat: "$50K lined up",
        description: "Took Anthony's painting business from quiet to fully booked in the first month, with $50,000 of work lined up behind it.",
        whatWasDone:
            "Launched local Meta Ads aimed at homeowners ready to paint, using simple before/after creative and a quote request that goes straight to Anthony's phone. Every enquiry gets a fast follow-up so nothing goes cold.",
        metrics: [
            { label: "Time to fully booked", value: "1 month" },
            { label: "Work lined up", value: "$50,000" },
            { label: "Booked ahead", value: "3 months" },
        ],
        highlights: ["Fully booked in the first month", "$50,000 of work lined up", "Booked out three months ahead", "Quote requests straight to his phone"],
        logo: "/images/logos/richies-painting.png",
        proof: [
            { src: "/images/proof/richies-painting.png", alt: "Richie's Painting Service Meta Ads Manager results" },
            { src: "/images/proof/messages-richies-painting-1.jpg", alt: "Message from Richie's Painting Service to Van" },
        ],
        reviewId: "anthony-gibb",
        video: { url: "https://www.youtube.com/shorts/_lf9grv7PoA", youtubeId: "_lf9grv7PoA", platform: "YouTube" },
        mainSiteUrl: main("richies-painting"),
        adsManager: { asOf: "November 2026", items: [{ label: "Ad spend (current account)", value: "$2,511" }, { label: "Leads", value: "120" }, { label: "Cost per lead", value: "$20.92" }], note: "Covers the account running since July 2026." },
    },
    {
        slug: "mobile-mates-detailing",
        company: "Mobile Mates Detailing",
        client: "Louie",
        industry: "Car detailing",
        service: "facebook-ads",
        headline: "50+ leads in the first few days, booked out in two weeks",
        stat: "50+ leads",
        description: "Brought Louie over 50 quality leads in the first few days and booked his calendar out inside two weeks.",
        whatWasDone:
            "Ran local Meta Ads for mobile car detailing with offer-led creative and a short enquiry form. Leads land on Louie's phone with automatic follow-up, so the work comes to him instead of him chasing it.",
        metrics: [
            { label: "Leads (first few days)", value: "50+" },
            { label: "Time to booked out", value: "2 weeks" },
        ],
        highlights: ["50+ quality leads in the first few days", "Calendar booked out in two weeks", "Local, mobile-service targeting", "Work comes to him, no chasing"],
        logo: "/images/logos/mobile-mates-detailing.jpg",
        proof: [
            { src: "/images/proof/mobile-mates-detailing.png", alt: "Mobile Mates Detailing Meta Ads Manager results" },
            { src: "/images/proof/messages-mobile-mates-detailing-1.jpg", alt: "Message from Mobile Mates Detailing to Van" },
        ],
        reviewId: "louie-smeulders",
        mainSiteUrl: main("mobile-mates-detailing"),
    },
    {
        slug: "cleana-carpets",
        company: "Cleana Carpets",
        client: "Joe",
        industry: "Carpet cleaning",
        service: "facebook-ads",
        headline: "4,238 leads at $9 each over ten months of ads",
        stat: "4,238 leads",
        description: "Cleana Carpets has had 4,238 leads from Meta ads at $9.19 each. Their first $19,000 of ad spend brought in $77,000 in revenue, a 4x return on $400 average jobs.",
        whatWasDone:
            "Local Meta ads aimed at homes and businesses in the areas Cleana cover, with new creative tested all the time so the ads don't go stale. Leads come through a short form and get followed up fast, which keeps the cost per lead around $10.",
        metrics: [
            { label: "First $19K of ad spend", value: "$77,000 revenue" },
            { label: "Return on that spend", value: "4x" },
            { label: "Cost per lead", value: "$10" },
            { label: "Avg job value", value: "$400" },
        ],
        highlights: ["$77,000 in revenue from $19,000 in ad spend", "4x return at high scale", "Averaging $10 a lead", "$400 average job value"],
        logo: "/images/logos/cleana-carpets.webp",
        proof: [
            { src: "/images/proof/cleana-carpets.png", alt: "Cleana Carpets Meta Ads Manager results" },
            { src: "/images/proof/cleana-carpets-2.png", alt: "Cleana Carpets ad spend summary" },
            { src: "/images/proof/cleana-carpets-3.png", alt: "Cleana Carpets cost per lead" },
            { src: "/images/proof/messages-cleana-carpets-1.jpg", alt: "Message from Cleana Carpets to Van" },
        ],
        reviewId: "rosemary-fung",
        mainSiteUrl: main("cleana-carpets"),
        adsManager: { asOf: "November 2026", items: [{ label: "Total ad spend", value: "$38,962" }, { label: "Leads", value: "4,238" }, { label: "Phone calls", value: "135" }, { label: "Cost per lead", value: "$9.19" }], note: "Ten months of continuous spend, still running." },
    },
    {
        slug: "iq-pressure-washing",
        company: "IQ Pressure Washing",
        client: "Quinton",
        industry: "Exterior cleaning",
        service: "facebook-ads",
        headline: "$33K in exterior cleaning jobs from $4K in ad spend",
        stat: "8x ROAS",
        description: "Quinton spent $4,000 on ads and it brought in $33,000 in exterior cleaning jobs. An 8x return.",
        whatWasDone:
            "Before and after video ads that show off the work, run in the areas Quinton wants to work in. We pushed more budget in the busy seasons and pulled it back when it was quiet.",
        metrics: [
            { label: "Ad spend", value: "$4,000" },
            { label: "Revenue", value: "$33,000" },
            { label: "Return on spend", value: "8x" },
        ],
        highlights: ["$33,000 in jobs", "$4,000 in ad spend", "8x return on ad spend", "Before and after video ads"],
        logo: "/images/logos/iq-pressure-washing.webp",
        proof: [
            { src: "/images/proof/iq-pressure-washing.png", alt: "IQ Pressure Washing Meta Ads results" },
            { src: "/images/proof/iq-pressure-washing-2.png", alt: "IQ Pressure Washing revenue summary" },
        ],
        video: { url: "https://www.instagram.com/p/DZFQCCFv1OK/", platform: "Instagram" },
        mainSiteUrl: main("iq-pressure-washing"),
    },
    {
        slug: "all-pro-pressure-washing",
        company: "All Pro Pressure Washing",
        client: "Munya",
        industry: "Pressure washing",
        service: "facebook-ads",
        headline: "$23K in jobs in two months from $3.2K in ad spend",
        stat: "7.7x ROAS",
        description: "Munya spent $3,200 on ads over 2 months and it brought in $23,000 in jobs. A 7.7x return from 145 leads at $22 each.",
        whatWasDone:
            "Meta ads built around bigger pressure washing jobs in Munya's area, with video ads, instant lead forms and automatic follow-up in the CRM so every lead got a reply straight away.",
        metrics: [
            { label: "Ad spend", value: "$3,200" },
            { label: "Revenue", value: "$23,000" },
            { label: "Leads", value: "145" },
            { label: "Cost per lead", value: "$22" },
        ],
        highlights: ["$23,000 in jobs in 2 months", "7.7x return on ad spend", "145 leads at $22 each", "$850 average job value"],
        logo: "/images/logos/all-pro-pressure-washing.webp",
        proof: [
            { src: "/images/proof/all-pro-pressure-washing.png", alt: "All Pro Pressure Washing Meta Ads results" },
            { src: "/images/proof/all-pro-pressure-washing-2.png", alt: "All Pro Pressure Washing revenue summary" },
        ],
        reviewId: "munya-johnstone",
        mainSiteUrl: main("all-pro-pressure-washing"),
        adsManager: { asOf: "November 2026", items: [{ label: "Cost per lead, 2024 (before)", value: "$72.64" }, { label: "Cost per lead, 2026 Webb Media campaign", value: "$22.12" }, { label: "Leads in that campaign", value: "145" }] },
    },
    {
        slug: "reset-exterior-cleaning",
        company: "Reset Exterior Cleaning",
        client: "Christian",
        industry: "Exterior cleaning",
        service: "facebook-ads",
        headline: "$14K in jobs from $3.8K in ad spend",
        stat: "3.7x ROAS",
        description: "Christian spent $3,800 on ads and it brought in $14,000 in jobs. A 3.7x return and a steady flow of local enquiries.",
        whatWasDone:
            "Separate ads for each of Reset's main cleaning services, each sending people to a page about that exact service so more of them actually ask for a quote.",
        metrics: [
            { label: "Ad spend", value: "$3,800" },
            { label: "Revenue", value: "$14,000" },
            { label: "Return on spend", value: "3.7x" },
        ],
        highlights: ["$14,000 in jobs", "$3,800 in ad spend", "3.7x return on ad spend", "A steady flow of local enquiries"],
        logo: "/images/logos/reset-exterior-cleaning.webp",
        proof: [
            { src: "/images/proof/reset-exterior-cleaning.png", alt: "Reset Exterior Cleaning Meta Ads results" },
            { src: "/images/proof/reset-exterior-cleaning-2.png", alt: "Reset Exterior Cleaning revenue summary" },
        ],
        reviewId: "christian-greenhalgh",
        mainSiteUrl: main("reset-exterior-cleaning"),
    },
    {
        slug: "brisbathco",
        company: "The Brisbane Bathroom Co",
        client: "BrisBathCo",
        industry: "Bathroom renovations",
        service: "websites",
        headline: "$1.1M in qualified quotes in 6 months from their new website",
        stat: "$1.1M quotes",
        description: "Their new site closed 3 bathroom renos ($85K) in the first month from Google alone, and has brought in $1.1M in qualified quotes in 6 months.",
        whatWasDone:
            "A custom site built from scratch to load fast and rank locally. Webb Media took their page speed score from 29 to 100 and set it up to show up for the searches Brisbane homeowners actually make.",
        metrics: [
            { label: "Qualified quotes (6 months)", value: "$1.1M" },
            { label: "Reno deals closed (month 1)", value: "3" },
            { label: "Organic revenue (month 1)", value: "$85,000" },
            { label: "Lighthouse performance", value: "100/100" },
        ],
        highlights: ["$1.1M in qualified quotes in 6 months", "$85K generated in month 1 organically", 'Page one for "Bathroom Renovations Brisbane"', "Page load score from 29 to 100"],
        logo: "/images/logos/brisbathco.png",
        proof: [],
        siteImage: "/images/sites/brisbathco.webp",
        siteUrl: "https://brisbathco.com.au/",
        reviewId: "david-forgan",
        mainSiteUrl: main("brisbathco"),
    },
    {
        slug: "wild-landscape-co",
        company: "Wild Landscape Co",
        client: "Wild Landscape Co",
        industry: "Landscaping",
        service: "websites",
        headline: "$110K in organic jobs in the first 6 months",
        stat: "$110K in jobs",
        description: "A portfolio site that's closed $110,000 in organic jobs in the first 6 months since launch.",
        whatWasDone:
            "A custom site that leads with their best projects, aimed at homeowners after high-end landscaping. Every project page makes it easy to go from looking at the work to asking for a quote.",
        metrics: [
            { label: "Organic revenue", value: "$110,000" },
            { label: "Timeframe", value: "6 months" },
            { label: "Local SEO position", value: "Top 3" },
        ],
        highlights: ["$110,000 in organic jobs in 6 months", "Project galleries that show off the work", "Aimed at high-end residential clients", "Set up for local SEO"],
        logo: "/images/logos/wild-landscape-co.webp",
        proof: [{ src: "/images/proof/wild-landscape-co.png", alt: "Wild Landscape Co website results" }],
        siteImage: "/images/sites/wild-landscape-co.webp",
        siteUrl: "https://wildlandscapeco.com.au/",
        reviewId: "isaac-hill",
        mainSiteUrl: main("wild-landscape-co"),
    },
    {
        slug: "elite-detail-specialists",
        company: "Elite Detail Specialists",
        client: "Elite Detail Specialists",
        industry: "Car detailing",
        service: "websites",
        headline: "30% more visitors now book after the website rebuild",
        stat: "+30% bookings",
        description: "Webb Media rebuilt their site and 30% more visitors now book.",
        whatWasDone:
            "Went through the old site, cut out the steps that were stopping people from booking, made the booking flow simpler and got it loading fast on phones.",
        metrics: [
            { label: "Conversion rate", value: "+30%" },
            { label: "Page load", value: "<1.5s" },
            { label: "Mobile bounce rate", value: "-25%" },
        ],
        highlights: ["30% higher conversion rate", "Simpler booking flow", "Loads in under 1.5 seconds", "Built for phones first"],
        proof: [{ src: "/images/proof/elite-detail-specialists.png", alt: "Elite Detail Specialists website results" }],
        siteImage: "/images/sites/elite-detail-specialists.webp",
        siteUrl: "https://elitedetailspecialists.com/",
        reviewId: "eddie-phillips",
        mainSiteUrl: main("elite-detail-specialists"),
    },
    {
        slug: "spray-pave-perth",
        company: "Spray Pave Perth",
        client: "Robert",
        industry: "Decorative concrete",
        service: "websites",
        headline: "Page one of Google for Perth spray-on concrete searches",
        stat: "Page 1 Google",
        description: 'Rebuilt Robert\'s site from scratch and it now sits on page one of Google for searches like "spray on concrete perth" and "concrete stencil perth".',
        whatWasDone:
            "Replaced his old WordPress site with a custom build: a page for every service and every part of Perth he covers, before/after sliders of real jobs, and a free quote button on every page. Every old page address was redirected to its new home, so links and search traffic from the old site still land in the right place.",
        metrics: [
            { label: "Google ranking", value: "Page 1" },
            { label: "Perth area pages", value: "10" },
            { label: "Old links redirected", value: "80+" },
        ],
        highlights: ['Page one for "spray on concrete perth"', 'Page one for "concrete stencil perth"', "A page for every service and area", "Every old link redirected"],
        proof: [],
        siteImage: "/images/sites/spray-pave-perth.webp",
        siteUrl: "https://www.spraypaveperth.com.au/",
        mainSiteUrl: main("spray-pave-perth"),
    },
    {
        slug: "lindsay-catlin-fencing",
        company: "Lindsay Catlin Fencing",
        client: "Lindsay",
        industry: "Fencing",
        service: "websites",
        headline: "Page one of Google for four Sunshine Coast fencing searches",
        stat: "Page 1 Google",
        description: "A fast, local-first fencing website that now sits on page one of Google for Buderim, Nambour, Caloundra and Maroochydore fencing searches.",
        whatWasDone:
            "Designed and built a clean, quick-loading site with a page for each Sunshine Coast suburb Lindsay services, written around the searches locals actually type, with a clear way to ask for a quote on every page.",
        metrics: [
            { label: "Page one rankings", value: "4+ suburbs" },
            { label: "Service area", value: "Sunshine Coast" },
        ],
        highlights: ['Page one for "Buderim Fencing"', 'Page one for "Nambour Fencing"', 'Page one for "Caloundra Fencing" and "Maroochydore Fencing"', "A page for every suburb serviced"],
        proof: [],
        siteImage: "/images/sites/lindsay-catlin-fencing.webp",
        siteUrl: "https://fencingsunshinecoast.com.au/",
        mainSiteUrl: main("lindsay-catlin-fencing"),
    },
];

/** Other website builds, shown as a portfolio strip (no outcome data yet). */
export const OTHER_BUILDS = [
    { company: "Euro Chiptuning Solutions", note: "125 suburb + service pages, Melbourne", url: "https://eurochiptuning.com.au/", image: "/images/sites/euro-chiptuning.webp" },
    { company: "Chase Create", note: "108 local pages, Sunshine Coast outdoor builder", url: "https://chasecreate.com.au/", image: "/images/sites/chase-create.webp" },
    { company: "SDL Creations", note: "Award-winning Sydney landscaper", url: "https://sdlcreations.webbdomain.com.au/", image: "/images/sites/sdl-creations.webp" },
    { company: "IGLA Australia", note: "National vehicle security brand", url: "https://www.igla.com.au/", image: "/images/sites/igla.webp" },
];

export const caseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
export const FEATURED_CASE_SLUGS = ["rks-renovations", "pristine-pressure-washing", "brisbathco", "clean-coast-pressure-washing", "cleana-carpets", "wild-landscape-co"];

export const VIDEO_TESTIMONIALS = CASE_STUDIES.filter((c) => c.video?.youtubeId).map((c) => ({
    slug: c.slug,
    company: c.company,
    client: c.client,
    headline: c.headline,
    stat: c.stat,
    youtubeId: c.video!.youtubeId!,
    url: c.video!.url,
}));
