import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Open-source screen recorder platform | Trusted Tech Leader"
  },
  "description": "A Chrome extension records screen, tab or webcam and uploads to an API that uses storage the owner chooses; a web app handles library and sharing.",
  "alternates": {
    "canonical": "/case-studies/self-hosted-screen-recorder-extension/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Open-source screen recorder platform | Trusted Tech Leader",
    "description": "A Chrome extension records screen, tab or webcam and uploads to an API that uses storage the owner chooses; a web app handles library and sharing.",
    "url": "https://trustedtechleader.com/case-studies/self-hosted-screen-recorder-extension/",
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
    "title": "Open-source screen recorder platform | Trusted Tech Leader",
    "description": "A Chrome extension records screen, tab or webcam and uploads to an API that uses storage the owner chooses; a web app handles library and sharing.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Open-source screen recorder and async video platform with bring-your-own storage\",\"description\":\"A Chrome extension records screen, tab or webcam and uploads to an API that uses storage the owner chooses; a web app handles library and sharing.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"SaaS platforms\",\"url\":\"https://trustedtechleader.com/case-studies/self-hosted-screen-recorder-extension/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/self-hosted-screen-recorder-extension/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Open-source screen recorder and async video platform with bring-your-own storage\",\"item\":\"https://trustedtechleader.com/case-studies/self-hosted-screen-recorder-extension/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Open-source screen recorder and async video platform with bring-your-own storage</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="saas-platforms">Case study · SaaS platforms</p>
      <h1 id="cs-title" className="h1-md">Open-source screen recorder and async video platform with bring-your-own storage</h1>
      <p className="lead">A Chrome extension records screen, tab or webcam and uploads to an API that uses storage the owner chooses; a web app handles library and sharing.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Productivity and video communication</dd></div>
      <div><dt>Category</dt><dd>SaaS platforms</dd></div>
      <div><dt>Maturity</dt><dd>MIT-licensed open-core repository; teams and tiered plans are built in; an extension, a web app and an API with a test suite; region recording is documented as deferred</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Individuals and teams who want an open-source alternative to hosted screen-recording tools, with the option to keep recordings in their own storage.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Chrome Manifest V3, Next.js, FastAPI, PostgreSQL</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A screen recorder and async video platform where the owner can bring their own storage, where listing and managing recordings need sign-in, viewing needs a short-lived signed playback session, and share links follow each recording's settings.</dd></div>
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
      <p>The small panel in the browser toolbar before and after a recording, and the web library where recordings are kept.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative recorder panel and video library: choose what to record, get a link when it ends, and browse saved recordings">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Recorder extension and library</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Recorder</span></span><span><span className="m-pill m-pill--info">Before you record</span></span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Before you record: choose what to capture</span>
      <div className="m-grid m-grid--tiles">
      <div className="m-thumb m-thumb--tile">This Tab<br />Record current tab</div>
      <div className="m-thumb m-thumb--tile">Full Screen<br />Record entire screen</div>
      <div className="m-thumb m-thumb--tile">Region<br />Coming soon</div>
      <div className="m-thumb m-thumb--tile">Webcam Only<br />Record webcam only</div>
      </div>
      <div className="m-row"><span>Microphone</span><span className="m-pill m-pill--ok">On</span></div>
      <div className="m-row"><span>Drawing tools</span><span className="m-pill m-pill--info">Optional</span></div>
      </div>
      <div className="m-card m-card--accent">
      <span className="m-title">After you stop: the same panel afterwards</span>
      <div className="m-row"><span>Recording uploaded</span><span className="m-pill m-pill--ok">Done</span></div>
      <div className="m-input m-card__title">A share link to the recording</div>
      <div className="m-actions"><span className="m-btn m-btn--ghost">Copy link</span><span className="m-btn">View recording</span></div>
      <div className="m-row"><span>Want another take?</span><span className="m-pill m-pill--info">Record another</span></div>
      </div>
      </div>
      <div className="m-card">
      <span className="m-title">Your video library in the web app (sign-in required)</span>
      <div className="m-grid m-grid--tiles">
      <div className="m-thumb m-thumb--wide">Product walkthrough</div>
      <div className="m-thumb m-thumb--wide">Bug report for the team</div>
      <div className="m-thumb m-thumb--wide">Weekly update</div>
      <div className="m-thumb m-thumb--wide">Untitled</div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data; region recording is not built yet. Listing and managing recordings needs a signed-in account, and playback uses short-lived signed sessions.</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From one click to a recording link</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-paper" cx="24" cy="64" r="10"></circle><path className="s-fill" d="M8 100 a16 16 0 0 1 32 0 Z"></path><path className="s-stroke" d="M8 100 a16 16 0 0 1 32 0"></path><rect className="s-paper" x="52" y="18" width="98" height="80" rx="5"></rect><path className="s-stroke" d="M52 32 H150"></path><circle className="s-blue s-pulse" cx="138" cy="25" r="3.5"></circle><rect className="s-fill" x="76" y="38" width="68" height="54" rx="4"></rect><rect className="s-paper" x="82" y="44" width="26" height="18" rx="3"></rect><rect className="s-paper" x="112" y="44" width="26" height="18" rx="3"></rect><rect className="s-paper" x="82" y="68" width="26" height="18" rx="3"></rect><rect className="s-paper" x="112" y="68" width="26" height="18" rx="3"></rect></svg></div>
      <h3>Sam picks what to record</h3>
      <p>He clicks the extension in his browser and chooses this tab, the whole screen or just the webcam.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-solid" x="14" y="50" width="10" height="18" rx="5"></rect><path className="s-stroke" d="M10 62 a9 9 0 0 0 18 0 M19 71 V84"></path><rect className="s-paper" x="40" y="22" width="106" height="62" rx="5"></rect><path className="s-stroke" d="M93 84 V98 M72 98 H114"></path><rect className="s-fill" x="50" y="32" width="62" height="44" rx="3"></rect><circle className="s-amber s-pulse" cx="132" cy="33" r="5"></circle><circle className="s-paper" cx="124" cy="68" r="13"></circle><circle className="s-blue" cx="124" cy="64" r="4"></circle><path className="s-stroke" d="M117 76 a8 6 0 0 1 14 0"></path></svg></div>
      <h3>He talks while it records</h3>
      <p>The microphone is on, and a small camera bubble can sit on screen while he shows his work. Drawing tools are available on the page.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper s-move" x="18" y="50" width="30" height="38" rx="3"></rect><path className="s-solid" d="M28 62 l12 7 l-12 7 z"></path><path className="s-stroke" d="M54 70 H76 M70 64 l6 6 l-6 6"></path><path className="s-paper" d="M92 78 a14 14 0 0 1 2 -26 a20 20 0 0 1 38 4 a12 12 0 0 1 4 22 Z"></path><rect className="s-solid" x="104" y="84" width="22" height="16" rx="3"></rect><path className="s-stroke" d="M109 84 v-5 a6 6 0 0 1 12 0 v5"></path><circle className="s-amber" cx="115" cy="92" r="2.5"></circle></svg></div>
      <h3>Stopping uploads it to his account</h3>
      <p>The video is sent to his account and stored in his own bucket if he has connected one, otherwise in managed storage.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="22" y="42" width="116" height="26" rx="13"></rect><rect className="s-stroke" x="34" y="50" width="16" height="10" rx="5"></rect><rect className="s-stroke" x="44" y="50" width="16" height="10" rx="5"></rect><rect className="s-fill" x="68" y="52" width="58" height="6" rx="3"></rect><rect className="s-solid" x="26" y="80" width="44" height="18" rx="9"></rect><rect className="s-paper" x="36" y="84" width="10" height="10" rx="2"></rect><path className="s-stroke" d="M52 89 h10"></path><circle className="s-blue s-pulse" cx="124" cy="88" r="11"></circle><path className="s-tick" d="M118 88 l4 4 l8 -9"></path></svg></div>
      <h3>A link to the recording is ready</h3>
      <p>When the upload finishes, he gets a share link and can open the recording in the web app, where he can trim it or set who may watch.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="52" y="22" width="26" height="20" rx="3"></rect><rect className="s-paper" x="84" y="22" width="26" height="20" rx="3"></rect><rect className="s-paper" x="116" y="22" width="26" height="20" rx="3"></rect><rect className="s-paper" x="52" y="48" width="26" height="20" rx="3"></rect><rect className="s-paper" x="84" y="48" width="26" height="20" rx="3"></rect><rect className="s-paper" x="116" y="48" width="26" height="20" rx="3"></rect><path className="s-solid" d="M60 27 l8 5 l-8 5 z M92 27 l8 5 l-8 5 z M124 27 l8 5 l-8 5 z M60 53 l8 5 l-8 5 z M92 53 l8 5 l-8 5 z M124 53 l8 5 l-8 5 z"></path></svg></div>
      <h3>Every recording lives in one library</h3>
      <p>All his videos sit in one library in the web app, which he can share with teammates.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Hosted screen-recording tools put every video on someone else's infrastructure. Teams that record walkthroughs, demos and bug reports often want to choose where the files live, including a bucket in a specific region for data-residency reasons.</p>
      <p>Browser extensions also face real platform limits. The browser's extension rules do not let a background script keep a recorder alive, capture APIs differ between screen and tab, and region capture has no native API.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A Chrome extension handles capture and recording and uploads as the signed-in user. The backend stores video through a pluggable storage provider (local disk by default for development, or common cloud storage and video services, including Google Drive; managed or bring-your-own) and keeps metadata in PostgreSQL.</p>
      <p>A Next.js web app provides the library, player, editor and sharing. Access is controlled: listing and managing recordings requires a signed-in account, streaming requires a short-lived signed playback session, and recording share links follow each recording's share settings, either anyone with the link or restricted to signed-in people it is shared with. The project is explicit about trade-offs: region recording is documented as deferred with a researched approach.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual">
      <p className="cs-visual__title">Recording lifecycle in the extension</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 320" role="img" aria-labelledby="rec-a-t rec-a-d">
      <title id="rec-a-t">Recording lifecycle in the extension</title>
      <desc id="rec-a-d">State diagram of the extension recording lifecycle. A recording moves from Idle to Preparing, then Recording, then Stopping, then Uploading, then Completed. Recording can move to Paused and back by pause and resume. Preparing, Recording, Stopping and Uploading can each move to Failed.</desc>
      <defs><marker id="mk-recorder-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-box v-box" x="20" y="110" width="116" height="54" rx="8"></rect><text className="v-text" x="78.0" y="134.0" textAnchor="middle">Idle</text><text className="v-sub" x="78.0" y="151.0" textAnchor="middle">ready to start</text><rect className="v-box v-box" x="168" y="110" width="116" height="54" rx="8"></rect><text className="v-text" x="226.0" y="134.0" textAnchor="middle">Preparing</text><text className="v-sub" x="226.0" y="151.0" textAnchor="middle">setting up capture</text><rect className="v-box v-box--accent" x="316" y="110" width="116" height="54" rx="8"></rect><text className="v-text" x="374.0" y="134.0" textAnchor="middle">Recording</text><text className="v-sub" x="374.0" y="151.0" textAnchor="middle">recorder running</text><rect className="v-box v-box" x="464" y="110" width="116" height="54" rx="8"></rect><text className="v-text" x="522.0" y="134.0" textAnchor="middle">Stopping</text><text className="v-sub" x="522.0" y="151.0" textAnchor="middle">recorder finishing</text><rect className="v-box v-box" x="612" y="110" width="116" height="54" rx="8"></rect><text className="v-text" x="670.0" y="134.0" textAnchor="middle">Uploading</text><text className="v-sub" x="670.0" y="151.0" textAnchor="middle">sent to the API</text><rect className="v-box v-box--dark" x="760" y="110" width="116" height="54" rx="8"></rect><text className="v-text v-text--light" x="818.0" y="134.0" textAnchor="middle">Completed</text><text className="v-sub v-sub--light" x="818.0" y="151.0" textAnchor="middle">recording saved</text><line className="v-line" x1="136" y1="137" x2="166" y2="137" markerEnd="url(#mk-recorder-a)"></line><line className="v-line" x1="284" y1="137" x2="314" y2="137" markerEnd="url(#mk-recorder-a)"></line><line className="v-line" x1="432" y1="137" x2="462" y2="137" markerEnd="url(#mk-recorder-a)"></line><line className="v-line" x1="580" y1="137" x2="610" y2="137" markerEnd="url(#mk-recorder-a)"></line><line className="v-line" x1="728" y1="137" x2="758" y2="137" markerEnd="url(#mk-recorder-a)"></line><rect className="v-box v-box--soft" x="316" y="18" width="116" height="48" rx="8"></rect><text className="v-text" x="374.0" y="39.0" textAnchor="middle">Paused</text><text className="v-sub" x="374.0" y="56.0" textAnchor="middle">recorder held</text><line className="v-line" x1="360.0" y1="110" x2="360.0" y2="68" markerEnd="url(#mk-recorder-a)"></line><line className="v-line" x1="388.0" y1="66" x2="388.0" y2="108" markerEnd="url(#mk-recorder-a)"></line><text className="v-sub" x="352.0" y="92" textAnchor="end">pause</text><text className="v-sub" x="396.0" y="92" textAnchor="start">resume</text><line className="v-line v-line--soft" x1="226.0" y1="164" x2="226.0" y2="214"></line><line className="v-line v-line--soft" x1="374.0" y1="164" x2="374.0" y2="214"></line><line className="v-line v-line--soft" x1="522.0" y1="164" x2="522.0" y2="214"></line><line className="v-line v-line--soft" x1="670.0" y1="164" x2="670.0" y2="214"></line><line className="v-line v-line--soft" x1="226.0" y1="214" x2="670.0" y2="214"></line><line className="v-line v-line--soft" x1="450" y1="214" x2="450" y2="250" markerEnd="url(#mk-recorder-a)"></line><rect className="v-box v-box--soft" x="320" y="252" width="260" height="50" rx="8"></rect><text className="v-text" x="450.0" y="274.0" textAnchor="middle">Failed</text><text className="v-sub" x="450.0" y="291.0" textAnchor="middle">error kept in the extension state</text><text className="v-label" x="450" y="200" textAnchor="middle">failure path</text>
      </svg>
      </div>
      <figcaption>The extension keeps one recording status at a time. The main path runs left to right; pausing is a loop on the Recording state, and any active step can fall through to Failed.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Screen, tab and webcam recording</h3><p>Capture with microphone audio and mute control.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Webcam overlay</h3><p>A floating camera bubble is shown during recording.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>On-page annotation</h3><p>A content script with a canvas library for drawing.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Authenticated API</h3><p>Upload, list and manage recordings require a signed-in account; streaming uses short-lived signed playback sessions and video tokens.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Web library and player</h3><p>A web app to browse, play and organise recordings.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Web editor</h3><p>Trim, crop and blur a recording in the browser.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Bring your own storage</h3><p>Keep recordings in your own bucket in the region you choose, or use managed storage.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Share controls</h3><p>Per-recording settings decide whether anyone with the link can watch or only signed-in people it is shared with.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">09</span><h3>Transcription, comments and reactions</h3><p>Transcripts on plans that include AI features, via an external speech-to-text service, plus comments and reactions from viewers.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">10</span><h3>Developer Mode</h3><p>Built into the extension code and backend: console and network capture attached to tab recordings. Not yet exposed in the extension UI.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">11</span><h3>Teams and tiers</h3><p>Multi-user accounts, teams and plan tiers with usage limits.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">12</span><h3>Permission onboarding</h3><p>A page that guides the user through the required capture permissions.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">13</span><h3>Environment-aware build</h3><p>Injects the backend URL, web app URL and version, and can output a store-ready zip.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">14</span><h3>Documented roadmap</h3><p>A feasibility write-up for region recording.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a browser capture to a shareable, streamable library on storage the owner chooses.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: Chrome extension, Offscreen recorder, FastAPI backend, Storage provider, PostgreSQL, Next.js web app">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Chrome extension</span><span className="cs-node__sub">popup, content, background</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Offscreen recorder</span><span className="cs-node__sub">MediaRecorder session</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">FastAPI backend</span><span className="cs-node__sub">auth, upload, playback, sharing</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Storage provider</span><span className="cs-node__sub">local, S3-compatible and others</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">PostgreSQL</span><span className="cs-node__sub">recording metadata</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Next.js web app</span><span className="cs-node__sub">library, player, editing, sharing</span></li>
      </ol>
      </div>
      <figcaption>The extension starts a recording in an offscreen document. The finished recording is uploaded to the FastAPI backend, which stores the video with a storage provider (local disk by default for development; S3-compatible storage including R2 and other providers, managed or bring-your-own) and keeps metadata in PostgreSQL. The Next.js web app handles the library, player, editing and sharing through the same API.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>The offscreen recorder hands a blob to the uploader, which posts it to the API with the user's bearer token.</li>
      <li>The web app lists recordings as a signed-in user and plays them through short-lived signed playback sessions.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Offscreen recording</h3><p>An offscreen document holds the recorder for the whole session because MV3 service workers are short-lived.</p></div></li>
      <li><div><h3>Typed messaging</h3><p>A message-typed protocol connects the popup, background, offscreen and content scripts.</p></div></li>
      <li><div><h3>Pluggable storage</h3><p>A storage factory picks a provider per account: local disk, S3-compatible storage, Google Drive, Firebase, Cloudinary, Mux or Bunny. Metadata lives in PostgreSQL with Alembic migrations.</p></div></li>
      <li><div><h3>Access control</h3><p>Listing and managing recordings needs a signed-in account (JWT). Streaming needs a short-lived signed playback session and signed video tokens. Recording share links follow each recording's share settings: anyone with the link, or restricted to signed-in people it is shared with.</p></div></li>
      <li><div><h3>Teams and tiers</h3><p>Roles, teams and tier limits (recording length, video count, managed storage) are defined in the backend configuration, with Stripe for billing.</p></div></li>
      <li><div><h3>Tests</h3><p>The backend has a tests folder covering areas such as playback sessions, storage, tiers and the video editor, and the web app has a Vitest setup. Tests exist; they have not been run for this write-up.</p></div></li>
      <li><div><h3>Store readiness</h3><p>Privacy and store listing documents are prepared for extension submission.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Client</dt>
      <dd><ul className="cs-chips"><li className="chip">Chrome Extension Manifest V3</li><li className="chip">Vanilla JavaScript</li><li className="chip">Fabric.js</li></ul></dd>
      </div>
      <div>
      <dt>Web app</dt>
      <dd><ul className="cs-chips"><li className="chip">Next.js 16</li><li className="chip">React 19</li><li className="chip">TypeScript</li><li className="chip">Tailwind 4</li></ul></dd>
      </div>
      <div>
      <dt>Editing and playback</dt>
      <dd><ul className="cs-chips"><li className="chip">TipTap</li><li className="chip">Excalidraw</li><li className="chip">hls.js</li></ul></dd>
      </div>
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">Python</li><li className="chip">FastAPI</li><li className="chip">SQLAlchemy 2</li><li className="chip">Alembic</li></ul></dd>
      </div>
      <div>
      <dt>Data and services</dt>
      <dd><ul className="cs-chips"><li className="chip">PostgreSQL</li><li className="chip">Stripe</li><li className="chip">JWT</li><li className="chip">boto3 / S3-compatible storage</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers, client to tooling</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 330" role="img" aria-labelledby="rec-b-t rec-b-d">
      <title id="rec-b-t">Technology layers, client to tooling</title>
      <desc id="rec-b-d">Layered diagram of the stack. Client: Chrome Extension Manifest V3, Vanilla JavaScript, Fabric.js. Web app: Next.js 16, React 19, TypeScript, Tailwind 4. Editing and playback: TipTap, Excalidraw, hls.js. Backend: Python, FastAPI, SQLAlchemy 2, Alembic. Data and services: PostgreSQL, Stripe, JWT, boto3 and S3-compatible storage.</desc>
      <defs><marker id="mk-recorder-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-lane" x="10" y="10" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="34" textAnchor="start">Client</text><text className="v-sub" x="26" y="51" textAnchor="start">runs in Chrome</text><rect className="v-box v-box--accent" x="215" y="21" width="229" height="32" rx="6"></rect><text className="v-text" x="329.5" y="42" textAnchor="middle">Chrome Extension Manifest V3</text><rect className="v-box v-box--accent" x="456" y="21" width="157" height="32" rx="6"></rect><text className="v-text" x="534.5" y="42" textAnchor="middle">Vanilla JavaScript</text><rect className="v-box v-box--accent" x="625" y="21" width="100" height="32" rx="6"></rect><text className="v-text" x="675" y="42" textAnchor="middle">Fabric.js</text><rect className="v-lane" x="10" y="74" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="98" textAnchor="start">Web app</text><text className="v-sub" x="26" y="115" textAnchor="start">library and player</text><rect className="v-box v-box" x="215" y="85" width="110" height="32" rx="6"></rect><text className="v-text" x="270" y="106" textAnchor="middle">Next.js 16</text><rect className="v-box v-box" x="337" y="85" width="100" height="32" rx="6"></rect><text className="v-text" x="387" y="106" textAnchor="middle">React 19</text><rect className="v-box v-box" x="449" y="85" width="110" height="32" rx="6"></rect><text className="v-text" x="504" y="106" textAnchor="middle">TypeScript</text><rect className="v-box v-box" x="571" y="85" width="115" height="32" rx="6"></rect><text className="v-text" x="628.5" y="106" textAnchor="middle">Tailwind 4</text><rect className="v-lane" x="10" y="138" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="162" textAnchor="start">Editing and playback</text><text className="v-sub" x="26" y="179" textAnchor="start">notes, whiteboards, video</text><rect className="v-box v-box" x="215" y="149" width="90" height="32" rx="6"></rect><text className="v-text" x="260" y="170" textAnchor="middle">TipTap</text><rect className="v-box v-box" x="317" y="149" width="120" height="32" rx="6"></rect><text className="v-text" x="377" y="170" textAnchor="middle">Excalidraw</text><rect className="v-box v-box" x="449" y="149" width="90" height="32" rx="6"></rect><text className="v-text" x="494" y="170" textAnchor="middle">hls.js</text><rect className="v-lane" x="10" y="202" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="226" textAnchor="start">Backend</text><text className="v-sub" x="26" y="243" textAnchor="start">API and migrations</text><rect className="v-box v-box" x="215" y="213" width="90" height="32" rx="6"></rect><text className="v-text" x="260" y="234" textAnchor="middle">Python</text><rect className="v-box v-box" x="317" y="213" width="100" height="32" rx="6"></rect><text className="v-text" x="367" y="234" textAnchor="middle">FastAPI</text><rect className="v-box v-box" x="429" y="213" width="140" height="32" rx="6"></rect><text className="v-text" x="499" y="234" textAnchor="middle">SQLAlchemy 2</text><rect className="v-box v-box" x="581" y="213" width="100" height="32" rx="6"></rect><text className="v-text" x="631" y="234" textAnchor="middle">Alembic</text><rect className="v-lane" x="10" y="266" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="290" textAnchor="start">Data and services</text><text className="v-sub" x="26" y="307" textAnchor="start">metadata, auth, billing, storage</text><rect className="v-box v-box--soft" x="215" y="277" width="120" height="32" rx="6"></rect><text className="v-text" x="275" y="298" textAnchor="middle">PostgreSQL</text><rect className="v-box v-box--soft" x="347" y="277" width="90" height="32" rx="6"></rect><text className="v-text" x="392" y="298" textAnchor="middle">Stripe</text><rect className="v-box v-box--soft" x="449" y="277" width="80" height="32" rx="6"></rect><text className="v-text" x="489" y="298" textAnchor="middle">JWT</text><rect className="v-box v-box--soft" x="541" y="277" width="190" height="32" rx="6"></rect><text className="v-text" x="636" y="298" textAnchor="middle">boto3 / S3-compatible</text>
      </svg>
      </div>
      <figcaption>Read from the top: the extension in the browser uploads to the FastAPI backend, which stores video with a storage provider and metadata in PostgreSQL. The Next.js web app, with its editing and playback libraries, reads the same API.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Lets the owner keep recordings in their own bucket, in a region they choose, or use managed storage.</li>
      <li>Brings recording, basic editing and sharing into one flow from capture to share link.</li>
      <li>Supports teams and plan tiers with usage limits, on an MIT-licensed open-core codebase.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/programmatic-seo-page-generation-saas/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Programmatic SEO page generation SaaS</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/multi-tenant-pharmacy-erp-pos/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Multi-tenant pharmacy ERP and POS</span></Link>
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
