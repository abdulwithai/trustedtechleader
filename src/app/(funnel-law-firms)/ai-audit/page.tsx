import Cta from '@/components/brand/Cta';
import Auditor from '@/components/brand/Auditor';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import AuditBehavior from '@/components/behaviors/AuditBehavior';
import '@/styles/pages/audit.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Free AI audit for law-firm intake | Trusted Tech Leader"
  },
  "description": "Answer six questions about your intake and get a preliminary audit against the six stages every lead goes through, with the first fix for each gap.",
  "alternates": {
    "canonical": "/ai-audit/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Free AI audit for law-firm intake | Trusted Tech Leader",
    "description": "Answer six questions about your intake and get a preliminary audit against the six stages every lead goes through, with the first fix for each gap.",
    "url": "https://trustedtechleader.com/ai-audit/",
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
    "title": "Free AI audit for law-firm intake | Trusted Tech Leader",
    "description": "Answer six questions about your intake and get a preliminary audit against the six stages every lead goes through, with the first fix for each gap.",
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
    <PageShell funnel="law-firms" pageClass="page-audit" current="/ai-audit/" crumb="AI audit">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/ai-audit/#webpage\",\"url\":\"https://trustedtechleader.com/ai-audit/\",\"name\":\"Free AI audit for law-firm intake | Trusted Tech Leader\",\"description\":\"Answer six questions about your intake and get a preliminary audit against the six stages every lead goes through, with the first fix for each gap.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Free AI audit for law-firm intake\",\"item\":\"https://trustedtechleader.com/ai-audit/\"}]}" }} />
      <main id="main">
      <div className="audit-page">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container audit">
      <div className="audit-intro">
      <p className="acs-eyebrow">Free · about two minutes</p>
      <h1>Where are your leads <em>slipping through?</em></h1>
      <p className="acs-lead audit-intro__lead">Answer six questions about your intake. You get a preliminary audit against the six stages every lead goes through, with the first fix for each gap.</p>
      <ul className="audit-stages">
      <li><span>Capture · Read · Respond</span><span className="muted">Intake</span></li>
      <li><span>Book · Recover</span><span className="muted">Consultations</span></li>
      <li><span>Grow</span><span className="muted">Reviews and AI visibility</span></li>
      </ul>
      <p className="audit-note">No client data needed. Don't enter names or case details.</p>
      <Auditor pose="think" facing="right" className="audit-intro__auditor" />
      </div>
      <div className="audit-panel acs-card acs-card--lg">
      <form id="audit-form" noValidate>
      <div className="audit-qs">
      <fieldset className="audit-q" data-key="practice">
      <legend className="audit-q__legend"><span className="audit-q__n">01</span><span className="audit-q__label">Main practice area</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">Immigration</button>
      <button type="button" className="audit-opt" aria-pressed="false">Personal injury</button>
      <button type="button" className="audit-opt" aria-pressed="false">Family law</button>
      <button type="button" className="audit-opt" aria-pressed="false">Estate planning</button>
      <button type="button" className="audit-opt" aria-pressed="false">Other</button>
      </div>
      </fieldset>
      <fieldset className="audit-q" data-key="channels" data-multi="true">
      <legend className="audit-q__legend"><span className="audit-q__n">02</span><span className="audit-q__label">Where do new inquiries arrive?</span><span className="visually-hidden"> (select all that apply)</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">Website form</button>
      <button type="button" className="audit-opt" aria-pressed="false">Phone</button>
      <button type="button" className="audit-opt" aria-pressed="false">WhatsApp</button>
      <button type="button" className="audit-opt" aria-pressed="false">Ads</button>
      <button type="button" className="audit-opt" aria-pressed="false">Email</button>
      <button type="button" className="audit-opt" aria-pressed="false">Referrals</button>
      </div>
      </fieldset>
      <fieldset className="audit-q" data-key="crm">
      <legend className="audit-q__legend"><span className="audit-q__n">03</span><span className="audit-q__label">Do all inquiries end up in one CRM?</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">Yes, all of them</button>
      <button type="button" className="audit-opt" aria-pressed="false">Some of them</button>
      <button type="button" className="audit-opt" aria-pressed="false">No CRM</button>
      </div>
      </fieldset>
      <fieldset className="audit-q" data-key="reply">
      <legend className="audit-q__legend"><span className="audit-q__n">04</span><span className="audit-q__label">How fast does a new lead hear back?</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">Within minutes</button>
      <button type="button" className="audit-opt" aria-pressed="false">Same day</button>
      <button type="button" className="audit-opt" aria-pressed="false">Next day or later</button>
      <button type="button" className="audit-opt" aria-pressed="false">Not sure</button>
      </div>
      </fieldset>
      <fieldset className="audit-q" data-key="noshow">
      <legend className="audit-q__legend"><span className="audit-q__n">05</span><span className="audit-q__label">What happens when a consult is missed?</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">We call and rebook</button>
      <button type="button" className="audit-opt" aria-pressed="false">One email, then nothing</button>
      <button type="button" className="audit-opt" aria-pressed="false">Nothing set up</button>
      </div>
      </fieldset>
      <fieldset className="audit-q" data-key="reviews">
      <legend className="audit-q__legend"><span className="audit-q__n">06</span><span className="audit-q__label">Do you ask happy clients for reviews?</span></legend>
      <div className="audit-opts">
      <button type="button" className="audit-opt" aria-pressed="false">Every time</button>
      <button type="button" className="audit-opt" aria-pressed="false">Sometimes</button>
      <button type="button" className="audit-opt" aria-pressed="false">Rarely</button>
      </div>
      </fieldset>
      </div>
      <div className="audit-bar">
      <div className="audit-meter" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <span className="audit-progress" id="audit-progress" aria-live="polite">0 of 6 answered</span>
      <button type="submit" className="btn btn-primary audit-run" id="audit-run" disabled>Run my audit</button>
      </div>
      </form>
      <section id="audit-result" className="audit-result" aria-labelledby="audit-headline" hidden>
      <div className="audit-result__head">
      <div>
      <p className="audit-result__kicker" id="audit-kicker"></p>
      <h2 className="audit-result__headline" id="audit-headline" tabIndex={-1}></h2>
      </div>
      <button type="button" className="audit-reset" id="audit-reset">Edit answers</button>
      </div>
      <ol className="audit-findings" id="audit-findings"></ol>
      <div className="audit-cta">
      <Auditor pose="thumbs" facing="left" className="audit-cta__auditor" />
      <div className="audit-cta__copy">
      <p className="audit-cta__title">Confirm it on a call.</p>
      <p className="audit-cta__sub">Based only on your answers, not a measurement of your firm.</p>
      </div>
      <Cta variant="light">Book a call</Cta>
      </div>
      <p className="audit-disclaimer">Preliminary audit generated from your answers. Not legal advice.</p>
      </section>
      </div>
      </div>
      </div>
      </main>
      <AuditBehavior />
    </PageShell>
  );
}
