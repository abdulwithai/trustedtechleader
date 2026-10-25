import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Supplier catalog sync platform | Trusted Tech Leader"
  },
  "description": "Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.",
  "alternates": {
    "canonical": "/case-studies/supplier-catalog-sync-platform/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Supplier catalog sync platform | Trusted Tech Leader",
    "description": "Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.",
    "url": "https://trustedtechleader.com/case-studies/supplier-catalog-sync-platform/",
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
    "title": "Supplier catalog sync platform | Trusted Tech Leader",
    "description": "Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"AI-assisted supplier catalog sync platform\",\"description\":\"Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"AI & automation\",\"url\":\"https://trustedtechleader.com/case-studies/supplier-catalog-sync-platform/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/supplier-catalog-sync-platform/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"AI-assisted supplier catalog sync platform\",\"item\":\"https://trustedtechleader.com/case-studies/supplier-catalog-sync-platform/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">AI-assisted supplier catalog sync platform</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="ai-automation">Case study · AI &amp; automation</p>
      <h1 id="cs-title" className="h1-md">AI-assisted supplier catalog sync platform</h1>
      <p className="lead">Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Promotional products and apparel supply</dd></div>
      <div><dt>Category</dt><dd>AI &amp; automation</dd></div>
      <div><dt>Maturity</dt><dd>In active development; deployable service with container and deploy config and an automated test suite covering the API, connector, script-runner and credential logic</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Operations and catalog staff who onboard suppliers and keep product data current.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Node.js, TypeScript, PostgreSQL, OpenAI</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>An onboarding workflow that turns supplier API documents into tested, repairable connectors feeding one normalized CSV export.</dd></div>
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
      <p>The vendor list a catalog team works from, and the guided steps for adding a new supplier.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative catalog console showing a vendor list and the add-vendor steps">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Catalog console</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Vendors</span><small>Connected suppliers and the freshness of their catalog data.</small></span><span className="m-btn">+ Add Vendor</span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Vendor list</span>
      <div className="m-row"><span>Sample Caps Ltd<br /><small>Australia, priority High</small></span><span className="m-pill m-pill--ok">Up to date</span></div>
      <div className="m-row"><span>Sample Apparel Co<br /><small>USA, priority Medium</small></span><span className="m-pill m-pill--warn">Needs Update</span></div>
      <div className="m-row"><span>Sample Drinkware<br /><small>UK, priority Low</small></span><span className="m-pill m-pill--ok">Up to date</span></div>
      <div className="m-row"><span>Sample Bags Pty<br /><small>New Zealand, priority Medium</small></span><span className="m-pill m-pill--warn">Needs Update</span></div>
      <div className="m-actions"><span className="m-btn m-btn--ghost">Check for Updates</span><span className="m-btn m-btn--ghost">Get Decoration Data</span><span className="m-btn">Get Product Data</span></div>
      </div>
      <div className="m-card m-card--accent">
      <span className="m-title">Add New Vendor</span>
      <div className="m-row"><span>1 Documentation</span><span className="m-pill m-pill--ok">Done</span></div>
      <div className="m-row"><span>2 Connect</span><span className="m-pill m-pill--ok">Done</span></div>
      <div className="m-row"><span>3 Map fields</span><span className="m-pill m-pill--info">In progress</span></div>
      <div className="m-row"><span>4 Review</span><span className="m-pill">Next</span></div>
      <span className="m-title m-card__title">Map vendor fields to the catalog format</span>
      <div className="m-row"><span>sku</span><span className="m-pill m-pill--info">SKU</span></div>
      <div className="m-row"><span>item_title</span><span className="m-pill m-pill--info">Product name</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/supplier-catalog-sync-platform/screen-1-vendors.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/supplier-catalog-sync-platform/screen-1-vendors.jpg" width="1440" height="900" loading="lazy" alt="Vendor list showing six sample suppliers with their region, priority, update status and last sync date." />
      </a>
      <figcaption><b>Real screen, sample data</b> Each supplier shows how fresh its catalog is, with one-click update checks.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/supplier-catalog-sync-platform/screen-2-mapping.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/supplier-catalog-sync-platform/screen-2-mapping.jpg" width="1440" height="900" loading="lazy" alt="Setup step matching a sample supplier's product fields to the standard catalog fields." />
      </a>
      <figcaption><b>Real screen, sample data</b> Setup step where a supplier's fields are matched to the standard format; this draft was pre-filled.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">Adding a supplier, step by step</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="46" y="30" width="78" height="62" rx="6"></rect><path className="s-stroke" d="M56 46 h40 M56 58 h58"></path><rect className="s-fill" x="56" y="68" width="58" height="12" rx="3"></rect><circle className="s-blue s-pulse" cx="132" cy="30" r="11"></circle><path className="s-tick" d="M126 30 h12 M132 24 v12"></path></svg></div>
      <h3>Priya adds a new supplier</h3>
      <p>She enters the supplier name and region in a short form.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-paper" d="M52 24 h34 l12 12 v50 h-46 Z"></path><path className="s-stroke" d="M86 24 v12 h12"></path><text x="75" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0F1A2A">PDF</text><rect className="s-fill" x="108" y="48" width="42" height="40" rx="5"></rect><path className="s-stroke" d="M108 58 h42"></path><rect className="s-amber s-move" x="64" y="78" width="14" height="10" rx="2"></rect></svg></div>
      <h3>She uploads the supplier documents</h3>
      <p>The supplier's own instructions go in as a PDF, so nobody has to retype them.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="48" y="28" width="62" height="66" rx="5"></rect><path className="s-stroke" d="M58 44 h42 M58 56 h42 M58 68 h26"></path><path className="s-amber s-pulse" d="M130 24 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z"></path><circle className="s-blue" cx="116" cy="82" r="11"></circle><path className="s-tick" d="M110 82 l4 4 l8 -9"></path></svg></div>
      <h3>AI drafts the setup, she checks it</h3>
      <p>AI reads the supplier's documentation and proposes how its fields fit the standard format; for script-based suppliers, a coding agent writes the sync script from a written contract. Priya reviews it all.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="48" y="42" width="30" height="34" rx="4"></rect><rect className="s-paper" x="112" y="42" width="30" height="34" rx="4"></rect><path className="s-stroke" d="M78 59 H112"></path><circle className="s-blue s-pulse" cx="95" cy="59" r="10"></circle><path className="s-tick" d="M90 59 l4 4 l7 -8"></path><path className="s-stroke" d="M56 52 h14 M56 60 h14 M56 68 h8 M120 52 h14 M120 60 h14"></path><path className="s-stroke" d="M64 92 h64"></path></svg></div>
      <h3>She tests it with real sample rows</h3>
      <p>Before saving, she checks the connection and previews a few real products.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="50" y="26" width="56" height="16" rx="3"></rect><rect className="s-paper s-move" x="50" y="48" width="56" height="16" rx="3"></rect><rect className="s-paper" x="50" y="70" width="56" height="16" rx="3"></rect><path className="s-stroke" d="M58 34 h24 M58 56 h24 M58 78 h24"></path><circle className="s-blue" cx="94" cy="78" r="5"></circle><rect className="s-paper" x="120" y="44" width="30" height="40" rx="3"></rect><path className="s-stroke" d="M126 56 h18 M126 66 h18 M126 76 h10"></path><circle className="s-blue s-pulse" cx="140" cy="38" r="9"></circle><path className="s-tick" d="M135 38 l4 4 l6 -8"></path></svg></div>
      <h3>Updates are checked, then downloaded</h3>
      <p>She checks for updates and downloads product or decoration data as CSV; long downloads run as tracked background jobs she can watch.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Businesses that resell decorated apparel and promotional goods pull catalogs from many suppliers. Each supplier exposes a different API, auth scheme and field vocabulary, with separate decoration price breaks.</p>
      <p>Onboarding one supplier usually means a developer reading its documentation and hand-writing an integration. The project records the pain points explicitly: very large catalogs, OAuth refresh tokens that invalidate on use, APIs with no change detection, and silent failures when a script reads the wrong source field names.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A web console and Node API where an operator registers a supplier, uploads its API documentation as a PDF and lets AI read it to draft the connector spec and field mapping. For script-based suppliers, any AI coding agent writes the sync script from a written contract, and the platform's AI identifies the credential fields a script needs and repairs failing scripts. The operator tests the connection and previews sample rows.</p>
      <p>Source fields are mapped onto a fixed destination schema, split into product and decoration outputs. Decoration output supports up to 25 price breaks, and mapped data is exported as CSV on demand. A retrying queue worker for scheduled syncs is built into the service; operator-triggered checks and exports currently run on demand. A written contract guide lets any external coding agent produce compatible supplier scripts.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual"><p className="cs-visual__title">Mechanism: from supplier docs to an on-demand check and export</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 540" role="img" aria-labelledby="supplier-a-t supplier-a-d"><title id="supplier-a-t">Supplier onboarding and sync run</title><desc id="supplier-a-d">Sequence diagram with five participants: operator console, REST API, AI analysis, connector engine and supplier API. Step 1: the operator registers a supplier and uploads its API documentation PDF. Step 2: the API has the AI layer parse the PDF and draft a spec and field mapping. Step 3: the draft returns for review. Step 4: the operator tests the connection and previews sample rows. Step 5: the API calls the connector engine directly to run an update check or export on demand. Step 6: the engine fetches the catalog data from the supplier API. Step 7: the mapped rows return to the API and reach the operator as a CSV file.</desc><defs><marker id="mk-supplier-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-supplier-a-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><line className="v-line v-line--soft" x1="95" y1="54" x2="95" y2="526"></line><rect className="v-box" x="20.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="95.0" y="36.0" textAnchor="middle">Operator console</text><line className="v-line v-line--soft" x1="272" y1="54" x2="272" y2="526"></line><rect className="v-box v-box--accent" x="197.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="272.0" y="36.0" textAnchor="middle">REST API</text><line className="v-line v-line--soft" x1="450" y1="54" x2="450" y2="526"></line><rect className="v-box" x="375.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="450.0" y="36.0" textAnchor="middle">AI analysis</text><line className="v-line v-line--soft" x1="628" y1="54" x2="628" y2="526"></line><rect className="v-box" x="553.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="628.0" y="36.0" textAnchor="middle">Connector engine</text><line className="v-line v-line--soft" x1="805" y1="54" x2="805" y2="526"></line><rect className="v-box" x="730.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="805.0" y="36.0" textAnchor="middle">Supplier API</text><line className="v-line v-line--accent" x1="97" y1="104" x2="270" y2="104" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub" x="183.5" y="82" textAnchor="middle">Register supplier,</text><text className="v-sub" x="183.5" y="96" textAnchor="middle">upload API docs PDF</text><circle className="v-dot" cx="22" cy="104" r="11"></circle><text className="v-text v-text--light" x="22" y="108" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>1</text><line className="v-line v-line--accent" x1="274" y1="170" x2="448" y2="170" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub" x="361.0" y="148" textAnchor="middle">Parse PDF; draft spec</text><text className="v-sub" x="361.0" y="162" textAnchor="middle">and field mapping</text><circle className="v-dot" cx="22" cy="170" r="11"></circle><text className="v-text v-text--light" x="22" y="174" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>2</text><line className="v-line v-line--soft v-line--accent" x1="448" y1="236" x2="274" y2="236" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub" x="361.0" y="228" textAnchor="middle">Draft for review</text><circle className="v-dot" cx="22" cy="236" r="11"></circle><text className="v-text v-text--light" x="22" y="240" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>3</text><line className="v-line v-line--accent" x1="97" y1="302" x2="270" y2="302" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub" x="183.5" y="280" textAnchor="middle">Test connection,</text><text className="v-sub" x="183.5" y="294" textAnchor="middle">preview sample rows</text><circle className="v-dot" cx="22" cy="302" r="11"></circle><text className="v-text v-text--light" x="22" y="306" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>4</text><line className="v-line v-line--accent" x1="274" y1="368" x2="626" y2="368" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub v-halo" x="450.0" y="346" textAnchor="middle">Run update check</text><text className="v-sub v-halo" x="450.0" y="360" textAnchor="middle">or export on demand</text><circle className="v-dot" cx="22" cy="368" r="11"></circle><text className="v-text v-text--light" x="22" y="372" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>5</text><line className="v-line v-line--accent" x1="630" y1="434" x2="803" y2="434" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub" x="716.5" y="412" textAnchor="middle">Fetch catalog</text><text className="v-sub" x="716.5" y="426" textAnchor="middle">data</text><circle className="v-dot" cx="22" cy="434" r="11"></circle><text className="v-text v-text--light" x="22" y="438" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>6</text><line className="v-line v-line--soft v-line--accent" x1="626" y1="500" x2="274" y2="500" markerEnd="url(#mk-supplier-a-s)"></line><text className="v-sub v-halo" x="450.0" y="478" textAnchor="middle">Mapped rows returned</text><text className="v-sub v-halo" x="450.0" y="492" textAnchor="middle">as a CSV file</text><circle className="v-dot" cx="22" cy="500" r="11"></circle><text className="v-text v-text--light" x="22" y="504" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>7</text></svg></div><figcaption>Setup is human-reviewed: the AI drafts, the operator tests. Once approved, update checks and exports run on demand through the connector engine, and every operator action is logged to a per-supplier activity trail, so failures are visible instead of silent.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Vendor registry</h3><p>One record per supplier with region, priority, status, spec, mapping and last-update markers.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>AI documentation analysis</h3><p>Uploaded PDF documentation is parsed and read by AI to draft the connector spec (endpoints, auth) and field mapping.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Script-based connectors</h3><p>Python sync scripts, written by any AI coding agent from a written contract, are analyzed and tested in a child process with a timeout; the platform's AI identifies the credential fields a script needs and repairs scripts that fail.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Fixed destination schema</h3><p>Each source field is routed to a product or decoration output, with separate decoration mappings.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Connection test and live sample fetch</h3><p>Verify credentials and preview real records before saving.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Change detection</h3><p>A per-supplier update check tells the operator whether a catalog changed since the last download, and flags APIs that cannot report changes.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Credential rotation persistence</h3><p>Scripts can report refreshed tokens, which are stored for the next run.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>CSV export and setup wizard</h3><p>A guided setup wizard in the browser console, a searchable, filterable and sortable suppliers table, a per-supplier activity trail with Slack alerts on failed checks, and CSV export of mapped rows.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a supplier's documentation to a normalized CSV export.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: Operator console, REST API, AI analysis, Connector engine, Normalized CSV export, Queue worker (built, not yet wired to the console)">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Operator console</span><span className="cs-node__sub">vanilla JS wizard</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">REST API</span><span className="cs-node__sub">Express and Helmet</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AI analysis</span><span className="cs-node__sub">LLM and PDF parsing</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Connector engine</span><span className="cs-node__sub">API fetch and Python scripts</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Normalized CSV export</span><span className="cs-node__sub">mapped on demand, not stored</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Queue worker</span><span className="cs-node__sub">built, not yet wired to the console</span></li>
      </ol>
      </div>
      <figcaption>The operator console calls a REST API to set up and test suppliers. The API asks an AI layer to draft the spec. The API calls the connector engine directly, which fetches from the supplier and returns mapped rows as a CSV export; they are not stored. PostgreSQL holds suppliers, specs, field mappings, credentials, the job ledger and the activity log. A retrying queue worker for scheduled syncs is built but not yet driven from the console.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>The console talks to the API for setup and testing; the API calls AI for spec drafting.</li>
      <li>The API runs the connector engine directly for update checks and exports; long downloads run as in-process tracked jobs the console polls.</li>
      <li>The queue worker (BullMQ with retries and per-run records) is built but not yet wired to the console.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Retrying queue worker (not yet wired)</h3><p>A Redis-backed BullMQ queue with 3 attempts, exponential backoff and per-run records is built, with a worker started alongside the API process. Nothing enqueues from the console yet: update checks run synchronously in the request, and product, decoration and CSV exports run as in-process tracked jobs polled by the client.</p></div></li>
      <li><div><h3>Flexible schema</h3><p>PostgreSQL with JSONB for specs and mappings, versioned connector specs marked as preset, AI or manual, and a sync job ledger.</p></div></li>
      <li><div><h3>Incremental SQL migrations applied at start-up</h3><p>Incremental SQL migrations are applied in order when the service starts.</p></div></li>
      <li><div><h3>Credential handling</h3><p>Credentials are kept in a dedicated column, never returned to the console list view, and only obfuscated rather than strongly encrypted; moving to a managed key store (KMS or vault) is flagged in the code before production.</p></div></li>
      <li><div><h3>Large-catalog handling</h3><p>The script timeout is configurable for very large catalogs.</p></div></li>
      <li><div><h3>Operational basics</h3><p>Helmet security headers, Winston logging, a per-supplier activity log and Slack alerts on failed checks. A Vitest suite (about 130 cases) covers controllers, services, the script runner and credential handling.</p></div></li>
      <li><div><h3>Containerized setup</h3><p>Docker Compose for local Postgres and Redis, and a Railway build config.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">Node.js</li><li className="chip">TypeScript</li><li className="chip">Express</li><li className="chip">Helmet</li><li className="chip">Winston</li><li className="chip">Multer (PDF upload)</li><li className="chip">Vitest</li></ul></dd>
      </div>
      <div>
      <dt>Queue</dt>
      <dd><ul className="cs-chips"><li className="chip">BullMQ</li><li className="chip">Redis (ioredis)</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">PostgreSQL</li><li className="chip">JSONB mappings</li></ul></dd>
      </div>
      <div>
      <dt>AI</dt>
      <dd><ul className="cs-chips"><li className="chip">OpenAI SDK</li><li className="chip">pdf-parse</li></ul></dd>
      </div>
      <div>
      <dt>Connector scripts</dt>
      <dd><ul className="cs-chips"><li className="chip">Python</li></ul></dd>
      </div>
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">Vanilla JavaScript SPA served by the API</li></ul></dd>
      </div>
      <div>
      <dt>Infrastructure</dt>
      <dd><ul className="cs-chips"><li className="chip">Docker</li><li className="chip">Docker Compose</li><li className="chip">Railway</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide"><p className="cs-visual__title">Technology stack by layer</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 392" role="img" aria-labelledby="supplier-b-t supplier-b-d"><title id="supplier-b-t">Supplier sync platform technology stack by layer</title><desc id="supplier-b-d">Layered stack diagram. Frontend: a vanilla JavaScript single-page app served by the API. Backend: Node.js, TypeScript, Express, Helmet and Winston. AI and connectors: OpenAI SDK, pdf-parse and Python scripts. Queue: BullMQ and Redis. Data: PostgreSQL with JSONB mappings. Infrastructure: Docker, Docker Compose and Railway.</desc><defs><marker id="mk-supplier-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-supplier-b-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect className="v-lane" x="8" y="8" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="16" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="40.0" textAnchor="middle">Frontend</text><rect className="v-box" x="166" y="24" width="306" height="32" rx="6"></rect><text className="v-text" x="319.0" y="44.0" textAnchor="middle">Vanilla JavaScript SPA served by the API</text><rect className="v-lane" x="8" y="72" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="80" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="104.0" textAnchor="middle">Backend</text><rect className="v-box" x="166" y="88" width="72" height="32" rx="6"></rect><text className="v-text" x="202.0" y="108.0" textAnchor="middle">Node.js</text><rect className="v-box" x="246" y="88" width="93" height="32" rx="6"></rect><text className="v-text" x="292.5" y="108.0" textAnchor="middle">TypeScript</text><rect className="v-box" x="347" y="88" width="72" height="32" rx="6"></rect><text className="v-text" x="383.0" y="108.0" textAnchor="middle">Express</text><rect className="v-box" x="427" y="88" width="65" height="32" rx="6"></rect><text className="v-text" x="459.5" y="108.0" textAnchor="middle">Helmet</text><rect className="v-box" x="500" y="88" width="72" height="32" rx="6"></rect><text className="v-text" x="536.0" y="108.0" textAnchor="middle">Winston</text><rect className="v-lane" x="8" y="136" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="144" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="160.0" textAnchor="middle">AI and</text><text className="v-label" x="75" y="176.0" textAnchor="middle">connectors</text><rect className="v-box" x="166" y="152" width="93" height="32" rx="6"></rect><text className="v-text" x="212.5" y="172.0" textAnchor="middle">OpenAI SDK</text><rect className="v-box" x="267" y="152" width="86" height="32" rx="6"></rect><text className="v-text" x="310.0" y="172.0" textAnchor="middle">pdf-parse</text><rect className="v-box" x="361" y="152" width="65" height="32" rx="6"></rect><text className="v-text" x="393.5" y="172.0" textAnchor="middle">Python</text><rect className="v-lane" x="8" y="200" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="208" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="232.0" textAnchor="middle">Queue</text><rect className="v-box" x="166" y="216" width="65" height="32" rx="6"></rect><text className="v-text" x="198.5" y="236.0" textAnchor="middle">BullMQ</text><rect className="v-box" x="239" y="216" width="128" height="32" rx="6"></rect><text className="v-text" x="303.0" y="236.0" textAnchor="middle">Redis (ioredis)</text><rect className="v-lane" x="8" y="264" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="272" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="296.0" textAnchor="middle">Data</text><rect className="v-box" x="166" y="280" width="93" height="32" rx="6"></rect><text className="v-text" x="212.5" y="300.0" textAnchor="middle">PostgreSQL</text><rect className="v-box" x="267" y="280" width="121" height="32" rx="6"></rect><text className="v-text" x="327.5" y="300.0" textAnchor="middle">JSONB mappings</text><rect className="v-lane" x="8" y="328" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="336" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="360.0" textAnchor="middle">Infrastructure</text><rect className="v-box" x="166" y="344" width="65" height="32" rx="6"></rect><text className="v-text" x="198.5" y="364.0" textAnchor="middle">Docker</text><rect className="v-box" x="239" y="344" width="121" height="32" rx="6"></rect><text className="v-text" x="299.5" y="364.0" textAnchor="middle">Docker Compose</text><rect className="v-box" x="368" y="344" width="72" height="32" rx="6"></rect><text className="v-text" x="404.0" y="364.0" textAnchor="middle">Railway</text></svg></div><figcaption>The console and API are one Node.js service. Update checks and exports run in-process; the BullMQ and Redis queue and worker are built for scheduled syncs but not yet wired. PostgreSQL holds specs, mappings and run history.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Drafts the connector and mapping from the supplier's documentation, so a developer starts from a reviewable draft.</li>
      <li>Gives one consistent product and decoration-pricing format regardless of supplier quirks.</li>
      <li>Every operator action is logged to a per-vendor activity trail.</li>
      <li>Lets operators use a guided setup, and lets external coding agents build compatible scripts through a documented contract.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/wellness-training-platform-apps-cms-ai/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Wellness training platform: apps, CMS and AI coach</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/ai-textbook-study-reader/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">AI textbook ingestion and study reader</span></Link>
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
