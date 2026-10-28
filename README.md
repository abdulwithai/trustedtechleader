# trustedtechleader site

Next.js (App Router, TypeScript) site, built as a fully static export (`output: 'export'`). There is no backend and no server-side code, so the `out/` folder can go to any static host (GitHub Pages is wired up in `.github/workflows/static.yml`).

## Structure

- `src/app/` - one `page.tsx` per route (`/`, `/case-studies/`, `/case-studies/<slug>/`, ...). `not-found.tsx` becomes `404.html`. `layout.tsx` holds the fonts, default icons and the tracking/consent component.
- `src/components/` - `PageShell` (skip link, header, footer), `SiteHeader`, `SiteFooter`, `NavToggle`, `Tracking`, and `behaviors/*` (client components that add page interactivity).
- Funnels: niche flows with their own header nav. Pages live in route groups `src/app/(funnel-<id>)/` (the folder name is not part of the URL). The registry is `src/lib/funnels.ts`. A page opts in with `funnel="<id>"` on `PageShell`; without it the general nav is shown, which is niche-neutral.
- `src/styles/` - `site.css` (global) and `pages/*.css` (imported by the page that uses them, scoped by the page class such as `.page-home`).
- `public/` - served as-is: `assets/img`, case-study screenshots (`case-studies/<slug>/*.jpg`), `robots.txt`, `sitemap.xml`, `llms.txt`, `CNAME`, `_headers`, favicons.
- `tracking/` - GTM container export and notes.
- `scripts/convert.mjs` - the one-off script that converted the original static HTML to TSX. Kept for reference only.

Adding a case study: copy an existing `src/app/case-studies/<slug>/page.tsx`, add its card to `src/app/case-studies/page.tsx`, its URL to `public/sitemap.xml`, put its screenshots in `public/case-studies/<slug>/`, and update the prev/next links of its neighbours.

Adding a niche funnel: write a `FunnelContent` in `src/lib/funnel-content/<id>.ts`, add a theme in `src/styles/pages/funnel-<id>.css` (override the `--f-*` vars from `funnel.css`), create `src/app/(funnel-<id>)/<path>/page.tsx` that renders `<FunnelPage>` (copy the travel or real-estate page), add an entry to `funnels` in `src/lib/funnels.ts`, and add the URL to `public/sitemap.xml` and `public/llms.txt`. Booking clicks are tagged with the funnel id for analytics (see `tracking/README.md`).

## Develop

```
npm install
npm run dev      # http://localhost:9100
npm run build    # static export to out/
npm run lint     # type check
```

## Deploy

`npm run build` writes the site to `out/`. Upload that folder to any static host (GitHub Pages, Cloudflare Pages, Netlify, cPanel). `public/_headers` (security headers, cache rules) is copied into `out/` for hosts that support it.

## How the free audit works

The free AI audit (`/ai-audit/`) runs entirely in the browser. No request is sent to a server and no API key is needed.

## Custom domain

Point `trustedtechleader.com` at your host (`public/CNAME` is set for GitHub Pages).

## Before launch

- [ ] Replace the placeholder email `hello@trustedtechleader.com`. Search the source for `hello@trustedtechleader.com`.
- [ ] Replace the LinkedIn link. Search the source for `data-todo="linkedin"`.
- [ ] Set the GTM container ID in `src/components/Tracking.tsx` (`GTM_ID`).
- [ ] The site has no submission forms. The Free AI Visibility Scan (`/free-scan/`) and other CTAs send visitors to Calendly via `BOOKING_URL` in `src/lib/booking.ts`.
- [ ] Add the case study only with written client permission.

## SEO notes

- Every page exports `metadata` with a unique title (60 characters or fewer), description (160 or fewer), canonical URL, Open Graph and Twitter tags, and renders its JSON-LD. Keep these in step when you add a page.
- The share image is `public/assets/img/og-default.png` (1200x630).
- `not-found.tsx` is `noindex` and has no canonical on purpose.
