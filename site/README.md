# trustedtechleader site

Plain static HTML, CSS and JavaScript. There is no backend, no build step and no server-side code.

## Structure

- `public/` - the whole site. Every file here is served as-is (HTML, CSS, JS, assets). Also holds `_headers` (security headers and cache rules, used by hosts that support them), `robots.txt` and `sitemap.xml`.
- `_partials/` - shared header and footer fragments to paste into pages.
- `public/case-studies/` - case studies; one folder per project (software builds are anonymized; the law-firm, WordPress and mobile-app case studies cover public sites and apps and link to them). Add new ones by copying an existing case-study page, then add its card to `case-studies/index.html`, its URL to `sitemap.xml`, and update the prev/next links of its neighbours.

## View locally

Double-click `public/index.html` to open it in your browser. All links and assets use relative paths, so the site works straight from the file system (`file://`).

## Deploy

Upload the `public/` folder to any static host, for example:

- Cloudflare Pages
- Netlify Drop
- GitHub Pages
- cPanel (File Manager or FTP, into the web root)

Upload the contents of `public/` so that `index.html` sits at the top level of the web root.

## How the free audit works

The free AI audit (`ai-audit/`) runs entirely in the browser. No request is sent to a server and no API key is needed.

## Custom domain

Point `trustedtechleader.com` at your host. For Cloudflare Pages, open the project, go to Custom domains and add `trustedtechleader.com`. Then either move the nameservers to Cloudflare, or add the DNS record Cloudflare shows you at the registrar. Until the DNS change propagates, the domain will not resolve to the site.

## Before launch

- [ ] Replace the placeholder email `hello@trustedtechleader.com`. Search the site for `TODO: contact email`.
- [ ] Replace the LinkedIn link. Search the site for `data-todo="linkedin"`.
- [ ] The Free AI Visibility Scan form (free-scan/) opens the visitor's email app addressed to hello@trustedtechleader.com. Swap in a form service (e.g. Formspree) if you want submissions without email.
- [ ] Add the case study only with written client permission.

## SEO notes

- Every page has a unique title (60 characters or fewer), a meta description (160 or fewer), a canonical URL, Open Graph and Twitter tags, and JSON-LD. Keep these in step when you add a page.
- The share image is `assets/img/og-default.png` (1200x630). Replace it to change how links look when shared.
- `404.html` is `noindex` and has no canonical on purpose.
