import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Multi-tenant pharmacy ERP and POS | Trusted Tech Leader"
  },
  "description": "A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.",
  "alternates": {
    "canonical": "/case-studies/multi-tenant-pharmacy-erp-pos/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Multi-tenant pharmacy ERP and POS | Trusted Tech Leader",
    "description": "A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.",
    "url": "https://trustedtechleader.com/case-studies/multi-tenant-pharmacy-erp-pos/",
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
    "title": "Multi-tenant pharmacy ERP and POS | Trusted Tech Leader",
    "description": "A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Multi-tenant pharmacy ERP and POS\",\"description\":\"A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/multi-tenant-pharmacy-erp-pos/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/multi-tenant-pharmacy-erp-pos/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Multi-tenant pharmacy ERP and POS\",\"item\":\"https://trustedtechleader.com/case-studies/multi-tenant-pharmacy-erp-pos/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Multi-tenant pharmacy ERP and POS</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Multi-tenant pharmacy ERP and POS</h1>
      <p className="lead">A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO (first expired, first out) inventory and an offline-capable retail point of sale.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Pharmacy retail and distribution</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Phases 1-3 complete (accounting, inventory and invoicing, point of sale), plus PDFs, aging reports, a dashboard, fiscal periods and brand/branch management. Tax-authority integration and notifications are not built.</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Pharmacy owners, distributors, accountants, cashiers and inventory staff.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Next.js, FastAPI, PostgreSQL, Celery</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>Pharmacy-specific stock and expiry mechanics sitting on a tamper-resistant ledger, with tenant isolation enforced in the database itself.</dd></div>
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
      <p>The till screen a cashier works from, including what it shows when the shop loses its internet connection.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative pharmacy till screen showing an offline sale being saved">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Pharmacy till: Riverside branch</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Riverside branch</span></span><span><span className="m-pill m-pill--ok">Shift open</span> <span className="m-sync m-sync--off">Offline, sales are being saved</span></span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Tap a product to add it</span>
      <div className="m-grid m-grid--tiles">
      <div className="m-thumb m-thumb--tile">Paracetamol 500mg<br />Rs 3.50</div>
      <div className="m-thumb m-thumb--tile">Cough Syrup 120ml<br />Rs 245</div>
      <div className="m-thumb m-thumb--tile">Multivitamin Adult<br />Rs 22</div>
      <div className="m-thumb m-thumb--tile">Domperidone 10mg<br />Rs 6</div>
      <div className="m-thumb m-thumb--tile">Ibuprofen 400mg<br />Rs 5</div>
      <div className="m-thumb m-thumb--tile">Metformin 500mg<br />Rs 4</div>
      </div>
      </div>
      <div className="m-card">
      <span className="m-title">Cart</span>
      <div className="m-row"><span>Paracetamol 500mg<br /><small>Rs 3.50 each, quantity - 2 +</small></span><span>Rs 7.00</span></div>
      <div className="m-row"><span>Cough Syrup 120ml<br /><small>Rs 245 each, quantity - 1 +</small></span><span>Rs 245.00</span></div>
      <div className="m-row"><span>Subtotal</span><span>Rs 252.00</span></div>
      <div className="m-row"><span>Tax</span><span>Rs 3.50</span></div>
      <div className="m-row"><span>Total</span><span className="m-total">Rs 255.50</span></div>
      <span className="m-btn m-btn--mt">Charge Rs 255.50</span>
      </div>
      </div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card m-card--accent">
      <span className="m-title">Waiting to send</span>
      <div className="m-row"><span>Sale saved on this till</span><span className="m-pill m-pill--warn">Queued</span></div>
      <div className="m-row"><span>Sale saved on this till</span><span className="m-pill m-pill--warn">Queued</span></div>
      <div className="m-row"><span>Sale saved on this till</span><span className="m-pill m-pill--warn">Queued</span></div>
      <div className="m-row"><span>They are sent when the connection returns</span><span className="m-pill m-pill--info">Automatic</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Behind the scenes</span>
      <div className="m-row"><span>Stock close to its expiry date is picked up by a daily check</span><span className="m-pill m-pill--warn">Daily check</span></div>
      <div className="m-row"><span>When a sale is posted, the soonest-expiring batch is used first</span><span className="m-pill m-pill--ok">Automatic</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample products and amounts, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/multi-tenant-pharmacy-erp-pos/screen-1-till.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/multi-tenant-pharmacy-erp-pos/screen-1-till.jpg" width="1440" height="900" loading="lazy" alt="A till screen with product buttons, a sale in progress and a running total." />
      </a>
      <figcaption><b>Real screen, sample data</b> The till screen: tap products to build a sale and see the total. Sample products and prices.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/multi-tenant-pharmacy-erp-pos/screen-2-batches.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/multi-tenant-pharmacy-erp-pos/screen-2-batches.jpg" width="1440" height="900" loading="lazy" alt="A table of stock batches sorted by soonest expiry, filtered to items expiring within 90 days." />
      </a>
      <figcaption><b>Real screen, sample data</b> Stock batches listed with the soonest expiry first, filtered to items expiring within 90 days. Sample stock.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">A day at the till</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-fill" x="10" y="74" width="140" height="28" rx="4"></rect><path className="s-stroke" d="M10 74 H150"></path><circle className="s-paper" cx="58" cy="34" r="12"></circle><path className="s-stroke" d="M38 74 V58 a20 20 0 0 1 40 0 V74"></path><rect className="s-paper" x="92" y="46" width="48" height="28" rx="4"></rect><rect className="s-fill" x="98" y="52" width="36" height="10" rx="2"></rect><circle className="s-blue" cx="106" cy="68" r="2.5"></circle><path className="s-stroke" d="M114 68 h16"></path><rect className="s-paper s-move" x="76" y="84" width="22" height="12" rx="2"></rect></svg></div>
      <h3>Maria rings up a sale</h3>
      <p>She taps the products on the till and takes payment, the same as on any modern counter.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-fill" cx="50" cy="55" r="32"></circle><path className="s-stroke" d="M30 48 a28 28 0 0 1 40 0 M37 56 a18 18 0 0 1 26 0"></path><circle className="s-solid" cx="50" cy="66" r="3"></circle><path className="s-stroke" d="M28 82 L72 28"></path><rect className="s-paper s-move" x="96" y="30" width="38" height="50" rx="4"></rect><path className="s-stroke" d="M104 44 h22 M104 54 h22 M104 64 h14"></path><circle className="s-amber s-pulse" cx="140" cy="28" r="6"></circle></svg></div>
      <h3>The internet drops, selling carries on</h3>
      <p>The till saves each sale on its own and keeps a queue, so customers are never turned away.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-stroke" d="M50 52 H150 M50 98 H150"></path><rect className="s-amber s-move" x="56" y="22" width="28" height="30" rx="2"></rect><path className="s-stroke" d="M56 32 H84"></path><text x="70" y="46" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0F1A2A">EXP</text><rect className="s-paper" x="88" y="26" width="26" height="26"></rect><rect className="s-paper" x="118" y="26" width="26" height="26"></rect><rect className="s-paper" x="56" y="70" width="26" height="28"></rect><rect className="s-fill" x="86" y="70" width="26" height="28"></rect><circle className="s-blue s-pulse" cx="22" cy="55" r="7"></circle></svg></div>
      <h3>Stock with the nearest expiry goes first</h3>
      <p>When a box is sold, the stock that expires soonest is taken first, so medicines are used before they expire.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-stroke" d="M80 30 V90 M56 90 H104 M30 42 H130"></path><path className="s-stroke" d="M30 42 L18 68 H42 Z M130 42 L118 68 H142 Z"></path><path className="s-fill" d="M18 68 a12 6 0 0 0 24 0 Z M118 68 a12 6 0 0 0 24 0 Z"></path><circle className="s-blue s-pulse" cx="80" cy="20" r="10"></circle><path className="s-tick" d="M75 20 l4 4 l7 -8"></path></svg></div>
      <h3>The books balance on their own</h3>
      <p>Every sale updates the accounts automatically, and the system refuses any entry that does not add up.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="12" y="44" width="46" height="50"></rect><path className="s-amber" d="M8 44 L16 28 H54 L62 44 Z"></path><rect className="s-fill" x="22" y="56" width="14" height="38"></rect><rect className="s-paper" x="102" y="44" width="46" height="50"></rect><path className="s-blue" d="M98 44 L106 28 H144 L152 44 Z"></path><rect className="s-fill" x="124" y="56" width="14" height="38"></rect><rect className="s-solid" x="68" y="54" width="24" height="20" rx="3"></rect><path className="s-stroke" d="M73 54 v-8 a7 7 0 0 1 14 0 v8"></path><circle className="s-amber" cx="80" cy="64" r="3"></circle></svg></div>
      <h3>Each pharmacy sees only its own data</h3>
      <p>Each pharmacy's data is kept separate, enforced in the database itself.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Pharmacies and distributors need stock tracked by batch and expiry, packs sold loose or by box, trade schemes applied at invoicing, and books that reconcile to the ledger.</p>
      <p>Generic ERPs rarely handle expiry-driven picking or recoverable manufacturer claims, and retail counters cannot stop selling when the connection drops. The brief also required one login to span several businesses, such as an accountant serving several pharmacies. Roles are strict: cashiers must not see profit and managers must not see equity. The design must also be able to serve other variable-unit industries later.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A Next.js frontend talks to a FastAPI service over PostgreSQL. Every tenant table carries a tenant id and is protected by row-level security set per request from the login token, so isolation does not rely on application filters alone. Database triggers protect financial postings.</p>
      <p>Inventory, sales and POS flows all post balanced journal entries atomically. The retail terminal caches the catalogue in the browser and queues sales locally for later sync. Billing is provider-agnostic, with manual plan activation for the first release.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual"><p className="cs-visual__title">Mechanism: an offline sale reaching the ledger</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 474" role="img" aria-labelledby="pharmacy-a-t pharmacy-a-d"><title id="pharmacy-a-t">Offline POS sale reaching the ledger</title><desc id="pharmacy-a-d">Sequence diagram with four participants: cashier terminal, browser store, FastAPI service and PostgreSQL. Step 1: the terminal looks up a product in the cached catalogue. Step 2: it saves the sale to the offline queue, which works without a network. Step 3: when the connection returns, the queued sale is sent to the API. Step 4: the API sets the tenant from the login token and opens one transaction. Step 5: the API allocates stock oldest-expiry first and posts the invoice and journal entry. Step 6: database triggers reject unbalanced or edited postings.</desc><defs><marker id="mk-pharmacy-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-pharmacy-a-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><line className="v-line v-line--soft" x1="150" y1="54" x2="150" y2="460"></line><rect className="v-box" x="75.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="150.0" y="36.0" textAnchor="middle">Cashier terminal</text><line className="v-line v-line--soft" x1="370" y1="54" x2="370" y2="460"></line><rect className="v-box v-box--accent" x="295.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="370.0" y="36.0" textAnchor="middle">Browser store</text><line className="v-line v-line--soft" x1="590" y1="54" x2="590" y2="460"></line><rect className="v-box" x="515.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="590.0" y="36.0" textAnchor="middle">FastAPI service</text><line className="v-line v-line--soft" x1="810" y1="54" x2="810" y2="460"></line><rect className="v-box" x="735.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="810.0" y="36.0" textAnchor="middle">PostgreSQL</text><line className="v-line v-line--accent" x1="152" y1="104" x2="368" y2="104" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="260.0" y="82" textAnchor="middle">Look up product in</text><text className="v-sub" x="260.0" y="96" textAnchor="middle">cached catalogue</text><circle className="v-dot" cx="22" cy="104" r="11"></circle><text className="v-text v-text--light" x="22" y="108" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>1</text><line className="v-line v-line--accent" x1="152" y1="170" x2="368" y2="170" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="260.0" y="148" textAnchor="middle">Save sale to offline queue</text><text className="v-sub" x="260.0" y="162" textAnchor="middle">(works without network)</text><circle className="v-dot" cx="22" cy="170" r="11"></circle><text className="v-text v-text--light" x="22" y="174" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>2</text><line className="v-line v-line--accent" x1="372" y1="236" x2="588" y2="236" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="480.0" y="214" textAnchor="middle">Connection returns:</text><text className="v-sub" x="480.0" y="228" textAnchor="middle">send queued sale</text><circle className="v-dot" cx="22" cy="236" r="11"></circle><text className="v-text v-text--light" x="22" y="240" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>3</text><line className="v-line v-line--accent" x1="592" y1="302" x2="808" y2="302" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="700.0" y="280" textAnchor="middle">Set tenant from the token,</text><text className="v-sub" x="700.0" y="294" textAnchor="middle">open one transaction</text><circle className="v-dot" cx="22" cy="302" r="11"></circle><text className="v-text v-text--light" x="22" y="306" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>4</text><line className="v-line v-line--accent" x1="592" y1="368" x2="808" y2="368" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="700.0" y="346" textAnchor="middle">Allocate oldest-expiry stock;</text><text className="v-sub" x="700.0" y="360" textAnchor="middle">post invoice and journal entry</text><circle className="v-dot" cx="22" cy="368" r="11"></circle><text className="v-text v-text--light" x="22" y="372" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>5</text><line className="v-line v-line--soft v-line--accent" x1="808" y1="434" x2="592" y2="434" markerEnd="url(#mk-pharmacy-a-s)"></line><text className="v-sub" x="700.0" y="412" textAnchor="middle">Triggers reject unbalanced</text><text className="v-sub" x="700.0" y="426" textAnchor="middle">or edited postings</text><circle className="v-dot" cx="22" cy="434" r="11"></circle><text className="v-text v-text--light" x="22" y="438" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>6</text></svg></div><figcaption>Read top to bottom. The counter keeps selling from its local copy of the catalogue, then the queued sale is posted in one transaction once the connection is back, with the database as the final check on the books.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Double-entry accounting</h3><p>Chart of accounts, journal entries with reversal, fiscal period locks, trial balance, profit and loss, balance sheet and general ledger.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Batch-aware inventory with FEFO</h3><p>Products, warehouses, goods receipts, expiry-sorted batch suggestions and stock adjustments, including manufacturer claims. At finalize the system picks the nearest-expiry batch automatically (one batch per line; if none covers the quantity, the sale needs the line split by hand) and locks the batch during the sale so two counters cannot oversell it.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Sales invoicing with trade schemes</h3><p>A draft-to-finalize flow with cost of goods taken from the specific batch sold (batch-level costing) and bonus lines from a rule engine.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Offline-capable retail POS</h3><p>A full-screen terminal with a local catalogue cache, offline queue, shifts, end-of-day report and split payments.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Receivables and payables aging</h3><p>Buckets by days past each party's payment terms.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>PDF documents</h3><p>A4 invoices, thermal receipts and shift reports.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Onboarding and role-based access</h3><p>A guided setup wizard, team invitations and a code-defined permission matrix covering eight roles, including owner, admin, accountant, manager and cashier.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Expiry alert job</h3><p>A daily scheduled task identifies and logs stock nearing expiry. There is no email or SMS channel yet.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a back-office or counter request to a balanced ledger entry.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Next.js web app, Browser store, FastAPI service, PostgreSQL, Background workers">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Next.js web app</span><span className="cs-node__sub">back office and POS terminal</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Browser store</span><span className="cs-node__sub">local catalogue cache, offline sale queue</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">FastAPI service</span><span className="cs-node__sub">JWT auth, RBAC, tenant-scoped sessions</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">PostgreSQL</span><span className="cs-node__sub">row-level security, ledger triggers</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Background workers</span><span className="cs-node__sub">Celery and Redis for alerts</span></li>
      </ol>
      </div>
      <figcaption>The web app and POS terminal call a FastAPI service. The terminal keeps a local catalogue and sale queue in the browser. The service reads and writes PostgreSQL, where row-level security and ledger triggers enforce isolation and integrity, and background workers handle alerts.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Offline POS sales sync to the API when connectivity returns, posting invoices and journal entries.</li>
      <li>A billing adapter gates plan features.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Row-level security</h3><p>The API uses a non-superuser database role and a transaction-local tenant setting on every request.</p></div></li>
      <li><div><h3>Ledger integrity in the database</h3><p>A balance-check trigger, immutable posted entries and locked system accounts enforce correctness. A later migration closed a reversal gap.</p></div></li>
      <li><div><h3>Permission matrix and account visibility</h3><p>Permissions are defined in code, with row-level account visibility for roles that may see only part of a report.</p></div></li>
      <li><div><h3>Token handling</h3><p>JWT access tokens with rotating refresh tokens, tenant switching, and password reset tokens stored hashed.</p></div></li>
      <li><div><h3>Provider-agnostic billing</h3><p>A billing adapter with a manual provider supports plan gating.</p></div></li>
      <li><div><h3>Deliberate offline oversell handling</h3><p>A stock constraint is relaxed only on the sync path, so offline sales are never rejected. Re-sending a queued sale never double-posts (idempotent sync).</p></div></li>
      <li><div><h3>End-to-end scripts</h3><p>Tests are end-to-end scripts that run against a live API and database, including cross-tenant and paging checks, with no unit-test suite or CI. Tenant isolation is tested adversarially: a second tenant tries to reach every record type and must get "not found".</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">Next.js (App Router)</li><li className="chip">React</li><li className="chip">TypeScript</li><li className="chip">Tailwind CSS</li><li className="chip">TanStack Query</li><li className="chip">Zustand</li><li className="chip">Dexie</li><li className="chip">React Hook Form</li><li className="chip">Zod</li></ul></dd>
      </div>
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">FastAPI</li><li className="chip">SQLAlchemy 2.0</li><li className="chip">Alembic</li><li className="chip">Pydantic</li><li className="chip">asyncpg</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">PostgreSQL with trigram search and row-level security</li><li className="chip">Redis</li></ul></dd>
      </div>
      <div>
      <dt>Jobs</dt>
      <dd><ul className="cs-chips"><li className="chip">Celery</li></ul></dd>
      </div>
      <div>
      <dt>Documents</dt>
      <dd><ul className="cs-chips"><li className="chip">ReportLab</li></ul></dd>
      </div>
      <div>
      <dt>Auth</dt>
      <dd><ul className="cs-chips"><li className="chip">JWT (python-jose)</li><li className="chip">bcrypt</li></ul></dd>
      </div>
      <div>
      <dt>Infrastructure</dt>
      <dd><ul className="cs-chips"><li className="chip">Docker Compose for local development</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide"><p className="cs-visual__title">Technology stack by layer</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 368" role="img" aria-labelledby="pharmacy-b-t pharmacy-b-d"><title id="pharmacy-b-t">Pharmacy ERP technology stack by layer</title><desc id="pharmacy-b-d">Layered stack diagram. Client: Next.js, React, TypeScript, Tailwind CSS, TanStack Query, Zustand, Dexie, React Hook Form and Zod. API: FastAPI, SQLAlchemy 2.0, Alembic, Pydantic, asyncpg, JWT and bcrypt. Jobs and documents: Celery and ReportLab. Data: PostgreSQL with trigram search and row-level security, and Redis. Infrastructure: Docker Compose for local development.</desc><defs><marker id="mk-pharmacy-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-pharmacy-b-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect className="v-lane" x="8" y="8" width="884" height="96" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="16" width="118" height="80" rx="6"></rect><text className="v-label" x="75" y="60.0" textAnchor="middle">Client</text><rect className="v-box" x="166" y="24" width="164" height="32" rx="6"></rect><text className="v-text" x="248.0" y="44.0" textAnchor="middle">Next.js (App Router)</text><rect className="v-box" x="338" y="24" width="58" height="32" rx="6"></rect><text className="v-text" x="367.0" y="44.0" textAnchor="middle">React</text><rect className="v-box" x="404" y="24" width="93" height="32" rx="6"></rect><text className="v-text" x="450.5" y="44.0" textAnchor="middle">TypeScript</text><rect className="v-box" x="505" y="24" width="107" height="32" rx="6"></rect><text className="v-text" x="558.5" y="44.0" textAnchor="middle">Tailwind CSS</text><rect className="v-box" x="620" y="24" width="121" height="32" rx="6"></rect><text className="v-text" x="680.5" y="44.0" textAnchor="middle">TanStack Query</text><rect className="v-box" x="749" y="24" width="72" height="32" rx="6"></rect><text className="v-text" x="785.0" y="44.0" textAnchor="middle">Zustand</text><rect className="v-box" x="166" y="64" width="58" height="32" rx="6"></rect><text className="v-text" x="195.0" y="84.0" textAnchor="middle">Dexie</text><rect className="v-box" x="232" y="64" width="128" height="32" rx="6"></rect><text className="v-text" x="296.0" y="84.0" textAnchor="middle">React Hook Form</text><rect className="v-box" x="368" y="64" width="43" height="32" rx="6"></rect><text className="v-text" x="389.5" y="84.0" textAnchor="middle">Zod</text><rect className="v-lane" x="8" y="112" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="120" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="144.0" textAnchor="middle">API</text><rect className="v-box" x="166" y="128" width="72" height="32" rx="6"></rect><text className="v-text" x="202.0" y="148.0" textAnchor="middle">FastAPI</text><rect className="v-box" x="246" y="128" width="121" height="32" rx="6"></rect><text className="v-text" x="306.5" y="148.0" textAnchor="middle">SQLAlchemy 2.0</text><rect className="v-box" x="375" y="128" width="72" height="32" rx="6"></rect><text className="v-text" x="411.0" y="148.0" textAnchor="middle">Alembic</text><rect className="v-box" x="455" y="128" width="79" height="32" rx="6"></rect><text className="v-text" x="494.5" y="148.0" textAnchor="middle">Pydantic</text><rect className="v-box" x="542" y="128" width="72" height="32" rx="6"></rect><text className="v-text" x="578.0" y="148.0" textAnchor="middle">asyncpg</text><rect className="v-box" x="622" y="128" width="143" height="32" rx="6"></rect><text className="v-text" x="693.5" y="148.0" textAnchor="middle">JWT (python-jose)</text><rect className="v-box" x="773" y="128" width="65" height="32" rx="6"></rect><text className="v-text" x="805.5" y="148.0" textAnchor="middle">bcrypt</text><rect className="v-lane" x="8" y="176" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="184" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="200.0" textAnchor="middle">Jobs and</text><text className="v-label" x="75" y="216.0" textAnchor="middle">documents</text><rect className="v-box" x="166" y="192" width="65" height="32" rx="6"></rect><text className="v-text" x="198.5" y="212.0" textAnchor="middle">Celery</text><rect className="v-box" x="239" y="192" width="86" height="32" rx="6"></rect><text className="v-text" x="282.0" y="212.0" textAnchor="middle">ReportLab</text><rect className="v-lane" x="8" y="240" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="248" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="272.0" textAnchor="middle">Data</text><rect className="v-box" x="166" y="256" width="398" height="32" rx="6"></rect><text className="v-text" x="365.0" y="276.0" textAnchor="middle">PostgreSQL with trigram search and row-level security</text><rect className="v-box" x="572" y="256" width="58" height="32" rx="6"></rect><text className="v-text" x="601.0" y="276.0" textAnchor="middle">Redis</text><rect className="v-lane" x="8" y="304" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="312" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="336.0" textAnchor="middle">Infrastructure</text><rect className="v-box" x="166" y="320" width="278" height="32" rx="6"></rect><text className="v-text" x="305.0" y="340.0" textAnchor="middle">Docker Compose for local development</text></svg></div><figcaption>Requests move down from the browser to the API and into PostgreSQL. Background jobs and PDF generation sit beside the API, and Docker Compose covers local development.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Keeps each business's data isolated while letting one user work across several businesses.</li>
      <li>Allocates stock nearest-expiry-first and costs each sale at the cost of the batch it came from.</li>
      <li>Lets counters keep selling during outages and reconcile later.</li>
      <li>Produces books that stay balanced because the database refuses unbalanced or edited postings.</li>
      <li>Supports different plan tiers (accounts, standard, POS) from one codebase.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/self-hosted-screen-recorder-extension/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Open-source screen recorder and async video platform with bring-your-own storage</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/ro-plant-monitoring-system/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Water-plant monitoring and reporting system</span></Link>
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
