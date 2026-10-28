import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "MCP server for AI video workflows | Trusted Tech Leader"
  },
  "description": "An MCP server that lets an AI assistant run a multi-channel video pipeline, from research to script, visuals and voiceover.",
  "alternates": {
    "canonical": "/case-studies/ai-video-content-workflow-mcp-server/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "MCP server for AI video workflows | Trusted Tech Leader",
    "description": "An MCP server that lets an AI assistant run a multi-channel video pipeline, from research to script, visuals and voiceover.",
    "url": "https://trustedtechleader.com/case-studies/ai-video-content-workflow-mcp-server/",
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
    "title": "MCP server for AI video workflows | Trusted Tech Leader",
    "description": "An MCP server that lets an AI assistant run a multi-channel video pipeline, from research to script, visuals and voiceover.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"MCP server for AI-assisted video content workflow\",\"description\":\"An MCP server that lets an AI assistant run a multi-channel video pipeline, from research to script, visuals and voiceover.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"AI & automation\",\"url\":\"https://trustedtechleader.com/case-studies/ai-video-content-workflow-mcp-server/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/ai-video-content-workflow-mcp-server/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"MCP server for AI-assisted video content workflow\",\"item\":\"https://trustedtechleader.com/case-studies/ai-video-content-workflow-mcp-server/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">MCP server for AI-assisted video content workflow</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="ai-automation">Case study · AI &amp; automation</p>
      <h1 id="cs-title" className="h1-md">MCP server for AI-assisted video content workflow</h1>
      <p className="lead">An MCP server that lets an AI assistant run a multi-channel video pipeline, from research to script, visuals and voiceover.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Video content production</dd></div>
      <div><dt>Category</dt><dd>AI &amp; automation</dd></div>
      <div><dt>Maturity</dt><dd>Working local system with an MCP server, a command-line companion and agent modules</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Video creators and small content teams running one or more channels.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Python, Model Context Protocol, Google Sheets, Docs and Drive</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>The assistant supplies the thinking and the MCP layer supplies structured access to the team's spreadsheet and documents.</dd></div>
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
      <p>Ask the assistant in plain words and watch the research, script and narration land in your own files.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustration of a chat where a creator asks the assistant to research a topic, write a script and make narration, next to the updated pipeline sheet and the saved script.">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Chat with the assistant: Channel "Sample Channel"</span></div>
      <div className="cs-screen__body">
      <div className="m-grid m-cols-2">
      <div className="m-card">
      <span className="m-title">Conversation</span>
      <div className="m-input">Research a new idea about property tax appeals, then write the script for it.</div>
      <div className="m-row"><span>Checked the sheet for similar topics</span><span className="m-pill m-pill--ok">No duplicate</span></div>
      <div className="m-row"><span>Gathered web, news and forum material</span><span className="m-pill m-pill--ok">Done</span></div>
      <div className="m-row"><span>Saved the research brief to the cloud docs</span><span className="m-pill m-pill--ok">Saved</span></div>
      <div className="m-row"><span>Wrote the script in this channel's tone</span><span className="m-pill m-pill--ok">Saved</span></div>
      <div className="m-input">Now make the narration audio.</div>
      <div className="m-row"><span>Narration made on this computer and filed in the channel folder</span><span className="m-pill m-pill--info">Linked in sheet</span></div>
      <div className="m-input">What needs a script next?</div>
      <div className="m-row"><span>Standard deduction basics is waiting at Research Complete</span><span className="m-pill m-pill--info">Found</span></div>
      </div>
      <div className="m-grid">
      <div className="m-card m-card--accent">
      <span className="m-title">Result: the channel's pipeline sheet</span>
      <div className="m-row"><span>Property Tax Appeals</span><span className="m-pill m-pill--ok">Script Complete</span></div>
      <div className="m-row"><span>Standard deduction basics</span><span className="m-pill">Research Complete</span></div>
      <div className="m-row"><span>Filing late: what happens</span><span className="m-pill">Researching</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Script saved in Docs</span>
      <div className="m-input"><b>Property Tax Appeals: a simple walk-through</b><svg viewBox="0 0 200 60" width="100%" aria-hidden="true" focusable="false"><path d="M4 8h192M4 22h180M4 36h192M4 50h120" stroke="#C9CDD6" strokeWidth="5" strokeLinecap="round" fill="none"></path></svg></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From a topic idea to a finished script and voice</h2>
      <ol className="cs-story">
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="34" y="24" width="92" height="44" rx="10"></rect><path className="s-paper" d="M58 68l-4 14 16-14z"></path><path className="s-stroke" d="M48 40h60M48 52h38"></path><circle className="s-solid" cx="118" cy="84" r="9"></circle><path className="s-fill s-stroke" d="M104 104c0-10 6-16 14-16s14 6 14 16z"></path><circle className="s-amber s-pulse" cx="42" cy="86" r="4"></circle></svg></div><h3>You ask in plain words</h3><p>Type what you want, such as researching a new topic for one of your channels.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="22" y="34" width="46" height="52" rx="5"></rect><rect className="s-paper s-move" x="80" y="34" width="46" height="52" rx="5"></rect><path className="s-stroke" d="M30 48h30M30 58h30M88 48h30M88 58h20"></path><circle className="s-blue" cx="128" cy="82" r="14"></circle><path className="s-tick" d="M121 82l5 5 9-10"></path></svg></div><h3>The assistant checks for repeats</h3><p>It looks through your sheet first, so you do not make the same video twice.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-fill s-stroke" cx="52" cy="62" r="24"></circle><path className="s-stroke" d="M28 62h48M52 38c-10 12-10 36 0 48M52 38c10 12 10 36 0 48"></path><rect className="s-paper s-move" x="92" y="30" width="48" height="56" rx="6"></rect><path className="s-stroke" d="M100 44h32M100 54h32M100 64h20"></path><circle className="s-amber" cx="132" cy="80" r="6"></circle></svg></div><h3>It gathers the research</h3><p>Search results, news and forum talk are pulled into one short brief.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="26" y="26" width="52" height="64" rx="6"></rect><path className="s-stroke" d="M35 42h34M35 52h34M35 62h22"></path><path className="s-solid" d="M96 52h10l14-10v36l-14-10H96z"></path><path className="s-stroke s-move" d="M128 46c6 6 6 24 0 30"></path><circle className="s-blue" cx="68" cy="82" r="10"></circle><path className="s-tick" d="M63 82l4 4 7-8"></path></svg></div><h3>Script and voice are made</h3><p>The script follows your channel's style, and a narration file is generated on your computer.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="24" y="26" width="84" height="62" rx="6"></rect><path className="s-stroke" d="M24 44h84M24 62h84M52 26v62M80 26v62"></path><circle className="s-blue" cx="94" cy="75" r="8"></circle><path className="s-tick" d="M90 75l3 3 6-7"></path><rect className="s-amber s-move" x="116" y="34" width="26" height="30" rx="4"></rect><path className="s-stroke" d="M121 44h16M121 52h12"></path></svg></div><h3>Your sheet stays up to date</h3><p>Each topic's status and links are saved in the spreadsheet your team already uses.</p></li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A video channel needs a steady pipeline of topics that move from idea to research, script, visuals, voiceover and publishing.</p>
      <p>Teams usually track this in spreadsheets while the writing happens elsewhere, so status drifts, duplicate topics creep in and every channel reinvents its own prompts. Running several channels multiplies the problem: each has its own tracking sheet, storage folder, tone and prompt rules.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>Responsibility is split cleanly. The AI assistant does the reasoning and writing, while an MCP server exposes tools that read and write the data layer: a Google Sheet as the pipeline database, Docs for research and scripts, and Drive for assets.</p>
      <p>A web research layer gathers search, news and forum material into a brief. Each channel has its own sheet, folder and prompt set, and every tool accepts a channel parameter. A separate local text-to-speech tool runs as a subprocess to produce narration, which is uploaded to Drive and linked in the sheet.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body">
      <figure className="cs-visual">
      <p className="cs-visual__title">One topic from request to narration</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 630" role="img" aria-labelledby="fig-video-seq-t fig-video-seq-d">
      <title id="fig-video-seq-t">Sequence of tool calls for one topic</title>
      <desc id="fig-video-seq-d">Sequence diagram with six participants: creator, AI assistant, MCP server, research sources, Sheets Docs and Drive, and a local text-to-speech tool. The creator asks for a topic. The assistant has the server add it if it is not a duplicate, which writes a row to the sheet. The assistant gathers research through the server, which queries the sources and returns raw results, then saves a research doc that goes to Drive and updates the row. The assistant loads script context, saves a script doc, and the server stores it and updates the row. For narration the server runs the local text-to-speech tool as a subprocess, receives an audio file, uploads it and links it in the row.</desc>
      <defs><marker id="mk-video-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <line className="v-line v-line--soft" x1="75" y1="66" x2="75" y2="606"></line>
      <line className="v-line v-line--soft" x1="225" y1="66" x2="225" y2="606"></line>
      <line className="v-line v-line--soft" x1="375" y1="66" x2="375" y2="606"></line>
      <line className="v-line v-line--soft" x1="525" y1="66" x2="525" y2="606"></line>
      <line className="v-line v-line--soft" x1="675" y1="66" x2="675" y2="606"></line>
      <line className="v-line v-line--soft" x1="825" y1="66" x2="825" y2="606"></line>
      <rect className="v-box" x="10" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="75" y="48" textAnchor="middle">Creator</text>
      <rect className="v-box" x="160" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="225" y="48" textAnchor="middle">AI assistant</text>
      <rect className="v-box v-box--accent" x="310" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="375" y="48" textAnchor="middle">MCP server</text>
      <rect className="v-box" x="460" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="525" y="48" textAnchor="middle">Research sources</text>
      <rect className="v-box" x="610" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="675" y="40" textAnchor="middle">Sheets, Docs,</text>
      <text className="v-text" x="675" y="56" textAnchor="middle">Drive</text>
      <rect className="v-box" x="760" y="20" width="130" height="46" rx="6"></rect>
      <text className="v-text" x="825" y="48" textAnchor="middle">Local TTS tool</text>
      <line className="v-line v-line--accent" x1="78" y1="96" x2="222" y2="96" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="150" y="89" textAnchor="middle">1. Asks for a topic</text>
      <line className="v-line v-line--accent" x1="228" y1="130" x2="372" y2="130" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="123" textAnchor="middle">2. add topic if new</text>
      <line className="v-line v-line--accent" x1="378" y1="164" x2="672" y2="164" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub v-halo" x="525" y="157" textAnchor="middle">3. add row to the sheet</text>
      <line className="v-line v-line--accent" x1="228" y1="198" x2="372" y2="198" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="191" textAnchor="middle">4. gather research</text>
      <line className="v-line v-line--accent" x1="378" y1="232" x2="522" y2="232" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="450" y="225" textAnchor="middle">5. search sources</text>
      <line className="v-line v-line--soft" x1="522" y1="266" x2="378" y2="266" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="450" y="259" textAnchor="middle">6. raw results</text>
      <line className="v-line v-line--accent" x1="228" y1="300" x2="372" y2="300" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="293" textAnchor="middle">7. save research doc</text>
      <line className="v-line v-line--accent" x1="378" y1="334" x2="672" y2="334" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub v-halo" x="525" y="327" textAnchor="middle">8. doc to Drive, row updated</text>
      <line className="v-line v-line--accent" x1="228" y1="368" x2="372" y2="368" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="361" textAnchor="middle">9. script context</text>
      <line className="v-line v-line--accent" x1="228" y1="402" x2="372" y2="402" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="395" textAnchor="middle">10. save script doc</text>
      <line className="v-line v-line--accent" x1="378" y1="436" x2="672" y2="436" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub v-halo" x="525" y="429" textAnchor="middle">11. script to Drive, row updated</text>
      <line className="v-line v-line--accent" x1="228" y1="470" x2="372" y2="470" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="300" y="463" textAnchor="middle">12. make voiceover</text>
      <line className="v-line v-line--accent" x1="378" y1="504" x2="822" y2="504" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="600" y="497" textAnchor="middle">13. run TTS subprocess</text>
      <line className="v-line v-line--soft" x1="822" y1="538" x2="378" y2="538" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub" x="600" y="531" textAnchor="middle">14. audio file</text>
      <line className="v-line v-line--accent" x1="378" y1="572" x2="672" y2="572" markerEnd="url(#mk-video-a)"></line>
      <text className="v-sub v-halo" x="525" y="565" textAnchor="middle">15. upload audio, link in row</text>
      </svg>
      </div>
      <figcaption>Time runs downward. The assistant does the thinking and writing; the MCP server does the reading and writing of data. Dashed arrows are replies. Narration is the only step that leaves the server for a separate local tool.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Multi-channel registry</h3><p>Add, switch, update and remove channels, each with its own sheet and Drive folder.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Pipeline tracking</h3><p>List, add and update topics, with workflow summary, stats and schedule views.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Duplicate detection</h3><p>Fuzzy matching runs before a new topic is added.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Research brief builder</h3><p>Web search, page fetch, forum and news search are combined into one brief.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Per-channel prompt sets</h3><p>Research, script, visuals, thumbnail, title and description prompts are loaded per channel.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Script, visuals and voiceover stages</h3><p>Context builders and save tools for each stage, with narration audio uploaded to Drive.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Performance insights</h3><p>Syncs platform statistics and surfaces category performance and series candidates.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Command-line companion</h3><p>Auth, setup and content commands that work outside the assistant.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a creator's request to a script, visuals and narration.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="7-stage flow: AI assistant, MCP server, Agents, Research sources, Google Sheets, Docs and Drive, Local TTS tool">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AI assistant</span><span className="cs-node__sub">reasoning and writing</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">MCP server</span><span className="cs-node__sub">roughly forty tools</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Agents</span><span className="cs-node__sub">research, script, visuals, voice, analytics</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Research sources</span><span className="cs-node__sub">search, news, forums</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Google Sheets</span><span className="cs-node__sub">pipeline state per channel</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Docs and Drive</span><span className="cs-node__sub">research, scripts, audio</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Local TTS tool</span><span className="cs-node__sub">narration subprocess</span></li>
      </ol>
      </div>
      <figcaption>The assistant calls MCP tools. Agents use services to gather research and to read and write Sheets, Docs and Drive. The voice agent shells out to a local text-to-speech tool.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Assistant calls MCP tools; agents use services to read and write Sheets, Docs and Drive.</li>
      <li>The voice agent shells out to the local text-to-speech tool.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Broad tool surface</h3><p>Roughly forty tools over a stdio server let any MCP-capable assistant drive the pipeline.</p></div></li>
      <li><div><h3>Layered structure</h3><p>Agents orchestrate, and services wrap each Google API and research source.</p></div></li>
      <li><div><h3>Sheet as state machine</h3><p>Sheet row status doubles as the workflow state, with colour-coding applied by a tool.</p></div></li>
      <li><div><h3>Isolated text-to-speech</h3><p>TTS runs in a separate virtual environment through a subprocess, with a timeout, because of dependency incompatibility.</p></div></li>
      <li><div><h3>Cached research</h3><p>Research results are cached with a TTL, and Brave search falls back to a keyless search.</p></div></li>
      <li><div><h3>Per-channel auth and logging</h3><p>OAuth uses per-channel token files, with structured logging via structlog.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Language</dt>
      <dd><ul className="cs-chips"><li className="chip">Python</li></ul></dd>
      </div>
      <div>
      <dt>Protocol</dt>
      <dd><ul className="cs-chips"><li className="chip">Model Context Protocol (mcp)</li></ul></dd>
      </div>
      <div>
      <dt>Google APIs</dt>
      <dd><ul className="cs-chips"><li className="chip">Sheets</li><li className="chip">Docs</li><li className="chip">Drive</li><li className="chip">YouTube data</li></ul></dd>
      </div>
      <div>
      <dt>CLI and logging</dt>
      <dd><ul className="cs-chips"><li className="chip">click</li><li className="chip">rich</li><li className="chip">structlog</li></ul></dd>
      </div>
      <div>
      <dt>Research</dt>
      <dd><ul className="cs-chips"><li className="chip">requests</li><li className="chip">httpx</li><li className="chip">BeautifulSoup</li><li className="chip">thefuzz</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body">
      <figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology stack by layer</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 378" role="img" aria-labelledby="fig-video-stack-t fig-video-stack-d">
      <title id="fig-video-stack-t">Technology stack layers</title>
      <desc id="fig-video-stack-d">Layered view: the Model Context Protocol on top, Python for the server and agents, research libraries for web sources, Google Sheets, Docs, Drive and YouTube data APIs for pipeline data and assets, and click, rich and structlog for the command line and logging.</desc>
      <rect className="v-lane" x="14" y="14" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="43">Protocol</text>
      <text className="v-sub" x="32" y="61">Tool interface</text>
      <rect className="v-box" x="200" y="31" width="222" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="311" y="49" textAnchor="middle">Model Context Protocol (mcp)</text>
      <rect className="v-lane" x="14" y="86" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="115">Language</text>
      <text className="v-sub" x="32" y="133">Server and agents</text>
      <rect className="v-box" x="200" y="103" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="234" y="121" textAnchor="middle">Python</text>
      <rect className="v-lane" x="14" y="158" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="187">Research</text>
      <text className="v-sub" x="32" y="205">Web sources</text>
      <rect className="v-box" x="200" y="175" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="241" y="193" textAnchor="middle">requests</text>
      <rect className="v-box" x="292" y="175" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="322.5" y="193" textAnchor="middle">httpx</text>
      <rect className="v-box" x="363" y="175" width="117" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="421.5" y="193" textAnchor="middle">BeautifulSoup</text>
      <rect className="v-box" x="490" y="175" width="75" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="527.5" y="193" textAnchor="middle">thefuzz</text>
      <rect className="v-lane" x="14" y="230" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="259">Google APIs</text>
      <text className="v-sub" x="32" y="277">Data and assets</text>
      <rect className="v-box" x="200" y="247" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="234" y="265" textAnchor="middle">Sheets</text>
      <rect className="v-box" x="278" y="247" width="54" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="305" y="265" textAnchor="middle">Docs</text>
      <rect className="v-box" x="342" y="247" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="372.5" y="265" textAnchor="middle">Drive</text>
      <rect className="v-box" x="413" y="247" width="110" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="468" y="265" textAnchor="middle">YouTube data</text>
      <rect className="v-lane" x="14" y="302" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="331">CLI, logging</text>
      <text className="v-sub" x="32" y="349">Terminal companion</text>
      <rect className="v-box" x="200" y="319" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="230.5" y="337" textAnchor="middle">click</text>
      <rect className="v-box" x="271" y="319" width="54" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="298" y="337" textAnchor="middle">rich</text>
      <rect className="v-box" x="335" y="319" width="89" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="379.5" y="337" textAnchor="middle">structlog</text>
      </svg>
      </div>
      <figcaption>The protocol layer is what the assistant sees. Python agents and services sit beneath it, reaching out to web research libraries and the Google APIs that hold the pipeline data.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Keeps AI-written content tied to a single source of truth for status.</li>
      <li>Helps avoid duplicate topics and steers each channel's voice through its own prompts.</li>
      <li>Lets one setup serve several channels without code changes.</li>
      <li>Puts the stages from approved idea to script, visuals and narration into one assistant-driven flow.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/ai-social-carousel-content-pipeline/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">AI social carousel pipeline with approval dashboard</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/multi-platform-short-video-publisher/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Multi-platform short-video publisher with dashboard</span></Link>
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
