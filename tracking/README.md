# Tracking setup (Google Tag Manager + GA4)

How it works: the root layout renders `src/components/Tracking.tsx`. It sets Google Consent Mode v2 to "denied", shows a cookie banner, loads GTM, and pushes events to `dataLayer`. GA4 itself is configured inside GTM, so no GA code lives in the pages.

## 1. Create the accounts (about 10 minutes)
1. GA4: analytics.google.com, create a property and a Web data stream for `https://trustedtechleader.com`. Copy the Measurement ID (`G-...`).
2. GTM: tagmanager.google.com, create a Web container. Copy the container ID (`GTM-...`).
3. Search Console: search.google.com/search-console, add the domain property and verify by DNS TXT record (works on GitHub Pages; no file or meta tag needed). Submit `https://trustedtechleader.com/sitemap.xml`.

## 2. Wire the site
- In `src/components/Tracking.tsx` replace `GTM-XXXXXXX` with your container ID. Nothing loads until you do.

## 3. Import the GTM container
GTM > Admin > Import Container > choose `tracking/gtm-container.json` > pick "Merge" with "Rename conflicting". Then:
- Edit the constant variable `GA4 Measurement ID` and paste your `G-...` ID.
- Preview with Tag Assistant, then Submit/Publish.

Tags created: Google tag (GA4) on all pages, plus GA4 events with their triggers and data-layer variables.

| Event | Fires when |
|---|---|
| `generate_lead` | a link to the Calendly booking page (`BOOKING_URL` in `src/lib/booking.ts`) is clicked; carries a `funnel` param |
| `audit_start` / `audit_complete` | the free AI audit is run / its result appears |
| `cta_click` | any `.btn` link is clicked; carries a `funnel` param |
| `outbound_click` | a link to another domain is clicked |
| `consent_choice` | the visitor accepts or declines cookies (not mapped to a GA4 tag) |

In GA4 > Admin > Events, mark `generate_lead` (and optionally `audit_complete`) as key events.

## 4. Known limits
- `_headers` (CSP with the Google domains allowed) is ignored by GitHub Pages. Nothing blocks GTM there. It takes effect on Cloudflare Pages or Netlify.
- There is no privacy policy page yet. Add one and link it from the banner and footer before launch; the banner text is in `Tracking.tsx`.
- GTM's `<noscript>` iframe fallback is not included (the CSP has no `frame-src`).
- Consent is stored in `localStorage` key `ttl_consent`. Clear it to see the banner again.
