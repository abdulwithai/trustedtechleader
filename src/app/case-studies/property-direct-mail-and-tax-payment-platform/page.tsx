import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Property direct mail platform | Trusted Tech Leader"
  },
  "description": "A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.",
  "alternates": {
    "canonical": "/case-studies/property-direct-mail-and-tax-payment-platform/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Property direct mail platform | Trusted Tech Leader",
    "description": "A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.",
    "url": "https://trustedtechleader.com/case-studies/property-direct-mail-and-tax-payment-platform/",
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
    "title": "Property direct mail platform | Trusted Tech Leader",
    "description": "A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Property direct mail and tax payment platform\",\"description\":\"A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/property-direct-mail-and-tax-payment-platform/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/property-direct-mail-and-tax-payment-platform/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Property direct mail and tax payment platform\",\"item\":\"https://trustedtechleader.com/case-studies/property-direct-mail-and-tax-payment-platform/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Property direct mail and tax payment platform</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Property direct mail and tax payment platform</h1>
      <p className="lead">A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Real estate investing</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Established Laravel app migrating from a legacy codebase; deploy tooling and feature and browser tests present</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Real estate investor account owners, their sub-users, and platform administrators.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>PHP 8.2, Laravel 11, MySQL, Stripe</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One system that connects offer-letter campaigns, property pipeline records, tax-payment checks and accounting for land investors.</dd></div>
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
      <p>A mailing queue that sends letters at a steady pace, and a tax payments list where a property tax check is issued by a team member who has permission.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative screens showing a mailing queue of offer letters, and a tax payments list with an issued check.">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Mailing queue and tax payments</span></div>
      <div className="cs-screen__body">
      <div className="m-row">
      <span><span className="m-h">Mailing queue</span></span>
      <span className="m-actions"><span className="m-btn m-btn--ghost">Import Mailing Data</span></span>
      </div>
      <div className="m-grid m-cols-2">
      <div className="m-card">
      <span className="m-title">Offer letters</span>
      <div className="m-grid m-grid--tiles"><div className="m-thumb m-thumb--tile"><span aria-hidden="true">&#9993;</span> Letter<br />Queued</div><div className="m-thumb m-thumb--tile"><span aria-hidden="true">&#9993;</span> Letter<br />Sent</div></div>
      <div className="m-row"><span>List imported from a CSV file</span><span className="m-pill m-pill--info">Queued</span></div>
      <div className="m-row"><span>Letters go out a few at a time</span><span className="m-pill m-pill--ok">Sending</span></div>
      <div className="m-row"><span>Sending stops when the daily limit is reached</span><span className="m-pill m-pill--warn">Daily limit</span></div>
      </div>
      <div className="m-card m-card--accent">
      <span className="m-title">Mailing settings</span>
      <div className="m-row"><span>Sent by print-and-mail service</span><span className="m-pill m-pill--ok">Active</span></div>
      <div className="m-row"><span>Pause sending</span><span className="m-pill">Not paused</span></div>
      <div className="m-row"><span>Printed mail is billed once a day</span><span className="m-pill m-pill--info">Automatic</span></div>
      <div className="m-row"><span>Team members see only what they are allowed to</span><span className="m-pill m-pill--info">Permissions</span></div>
      </div>
      </div>
      <div className="m-row">
      <span><span className="m-h">Tax payments</span></span>
      <span className="m-actions"><span className="m-btn m-btn--ghost">Issued Checks</span></span>
      </div>
      <div className="m-grid">
      <div className="m-card">
      <span className="m-title">Properties</span>
      <div className="m-input">Search by APN</div>
      <div className="m-row"><span>010-100-512<br /><small>Example County, tax bill for the year</small></span><span className="m-pill m-pill--ok">Check issued</span></div>
      <div className="m-row"><span>Only team members with permission can issue checks.</span></div>
      <div className="m-actions"><span className="m-btn">Issue Check</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From a list of owners to a paid tax bill</h2>
      <ol className="cs-story">
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="30" y="30" width="50" height="62" rx="5"></rect><path className="s-stroke" d="M40 46h30M40 56h30M40 66h20M40 76h26"></path><rect className="s-fill s-stroke" x="96" y="46" width="44" height="34" rx="5"></rect><path className="s-stroke s-move" d="M84 63h8M89 58l5 5-5 5"></path><path className="s-stroke" d="M104 60h28M104 68h18"></path></svg></div><h3>You upload your list</h3><p>You choose a spreadsheet file of land owners and the letters join a queue.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-paper" cx="60" cy="58" r="30"></circle><path className="s-stroke" d="M60 38v20l13 8"></path><rect className="s-fill s-stroke s-move" x="102" y="38" width="38" height="26" rx="4"></rect><path className="s-stroke" d="M102 40l19 13 19-13"></path><rect className="s-paper" x="108" y="72" width="26" height="16" rx="3"></rect></svg></div><h3>Letters go out at a steady pace</h3><p>A few go out at a time, so you never send too many at once or past your daily limit.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="30" y="40" width="70" height="46" rx="5"></rect><path className="s-stroke" d="M30 42l35 24 35-24"></path><rect className="s-amber" x="108" y="30" width="30" height="36" rx="3"></rect><path className="s-stroke" d="M114 42h18M114 50h12"></path><path className="s-stroke s-move" d="M102 78h30M126 72l6 6-6 6"></path></svg></div><h3>A mail service prints and posts them</h3><p>Each letter is printed and mailed for you, and the cost is billed to your account through Stripe once a day.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="20" y="36" width="92" height="46" rx="5"></rect><path className="s-stroke" d="M30 52h36M30 62h24"></path><rect className="s-fill s-stroke" x="84" y="46" width="20" height="14" rx="2"></rect><circle className="s-blue s-pulse" cx="124" cy="72" r="16"></circle><path className="s-tick" d="M116 72l6 6 11-12"></path></svg></div><h3>You pay a property tax bill by check</h3><p>You find the property, and an allowed team member issues the county tax check.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="28" y="24" width="70" height="66" rx="6"></rect><rect className="s-solid" x="28" y="24" width="70" height="14" rx="6"></rect><path className="s-stroke" d="M40 52h46M40 62h46M40 72h28"></path><rect className="s-amber s-move" x="106" y="46" width="34" height="34" rx="6"></rect><path className="s-stroke" d="M113 60h20M113 68h14"></path></svg></div><h3>Sales reach your accounts</h3><p>When a property sells, the sale is recorded and copied into your accounting for you.</p></li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Land and property investors send large volumes of offer letters to owners, then must track every property, closing, due-diligence step, sale and county tax payment.</p>
      <p>In spreadsheets, that means manual mailing, scattered files, repeated re-keying into accounting and no controlled way to pay property taxes by check. Mail also has to be paced: sending too many letters at once, or outside a user's quota and paused settings, is risky. Each account may have many team members who should see only what their permissions allow.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>The platform imports mailing data from CSV files and queues it. A scheduled job drips letters out through a print-and-mail API or uploads them to a cloud storage folder. Users manage organisations, trusts, properties, closings, due diligence, sales and tax payments from one interface, with documents such as deeds generated from templates.</p>
      <p>Printed mail is billed through Stripe by a daily process, and tax-payment checks are issued through the same mail provider. Sales are pushed to Xero as manual journals. Account owners manage sub-users, permissions and EULA acceptance.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body">
      <figure className="cs-visual">
      <p className="cs-visual__title">One drip run, step by step</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 480" role="img" aria-labelledby="prop-seq-t prop-seq-d">
      <title id="prop-seq-t">Sequence of one mail drip run and daily billing</title>
      <desc id="prop-seq-d">Sequence diagram with five participants: scheduler, drip job, database, delivery and Stripe. Step 1: the scheduler starts the drip job. Step 2: the drip job checks the user and quota against the database. Then in a loop: step 3, the database returns the next queued mailing; step 4, the drip job sends the letter through the mail API or uploads it to a cloud folder; step 5, delivery accepts it; step 6, the drip job saves the result and counts it against the quota. Step 7: separately, a daily billing job charges the account through Stripe for mail sent.</desc>
      <defs><marker id="mk-prop-seq-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-prop-seq-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <path className="v-line v-line--soft" d="M90 76V470"></path>
      <rect className="v-box" x="20" y="10" width="140" height="56" rx="8"></rect>
      <text className="v-text" x="90" y="35" textAnchor="middle">Scheduler</text>
      <text className="v-sub" x="90" y="50" textAnchor="middle">scheduled command</text>
      <path className="v-line v-line--soft" d="M270 76V470"></path>
      <rect className="v-box v-box--accent" x="200" y="10" width="140" height="56" rx="8"></rect>
      <text className="v-text" x="270" y="35" textAnchor="middle">Drip job</text>
      <text className="v-sub" x="270" y="50" textAnchor="middle">dripping command</text>
      <path className="v-line v-line--soft" d="M450 76V470"></path>
      <rect className="v-box" x="380" y="10" width="140" height="56" rx="8"></rect>
      <text className="v-text" x="450" y="35" textAnchor="middle">Database</text>
      <text className="v-sub" x="450" y="50" textAnchor="middle">mailing queue</text>
      <path className="v-line v-line--soft" d="M630 76V470"></path>
      <rect className="v-box" x="560" y="10" width="140" height="56" rx="8"></rect>
      <text className="v-text" x="630" y="35" textAnchor="middle">Delivery</text>
      <text className="v-sub" x="630" y="50" textAnchor="middle">mail API or folder</text>
      <path className="v-line v-line--soft" d="M810 76V470"></path>
      <rect className="v-box" x="740" y="10" width="140" height="56" rx="8"></rect>
      <text className="v-text" x="810" y="35" textAnchor="middle">Stripe</text>
      <text className="v-sub" x="810" y="50" textAnchor="middle">card billing</text>
      <rect className="v-box v-box--soft" x="190" y="184" width="700" height="206" rx="8" fill="none"></rect>
      <text className="v-label" x="202" y="202" textAnchor="start">LOOP</text>
      <path className="v-line" d="M90 116H270" markerEnd="url(#mk-prop-seq-a)"></path>
      <text className="v-sub" x="180" y="109" textAnchor="middle">1  start drip run</text>
      <path className="v-line" d="M270 162H450" markerEnd="url(#mk-prop-seq-a)"></path>
      <text className="v-sub" x="360" y="155" textAnchor="middle">2  check user and quota</text>
      <path className="v-line v-line--soft v-line--accent" d="M450 230H270" markerEnd="url(#mk-prop-seq-b)"></path>
      <text className="v-sub" x="360" y="223" textAnchor="middle">3  next queued mailing</text>
      <path className="v-line" d="M270 276H630" markerEnd="url(#mk-prop-seq-a)"></path>
      <text className="v-sub" x="360" y="269" textAnchor="middle">4  send letter or upload</text>
      <path className="v-line v-line--soft v-line--accent" d="M630 322H270" markerEnd="url(#mk-prop-seq-b)"></path>
      <text className="v-sub" x="360" y="315" textAnchor="middle">5  accepted</text>
      <path className="v-line" d="M270 368H450" markerEnd="url(#mk-prop-seq-a)"></path>
      <text className="v-sub" x="360" y="361" textAnchor="middle">6  save result, count quota</text>
      <path className="v-line" d="M90 436H810" markerEnd="url(#mk-prop-seq-a)"></path>
      <text className="v-sub" x="720" y="429" textAnchor="middle">7  daily billing charge</text>
      </svg>
      </div>
      <figcaption>Read top to bottom. The drip job only sends while a user is active, has quota left and has queued mail; otherwise the user is skipped until a later run. Billing is a separate daily command, not part of the send loop.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>CSV mailing import and dripping queue</h3><p>Mapped uploads become queued mailings released on a schedule, within per-user daily limits and pause settings.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Print-and-mail or cloud-folder delivery</h3><p>Letters are sent through a mail API or exported to a user's storage account.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Property, trust and organisation records</h3><p>Advanced list filters, comments with user tagging and activity logs.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Closings, due diligence and sales</h3><p>Workflow objects that link mailings, properties and sales.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Deed document generation</h3><p>Word-based deed templates with storage and locator services.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Tax payment checks</h3><p>Search properties by parcel number and issue checks per organisation or trust, with test and live modes.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Accounting sync</h3><p>Sales become manual journals in Xero, with token renewal and bank balance import.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Account, subscription and permission management</h3><p>Account owners and sub-users, impersonation for support, and subscription sync from checkout and Stripe.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From an uploaded mailing list to a paid check and a posted journal.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: CSV import, Dripping queue, Delivery, Core records, Payments, Accounting">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">CSV import</span><span className="cs-node__sub">column mapping, validation</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Dripping queue</span><span className="cs-node__sub">per-user quotas, scheduled release</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Delivery</span><span className="cs-node__sub">print-and-mail API or cloud folder</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Core records</span><span className="cs-node__sub">properties, trusts, closings, sales</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Payments</span><span className="cs-node__sub">Stripe billing, tax-payment checks</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Accounting</span><span className="cs-node__sub">Xero manual journals</span></li>
      </ol>
      </div>
      <figcaption>Mapped CSV data enters a dripping queue that releases mail within quotas. Letters go out by print-and-mail API or cloud folder. Core property and sales records connect to payments, and sales flow on to accounting as manual journals.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Scheduled commands drive dripping, billing and journal uploads.</li>
      <li>Subscription events sync from checkout and Stripe.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Cron-driven pipelines</h3><p>Artisan commands handle dripping, billing, status updates, expiry emails and report mailing.</p></div></li>
      <li><div><h3>Daily Stripe billing job</h3><p>Mail costs are charged by class of mail and print options, with test-mode mail exempt.</p></div></li>
      <li><div><h3>Database triggers</h3><p>Triggers keep property fields in sync with mailings when mailings are deleted.</p></div></li>
      <li><div><h3>Strangler-style migration</h3><p>The legacy PHP app is autoloaded alongside the Laravel app, with legacy redirects and legacy-enabled test cases.</p></div></li>
      <li><div><h3>Policy-based authorisation</h3><p>Per-feature permissions, such as issuing checks, with feature flags via Laravel Pennant.</p></div></li>
      <li><div><h3>Sensitive value handling</h3><p>An encryption service, a custom password hasher, session tracking and EULA gates.</p></div></li>
      <li><div><h3>Layered testing</h3><p>PHPUnit feature tests, Dusk browser tests and a Codeception acceptance suite for the legacy code, with Sentry for error reporting.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">PHP 8.2</li><li className="chip">Laravel 11</li><li className="chip">Laravel Cashier</li><li className="chip">Pennant</li><li className="chip">Telescope</li></ul></dd>
      </div>
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">Blade views</li><li className="chip">Alpine.js</li><li className="chip">Tailwind CSS</li><li className="chip">Vite</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">MySQL or MariaDB with triggers</li></ul></dd>
      </div>
      <div>
      <dt>Integrations</dt>
      <dd><ul className="cs-chips"><li className="chip">Lob</li><li className="chip">Stripe</li><li className="chip">Xero</li><li className="chip">Dropbox</li><li className="chip">SamCart</li><li className="chip">AWS S3</li></ul></dd>
      </div>
      <div>
      <dt>Documents</dt>
      <dd><ul className="cs-chips"><li className="chip">PhpWord</li><li className="chip">mPDF</li><li className="chip">PDF parser</li></ul></dd>
      </div>
      <div>
      <dt>Monitoring</dt>
      <dd><ul className="cs-chips"><li className="chip">Sentry</li></ul></dd>
      </div>
      <div>
      <dt>Testing</dt>
      <dd><ul className="cs-chips"><li className="chip">PHPUnit</li><li className="chip">Laravel Dusk</li><li className="chip">Codeception</li><li className="chip">Paratest</li></ul></dd>
      </div>
      <div>
      <dt>Tooling</dt>
      <dd><ul className="cs-chips"><li className="chip">Makefile build and deploy targets</li><li className="chip">Laravel Pint</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body">
      <figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 570" role="img" aria-labelledby="prop-stack-t prop-stack-d">
      <title id="prop-stack-t">Technology stack layers of the property mail platform</title>
      <desc id="prop-stack-d">Layered diagram, top to bottom: frontend (Blade views, Alpine.js, Tailwind CSS, Vite); backend (PHP 8.2, Laravel 11, Laravel Cashier, Pennant, Telescope); documents (PhpWord, mPDF, PDF parser); data (MySQL or MariaDB with triggers); integrations with outside services (Lob, Stripe, Xero, Dropbox, SamCart, AWS S3); monitoring (Sentry); testing (PHPUnit, Laravel Dusk, Codeception, Paratest); tooling (Makefile build and deploy targets, Laravel Pint).</desc>
      <defs><marker id="mk-prop-stack-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-prop-stack-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <rect className="v-lane" x="20" y="10" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="44" textAnchor="start">FRONTEND</text>
      <rect className="v-box" x="190" y="22" width="108" height="34" rx="8"></rect>
      <text className="v-text" x="244" y="44" textAnchor="middle">Blade views</text>
      <rect className="v-box" x="308" y="22" width="92" height="34" rx="8"></rect>
      <text className="v-text" x="354" y="44" textAnchor="middle">Alpine.js</text>
      <rect className="v-box" x="410" y="22" width="115" height="34" rx="8"></rect>
      <text className="v-text" x="467.5" y="44" textAnchor="middle">Tailwind CSS</text>
      <rect className="v-box" x="535" y="22" width="54" height="34" rx="8"></rect>
      <text className="v-text" x="562" y="44" textAnchor="middle">Vite</text>
      <rect className="v-lane" x="20" y="80" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="114" textAnchor="start">BACKEND</text>
      <rect className="v-box v-box--accent" x="190" y="92" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="228.5" y="114" textAnchor="middle">PHP 8.2</text>
      <rect className="v-box v-box--accent" x="277" y="92" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="327" y="114" textAnchor="middle">Laravel 11</text>
      <rect className="v-box v-box--accent" x="387" y="92" width="138" height="34" rx="8"></rect>
      <text className="v-text" x="456" y="114" textAnchor="middle">Laravel Cashier</text>
      <rect className="v-box v-box--accent" x="535" y="92" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="573.5" y="114" textAnchor="middle">Pennant</text>
      <rect className="v-box v-box--accent" x="622" y="92" width="92" height="34" rx="8"></rect>
      <text className="v-text" x="668" y="114" textAnchor="middle">Telescope</text>
      <rect className="v-lane" x="20" y="150" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="184" textAnchor="start">DOCUMENTS</text>
      <rect className="v-box" x="190" y="162" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="228.5" y="184" textAnchor="middle">PhpWord</text>
      <rect className="v-box" x="277" y="162" width="54" height="34" rx="8"></rect>
      <text className="v-text" x="304" y="184" textAnchor="middle">mPDF</text>
      <rect className="v-box" x="341" y="162" width="100" height="34" rx="8"></rect>
      <text className="v-text" x="391" y="184" textAnchor="middle">PDF parser</text>
      <rect className="v-lane" x="20" y="220" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="254" textAnchor="start">DATA</text>
      <rect className="v-box" x="190" y="232" width="252" height="34" rx="8"></rect>
      <text className="v-text" x="316" y="254" textAnchor="middle">MySQL or MariaDB with triggers</text>
      <rect className="v-lane" x="20" y="290" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="324" textAnchor="start">INTEGRATIONS</text>
      <rect className="v-box v-box--soft" x="190" y="302" width="47" height="34" rx="8"></rect>
      <text className="v-text" x="213.5" y="324" textAnchor="middle">Lob</text>
      <rect className="v-box v-box--soft" x="247" y="302" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="282" y="324" textAnchor="middle">Stripe</text>
      <rect className="v-box v-box--soft" x="327" y="302" width="54" height="34" rx="8"></rect>
      <text className="v-text" x="354" y="324" textAnchor="middle">Xero</text>
      <rect className="v-box v-box--soft" x="391" y="302" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="429.5" y="324" textAnchor="middle">Dropbox</text>
      <rect className="v-box v-box--soft" x="478" y="302" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="516.5" y="324" textAnchor="middle">SamCart</text>
      <rect className="v-box v-box--soft" x="565" y="302" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="600" y="324" textAnchor="middle">AWS S3</text>
      <rect className="v-lane" x="20" y="360" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="394" textAnchor="start">MONITORING</text>
      <rect className="v-box" x="190" y="372" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="225" y="394" textAnchor="middle">Sentry</text>
      <rect className="v-lane" x="20" y="430" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="464" textAnchor="start">TESTING</text>
      <rect className="v-box" x="190" y="442" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="228.5" y="464" textAnchor="middle">PHPUnit</text>
      <rect className="v-box" x="277" y="442" width="115" height="34" rx="8"></rect>
      <text className="v-text" x="334.5" y="464" textAnchor="middle">Laravel Dusk</text>
      <rect className="v-box" x="402" y="442" width="108" height="34" rx="8"></rect>
      <text className="v-text" x="456" y="464" textAnchor="middle">Codeception</text>
      <rect className="v-box" x="520" y="442" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="562.5" y="464" textAnchor="middle">Paratest</text>
      <rect className="v-lane" x="20" y="500" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="534" textAnchor="start">TOOLING</text>
      <rect className="v-box" x="190" y="512" width="275" height="34" rx="8"></rect>
      <text className="v-text" x="327.5" y="534" textAnchor="middle">Makefile build and deploy targets</text>
      <rect className="v-box" x="475" y="512" width="115" height="34" rx="8"></rect>
      <text className="v-text" x="532.5" y="534" textAnchor="middle">Laravel Pint</text>
      </svg>
      </div>
      <figcaption>Server-rendered Laravel sits on top of one relational database. Outside services are shown dashed, and testing and tooling sit around the app.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Reduces manual mailing runs by pacing letters automatically within account limits.</li>
      <li>Keeps properties, closings and sales in one place instead of scattered spreadsheets.</li>
      <li>Reduces re-keying of sales into accounting by pushing journals automatically.</li>
      <li>Gives account owners control over who can issue checks or access which organisation.</li>
      <li>Provides a safe test mode before live mail or check issuing.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/ro-plant-monitoring-system/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Water-plant monitoring and reporting system</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/membership-sales-crm-and-billing/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Membership sales CRM, contracts and billing platform</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need a system like this built?</h2>
      <p className="body-sm">Tell us what it needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a> 
      </section>
      </main>
    </PageShell>
  );
}
