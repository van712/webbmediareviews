/**
 * Pulls every review from Webb Media's Google Business Profile and writes
 * src/data/google-reviews.json. Text is stored exactly as Google returns it.
 *
 * Runs daily in GitHub Actions (.github/workflows/sync-reviews.yml). If the
 * file changes, the workflow commits it and Vercel redeploys the site.
 *
 * Env (GitHub repo secrets):
 *   GBP_CLIENT_ID, GBP_CLIENT_SECRET, GBP_REFRESH_TOKEN  OAuth for the Google account that manages the profile
 *   GBP_ACCOUNT_ID, GBP_LOCATION_ID                      numeric IDs (run with --list to find them)
 *
 * Usage:
 *   node scripts/sync-google-reviews.mjs          sync reviews
 *   node scripts/sync-google-reviews.mjs --list   print accounts + locations to find the IDs
 */
import fs from "node:fs";

const OUT = new URL("../src/data/google-reviews.json", import.meta.url);
const STARS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

const env = (k) => {
    const v = process.env[k];
    if (!v) throw new Error(`Missing env ${k}`);
    return v;
};

async function accessToken() {
    const res = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: env("GBP_CLIENT_ID"),
            client_secret: env("GBP_CLIENT_SECRET"),
            refresh_token: env("GBP_REFRESH_TOKEN"),
            grant_type: "refresh_token",
        }),
    });
    if (!res.ok) throw new Error(`Token refresh failed: ${res.status} ${await res.text()}`);
    return (await res.json()).access_token;
}

async function get(url, token) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error(`GET ${url} failed: ${res.status} ${await res.text()}`);
    return res.json();
}

/** Google appends "(Translated by Google)" blocks for other languages; keep the original only. */
const originalText = (comment = "") => {
    const m = comment.split("\n\n(Translated by Google)");
    const orig = comment.includes("(Original)") ? comment.split("(Original)\n").pop() : m[0];
    return orig.trim();
};

async function list(token) {
    const { accounts = [] } = await get("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", token);
    for (const a of accounts) {
        console.log(`Account ${a.name}  (${a.accountName})`);
        const { locations = [] } = await get(`https://mybusinessbusinessinformation.googleapis.com/v1/${a.name}/locations?readMask=name,title`, token);
        for (const l of locations) console.log(`   Location ${l.name}  (${l.title})`);
    }
}

async function sync(token) {
    const base = `https://mybusiness.googleapis.com/v4/accounts/${env("GBP_ACCOUNT_ID")}/locations/${env("GBP_LOCATION_ID")}/reviews`;
    const reviews = [];
    let pageToken = "";
    let averageRating = 0;
    let totalReviewCount = 0;
    do {
        const page = await get(`${base}?pageSize=50&orderBy=updateTime desc${pageToken ? `&pageToken=${pageToken}` : ""}`, token);
        averageRating = page.averageRating ?? averageRating;
        totalReviewCount = page.totalReviewCount ?? totalReviewCount;
        for (const r of page.reviews ?? []) {
            reviews.push({
                googleId: r.reviewId,
                name: r.reviewer?.isAnonymous ? "A Google user" : (r.reviewer?.displayName ?? "A Google user"),
                rating: STARS[r.starRating] ?? 0,
                text: originalText(r.comment),
                createTime: r.createTime ?? null,
                reply: r.reviewReply?.comment ?? null,
            });
        }
        pageToken = page.nextPageToken ?? "";
    } while (pageToken);

    if (reviews.length === 0) throw new Error("Google returned 0 reviews; refusing to overwrite the file.");
    reviews.sort((a, b) => (b.createTime ?? "").localeCompare(a.createTime ?? ""));

    const prev = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : null;
    const next = {
        source: "google-business-profile",
        syncedAt: new Date().toISOString().slice(0, 10),
        averageRating: Math.round(averageRating * 10) / 10,
        totalReviewCount,
        reviews,
    };
    // Only bump syncedAt when something actually changed, so the daily job doesn't commit noise.
    if (prev && JSON.stringify({ ...prev, syncedAt: "" }) === JSON.stringify({ ...next, syncedAt: "" })) {
        console.log(`No change (${reviews.length} reviews).`);
        return;
    }
    fs.writeFileSync(OUT, JSON.stringify(next, null, 2) + "\n");
    console.log(`Wrote ${reviews.length} reviews (${totalReviewCount} total on Google, avg ${next.averageRating}).`);
}

const token = await accessToken();
await (process.argv.includes("--list") ? list(token) : sync(token));
