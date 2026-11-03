/**
 * Site-wide facts. Everything here is real Webb Media data, copied from the
 * main site repo (van712/webbmedia). Change it here and it changes everywhere.
 */

export const SITE = {
    name: "Webb Media Reviews",
    url: "https://www.webbmediareviews.com.au",
    locale: "en_AU",
    defaultTitle: "Webb Media Reviews | Real Client Reviews & Results",
    defaultDescription:
        "Read real Webb Media reviews from Australian tradies and business owners. 5-star Google reviews, video testimonials and client results from Facebook ads and websites by Van Topham.",
    ogImage: "/images/og-image.png",
};

export const BUSINESS = {
    name: "Webb Media",
    /** The main business site. Every "work with us" CTA points here. */
    mainSite: "https://www.webbmedia.com.au",
    /** Matches the @id used by the main site's Organization schema, so Google sees one entity. */
    orgId: "https://www.webbmedia.com.au/#organization",
    personId: "https://www.webbmedia.com.au/#van-topham",
    founder: "Van Topham",
    abn: "73 353 970 790",
    phone: "0491 714 686",
    phoneHref: "tel:+61491714686",
    email: "van@webbmedia.com.au",
    emailHref: "mailto:van@webbmedia.com.au",
    logo: "https://www.webbmedia.com.au/images/logo-512.png",
    areas: ["Gold Coast", "Sunshine Coast", "Brisbane", "Australia-wide"],
};

/** Public Google reviews link (from the main site's googleReviews.ts). */
export const GOOGLE_REVIEWS_URL = "https://share.google/GkEKkcg5l20CGjxP1";

/** Direct "write a review" link from Google Business Profile → Ask for reviews. */
export const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CQA0E73DDMtXEBM/review";


export const SOCIALS = [
    { label: "Instagram", href: "https://www.instagram.com/webbmedia.com.au/" },
    { label: "TikTok", href: "https://www.tiktok.com/@vans.money" },
    { label: "YouTube", href: "https://youtube.com/@vansmoney" },
];

export const NAV = [
    { label: "Reviews", href: "/reviews/" },
    { label: "Client results", href: "/case-studies/" },
    { label: "Websites", href: "/website-portfolio/" },
    { label: "Video testimonials", href: "/video-testimonials/" },
    { label: "About Van", href: "/about/" },
];
