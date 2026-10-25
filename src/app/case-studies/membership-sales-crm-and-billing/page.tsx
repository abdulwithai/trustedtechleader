import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Membership sales CRM and billing | Trusted Tech Leader"
  },
  "description": "Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.",
  "alternates": {
    "canonical": "/case-studies/membership-sales-crm-and-billing/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Membership sales CRM and billing | Trusted Tech Leader",
    "description": "Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.",
    "url": "https://trustedtechleader.com/case-studies/membership-sales-crm-and-billing/",
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
    "title": "Membership sales CRM and billing | Trusted Tech Leader",
    "description": "Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Membership sales CRM, contracts and billing platform\",\"description\":\"Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/membership-sales-crm-and-billing/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/membership-sales-crm-and-billing/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Membership sales CRM, contracts and billing platform\",\"item\":\"https://trustedtechleader.com/case-studies/membership-sales-crm-and-billing/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Membership sales CRM, contracts and billing platform</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Membership sales CRM, contracts and billing platform</h1>
      <p className="lead">Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Travel membership sales</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Substantial Laravel application with a written handover document; automated tests are only skeleton examples</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Sales teams, managers, payroll and billing administrators, and members via a portal API.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>PHP 8.2, Laravel 12, Vue 3, MySQL</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One system that carries a membership sale from first lead through signed contract, payment, recurring billing and commission payout.</dd></div>
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
      <p>One family's record, from the booked tour to the signed contract, the bills and the sales team's commission.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative membership CRM screen showing a booked tour, a signed contract, invoices and a commission under review">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Membership CRM: Parker household</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Parker household</span></span><span><span className="m-pill m-pill--ok">Contract signed</span></span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Tour booking</span>
      <div className="m-row"><span>Campaign</span><span>Spring travel show</span></div>
      <div className="m-row"><span>Day and wave</span><span>Saturday, 10:00 wave</span></div>
      <div className="m-row"><span>Time slot</span><span>10:30</span></div>
      <div className="m-row"><span>Reminder message</span><span className="m-pill m-pill--info">Sent</span></div>
      <div className="m-row"><span>Attendance</span><span className="m-pill m-pill--ok">Checked in</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Contract</span>
      <div className="m-row"><span>Membership</span><span className="m-pill">Standard plan</span></div>
      <div className="m-row"><span>Signature</span><span className="m-pill m-pill--ok">Signed on screen</span></div>
      <div className="m-row"><span>Signed copy</span><span className="m-pill m-pill--info">PDF saved</span></div>
      <div className="m-row"><span>Payment</span><span className="m-pill m-pill--ok">Paid by card</span></div>
      </div>
      </div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card m-card--accent">
      <span className="m-title">Invoices</span>
      <div className="m-row"><span>First payment</span><span className="m-pill m-pill--ok">Paid</span></div>
      <div className="m-row"><span>Next monthly invoice</span><span className="m-pill m-pill--warn">Scheduled</span></div>
      <div className="m-row"><span>Following invoices are created automatically</span><span className="m-pill m-pill--info">Automatic</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Commission</span>
      <div className="m-row"><span>Sales rep and manager shares worked out</span><span className="m-pill m-pill--info">Automatic</span></div>
      <div className="m-row"><span>Payroll review</span><span className="m-pill m-pill--warn">Awaiting review</span></div>
      <span className="m-btn m-btn--ghost m-btn--mt">Open payroll review</span>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">A membership sale, step by step</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="64" y="16" width="70" height="78" rx="4"></rect><path className="s-stroke" d="M74 34 h50 M74 46 h50 M74 58 h30"></path><rect className="s-fill" x="74" y="68" width="50" height="14" rx="3"></rect><circle className="s-fill" cx="30" cy="62" r="11"></circle><path className="s-stroke" d="M12 96 a18 18 0 0 1 36 0"></path><circle className="s-amber s-pulse" cx="134" cy="18" r="6"></circle></svg></div>
      <h3>A family asks about membership</h3>
      <p>They fill in a short form online, and the sales team has a new lead with a household record.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="40" y="26" width="84" height="68" rx="4"></rect><rect className="s-blue" x="40" y="26" width="84" height="16" rx="4"></rect><path className="s-stroke" d="M58 20 v12 M106 20 v12"></path><rect className="s-fill" x="50" y="50" width="16" height="12"></rect><rect className="s-fill" x="72" y="50" width="16" height="12"></rect><rect className="s-amber s-pulse" x="94" y="50" width="16" height="12"></rect><rect className="s-fill" x="50" y="68" width="16" height="12"></rect><rect className="s-fill" x="72" y="68" width="16" height="12"></rect><circle className="s-blue" cx="126" cy="28" r="10"></circle><path className="s-tick" d="M121 28 l4 4 l7 -8"></path></svg></div>
      <h3>They are booked into a tour time</h3>
      <p>The lead picks a slot on the calendar, then gets a confirmation and a reminder message.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="46" y="14" width="62" height="82" rx="4"></rect><path className="s-stroke" d="M56 30 h40 M56 40 h40 M56 50 h26"></path><path className="s-stroke" d="M56 78 q6 -16 12 0 t12 0 t12 0"></path><circle className="s-blue s-pulse" cx="112" cy="86" r="12"></circle><path className="s-tick" d="M106 86 l4 4 l8 -9"></path></svg></div>
      <h3>The contract is signed on screen</h3>
      <p>The family signs in the browser, and a PDF copy of the signed contract is saved to their record.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="16" y="44" width="62" height="40" rx="5"></rect><rect className="s-solid" x="16" y="54" width="62" height="8"></rect><path className="s-stroke" d="M26 74 h20"></path><circle className="s-fill" cx="114" cy="62" r="28"></circle><path className="s-stroke" d="M114 46 V62 L124 68"></path><path className="s-stroke" d="M92 44 a28 28 0 0 1 44 -4 M136 40 l-2 -9 M136 40 l-9 2"></path><circle className="s-amber s-move" cx="92" cy="94" r="8"></circle></svg></div>
      <h3>Payments and bills run on a schedule</h3>
      <p>The first payment is taken, and later monthly, quarterly or yearly invoices are created and sent on time.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-amber" x="28" y="80" width="40" height="10" rx="5"></rect><rect className="s-amber" x="28" y="68" width="40" height="10" rx="5"></rect><rect className="s-amber" x="28" y="56" width="40" height="10" rx="5"></rect><circle className="s-paper" cx="112" cy="40" r="13"></circle><path className="s-stroke" d="M90 90 a22 22 0 0 1 44 0"></path><circle className="s-blue s-pulse" cx="130" cy="78" r="11"></circle><path className="s-tick" d="M125 78 l4 4 l7 -8"></path></svg></div>
      <h3>Commission is worked out for the team</h3>
      <p>Each person's share is calculated from the contract, then checked on a payroll review screen.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A membership sales operation runs a long pipeline: capture prospects, book them into scheduled sessions, confirm attendance, close a contract, collect payment, then bill recurring fees and pay commissions.</p>
      <p>Without a single system, each step lives in a separate tool: forms, calendars, texting, payment links, accounting and payroll spreadsheets. That causes re-keying and disagreement over contract and payment status. The handover document describes all of these steps in one system with many roles involved.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A Laravel 12 monolith with Blade, Vue 3 and Alpine front ends. A lead form feeds scheduling, with campaigns, days, waves and time slots. Confirmation and reminder messaging follows, then contract creation with in-browser signature and PDF archiving.</p>
      <p>Payments, recurring billing, invoices and commission calculation hang off the contract. Role-based access separates sales, management, payroll and admin views. A headless authentication API serves an external member portal.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual"><p className="cs-visual__title">Mechanism: how the core records relate</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 336" role="img" aria-labelledby="membership-a-t membership-a-d"><title id="membership-a-t">Membership CRM data model sketch</title><desc id="membership-a-d">Data model sketch. Scheduling hierarchy: a campaign has many days, a day has many waves and a wave has many slots. A lead books into a slot. A contract belongs to one lead. Observers on leads and contracts keep derived data consistent. A contract has invoice items, recurring billing schedules, a commission calculation and additional costs.</desc><defs><marker id="mk-membership-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-membership-a-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><text className="v-label" x="20" y="22" textAnchor="start">Scheduling</text><rect className="v-box" x="20" y="34" width="170" height="48" rx="6"></rect><text className="v-text" x="105.0" y="62.0" textAnchor="middle">Campaign</text><rect className="v-box" x="250" y="34" width="170" height="48" rx="6"></rect><text className="v-text" x="335.0" y="62.0" textAnchor="middle">Day</text><rect className="v-box" x="480" y="34" width="170" height="48" rx="6"></rect><text className="v-text" x="565.0" y="62.0" textAnchor="middle">Wave</text><rect className="v-box" x="710" y="34" width="170" height="48" rx="6"></rect><text className="v-text" x="795.0" y="62.0" textAnchor="middle">Slot</text><line className="v-line" x1="192" y1="58" x2="248" y2="58" markerEnd="url(#mk-membership-a)"></line><text className="v-sub" x="220" y="50" textAnchor="middle">has many</text><line className="v-line" x1="422" y1="58" x2="478" y2="58" markerEnd="url(#mk-membership-a)"></line><text className="v-sub" x="450" y="50" textAnchor="middle">has many</text><line className="v-line" x1="652" y1="58" x2="708" y2="58" markerEnd="url(#mk-membership-a)"></line><text className="v-sub" x="680" y="50" textAnchor="middle">has many</text><text className="v-label" x="20" y="126" textAnchor="start">Sales</text><rect className="v-box v-box--accent" x="710" y="142" width="170" height="52" rx="6"></rect><text className="v-text" x="795.0" y="164.5" textAnchor="middle">Lead</text><text className="v-sub" x="795.0" y="182.5" textAnchor="middle">books into a slot</text><line className="v-line" x1="795" y1="84" x2="795" y2="140" markerEnd="url(#mk-membership-a)"></line><rect className="v-box v-box--accent" x="480" y="142" width="170" height="52" rx="6"></rect><text className="v-text" x="565.0" y="164.5" textAnchor="middle">Contract</text><text className="v-sub" x="565.0" y="182.5" textAnchor="middle">one per lead</text><line className="v-line" x1="708" y1="168" x2="652" y2="168" markerEnd="url(#mk-membership-a)"></line><rect className="v-box v-box--soft" x="20" y="142" width="420" height="52" rx="6"></rect><text className="v-text" x="230.0" y="164.5" textAnchor="middle">Observers on leads and contracts</text><text className="v-sub" x="230.0" y="182.5" textAnchor="middle">keep derived data consistent</text><text className="v-label v-halo" x="116" y="246" textAnchor="start">Money tied to the contract</text><line className="v-line" x1="565" y1="196" x2="565" y2="216"></line><line className="v-line" x1="335" y1="216" x2="795" y2="216"></line><line className="v-line" x1="105" y1="216" x2="335" y2="216"></line><line className="v-line" x1="105.0" y1="216" x2="105.0" y2="236"></line><rect className="v-box" x="20" y="262" width="170" height="52" rx="6"></rect><text className="v-text" x="105.0" y="292.0" textAnchor="middle">Invoice items</text><line className="v-line" x1="105.0" y1="236" x2="105.0" y2="260" markerEnd="url(#mk-membership-a)"></line><line className="v-line" x1="335.0" y1="216" x2="335.0" y2="236"></line><rect className="v-box" x="250" y="262" width="170" height="52" rx="6"></rect><text className="v-text" x="335.0" y="283.0" textAnchor="middle">Recurring billing</text><text className="v-text" x="335.0" y="301.0" textAnchor="middle">schedules</text><line className="v-line" x1="335.0" y1="236" x2="335.0" y2="260" markerEnd="url(#mk-membership-a)"></line><line className="v-line" x1="565.0" y1="216" x2="565.0" y2="236"></line><rect className="v-box" x="480" y="262" width="170" height="52" rx="6"></rect><text className="v-text" x="565.0" y="283.0" textAnchor="middle">Commission</text><text className="v-text" x="565.0" y="301.0" textAnchor="middle">calculation</text><line className="v-line" x1="565.0" y1="236" x2="565.0" y2="260" markerEnd="url(#mk-membership-a)"></line><line className="v-line" x1="795.0" y1="216" x2="795.0" y2="236"></line><rect className="v-box" x="710" y="262" width="170" height="52" rx="6"></rect><text className="v-text" x="795.0" y="292.0" textAnchor="middle">Additional costs</text><line className="v-line" x1="795.0" y1="236" x2="795.0" y2="260" markerEnd="url(#mk-membership-a)"></line></svg></div><figcaption>Scheduling is a tree, from campaign down to slot. Leads attach to that tree, a contract grows out of each lead, and everything financial hangs off the contract.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Lead capture and household records</h3><p>Public and internal lead forms feed household and member models.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Campaign, wave and slot scheduling</h3><p>Campaigns divide into days, waves and bookable slots, with timezone handling and check-in views.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Contract lifecycle</h3><p>Contract creation, e-signature capture and generated PDFs.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Payments and shared payment links</h3><p>Card payments through a payment gateway, plus Stripe link support.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Recurring billing and invoicing</h3><p>Commands and an invoicing service generate monthly, quarterly and yearly invoices. A nightly job syncs billing status, and an accounting-platform service creates and sends invoices.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Multi-tier commissions and payroll review</h3><p>Commission calculation with a payroll review screen.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Analytics and report builder</h3><p>Query-driven reports with CSV import and export.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Bulk SMS and email notifications</h3><p>Notifications, reminders and surveys delivered through queue jobs.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a first lead to a signed contract, payment and commission.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: Lead intake, Scheduling, Contracts, Payments, Billing and commissions, Analytics and portal API">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Lead intake</span><span className="cs-node__sub">public forms, SMS and email</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Scheduling</span><span className="cs-node__sub">campaigns, waves, slots</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Contracts</span><span className="cs-node__sub">e-signature and PDF</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Payments</span><span className="cs-node__sub">gateway and payment links</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Billing and commissions</span><span className="cs-node__sub">scheduled invoices, payroll</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Analytics and portal API</span><span className="cs-node__sub">reports, member auth</span></li>
      </ol>
      </div>
      <figcaption>Leads enter through forms and are booked into scheduled slots. A contract is signed and archived as a PDF. Payments, recurring billing and commissions hang off the contract, while analytics and a portal API expose the results.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Queue jobs deliver notifications.</li>
      <li>Scheduled commands drive reminders, recurring invoices and billing sync.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Role and permission access control</h3><p>Role and permission middleware separates sales, management, payroll and admin views.</p></div></li>
      <li><div><h3>Dual authentication</h3><p>Sanctum for the single-page app and JWT for external API consumers, plus key-based API clients.</p></div></li>
      <li><div><h3>Queues and scheduled commands</h3><p>Queue jobs are configured for Redis, with a database driver as fallback. 25 artisan commands cover billing, reminders and sync, about ten of them registered in the scheduler.</p></div></li>
      <li><div><h3>Model observers</h3><p>Observers on leads and contracts keep derived data consistent.</p></div></li>
      <li><div><h3>Integrations in service classes</h3><p>Telephony SMS, email delivery, calendar, geocoding, Slack and Zoom are each isolated behind a service.</p></div></li>
      <li><div><h3>Log sanitizing</h3><p>A log processor keeps sensitive values out of logs.</p></div></li>
      <li><div><h3>OpenAPI documentation</h3><p>API docs are generated with a Swagger package.</p></div></li>
      <li><div><h3>Iterative schema history</h3><p>Roughly 100 migrations show how the data model evolved.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">PHP 8.2</li><li className="chip">Laravel 12</li><li className="chip">Sanctum</li><li className="chip">JWT auth</li></ul></dd>
      </div>
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">Vue 3</li><li className="chip">Alpine.js</li><li className="chip">Tailwind CSS</li><li className="chip">Vite</li><li className="chip">Blade</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">MySQL or MariaDB</li><li className="chip">Redis (Predis)</li></ul></dd>
      </div>
      <div>
      <dt>Payments and documents</dt>
      <dd><ul className="cs-chips"><li className="chip">Stripe</li><li className="chip">DomPDF</li><li className="chip">League CSV</li></ul></dd>
      </div>
      <div>
      <dt>Messaging</dt>
      <dd><ul className="cs-chips"><li className="chip">Postmark</li><li className="chip">Slack notifications</li><li className="chip">Cloud telephony SMS</li></ul></dd>
      </div>
      <div>
      <dt>API docs</dt>
      <dd><ul className="cs-chips"><li className="chip">L5-Swagger</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide"><p className="cs-visual__title">Technology stack by layer</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 328" role="img" aria-labelledby="membership-b-t membership-b-d"><title id="membership-b-t">Membership CRM technology stack by layer</title><desc id="membership-b-d">Layered stack diagram. Frontend: Vue 3, Alpine.js, Tailwind CSS, Vite and Blade. Backend: PHP 8.2, Laravel 12, Sanctum, JWT auth and L5-Swagger API docs. Payments and documents: Stripe, DomPDF and League CSV. Messaging: Postmark, Slack notifications and cloud telephony SMS. Data: MySQL or MariaDB, and Redis.</desc><defs><marker id="mk-membership-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-membership-b-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect className="v-lane" x="8" y="8" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="16" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="40.0" textAnchor="middle">Frontend</text><rect className="v-box" x="166" y="24" width="58" height="32" rx="6"></rect><text className="v-text" x="195.0" y="44.0" textAnchor="middle">Vue 3</text><rect className="v-box" x="232" y="24" width="86" height="32" rx="6"></rect><text className="v-text" x="275.0" y="44.0" textAnchor="middle">Alpine.js</text><rect className="v-box" x="326" y="24" width="107" height="32" rx="6"></rect><text className="v-text" x="379.5" y="44.0" textAnchor="middle">Tailwind CSS</text><rect className="v-box" x="441" y="24" width="50" height="32" rx="6"></rect><text className="v-text" x="466.0" y="44.0" textAnchor="middle">Vite</text><rect className="v-box" x="499" y="24" width="58" height="32" rx="6"></rect><text className="v-text" x="528.0" y="44.0" textAnchor="middle">Blade</text><rect className="v-lane" x="8" y="72" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="80" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="104.0" textAnchor="middle">Backend</text><rect className="v-box" x="166" y="88" width="72" height="32" rx="6"></rect><text className="v-text" x="202.0" y="108.0" textAnchor="middle">PHP 8.2</text><rect className="v-box" x="246" y="88" width="93" height="32" rx="6"></rect><text className="v-text" x="292.5" y="108.0" textAnchor="middle">Laravel 12</text><rect className="v-box" x="347" y="88" width="72" height="32" rx="6"></rect><text className="v-text" x="383.0" y="108.0" textAnchor="middle">Sanctum</text><rect className="v-box" x="427" y="88" width="79" height="32" rx="6"></rect><text className="v-text" x="466.5" y="108.0" textAnchor="middle">JWT auth</text><rect className="v-box" x="514" y="88" width="93" height="32" rx="6"></rect><text className="v-text" x="560.5" y="108.0" textAnchor="middle">L5-Swagger</text><rect className="v-lane" x="8" y="136" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="144" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="160.0" textAnchor="middle">Payments and</text><text className="v-label" x="75" y="176.0" textAnchor="middle">documents</text><rect className="v-box" x="166" y="152" width="65" height="32" rx="6"></rect><text className="v-text" x="198.5" y="172.0" textAnchor="middle">Stripe</text><rect className="v-box" x="239" y="152" width="65" height="32" rx="6"></rect><text className="v-text" x="271.5" y="172.0" textAnchor="middle">DomPDF</text><rect className="v-box" x="312" y="152" width="93" height="32" rx="6"></rect><text className="v-text" x="358.5" y="172.0" textAnchor="middle">League CSV</text><rect className="v-lane" x="8" y="200" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="208" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="232.0" textAnchor="middle">Messaging</text><rect className="v-box" x="166" y="216" width="79" height="32" rx="6"></rect><text className="v-text" x="205.5" y="236.0" textAnchor="middle">Postmark</text><rect className="v-box" x="253" y="216" width="157" height="32" rx="6"></rect><text className="v-text" x="331.5" y="236.0" textAnchor="middle">Slack notifications</text><rect className="v-box" x="418" y="216" width="157" height="32" rx="6"></rect><text className="v-text" x="496.5" y="236.0" textAnchor="middle">Cloud telephony SMS</text><rect className="v-lane" x="8" y="264" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="272" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="296.0" textAnchor="middle">Data</text><rect className="v-box" x="166" y="280" width="136" height="32" rx="6"></rect><text className="v-text" x="234.0" y="300.0" textAnchor="middle">MySQL or MariaDB</text><rect className="v-box" x="310" y="280" width="121" height="32" rx="6"></rect><text className="v-text" x="370.5" y="300.0" textAnchor="middle">Redis (Predis)</text></svg></div><figcaption>One Laravel application serves both the Blade and Vue front ends. Stripe, PDF generation and messaging providers sit behind service classes, with MySQL or MariaDB and Redis underneath.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Keeps the whole prospect-to-payment journey in one record chain, avoiding re-keying between tools.</li>
      <li>Automates recurring invoices, reminders and commission calculation that would otherwise be manual.</li>
      <li>Separates access by role so sales, payroll and admins see only what they need.</li>
      <li>Exposes a headless API so a member-facing site can reuse the same accounts.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/property-direct-mail-and-tax-payment-platform/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Property direct mail and tax payment platform</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/travel-membership-crm-tour-manifest-payments/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Travel membership CRM, tour manifest and payments platform</span></Link>
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
