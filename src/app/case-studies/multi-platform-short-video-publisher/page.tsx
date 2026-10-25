import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Short-video publisher dashboard | Trusted Tech Leader"
  },
  "description": "A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.",
  "alternates": {
    "canonical": "/case-studies/multi-platform-short-video-publisher/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Short-video publisher dashboard | Trusted Tech Leader",
    "description": "A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.",
    "url": "https://trustedtechleader.com/case-studies/multi-platform-short-video-publisher/",
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
    "title": "Short-video publisher dashboard | Trusted Tech Leader",
    "description": "A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Multi-platform short-video publisher with dashboard\",\"description\":\"A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Developer & content tools\",\"url\":\"https://trustedtechleader.com/case-studies/multi-platform-short-video-publisher/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/multi-platform-short-video-publisher/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Multi-platform short-video publisher with dashboard\",\"item\":\"https://trustedtechleader.com/case-studies/multi-platform-short-video-publisher/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Multi-platform short-video publisher with dashboard</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="dev-content-tools">Case study · Developer &amp; content tools</p>
      <h1 id="cs-title" className="h1-md">Multi-platform short-video publisher with dashboard</h1>
      <p className="lead">A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Creator tooling and social media</dd></div>
      <div><dt>Category</dt><dd>Developer &amp; content tools</dd></div>
      <div><dt>Maturity</dt><dd>Working local tool with unit tests per platform adapter</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Solo creators who post the same short video to several networks.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Python, OAuth 2.0 with PKCE, PostgreSQL or JSON files, pytest</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A local publisher that handles each network's upload quirks behind one command and one dashboard.</dd></div>
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
      <p>A dashboard that lists every video post, shows its status on each network, and tells you which one needs another try.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative dashboard listing four video posts with different statuses, and a detail panel showing which of four platforms published and which failed.">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Publisher: All posts</span></div>
      <div className="cs-screen__body">
      <div className="m-row">
      <span><span className="m-h">Posts</span></span>
      <span className="m-actions"><span className="m-btn m-btn--ghost">Sync analytics</span></span>
      </div>
      <div className="m-actions"><span className="m-pill m-pill--info">All</span><span className="m-pill">Queued</span><span className="m-pill">Scheduled</span><span className="m-pill">Published</span><span className="m-pill">Partial</span><span className="m-pill">Failed</span></div>
      <div className="m-grid m-cols-4">
      <div className="m-card"><div className="m-thumb m-thumb--wide"><span aria-hidden="true">&#9654;</span> Desk tidy video</div><p className="m-title m-card__title">Three tips for a tidy desk</p><span className="m-pill m-pill--info">Queued</span></div>
      <div className="m-card"><div className="m-thumb m-thumb--wide"><span aria-hidden="true">&#9654;</span> Coffee video</div><p className="m-title m-card__title">A better morning coffee</p><span className="m-pill m-pill--info">Scheduled</span></div>
      <div className="m-card"><div className="m-thumb m-thumb--wide"><span aria-hidden="true">&#9654;</span> Plant video</div><p className="m-title m-card__title">Repotting a houseplant</p><span className="m-pill m-pill--warn">Partial</span></div>
      <div className="m-card"><div className="m-thumb m-thumb--wide"><span aria-hidden="true">&#9654;</span> Walk video</div><p className="m-title m-card__title">A ten minute lunch walk</p><span className="m-pill m-pill--ok">Published</span></div>
      </div>
      <div className="m-grid m-cols-2">
      <div className="m-card m-card--accent">
      <span className="m-title">Repotting a houseplant (Partial)</span>
      <div className="m-row"><span>YouTube</span><span className="m-pill m-pill--ok">Published</span></div>
      <div className="m-row"><span>Instagram</span><span className="m-pill m-pill--ok">Published</span></div>
      <div className="m-row"><span>LinkedIn</span><span className="m-pill m-pill--ok">Published</span></div>
      <div className="m-row"><span>TikTok</span><span className="m-pill m-pill--warn">Failed</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">What is in a post folder</span>
      <div className="m-row"><span>One video file</span><span className="m-pill m-pill--info">Video</span></div>
      <div className="m-row"><span>A short note with the title, caption and platforms</span><span className="m-pill m-pill--info">post.json</span></div>
      <div className="m-row"><span>Posts are created by dropping a folder in the inbox and running the post command.</span></div>
      <div className="m-input">Run the post command again, only TikTok is retried</div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/multi-platform-short-video-publisher/screen-1-queue.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/multi-platform-short-video-publisher/screen-1-queue.jpg" width="1232" height="676" loading="lazy" alt="List of queued and scheduled sample video posts, each shown per network with its status." />
      </a>
      <figcaption><b>Real screen, sample data</b> The Scheduled tab, which also lists queued posts, shown per network with placeholder thumbnails.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From one video to four networks</h2>
      <ol className="cs-story">
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-fill s-stroke" d="M30 40h34l8 8h50v44H30z"></path><rect className="s-paper s-move" x="52" y="54" width="42" height="26" rx="4"></rect><path className="s-solid" d="M69 60l12 7-12 7z"></path><rect className="s-paper" x="104" y="60" width="20" height="26" rx="3"></rect></svg></div><h3>You drop a video in a folder</h3><p>Each post is a folder with your video and a short note holding the title and caption.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="40" y="22" width="80" height="70" rx="6"></rect><path className="s-stroke" d="M54 40h10M54 56h10M54 72h10"></path><path className="s-tick" d="M52 40l3 3 5-6"></path><path className="s-stroke" d="M72 40h34M72 56h34M72 72h24"></path><circle className="s-blue s-pulse" cx="120" cy="84" r="12"></circle><path className="s-tick" d="M114 84l4 4 8-9"></path></svg></div><h3>The tool checks the post</h3><p>It makes sure the video and note are in order before anything is sent.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="20" y="38" width="36" height="52" rx="5"></rect><path className="s-solid" d="M33 56l10 6-10 6z"></path><path className="s-stroke s-move" d="M60 64h28"></path><rect className="s-fill s-stroke" x="94" y="22" width="24" height="24" rx="5"></rect><rect className="s-fill s-stroke" x="122" y="22" width="24" height="24" rx="5"></rect><rect className="s-fill s-stroke" x="94" y="52" width="24" height="24" rx="5"></rect><rect className="s-fill s-stroke" x="122" y="52" width="24" height="24" rx="5"></rect></svg></div><h3>It posts to each network</h3><p>One command sends your video to YouTube, Instagram, LinkedIn and TikTok in turn.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-blue" cx="40" cy="40" r="12"></circle><path className="s-tick" d="M34 40l4 4 8-9"></path><circle className="s-blue" cx="76" cy="40" r="12"></circle><path className="s-tick" d="M70 40l4 4 8-9"></path><circle className="s-blue" cx="112" cy="40" r="12"></circle><path className="s-tick" d="M106 40l4 4 8-9"></path><circle className="s-amber s-pulse" cx="58" cy="82" r="12"></circle><path className="s-stroke" d="M52 76l12 12M64 76l-12 12"></path></svg></div><h3>You see what worked</h3><p>The dashboard shows each network as published or failed, so nothing is a guess.</p></li>
      <li><div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-amber s-pulse" cx="50" cy="70" r="14"></circle><path className="s-stroke s-move" d="M72 70h26M92 64l6 6-6 6"></path><path className="s-fill s-stroke" d="M106 44h20l6 6h8v36h-34z"></path><circle className="s-blue" cx="124" cy="68" r="10"></circle><path className="s-tick" d="M118 68l4 4 7-8"></path></svg></div><h3>You run it again to fix a failure</h3><p>Only the network that failed is tried again, and a finished post moves to the done folder.</p></li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Publishing one short vertical video to several networks means logging into each platform, re-uploading, rewriting captions to fit each limit and tracking which uploads succeeded.</p>
      <p>Each platform has its own authorization flow, upload protocol and quirks. One accepts only a public video URL, another lands uploads only in drafts, tokens expire on different schedules, and a personal profile on one network cannot be posted to through its API at all. A naive script fails on these constraints.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>A Python command-line tool reads one folder per post (a video plus a metadata file), validates it, and publishes through a common adapter interface for each platform.</p>
      <p>Results are stored per platform, so a re-run retries only the failures, and fully successful posts move to a done folder. A localhost dashboard shows queued, scheduled and published posts with per-platform state and analytics. A temporary tunnel exposes a single file when a platform needs a public link.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body">
      <figure className="cs-visual">
      <p className="cs-visual__title">One post, four platforms, results kept per platform</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 450" role="img" aria-labelledby="vid-lane-t vid-lane-d">
      <title id="vid-lane-t">Swimlane of publishing one post folder to several platforms</title>
      <desc id="vid-lane-d">Swimlane with five lanes: post folder, command-line tool, platform adapter, tunnel helper and result store. Step 1: a post folder holds a video and a metadata file. Step 2: the command-line tool validates it and skips platforms that already succeeded. Step 3: an adapter publishes to each remaining platform in turn. Step 3a: if a platform needs a public video URL, the adapter asks the tunnel helper for a temporary link. Step 4: the result for each platform, ok or error, is recorded in the result store. Step 5: if every platform succeeded the folder moves to the done folder; otherwise it stays in the inbox and a rerun tries only the failed platforms.</desc>
      <defs><marker id="mk-vid-lane-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-vid-lane-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <rect className="v-lane" x="20" y="10" width="860" height="80" rx="10"></rect>
      <text className="v-label" x="34" y="54" textAnchor="start">POST FOLDER</text>
      <rect className="v-lane" x="20" y="96" width="860" height="80" rx="10"></rect>
      <text className="v-label" x="34" y="140" textAnchor="start">CLI</text>
      <rect className="v-lane" x="20" y="182" width="860" height="80" rx="10"></rect>
      <text className="v-label" x="34" y="226" textAnchor="start">PLATFORM ADAPTER</text>
      <rect className="v-lane" x="20" y="268" width="860" height="80" rx="10"></rect>
      <text className="v-label" x="34" y="312" textAnchor="start">TUNNEL HELPER</text>
      <rect className="v-lane" x="20" y="354" width="860" height="80" rx="10"></rect>
      <text className="v-label" x="34" y="398" textAnchor="start">RESULT STORE</text>
      <rect className="v-box" x="145" y="20" width="128" height="60" rx="8"></rect>
      <text className="v-text" x="209" y="47" textAnchor="middle">1  Post folder</text>
      <text className="v-sub" x="209" y="62" textAnchor="middle">video and post.json</text>
      <rect className="v-box" x="291" y="106" width="128" height="60" rx="8"></rect>
      <text className="v-text" x="355" y="125.5" textAnchor="middle">2  Validate</text>
      <text className="v-sub" x="355" y="140.5" textAnchor="middle">video and metadata</text>
      <text className="v-sub" x="355" y="155.5" textAnchor="middle">skip platforms done</text>
      <rect className="v-box v-box--accent" x="437" y="192" width="128" height="60" rx="8"></rect>
      <text className="v-text" x="501" y="211.5" textAnchor="middle">3  Publish</text>
      <text className="v-sub" x="501" y="226.5" textAnchor="middle">one adapter per</text>
      <text className="v-sub" x="501" y="241.5" textAnchor="middle">platform, in turn</text>
      <rect className="v-box v-box--soft" x="437" y="278" width="128" height="60" rx="8"></rect>
      <text className="v-text" x="501" y="297.5" textAnchor="middle">3a  Public link</text>
      <text className="v-sub" x="501" y="312.5" textAnchor="middle">only if a platform</text>
      <text className="v-sub" x="501" y="327.5" textAnchor="middle">needs a video URL</text>
      <rect className="v-box" x="583" y="364" width="128" height="60" rx="8"></rect>
      <text className="v-text" x="647" y="383.5" textAnchor="middle">4  Record result</text>
      <text className="v-sub" x="647" y="398.5" textAnchor="middle">ok or error, per</text>
      <text className="v-sub" x="647" y="413.5" textAnchor="middle">platform</text>
      <rect className="v-box v-box--dark" x="729" y="20" width="128" height="60" rx="8"></rect>
      <text className="v-text v-text--light" x="793" y="39.5" textAnchor="middle">5  Finished?</text>
      <text className="v-sub v-sub--light" x="793" y="54.5" textAnchor="middle">all ok: move to</text>
      <text className="v-sub v-sub--light" x="793" y="69.5" textAnchor="middle">the done folder</text>
      <path className="v-line" d="M209 80V136H291" markerEnd="url(#mk-vid-lane-a)"></path>
      <path className="v-line" d="M355 166V222H437" markerEnd="url(#mk-vid-lane-a)"></path>
      <path className="v-line" d="M480 252V278" markerEnd="url(#mk-vid-lane-a)"></path>
      <path className="v-line v-line--soft v-line--accent" d="M520 278V252" markerEnd="url(#mk-vid-lane-b)"></path>
      <path className="v-line" d="M565 222H647V364" markerEnd="url(#mk-vid-lane-a)"></path>
      <path className="v-line" d="M711 394H793V80" markerEnd="url(#mk-vid-lane-a)"></path>
      <path className="v-line v-line--soft" d="M729 50H273" markerEnd="url(#mk-vid-lane-a)"></path>
      <text className="v-sub" x="501" y="42" textAnchor="middle">not all ok: folder stays in the inbox; a rerun tries only the failed ones</text>
      </svg>
      </div>
      <figcaption>Each platform gets its own result, so one failure does not undo the others. Only a fully successful post leaves the inbox, and a rerun skips platforms that already worked.</figcaption>
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
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Folder-based post inbox</h3><p>Each post is a video plus metadata, with per-platform caption overrides and platform selection.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Four platform adapters</h3><p>Video, short-form and draft-inbox uploads behind one interface.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Dry-run mode</h3><p>Validates tokens and inputs without uploading anything.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Retry only failures</h3><p>Per-platform results are saved, so reruns skip successes.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>One-time browser login</h3><p>OAuth with PKCE and a one-shot localhost callback, then token refresh.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Temporary public file link</h3><p>Serves one file under an unguessable path through a tunnel and tears it down after upload.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Local dashboard</h3><p>Queue, scheduled, published and analytics views, available on localhost only.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Chunked resumable uploads</h3><p>Upload planning for large videos.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a folder with a video to four platforms, with results tracked per platform.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="6-stage flow: Post inbox folder, CLI and validation, Platform adapters, Tunnel helper, Result store, Local dashboard">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Post inbox folder</span><span className="cs-node__sub">video and metadata</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">CLI and validation</span><span className="cs-node__sub">dry-run, platform selection</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Platform adapters</span><span className="cs-node__sub">four networks, one interface</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Tunnel helper</span><span className="cs-node__sub">temporary public file link</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Result store</span><span className="cs-node__sub">Postgres or JSON files</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Local dashboard</span><span className="cs-node__sub">queue, status, analytics</span></li>
      </ol>
      </div>
      <figcaption>A post folder is validated by the command-line tool and published through one adapter per platform. A tunnel helper exposes a file when a platform needs a public link. Per-platform results go to a store that the local dashboard reads.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Adapters write per-platform results to the store.</li>
      <li>The dashboard reads the store and synced analytics.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>One interface per platform</h3><p>An abstract platform interface with login, check, publish and dry-run semantics keeps each network isolated.</p></div></li>
      <li><div><h3>Flexible storage</h3><p>Postgres is used when a database URL is set, and JSON files otherwise, with a migration command.</p></div></li>
      <li><div><h3>Tunnel fallback</h3><p>The tunnel helper falls back from a quick-tunnel service to an SSH reverse tunnel.</p></div></li>
      <li><div><h3>Local credentials</h3><p>Tokens, environment files and posts are git-ignored and stored owner-only.</p></div></li>
      <li><div><h3>Broad test coverage</h3><p>Tests cover each adapter, analytics per platform, the store, accounts, the tunnel and the UI.</p></div></li>
      <li><div><h3>Compliance choice</h3><p>A platform whose terms forbid automation is handled through an approval-gated browser step rather than an API.</p></div></li>
      <li><div><h3>Command set</h3><p>Subcommands cover login, status, post, inbox runs, sync, import of scheduled content and the UI.</p></div></li>
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
      <dt>HTTP</dt>
      <dd><ul className="cs-chips"><li className="chip">requests</li><li className="chip">urllib3</li><li className="chip">Standard-library HTTP servers</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">PostgreSQL via psycopg</li><li className="chip">JSON file fallback</li></ul></dd>
      </div>
      <div>
      <dt>Auth</dt>
      <dd><ul className="cs-chips"><li className="chip">OAuth 2.0 with PKCE</li></ul></dd>
      </div>
      <div>
      <dt>Networking</dt>
      <dd><ul className="cs-chips"><li className="chip">Cloudflare quick tunnel</li><li className="chip">SSH reverse tunnel</li></ul></dd>
      </div>
      <div>
      <dt>Testing</dt>
      <dd><ul className="cs-chips"><li className="chip">pytest</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body">
      <figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 430" role="img" aria-labelledby="vid-stack-t vid-stack-d">
      <title id="vid-stack-t">Technology stack layers of the short-video publisher</title>
      <desc id="vid-stack-d">Layered diagram, top to bottom: language (Python); HTTP (requests, urllib3, standard-library HTTP servers); auth (OAuth 2.0 with PKCE); networking (Cloudflare quick tunnel, SSH reverse tunnel); data (PostgreSQL via psycopg, JSON file fallback); testing (pytest).</desc>
      <defs><marker id="mk-vid-stack-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow"></path></marker><marker id="mk-vid-stack-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" className="v-arrow v-arrow--accent"></path></marker></defs>
      <rect className="v-lane" x="20" y="10" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="44" textAnchor="start">LANGUAGE</text>
      <rect className="v-box v-box--accent" x="190" y="22" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="225" y="44" textAnchor="middle">Python</text>
      <rect className="v-lane" x="20" y="80" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="114" textAnchor="start">HTTP</text>
      <rect className="v-box" x="190" y="92" width="85" height="34" rx="8"></rect>
      <text className="v-text" x="232.5" y="114" textAnchor="middle">requests</text>
      <rect className="v-box" x="285" y="92" width="77" height="34" rx="8"></rect>
      <text className="v-text" x="323.5" y="114" textAnchor="middle">urllib3</text>
      <rect className="v-box" x="372" y="92" width="244" height="34" rx="8"></rect>
      <text className="v-text" x="494" y="114" textAnchor="middle">Standard-library HTTP servers</text>
      <rect className="v-lane" x="20" y="150" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="184" textAnchor="start">AUTH</text>
      <rect className="v-box" x="190" y="162" width="168" height="34" rx="8"></rect>
      <text className="v-text" x="274" y="184" textAnchor="middle">OAuth 2.0 with PKCE</text>
      <rect className="v-lane" x="20" y="220" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="254" textAnchor="start">NETWORKING</text>
      <rect className="v-box v-box--soft" x="190" y="232" width="199" height="34" rx="8"></rect>
      <text className="v-text" x="289.5" y="254" textAnchor="middle">Cloudflare quick tunnel</text>
      <rect className="v-box v-box--soft" x="399" y="232" width="161" height="34" rx="8"></rect>
      <text className="v-text" x="479.5" y="254" textAnchor="middle">SSH reverse tunnel</text>
      <rect className="v-lane" x="20" y="290" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="324" textAnchor="start">DATA</text>
      <rect className="v-box" x="190" y="302" width="191" height="34" rx="8"></rect>
      <text className="v-text" x="285.5" y="324" textAnchor="middle">PostgreSQL via psycopg</text>
      <rect className="v-box" x="391" y="302" width="161" height="34" rx="8"></rect>
      <text className="v-text" x="471.5" y="324" textAnchor="middle">JSON file fallback</text>
      <rect className="v-lane" x="20" y="360" width="860" height="60" rx="10"></rect>
      <text className="v-label" x="38" y="394" textAnchor="start">TESTING</text>
      <rect className="v-box" x="190" y="372" width="70" height="34" rx="8"></rect>
      <text className="v-text" x="225" y="394" textAnchor="middle">pytest</text>
      </svg>
      </div>
      <figcaption>A small Python program talks to each network over HTTP with OAuth. Tunnels are used only when a platform needs a public link, and storage is Postgres or plain JSON files.</figcaption>
      </figure>
      </div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Removes re-uploading and most per-network caption work.</li>
      <li>Makes partial failures safe to retry without duplicate posts.</li>
      <li>Keeps credentials local and under the creator's control.</li>
      <li>Gives one view of what is queued, scheduled and live.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/ai-video-content-workflow-mcp-server/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">MCP server for AI-assisted video content workflow</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/local-first-outreach-crm/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Local-first outreach CRM with self-describing API</span></Link>
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
