/**
 * Google reviews for Webb Media.
 *
 * RULE: review text is VERBATIM from Google. Never edit, shorten inside the
 * data, or "tidy up" a review. Typos stay. If a review isn't on Google (or
 * another public platform we can link to), it doesn't go in this file.
 *
 * Source: van712/webbmedia src/data/googleReviews.ts (synced October 2026).
 */

export type Service = "facebook-ads" | "websites" | "coaching";

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: 1 | 2 | 3 | 4 | 5;
    source: "Google";
    /** What the client worked with us on, read from the review itself. */
    services: Service[];
    /** Client's business, only where we know it for certain. */
    business?: string;
    /** Matching case study slug, if there is one. */
    caseStudy?: string;
    /** Show on the home page. */
    featured?: boolean;
}

export const SERVICE_LABELS: Record<Service, string> = {
    "facebook-ads": "Facebook & Instagram ads",
    websites: "Website design",
    coaching: "Ads coaching",
};

export const REVIEWS: Review[] = [
    {
        id: "hogan-radic",
        name: "Hogan Radic",
        business: "Clean Coast Pressure Washing",
        caseStudy: "clean-coast-pressure-washing",
        services: ["facebook-ads"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "10/10 service would absolutely recommend Van to anyone who is trying to scale a business, whether you've just started or been in business for a while. This year I decided to start my own business, it had been going okay, it was paying the bills and getting me by. But I wanted to scale and make something real.. I first heard of Van when he was cold calling as a 17year old and that impressed me and showed me he was ambitious, hard working and has perseverance. Now having worked with him he has exceeded my expectations. He's super easy to work with, friendly and most importantly great at what he does. If you're serious about scaling your business, I would seriously recommend Van.",
    },
    {
        id: "louie-smeulders",
        name: "Louie Smeulders",
        business: "Mobile Mates Detailing",
        caseStudy: "mobile-mates-detailing",
        services: ["facebook-ads"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Absolutely stoked with the results, since getting Van on board, my business skyrocketed. He brought in over 50 quality leads within the first few days pretty much booking my calendar out, it takes a lot of stress getting out trying to find new customers, but with Vans help the work comes straight to me. He so easy to deal with, knows exactly what he's doing, and actually wants to see you and your business succeed, if your thinking about investing in but marketing but aren't sure, this blokes the man, don't hesitate with him!",
    },
    {
        id: "anthony-gibb",
        name: "Anthony Gibb",
        business: "Richie's Painting Service",
        caseStudy: "richies-painting",
        services: ["facebook-ads"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "I've been working with Web media for a month now. I didn't believe him at first for it to work but I've been getting booked out for three months now and I now believe anything he says.",
    },
    {
        id: "sam-hoffensetz",
        name: "Sam Hoffensetz",
        business: "CAF Pressure Washing",
        caseStudy: "caf-pressure-washing",
        services: ["facebook-ads", "coaching"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Van helped me launch my first Meta ad campaign for my pressure washing business and it's been unreal. The bootcamp he ran cut straight to the point, no fluff, just what actually works and what doesn't. Genuinely learned more from him in a couple of sessions than trying to figure it out myself for months. Now I've got skills and insight I can keep using going forward. Highly recommend if you want straight-up advice and real results.",
    },
    {
        id: "john-sav",
        name: "John Sav",
        services: ["websites"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Van contacted me offering to rebuild my website and gain some more business. I had numerous offerings prior to Van contacting me, but I was never really interested. I'm not sure why, but Van just seemed right for the job and so far, he has not disappointed. His quality of work, communication and delivery has exceeded everything I was expecting. If you are looking to for web design, Google or Meta ads or anything alike, Van is extremely talented and can get your business moving in the right direction. Thank you Van and the Webb Media team.",
    },
    {
        id: "shaun",
        name: "Shaun",
        services: ["facebook-ads", "websites"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Vans help was a massive stress release, not having to worry about the headache of ads or building a website saved me much time and the return on investment was immediate. Will be using Webbmedia to build out websites for any future projects as well.",
    },
    {
        id: "eddie-phillips",
        name: "Eddie Phillips",
        services: ["websites"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Unreal service from Van. Highly recommend. Easy to work with, created 2 websites for me and has an appreciation for working with a small business. The attention to detail is great and price point is well worth it when compared to other companies with lock in contracts that just don't provide the value Van does.",
    },
    {
        id: "rosemary-fung",
        name: "Rosemary Fung",
        business: "Cleana Carpets",
        caseStudy: "cleana-carpets",
        services: ["facebook-ads"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Highly recommend this little company. Van took over our advertising 8 months ago couldn't be happier always available to make changes and makes it his business to understand yours.",
    },
    {
        id: "tnbquan",
        name: "TnbQuan",
        services: ["facebook-ads"],
        featured: true,
        rating: 5,
        source: "Google",
        text: "Van was super professional and the campaign creative he made me honestly blew me away, I'm fully booked out as well would highly recommend 👍",
    },
    {
        id: "munya-johnstone",
        name: "Munya Johnstone",
        // TODO(van): confirm Munya is the All Pro Pressure Washing client before linking the case study.
        services: ["facebook-ads"],
        rating: 5,
        source: "Google",
        text: "I would highly recommend Webb Media to anyone looking to run Facebook ads. Van has done a fantastic job creating high-quality, engaging video creatives for my business. Super professional, easy to work with, and the results speak for themselves",
    },
    {
        id: "andrew-noble-bathrooms",
        name: "Andrew",
        business: "Noble Bathrooms",
        services: ["websites"],
        rating: 5,
        source: "Google",
        text: "Excellent work, great service and very professional. Thank you to Van and the team. I loved the effort put into the initial design, before they even charged any money, highly recommended.",
    },
    {
        id: "isaac-hill",
        name: "Isaac Hill",
        services: ["websites"],
        rating: 5,
        source: "Google",
        text: "We had a really great experience with Webb Media. They built us a fantastic website. Made all of my ideas and wishes come true. Highly recommend for any media, marketing or web development. Thank you Webb team.",
    },
    {
        id: "christian-greenhalgh",
        name: "Christian Greenhalgh",
        // TODO(van): is this Christian from Reset Exterior Cleaning? If so add business + caseStudy.
        services: ["facebook-ads"],
        rating: 5,
        source: "Google",
        text: "Provides good quality leads through meta ads and is motivated to always push for growth and quality",
    },
    {
        id: "jack-young",
        name: "Jack Young",
        services: ["websites", "facebook-ads"],
        rating: 5,
        source: "Google",
        text: "Van from Webb media has been great to deal with, super friendly, knowledgeable and reasonably priced. His website designs and marketing skills are 10/10. Highly recommend",
    },
    {
        id: "giulio-rocco",
        name: "Giulio Rocco",
        services: [],
        rating: 5,
        source: "Google",
        text: "Excellent service and incredibly easy to work with. Highly recommend to anyone looking to grow their digital presence.",
    },
    {
        id: "ben-mcgaughran",
        name: "Ben McGaughran",
        services: ["websites"],
        rating: 5,
        source: "Google",
        text: "Van was extremely knowledgable around websites and marketing, Highly recommend him!",
    },
    {
        id: "david-forgan",
        name: "David Forgan",
        services: [],
        rating: 5,
        source: "Google",
        text: "Web Media were great to deal with and im very happy with the results",
    },
    {
        id: "waheeb-irshad",
        name: "Waheeb Irshad",
        services: [],
        rating: 5,
        source: "Google",
        text: "Had a great meeting with Van, very knowledgeable bloke and offered amazing packages! Look forward to working with Van from Webb Media soon!",
    },
];

export const REVIEW_COUNT = REVIEWS.length;
export const AVERAGE_RATING = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length;

export const reviewsFor = (service: Service) => REVIEWS.filter((r) => r.services.includes(service));
export const reviewById = (id: string) => REVIEWS.find((r) => r.id === id);

/** Short pull quotes, each a verbatim fragment of a review above, for the "why clients rate us" section. */
export const THEMES: { title: string; body: string; quotes: { reviewId: string; text: string }[] }[] = [
    {
        title: "You deal with Van directly",
        body: "No account managers or junior staff. The person who sells you the work is the person who does it, and clients keep mentioning it.",
        quotes: [
            { reviewId: "rosemary-fung", text: "always available to make changes and makes it his business to understand yours." },
            { reviewId: "louie-smeulders", text: "He so easy to deal with, knows exactly what he's doing, and actually wants to see you and your business succeed" },
        ],
    },
    {
        title: "Results show up fast",
        body: "Most of the ad clients talk about being booked out, often within the first few weeks.",
        quotes: [
            { reviewId: "louie-smeulders", text: "He brought in over 50 quality leads within the first few days pretty much booking my calendar out" },
            { reviewId: "anthony-gibb", text: "I've been getting booked out for three months now" },
        ],
    },
    {
        title: "Ad creative that stands out",
        body: "Webb Media makes the videos and images for every campaign, so the ads don't look like everyone else's.",
        quotes: [
            { reviewId: "tnbquan", text: "the campaign creative he made me honestly blew me away" },
            { reviewId: "munya-johnstone", text: "Van has done a fantastic job creating high-quality, engaging video creatives for my business." },
        ],
    },
    {
        title: "Websites built with care",
        body: "Custom sites built around each business, with plenty of effort before a dollar changes hands.",
        quotes: [
            { reviewId: "andrew-noble-bathrooms", text: "I loved the effort put into the initial design, before they even charged any money" },
            { reviewId: "eddie-phillips", text: "The attention to detail is great and price point is well worth it" },
        ],
    },
];
