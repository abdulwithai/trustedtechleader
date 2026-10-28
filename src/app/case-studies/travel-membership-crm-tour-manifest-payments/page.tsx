import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Travel membership CRM platform | Trusted Tech Leader"
  },
  "description": "A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.",
  "alternates": {
    "canonical": "/case-studies/travel-membership-crm-tour-manifest-payments/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Travel membership CRM platform | Trusted Tech Leader",
    "description": "A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.",
    "url": "https://trustedtechleader.com/case-studies/travel-membership-crm-tour-manifest-payments/",
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
    "title": "Travel membership CRM platform | Trusted Tech Leader",
    "description": "A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Anonymized: described from the running application; no client named; no metrics claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Travel membership CRM, tour manifest and payments platform\",\"description\":\"A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/travel-membership-crm-tour-manifest-payments/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/travel-membership-crm-tour-manifest-payments/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Travel membership CRM, tour manifest and payments platform\",\"item\":\"https://trustedtechleader.com/case-studies/travel-membership-crm-tour-manifest-payments/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Travel membership CRM, tour manifest and payments platform</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Travel membership CRM, tour manifest and payments platform</h1>
      <p className="lead">A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Travel membership sales</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Working system; screens from the live admin account</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Sales agents, managers, marketing staff and administrators at a travel membership business.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Laravel, Blade, Vue 3, Tailwind CSS</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>Booking, payments, dues tracking, commissions and calls handled in one admin application.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">Solution</a></li>
      <li><a href="#features">Key features</a></li>
      <li><a href="#implementation">Implementation</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live system</h2>
      <p>Screens captured from the running admin account in October 2026, with names, contact details, amounts and counts replaced by placeholders.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>daily dashboard</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/dashboard.jpg" width="1440" height="900" loading="lazy" alt="Daily performance dashboard showing today's sales, tours and net sales, week-to-date and Zoom figures, cancellations and an incoming-call widget. Names are anonymized." />
      </div>
      <figcaption><b>Daily performance dashboard</b> Today and week-to-date sales and tour figures, cancellations, Zoom tour performance, and a widget showing who is calling.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>tour manifest</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/manifest.jpg" width="1440" height="900" loading="lazy" alt="Tour manifest with city tabs, upcoming day tabs and a time slot showing a maximum of six tours with bookable empty slots. Names are anonymized." />
      </div>
      <figcaption><b>Tour manifest and booking</b> Tours by city and day, with a per-slot maximum, bookable empty slots, wave customisation and a check-in screen.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>household CRM</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/households.jpg" width="1440" height="900" loading="lazy" alt="Household list with search, portal-access and dues filters, CSV export and a table of members with view actions. Names are anonymized." />
      </div>
      <figcaption><b>Household CRM list</b> Searchable member records with portal-access and dues-status filters, inactive toggling and CSV export.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>membership dues report</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/reports.jpg" width="1440" height="900" loading="lazy" alt="Membership dues report with filters, coverage counts by status and a table of plan, amount and verification per household. Names are anonymized." />
      </div>
      <figcaption><b>Membership dues report</b> Dues status per household with filters, export and SMS actions. Coverage counts shown are illustrative placeholders.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>hosted payments</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/payments.jpg" width="1440" height="900" loading="lazy" alt="Hosted checkout list with status filter and a table of contract, customer, amount and status with resend and history actions. Names are anonymized." />
      </div>
      <figcaption><b>Hosted payment links</b> SurePay checkouts with pending, cancelled and successful statuses, plus resend and history actions.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>users management</span></div>
      <img src="/case-studies/travel-membership-crm-tour-manifest-payments/users.jpg" width="1440" height="900" loading="lazy" alt="Users management list with role badges, active state, Dialpad link and Login As, edit and delete actions. Names are anonymized." />
      </div>
      <figcaption><b>Users and roles</b> Staff with multiple roles, active state, a linked Dialpad identity and a Login As action for administrators.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A travel membership business sells through scheduled tours and presentations, in person and over Zoom. Staff in sales, marketing and the office all work from the same member and prospect records.</p>
      <p>Booking tours, taking payments, checking whether dues are current, paying commissions and contacting members tend to live in separate tools. Each handoff is a chance for records to disagree.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A server-rendered admin application built around the household record. Prospects are booked into tour slots on a manifest, payments are taken through hosted links, and dues status is reported per household from Stripe data with room for staff overrides.</p>
      <p>Commissions, campaigns, call tickets and customer portal access sit in the same application, with role-based users so each team sees the screens it needs.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as seen in the running application.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Household CRM</h3><p>Member records with search, portal-access and dues filters, an inactive flag and CSV export.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Tour manifest</h3><p>Tours booked by city and day with a maximum per time slot, wave customisation and a check-in screen. Zoom and in-person tours are both supported.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Daily KPI dashboard</h3><p>Today and week-to-date sales, tours and sales per guest, cancellations and Zoom tour performance.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Hosted payment links</h3><p>SurePay hosted checkouts with status filter, resend and history, alongside direct payments.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Membership dues report</h3><p>Dues status per household using Stripe historical data snapshots and staff overrides, with export and SMS actions.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Commissions and payroll</h3><p>Contracts and commission calculations by role and manager.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>SMS and email campaigns</h3><p>Campaign list with progress and sending from a CSV.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Inbound calls and tickets</h3><p>A Dialpad-powered incoming-call widget and tickets for inbound calls, colour-coded by age.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">09</span><h3>Customer travel portal access</h3><p>Staff grant and control which households can log in to the customer-facing travel portal.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">10</span><h3>Roles and Login As</h3><p>Administrator, sales, marketing and office roles, several per user, with impersonation for administrators.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">11</span><h3>Daily closing report</h3><p>A daily report that staff can receive by email or SMS.</p></li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Server-rendered pages</h3><p>Pages are rendered by Laravel with Blade templates, with Vue used for some components rather than a separate front-end application.</p></div></li>
      <li><div><h3>Hosted payments</h3><p>Card payments go through hosted checkout links, so the application sends and tracks links rather than handling card entry itself.</p></div></li>
      <li><div><h3>Role-based access</h3><p>Users can hold several roles, and administrators can use Login As to see what a staff member sees.</p></div></li>
      <li><div><h3>Connected tools</h3><p>Stripe, SurePay, Dialpad and Zoom are integrated rather than replaced, so staff keep the tools they already use.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the running application.</p></div>
      <dl className="cs-stack">
      <div><dt>Backend</dt><dd><ul className="cs-chips"><li className="chip">Laravel</li><li className="chip">Blade</li></ul></dd></div>
      <div><dt>Frontend</dt><dd><ul className="cs-chips"><li className="chip">Vite</li><li className="chip">Vue 3</li><li className="chip">Tailwind CSS</li><li className="chip">jQuery</li><li className="chip">Select2</li><li className="chip">flatpickr</li><li className="chip">SweetAlert2</li></ul></dd></div>
      <div><dt>Integrations</dt><dd><ul className="cs-chips"><li className="chip">Stripe</li><li className="chip">SurePay</li><li className="chip">Dialpad</li><li className="chip">Zoom</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Tour capacity and check-in are managed in one place instead of by message.</li>
      <li>Payment status and resend are available from a single list.</li>
      <li>Dues status can be checked per household and exported.</li>
      <li>Sales, tours and cancellations are visible daily without compiling reports.</li>
      <li>Staff access follows role, with customer portal access granted deliberately.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/membership-sales-crm-and-billing/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Membership sales CRM, contracts and billing platform</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Cafe ordering and loyalty platform with mobile app and admin</span></Link>
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
