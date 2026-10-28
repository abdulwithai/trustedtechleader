import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Wellness platform with AI coach | Trusted Tech Leader"
  },
  "description": "A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.",
  "alternates": {
    "canonical": "/case-studies/wellness-training-platform-apps-cms-ai/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Wellness platform with AI coach | Trusted Tech Leader",
    "description": "A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.",
    "url": "https://trustedtechleader.com/case-studies/wellness-training-platform-apps-cms-ai/",
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
    "title": "Wellness platform with AI coach | Trusted Tech Leader",
    "description": "A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Wellness training platform: apps, CMS and AI coach\",\"description\":\"A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"AI & automation\",\"url\":\"https://trustedtechleader.com/case-studies/wellness-training-platform-apps-cms-ai/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/wellness-training-platform-apps-cms-ai/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Wellness training platform: apps, CMS and AI coach\",\"item\":\"https://trustedtechleader.com/case-studies/wellness-training-platform-apps-cms-ai/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Wellness training platform: apps, CMS and AI coach</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="ai-automation">Case study · AI &amp; automation</p>
      <h1 id="cs-title" className="h1-md">Wellness training platform: apps, CMS and AI coach</h1>
      <p className="lead">A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Health &amp; wellness subscriptions</dd></div>
      <div><dt>Category</dt><dd>AI &amp; automation</dd></div>
      <div><dt>Maturity</dt><dd>Production-style multi-surface platform with deploy workflows; web app partly incomplete</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Subscribers, content admins, and marketing and operations teams.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>NestJS, Next.js, Swift and Kotlin, OpenAI</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A single platform spanning native apps, web checkout, admin CMS, AI coaching and automation, with AI content creation gated by human approval.</dd></div>
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
      <p>AI drafts new content, and a person approves it in the admin review queue before members see it.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustration of the admin review queue listing AI-proposed changes with statuses, and a pending lesson with approve and reject buttons.">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Admin CMS: MCP Platform</span></div>
      <div className="cs-screen__body">
      <div className="m-grid">
      <span className="m-h">Review AI-proposed changes</span>
      <div className="m-actions"><span className="m-btn">Review Queue</span><span className="m-btn m-btn--ghost">MCP Users</span><span className="m-btn m-btn--ghost">Audit Log</span></div>
      <div className="m-grid m-cols-2">
      <div className="m-card">
      <span className="m-title">Review Queue: filter by content type and status</span>
      <div className="m-row"><span>New lesson: five-minute evening wind-down</span><span className="m-pill m-pill--warn">Pending</span></div>
      <div className="m-row"><span>Edit program description: focus basics</span><span className="m-pill m-pill--warn">Pending</span></div>
      <div className="m-row"><span>New event: live breathing session</span><span className="m-pill m-pill--ok">Approved</span></div>
      <div className="m-row"><span>Edit lesson title: morning reset</span><span className="m-pill">Rejected</span></div>
      <div className="m-row"><span>New lesson: gentle stretch break</span><span className="m-pill m-pill--ok">Approved</span></div>
      <div className="m-row"><span>Edit event description: weekly live Q and A</span><span className="m-pill m-pill--warn">Pending</span></div>
      <div className="m-row"><span>Edit program description: sleep basics</span><span className="m-pill m-pill--ok">Approved</span></div>
      <div className="m-row"><span>New event: monthly community call</span><span className="m-pill">Rejected</span></div>
      </div>
      <div className="m-card m-card--accent">
      <span className="m-title">Proposed change: New lesson (Pending)</span>
      <div className="m-thumb m-thumb--tile">Five-minute evening wind-down</div>
      <div className="m-row"><span>Proposed by the AI assistant, not live yet</span><span className="m-pill m-pill--info">View Diff</span></div>
      <div className="m-actions"><span className="m-btn m-btn--ghost">Reject</span><span className="m-btn">Approve</span></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data; the admin CMS shown is a real part of the product, while parts of the web app are still unfinished</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From an AI draft to content members can use</h2>
      <ol className="cs-story">
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="30" y="26" width="76" height="40" rx="9"></rect><path className="s-paper" d="M50 66l-4 12 14-12z"></path><path className="s-stroke" d="M42 40h50M42 50h30"></path><rect className="s-fill s-stroke" x="100" y="62" width="30" height="40" rx="5"></rect><path className="s-stroke s-move" d="M107 74h16M107 82h12"></path></svg></div><h3>An editor asks the AI</h3><p>They ask the assistant to draft a new lesson, program text or event.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="30" y="30" width="70" height="56" rx="6"></rect><path className="s-stroke" d="M40 46h50M40 56h50M40 66h30"></path><rect className="s-solid" x="104" y="56" width="32" height="30" rx="5"></rect><path className="s-stroke" d="M112 56v-8a8 8 0 0116 0v8"></path><circle className="s-amber s-pulse" cx="120" cy="71" r="4"></circle></svg></div><h3>The draft is held back</h3><p>Nothing goes live. The change waits in a queue, and deleting is not allowed.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-solid" cx="46" cy="52" r="11"></circle><path className="s-fill s-stroke" d="M27 92c0-14 8-22 19-22s19 8 19 22z"></path><rect className="s-paper s-move" x="78" y="26" width="64" height="58" rx="6"></rect><path className="s-stroke" d="M88 40h44M88 50h44M88 60h28"></path><circle className="s-amber s-pulse" cx="132" cy="76" r="5"></circle></svg></div><h3>A person looks it over</h3><p>An admin opens the review queue and sees exactly what would change.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="22" y="32" width="52" height="54" rx="6"></rect><circle className="s-blue" cx="48" cy="58" r="14"></circle><path className="s-tick" d="M41 58l5 5 9-10"></path><rect className="s-paper s-move" x="86" y="32" width="52" height="54" rx="6"></rect><circle className="s-amber" cx="112" cy="58" r="14"></circle><path className="s-stroke" d="M106 52l12 12M118 52l-12 12"></path></svg></div><h3>They approve or reject</h3><p>Approve to publish the change, or reject it and nothing is touched.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-fill s-stroke" x="54" y="14" width="52" height="88" rx="9"></rect><rect className="s-paper" x="60" y="26" width="40" height="56" rx="4"></rect><path className="s-stroke" d="M66 38h28M66 48h28M66 58h16"></path><circle className="s-blue s-pulse" cx="96" cy="76" r="9"></circle><path className="s-tick" d="M91 76l3 3 6-7"></path></svg></div><h3>Members see the new content</h3><p>Once approved, the lesson shows up in the member apps.</p></li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A subscription wellness business needs to ship structured programs, lessons, live events and a community to members on iOS, Android and the web, while selling through app stores and a web checkout.</p>
      <p>Content teams need to publish and schedule material without developers. Marketing needs landing pages, funnels and lifecycle emails tied to subscription data. Members also expect personalised guidance: a conversational coach with memory of prior sessions, voice interaction, periodic progress reports and reminders, all governed by usage limits and moderation controls.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>The platform has one shared backend with separate API surfaces for the member apps, the admin CMS and the web app. Native iOS and Android clients and a Next.js web app consume the member API. A React admin CMS manages programs, lessons, events, products, roles and AI settings.</p>
      <p>AI features sit on top: streaming text coaching, a realtime voice agent, document context and member memory. An embedded MCP server lets an AI assistant draft CMS content, which a human approves in a review queue. Automation lives in n8n workflows and static marketing pages published to object storage.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body">
      <figure className="cs-visual">
      <p className="cs-visual__title">How an AI draft reaches live content</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 526" role="img" aria-labelledby="fig-wellness-seq-t fig-wellness-seq-d">
      <title id="fig-wellness-seq-t">Approval flow for AI-drafted content</title>
      <desc id="fig-wellness-seq-d">Sequence diagram with five participants: AI assistant, MCP gateway, draft store, admin review queue in the CMS, and live content. The assistant searches and reads content through the gateway and gets results back. It then starts and updates a draft, which the gateway saves in the draft store. The assistant validates and submits the draft, and the gateway creates a pending proposal in the admin review queue. Only when an admin approves is the write applied to live content. The gateway has its own sign-in and an audit log, and blocks delete calls. Drafts are kept per assistant user and expire.</desc>
      <defs><marker id="mk-wellness-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <line className="v-line v-line--soft" x1="90" y1="66" x2="90" y2="404"></line>
      <line className="v-line v-line--soft" x1="270" y1="66" x2="270" y2="404"></line>
      <line className="v-line v-line--soft" x1="450" y1="66" x2="450" y2="404"></line>
      <line className="v-line v-line--soft" x1="630" y1="66" x2="630" y2="404"></line>
      <line className="v-line v-line--soft" x1="810" y1="66" x2="810" y2="404"></line>
      <rect className="v-box" x="15" y="20" width="150" height="46" rx="6"></rect>
      <text className="v-text" x="90" y="48" textAnchor="middle">AI assistant</text>
      <rect className="v-box v-box--accent" x="195" y="20" width="150" height="46" rx="6"></rect>
      <text className="v-text" x="270" y="48" textAnchor="middle">MCP gateway</text>
      <rect className="v-box" x="375" y="20" width="150" height="46" rx="6"></rect>
      <text className="v-text" x="450" y="48" textAnchor="middle">Draft store</text>
      <rect className="v-box" x="555" y="20" width="150" height="46" rx="6"></rect>
      <text className="v-text" x="630" y="40" textAnchor="middle">Admin review</text>
      <text className="v-text" x="630" y="56" textAnchor="middle">queue (CMS)</text>
      <rect className="v-box" x="735" y="20" width="150" height="46" rx="6"></rect>
      <text className="v-text" x="810" y="48" textAnchor="middle">Live content</text>
      <line className="v-line v-line--accent" x1="93" y1="96" x2="267" y2="96" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="180" y="89" textAnchor="middle">1. search and read content</text>
      <line className="v-line v-line--soft" x1="267" y1="140" x2="93" y2="140" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="180" y="133" textAnchor="middle">2. results</text>
      <line className="v-line v-line--accent" x1="93" y1="184" x2="267" y2="184" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="180" y="177" textAnchor="middle">3. start and update draft</text>
      <line className="v-line v-line--accent" x1="273" y1="228" x2="447" y2="228" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="360" y="221" textAnchor="middle">4. save answers</text>
      <line className="v-line v-line--accent" x1="93" y1="272" x2="267" y2="272" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="180" y="265" textAnchor="middle">5. validate, then submit</text>
      <line className="v-line v-line--accent" x1="273" y1="316" x2="627" y2="316" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub v-halo" x="450" y="309" textAnchor="middle">6. proposal, status pending</text>
      <line className="v-line v-line--accent" x1="633" y1="360" x2="807" y2="360" markerEnd="url(#mk-wellness-a)"></line>
      <text className="v-sub" x="720" y="353" textAnchor="middle">7. admin approves</text>
      <rect className="v-box v-box--soft" x="14" y="424" width="424" height="86" rx="8"></rect>
      <text className="v-label" x="30" y="448">At the gateway</text>
      <text className="v-sub" x="30" y="470">Own sign-in and an audit log. Delete calls are</text>
      <text className="v-sub" x="30" y="488">blocked; archiving is used instead.</text>
      <rect className="v-box v-box--soft" x="462" y="424" width="424" height="86" rx="8"></rect>
      <text className="v-label" x="478" y="448">Before approval</text>
      <text className="v-sub" x="478" y="470">Drafts are kept per assistant user and expire.</text>
      <text className="v-sub" x="478" y="488">Live content is untouched until an admin approves.</text>
      </svg>
      </div>
      <figcaption>Time runs downward. The assistant can read freely, but anything it writes becomes a pending proposal. Live content changes only after a person in the CMS approves it.</figcaption>
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
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Program, lesson and event catalogue</h3><p>Tiered content, progress tracking, calendar links and live-session provisioning.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>AI coach with chat and voice</h3><p>A streaming text coach, a realtime voice session and a hosted voice-agent gateway.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Member memory and document context</h3><p>Stored context that personalises coach answers.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Admin CMS</h3><p>A React back office for content, members, orders, subscriptions, roles and permissions, banners, FAQs and AI agents.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>MCP content platform with approval queue</h3><p>AI assistant tools search, draft and propose content. Writes are held for admin approval and deletes are blocked.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Subscriptions and purchase funnels</h3><p>Store purchase verification, web checkout with Stripe webhooks, redeem codes and family plans.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Engagement automation</h3><p>Activity and event reminders, scheduled notifications through a job queue and periodic member reports.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Marketing pages and workflows</h3><p>Static funnels deployed to object storage and a large library of n8n automations.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>Three client surfaces, one backend, and AI behind a human approval step.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="7-stage flow: Mobile apps, Web app, Admin CMS, NestJS API, Data and queues, AI services, Automation">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Mobile apps</span><span className="cs-node__sub">native iOS and Android, in-app purchases</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Web app</span><span className="cs-node__sub">Next.js funnels, checkout, deep links</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Admin CMS</span><span className="cs-node__sub">React back office</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">NestJS API</span><span className="cs-node__sub">member, admin, web and MCP surfaces</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Data and queues</span><span className="cs-node__sub">SQL, document store, Redis workers</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AI services</span><span className="cs-node__sub">LLM coach, realtime voice, embeddings</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Automation</span><span className="cs-node__sub">n8n workflows, marketing pages, CRM sync</span></li>
      </ol>
      </div>
      <figcaption>Member apps, the web app and the admin CMS all call one NestJS API. The API stores data in SQL and document databases and runs Redis workers. It also calls AI services for coaching and voice, and feeds automation workflows.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>AI assistant proposals enter an approval queue in the CMS before publishing.</li>
      <li>Stripe and store purchases update tier access.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>One codebase, partitioned by audience</h3><p>A NestJS backend splits member, admin, web and internal surfaces, with a module per feature.</p></div></li>
      <li><div><h3>Mixed persistence</h3><p>Relational storage via TypeORM with dated migrations, a document store via Mongoose, and Redis-backed BullMQ workers for transcription, content mapping and notifications.</p></div></li>
      <li><div><h3>Stripe webhook handling</h3><p>Raw-body signature verification, tier access grants, and affiliate attribution carried through checkout metadata.</p></div></li>
      <li><div><h3>MCP gateway</h3><p>Its own authentication, audit log, draft expiry storage and reference-data tool, bridged to a desktop assistant over stdio.</p></div></li>
      <li><div><h3>CRM and ops integrations</h3><p>Lifecycle sync of subscriptions to a CRM, Slack audit notifications and wearable data context.</p></div></li>
      <li><div><h3>Feature flags and AI usage insights</h3><p>System settings and flags control rollout, and usage insights monitor it.</p></div></li>
      <li><div><h3>Environment-specific deploys</h3><p>Container builds and GitHub Actions cover deploy, CI and security testing, with secrets sourced from a parameter store.</p></div></li>
      <li><div><h3>Native in-app purchases</h3><p>iOS (Swift) and Android (Kotlin) clients complete purchases against a server-created order, and the backend updates the member's access from the result.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">NestJS 8</li><li className="chip">TypeScript</li><li className="chip">TypeORM</li><li className="chip">PostgreSQL</li><li className="chip">Mongoose</li><li className="chip">BullMQ</li><li className="chip">ioredis</li><li className="chip">Passport</li></ul></dd>
      </div>
      <div>
      <dt>Web</dt>
      <dd><ul className="cs-chips"><li className="chip">Next.js 15</li><li className="chip">React 18</li><li className="chip">Jest</li></ul></dd>
      </div>
      <div>
      <dt>CMS</dt>
      <dd><ul className="cs-chips"><li className="chip">React 17</li><li className="chip">Redux</li><li className="chip">Material UI</li><li className="chip">Webpack</li></ul></dd>
      </div>
      <div>
      <dt>Mobile</dt>
      <dd><ul className="cs-chips"><li className="chip">Swift (iOS and macOS)</li><li className="chip">Kotlin (Android)</li></ul></dd>
      </div>
      <div>
      <dt>AI</dt>
      <dd><ul className="cs-chips"><li className="chip">OpenAI</li><li className="chip">Anthropic</li><li className="chip">LangChain</li><li className="chip">ElevenLabs voice agent</li><li className="chip">Model Context Protocol</li></ul></dd>
      </div>
      <div>
      <dt>Payments</dt>
      <dd><ul className="cs-chips"><li className="chip">Stripe</li><li className="chip">In-app purchases</li></ul></dd>
      </div>
      <div>
      <dt>Cloud</dt>
      <dd><ul className="cs-chips"><li className="chip">AWS (S3, SQS, CloudFront signing)</li><li className="chip">Firebase</li><li className="chip">Auth0</li><li className="chip">Docker</li></ul></dd>
      </div>
      <div>
      <dt>Automation</dt>
      <dd><ul className="cs-chips"><li className="chip">n8n</li><li className="chip">HubSpot</li><li className="chip">Slack</li><li className="chip">Google Sheets</li><li className="chip">Supabase nodes</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body">
      <figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology stack by layer</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 632" role="img" aria-labelledby="fig-wellness-stack-t fig-wellness-stack-d">
      <title id="fig-wellness-stack-t">Technology stack layers</title>
      <desc id="fig-wellness-stack-d">Layered view from clients to services. Mobile: Swift and Kotlin. Web: Next.js, React and Jest. CMS: React, Redux, Material UI and Webpack. Backend: NestJS, TypeScript, TypeORM, PostgreSQL, Mongoose, BullMQ, ioredis and Passport. AI: OpenAI, Anthropic, LangChain, an ElevenLabs voice agent and the Model Context Protocol. Payments: Stripe and in-app purchases. Cloud: AWS, Firebase, Auth0 and Docker. Automation: n8n, HubSpot, Slack, Google Sheets and Supabase nodes.</desc>
      <rect className="v-lane" x="14" y="14" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="43">Mobile</text>
      <text className="v-sub" x="32" y="61">iOS and Android apps</text>
      <rect className="v-box" x="200" y="31" width="173" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="286.5" y="49" textAnchor="middle">Swift (iOS and macOS)</text>
      <rect className="v-box" x="383" y="31" width="138" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="452" y="49" textAnchor="middle">Kotlin (Android)</text>
      <rect className="v-lane" x="14" y="86" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="115">Web</text>
      <text className="v-sub" x="32" y="133">Funnels and checkout</text>
      <rect className="v-box" x="200" y="103" width="96" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="248" y="121" textAnchor="middle">Next.js 15</text>
      <rect className="v-box" x="306" y="103" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="347" y="121" textAnchor="middle">React 18</text>
      <rect className="v-box" x="398" y="103" width="54" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="425" y="121" textAnchor="middle">Jest</text>
      <rect className="v-lane" x="14" y="158" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="187">CMS</text>
      <text className="v-sub" x="32" y="205">Admin back office</text>
      <rect className="v-box" x="200" y="175" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="241" y="193" textAnchor="middle">React 17</text>
      <rect className="v-box" x="292" y="175" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="322.5" y="193" textAnchor="middle">Redux</text>
      <rect className="v-box" x="363" y="175" width="103" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="414.5" y="193" textAnchor="middle">Material UI</text>
      <rect className="v-box" x="476" y="175" width="75" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="513.5" y="193" textAnchor="middle">Webpack</text>
      <rect className="v-lane" x="14" y="230" width="872" height="100" rx="8"></rect>
      <text className="v-label" x="32" y="278">Backend</text>
      <text className="v-sub" x="32" y="296">API, data and queues</text>
      <rect className="v-box" x="200" y="247" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="241" y="265" textAnchor="middle">NestJS 8</text>
      <rect className="v-box" x="292" y="247" width="96" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="340" y="265" textAnchor="middle">TypeScript</text>
      <rect className="v-box" x="398" y="247" width="75" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="435.5" y="265" textAnchor="middle">TypeORM</text>
      <rect className="v-box" x="483" y="247" width="96" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="531" y="265" textAnchor="middle">PostgreSQL</text>
      <rect className="v-box" x="589" y="247" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="630" y="265" textAnchor="middle">Mongoose</text>
      <rect className="v-box" x="681" y="247" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="715" y="265" textAnchor="middle">BullMQ</text>
      <rect className="v-box" x="759" y="247" width="75" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="796.5" y="265" textAnchor="middle">ioredis</text>
      <rect className="v-box" x="200" y="285" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="241" y="303" textAnchor="middle">Passport</text>
      <rect className="v-lane" x="14" y="340" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="369">AI</text>
      <text className="v-sub" x="32" y="387">Coach, voice, tools</text>
      <rect className="v-box" x="200" y="357" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="234" y="375" textAnchor="middle">OpenAI</text>
      <rect className="v-box" x="278" y="357" width="89" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="322.5" y="375" textAnchor="middle">Anthropic</text>
      <rect className="v-box" x="377" y="357" width="89" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="421.5" y="375" textAnchor="middle">LangChain</text>
      <rect className="v-box" x="476" y="357" width="180" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="566" y="375" textAnchor="middle">ElevenLabs voice agent</text>
      <rect className="v-box" x="666" y="357" width="180" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="756" y="375" textAnchor="middle">Model Context Protocol</text>
      <rect className="v-lane" x="14" y="412" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="441">Payments</text>
      <text className="v-sub" x="32" y="459">Subscriptions</text>
      <rect className="v-box" x="200" y="429" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="234" y="447" textAnchor="middle">Stripe</text>
      <rect className="v-box" x="278" y="429" width="138" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="347" y="447" textAnchor="middle">In-app purchases</text>
      <rect className="v-lane" x="14" y="484" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="513">Cloud</text>
      <text className="v-sub" x="32" y="531">Hosting and identity</text>
      <rect className="v-box" x="200" y="501" width="257" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="328.5" y="519" textAnchor="middle">AWS (S3, SQS, CloudFront signing)</text>
      <rect className="v-box" x="467" y="501" width="82" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="508" y="519" textAnchor="middle">Firebase</text>
      <rect className="v-box" x="559" y="501" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="589.5" y="519" textAnchor="middle">Auth0</text>
      <rect className="v-box" x="630" y="501" width="68" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="664" y="519" textAnchor="middle">Docker</text>
      <rect className="v-lane" x="14" y="556" width="872" height="62" rx="8"></rect>
      <text className="v-label" x="32" y="585">Automation</text>
      <text className="v-sub" x="32" y="603">Workflows and sync</text>
      <rect className="v-box" x="200" y="573" width="47" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="223.5" y="591" textAnchor="middle">n8n</text>
      <rect className="v-box" x="257" y="573" width="75" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="294.5" y="591" textAnchor="middle">HubSpot</text>
      <rect className="v-box" x="342" y="573" width="61" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="372.5" y="591" textAnchor="middle">Slack</text>
      <rect className="v-box" x="413" y="573" width="117" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="471.5" y="591" textAnchor="middle">Google Sheets</text>
      <rect className="v-box" x="540" y="573" width="124" height="28" rx="6"></rect>
      <text className="v-text" style={{ fontSize: "12.5px" } as React.CSSProperties} x="602" y="591" textAnchor="middle">Supabase nodes</text>
      </svg>
      </div>
      <figcaption>The three client layers at the top all call the one backend. AI, payments, cloud services and automation are the outside services the backend relies on.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Lets content teams publish and schedule programs and events without developer involvement.</li>
      <li>Offers members personalised coaching through chat and voice, with guard rails on usage.</li>
      <li>Connects purchases, access tiers and CRM so subscription state stays in sync.</li>
      <li>Lets marketing launch new funnels and automations quickly from static pages and workflows.</li>
      <li>Allows AI-drafted content while keeping a human approval step.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Cafe ordering and loyalty platform with mobile app and admin</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/supplier-catalog-sync-platform/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">AI-assisted supplier catalog sync platform</span></Link>
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
