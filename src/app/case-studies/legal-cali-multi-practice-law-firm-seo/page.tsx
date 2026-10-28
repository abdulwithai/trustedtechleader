import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Legal Cali: law firm SEO | Trusted Tech Leader"
  },
  "description": "A multi-practice California firm site on WordPress and Elementor: 15 service pages, an AIOSEO baseline, and an audit of what still needs work.",
  "alternates": {
    "canonical": "/case-studies/legal-cali-multi-practice-law-firm-seo/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Legal Cali: law firm SEO | Trusted Tech Leader",
    "description": "A multi-practice California firm site on WordPress and Elementor: 15 service pages, an AIOSEO baseline, and an audit of what still needs work.",
    "url": "https://trustedtechleader.com/case-studies/legal-cali-multi-practice-law-firm-seo/",
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
    "title": "Legal Cali: law firm SEO | Trusted Tech Leader",
    "description": "A multi-practice California firm site on WordPress and Elementor: 15 service pages, an AIOSEO baseline, and an audit of what still needs work.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Legal Cali: WordPress and technical SEO for a multi-practice California law firm\",\"description\":\"A multi-practice California firm site on WordPress and Elementor: 15 service pages, an AIOSEO baseline, and an audit of what still needs work.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Law firms\",\"url\":\"https://trustedtechleader.com/case-studies/legal-cali-multi-practice-law-firm-seo/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/legal-cali-multi-practice-law-firm-seo/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Legal Cali: WordPress and technical SEO for a multi-practice California law firm\",\"item\":\"https://trustedtechleader.com/case-studies/legal-cali-multi-practice-law-firm-seo/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Legal Cali: WordPress and technical SEO for a multi-practice California law firm</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="law-firms">Case study · Law firms</p>
      <h1 id="cs-title" className="h1-md">Legal Cali: WordPress and technical SEO for a multi-practice California law firm</h1>
      <p className="lead">A multi-practice California firm site on WordPress and Elementor: 15 service pages, an AIOSEO baseline, and an audit of what still needs work.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Legal services: family law, probate, business and real estate litigation in California</dd></div>
      <div><dt>Category</dt><dd>Law firms</dd></div>
      <div><dt>Scope</dt><dd>One live WordPress site, <a href="https://legalcali.com/" rel="noopener" target="_blank">legalcali.com</a>, reviewed from public pages in October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>A California firm that handles family, probate and civil matters under one brand and needs each practice area, and each attorney, to be findable.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress 6.4, Elementor 3.26, All in One SEO Pro 4.9.3, Gravity Forms, MonsterInsights</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One brand with depth: 15 service pages, 19 attorneys named on one roster page, and a blog with 372 posts in its sitemap.</dd></div>
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
      <p>The homepage and one practice-area page, captured in October 2026. Each opens the live page.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://legalcali.com/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>legalcali.com</span></div>
      <img src="/case-studies/legal-cali-multi-practice-law-firm-seo/home.jpg" width="1440" height="900" loading="lazy" alt="Homepage of Legal Cali as captured in October 2026: the homepage hero, with a free case evaluation call to action." />
      </a>
      <figcaption><b><a href="https://legalcali.com/" rel="noopener" target="_blank">Legal Cali: homepage</a></b> The top of the homepage shows the navigation bar, a Family Law hero slider and a yellow Free Case Evaluation button.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://legalcali.com/service/divorce/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>legalcali.com/service/divorce/</span></div>
      <img src="/case-studies/legal-cali-multi-practice-law-firm-seo/inner.jpg" width="1440" height="900" loading="lazy" alt="Legal Cali divorce page as captured in October 2026: a practice-area page with a keyword-led heading and call and book-online buttons." />
      </a>
      <figcaption><b><a href="https://legalcali.com/service/divorce/" rel="noopener" target="_blank">Legal Cali: divorce page</a></b> A practice-area page with a keyword-led heading, Call Us and Book Online buttons, and a section on the divorce process.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Legal Cali presents one brand across several kinds of work: divorce and custody, trust and will disputes, contract and business litigation, and real estate disputes. A single site has to give each of those searches its own landing page, and still read as one firm.</p>
      <p>It also has to show who the lawyers are. The roster is long, and visitors need a short path from any page to a free case evaluation or a phone call.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The site runs on WordPress with Elementor. Practice areas live as individual pages under <code>/service/</code>, attorneys under <code>/team/</code>, and news articles under dated URLs. Every page ends with the same call block, &quot;Schedule Your Free Case Evaluation&quot;, with Call Us and Book Online buttons and a footer list of practice areas.</p>
      <p>All in One SEO Pro generates titles, canonicals (tags that tell search engines which address is the main one), JSON-LD (structured data that describes the page to search engines) and the XML sitemap. The footer states that WadeLitigation owns and operates Legal Cali. The end of this page lists other sites that link to each other and share design and content patterns.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key pages and structure</h2></div>
      <p className="body-sm">Counts come from the site's own XML sitemaps and page source, October 2026.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Service pages</h3><p>15 practice-area pages in the services sitemap: divorce, custody, child support, spousal support, family law, restraining order, start a lawsuit, defend from a lawsuit, contract dispute, business litigation, real estate litigation, probate litigation, will contest, trust disputes and estate administration litigation.</p><p className="body-sm">Pattern: <code>/service/divorce/</code>, one page per topic.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Attorney profiles</h3><p>The <a href="https://legalcali.com/attorneys/" rel="noopener" target="_blank">attorneys page</a> lists 19 names. The homepage shows 11 of them, and the sitemap holds 22 team URLs. Profiles carry admission, education and experience sections.</p><p className="body-sm">Pattern: <code>/team/david-chon/</code>.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Blog</h3><p>372 posts in the post sitemap, dated 2023 (35), 2024 (95), 2025 (65) and 2026 (177). The latest is dated 15 October 2026. Topics are civil and contract litigation, such as anti-SLAPP motions and the statute of frauds.</p><p className="body-sm">Pattern: <code>/2026/10/15/post-slug/</code>.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Conversion pages</h3><p>A free case evaluation page with a form, a Book Online link, a thank-you page after booking, and a &quot;not viable&quot; page for people whose matter the firm does not take. One phone number, +1 866 903 7848, is used on every page checked.</p><p className="body-sm">Forms: Gravity Forms and MetForm are both loaded.</p></li><li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Supporting pages</h3><p>About, awards, FAQ, practice areas, disclaimer, terms and a privacy page whose slug is <code>/private-policy/</code>. A case-study section lists nine case pages.</p><p className="body-sm">Pages in the page sitemap: 14.</p></li></ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">Technical SEO baseline</h2></div>
      <p>What is in place on legalcali.com, read from the page source, robots.txt, sitemaps and response headers.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Service and team URLs, AIOSEO metadata, JSON-LD graph, Sitemap index, Evaluation and tracking">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">/service/ and /team/ URLs</span><span className="cs-node__sub">15 and 22 in the sitemaps</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AIOSEO Pro 4.9.3</span><span className="cs-node__sub">title, canonical, Open Graph</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">JSON-LD graph</span><span className="cs-node__sub">Organization, WebSite, WebPage</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sitemap index</span><span className="cs-node__sub">posts, pages, services, teams, cases</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Evaluation and tracking</span><span className="cs-node__sub">Gravity Forms, MonsterInsights</span></li>
      </ol>
      </div>
      <figcaption>Service and team pages feed AIOSEO, which writes the metadata, schema and sitemap. Visitors then reach the case evaluation form or the phone number.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the baseline">
      <li>Every page checked returns a canonical tag, Open Graph and Twitter card tags (tags that control how a link previews when shared), <code>max-image-preview:large</code>, and a JSON-LD graph with BreadcrumbList, Organization, WebPage and WebSite.</li>
      <li>robots.txt (the file that tells search engines which areas to skip) blocks only <code>/wp-admin/</code>, allows <code>admin-ajax.php</code>, and lists <code>sitemap.xml</code> and <code>sitemap.rss</code>. The sitemap index is generated by AIOSEO and has separate files for posts, pages, services, teams and cases.</li>
      <li>The http and www hosts answer with a 301 redirect, an unknown URL returns a real 404, and the REST API at <code>/wp-json/</code> is open.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Audit findings</h2><p className="body-sm">Where the site still has room to improve.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Homepage has no H1</h3><p>The homepage source has no H1 (the main page heading that search engines read). Its headings start at H2 (second-level headings) (&quot;Probate Litigation&quot;, &quot;Family Law&quot;, &quot;Civil Litigation&quot;). On the divorce page the first heading is an H4, and the single H1 is further down and reads &quot;How is The Divorce Process in California?&quot;. The other 14 service pages each have one H1, but the order of headings above it was not checked on each.</p></div></li>
      <li><div><h3>Title tags and homepage description</h3><p>Every title ends in &quot;Legal Cali | Premium California Attorneys&quot; and the homepage title begins &quot;Home -&quot;. The homepage meta description is a run of page text (&quot;Legal Cali Probate Litigation Probate litigation can arise from...&quot;) rather than written copy, and the attorneys page description does the same.</p></div></li>
      <li><div><h3>Image alt text</h3><p>The homepage has 22 images and 6 have empty alt attributes. Service pages have 6 to 8 empty alts out of 10 or 11 images, and a sample attorney profile has 4 empty out of 6. None are missing the attribute, so the fix is to fill them in.</p></div></li>
      <li><div><h3>Caching and runtime</h3><p>The homepage is sent with <code>cache-control: no-store, no-cache, must-revalidate</code>. The server reports PHP 7.4.33, which is end of life, and the site reports WordPress 6.4.13, which is worth checking against the latest release. Several tracking cookies and a PHP session cookie are set on the first request.</p></div></li>
      <li><div><h3>Stale footer and a typo</h3><p>The footer reads &quot;©2024, WadeLitigation&quot; in October 2026 and links &quot;Privacy Policty&quot;. The privacy page lives at <code>/private-policy/</code> and its title is &quot;Private Policy&quot;.</p></div></li>
      <li><div><h3>Template content left on the site</h3><p>The <code>/case-study/</code> page shows nine case entries such as Medical Negligence, Intellectual Property and Competition and Antitrust, which are not practice areas listed on the site. The FAQ page description talks about securities lawyers and applications. Both look like leftover template text.</p></div></li>
      <li><div><h3>Roster inconsistencies</h3><p>Attorney counts differ across the homepage (11), the attorneys page (19) and the team sitemap (22). The attorneys page description says &quot;Xochitl Quezada&quot; while the heading says &quot;Xochitl Urena&quot;. Trust claims such as &quot;289+ years of combined experience&quot; and &quot;Top Rated Law Firm&quot; name no source or date.</p></div></li>
      <li><div><h3>Sparse organisation schema</h3><p>The Organization JSON-LD holds only a name, description and URL. No logo, telephone, address or sameAs profiles (links to the business's other official pages) are present, and the type is not LegalService. No street address was found in the footer.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the page source and response headers.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress 6.4.13</li><li className="chip">Elementor 3.26.0</li><li className="chip">ElementsKit Lite</li><li className="chip">Exclusive Addons</li><li className="chip">privsa theme</li></ul></dd></div>
      <div><dt>SEO</dt><dd><ul className="cs-chips"><li className="chip">All in One SEO Pro 4.9.3</li><li className="chip">JSON-LD schema</li><li className="chip">XML sitemap index</li></ul></dd></div>
      <div><dt>Leads and analytics</dt><dd><ul className="cs-chips"><li className="chip">Gravity Forms</li><li className="chip">MetForm</li><li className="chip">MonsterInsights</li><li className="chip">HandL UTM Grabber</li></ul></dd></div>
      <div><dt>Hosting</dt><dd><ul className="cs-chips"><li className="chip">Apache</li><li className="chip">PHP 7.4.33</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables. No ranking or traffic numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives each practice area its own page, title and canonical, so family, probate and civil searches can land on a matching page.</li>
      <li>Publishes named attorney profiles and a steady stream of explanatory articles, which supports trust and topical coverage.</li>
      <li>Offers three routes to contact on every page: a phone number, an online booking link and the free case evaluation form.</li>
      <li>Turns the audit above into a short fix list: headings, alt text, written descriptions, caching, PHP and stale content.</li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="network" aria-labelledby="network-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">08</span><h2 id="network-title">Part of the same site network</h2></div>
      <p className="body-sm">These sites link to each other and share design and content patterns, each with its own write-up. The Legal Cali footer names WadeLitigation as its owner; this page does not state who owns the others.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3><Link href="/case-studies/awarded-attorneys-civil-litigation-seo/">Awarded Attorneys</Link></h3><p>Civil litigation brand.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3><Link href="/case-studies/wade-litigation-location-pages-seo/">Wade Litigation</Link></h3><p>Founder-led firm site with location pages.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3><Link href="/case-studies/california-probate-attorneys-niche-seo/">California Probate Attorneys</Link></h3><p>Probate-only niche site.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3><Link href="/case-studies/california-civil-attorneys-service-page-seo/">California Civil Attorneys</Link></h3><p>Civil litigation service pages.</p></li></ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/aghaz-halal-investing-mobile-app/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Aghaz: halal goal-based investing mobile app for US investors</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/awarded-attorneys-civil-litigation-seo/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Awarded Attorneys: WordPress and technical SEO for a civil litigation brand</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need SEO and WordPress work like this?</h2>
      <p className="body-sm">Tell us what the site needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a> 
      </section>
      </main>
    </PageShell>
  );
}
