import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Local-first outreach CRM | Trusted Tech Leader"
  },
  "description": "A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.",
  "alternates": {
    "canonical": "/case-studies/local-first-outreach-crm/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Local-first outreach CRM | Trusted Tech Leader",
    "description": "A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.",
    "url": "https://trustedtechleader.com/case-studies/local-first-outreach-crm/",
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
    "title": "Local-first outreach CRM | Trusted Tech Leader",
    "description": "A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Local-first outreach CRM with self-describing API\",\"description\":\"A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Developer & content tools\",\"url\":\"https://trustedtechleader.com/case-studies/local-first-outreach-crm/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/local-first-outreach-crm/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Local-first outreach CRM with self-describing API\",\"item\":\"https://trustedtechleader.com/case-studies/local-first-outreach-crm/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Local-first outreach CRM with self-describing API</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="dev-content-tools">Case study · Developer &amp; content tools</p>
      <h1 id="cs-title" className="h1-md">Local-first outreach CRM with self-describing API</h1>
      <p className="lead">A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Sales prospecting and freelance outreach</dd></div>
      <div><dt>Category</dt><dd>Developer &amp; content tools</dd></div>
      <div><dt>Maturity</dt><dd>Working single-user tool; no automated tests found</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>A solo consultant or freelancer tracking social-network outreach, proposals and follow-ups.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>React, Fastify, SQLite (libSQL), Drizzle ORM</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A personal CRM whose API documents itself, so both people and AI assistants can work the same pipeline safely.</dd></div>
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
      <p>The dashboard of a personal CRM: how many leads there are, who is at which stage, and who needs a follow-up today.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative CRM dashboard showing lead counts, a LinkedIn lead list with stages, and follow-ups due today">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Outreach CRM</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Dashboard</span></span><span className="m-input">Search</span></div>
      <div className="m-grid m-cols-3 m-card__title">
      <div className="m-card"><span className="m-title">Total leads</span><span className="m-total">15</span></div>
      <div className="m-card m-card--accent"><span className="m-title">Today's follow-ups</span><span className="m-total">4</span></div>
      <div className="m-card"><span className="m-title">Won</span><span className="m-total">2</span></div>
      </div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">LinkedIn leads</span>
      <div className="m-row"><span>Dana Whitfield<br /><small>Northwind Studio</small></span><span className="m-pill m-pill--info">Conversation</span></div>
      <div className="m-row"><span>Marcus Ellery<br /><small>Harbor Dental</small></span><span className="m-pill m-pill--warn">Engaging</span></div>
      <div className="m-row"><span>Priya Raman<br /><small>Lumen Logistics</small></span><span className="m-pill m-pill--ok">Proposal</span></div>
      <div className="m-row"><span>Tom Aldridge<br /><small>Aldridge Print</small></span><span className="m-pill">Lead</span></div>
      <div className="m-actions"><span className="m-btn m-btn--ghost">Export CSV</span><span className="m-btn">New lead</span></div>
      </div>
      <div className="m-card m-card--accent">
      <span className="m-title">Follow-ups due today</span>
      <div className="m-row"><span>Dana Whitfield<br /><small>Send the proposal summary</small></span><span className="m-pill m-pill--warn">Due</span></div>
      <div className="m-row"><span>Marcus Ellery<br /><small>Reply to his comment</small></span><span className="m-pill m-pill--warn">Due</span></div>
      <div className="m-row"><span>Tom Aldridge<br /><small>Send a connection request</small></span><span className="m-pill m-pill--warn">Due</span></div>
      <div className="m-row"><span>Priya Raman<br /><small>Check the proposal landed</small></span><span className="m-pill m-pill--warn">Due</span></div>
      <div className="m-row"><span>Tap a name to open the full record</span><span className="m-pill m-pill--info">Details</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> dashboard and lead list shown together; sample data, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/local-first-outreach-crm/screen-1-dashboard.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/local-first-outreach-crm/screen-1-dashboard.jpg" width="1440" height="826" loading="lazy" alt="A dashboard with lead counts and a list of people to follow up with today." />
      </a>
      <figcaption><b>Real screen, sample data</b> A personal dashboard showing lead counts and who to follow up with today. All names are invented.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/local-first-outreach-crm/screen-2-leads.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/local-first-outreach-crm/screen-2-leads.jpg" width="1440" height="826" loading="lazy" alt="A table of sample prospects, each with a coloured stage label and a next follow-up date." />
      </a>
      <figcaption><b>Real screen, sample data</b> A list of sample prospects with a coloured stage on each and the next follow-up date. All names are invented.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">A day of outreach</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-paper" cx="24" cy="62" r="10"></circle><path className="s-fill" d="M8 100 a16 16 0 0 1 32 0 Z"></path><path className="s-stroke" d="M8 100 a16 16 0 0 1 32 0"></path><rect className="s-paper" x="62" y="20" width="86" height="76" rx="6"></rect><circle className="s-fill" cx="82" cy="42" r="9"></circle><path className="s-stroke" d="M98 38 h38 M98 48 h26 M74 66 h62 M74 78 h40"></path><circle className="s-blue s-pulse" cx="132" cy="82" r="11"></circle><path className="s-tick" d="M132 76 v12 M126 82 h12"></path></svg></div>
      <h3>Maya adds a new contact</h3>
      <p>She meets someone online and saves their name, company and a note in a quick form.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-fill" x="52" y="24" width="28" height="72" rx="4"></rect><rect className="s-fill" x="86" y="24" width="28" height="72" rx="4"></rect><rect className="s-fill" x="120" y="24" width="28" height="72" rx="4"></rect><rect className="s-amber" x="52" y="24" width="28" height="7" rx="3"></rect><rect className="s-solid" x="86" y="24" width="28" height="7" rx="3"></rect><rect className="s-blue" x="120" y="24" width="28" height="7" rx="3"></rect><rect className="s-paper" x="56" y="70" width="20" height="14" rx="2"></rect><rect className="s-paper s-move" x="90" y="40" width="20" height="14" rx="2"></rect><rect className="s-paper" x="124" y="40" width="20" height="14" rx="2"></rect><path className="s-stroke" d="M14 62 H44 M38 56 l6 6 l-6 6"></path></svg></div>
      <h3>She moves them along the stages</h3>
      <p>As the chat goes from first hello to a proposal, she updates the stage so nothing is lost.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="48" y="22" width="70" height="72" rx="6"></rect><path className="s-amber" d="M48 38 V28 a6 6 0 0 1 6 -6 H112 a6 6 0 0 1 6 6 V38 Z"></path><path className="s-stroke" d="M64 18 v8 M102 18 v8"></path><rect className="s-fill" x="58" y="48" width="12" height="9" rx="2"></rect><rect className="s-fill" x="76" y="48" width="12" height="9" rx="2"></rect><rect className="s-fill" x="94" y="48" width="12" height="9" rx="2"></rect><rect className="s-fill" x="58" y="64" width="12" height="9" rx="2"></rect><rect className="s-fill" x="76" y="64" width="12" height="9" rx="2"></rect><circle className="s-blue s-pulse" cx="100" cy="69" r="7"></circle><circle className="s-paper" cx="130" cy="82" r="16"></circle><path className="s-stroke" d="M130 82 V72 M130 82 l8 4"></path></svg></div>
      <h3>Each morning she sees who is due</h3>
      <p>The dashboard lists everyone she planned to follow up with today.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="50" y="22" width="72" height="16" rx="4"></rect><rect className="s-fill" x="50" y="44" width="72" height="16" rx="4"></rect><rect className="s-paper" x="50" y="66" width="72" height="16" rx="4"></rect><rect className="s-paper" x="50" y="88" width="72" height="16" rx="4"></rect><path className="s-stroke" d="M58 30 h30 M58 52 h40 M58 74 h26 M58 96 h34"></path><circle className="s-blue" cx="112" cy="52" r="4"></circle><circle className="s-paper s-pulse" cx="128" cy="62" r="16"></circle><path className="s-stroke" d="M140 74 L152 90"></path></svg></div>
      <h3>She finds anyone in a moment</h3>
      <p>One search box looks through names and companies, so nothing gets lost.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="14" y="50" width="34" height="30" rx="8"></rect><circle className="s-solid" cx="25" cy="63" r="3"></circle><circle className="s-solid" cx="37" cy="63" r="3"></circle><path className="s-stroke" d="M52 65 H84"></path><rect className="s-amber s-move" x="60" y="59" width="10" height="10" rx="2"></rect><rect className="s-paper" x="88" y="26" width="60" height="68" rx="5"></rect><path className="s-stroke" d="M96 42 h44 M96 56 h44 M96 70 h28"></path><circle className="s-blue" cx="134" cy="82" r="8"></circle><path className="s-tick" d="M130 82 l3 3 l6 -7"></path></svg></div>
      <h3>Her AI assistant can help too</h3>
      <p>An assistant can read and update the same records for her, so she does not have to do it all by hand.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Social outreach on professional and community networks is often tracked in ad-hoc spreadsheets. Follow-ups slip, and there is no single view of stage, templates or proposals.</p>
      <p>Hosted CRMs bring cost, setup and data-residency concerns for a single user. A second requirement is that an AI assistant can read and update the pipeline without touching the database file.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>One Node process serves both a React UI and a Fastify REST API from a single port, storing data in a local SQLite file that migrates itself.</p>
      <p>Each outreach channel is declared as a resource definition, and the API, schema endpoints, OpenAPI document, CSV routes and meta map are generated from a registry. The UI offers per-channel tables, record detail pages, a dashboard, an activity timeline, search, follow-ups due today, and ICP, package and proposal modules.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual">
      <p className="cs-visual__title">How an assistant discovers and uses the API</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 510" role="img" aria-labelledby="crm-a-t crm-a-d">
      <title id="crm-a-t">How an assistant discovers and uses the API</title>
      <desc id="crm-a-d">Sequence diagram with three participants: an AI assistant or script, the Fastify API built from the resource registry, and the SQLite file. Step 1: the assistant asks for the meta and OpenAPI endpoints and receives the resources, fields and OpenAPI document. Step 2: the assistant posts a new record; the API validates it with Zod, inserts the row and logs an activity entry, then returns a success envelope. Step 3: the assistant asks for follow-ups due today; the API queries SQLite and returns the matching records.</desc>
      <defs><marker id="mk-crm-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-box v-box" x="35" y="10" width="190" height="56" rx="8"></rect><text className="v-text" x="130.0" y="35.0" textAnchor="middle">AI assistant or script</text><text className="v-sub" x="130.0" y="52.0" textAnchor="middle">reads meta, then calls REST</text><line className="v-line v-line--soft" x1="130" y1="66" x2="130" y2="500"></line><rect className="v-box v-box--accent" x="355" y="10" width="190" height="56" rx="8"></rect><text className="v-text" x="450.0" y="35.0" textAnchor="middle">Fastify API</text><text className="v-sub" x="450.0" y="52.0" textAnchor="middle">built from the resource registry</text><line className="v-line v-line--soft" x1="450" y1="66" x2="450" y2="500"></line><rect className="v-box v-box" x="675" y="10" width="190" height="56" rx="8"></rect><text className="v-text" x="770.0" y="35.0" textAnchor="middle">SQLite file</text><text className="v-sub" x="770.0" y="52.0" textAnchor="middle">local, via Drizzle ORM</text><line className="v-line v-line--soft" x1="770" y1="66" x2="770" y2="500"></line><circle className="v-dot" cx="24" cy="100" r="11"></circle><text className="v-text v-text--light" x="24" y="104" textAnchor="middle">1</text><line className="v-line" x1="134" y1="100" x2="446" y2="100" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="93" textAnchor="middle">GET /api/meta and /api/openapi.json</text><line className="v-line v-line--soft" x1="446" y1="138" x2="134" y2="138" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="131" textAnchor="middle">resources, fields, OpenAPI document</text><circle className="v-dot" cx="24" cy="205" r="11"></circle><text className="v-text v-text--light" x="24" y="209" textAnchor="middle">2</text><line className="v-line" x1="134" y1="205" x2="446" y2="205" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="198" textAnchor="middle">POST /api/linkedin</text><line className="v-line" x1="454" y1="243" x2="766" y2="243" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="610.0" y="236" textAnchor="middle">check with Zod, insert row, log activity</text><line className="v-line v-line--soft" x1="766" y1="281" x2="454" y2="281" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="610.0" y="274" textAnchor="middle">saved row</text><line className="v-line v-line--soft" x1="446" y1="319" x2="134" y2="319" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="312" textAnchor="middle">success envelope with the record</text><circle className="v-dot" cx="24" cy="385" r="11"></circle><text className="v-text v-text--light" x="24" y="389" textAnchor="middle">3</text><line className="v-line" x1="134" y1="385" x2="446" y2="385" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="378" textAnchor="middle">GET /api/followups/today</text><line className="v-line" x1="454" y1="423" x2="766" y2="423" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="610.0" y="416" textAnchor="middle">query follow-ups that are due</text><line className="v-line v-line--soft" x1="766" y1="461" x2="454" y2="461" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="610.0" y="454" textAnchor="middle">matching rows</text><line className="v-line v-line--soft" x1="446" y1="489" x2="134" y2="489" markerEnd="url(#mk-crm-a)"></line><text className="v-sub" x="290.0" y="482" textAnchor="middle">records due today</text>
      </svg>
      </div>
      <figcaption>The assistant learns what exists from the meta and OpenAPI endpoints, then uses the same REST routes as the interface. Solid arrows are requests; dashed arrows are replies.</figcaption>
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
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Channel pipelines with stages</h3><p>Separate lead tables for two social channels, with stage tracking and customizable stage colors.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Proposal modules</h3><p>ICPs, service packages and proposals, added in a second migration.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Self-describing API</h3><p>A meta endpoint and an OpenAPI 3.1 spec list every resource and field.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Follow-up engine</h3><p>A cross-resource query of items due today.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>CSV import and export</h3><p>Available for every resource.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Backup and restore</h3><p>Back up and restore the database file.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Search, timeline and dashboard</h3><p>Global search, an activity timeline and dashboard metrics.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Productivity UI</h3><p>Data table, filter bar, bulk actions, quick-add dialog and keyboard shortcuts.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a resource definition to an API that people and assistants share.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: React UI, Fastify API, Resource registry, Drizzle ORM, SQLite file">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">React UI</span><span className="cs-node__sub">Vite + Tailwind</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Fastify API</span><span className="cs-node__sub">one port, static + REST</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Resource registry</span><span className="cs-node__sub">definitions drive routes</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Drizzle ORM</span><span className="cs-node__sub">typed queries</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">SQLite file</span><span className="cs-node__sub">local, backup/restore</span></li>
      </ol>
      </div>
      <figcaption>The React UI calls a Fastify API on one port. The API is generated from a registry of resource definitions and reads and writes a local SQLite file through Drizzle ORM.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Assistants and scripts discover resources via the meta and OpenAPI endpoints, then call the same REST routes as the UI.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Registry pattern</h3><p>A new outreach channel is one resource definition added to a registry list, so generic routes, schema, OpenAPI and CSV endpoints need no per-channel code. A table migration is still needed.</p></div></li>
      <li><div><h3>Shared CRUD layer</h3><p>A generic CRUD layer is shared by all resources, with Zod schemas per module.</p></div></li>
      <li><div><h3>Typed data access</h3><p>Drizzle ORM over libSQL, with SQL migrations applied automatically.</p></div></li>
      <li><div><h3>Uniform responses</h3><p>All endpoints use one success and error response envelope.</p></div></li>
      <li><div><h3>Single-process deployment</h3><p>The backend serves the built frontend, so there is one thing to run.</p></div></li>
      <li><div><h3>Component primitives</h3><p>Radix UI primitives with Tailwind 4 build the interface.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">React 19</li><li className="chip">React Router</li><li className="chip">Tailwind CSS 4</li><li className="chip">Radix UI</li><li className="chip">Vite</li></ul></dd>
      </div>
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">Node.js</li><li className="chip">TypeScript</li><li className="chip">Fastify</li><li className="chip">Zod</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">SQLite via libSQL</li><li className="chip">Drizzle ORM</li></ul></dd>
      </div>
      <div>
      <dt>Tooling</dt>
      <dd><ul className="cs-chips"><li className="chip">oxlint</li><li className="chip">tsx</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers, interface to tooling</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 266" role="img" aria-labelledby="crm-b-t crm-b-d">
      <title id="crm-b-t">Technology layers, interface to tooling</title>
      <desc id="crm-b-d">Layered diagram of the stack. Frontend: React 19, React Router, Tailwind CSS 4, Radix UI, Vite. Backend: Node.js, TypeScript, Fastify, Zod. Data: SQLite via libSQL and Drizzle ORM. Tooling: oxlint and tsx.</desc>
      <defs><marker id="mk-crm-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-lane" x="10" y="10" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="34" textAnchor="start">Frontend</text><text className="v-sub" x="26" y="51" textAnchor="start">served by the same process</text><rect className="v-box v-box--accent" x="215" y="21" width="85" height="32" rx="6"></rect><text className="v-text" x="257.5" y="42" textAnchor="middle">React 19</text><rect className="v-box v-box--accent" x="312" y="21" width="114" height="32" rx="6"></rect><text className="v-text" x="369.0" y="42" textAnchor="middle">React Router</text><rect className="v-box v-box--accent" x="438" y="21" width="128" height="32" rx="6"></rect><text className="v-text" x="502.0" y="42" textAnchor="middle">Tailwind CSS 4</text><rect className="v-box v-box--accent" x="578" y="21" width="85" height="32" rx="6"></rect><text className="v-text" x="620.5" y="42" textAnchor="middle">Radix UI</text><rect className="v-box v-box--accent" x="675" y="21" width="56" height="32" rx="6"></rect><text className="v-text" x="703.0" y="42" textAnchor="middle">Vite</text><rect className="v-lane" x="10" y="74" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="98" textAnchor="start">Backend</text><text className="v-sub" x="26" y="115" textAnchor="start">one Node process, one port</text><rect className="v-box v-box" x="215" y="85" width="78" height="32" rx="6"></rect><text className="v-text" x="254.0" y="106" textAnchor="middle">Node.js</text><rect className="v-box v-box" x="305" y="85" width="100" height="32" rx="6"></rect><text className="v-text" x="355.0" y="106" textAnchor="middle">TypeScript</text><rect className="v-box v-box" x="417" y="85" width="78" height="32" rx="6"></rect><text className="v-text" x="456.0" y="106" textAnchor="middle">Fastify</text><rect className="v-box v-box" x="507" y="85" width="49" height="32" rx="6"></rect><text className="v-text" x="531.5" y="106" textAnchor="middle">Zod</text><rect className="v-lane" x="10" y="138" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="162" textAnchor="start">Data</text><text className="v-sub" x="26" y="179" textAnchor="start">local file, self-migrating</text><rect className="v-box v-box" x="215" y="149" width="150" height="32" rx="6"></rect><text className="v-text" x="290.0" y="170" textAnchor="middle">SQLite via libSQL</text><rect className="v-box v-box" x="377" y="149" width="107" height="32" rx="6"></rect><text className="v-text" x="430.5" y="170" textAnchor="middle">Drizzle ORM</text><rect className="v-lane" x="10" y="202" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="226" textAnchor="start">Tooling</text><text className="v-sub" x="26" y="243" textAnchor="start">lint and run</text><rect className="v-box v-box--soft" x="215" y="213" width="71" height="32" rx="6"></rect><text className="v-text" x="250.5" y="234" textAnchor="middle">oxlint</text><rect className="v-box v-box--soft" x="298" y="213" width="49" height="32" rx="6"></rect><text className="v-text" x="322.5" y="234" textAnchor="middle">tsx</text>
      </svg>
      </div>
      <figcaption>The interface, API and data layers all run from one Node process over a local SQLite file. Tooling sits alongside for linting and running TypeScript.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives a solo operator a private pipeline with no subscription or hosting.</li>
      <li>Surfaces what is due today across channels so follow-ups are less likely to slip.</li>
      <li>Lets an AI assistant automate record keeping through a documented API.</li>
      <li>Makes adding a new outreach channel a small change.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/multi-platform-short-video-publisher/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Multi-platform short-video publisher with dashboard</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/trading-card-tv-live-auction-marketplace-app/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Trading Card TV: live-stream auctions, marketplace and card trading app</span></Link>
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
