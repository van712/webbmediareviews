/**
 * Google reviews for Webb Media.
 *
 * The review text lives in `google-reviews.json`, written by
 * `scripts/sync-google-reviews.mjs` straight from the Google Business Profile
 * API (see README → "Google reviews sync"). It is VERBATIM: never edit it by
 * hand except to seed it. Every review with text is shown, whatever its rating.
 *
 * This file only adds our own labels on top (which service, which business,
 * which case study), matched by the reviewer's name as shown on Google.
 */
import synced from "./google-reviews.json";

export type Service = "facebook-ads" | "websites" | "coaching";

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
    source: "Google";
    /** ISO date the review was posted, when the sync provides it. */
    createTime: string | null;
    /** Webb Media's public reply on Google, if any. */
    reply: string | null;
    services: Service[];
    business?: string;
    caseStudy?: string;
    featured?: boolean;
}

export const SERVICE_LABELS: Record<Service, string> = {
    "facebook-ads": "Facebook & Instagram ads",
    websites: "Website design",
    coaching: "Ads coaching",
};

interface Tag {
    services: Service[];
    business?: string;
    caseStudy?: string;
    featured?: boolean;
}

/** Labels per reviewer, keyed by their Google display name. New reviews show up untagged until added here. */
const TAGS: Record<string, Tag> = {
    "Hogan Radic": { services: ["facebook-ads"], business: "Clean Coast Pressure Washing", caseStudy: "clean-coast-pressure-washing", featured: true },
    "Louie Smeulders": { services: ["facebook-ads"], business: "Mobile Mates Detailing", caseStudy: "mobile-mates-detailing", featured: true },
    "Anthony Gibb": { services: ["facebook-ads"], business: "Richie's Painting Service", caseStudy: "richies-painting", featured: true },
    "Sam Hoffensetz": { services: ["facebook-ads", "coaching"], business: "CAF Pressure Washing", caseStudy: "caf-pressure-washing", featured: true },
    "John Sav": { services: ["websites"], featured: true },
    Shaun: { services: ["facebook-ads", "websites"], featured: true },
    "Eddie Phillips": { services: ["websites"], business: "Elite Detail Specialists", caseStudy: "elite-detail-specialists", featured: true },
    "Rosemary Fung": { services: ["facebook-ads"], business: "Cleana Carpets", caseStudy: "cleana-carpets", featured: true },
    TnbQuan: { services: ["facebook-ads"], featured: true },
    // Business links below come from Webb Media's client tracker and case-study docs (Nov 2026).
    "Munya Johnstone": { services: ["facebook-ads"], business: "All Pro Pressure Washing", caseStudy: "all-pro-pressure-washing" },
    "Info Noble Bathrooms": { services: ["websites"], business: "Noble Bathrooms" },
    "Nick Quinlan": { services: ["facebook-ads"], business: "Pristine Pressure Washing", caseStudy: "pristine-pressure-washing", featured: true },
    "Mitch Newton": { services: ["facebook-ads"], business: "KN Exteriors", featured: true },
    "John Kearns": { services: ["facebook-ads"], business: "All-Bright Pressure Cleaning", featured: true },
    "Jessica Vella": { services: ["websites"], business: "CJM Lawn Care" },
    "Isaac Hill": { services: ["websites"], business: "Wild Landscape Co", caseStudy: "wild-landscape-co" },
    "Christian Greenhalgh": { services: ["facebook-ads"], business: "Reset Exterior Cleaning", caseStudy: "reset-exterior-cleaning" },
    "Jack Young": { services: ["websites", "facebook-ads"] },
    "David Forgan": { services: ["websites"], business: "The Brisbane Bathroom Co", caseStudy: "brisbathco" },
};

/**
 * Reviews from people who aren't clients or have a personal or business
 * connection to Webb Media. They stay on Google (that's up to Google), but
 * presenting them here as client reviews would be misleading, so they're
 * not shown. The sourcing page explains this rule publicly.
 */
const EXCLUDED: { match: (r: { name: string; text: string }) => boolean; reason: string }[] = [
    { match: (r) => r.name === "Giulio Rocco", reason: "business partner (Venture Ascend)" },
    { match: (r) => r.name === "Ben McGaughran", reason: "business partner (Venture Ascend)" },
    { match: (r) => r.name === "Waheeb Irshad", reason: "prospect after one meeting, not a client" },
    { match: (r) => r.name === "Poppy Hartzenberg", reason: "personal connection to Van" },
    { match: (r) => r.name === "Liam Quinlivan", reason: "runs another agency (referral partner)" },
];

const slug = (s: string) =>
    s
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

interface SyncedReview {
    name: string;
    rating: number;
    text: string;
    createTime: string | null;
    reply: string | null;
}

const seen = new Set<string>();
const withText = (synced.reviews as SyncedReview[]).filter((r) => r.text && r.text.trim().length > 0 && !EXCLUDED.some((e) => e.match(r)));

export const REVIEWS: Review[] = withText
    .map((r) => {
        let id = slug(r.name) || "review";
        while (seen.has(id)) id += "-2";
        seen.add(id);
        const tag = TAGS[r.name] ?? { services: [] };
        return { id, name: r.name, text: r.text, rating: r.rating, source: "Google" as const, createTime: r.createTime, reply: r.reply, ...tag };
    })
    // Newest first when dates are known; the seed has no dates and keeps its order.
    .sort((a, b) => (b.createTime ?? "").localeCompare(a.createTime ?? ""));

/** Total on Google, including star-only ratings with no written review. */
/**
 * Count and average are worked out from the client reviews actually shown on
 * this site (related-party reviews excluded), not Google's headline figure,
 * so every number on the site matches what readers can count on the page.
 */
export const REVIEW_COUNT: number = REVIEWS.length;
export const AVERAGE_RATING: number = Math.round((REVIEWS.reduce((sum, r) => sum + r.rating, 0) / Math.max(REVIEWS.length, 1)) * 10) / 10;
/** Google's own total, which also counts star-only and excluded reviews. */
export const GOOGLE_TOTAL: number = synced.totalReviewCount;
export const REVIEWS_SYNCED_AT: string = synced.syncedAt;
/** e.g. "November 2026" */
export const REVIEWS_SYNCED_LABEL = new Date(synced.syncedAt).toLocaleDateString("en-AU", { month: "long", year: "numeric", timeZone: "Australia/Brisbane" });
/** How many Google reviews are left off this site under the related-party rule. */
export const EXCLUDED_COUNT = (synced.reviews as SyncedReview[]).filter((r) => EXCLUDED.some((e) => e.match(r))).length;
/** True when every written review shown is five stars. Copy that says "all five stars" checks this. */
export const ALL_FIVE_STAR = REVIEWS.every((r) => r.rating === 5);

export const reviewsFor = (service: Service) => REVIEWS.filter((r) => r.services.includes(service));
export const reviewById = (id: string) => REVIEWS.find((r) => r.id === id);

/** Featured reviews for the home page; falls back to the newest if none are tagged. */
export const FEATURED_REVIEWS: Review[] = (() => {
    const tagged = REVIEWS.filter((r) => r.featured);
    return tagged.length >= 3 ? tagged : REVIEWS.slice(0, 9);
})();

/** Curly and straight apostrophes/quotes compare equal, so pull quotes still match Google's text. */
const norm = (s: string) => s.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

/** Cuts a review at a word boundary and marks the cut with an ellipsis (never rewrites it). */
export const excerpt = (text: string, max = 320) => {
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:!\s]+$/, "") + "…";
};

/** Short pull quotes, each a verbatim fragment of a review above, for the "why clients rate us" section. */
const RAW_THEMES: { title: string; body: string; quotes: { reviewId: string; text: string }[] }[] = [
    {
        title: "You deal with Van directly",
        body: "No account managers or junior staff. The person who sells you the work is the person who does it, and clients keep mentioning it.",
        quotes: [
            { reviewId: "rosemary-fung", text: "always available to make changes and makes it his business to understand yours." },
            { reviewId: "louie-smeulders", text: "He so easy to deal with, knows exactly what he's doing, and actually wants to see you and your business succeed" },
            { reviewId: "mitch-newton", text: "Van doesn't just get us leads and leave us, he cares about our businesses success, checking in on us and giving us helpful advice." },
        ],
    },
    {
        title: "Results show up fast",
        body: "Most of the ad clients talk about being booked out, often within the first few weeks.",
        quotes: [
            { reviewId: "louie-smeulders", text: "He brought in over 50 quality leads within the first few days pretty much booking my calendar out" },
            { reviewId: "anthony-gibb", text: "I've been getting booked out for three months now" },
            { reviewId: "nick-quinlan", text: "within 3 months our monthly revenue has quadrupled" },
        ],
    },
    {
        title: "Ad creative that stands out",
        body: "Webb Media makes the videos and images for every campaign, so the ads don't look like everyone else's.",
        quotes: [
            { reviewId: "tnbquan", text: "the campaign creative he made me honestly blew me away" },
            { reviewId: "munya-johnstone", text: "Van has done a fantastic job creating high-quality, engaging video creatives for my business." },
            { reviewId: "john-kearns", text: "He actually took the time to come out to one of my jobs and do some professional filming and content for the business." },
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

/** Themes with their quotes, skipping any quote whose review is no longer on Google. */
export const THEMES = RAW_THEMES.map((t) => ({
    ...t,
    quotes: t.quotes.flatMap((q) => {
        const review = reviewById(q.reviewId);
        const at = review ? norm(review.text).indexOf(norm(q.text)) : -1;
        // Show the exact characters from the review, not our copy of them.
        return review && at >= 0 ? [{ ...q, text: review.text.slice(at, at + q.text.length), review }] : [];
    }),
})).filter((t) => t.quotes.length > 0);
