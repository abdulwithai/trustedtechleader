import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "California Civil Attorneys SEO | Trusted Tech Leader"
  },
  "description": "A civil litigation WordPress site with six service pages, attorney profiles and a large blog: what is in place, and what an audit found.",
  "alternates": {
    "canonical": "/case-studies/california-civil-attorneys-service-page-seo/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "California Civil Attorneys SEO | Trusted Tech Leader",
    "description": "A civil litigation WordPress site with six service pages, attorney profiles and a large blog: what is in place, and what an audit found.",
    "url": "https://trustedtechleader.com/case-studies/california-civil-attorneys-service-page-seo/",
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
    "title": "California Civil Attorneys SEO | Trusted Tech Leader",
    "description": "A civil litigation WordPress site with six service pages, attorney profiles and a large blog: what is in place, and what an audit found.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"California Civil Attorneys: service-page SEO for a civil litigation site\",\"description\":\"A civil litigation WordPress site with six service pages, attorney profiles and a large blog: what is in place, and what an audit found.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Law firms\",\"url\":\"https://trustedtechleader.com/case-studies/california-civil-attorneys-service-page-seo/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/california-civil-attorneys-service-page-seo/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"California Civil Attorneys: service-page SEO for a civil litigation site\",\"item\":\"https://trustedtechleader.com/case-studies/california-civil-attorneys-service-page-seo/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">California Civil Attorneys: service-page SEO for a civil litigation site</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="law-firms">Case study · Law firms</p>
      <h1 id="cs-title" className="h1-md">California Civil Attorneys: service-page SEO for a civil litigation site</h1>
      <p className="lead">A civil litigation WordPress site with six service pages, attorney profiles and a large blog: what is in place, and what an audit found.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Legal services: civil litigation in California</dd></div>
      <div><dt>Category</dt><dd>Law firms</dd></div>
      <div><dt>Scope</dt><dd>One live WordPress site, reviewed from public pages in October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>A civil litigation practice that wants people with a contract, business, real estate or lawsuit problem to reach the right page and ask for a free case evaluation.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress 6.2.14, Elementor 3.12.1, All in One SEO Pro 4.5.3.1, Gravity Forms, MonsterInsights</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>Six service pages built from one layout, each with its own definition, process and FAQ, backed by a 291-post blog and a single free case evaluation form.</dd></div>
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
      <p>The homepage and one service page, captured in October 2026. Each opens the live page.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://californiacivilattorneys.com/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>californiacivilattorneys.com</span></div>
      <img src="/case-studies/california-civil-attorneys-service-page-seo/home.jpg" width="1440" height="900" loading="lazy" alt="Homepage of California Civil Attorneys as captured in October 2026, with a Local Civil Attorneys hero, a red Free Consultation button and a Free Case Evaluation link in the navigation." />
      </a>
      <figcaption><b><a href="https://californiacivilattorneys.com/" rel="noopener" target="_blank">California Civil Attorneys: homepage</a></b> The hero shows "Local Civil Attorneys" and a Free Consultation button; the navigation link reads Free Case Evaluation.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://californiacivilattorneys.com/service/contract-disputes/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>californiacivilattorneys.com/service/contract-disputes/</span></div>
      <img src="/case-studies/california-civil-attorneys-service-page-seo/inner.jpg" width="1440" height="900" loading="lazy" alt="California Civil Attorneys contract disputes service page as captured in October 2026, opening with the heading 'What is a Civil Contract Dispute?'." />
      </a>
      <figcaption><b><a href="https://californiacivilattorneys.com/service/contract-disputes/" rel="noopener" target="_blank">California Civil Attorneys: contract disputes page</a></b> One of six service pages, opening with the heading &ldquo;What is a Civil Contract Dispute?&rdquo;.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Civil litigation is a broad label. Someone with a broken contract, a partner dispute or a lawsuit served on them rarely searches for &ldquo;civil litigation&rdquo;; they search for the specific problem. A civil practice needs a page for each of those problems, not one general home page.</p>
      <p>The site also has to show who the attorneys are, make the next step obvious, and stop a large blog from pulling the site away from the matters it actually handles.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The site gives each practice topic its own URL under /service/: contract disputes, business litigation, real estate disputes, start a lawsuit, defend from a lawsuit and restraining order. All six share one layout, so each reads the same way: a definition of the matter, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys involved and an FAQ.</p>
      <p>Attorney profiles live under /team/, a free case evaluation page holds the intake form, and a blog under /category/legal/ carries explanatory posts. A phone number and &ldquo;Schedule your Free Case Evaluation&rdquo; prompts repeat down the pages.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key pages and structure</h2></div>
      <p className="body-sm">Read from the public pages and the XML sitemaps. The page sitemap lists 13 pages and the services sitemap lists the six service URLs.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3><a href="https://californiacivilattorneys.com/service/contract-disputes/" rel="noopener">Contract disputes</a></h3><p>Opens with the H2 (second-level heading) &ldquo;What is a Civil Contract Dispute?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Contract disputes - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3><a href="https://californiacivilattorneys.com/service/business-litigation/" rel="noopener">Business litigation</a></h3><p>Opens with the H2 &ldquo;What is Business Litigation?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Business Litigation - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3><a href="https://californiacivilattorneys.com/service/real-estate-disputes/" rel="noopener">Real estate disputes</a></h3><p>Opens with the H2 &ldquo;What is a Real Estate Dispute?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Real estate disputes - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3><a href="https://californiacivilattorneys.com/service/start-a-lawsuit/" rel="noopener">Start a lawsuit</a></h3><p>Opens with the H2 &ldquo;What Is Starting A Lawsuit?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Start A Lawsuit - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">05</span><h3><a href="https://californiacivilattorneys.com/service/defend-from-a-lawsuit/" rel="noopener">Defend from a lawsuit</a></h3><p>Opens with the H2 &ldquo;What is Defending From A Lawsuit?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Defend From A Lawsuit - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">06</span><h3><a href="https://californiacivilattorneys.com/service/restraining-order/" rel="noopener">Restraining order</a></h3><p>Opens with the H2 &ldquo;What Is A Civil Restraining order?&rdquo;, then a case evaluation prompt, a &ldquo;Why Choose Us?&rdquo; block, a process section, the attorneys and an FAQ.</p><p className="body-sm"><strong>Page title:</strong> Restraining Order - California Civil Attorneys</p></li><li className="cell cs-feature"><span className="cs-feature__n">07</span><h3><a href="https://californiacivilattorneys.com/attorneys/" rel="noopener">Attorneys and profiles</a></h3><p>The attorneys page links 10 profiles under /team/, and the team sitemap lists 22 URLs. The homepage shows four (Amiel Wade, Evan Livingstone, Stephen Sayad and Victor A. Bullock). Profile pages list education and experience; Amiel Wade's also lists admissions and awards.</p><p className="body-sm"><strong>Schema:</strong> Person, WebPage, BreadcrumbList</p></li><li className="cell cs-feature"><span className="cs-feature__n">08</span><h3><a href="https://californiacivilattorneys.com/free-case-evaluation/" rel="noopener">Free case evaluation</a></h3><p>A Gravity Forms intake with first and last name, email, phone, zip code and a case type list, plus a call prompt at +1 (866) 503-5682.</p><p className="body-sm"><strong>Tracking:</strong> GA4 through MonsterInsights; a script rewrites call buttons when the URL carries a utm_medium value</p></li><li className="cell cs-feature"><span className="cs-feature__n">09</span><h3><a href="https://californiacivilattorneys.com/category/legal/" rel="noopener">Blog and news</a></h3><p>291 posts in the post sitemap, many titled &ldquo;How courts resolve ...&rdquo;, with three 2023 posts featured on the homepage.</p><p className="body-sm"><strong>Schema:</strong> BlogPosting</p></li></ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">Technical SEO baseline</h2></div>
      <p>What is in place on the live site, confirmed in the page source, robots.txt (the file that tells search engines which areas to skip), sitemaps and response headers.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Six service pages, AIOSEO metadata, Structured data, Sitemaps and robots, Case evaluation form">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Six service pages</span><span className="cs-node__sub">/service/ slugs, one layout</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AIOSEO metadata</span><span className="cs-node__sub">self-referencing canonicals, OG tags</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Structured data</span><span className="cs-node__sub">Organization, WebSite, Person, BlogPosting</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sitemaps and robots</span><span className="cs-node__sub">sitemap index, /wp-admin/ blocked</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Case evaluation form</span><span className="cs-node__sub">Gravity Forms, GA4 tracking</span></li>
      </ol>
      </div>
      <figcaption>Each service page feeds the SEO plugin, which emits canonicals, social tags, schema and the sitemaps. Visitors reach the free case evaluation form from repeated prompts on the pages.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the baseline">
      <li>Every page fetched returns a canonical tag (a tag that tells search engines which address is the main one) that points to itself, a robots meta (a tag that tells search engines how to treat the page) of <code>max-image-preview:large</code> and Open Graph and Twitter card tags (tags that control how a link previews when shared).</li>
      <li>robots.txt blocks only <code>/wp-admin/</code> (allowing admin-ajax.php) and lists <code>sitemap.xml</code> and <code>sitemap.rss</code>. The sitemap index includes posts, pages, services, teams, cases, categories and Elementor template types.</li>
      <li>http requests are redirected with a 301.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Audit findings</h2><p className="body-sm">Reviewed from public pages in October 2026. Where the site still has room to improve.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Heading structure</h3><p>The homepage renders three H1 elements (main page headings that search engines read: &ldquo;Award Winning Attorneys&rdquo;, &ldquo;Local Civil Attorneys&rdquo; and &ldquo;285 Years Of Combined Experience&rdquo;), none of which names the practice or California. The six service pages, the attorney pages, the case-evaluation page and the blog posts checked render no H1 in the source; the page names sit in H2 elements. One descriptive H1 per page is commonly recommended.</p></div></li>
      <li><div><h3>Meta descriptions</h3><p>All six service pages carry the same description, &ldquo;The demand and appetite improve meats in technology is only&rdquo;, which reads as leftover template copy. The practice areas page description is the page's scraped body text and includes that same placeholder phrase. The homepage description is the page's opening copy run together (&ldquo;California Civil Attorney Award Winning Attorneys If you're facing a civil legal dispute...&rdquo;). A written description per page would replace both.</p></div></li>
      <li><div><h3>Title tags</h3><p>The homepage title is &ldquo;Home - California Civil Attorneys&rdquo;. Service titles follow the pattern &ldquo;Contract disputes - California Civil Attorneys&rdquo;, which names the topic but not the intent or a location, and the homepage title spends its first word on &ldquo;Home&rdquo;.</p></div></li>
      <li><div><h3>Structured data type</h3><p>Service pages emit JSON-LD (structured data that describes the page to search engines) of types WebPage, Person, Organization, WebSite and BreadcrumbList. No Service or LegalService type was found on them. Blog posts emit BlogPosting. A service-level type with the firm's name, phone and area served is commonly recommended for practice pages.</p></div></li>
      <li><div><h3>Image alt text</h3><p>On the homepage 9 of 18 images have no alt text, and each of the six service pages has 6 of 12 without it. The two attorney profiles checked have 7 of 9 without it. Descriptive alt text on team photos and section graphics is commonly recommended.</p></div></li>
      <li><div><h3>Footer and freshness signals</h3><p>The footer reads &ldquo;&copy;2023&rdquo; while the blog lists posts dated through October 2026, and the homepage blog block still shows three 2023 posts.</p></div></li>
      <li><div><h3>Blog volume and topical fit</h3><p>The post sitemap lists 291 URLs: 61 dated 2023, 11 from 2024, 42 from 2025 and 177 from 2026, including a run of near-daily posts in October 2026. Many fit a civil litigation site (partition by sale, arbitration awards, security deposits, stock purchase agreements). Others sit closer to probate or family law: &ldquo;How Courts Resolve Trust Decanting Disputes&rdquo; (13 October), &ldquo;How Courts Resolve Probate Creditor Claims&rdquo; (15 October) and posts on custody and divorce. &ldquo;How Courts Evaluate Prescriptive Easement Claims&rdquo; (14 October) is a real property topic that fits the real estate service page. One 2023 post, &ldquo;Wade Law Group Reviews&rdquo;, is about another firm brand. Linking each post to the matching service page, and leaving probate and family topics to the other sites that cover them, is commonly recommended to keep topical focus.</p></div></li>
      <li><div><h3>Case-evaluation options</h3><p>The form's case type list includes Fraud, Partnership disputes, Business dissolutions, Undue influence and Landlord towards tenant disputes, but also Criminal Defense, Police Brutality, False Imprisonment, CPS Case and Medical or Mal Practice. The site has no service pages for those, so the form asks for case types the site does not describe.</p></div></li>
      <li><div><h3>Pages in the sitemap</h3><p>The page sitemap lists thank-you-for-booking, not-viable, faq, case-study and case-study-single. They carry no noindex tag (an instruction telling search engines to leave a page out of results; only max-image-preview:large). Their titles (&ldquo;Not Viable&rdquo;, &ldquo;Case study single&rdquo;, &ldquo;Faq&rdquo;) look like utility or template pages; their content was not reviewed. Whether they should be indexed could not be confirmed.</p></div></li>
      <li><div><h3>Team navigation</h3><p>The homepage shows four attorneys, while the attorneys page links 10 profiles and does not list Stephen Sayad. The header menu links three profiles (Amiel Wade, Victor A. Bullock, Evan Livingstone) and omits Stephen Sayad, though his page exists at /team/stephen-sayad/ and is linked from the homepage.</p></div></li>
      <li><div><h3>Caching, runtime and cookies</h3><p>HTML is sent with cache-control no-store, no-cache, must-revalidate, and the homepage sets a PHPSESSID cookie. The server reports PHP/7.4.33, which has reached end of life, with WordPress 6.2.14 and Elementor 3.12.1, both older releases. Page caching and updates are commonly recommended for speed and security.</p></div></li>
      <li><div><h3>Trust claims</h3><p>&ldquo;Award Winning Attorneys&rdquo;, &ldquo;285 Years Of Combined Experience&rdquo; and &ldquo;Civil Law Firm of the Year in California&rdquo; appear without an issuer or date on the pages reviewed. Naming the source of each is commonly recommended.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the page source and response headers.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress 6.2.14</li><li className="chip">Elementor 3.12.1</li><li className="chip">ElementsKit Lite</li><li className="chip">Exclusive Addons</li><li className="chip">Theme: privsa</li></ul></dd></div>
      <div><dt>SEO</dt><dd><ul className="cs-chips"><li className="chip">All in One SEO Pro 4.5.3.1</li><li className="chip">JSON-LD schema</li><li className="chip">XML sitemaps</li></ul></dd></div>
      <div><dt>Leads and analytics</dt><dd><ul className="cs-chips"><li className="chip">Gravity Forms</li><li className="chip">MonsterInsights</li><li className="chip">Google Analytics 4</li><li className="chip">Click-to-call</li></ul></dd></div>
      <div><dt>Hosting</dt><dd><ul className="cs-chips"><li className="chip">Apache</li><li className="chip">PHP 7.4.33</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables. No ranking or traffic numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives each civil matter type its own page, so a visitor with a specific problem lands on a page about it.</li>
      <li>Provides canonicals, schema and sitemaps that search engines can read without extra work.</li>
      <li>Repeats prompts toward a free case evaluation form (the hero button reads Free Consultation, the navigation link reads Free Case Evaluation) and a phone number.</li>
      <li>Turns a public-page audit into a short, ordered fix list: headings, descriptions, alt text, caching and a tighter blog.</li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="network" aria-labelledby="network-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">08</span><h2 id="network-title">Part of the same site network</h2></div>
      <p className="body-sm">Four related California legal sites, each described in its own case study.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3><Link href="/case-studies/legal-cali-multi-practice-law-firm-seo/">Legal Cali</Link></h3><p>Multi-practice firm site covering family, probate, business and real estate litigation.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3><Link href="/case-studies/awarded-attorneys-civil-litigation-seo/">Awarded Attorneys</Link></h3><p>Civil litigation brand that shares design patterns with this site.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3><Link href="/case-studies/wade-litigation-location-pages-seo/">Wade Litigation</Link></h3><p>Founder-led firm site with city and county location pages.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3><Link href="/case-studies/california-probate-attorneys-niche-seo/">California Probate Attorneys</Link></h3><p>Probate-only site: trust disputes, contested wills and estate litigation.</p></li></ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/california-probate-attorneys-niche-seo/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">California Probate Attorneys: niche WordPress SEO for a probate-only site</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/spa-fleet-rental-wordpress-woocommerce-seo/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Spa Fleet: WordPress, WooCommerce and technical SEO for a mobile sauna rental business</span></Link>
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
