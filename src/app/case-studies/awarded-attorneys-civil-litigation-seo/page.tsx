import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Awarded Attorneys: legal SEO | Trusted Tech Leader"
  },
  "description": "A California civil litigation brand on WordPress and Elementor: what is in place for SEO, plus an audit of the gaps in its public pages.",
  "alternates": {
    "canonical": "/case-studies/awarded-attorneys-civil-litigation-seo/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Awarded Attorneys: legal SEO | Trusted Tech Leader",
    "description": "A California civil litigation brand on WordPress and Elementor: what is in place for SEO, plus an audit of the gaps in its public pages.",
    "url": "https://trustedtechleader.com/case-studies/awarded-attorneys-civil-litigation-seo/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: AI lead systems for US law firms"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Awarded Attorneys: legal SEO | Trusted Tech Leader",
    "description": "A California civil litigation brand on WordPress and Elementor: what is in place for SEO, plus an audit of the gaps in its public pages.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: AI lead systems for US law firms"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Described from the live site; no ranking or traffic figures are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Awarded Attorneys: WordPress and technical SEO for a civil litigation brand\",\"description\":\"A California civil litigation brand on WordPress and Elementor: what is in place for SEO, plus an audit of the gaps in its public pages.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Law firms\",\"url\":\"https://trustedtechleader.com/case-studies/awarded-attorneys-civil-litigation-seo/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/awarded-attorneys-civil-litigation-seo/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Awarded Attorneys: WordPress and technical SEO for a civil litigation brand\",\"item\":\"https://trustedtechleader.com/case-studies/awarded-attorneys-civil-litigation-seo/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Awarded Attorneys: WordPress and technical SEO for a civil litigation brand</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="law-firms">Case study · Law firms</p>
      <h1 id="cs-title" className="h1-md">Awarded Attorneys: WordPress and technical SEO for a civil litigation brand</h1>
      <p className="lead">A California civil litigation brand covering family, probate, business and real estate disputes. This page describes how the site is built, what technical SEO is in place, and what a review of its public pages found.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Legal services: civil litigation in California</dd></div>
      <div><dt>Category</dt><dd>Law firms</dd></div>
      <div><dt>Scope</dt><dd>One live WordPress site, reviewed from public pages in October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>A civil litigation brand that wants each practice area, and each attorney, to have a page of its own and a clear route to a free case evaluation.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress, Elementor, All in One SEO Pro, Gravity Forms, Google Analytics via MonsterInsights</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A large content footprint for one brand: 15 service pages, 18 attorney profiles in the sitemap and a blog of roughly 237 posts, most dated 2026.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What is built</a></li>
      <li><a href="#features">Key pages and structure</a></li>
      <li><a href="#architecture">Technical SEO baseline</a></li>
      <li><a href="#implementation">Audit findings</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      <li><a href="#network">Same site network</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live site</h2>
      <p>Screenshots captured in October 2026. Each opens the live page.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://awardedattorneys.com/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>awardedattorneys.com</span></div>
      <img src="/case-studies/awarded-attorneys-civil-litigation-seo/home.jpg" width="1440" height="900" loading="lazy" alt="Homepage of Awarded Attorneys as captured in October 2026, showing a Local Attorneys hero, a red Free Consultation button and a Free Case Evaluation link in the navigation." />
      </a>
      <figcaption><b><a href="https://awardedattorneys.com/" rel="noopener" target="_blank">Awarded Attorneys: homepage</a></b> The homepage as captured in October 2026. It has no H1 (the main page heading that search engines read) in the rendered source. The hero button reads Free Consultation, while the navigation link reads Free Case Evaluation.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://awardedattorneys.com/service/will-contest/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>awardedattorneys.com/service/will-contest/</span></div>
      <img src="/case-studies/awarded-attorneys-civil-litigation-seo/inner.jpg" width="1440" height="900" loading="lazy" alt="Will contest service page of Awarded Attorneys as captured in October 2026; the intro paragraph shown is written for a divorce attorney." />
      </a>
      <figcaption><b><a href="https://awardedattorneys.com/service/will-contest/" rel="noopener" target="_blank">Awarded Attorneys: will contest page</a></b> A probate topic page whose hero intro paragraph still reads as divorce copy.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Civil litigation search is crowded, and the brand covers a wide range: divorce and custody, wills and trusts, contracts, real estate, and starting or defending a lawsuit. Each topic needs a page that matches the search, not one general page.</p>
      <p>The site also leans on its attorneys. A visitor needs to see who would handle the matter and be able to ask for a free case evaluation without hunting for the form. At the same time, the content has been produced in volume, and a site this size needs checks that each page says what its URL says.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The site runs on WordPress with Elementor and the Privsa theme. Services and attorneys are custom post types, served at <code>/service/</code> and <code>/team/</code>, with a hub page for each (<code>/practice-area/</code> and <code>/attorneys/</code>). The blog sits at <code>/blog/</code>, with posts filed under a Legal category.</p>
      <p>Every page repeats the same call and book-online buttons and a "Schedule your Free Case Evaluation" block. The case-evaluation page is a Gravity Forms form that begins with name, email, phone, zip code and a California or outside-California location choice, then continues on a second page with the case type.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key pages and structure</h2></div>
      <p className="body-sm">Read from the sitemap index and the live pages.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3><a href="https://awardedattorneys.com/practice-area/" rel="noopener">Service pages</a></h3><p>15 pages under <code>/service/</code>. Family law: divorce, custody, spousal support, child support, restraining orders and a family law overview. Probate: probate litigation, will contest, estate administration litigation and trust disputes. Civil: business litigation, contract dispute, real estate litigation, start a lawsuit and defend from a lawsuit.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3><a href="https://awardedattorneys.com/attorneys/" rel="noopener">Attorney profiles</a></h3><p>18 profiles under <code>/team/</code> in the sitemap; 11 are linked from the homepage. Whether the other seven are linked elsewhere on the site could not be confirmed. Each profile carries Person schema.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3><a href="https://awardedattorneys.com/blog/" rel="noopener">Blog</a></h3><p>About 237 URLs in the post sitemap: 9 dated 2023, 12 dated 2024, 38 dated 2025 and 177 dated 2026. Recent titles are "How courts resolve..." and "How courts evaluate..." explainers on trusts, contracts and corporate disputes.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3><a href="https://awardedattorneys.com/free-case-evaluation/" rel="noopener">Free case evaluation</a></h3><p>A multi-page Gravity Forms intake, linked from a repeated call to action on every page.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Supporting pages</h3><p>About, FAQ, privacy policy, disclaimer, terms and conditions, a thank-you page, and a "not viable" page.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">Technical SEO baseline</h2></div>
      <p>What is in place on the live site, confirmed in the page source, sitemaps and server responses.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Service and team post types, AIOSEO metadata, JSON-LD, Sitemap index, Gravity Forms and GA4">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Service and team post types</span><span className="cs-node__sub">/service/ and /team/ slugs</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AIOSEO Pro 4.5.3.1</span><span className="cs-node__sub">title, description, canonical</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">JSON-LD</span><span className="cs-node__sub">Organization, WebSite, WebPage, breadcrumbs</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sitemap index</span><span className="cs-node__sub">13 child sitemaps, in robots.txt</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Gravity Forms and GA4</span><span className="cs-node__sub">case evaluation, tracked</span></li>
      </ol>
      </div>
      <figcaption>Services and attorneys are their own post types. AIOSEO Pro adds the metadata, schema and sitemaps, and the pages lead to the Gravity Forms case-evaluation intake.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the baseline">
      <li>Every page checked (home, divorce, will contest, an attorney profile and the case-evaluation page) returns a canonical tag (a tag that tells search engines which address is the main one) pointing to itself and <code>max-image-preview:large</code>.</li>
      <li>JSON-LD (structured data that describes the page to search engines) includes Organization, WebSite with a SearchAction (markup describing the site's search box), WebPage and BreadcrumbList; service and attorney pages add Person and ImageObject.</li>
      <li>robots.txt (the file that tells search engines which areas to skip) blocks only <code>/wp-admin/</code> (allowing admin-ajax.php) and lists both <code>sitemap.xml</code> and <code>sitemap.rss</code>.</li>
      <li>The sitemap index lists 13 child sitemaps: posts, pages, services, team, cases, categories, tags and others.</li>
      <li>The WordPress REST API link header and a GA4 measurement tag (via MonsterInsights) are present on the homepage.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Audit findings</h2><p className="body-sm">Where the site still has room to improve.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Heading structure</h3><p>The homepage renders no H1 in the source; its headings are all H2 (second-level headings) and below. The will-contest page has one H1, but it reads "Why Choose Us ?", which says nothing about the topic. The divorce page, by contrast, has a topical H1. One descriptive H1 per page is the fix.</p></div></li>
      <li><div><h3>Duplicated and mismatched copy</h3><p>The will-contest page's hero intro ("As a highly experienced California divorce attorney, I am committed to...") is word for word the same as the divorce page's. A probate page that opens with divorce copy confuses readers and gives search engines near-duplicate text. Each service page needs its own introduction.</p></div></li>
      <li><div><h3>Image alt text</h3><p>12 of 22 images on the homepage have empty alt attributes. The same pattern shows on inner pages: 10 of 15 on will-contest, 8 of 10 on the Amiel Wade profile and 5 of 7 on the case-evaluation page. Descriptive alt text on attorney photos and section graphics is commonly recommended.</p></div></li>
      <li><div><h3>Title tags</h3><p>Every page title ends with the same "| Award Winning California Attorneys" tail, and the homepage starts with "Home -". Leading with the practice and "California" would use the most valuable words better.</p></div></li>
      <li><div><h3>Meta description on the homepage</h3><p>The homepage meta description is 355 characters of body copy that stops mid-sentence ("...we are poised to offer you"). It is longer than a search result will show and should be rewritten as a short summary.</p></div></li>
      <li><div><h3>Open Graph and sharing</h3><p>Open Graph tags (tags that control how a link previews when shared) are present (locale, site name, type, title, description, URL) but no og:image (the preview picture tag) was found on the five pages checked, so shared links have no preview image.</p></div></li>
      <li><div><h3>Caching and runtime</h3><p>HTML is served with <code>cache-control: no-store, no-cache, must-revalidate</code> and a PHPSESSID cookie is set on the homepage. The server reports PHP 7.4.33, which has reached end of life. Page caching and a current PHP version are commonly recommended for speed and security.</p></div></li>
      <li><div><h3>Version drift and theme</h3><p>The page source reports WordPress 6.4.13, Elementor 3.18.3 and AIOSEO Pro 4.5.3.1, and the theme path is <code>privsa</code>. Whether newer releases are available could not be confirmed from public pages. The x-powered-by header also reports PHP/7.4.33. A regular update routine for WordPress, the page builder, plugins and PHP is worth setting up.</p></div></li>
      <li><div><h3>Sitemap clutter</h3><p>The sitemap index lists builder and form content types (ElementsKit content and templates, MetForm forms) and a case-study type, alongside the real pages. The page sitemap also includes template pages such as <code>case-study-single</code>. Non-content types are usually left out of a sitemap.</p></div></li>
      <li><div><h3>Brand and ownership signals</h3><p>The footer says "Recognized Legal Experts owns and operates California Legal Professionals" and the copyright line reads "©2023, Wade Litigation", while the site is named Awarded Attorneys. The copyright year is also three years old. A consistent legal name and a current year are commonly recommended.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the page source and response headers.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress 6.4.13</li><li className="chip">Elementor 3.18.3</li><li className="chip">Privsa theme</li><li className="chip">ElementsKit Lite</li><li className="chip">Exclusive Addons</li></ul></dd></div>
      <div><dt>SEO</dt><dd><ul className="cs-chips"><li className="chip">All in One SEO Pro 4.5.3.1</li><li className="chip">JSON-LD schema</li><li className="chip">XML sitemap index</li></ul></dd></div>
      <div><dt>Leads and analytics</dt><dd><ul className="cs-chips"><li className="chip">Gravity Forms</li><li className="chip">MetForm</li><li className="chip">MonsterInsights</li><li className="chip">GA4</li></ul></dd></div>
      <div><dt>Hosting</dt><dd><ul className="cs-chips"><li className="chip">Apache</li><li className="chip">PHP 7.4.33</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables. No ranking or traffic numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives each practice area and each attorney a page of its own, with clean URLs and consistent metadata.</li>
      <li>Keeps search engines informed through canonicals, schema and a full sitemap index.</li>
      <li>Offers a free consultation or case evaluation (the label differs between the hero button and the navigation), with call and book-online buttons repeated across the site.</li>
      <li>Turns a page-by-page review into a short, ordered fix list: headings, duplicated copy, alt text, titles, caching and PHP.</li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="network" aria-labelledby="network-title">
      <div className="container">
      <div className="cs-sec-head"><h2 id="network-title">Part of the same site network</h2></div>
      <p className="body-sm">Awarded Attorneys links to four other California law-firm sites that share design and content patterns; each is described in its own case study. This site's footer reads &quot;Recognized Legal Experts owns and operates California Legal Professionals&quot; and &quot;©2023, Wade Litigation&quot;; this page draws no conclusion about who owns the other sites.</p>
      <ul className="cs-notes">
      <li><div><h3><Link href="/case-studies/legal-cali-multi-practice-law-firm-seo/">Legal Cali</Link></h3><p>WordPress and technical SEO for a multi-practice California law firm.</p></div></li>
      <li><div><h3><Link href="/case-studies/wade-litigation-location-pages-seo/">Wade Litigation</Link></h3><p>Location-page SEO and intake for a California litigation firm.</p></div></li>
      <li><div><h3><Link href="/case-studies/california-probate-attorneys-niche-seo/">California Probate Attorneys</Link></h3><p>A probate-only niche site.</p></div></li>
      <li><div><h3><Link href="/case-studies/california-civil-attorneys-service-page-seo/">California Civil Attorneys</Link></h3><p>Service-page SEO for a civil litigation site.</p></div></li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/legal-cali-multi-practice-law-firm-seo/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Legal Cali: WordPress and technical SEO for a multi-practice California law firm</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/wade-litigation-location-pages-seo/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Wade Litigation: location-page SEO and intake for a California litigation firm</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need SEO and WordPress work like this?</h2>
      <p className="body-sm">Tell us what the site needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
    </PageShell>
  );
}
