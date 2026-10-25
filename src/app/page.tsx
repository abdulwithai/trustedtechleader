import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import HomeBehavior from '@/components/behaviors/HomeBehavior';
import '@/styles/pages/home.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Trusted Tech Leader | Custom business systems for founder-led companies"
  },
  "description": "We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Trusted Tech Leader | Custom business systems for founder-led companies",
    "description": "We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.",
    "url": "https://trustedtechleader.com/",
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
    <PageShell pageClass="page-home" home>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\",\"description\":\"We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.\"},{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"url\":\"https://trustedtechleader.com/\",\"name\":\"Trusted Tech Leader\",\"publisher\":{\"@id\":\"https://trustedtechleader.com/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/#webpage\",\"url\":\"https://trustedtechleader.com/\",\"name\":\"Trusted Tech Leader | Custom business systems for founder-led companies\",\"description\":\"We build the CRM, billing and operations platforms that founder-led businesses run on. See builds for travel membership, real estate, pharmacy and facilities teams.\",\"isPartOf\":{\"@id\":\"https://trustedtechleader.com/#website\"},\"about\":{\"@id\":\"https://trustedtechleader.com/#organization\"}}]}" }} />
      <main id="main">
      <section className="container hero grid grid-hero">
      <div className="hero__copy">
      <p className="hero__badge"><span aria-hidden="true"></span>Business systems</p>
      <h1>Custom software for <em>founder-led</em> businesses.</h1>
      <p className="lead">CRM, billing and operations systems, built around how you work.</p>
      <div className="btn-row mt-3">
      <Link className="btn btn-primary" href="/case-studies/">See our work</Link>
      <a className="btn btn-outline" href="mailto:hello@trustedtechleader.com">Get in touch</a>
      </div>
      <p className="hero__proof">26 case studies &middot; CRM, billing, inventory, reporting</p>
      </div>
      <div className="hero__card">
      <div className="dash" role="img" aria-label="Illustration: a live operations dashboard for a founder-led business. Revenue, open deals and invoices due update as a client moves through one system, from lead captured to contract signed, invoice paid and commission calculated.">
      <div className="dash__toast dash__toast--pay" aria-hidden="true">
      <span className="dash__check"><svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7"></path></svg></span>
      <span className="dash__tt"><b>Payment received</b><small data-toast="">$3,200 &middot; Bright Studio</small></span>
      </div>
      <div className="dash__win" aria-hidden="true">
      <div className="dash__bar">
      <span className="dash__dots"><i></i><i></i><i></i></span>
      <span className="dash__title">Ops &middot; Overview</span>
      <span className="dash__live"><i></i>Live</span>
      </div>
      <div className="dash__body">
      <div className="dash__kpis">
      <div className="kpi"><span className="kpi__l">Revenue (MTD)</span><span className="kpi__v" data-kpi="rev">$48,250</span><span className="kpi__d">+12%</span></div>
      <div className="kpi"><span className="kpi__l">Open deals</span><span className="kpi__v" data-kpi="deals">23</span><span className="kpi__d">+3 this week</span></div>
      <div className="kpi"><span className="kpi__l">Invoices due</span><span className="kpi__v" data-kpi="due">7</span><span className="kpi__d">&minus;2 this week</span></div>
      </div>
      <div className="dash__chart">
      <div className="dash__ch"><span>Cash collected</span><b data-kpi="week">$9,600</b></div>
      <svg className="dash__bars" viewBox="0 0 300 84" preserveAspectRatio="none">
      <line x1="0" y1="4.5" x2="300" y2="4.5"></line><line x1="0" y1="31.5" x2="300" y2="31.5"></line><line x1="0" y1="58.5" x2="300" y2="58.5"></line>
      <rect x="6" y="4" width="25" height="80" style={{ "--h": ".44", "--i": "0" } as React.CSSProperties}></rect>
      <rect x="43.5" y="4" width="25" height="80" style={{ "--h": ".55", "--i": "1" } as React.CSSProperties}></rect>
      <rect x="81" y="4" width="25" height="80" style={{ "--h": ".5", "--i": "2" } as React.CSSProperties}></rect>
      <rect x="118.5" y="4" width="25" height="80" style={{ "--h": ".64", "--i": "3" } as React.CSSProperties}></rect>
      <rect x="156" y="4" width="25" height="80" style={{ "--h": ".58", "--i": "4" } as React.CSSProperties}></rect>
      <rect x="193.5" y="4" width="25" height="80" style={{ "--h": ".72", "--i": "5" } as React.CSSProperties}></rect>
      <rect x="231" y="4" width="25" height="80" style={{ "--h": ".8", "--i": "6" } as React.CSSProperties}></rect>
      <rect className="is-now" x="268.5" y="4" width="25" height="80" style={{ "--h": ".66", "--i": "7" } as React.CSSProperties} data-bar=""></rect>
      </svg>
      <div className="dash__ax"><span>8 weeks ago</span><span>This week</span></div>
      </div>
      <div className="feed">
      <div className="feed__head"><span><i></i>Pipeline</span><em>CRM &middot; Billing &middot; Ops</em></div>
      <div className="feed__view">
      <ul className="feed__rows" data-feed="">
      <li className="feed__row"><span className="feed__ic"><svg viewBox="0 0 16 16"><path d="M4 12L12 4"></path><circle cx="5" cy="5" r="1.6"></circle><circle cx="11" cy="11" r="1.6"></circle></svg></span><span className="feed__tx"><b>Bright Studio</b><span>Commission $320 calculated</span></span><span className="feed__st is-ok">Done</span></li>
      <li className="feed__row"><span className="feed__ic"><svg viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="8.5" rx="1.5"></rect><path d="M2 7h12"></path></svg></span><span className="feed__tx"><b>Bright Studio</b><span>Invoice #1041 paid &middot; $3,200</span></span><span className="feed__st is-ok">Paid</span></li>
      <li className="feed__row"><span className="feed__ic"><svg viewBox="0 0 16 16"><path d="M4 2.5h5.5L12 5v8.5H4z"></path><path d="M6 8h4M6 10.5h3"></path></svg></span><span className="feed__tx"><b>Bright Studio</b><span>Contract signed</span></span><span className="feed__st is-ok">Signed</span></li>
      <li className="feed__row"><span className="feed__ic"><svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="2.5"></circle><path d="M3 13.5c.8-2.6 2.8-3.8 5-3.8s4.2 1.2 5 3.8"></path></svg></span><span className="feed__tx"><b>Bright Studio</b><span>Lead captured</span></span><span className="feed__st is-ok">New</span></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      <div className="dash__toast dash__toast--sync" aria-hidden="true">
      <span className="dash__avs"><i>AM</i><i>JR</i><i>SK</i></span>
      <span className="dash__tt"><b>Synced</b><small>QuickBooks &middot; Gmail &middot; Sheets</small></span>
      </div>
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
      <HomeBehavior />
    </PageShell>
  );
}
