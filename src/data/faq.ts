import { BUSINESS, REVIEWS_LAST_SYNCED } from "./site";
import { REVIEW_COUNT } from "./reviews";

/** Answers may contain simple HTML links. Keep every claim checkable. */
export const HOME_FAQ = [
    {
        q: "Is Webb Media legit?",
        a: `Yes. Webb Media is a registered Australian business (ABN ${BUSINESS.abn}) run by founder ${BUSINESS.founder}. Every client review on this site is a public Google review you can check yourself, and our case studies include real Ads Manager screenshots. <a href="/is-webb-media-legit/">See the full breakdown</a>.`,
    },
    {
        q: "What do Webb Media's clients say?",
        a: `As of ${REVIEWS_LAST_SYNCED}, Webb Media has ${REVIEW_COUNT} Google reviews, all five stars. The things clients bring up most are dealing with Van directly, getting booked out fast, and ad creative that stands out.`,
    },
    {
        q: "What does Webb Media do?",
        a: `Webb Media runs Facebook and Instagram (Meta) ads, builds websites that rank on Google, and sets up lead follow-up systems for Australian tradies and home service businesses. Learn more at <a href="${BUSINESS.mainSite}">webbmedia.com.au</a>.`,
    },
    {
        q: "Who runs Webb Media?",
        a: `Webb Media was founded by ${BUSINESS.founder}, who runs every client account himself. <a href="/about/">Read more about Van</a>.`,
    },
    {
        q: "What results have Webb Media clients had?",
        a: `RKS Renovations closed a $42,000 job from $474 in ad spend, Pristine Pressure Washing adds about $30,000 a month from $50 a day in ads, and The Brisbane Bathroom Co's new website brought in $1.1M in qualified quotes in six months. <a href="/case-studies/">See every case study</a>.`,
    },
    {
        q: "Where are these reviews from?",
        a: `Every written review here is copied word for word from Webb Media's Google Business Profile, including the typos. Video testimonials are the clients' own videos on YouTube. We don't write, edit or pay for reviews.`,
    },
    {
        q: "I've worked with Webb Media. How do I leave a review?",
        a: `Thank you! <a href="/leave-a-review/">Leave a Google review here</a>. It takes about a minute, and mentioning your trade and suburb helps other business owners find you.`,
    },
];
