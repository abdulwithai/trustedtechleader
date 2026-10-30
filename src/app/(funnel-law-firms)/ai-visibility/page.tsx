import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Cta from '@/components/brand/Cta';
import Auditor from '@/components/brand/Auditor';
import VisibilityBehavior from '@/components/behaviors/VisibilityBehavior';
import '@/styles/pages/visibility.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "AI visibility diagnostic for law firms | Trusted Tech Leader"
  },
  "description": "We find out what ChatGPT, Gemini, Claude and Perplexity say when someone asks for a firm like yours, and what to fix so the answer includes you.",
  "alternates": {
    "canonical": "/ai-visibility/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "AI visibility diagnostic for law firms | Trusted Tech Leader",
    "description": "We find out what ChatGPT, Gemini, Claude and Perplexity say when someone asks for a firm like yours, and what to fix so the answer includes you.",
    "url": "https://trustedtechleader.com/ai-visibility/",
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
    "title": "AI visibility diagnostic for law firms | Trusted Tech Leader",
    "description": "We find out what ChatGPT, Gemini, Claude and Perplexity say when someone asks for a firm like yours, and what to fix so the answer includes you.",
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
    <PageShell funnel="law-firms" pageClass="page-visibility" current="/ai-visibility/" crumb="AI visibility" footerNote={<>ChatGPT, Gemini, Claude and Perplexity are trademarks of their owners; no affiliation implied. Not legal advice.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/ai-visibility/#webpage\",\"url\":\"https://trustedtechleader.com/ai-visibility/\",\"name\":\"AI visibility diagnostic for law firms | Trusted Tech Leader\",\"description\":\"We find out what ChatGPT, Gemini, Claude and Perplexity say when someone asks for a firm like yours, and what to fix so the answer includes you.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AI visibility diagnostic for law firms\",\"item\":\"https://trustedtechleader.com/ai-visibility/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"What is an AI visibility diagnostic?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"We ask real buying questions for your practice areas and city on ChatGPT, Gemini, Claude and Perplexity, then record whether your firm is named, how it is described, which firms appear instead, and which sources the answers cite.\"}},{\"@type\":\"Question\",\"name\":\"Why would a law firm need to know what AI assistants say?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"People now ask full questions and an assistant answers with a few names instead of a page of links. There is no ranking report for AI answers, so unless someone asks the questions you cannot know whether you are named, missing or described wrongly.\"}},{\"@type\":\"Question\",\"name\":\"What do I receive?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A report you can read in one sitting: the full question grid by assistant, every wrong detail with where it came from, the firms named in your place, and an ordered fix list that is yours to keep.\"}},{\"@type\":\"Question\",\"name\":\"Do you guarantee that AI assistants will mention my firm?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. AI answers change from run to run. We report what we saw and never promise mentions, citations or rankings.\"}}]}" }} />
      <main id="main">
      <section className="vis-hero" aria-labelledby="hero-title">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container vis-hero__inner">
      <div className="vis-hero__copy">
      <p className="acs-eyebrow">AI visibility diagnostic for law firms</p>
      <h1 id="hero-title">Your next client may ask an AI <em>before they ask Google.</em></h1>
      <p className="acs-lead vis-hero__lead">We find out what ChatGPT, Gemini, Claude and Perplexity say when someone asks for a firm like yours, and what to fix so the answer includes you.</p>
      <div className="vis-hero__btns">
      <Cta size="lg">Book a call</Cta>
      <Cta variant="ghost" size="lg" href="#sample-grid">See a sample grid</Cta>
      <Cta variant="ghost" size="lg" href="#how-it-works">How it works</Cta>
      </div>
      <div className="checked-on">
      <span className="checked-on__label">Checked on</span>
      <ul className="checked-on__list">
      <li title="ChatGPT"><img src="/assets/img/ai-visibility/chatgpt.svg" alt="ChatGPT" width="20" height="20" /></li>
      <li title="Gemini"><img src="/assets/img/ai-visibility/gemini.svg" alt="Gemini" width="20" height="20" /></li>
      <li title="Claude"><img src="/assets/img/ai-visibility/claude.svg" alt="Claude" width="20" height="20" /></li>
      <li title="Perplexity"><img src="/assets/img/ai-visibility/perplexity.svg" alt="Perplexity" width="20" height="20" /></li>
      </ul>
      </div>
      </div>
      <figure className="hero-art" aria-label="Illustrative AI answer">
      <Auditor pose="point" facing="left" className="hero-art__auditor" />
      <div className="hero-art__stage">
      <div className="hero-art__back" aria-hidden="true"><span>Run 3 of 3 · Perplexity</span></div>
      <div className="ai-card">
      <div className="ai-card__tabs">
      <span className="ai-tab is-on"><img src="/assets/img/ai-visibility/chatgpt.svg" alt="" width="14" height="14" />ChatGPT</span>
      <span className="ai-tab"><img src="/assets/img/ai-visibility/gemini.svg" alt="" width="14" height="14" />Gemini</span>
      <span className="ai-tab"><img src="/assets/img/ai-visibility/claude.svg" alt="" width="14" height="14" />Claude</span>
      <span className="ai-tab"><img src="/assets/img/ai-visibility/perplexity.svg" alt="" width="14" height="14" />Perplexity</span>
      </div>
      <div className="ai-card__ask"><p>Who's a good immigration lawyer in Houston for a spouse green card?</p></div>
      <div className="ai-card__answer">
      <p className="ai-card__intro">A few firms people often mention:</p>
      <ol className="ai-rows">
      <li className="ai-row">
      <span className="ai-row__n">1</span>
      <div><div className="ai-row__name">Example Firm A</div><div className="ai-row__meta">Family-based immigration, Spanish-speaking</div></div>
      <span className="ai-flag ai-flag--named">Named</span>
      </li>
      <li className="ai-row">
      <span className="ai-row__n">2</span>
      <div><div className="ai-row__name">Example Firm B</div><div className="ai-row__meta"><mark>Office on Westheimer Rd</mark>, free first consult</div></div>
      <span className="ai-flag ai-flag--old">Old address</span>
      </li>
      <li className="ai-row ai-row--you">
      <span className="ai-row__n">3</span>
      <div><div className="ai-row__name">Your firm?</div><div className="ai-row__meta">Not named in this answer</div></div>
      <span className="ai-flag ai-flag--missing">Missing</span>
      </li>
      </ol>
      </div>
      </div>
      </div>
      <figcaption className="hero-art__note">Illustrative example. Fictional firms, not live AI output.</figcaption>
      </figure>
      </div>
      </section>
      <section className="vgrid acs-night" id="sample-grid" aria-labelledby="grid-title">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="acs-stars" aria-hidden="true"></div>
      <div className="container vgrid__inner">
      <div className="vgrid__head" data-reveal>
      <p className="acs-eyebrow">Sample grid</p>
      <p className="vgrid__lead">Pick a practice area. Every cell is one question asked on one assistant.</p>
      </div>
      <div className="vgrid-card" data-reveal="pop">
      <div className="vgrid-head">
      <div className="vgrid-head__left">
      <h2 className="vgrid-title" id="grid-title">Question grid</h2>
      <div className="vgrid-tabs" role="tablist" aria-label="Practice area">
      <button className="chip" type="button" role="tab" id="tab-est" data-practice="est" aria-selected="true" aria-controls="grid-panel">Estate planning</button>
      <button className="chip" type="button" role="tab" id="tab-pi" data-practice="pi" aria-selected="false" aria-controls="grid-panel" tabIndex={-1}>Personal injury</button>
      <button className="chip" type="button" role="tab" id="tab-imm" data-practice="imm" aria-selected="false" aria-controls="grid-panel" tabIndex={-1}>Immigration</button>
      </div>
      </div>
      <span className="vgrid-label">Illustrative, not live AI output</span>
      </div>
      <div className="vgrid-scrollwrap" id="grid-wrap">
      <div className="scroll-x vgrid-scroll" id="grid-panel" role="tabpanel" aria-labelledby="tab-est" tabIndex={0}>
      <table className="vgrid-table">
      <caption className="visually-hidden">Question grid: Estate planning. Whether each assistant names the firm for each buying question.</caption>
      <thead>
      <tr>
      <th scope="col" className="vgrid-q-head">Buying question</th>
      <th scope="col"><span className="as-name"><img src="/assets/img/ai-visibility/chatgpt.svg" alt="" width="14" height="14" />ChatGPT</span></th>
      <th scope="col"><span className="as-name"><img src="/assets/img/ai-visibility/gemini.svg" alt="" width="14" height="14" />Gemini</span></th>
      <th scope="col"><span className="as-name"><img src="/assets/img/ai-visibility/claude.svg" alt="" width="14" height="14" />Claude</span></th>
      <th scope="col"><span className="as-name"><img src="/assets/img/ai-visibility/perplexity.svg" alt="" width="14" height="14" />Perplexity</span></th>
      </tr>
      </thead>
      <tbody id="grid-body">
      <tr><th scope="row">“Best estate planning lawyer near me for a blended family”</th><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--w"><i className="sw" aria-hidden="true"></i>Wrong details</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td></tr>
      <tr><th scope="row">“Who can set up a living trust in Austin?”</th><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td></tr>
      <tr><th scope="row">“Affordable will and power of attorney attorney”</th><td><span className="cell cell--w"><i className="sw" aria-hidden="true"></i>Wrong details</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td></tr>
      <tr><th scope="row">“Estate lawyer who speaks Spanish in Houston”</th><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td></tr>
      <tr><th scope="row">“Do I need a lawyer for probate in Texas?”</th><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--x"><i className="sw" aria-hidden="true"></i>Not named</span></td><td><span className="cell cell--n"><i className="sw" aria-hidden="true"></i>Named</span></td><td><span className="cell cell--w"><i className="sw" aria-hidden="true"></i>Wrong details</span></td></tr>
      </tbody>
      </table>
      </div>
      </div>
      <div className="vgrid-foot">
      <ul className="vgrid-legend">
      <li><i className="sw sw--n" aria-hidden="true"></i>Named</li>
      <li><i className="sw sw--w" aria-hidden="true"></i>Named, details wrong</li>
      <li><i className="sw sw--x" aria-hidden="true"></i>Not named</li>
      </ul>
      <span className="vgrid-summary" id="grid-summary" aria-live="polite">Example: named in 10 of 20 answers</span>
      </div>
      </div>
      </div>
      </section>
      <section className="section why-sec" id="why-it-matters" aria-labelledby="why-title">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container grid grid-split why">
      <div>
      <p className="acs-eyebrow">Why you need this</p>
      <h2 id="why-title">The shortlist is being written <em>without you.</em></h2>
      </div>
      <ol className="why-list">
      <li className="why-item" data-reveal><span className="why-item__n">01</span><div><h3 className="h3">People ask full questions now.</h3><p className="why-item__body">“Who can help my family with a green card in Houston?” An assistant answers with a few names, not a page of links.</p></div></li>
      <li className="why-item" data-reveal><span className="why-item__n">02</span><div><h3 className="h3">You can't see the answer from your desk.</h3><p className="why-item__body">There is no ranking report for AI answers. Unless someone asks the questions, you don't know if you're named, missing or described wrongly.</p></div></li>
      <li className="why-item" data-reveal><span className="why-item__n">03</span><div><h3 className="h3">Wrong details cost calls.</h3><p className="why-item__body">An old address, a practice area you dropped, a language you don't offer: assistants repeat what they find on directories and reviews.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="how" id="how-it-works" aria-labelledby="how-title">
      <div className="acs-glow" aria-hidden="true"></div>
      <div className="container">
      <div className="how__head">
      <div>
      <p className="acs-eyebrow">How it works</p>
      <h2 id="how-title" className="how__title">How an AI answer gets made, and <em>where we step in.</em></h2>
      </div>
      <p className="how__aside">Assistants don't invent firms. They read what's published about you. We fix what they read.</p>
      </div>
      <div className="flow" role="group" aria-label="Diagram: how an AI answer gets made, and where we step in">
      <p className="flow-label flow-label--today">What happens today</p>
      <div className="flow-node flow-client">
      <p className="flow-node__tag">01 · Client</p>
      <p className="flow-quote">“Spouse green card lawyer in Houston who speaks Spanish?”</p>
      </div>
      <div className="flow-arr flow-arr--h flow-arr--a1"><span className="flow-arr__label">asks</span><span className="flow-line" aria-hidden="true"></span></div>
      <div className="flow-node flow-assistant">
      <p className="flow-node__tag">02 · AI assistant</p>
      <ul className="flow-assistants">
      <li><img src="/assets/img/ai-visibility/chatgpt.svg" alt="" width="16" height="16" />ChatGPT</li>
      <li><img src="/assets/img/ai-visibility/gemini.svg" alt="" width="16" height="16" />Gemini</li>
      <li><img src="/assets/img/ai-visibility/claude.svg" alt="" width="16" height="16" />Claude</li>
      <li><img src="/assets/img/ai-visibility/perplexity.svg" alt="" width="16" height="16" />Perplexity</li>
      </ul>
      <p className="flow-node__note">Same question, different answers</p>
      </div>
      <div className="flow-arr flow-arr--h flow-arr--a2"><span className="flow-arr__label">replies</span><span className="flow-line" aria-hidden="true"></span></div>
      <div className="flow-node flow-answer">
      <p className="flow-node__tag">03 · The answer</p>
      <ul className="flow-answer__list">
      <li><span>Example Firm A</span><i className="sw sw--n" aria-hidden="true"></i></li>
      <li><span>Example Firm B</span><i className="sw sw--w" aria-hidden="true"></i></li>
      <li className="is-missing"><span>Your firm</span><span>not named</span></li>
      </ul>
      </div>
      <div className="flow-arr flow-arr--m flow-arr--a3" aria-hidden="true"><span className="flow-line"></span></div>
      <div className="flow-arr flow-arr--up flow-arr--a4" aria-hidden="true"><span className="flow-arr__label">reads from</span><span className="flow-line"></span></div>
      <div className="flow-node flow-sources">
      <p className="flow-node__tag">Sources assistants read</p>
      <ul className="flow-chips">
      <li>Google Business Profile</li>
      <li>Legal directories</li>
      <li className="is-wrong">Old listing · wrong address</li>
      <li>Client reviews</li>
      <li>Your website</li>
      <li>Local news</li>
      </ul>
      </div>
      <div className="flow-arr flow-arr--h flow-arr--blue flow-arr--a5"><span className="flow-arr__label">we record</span><span className="flow-line" aria-hidden="true"></span></div>
      <div className="flow-do">
      <p className="flow-label flow-label--do">What we do</p>
      <div className="flow-node flow-diag">
      <p className="flow-node__tag">04 · Diagnostic</p>
      <ul className="flow-checks">
      <li>Named or not</li>
      <li>Details right or wrong</li>
      <li>Who's named instead</li>
      <li>Sources cited</li>
      </ul>
      </div>
      <div className="flow-arr flow-arr--blue flow-arr--down" aria-hidden="true"><span className="flow-line"></span></div>
      <div className="flow-node flow-fix">
      <p className="flow-node__tag">05 · Fix list</p>
      <ol className="flow-fixes">
      <li><b>1</b>Correct the old listing</li>
      <li><b>2</b>Add a Spanish-language page</li>
      <li><b>3</b>Ask recent clients for reviews</li>
      </ol>
      <p className="flow-fix__note">Re-run monthly to track change</p>
      </div>
      </div>
      <div className="flow-arr flow-arr--hl flow-arr--blue flow-arr--a6"><span className="flow-arr__label">fixes update what assistants read</span><span className="flow-line" aria-hidden="true"></span></div>
      </div>
      <p className="flow-foot">Simplified diagram. Fictional firms; assistants weigh sources differently.</p>
      </div>
      </section>
      <section className="do-wrap" id="what-we-do" aria-labelledby="do-title">
      <div className="do-band">
      <div className="container">
      <div className="do-head">
      <div>
      <p className="acs-eyebrow">What we do</p>
      <h2 id="do-title">Ask. Record. <em>Fix.</em></h2>
      </div>
      <p className="do-head__aside">One fixed-fee diagnostic, then optional monthly work on the fix list.</p>
      </div>
      <div className="do-steps">
      <article className="do-step" data-reveal>
      <p className="do-step__tag">01 · Ask</p>
      <h3 className="h3 do-step__title">Your clients' questions</h3>
      <p className="do-step__body">Real buying questions for your practice areas and city, agreed with you, asked on four assistants and repeated.</p>
      </article>
      <article className="do-step" data-reveal>
      <p className="do-step__tag">02 · Record</p>
      <h3 className="h3 do-step__title">What they say about you</h3>
      <p className="do-step__body">Whether you're named, how you're described, which firms appear instead, and the sources behind each answer.</p>
      </article>
      <article className="do-step do-step--fix" data-reveal>
      <p className="do-step__tag">03 · Fix</p>
      <h3 className="h3 do-step__title">A plan, in order</h3>
      <p className="do-step__body">Profiles, directories, reviews and site pages to correct first, ordered by effort. You approve every change.</p>
      </article>
      </div>
      </div>
      </div>
      </section>
      <section className="section report" id="the-report" aria-labelledby="report-title">
      <div className="container grid grid-2 report__inner">
      <div className="report-art" data-reveal="pop" role="img" aria-label="Sample report pages for a fictional firm">
      <div className="report-sheet report-sheet--back"></div>
      <div className="report-sheet report-sheet--front">
      <div className="rs-top"><span>Trusted Tech Leader</span><span>Example Firm · Houston</span></div>
      <div className="rs-title">AI visibility diagnostic</div>
      <div className="rs-sub">Immigration · 4 assistants · repeat runs</div>
      <div className="rs-grid">
      <span>Spouse green card lawyer</span><i className="sw sw--n"></i><i className="sw sw--x"></i><i className="sw sw--w"></i><i className="sw sw--n"></i>
      <span>Asylum help in Houston</span><i className="sw sw--x"></i><i className="sw sw--x"></i><i className="sw sw--n"></i><i className="sw sw--x"></i>
      <span>Urdu-speaking attorney</span><i className="sw sw--n"></i><i className="sw sw--n"></i><i className="sw sw--x"></i><i className="sw sw--w"></i>
      <span>Work permit renewal</span><i className="sw sw--x"></i><i className="sw sw--w"></i><i className="sw sw--x"></i><i className="sw sw--x"></i>
      </div>
      <div className="rs-fixhead">Fix list</div>
      <ol className="rs-fixes">
      <li><b>1</b>Correct office address on three directories</li>
      <li><b>2</b>Add asylum page with city and languages</li>
      <li><b>3</b>Ask recent clients for Google reviews</li>
      </ol>
      </div>
      <p className="report-art__note">Sample pages, fictional firm</p>
      </div>
      <div>
      <p className="acs-eyebrow">What you receive</p>
      <h2 id="report-title" className="report__title">A report you can read <em>in one sitting.</em></h2>
      <ul className="dash-list">
      <li>The full question grid, assistant by assistant</li>
      <li>Every wrong detail, with where it came from</li>
      <li>The firms named in your place</li>
      <li>An ordered fix list, yours to keep</li>
      </ul>
      <p className="small report__note">AI answers change run to run. We report what we saw and never promise mentions or rankings.</p>
      </div>
      </div>
      </section>
      <section className="container qa" aria-labelledby="qa-title">
      <h2 id="qa-title">Questions about the AI visibility diagnostic</h2>
      <details><summary>What is an AI visibility diagnostic?</summary><p>We ask real buying questions for your practice areas and city on ChatGPT, Gemini, Claude and Perplexity, then record whether your firm is named, how it is described, which firms appear instead, and which sources the answers cite.</p></details>
      <details><summary>Why would a law firm need to know what AI assistants say?</summary><p>People now ask full questions and an assistant answers with a few names instead of a page of links. There is no ranking report for AI answers, so unless someone asks the questions you cannot know whether you are named, missing or described wrongly.</p></details>
      <details><summary>What do I receive?</summary><p>A report you can read in one sitting: the full question grid by assistant, every wrong detail with where it came from, the firms named in your place, and an ordered fix list that is yours to keep.</p></details>
      <details><summary>Do you guarantee that AI assistants will mention my firm?</summary><p>No. AI answers change from run to run. We report what we saw and never promise mentions, citations or rankings.</p></details>
      </section>
      <section className="closing" aria-labelledby="closing-title">
      <div className="closing__band acs-card acs-card--lg" data-reveal="pop">
      <Auditor pose="thumbs" facing="left" className="closing__auditor" />
      <div className="closing__copy">
      <p className="acs-eyebrow">Next step</p>
      <h2 id="closing-title" className="closing__title">Find out what AI assistants tell <em>your next client.</em></h2>
      </div>
      <Cta size="lg">Book a call</Cta>
      </div>
      </section>
      </main>
      <VisibilityBehavior />
    </PageShell>
  );
}
