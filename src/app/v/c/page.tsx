import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HomeBehavior from '@/components/behaviors/HomeBehavior';
import '@/styles/pages/home.css';
import '@/styles/pages/variants.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "See every lead, contract and payment | Trusted Tech Leader"
  },
  "description": "One custom system for sales, contracts, billing and reporting, so founders see the whole business without asking the team.",
  "robots": {
    "index": false,
    "follow": false
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Trusted Tech Leader | Custom business systems for founder-led companies",
    "description": "We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.",
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
    "title": "Trusted Tech Leader | Custom business systems for founder-led companies",
    "description": "We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.",
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
    <PageShell pageClass="page-home" landing>
      <main id="main">
      <section className="container hero grid grid-hero">
      <div className="hero__copy">
      <p className="hero__badge"><span aria-hidden="true"></span>Business systems</p>
      <h1>See every lead, contract and payment <em style={{ whiteSpace: "normal" } as React.CSSProperties}>without asking your team.</em></h1>
      <p className="lead">One custom system for sales, billing and reporting.</p>
      <div className="btn-row mt-3">
      <Link className="btn btn-primary" href="/case-studies/">See our work</Link>
      <a className="btn btn-outline" href="mailto:hello@trustedtechleader.com">Get in touch</a>
      </div>
      <p className="hero__proof">26 case studies &middot; CRM, billing, inventory, reporting</p>
      </div>
      <div className="hero__card">
      <div className="vz" role="img" aria-label="Animation: an owner's live dashboard updates as leads arrive, contracts are signed and payments come in.">
      <p className="vz__k">Today &middot; sample data</p>
      <div className="db__tiles" aria-hidden="true">
      <div className="db__tile"><small>New leads</small><div className="db__num"><span>8<br />9</span></div></div>
      <div className="db__tile"><small>Contracts signed</small><div className="db__num"><span>3<br />4</span></div></div>
      <div className="db__tile"><small>Payments received</small><div className="db__num"><span>2<br />3</span></div></div>
      </div>
      <ul className="db__feed" aria-hidden="true">
      <li><span>New lead from the website</span><em>just now</em></li>
      <li><span>Contract e-signed</span><em>just now</em></li>
      <li><span>Payment received</span><em>just now</em></li>
      <li><span>Commission calculated</span><em>just now</em></li>
      </ul>
      </div>
      </div>
      </section>
      <section className="container services" id="services" aria-labelledby="services-h">
      <div className="grid grid-split">
      <div>
      <p className="eyebrow">Services</p>
      <h2 id="services-h">What we build</h2>
      </div>
      <ol className="svc-list rule-top">
      <li className="svc"><span className="svc__n">01</span><div><h3 className="svc__t"><Link href="/business-systems/">Business systems</Link></h3><p className="svc__d">CRM, billing, inventory, reporting.</p></div></li>
      <li className="svc"><span className="svc__n">02</span><div><h3 className="svc__t"><Link href="/ai-automation/">AI automation</Link></h3><p className="svc__d">Added inside the workflow.</p></div></li>
      <li className="svc"><span className="svc__n">03</span><div><h3 className="svc__t"><Link href="/web-and-mobile-apps/">Web and mobile apps</Link></h3><p className="svc__d">On the same system as your back office.</p></div></li>
      <li className="svc"><span className="svc__n">04</span><div><h3 className="svc__t"><Link href="/law-firms/">Legal SEO reviews</Link></h3><p className="svc__d">For law-firm sites.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="container proof" aria-label="Case study">
      <div className="card-dashed">
      <div>
      <p className="eyebrow">Case study</p>
      <p className="proof__t">Travel membership CRM and payments.</p>
      </div>
      <Link className="btn btn-outline" href="/case-studies/travel-membership-crm-tour-manifest-payments/">Read the case study</Link>
      </div>
      </section>
      <section className="cta rule-bottom" aria-labelledby="cta-h">
      <div className="container text-center">
      <h2 className="h2-lg mx-auto" id="cta-h">Have a workflow stuck in spreadsheets?</h2>
      <div className="btn-row btn-row--center mt-4"><a className="btn btn-primary btn-lg" href="mailto:hello@trustedtechleader.com">Get in touch</a></div>
      </div>
      </section>
      </main>
      <p style={{ position: "fixed", left: "14px", bottom: "14px", zIndex: "50", margin: "0", padding: "6px 12px", font: "500 12px/1.2 system-ui,sans-serif", background: "#0F1A2A", color: "#fff", borderRadius: "999px" } as React.CSSProperties}>Variation C &middot; draft, not indexed</p>
      <HomeBehavior />
    </PageShell>
  );
}
