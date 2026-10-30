import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Cta from '@/components/brand/Cta';
import Auditor from '@/components/brand/Auditor';
import ScanWalk from '@/components/tools/ScanWalk';
import '@/styles/pages/scan.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Free AI Visibility Scan | Trusted Tech Leader"
  },
  "description": "We ask the questions your clients ask ChatGPT, Gemini, Claude and Perplexity, and show you whether your law firm is named. Request a free scan.",
  "alternates": {
    "canonical": "/free-scan/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Free AI Visibility Scan | Trusted Tech Leader",
    "description": "We ask the questions your clients ask ChatGPT, Gemini, Claude and Perplexity, and show you whether your law firm is named. Request a free scan.",
    "url": "https://trustedtechleader.com/free-scan/",
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
    "title": "Free AI Visibility Scan | Trusted Tech Leader",
    "description": "We ask the questions your clients ask ChatGPT, Gemini, Claude and Perplexity, and show you whether your law firm is named. Request a free scan.",
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
    <PageShell funnel="law-firms" pageClass="page-scan" crumb="Free scan" footerNote={<>ChatGPT, Gemini, Claude and Perplexity are trademarks of their owners; no affiliation implied. Not legal advice.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/free-scan/#webpage\",\"url\":\"https://trustedtechleader.com/free-scan/\",\"name\":\"Free AI Visibility Scan | Trusted Tech Leader\",\"description\":\"We ask the questions your clients ask ChatGPT, Gemini, Claude and Perplexity, and show you whether your law firm is named. Request a free scan.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Free AI Visibility Scan\",\"item\":\"https://trustedtechleader.com/free-scan/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What does the free AI Visibility Scan check?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For each question we ask, whether you are named on each assistant and how often across repeat runs, whether the description of your firm is right, who is named instead, and which sources are cited.\"}},{\"@type\":\"Question\",\"name\":\"Which AI assistants do you use?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"ChatGPT, Gemini, Claude and Perplexity.\"}},{\"@type\":\"Question\",\"name\":\"What happens after I request a scan?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We agree the questions with you, run them on four assistants, and send a short report with a fix list covering what each assistant said about you and what to correct first.\"}},{\"@type\":\"Question\",\"name\":\"Do I need to send client data?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. We only use your firm details to run the scan and send you the results. Please send no client data.\"}}]}" }} />
      <main id="main">
      <div className="scan-top">
      <div className="acs-glow" aria-hidden="true"></div>
      <section className="scan-hero container" aria-labelledby="hero-title">
      <div className="scan-hero__copy">
      <p className="acs-eyebrow">Free AI visibility scan · For law firms</p>
      <h1 id="hero-title">Will your firm be <em>in the AI answer?</em></h1>
      <p className="acs-lead">Clients now ask ChatGPT, Gemini, Claude and Perplexity who to call. We ask the questions your clients ask and show you whether your firm is named.</p>
      <div className="scan-hero__cta"><Cta size="lg">Start my free scan</Cta></div>
      </div>
      <div className="walk-wrap">
      <div className="walk" id="walk">
      <div className="walk__bar">
      <span>A client's next question</span>
      <span>Illustrative walkthrough</span>
      </div>
      <div className="walk__tabs" role="tablist" aria-label="Practice area">
      <button className="walk__tab" type="button" role="tab" id="tab-estate" data-q="estate" aria-selected="true" aria-controls="walk-panel">Estate planning</button>
      <button className="walk__tab" type="button" role="tab" id="tab-pi" data-q="pi" aria-selected="false" aria-controls="walk-panel" tabIndex={-1}>Personal injury</button>
      <button className="walk__tab" type="button" role="tab" id="tab-family" data-q="family" aria-selected="false" aria-controls="walk-panel" tabIndex={-1}>Family law</button>
      </div>
      <div id="walk-panel" role="tabpanel" aria-labelledby="tab-estate" tabIndex={0}>
      <p className="walk__q" id="walk-q">“Who can help my blended family create an estate plan in Dallas?”</p>
      <ul className="walk__tiles">
      <li className="walk__tile"><span className="walk__logo"><img src="/assets/img/ai-visibility/chatgpt.svg" alt="" width="34" height="34" /></span><span>ChatGPT</span></li>
      <li className="walk__tile"><span className="walk__logo"><img src="/assets/img/ai-visibility/gemini.svg" alt="" width="34" height="34" /></span><span>Gemini</span></li>
      <li className="walk__tile"><span className="walk__logo"><img src="/assets/img/ai-visibility/claude.svg" alt="" width="34" height="34" /></span><span>Claude</span></li>
      <li className="walk__tile"><span className="walk__logo"><img src="/assets/img/ai-visibility/perplexity.svg" alt="" width="34" height="34" /></span><span>Perplexity</span></li>
      </ul>
      <svg className="walk__lines" viewBox="0 0 400 44" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M50 0 V12 Q50 22 60 22 H190 Q200 22 200 32 V44" vectorEffect="non-scaling-stroke"></path>
      <path d="M150 0 V12 Q150 22 160 22 H190 Q200 22 200 32" vectorEffect="non-scaling-stroke"></path>
      <path d="M250 0 V12 Q250 22 240 22 H210 Q200 22 200 32" vectorEffect="non-scaling-stroke"></path>
      <path d="M350 0 V12 Q350 22 340 22 H210 Q200 22 200 32" vectorEffect="non-scaling-stroke"></path>
      </svg>
      <span className="walk__node" aria-hidden="true"></span>
      <div className="walk__list">
      <div className="walk__list-head">
      <span className="walk__spark" aria-hidden="true"></span>
      <span className="walk__list-title">An AI shortlist</span>
      <span className="walk__list-tag">Illustration</span>
      </div>
      <ol className="walk__rows">
      <li className="walk__row"><span className="walk__badge" aria-hidden="true">A</span><div><p className="walk__firm">Example Firm A</p><p className="walk__sub">One firm a buyer could consider</p></div></li>
      <li className="walk__row"><span className="walk__badge" aria-hidden="true">B</span><div><p className="walk__firm">Example Firm B</p><p className="walk__sub">Another name in the answer</p></div></li>
      <li className="walk__row walk__row--you"><span className="walk__badge walk__badge--you" aria-hidden="true">?</span><div><p className="walk__firm">Will your firm be here?</p><p className="walk__sub">Your scan starts with this question.</p></div><svg className="walk__arrow" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M3 21 L21 3 M9 3 H21 V15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></li>
      </ol>
      </div>
      </div>
      <div className="walk__foot">
      <span className="walk__flow">Question → AI answer → shortlist</span>
      <button className="walk__replay" type="button" id="walk-replay">Replay walkthrough <span aria-hidden="true">↻</span></button>
      </div>
      <p className="walk__note">Fictional examples, not live AI output. Your scan reviews your practice and market.</p>
      </div>
      </div>
      </section>
      </div>
      <section className="section container" id="checks" aria-labelledby="checks-title">
      <div className="scan-head" data-reveal>
      <p className="acs-eyebrow">What the scan checks</p>
      <h2 id="checks-title">Four things, for <em>each question we ask.</em></h2>
      </div>
      <div className="grid grid-4 gap-md scan-checks">
      <article className="card" data-reveal><span className="scan-n" aria-hidden="true">01</span><h3 className="h3-sm">Are you named?</h3><p className="body-sm">For each question, on each assistant, and how often across repeat runs.</p></article>
      <article className="card" data-reveal><span className="scan-n" aria-hidden="true">02</span><h3 className="h3-sm">Is the description right?</h3><p className="body-sm">Practice areas, location, languages and contact details as the assistant states them.</p></article>
      <article className="card" data-reveal><span className="scan-n" aria-hidden="true">03</span><h3 className="h3-sm">Who's named instead?</h3><p className="body-sm">The firms that appear in your place, and what they have that you don't.</p></article>
      <article className="card" data-reveal><span className="scan-n" aria-hidden="true">04</span><h3 className="h3-sm">Which sources are cited?</h3><p className="body-sm">Directories, review sites and pages the answers draw on.</p></article>
      </div>
      </section>
      <section className="section scan-formsec" id="scan-form" aria-labelledby="form-title">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container scan-formwrap">
      <div className="scan-head" data-reveal>
      <p className="acs-eyebrow">Free for law firms</p>
      <h2 id="form-title">Book your <em>free scan</em></h2>
      <p className="acs-lead">Book a call and we will come back with the questions we plan to ask.</p>
      </div>
      <div className="scan-form acs-card acs-card--lg" data-reveal="pop">
      <Auditor pose="thumbs" facing="left" className="scan-form__auditor" />
      <p className="scan-form__lead">The scan is free for law firms. Book a call and we will agree the questions to ask, run them on four assistants, and send you the results.</p>
      <p className="small scan-form__note">We only use your firm details to run your scan and send you the results. No client data, please.</p>
      <Cta size="lg">Book a call</Cta>
      </div>
      </div>
      </section>
      <section className="section container" id="next" aria-labelledby="next-title">
      <div className="scan-head" data-reveal>
      <p className="acs-eyebrow">What happens next</p>
      <h2 id="next-title">From request to <em>fix list.</em></h2>
      </div>
      <ol className="scan-steps">
      <li className="card" data-reveal><span className="scan-n" aria-hidden="true">01</span><h3 className="h3-sm">We agree the questions</h3><p className="body-sm">Real buying questions for your practice areas and city, agreed with you.</p></li>
      <li className="card" data-reveal><span className="scan-n" aria-hidden="true">02</span><h3 className="h3-sm">We run them on four assistants</h3><p className="body-sm">ChatGPT, Gemini, Claude and Perplexity answer each one.</p></li>
      <li className="card" data-reveal><span className="scan-n" aria-hidden="true">03</span><h3 className="h3-sm">You get a short report and a fix list</h3><p className="body-sm">What each assistant said about you, and what to correct first.</p></li>
      </ol>
      <p className="scan-wont" data-reveal><strong>What we won't promise.</strong> No guaranteed mentions, citations or rankings. AI assistants change their answers.</p>
      </section>
      <section className="container qa" aria-labelledby="qa-title">
      <h2 id="qa-title">Questions about the free AI Visibility Scan</h2>
      <details><summary>What does the free AI Visibility Scan check?</summary><p>For each question we ask, whether you are named on each assistant and how often across repeat runs, whether the description of your firm is right, who is named instead, and which sources are cited.</p></details>
      <details><summary>Which AI assistants do you use?</summary><p>ChatGPT, Gemini, Claude and Perplexity.</p></details>
      <details><summary>What happens after I request a scan?</summary><p>We agree the questions with you, run them on four assistants, and send a short report with a fix list covering what each assistant said about you and what to correct first.</p></details>
      <details><summary>Do I need to send client data?</summary><p>No. We only use your firm details to run the scan and send you the results. Please send no client data.</p></details>
      </section>
      </main>
      <ScanWalk />
    </PageShell>
  );
}
