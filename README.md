# trustedtechleader site

Next.js (App Router, TypeScript) site, built as a fully static export (`output: 'export'`). There is no backend and no server-side code, so the `out/` folder can go to any static host.

## Structure

- `src/app/` - one `page.tsx` per route (`/`, `/case-studies/`, `/case-studies/<slug>/`, ...). `not-found.tsx` becomes `404.html`. `layout.tsx` holds the fonts and default icons.
- `src/components/` - `PageShell` (skip link, header, footer), `SiteHeader`, `SiteFooter`, `NavToggle`, and `behaviors/*` (client components that add page interactivity).
- Funnels: niche flows with their own header nav. Pages live in route groups `src/app/(funnel-<id>)/` (the folder name is not part of the URL). The registry is `src/lib/funnels.ts`. A page opts in with `funnel="<id>"` on `PageShell`; without it the general nav is shown, which is niche-neutral.
- `src/styles/` - `site.css` (global) and `pages/*.css` (imported by the page that uses them, scoped by the page class such as `.page-home`).
- `public/` - served as-is: `assets/img`, case-study screenshots (`case-studies/<slug>/*.jpg`), `robots.txt`, `sitemap.xml`, `llms.txt`, `CNAME`, `_headers`, favicons.
- `tracking/` - old GTM container export and notes. Not loaded by the site.
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

`npm run build` writes the static site to `out/`. Production deploys from the `production` branch: `.github/workflows/deploy-production.yml` SSHes to the VPS and runs `/opt/trustedtechleader/deploy.sh`. `public/_headers` (security headers, cache rules) is copied into `out/`.

## Contact and booking

The contact email (`abdul@trustedtechleader.com`) and the Calendly booking link are set in `src/lib/site.ts` (`SITE.email`, `SITE.bookHref`). Change them there; nothing else needs editing.

## Custom domain

Point `trustedtechleader.com` at your host (`public/CNAME` is set for GitHub Pages).

## Analytics

None. The site loads no analytics or tracking scripts, and the privacy page says so. If that changes, update the privacy page too.

Add a sample or case study only with written client permission.

## SEO notes

- Every page exports `metadata` with a unique title (60 characters or fewer), description (160 or fewer), canonical URL, Open Graph and Twitter tags, and renders its JSON-LD. Keep these in step when you add a page.
- The share image is `public/assets/img/og-default.png` (1200x630).
- `not-found.tsx` is `noindex` and has no canonical on purpose.
