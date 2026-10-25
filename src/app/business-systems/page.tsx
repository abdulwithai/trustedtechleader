import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  "title": {
    "absolute": "Custom business systems | Trusted Tech Leader"
  },
  "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
  "alternates": {
    "canonical": "/business-systems/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
    "url": "https://trustedtechleader.com/business-systems/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: business systems"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: business systems"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-business-systems" crumb="Business systems" linkedin={false} footerNote={<>Case studies are anonymized: each is described from the codebase, no client is named and no metrics are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/business-systems/#webpage\",\"url\":\"https://trustedtechleader.com/business-systems/\",\"name\":\"Custom business systems | Trusted Tech Leader\",\"description\":\"Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Business systems\",\"item\":\"https://trustedtechleader.com/business-systems/\"}]}" }} />
      <main id="main">
      <section className="section container" aria-labelledby="hero-title">
      <p className="eyebrow eyebrow--dot">Business systems</p>
      <h1 id="hero-title" className="h1-md maxw-prose">One system for leads, billing, stock and reports.</h1>
      <p className="lead mt-3 maxw-prose">We build custom business systems that replace scattered spreadsheets and disconnected tools. CRM, billing, inventory and reporting live in one system instead of being re-keyed between tools.</p>
      <div className="btn-row mt-4">
      <a className="btn btn-primary" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Start a conversation</a>
      <a className="btn btn-outline" href="#related">See related case studies</a>
      </div>
      </section>
      <section className="section section-sand" aria-labelledby="included-title">
      <div className="container grid grid-split">
      <h2 id="included-title" className="h2-lg">What's included</h2>
      <ul className="stack">
      <li>A CRM for leads, contacts and follow-up</li>
      <li>Billing: invoices, recurring charges and payment links</li>
      <li>Inventory and stock tracking where your business needs it</li>
      <li>Reporting and dashboards from the same data</li>
      <li>CSV export and reporting</li>
      <li>Roles, so each person sees what they need</li>
      </ul>
      </div>
      </section>
      <section className="section container" aria-labelledby="how-title">
      <h2 id="how-title" className="h2-lg">How we work</h2>
      <div className="grid grid-3 mt-4">
      <div><p className="numeral">i.</p><h3 className="h3-md">Map the process</h3><p className="body-sm">We walk through how work moves today and agree what the system must do first.</p></div>
      <div><p className="numeral">ii.</p><h3 className="h3-md">Build in phases</h3><p className="body-sm">The system is built in phases, starting with the parts you need first.</p></div>
      <div><p className="numeral">iii.</p><h3 className="h3-md">Hand over</h3><p className="body-sm">We walk your team through the system.</p></div>
      </div>
      </section>
      <section className="section container rule-top" id="related" aria-labelledby="related-title">
      <h2 id="related-title" className="h2-lg">Related case studies</h2>
      <div className="grid grid-2 mt-4">
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/multi-tenant-pharmacy-erp-pos/">Multi-tenant pharmacy ERP and POS</Link></h3>
      <p className="body-sm">A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/membership-sales-crm-and-billing/">Membership sales CRM and billing</Link></h3>
      <p className="body-sm">Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/travel-membership-crm-tour-manifest-payments/">Travel membership CRM platform</Link></h3>
      <p className="body-sm">A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/ro-plant-monitoring-system/">Water-plant monitoring system</Link></h3>
      <p className="body-sm">A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.</p>
      </article>
      </div>
      </section>
      <section className="section section-dark text-center" aria-labelledby="cta-title">
      <div className="container">
      <h2 id="cta-title" className="h2-lg">Tell us what runs your business today.</h2>
      <div className="btn-row btn-row--center mt-4">
      <a className="btn btn-light btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Email hello@trustedtechleader.com</a>
      </div>
      </div>
      </section>
      </main>
    </PageShell>
  );
}
