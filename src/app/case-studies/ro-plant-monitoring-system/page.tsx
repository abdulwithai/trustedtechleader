import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Water-plant monitoring system | Trusted Tech Leader"
  },
  "description": "A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.",
  "alternates": {
    "canonical": "/case-studies/ro-plant-monitoring-system/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Water-plant monitoring system | Trusted Tech Leader",
    "description": "A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.",
    "url": "https://trustedtechleader.com/case-studies/ro-plant-monitoring-system/",
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
    "title": "Water-plant monitoring system | Trusted Tech Leader",
    "description": "A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Water-plant monitoring and reporting system\",\"description\":\"A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/ro-plant-monitoring-system/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/ro-plant-monitoring-system/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Water-plant monitoring and reporting system\",\"item\":\"https://trustedtechleader.com/case-studies/ro-plant-monitoring-system/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Water-plant monitoring and reporting system</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Water-plant monitoring and reporting system</h1>
      <p className="lead">A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Water treatment and facilities operations</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Working system; captured from the live admin account</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Plant operators, supervisors and administrators running several water plants.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Single-page web app, PHP API, Tailwind CSS</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A conventional plant log sheet produced automatically from daily entries, with limits that flag bad readings only to supervisors.</dd></div>
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
      <p>Screens captured from the running admin account in October 2026. Client, site, operator and contact names are replaced.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>admin overview</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/overview.jpg" width="1440" height="900" loading="lazy" alt="Admin overview dashboard showing site, operator, submitted and pending counts and a table of each plant's status for the day. Names are anonymized." />
      </div>
      <figcaption><b>Admin overview</b> Today's site status for every plant, who is assigned, and which readings are still pending.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>monthly log sheet</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/log-sheet.jpg" width="1440" height="900" loading="lazy" alt="Monthly log sheet for one reverse osmosis plant with pressure, flow, TDS and pH columns and a monthly summary. Names are anonymized." />
      </div>
      <figcaption><b>Monthly log sheet</b> The paper log sheet rebuilt on screen from daily readings, with monthly totals, ready to print or export to Excel.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>maintenance records</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/maintenance.jpg" width="1440" height="900" loading="lazy" alt="Maintenance records list with open and resolved counts, average days to resolve and a filterable table. Names are anonymized." />
      </div>
      <figcaption><b>Maintenance records</b> Issues logged against a site with the date raised and resolved, and the days taken.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>expenses</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/expenses.jpg" width="1440" height="900" loading="lazy" alt="Expenses list grouped by date with totals per day and summary tiles for total spent and daily average. Names are anonymized." />
      </div>
      <figcaption><b>Expenses</b> Date-wise spend per site with daily totals and a running summary.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>sites directory</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/sites.jpg" width="1440" height="900" loading="lazy" alt="Sites directory listing main sites with their sub-sites, type, location and capacity. Names are anonymized." />
      </div>
      <figcaption><b>Sites directory</b> Plants with sub-sites, type, capacity and status, plus the company name printed on every sheet.</figcaption>
      </figure>
      <figure className="cs-shot">
      <div className="cs-shot__link">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>users and roles</span></div>
      <img src="/case-studies/ro-plant-monitoring-system/users.jpg" width="1440" height="900" loading="lazy" alt="User access list showing role, assigned site, plant type and ID expiry for each person. Names are anonymized." />
      </div>
      <figcaption><b>Users and roles</b> Admins, supervisors and operators, each assigned to the sites they cover, with ID-expiry tracking.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A facilities company runs reverse osmosis (RO) plants and sewage treatment plants (STP) at several customer sites. Each plant has an operator who records pressures, flows, TDS and pH every day, and the results have to be compiled into a monthly log sheet for the client.</p>
      <p>Paper or spreadsheet logging tends to mean late entries noticed only at month end, out-of-range pressures that go unflagged, and maintenance and spend kept in separate places. Supervisors could not see at a glance which plants had reported today.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A browser-based system with three roles. Operators see only their own site and a single daily reading form. Supervisors and admins see a dashboard of who has submitted today, every reading in a filterable table, and the monthly log sheet generated from those readings.</p>
      <p>Running hours and water production are calculated from the meter values entered, so operators do not do the arithmetic. Pressure limits are set per site and period; readings over a limit are shown in red to supervisors and admins only. Maintenance, expenses and membrane vessel status sit in the same system.</p>
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
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Daily operator reading</h3><p>One form per site per day for hours meter, product flow meter, pressures, flows, TDS and pH, with backwash timing and automatic running hours and production.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Today's site status</h3><p>A dashboard showing submitted and pending sites, the assigned operator and the last recorded reading for each.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Monthly log sheet</h3><p>A plant log sheet generated from daily readings, with monthly totals and averages, remarks, chemical consumption and sign-off fields. Print or export to Excel. RO periods run 26th to 25th, STP periods 21st to 20th.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Pressure limits</h3><p>Maximum pressure per stage by site and period, with the most specific limit winning. Breaches show in red to admins and supervisors, never to operators.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Membrane vessels</h3><p>Up to 30 pressure vessels per site, enabled by an admin so operators see only the vessels that exist, with a monthly feed and reject sheet.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Maintenance and expenses</h3><p>Issues with raised and resolved dates, average days to resolve, and date-wise spending with daily totals. Both export to Excel.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Sites and sub-sites</h3><p>Main sites with several sub-sites, RO and STP types, capacity and active status. The company name on every sheet is editable.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Users and ID expiry alerts</h3><p>Admin, supervisor and operator roles with site assignment, and a warning on the dashboard when an operator's ID is about to expire.</p></li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Follow the familiar plant log</h3><p>The log sheet layout follows a conventional plant log, with remarks, chemical use and sign-off fields, so it prints as a familiar document.</p></div></li>
      <li><div><h3>Role-based views</h3><p>Operators get a single-purpose screen; limits and red marks are withheld from them so readings are recorded as measured.</p></div></li>
      <li><div><h3>Calculated, not typed</h3><p>Running hours and production are derived from meter values, which removes a common source of arithmetic mistakes.</p></div></li>
      <li><div><h3>Lightweight front end</h3><p>The interface is one page that talks to a single PHP endpoint, with no build step to maintain.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the delivered application.</p></div>
      <dl className="cs-stack">
      <div><dt>Frontend</dt><dd><ul className="cs-chips"><li className="chip">Single-page HTML and JavaScript</li><li className="chip">Tailwind CSS</li><li className="chip">Font Awesome</li><li className="chip">Inter</li></ul></dd></div>
      <div><dt>Backend</dt><dd><ul className="cs-chips"><li className="chip">PHP API (single endpoint)</li></ul></dd></div>
      <div><dt>Reporting</dt><dd><ul className="cs-chips"><li className="chip">SheetJS (Excel export)</li><li className="chip">Print stylesheet (A4)</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Supervisors see which plants have reported today without phoning operators.</li>
      <li>Month-end sheets are produced from daily data instead of being retyped.</li>
      <li>Out-of-range pressures are visible to supervisors the day they happen.</li>
      <li>Maintenance history and spend are kept per site in one place.</li>
      <li>One system covers both RO and STP plants and their sub-sites.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/multi-tenant-pharmacy-erp-pos/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Multi-tenant pharmacy ERP and POS</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/property-direct-mail-and-tax-payment-platform/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Property direct mail and tax payment platform</span></Link>
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
