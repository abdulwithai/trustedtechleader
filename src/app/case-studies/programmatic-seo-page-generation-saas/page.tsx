import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Programmatic SEO page generator | Trusted Tech Leader"
  },
  "description": "A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes to WordPress, Shopify, WooCommerce and PrestaShop.",
  "alternates": {
    "canonical": "/case-studies/programmatic-seo-page-generation-saas/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Programmatic SEO page generator | Trusted Tech Leader",
    "description": "A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes to WordPress, Shopify, WooCommerce and PrestaShop.",
    "url": "https://trustedtechleader.com/case-studies/programmatic-seo-page-generation-saas/",
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
    "title": "Programmatic SEO page generator | Trusted Tech Leader",
    "description": "A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes to WordPress, Shopify, WooCommerce and PrestaShop.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Anonymized: described from the codebase; no client named; no metrics claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Programmatic SEO page generation SaaS\",\"description\":\"A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes to WordPress, Shopify, WooCommerce and PrestaShop.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"SaaS platforms\",\"url\":\"https://trustedtechleader.com/case-studies/programmatic-seo-page-generation-saas/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/programmatic-seo-page-generation-saas/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Programmatic SEO page generation SaaS\",\"item\":\"https://trustedtechleader.com/case-studies/programmatic-seo-page-generation-saas/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Programmatic SEO page generation SaaS</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="saas-platforms">Case study · SaaS platforms</p>
      <h1 id="cs-title" className="h1-md">Programmatic SEO page generation SaaS</h1>
      <p className="lead">A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes to WordPress, Shopify, WooCommerce and PrestaShop.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Marketing agencies and SEO</dd></div>
      <div><dt>Category</dt><dd>SaaS platforms</dd></div>
      <div><dt>Maturity</dt><dd>In active development; feature-rich app with CI regression workflows</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>SEO agencies, marketers and site owners who need to publish many location- or keyword-based pages.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>React, TypeScript, Supabase, Stripe</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One pipeline from spreadsheet rows to verified, SEO-scored pages live on the customer's own CMS, across several e-commerce and CMS platforms.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">Solution</a></li>
      <li><a href="#features">Key features</a></li>
      <li><a href="#architecture">Architecture</a></li>
      <li><a href="#implementation">Implementation</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">What it looks like in use</h2>
      <p>Setting up a campaign from a spreadsheet, then watching the pages move through to the customer's website.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative page generator screen showing a campaign set up from a spreadsheet and its pages being published">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Page generator: Campaigns</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Python courses by city</span></span><span><span className="m-pill m-pill--info">Processing</span></span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Campaign setup</span>
      <div className="m-row"><span>Template</span><span className="m-pill m-pill--info">Course in a city</span></div>
      <div className="m-row"><span>Data sources</span><span>Keyword group, locations list</span></div>
      <div className="m-row"><span><b>Keyword group</b> fills</span><span className="m-pill">{'{'}course{'}'}</span></div>
      <div className="m-row"><span><b>Locations</b> fills</span><span className="m-pill">{'{'}city{'}'}</span></div>
      <div className="m-row"><span>Title pattern</span><span className="m-pill">{'{'}course{'}'} Training in {'{'}city{'}'}</span></div>
      <div className="m-row"><span>Page address</span><span className="m-pill">/python-training-{'{'}city{'}'}</span></div>
      <div className="m-row"><span>Website</span><span className="m-pill m-pill--ok">WordPress connected</span></div>
      <span className="m-btn m-btn--mt">Generate pages</span>
      </div>
      <div className="m-card">
      <span className="m-title">Pages from this campaign</span>
      <div className="m-row"><span>Python Training in Toronto</span><span className="m-pill m-pill--ok">Published</span></div>
      <div className="m-row"><span>Python Training in Ottawa</span><span className="m-pill m-pill--ok">Published</span></div>
      <div className="m-row"><span>Python Training in Calgary</span><span className="m-pill m-pill--info">Publishing</span></div>
      <div className="m-row"><span>Python Training in Halifax</span><span className="m-pill m-pill--warn">Generating</span></div>
      <div className="m-row"><span>Four more pages</span><span className="m-pill">Pending</span></div>
      <div className="m-card m-card--accent m-card__title">
      <span className="m-title">Page preview</span>
      <span className="m-h">Python Training in Toronto</span>
      <div className="m-row"><span>Learn Python in Toronto with expert instructors.</span><span className="m-pill m-pill--ok">SEO checked</span></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/programmatic-seo-page-generation-saas/screen-1-mapping.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/programmatic-seo-page-generation-saas/screen-1-mapping.jpg" width="1184" height="836" loading="lazy" alt="A screen showing where each gap in the page layout gets its value, such as a keyword group for the course and a locations list for the city, though values can also come from a spreadsheet, above a live preview of the finished page." />
      </a>
      <figcaption><b>Real screen, sample data</b> Showing where each gap in the page layout gets its value (here the course comes from a keyword group and the city from a locations list; values can also come from a spreadsheet), with a live preview of the finished page. Sample data.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/programmatic-seo-page-generation-saas/screen-2-pages.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/programmatic-seo-page-generation-saas/screen-2-pages.jpg" width="1184" height="800" loading="lazy" alt="A campaign listing eight pages, each with a status." />
      </a>
      <figcaption><b>Real screen, sample data</b> One campaign listing its eight pages with a status for each. Simulated on a test setup with sample data.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From a spreadsheet to live pages</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="52" y="16" width="86" height="78" rx="4"></rect><rect className="s-fill" x="52" y="16" width="86" height="16"></rect><path className="s-stroke" d="M52 48 H138 M52 64 H138 M52 80 H138 M80 16 V94 M110 16 V94"></path><rect className="s-amber s-pulse" x="82" y="50" width="26" height="12"></rect></svg></div>
      <h3>Maya uploads a spreadsheet</h3>
      <p>Each row holds the details for one page, such as a course and a city.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="88" y="20" width="58" height="74" rx="4"></rect><path className="s-stroke" d="M96 36 h42 M96 72 h30 M96 80 h40"></path><rect className="s-amber" x="96" y="44" width="42" height="16" rx="3"></rect><rect className="s-fill" x="14" y="52" width="32" height="40" rx="3"></rect><path className="s-stroke s-move" d="M48 70 H82 M76 64 l6 6 l-6 6"></path></svg></div>
      <h3>She chooses a page layout</h3>
      <p>She picks a template and matches each gap in the page, such as the city name, to a spreadsheet column, a keyword group or a locations list.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="60" y="26" width="64" height="52" rx="4"></rect><rect className="s-paper" x="50" y="40" width="64" height="52" rx="4"></rect><rect className="s-paper s-move" x="40" y="54" width="64" height="48" rx="4"></rect><path className="s-stroke" d="M50 70 h40 M50 80 h28"></path></svg></div>
      <h3>One page is written for every row</h3>
      <p>The system fills in the template for each row, so every page has its own title, text and web address.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="36" y="16" width="62" height="78" rx="4"></rect><path className="s-stroke" d="M46 32 h42 M46 44 h42 M46 56 h24"></path><circle className="s-fill" cx="108" cy="68" r="18"></circle><path className="s-stroke" d="M121 81 L138 98"></path><circle className="s-blue s-pulse" cx="108" cy="68" r="11"></circle><path className="s-tick" d="M102 68 l4 4 l8 -9"></path></svg></div>
      <h3>Each page gets a quality check</h3>
      <p>Titles and page details are checked for search engines before anything is published.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="18" y="22" width="124" height="74" rx="5"></rect><rect className="s-fill" x="18" y="22" width="124" height="16" rx="5"></rect><path className="s-stroke" d="M48 30 h56 M30 52 h50 M30 64 h38"></path><rect className="s-amber" x="92" y="50" width="38" height="30" rx="3"></rect><circle className="s-blue s-pulse" cx="128" cy="86" r="12"></circle><path className="s-tick" d="M122 86 l4 4 l8 -9"></path></svg></div>
      <h3>The pages go live on the site she manages</h3>
      <p>The finished pages are sent straight to her WordPress or shop site, with the result shown for each one.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Publishing hundreds of near-identical landing pages, one per city, product or keyword, is slow and error-prone when done by hand in a CMS.</p>
      <p>Copy has to be unique enough to avoid duplicate-content problems, and each page needs correct metadata and structured data. Every target platform, from WordPress to Shopify, also has its own publishing API and page-builder format. The original brief asked for a SaaS where a user uploads a CSV, maps columns to template variables, generates one page per row and pushes them to a connected website. It also called for usage-based subscription plans and an admin panel for the platform owner.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>The platform is a React single-page dashboard backed by Supabase: Postgres, authentication and a large set of edge functions. Users create campaigns that combine a template, a CSV or keyword group and a connected website.</p>
      <p>A generation engine fills the variables, optionally enriches copy with AI, scores SEO quality and publishes through platform-specific connectors. The codebase has since grown into a broader suite: a template marketplace, an AI site builder, SEO audit and indexing tools, scheduled runs, workspaces with members and a companion WordPress plugin.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual">
      <p className="cs-visual__title">Campaign and page lifecycle</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 490" role="img" aria-labelledby="seo-life-t seo-life-d">
      <title id="seo-life-t">Campaign and page lifecycle in the page generation platform</title>
      <desc id="seo-life-d">State diagram in two parts. Campaign states: a draft is queued, a queued campaign is started by the scheduled runner and becomes processing, and processing ends as completed or failed. A processing campaign can be paused, and one that is stuck with no active job is reset to draft. Page states, one per CSV row: pending, generating, publishing, then published, with a failed state reachable from publishing.</desc>
      <defs><marker id="mk-seo-life-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-seo-life-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <text className="v-label" x="30" y="24" textAnchor="start">CAMPAIGN</text>
      <rect className="v-box v-box--soft" x="410" y="20" width="120" height="40" rx="8"></rect>
      <text className="v-text" x="470" y="44.5" textAnchor="middle">Paused</text>
      <rect className="v-box" x="30" y="100" width="120" height="52" rx="8"></rect>
      <text className="v-text" x="90" y="130.5" textAnchor="middle">Draft</text>
      <rect className="v-box" x="220" y="100" width="120" height="52" rx="8"></rect>
      <text className="v-text" x="280" y="130.5" textAnchor="middle">Queued</text>
      <rect className="v-box v-box--accent" x="410" y="100" width="120" height="52" rx="8"></rect>
      <text className="v-text" x="470" y="130.5" textAnchor="middle">Processing</text>
      <rect className="v-box v-box--dark" x="720" y="100" width="120" height="52" rx="8"></rect>
      <text className="v-text v-text--light" x="780" y="130.5" textAnchor="middle">Completed</text>
      <rect className="v-box" x="720" y="190" width="120" height="44" rx="8"></rect>
      <text className="v-text" x="780" y="216.5" textAnchor="middle">Failed</text>
      <path className="v-line" d="M150 126H220" markerEnd="url(#mk-seo-life-a)"></path>
      <text className="v-sub" x="185" y="118" textAnchor="middle">queue</text>
      <path className="v-line" d="M340 126H410" markerEnd="url(#mk-seo-life-a)"></path>
      <text className="v-sub" x="375" y="118" textAnchor="middle">start</text>
      <path className="v-line" d="M530 126H720" markerEnd="url(#mk-seo-life-a)"></path>
      <text className="v-sub" x="625" y="118" textAnchor="middle">all pages handled</text>
      <path className="v-line v-line--soft" d="M470 100V60" markerEnd="url(#mk-seo-life-a)" markerStart="url(#mk-seo-life-a)"></path>
      <text className="v-sub" x="480" y="84" textAnchor="start">pause</text>
      <path className="v-line" d="M470 152V212H720" markerEnd="url(#mk-seo-life-a)"></path>
      <text className="v-sub" x="595" y="204" textAnchor="middle">generation error</text>
      <path className="v-line v-line--soft v-line--accent" d="M440 152V262H90V152" markerEnd="url(#mk-seo-life-b)"></path>
      <text className="v-sub" x="265" y="254" textAnchor="middle">stuck with no active job: reset to draft</text>
      <text className="v-sub" x="280" y="176" textAnchor="middle">Scheduled runner starts due queued campaigns</text>
      <rect className="v-lane" x="20" y="300" width="860" height="170" rx="10"></rect>
      <text className="v-label" x="38" y="324" textAnchor="start">PAGE, ONE PER CSV ROW</text>
      <rect className="v-box" x="40" y="348" width="150" height="52" rx="8"></rect>
      <text className="v-text" x="115" y="378.5" textAnchor="middle">Pending</text>
      <rect className="v-box" x="250" y="348" width="150" height="52" rx="8"></rect>
      <text className="v-text" x="325" y="371" textAnchor="middle">Generating</text>
      <text className="v-sub" x="325" y="386" textAnchor="middle">fill, AI, SEO check</text>
      <rect className="v-box v-box--accent" x="460" y="348" width="150" height="52" rx="8"></rect>
      <text className="v-text" x="535" y="371" textAnchor="middle">Publishing</text>
      <text className="v-sub" x="535" y="386" textAnchor="middle">connector call</text>
      <rect className="v-box v-box--dark" x="670" y="348" width="150" height="52" rx="8"></rect>
      <text className="v-text v-text--light" x="745" y="371" textAnchor="middle">Published</text>
      <text className="v-sub v-sub--light" x="745" y="386" textAnchor="middle">live on the site</text>
      <rect className="v-box" x="460" y="420" width="150" height="40" rx="8"></rect>
      <text className="v-text" x="535" y="444.5" textAnchor="middle">Failed</text>
      <path className="v-line" d="M190 374H250" markerEnd="url(#mk-seo-life-a)"></path>
      <path className="v-line" d="M400 374H460" markerEnd="url(#mk-seo-life-a)"></path>
      <path className="v-line" d="M610 374H670" markerEnd="url(#mk-seo-life-a)"></path>
      <path className="v-line" d="M535 400V420" markerEnd="url(#mk-seo-life-a)"></path>
      </svg>
      </div>
      <figcaption>Top: a campaign moves from draft to queued to processing and ends completed or failed, with pause and a reset for stuck runs. Bottom: each CSV row becomes a page that moves through generating and publishing, and can fail without stopping the others.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Campaign wizard with CSV mapping</h3><p>Upload data, map columns to template variables, pick a site and generate pages in bulk.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Multi-platform publishing</h3><p>Connectors for WordPress, Shopify, WooCommerce and PrestaShop, plus an Elementor page-builder engine and a Gutenberg engine.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>AI content and SEO tooling</h3><p>AI row generation, content rewriting, translation, SEO optimisation and an analysis engine with analyzers and auto-fixers.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Template marketplace and kits</h3><p>Browsable layout templates, with template scanning and validation.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Scheduled, reversible publishing</h3><p>Queued campaigns run on a schedule, and published pages can be rolled back.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Indexing and internal linking</h3><p>Search-engine ping and indexing submission, plus automatic internal-link building.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Subscriptions, credits and invoicing</h3><p>Plan checkout, a customer portal, usage entitlements, AI credits and PDF invoices.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Admin panel and referral programme</h3><p>Owner-facing user, payment and website management, with affiliate and referral pages.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a spreadsheet row to a verified page on the customer's site.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: CSV and keyword data, Template engine, SEO engine, Connector layer, Target website, Supabase backend">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">CSV and keyword data</span><span className="cs-node__sub">upload, mapping, keyword groups</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Template engine</span><span className="cs-node__sub">variable fill, section variants, AI enrichment</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">SEO engine</span><span className="cs-node__sub">analyzers, fixers, quality score</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Connector layer</span><span className="cs-node__sub">WordPress, Shopify, WooCommerce, PrestaShop</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Target website</span><span className="cs-node__sub">pages published and verified</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Supabase backend</span><span className="cs-node__sub">Postgres with RLS, auth, edge functions</span></li>
      </ol>
      </div>
      <figcaption>Data and keyword groups feed a template engine. An SEO engine scores and fixes the output. A connector layer publishes to the target website, while the Supabase backend holds data, authentication and the edge functions behind every step.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>A scheduled runner picks up queued campaigns.</li>
      <li>Billing webhooks update plan entitlements that gate generation.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Workspace multi-tenancy</h3><p>Workspaces have owner, admin and member roles, with row-level security on most tables.</p></div></li>
      <li><div><h3>Column-level grant hardening</h3><p>Secrets such as site credentials, payment IDs and webhook secrets are readable only by the service role. A regression script runs in CI to guard this.</p></div></li>
      <li><div><h3>Encrypted third-party tokens</h3><p>Tokens are encrypted at rest with AES-GCM in a shared edge-function module.</p></div></li>
      <li><div><h3>Connector abstraction</h3><p>Each target platform implements a common interface, with theme adapters and asset import. New platforms plug into one factory.</p></div></li>
      <li><div><h3>Page-builder fidelity tests</h3><p>Fixtures, publish-verify and regression suites cover the Elementor engine and run in a dedicated workflow.</p></div></li>
      <li><div><h3>Internationalisation</h3><p>Roughly thirty locale files, build-time validation scripts and an in-app auto-translate provider.</p></div></li>
      <li><div><h3>Email queue and webhooks</h3><p>A transactional email queue handles suppression and unsubscribes, and Stripe webhooks are processed server-side.</p></div></li>
      <li><div><h3>Static prerender and sitemap</h3><p>Prerendering and sitemap generation run at build time, and the app deploys as a single-page app with rewrites.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">React 18</li><li className="chip">TypeScript</li><li className="chip">Vite</li><li className="chip">Tailwind CSS</li><li className="chip">shadcn/Radix UI</li><li className="chip">TanStack Query</li><li className="chip">React Router</li><li className="chip">Recharts</li><li className="chip">Framer Motion</li></ul></dd>
      </div>
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">Supabase</li><li className="chip">PostgreSQL</li><li className="chip">Supabase Auth</li><li className="chip">Deno edge functions</li></ul></dd>
      </div>
      <div>
      <dt>AI</dt>
      <dd><ul className="cs-chips"><li className="chip">OpenAI SDK</li><li className="chip">Multi-provider AI service module</li></ul></dd>
      </div>
      <div>
      <dt>Payments</dt>
      <dd><ul className="cs-chips"><li className="chip">Stripe</li></ul></dd>
      </div>
      <div>
      <dt>Integrations</dt>
      <dd><ul className="cs-chips"><li className="chip">WordPress REST API</li><li className="chip">Companion WordPress plugin</li><li className="chip">Shopify Admin API</li><li className="chip">WooCommerce</li><li className="chip">PrestaShop</li><li className="chip">Elementor</li><li className="chip">Google indexing</li><li className="chip">IndexNow</li></ul></dd>
      </div>
      <div>
      <dt>Quality</dt>
      <dd><ul className="cs-chips"><li className="chip">Vitest</li><li className="chip">Playwright</li><li className="chip">ESLint with a custom i18n plugin</li><li className="chip">GitHub Actions</li></ul></dd>
      </div>
      <div>
      <dt>Marketing assets</dt>
      <dd><ul className="cs-chips"><li className="chip">Remotion</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 588" role="img" aria-labelledby="seo-stack-t seo-stack-d">
      <title id="seo-stack-t">Technology stack layers of the page generation platform</title>
      <desc id="seo-stack-d">Layered diagram, top to bottom: frontend (React 18, TypeScript, Vite, Tailwind CSS, shadcn/Radix UI, TanStack Query, React Router, Recharts, Framer Motion); backend (Supabase, PostgreSQL, Supabase Auth, Deno edge functions); AI (OpenAI SDK, multi-provider AI service module); payments (Stripe); integrations with outside platforms (WordPress REST API, companion WordPress plugin, Shopify Admin API, WooCommerce, PrestaShop, Elementor, Google indexing, IndexNow); quality (Vitest, Playwright, ESLint with a custom i18n plugin, GitHub Actions); marketing assets (Remotion).</desc>
      <defs><marker id="mk-seo-stack-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-seo-stack-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <rect className="v-lane" x="20" y="10" width="860" height="104" rx="10"></rect>
      <text className="v-label" x="38" y="66" textAnchor="start">FRONTEND</text>
      <rect className="v-box" x="190" y="22" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="232.5" y="44" textAnchor="middle">React 18</text>
      <rect className="v-box" x="285" y="22" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="335" y="44" textAnchor="middle">TypeScript</text>
      <rect className="v-box" x="395" y="22" width="54" height="34" rx="8"></rect>
      <text className="v-text" x="422" y="44" textAnchor="middle">Vite</text>
      <rect className="v-box" x="459" y="22" width="115" height="34" rx="8"></rect>
      <text className="v-text" x="516.5" y="44" textAnchor="middle">Tailwind CSS</text>
      <rect className="v-box" x="584" y="22" width="138" height="34" rx="8"></rect>
      <text className="v-text" x="653" y="44" textAnchor="middle">shadcn/Radix UI</text>
      <rect className="v-box" x="732" y="22" width="130" height="34" rx="8"></rect>
      <text className="v-text" x="797" y="44" textAnchor="middle">TanStack Query</text>
      <rect className="v-box" x="190" y="66" width="115" height="34" rx="8"></rect>
      <text className="v-text" x="247.5" y="88" textAnchor="middle">React Router</text>
      <rect className="v-box" x="315" y="66" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="357.5" y="88" textAnchor="middle">Recharts</text>
      <rect className="v-box" x="410" y="66" width="123" height="34" rx="8"></rect>
      <text className="v-text" x="471.5" y="88" textAnchor="middle">Framer Motion</text>
      <rect className="v-lane" x="20" y="124" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="158" textAnchor="start">BACKEND</text>
      <rect className="v-box v-box--accent" x="190" y="136" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="232.5" y="158" textAnchor="middle">Supabase</text>
      <rect className="v-box v-box--accent" x="285" y="136" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="335" y="158" textAnchor="middle">PostgreSQL</text>
      <rect className="v-box v-box--accent" x="395" y="136" width="123" height="34" rx="8"></rect>
      <text className="v-text" x="456.5" y="158" textAnchor="middle">Supabase Auth</text>
      <rect className="v-box v-box--accent" x="528" y="136" width="168" height="34" rx="8"></rect>
      <text className="v-text" x="612" y="158" textAnchor="middle">Deno edge functions</text>
      <rect className="v-lane" x="20" y="194" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="228" textAnchor="start">AI</text>
      <rect className="v-box" x="190" y="206" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="240" y="228" textAnchor="middle">OpenAI SDK</text>
      <rect className="v-box" x="300" y="206" width="267" height="34" rx="8"></rect>
      <text className="v-text" x="433.5" y="228" textAnchor="middle">Multi-provider AI service module</text>
      <rect className="v-lane" x="20" y="264" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="298" textAnchor="start">PAYMENTS</text>
      <rect className="v-box" x="190" y="276" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="225" y="298" textAnchor="middle">Stripe</text>
      <rect className="v-lane" x="20" y="334" width="860" height="104" rx="10"></rect>
      <text className="v-label" x="38" y="390" textAnchor="start">INTEGRATIONS</text>
      <rect className="v-box v-box--soft" x="190" y="346" width="161" height="34" rx="8"></rect>
      <text className="v-text" x="270.5" y="368" textAnchor="middle">WordPress REST API</text>
      <rect className="v-box v-box--soft" x="361" y="346" width="222" height="34" rx="8"></rect>
      <text className="v-text" x="472" y="368" textAnchor="middle">Companion WordPress plugin</text>
      <rect className="v-box v-box--soft" x="593" y="346" width="153" height="34" rx="8"></rect>
      <text className="v-text" x="669.5" y="368" textAnchor="middle">Shopify Admin API</text>
      <rect className="v-box v-box--soft" x="756" y="346" width="108" height="34" rx="8"></rect>
      <text className="v-text" x="810" y="368" textAnchor="middle">WooCommerce</text>
      <rect className="v-box v-box--soft" x="190" y="390" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="240" y="412" textAnchor="middle">PrestaShop</text>
      <rect className="v-box v-box--soft" x="300" y="390" width="92" height="34" rx="8"></rect>
      <text className="v-text" x="346" y="412" textAnchor="middle">Elementor</text>
      <rect className="v-box v-box--soft" x="402" y="390" width="138" height="34" rx="8"></rect>
      <text className="v-text" x="471" y="412" textAnchor="middle">Google indexing</text>
      <rect className="v-box v-box--soft" x="550" y="390" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="592.5" y="412" textAnchor="middle">IndexNow</text>
      <rect className="v-lane" x="20" y="448" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="482" textAnchor="start">QUALITY</text>
      <rect className="v-box" x="190" y="460" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="225" y="482" textAnchor="middle">Vitest</text>
      <rect className="v-box" x="270" y="460" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="320" y="482" textAnchor="middle">Playwright</text>
      <rect className="v-box" x="380" y="460" width="267" height="34" rx="8"></rect>
      <text className="v-text" x="513.5" y="482" textAnchor="middle">ESLint with a custom i18n plugin</text>
      <rect className="v-box" x="657" y="460" width="130" height="34" rx="8"></rect>
      <text className="v-text" x="722" y="482" textAnchor="middle">GitHub Actions</text>
      <rect className="v-lane" x="20" y="518" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="552" textAnchor="start">MARKETING ASSETS</text>
      <rect className="v-box" x="190" y="530" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="232.5" y="552" textAnchor="middle">Remotion</text>
      </svg>
      </div>
      <figcaption>The app and backend sit in the first two layers. AI, payments and the outside platforms are services it calls. Only the integrations boxes are dashed, marking the outside platforms and services it publishes to.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Lets a small team publish large batches of location or keyword pages without manual CMS entry.</li>
      <li>Supports the Elementor and Gutenberg page builders and theme adapters, so generated pages fit the target site.</li>
      <li>Gives agencies a single workspace to manage several client sites and team members.</li>
      <li>Turns usage into plan tiers, credits and invoices without manual billing work.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/phone-parts-nz-woocommerce-store/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/self-hosted-screen-recorder-extension/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Open-source screen recorder and async video platform with bring-your-own storage</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need a system like this built?</h2>
      <p className="body-sm">Tell us what it needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
    </PageShell>
  );
}
