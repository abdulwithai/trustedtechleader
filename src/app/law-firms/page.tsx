import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import LawBehavior from '@/components/behaviors/LawBehavior';
import '@/styles/pages/law.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "AI lead intake for law firms | Trusted Tech Leader"
  },
  "description": "Every inquiry answered, every missed consult followed up. A unified lead system for immigration, personal injury and family law firms.",
  "alternates": {
    "canonical": "/law-firms/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "AI lead intake for law firms | Trusted Tech Leader",
    "description": "Every inquiry answered, every missed consult followed up. A unified lead system for immigration, personal injury and family law firms.",
    "url": "https://trustedtechleader.com/law-firms/",
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
    "title": "AI lead intake for law firms | Trusted Tech Leader",
    "description": "Every inquiry answered, every missed consult followed up. A unified lead system for immigration, personal injury and family law firms.",
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
    <PageShell pageClass="page-law" current="/law-firms/" crumb="For law firms" footerNote={<>This page describes software services and is not legal advice. Example records are fictional demo data.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/law-firms/#webpage\",\"url\":\"https://trustedtechleader.com/law-firms/\",\"name\":\"AI lead intake for law firms | Trusted Tech Leader\",\"description\":\"Every inquiry answered, every missed consult followed up. A unified lead system for immigration, personal injury and family law firms.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AI lead intake for law firms\",\"item\":\"https://trustedtechleader.com/law-firms/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Do you need access to our client files?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Demos run on fictional data. In your build, documents stay inside the CRM and systems you already use.\"}},{\"@type\":\"Question\",\"name\":\"Are the automated calls and texts allowed in our state?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Consent, disclosure and recording rules differ by state. We check yours before the follow-up agent goes live and only contact people who reached out to you. This is not legal advice.\"}},{\"@type\":\"Question\",\"name\":\"Will this replace our intake staff?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. It removes the repetitive part: copying leads, chasing replies, rebooking. Your team handles the conversations.\"}},{\"@type\":\"Question\",\"name\":\"What will you report back?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Time to first response, share of leads followed up, no-show rate before and after, and staff hours saved a week.\"}}]}" }} />
      <div className="dark-top">
      <section className="law-hero container" aria-labelledby="hero-title">
      <div className="law-hero__copy">
      <p className="law-hero__practices">Immigration · Personal injury · Family law</p>
      <h1 id="hero-title" className="h1-md">Every inquiry answered. Every missed consult followed up.</h1>
      <p className="lead">Intake documents are read before the lawyer picks up the phone. A missed consultation triggers a call and a text, so the conversation picks up where it stopped.</p>
      <div className="btn-row">
      <Link className="btn btn-primary" href="/free-scan/">Free AI Visibility Scan</Link>
      <a className="btn btn-outline-dark" href="#stages">How it works</a>
      </div>
      </div>
      <div className="demo" id="demo">
      <div className="demo__bar">
      <div className="demo__tabs" role="tablist" aria-label="Practice area">
      <button className="demo__tab" type="button" role="tab" id="tab-imm" data-practice="imm" aria-selected="true" aria-controls="demo-panel">Immigration</button>
      <button className="demo__tab" type="button" role="tab" id="tab-pi" data-practice="pi" aria-selected="false" aria-controls="demo-panel" tabIndex={-1}>Personal injury</button>
      <button className="demo__tab" type="button" role="tab" id="tab-fam" data-practice="fam" aria-selected="false" aria-controls="demo-panel" tabIndex={-1}>Family law</button>
      </div>
      <span className="demo__badge">Demo data</span>
      </div>
      <div id="demo-panel" role="tabpanel" aria-labelledby="tab-imm" tabIndex={0}>
      <div className="demo__head">
      <div>
      <div className="demo__name" data-f="name">M. Alvarez</div>
      <div className="demo__matter" data-f="matter">Family-based green card</div>
      </div>
      <div className="demo__meta">via <span data-f="source">website form</span><br />Routed to <span data-f="team">Immigration</span></div>
      </div>
      <ol className="demo__steps" data-f="steps">
      <li><span className="dot"></span><span className="t">9:01 am</span><div><div className="l">Captured</div><div className="d">Website form added to the CRM</div></div></li>
      <li><span className="dot"></span><span className="t">9:01 am</span><div><div className="l">Read</div><div className="d">I-130 receipt notice: receipt date and priority date added</div></div></li>
      <li><span className="dot"></span><span className="t">9:03 am</span><div><div className="l">Replied</div><div className="d">First reply sent with consult times</div></div></li>
      <li><span className="dot"></span><span className="t">9:20 am</span><div><div className="l">Booked</div><div className="d">Thu 2:00 pm with the immigration attorney</div></div></li>
      <li><span className="dot dot--last"></span><span className="t">Thu 2:15</span><div><div className="l">Recovered</div><div className="d">Consult missed: call placed, SMS rebooking link sent</div></div></li>
      </ol>
      </div>
      </div>
      </section>
      </div>
      <main id="main">
      <section className="section stages container" id="stages" aria-labelledby="stages-title">
      <div className="stages__head">
      <h2 id="stages-title">From first message to kept consultation.</h2>
      <p className="stages__sub">Five stages run inside your existing CRM and calendar. The sixth is where the firm grows.</p>
      </div>
      <ol className="stage-strip">
      <li><div className="stage__n">01</div><h3>Capture</h3><p>Forms, WhatsApp and ad leads land in one CRM record.</p></li>
      <li><div className="stage__n">02</div><h3>Read</h3><p>Intake attachments are summarised onto the record.</p></li>
      <li><div className="stage__n">03</div><h3>Respond</h3><p>A fast first reply, routed to the right practice area.</p></li>
      <li><div className="stage__n">04</div><h3>Book</h3><p>The consultation goes on the lawyer's calendar.</p></li>
      <li><div className="stage__n">05</div><h3>Recover</h3><p>A missed consult triggers a call agent and an SMS.</p></li>
      <li className="is-next"><div className="stage__n">06 · Next</div><h3>Grow</h3><p>Review requests after good outcomes, and a check of what AI engines say about you.</p></li>
      </ol>
      </section>
      <section className="container parts" id="what-you-get" aria-label="What you get">
      <article className="card part">
      <p className="part__label">Part one · Stages 1–4</p>
      <h3>Unified lead system</h3>
      <p className="part__lead">Every inquiry in one record, read, answered and booked.</p>
      <ul className="part__list">
      <li>Website, WhatsApp and ad leads routed to your CRM</li>
      <li>Attachments read and summarised for the lawyer</li>
      <li>Routing by practice area, booking to calendar</li>
      </ul>
      </article>
      <article className="card part">
      <p className="part__label">Part two · Stage 5</p>
      <h3>Missed-consult follow-up</h3>
      <p className="part__lead">When a consultation is missed, the conversation doesn't end.</p>
      <ul className="part__list">
      <li>Call agent reaches out to rebook</li>
      <li>SMS with a direct rebooking link</li>
      <li>Consent and disclosure set for your state</li>
      </ul>
      </article>
      <div className="fee-bar">
      <div>
      <p className="fee-bar__title">Both parts, one fixed project fee.</p>
      <p className="fee-bar__sub">Scoped on a walkthrough call. Your CRM and calendar stay yours.</p>
      </div>
      <Link className="btn btn-primary" href="/free-scan/">Free AI Visibility Scan</Link>
      </div>
      </section>
      <section className="container faq-section" id="questions" aria-labelledby="faq-title">
      <div>
      <p className="eyebrow">Questions firms ask</p>
      <h2 id="faq-title">Built around how firms work.</h2>
      </div>
      <div className="faq">
      <div className="faq__item is-open">
      <h3 className="faq__q"><button type="button" id="faq-q1" aria-expanded="true" aria-controls="faq-a1"><span>Do you need access to our client files?</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
      <div className="faq__a" id="faq-a1" role="region" aria-labelledby="faq-q1"><p>Demos run on fictional data. In your build, documents stay inside the CRM and systems you already use.</p></div>
      </div>
      <div className="faq__item">
      <h3 className="faq__q"><button type="button" id="faq-q2" aria-expanded="false" aria-controls="faq-a2"><span>Are the automated calls and texts allowed in our state?</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
      <div className="faq__a" id="faq-a2" role="region" aria-labelledby="faq-q2" hidden><p>Consent, disclosure and recording rules differ by state. We check yours before the follow-up agent goes live and only contact people who reached out to you. This is not legal advice.</p></div>
      </div>
      <div className="faq__item">
      <h3 className="faq__q"><button type="button" id="faq-q3" aria-expanded="false" aria-controls="faq-a3"><span>Will this replace our intake staff?</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
      <div className="faq__a" id="faq-a3" role="region" aria-labelledby="faq-q3" hidden><p>No. It removes the repetitive part: copying leads, chasing replies, rebooking. Your team handles the conversations.</p></div>
      </div>
      <div className="faq__item">
      <h3 className="faq__q"><button type="button" id="faq-q4" aria-expanded="false" aria-controls="faq-a4"><span>What will you report back?</span><span className="faq__sign" aria-hidden="true"></span></button></h3>
      <div className="faq__a" id="faq-a4" role="region" aria-labelledby="faq-q4" hidden><p>Time to first response, share of leads followed up, no-show rate before and after, and staff hours saved a week.</p></div>
      </div>
      </div>
      </section>
      <section className="cta-band" aria-labelledby="cta-title">
      <h2 id="cta-title" className="h2-lg">Watch an immigration, injury or family lead move through all six stages.</h2>
      <Link className="btn btn-dark btn-lg" href="/free-scan/">Free AI Visibility Scan</Link>
      </section>
      </main>
      <LawBehavior />
    </PageShell>
  );
}
