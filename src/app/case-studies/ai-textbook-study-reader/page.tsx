import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "AI textbook study reader | Trusted Tech Leader"
  },
  "description": "Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, figures, quizzes and flashcards.",
  "alternates": {
    "canonical": "/case-studies/ai-textbook-study-reader/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "AI textbook study reader | Trusted Tech Leader",
    "description": "Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, figures, quizzes and flashcards.",
    "url": "https://trustedtechleader.com/case-studies/ai-textbook-study-reader/",
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
    "title": "AI textbook study reader | Trusted Tech Leader",
    "description": "Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, figures, quizzes and flashcards.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"AI textbook ingestion and study reader\",\"description\":\"Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, figures, quizzes and flashcards.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"AI & automation\",\"url\":\"https://trustedtechleader.com/case-studies/ai-textbook-study-reader/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/ai-textbook-study-reader/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"AI textbook ingestion and study reader\",\"item\":\"https://trustedtechleader.com/case-studies/ai-textbook-study-reader/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">AI textbook ingestion and study reader</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="ai-automation">Case study · AI &amp; automation</p>
      <h1 id="cs-title" className="h1-md">AI textbook ingestion and study reader</h1>
      <p className="lead">Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, figures, quizzes and flashcards.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Education technology</dd></div>
      <div><dt>Category</dt><dd>AI &amp; automation</dd></div>
      <div><dt>Maturity</dt><dd>In active development with a tested ingestion pipeline; demo-content mode and a local database mode</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Secondary-school students studying from a prescribed textbook, and the content reviewer preparing it.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Next.js, PostgreSQL, Gemini models, Zod</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>A review-aware pipeline that converts a scanned textbook into linked, interactive study material.</dd></div>
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
      <p>A student studying one chapter: practice questions, answers, key words and the four ways to study.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative study screen showing a biology practice question with an AI-written answer and key words">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Class 11 Biology: chapter study</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Class 11 Biology</span></span><span><span className="m-pill">Read</span> <span className="m-pill m-pill--info">Learn</span> <span className="m-pill">Quick revise</span> <span className="m-pill">Test me</span></span></div>
      <div className="m-card m-card--accent m-card__title"><span className="m-title">Notice shown above the questions</span>These answers were written by AI from the textbook text and have not been checked by a teacher yet. Use them to practise, and confirm important facts in the book.</div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-grid">
      <div className="m-card">
      <span className="m-title">Question card</span>
      <span className="m-h">What is a cell?</span>
      <div className="m-row"><span>Show answer</span><span className="m-pill m-pill--ok">Open</span></div>
      <div className="m-row"><span>The cell is the basic unit of life. Every living thing is made of one or more cells.</span><span className="m-pill m-pill--warn">AI-written answer</span></div>
      <div className="m-row"><span>Exam points</span><span className="m-pill">Tap to open</span></div>
      <div className="m-actions"><span className="m-btn m-btn--ghost">Revise later</span><span className="m-btn">Got it</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Chapter progress</span>
      <div className="m-row"><span>Marked Got it</span><span className="m-pill m-pill--ok">Most cards</span></div>
      <div className="m-row"><span>Marked Revise later</span><span className="m-pill m-pill--warn">A few cards</span></div>
      <div className="m-row"><span>Not tried yet</span><span className="m-pill">Some cards</span></div>
      </div>
      </div>
      <div className="m-card">
      <span className="m-title">Key words</span>
      <div className="m-row"><span>Cell</span><span className="m-pill m-pill--info">Hear it, see the meaning</span></div>
      <div className="m-row"><span>Organelle</span><span className="m-pill m-pill--info">Hear it, see the meaning</span></div>
      <div className="m-row"><span>Membrane</span><span className="m-pill m-pill--info">Hear it, see the meaning</span></div>
      <span className="m-title m-card__title">Figure from the textbook</span>
      <div className="m-thumb m-thumb--tile"><svg viewBox="0 0 120 60" width="100%" height="100%" aria-hidden="true" focusable="false"><ellipse cx="60" cy="30" rx="50" ry="25" fill="#fff" stroke="#0F1A2A" strokeWidth="2"></ellipse><circle cx="60" cy="30" r="11" fill="#E9B861" stroke="#0F1A2A" strokeWidth="2"></circle><circle cx="34" cy="22" r="4" fill="#3B5BDB"></circle><circle cx="88" cy="38" r="4" fill="#3B5BDB"></circle><circle cx="86" cy="21" r="3" fill="#3B5BDB"></circle></svg></div>
      <div className="m-row"><span>Simple meaning</span><span className="m-pill m-pill--warn">AI-written</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample data, not client data</figcaption>
      </figure>
      <p className="cs-visual__title">Real screens from the working product (sample data)</p>
      <div className="cs-shots">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="/case-studies/ai-textbook-study-reader/screen-1-glossary.jpg" rel="noopener" target="_blank">
      <img src="/case-studies/ai-textbook-study-reader/screen-1-glossary.jpg" width="1440" height="900" loading="lazy" alt={"A study card (\"Define biodiversity\") in Learn mode, with a tapped key word opening a panel showing its pronunciation, a plain meaning and a translation marked as a draft."} />
      </a>
      <figcaption><b>Real screen, sample data</b> The study card in Learn mode: tapping a key word opens its pronunciation, a plain meaning and a translation, flagged as a draft to check with a teacher. Demonstration text. Photo: lubasi / Flickr, CC BY-SA 2.0.</figcaption>
      </figure>
      </div>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">A study session, step by step</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="30" y="40" width="50" height="56" rx="3"></rect><rect className="s-paper" x="80" y="40" width="50" height="56" rx="3"></rect><path className="s-stroke" d="M38 54 h34 M38 64 h34 M38 74 h24 M88 54 h34 M88 64 h34 M88 74 h24"></path><path className="s-amber" d="M112 40 v22 l6 -5 l6 5 v-22 Z"></path></svg></div>
      <h3>Sara opens her biology chapter</h3>
      <p>She picks a way to study: read the text, learn with cards, revise quickly or test herself.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-stroke" d="M56 30 H140 M56 44 H140 M56 58 H100 M122 58 H140"></path><rect className="s-amber s-pulse" x="102" y="52" width="18" height="10" rx="2"></rect><rect className="s-paper" x="62" y="70" width="80" height="30" rx="5"></rect><path className="s-stroke" d="M72 82 h50 M72 90 h34"></path><path className="s-paper" d="M108 62 l-4 8 l10 0 Z"></path></svg></div>
      <h3>She taps a word she does not know</h3>
      <p>A short, plain meaning opens beside the text, so she does not have to leave the page.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="44" y="26" width="84" height="70" rx="6"></rect><path className="s-stroke" d="M54 42 h50 M54 54 h64 M54 66 h56"></path><rect className="s-amber" x="54" y="76" width="40" height="14" rx="7"></rect><text x="74" y="86" textAnchor="middle" fontSize="9" fontWeight="600" fill="#0F1A2A">AI</text><circle className="s-blue s-pulse" cx="128" cy="30" r="9"></circle><path className="s-tick" d="M123 30 l4 4 l6 -8"></path></svg></div>
      <h3>Each answer says who wrote it</h3>
      <p>AI-written answers carry a clear label, so she knows to check important facts in her book.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="52" y="14" width="40" height="82" rx="7"></rect><circle className="s-blue s-pulse" cx="72" cy="55" r="10"></circle><circle className="s-solid" cx="72" cy="55" r="4"></circle><path className="s-stroke" d="M64 22 h16"></path><rect className="s-paper" x="104" y="36" width="42" height="58" rx="3"></rect><path className="s-stroke" d="M111 50 h28 M111 60 h28 M111 70 h18"></path><path className="s-stroke" d="M94 62 h8"></path></svg></div>
      <h3>She photographs a page from her book</h3>
      <p>The page lens reads the photo and gives her an AI analysis of the page.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="62" y="26" width="64" height="44" rx="5"></rect><rect className="s-paper" x="54" y="34" width="64" height="44" rx="5"></rect><path className="s-stroke" d="M66 52 h40 M66 62 h26"></path><rect className="s-fill" x="40" y="90" width="90" height="8" rx="4"></rect><rect className="s-blue" x="40" y="90" width="58" height="8" rx="4"></rect><circle className="s-blue s-pulse" cx="136" cy="40" r="10"></circle><path className="s-tick" d="M131 40 l4 4 l7 -9"></path></svg></div>
      <h3>Her progress is kept for next time</h3>
      <p>Cards she marked Got it and Revise later are remembered, so she can pick up where she stopped on her device.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Students study from scanned PDF textbooks that are hard to search. There is no linked glossary, no practice questions, and figures are locked inside page images.</p>
      <p>Turning a book into structured study material by hand is slow. AI-generated study content is also risky, so provenance and review are treated as first-class concerns, with a warning about copyright on source scans.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>An ingestion pipeline renders PDF pages, extracts text into chapters, topics, sections and paragraphs, and asks AI models to generate answer cards, glossary terms and figure bounding boxes.</p>
      <p>Results are validated against schemas, cached, and imported into the database in all-or-nothing steps that are safe to repeat, with a trial-run mode. A Next.js reader then offers inline glossary terms and figures, quizzes, flashcards, bookmarks, progress, search and a page-lens tool that analyzes a photographed page.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual">
      <p className="cs-visual__title">Ingestion stages across model, cache and database</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 330" role="img" aria-labelledby="reader-a-t reader-a-d">
      <title id="reader-a-t">Ingestion stages across model, cache and database</title>
      <desc id="reader-a-d">Swimlane diagram with three lanes: Gemini model, cached files, and PostgreSQL, across six ordered stages. Stage 1 loads chapter text into PostgreSQL. Stage 2 has the model write answer cards, saved to the database. Stage 3 has the model write glossary terms into a terms file without touching the database. Stage 4 reads that file back and writes terms and paragraph markers in one transaction. Stage 5 has the model locate figures and writes cropped figures and a figures file. Stage 6 reads the figures file back and places figures in sections, linked to terms.</desc>
      <defs><marker id="mk-reader-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-lane" x="10" y="44" width="880" height="80" rx="10"></rect><text className="v-text" x="24" y="80" textAnchor="start">Gemini model</text><text className="v-sub" x="24" y="98" textAnchor="start">AI step</text><rect className="v-lane" x="10" y="134" width="880" height="80" rx="10"></rect><text className="v-text" x="24" y="170" textAnchor="start">Cached files</text><text className="v-sub" x="24" y="188" textAnchor="start">reviewable, no database</text><rect className="v-lane" x="10" y="224" width="880" height="80" rx="10"></rect><text className="v-text" x="24" y="260" textAnchor="start">PostgreSQL</text><text className="v-sub" x="24" y="278" textAnchor="start">chapter content</text><text className="v-label" x="190" y="30" textAnchor="middle">1 Text</text><text className="v-label" x="315" y="30" textAnchor="middle">2 Cards</text><text className="v-label" x="440" y="30" textAnchor="middle">3 Terms</text><text className="v-label" x="565" y="30" textAnchor="middle">4 Link terms</text><text className="v-label" x="690" y="30" textAnchor="middle">5 Figures</text><text className="v-label" x="815" y="30" textAnchor="middle">6 Link figures</text><rect className="v-box v-box" x="132" y="241" width="116" height="46" rx="8"></rect><text className="v-text" x="190.0" y="261.0" textAnchor="middle">Chapter text</text><text className="v-sub" x="190.0" y="278.0" textAnchor="middle">text structure</text><rect className="v-box v-box--accent" x="257" y="61" width="116" height="46" rx="8"></rect><text className="v-text" x="315.0" y="81.0" textAnchor="middle">Answer cards</text><text className="v-sub" x="315.0" y="98.0" textAnchor="middle">model writes</text><rect className="v-box v-box" x="257" y="241" width="116" height="46" rx="8"></rect><text className="v-text" x="315.0" y="261.0" textAnchor="middle">Question cards</text><text className="v-sub" x="315.0" y="278.0" textAnchor="middle">saved to database</text><line className="v-line" x1="315" y1="107" x2="315" y2="239" markerEnd="url(#mk-reader-a)"></line><rect className="v-box v-box--accent" x="382" y="61" width="116" height="46" rx="8"></rect><text className="v-text" x="440.0" y="81.0" textAnchor="middle">Glossary terms</text><text className="v-sub" x="440.0" y="98.0" textAnchor="middle">model writes</text><rect className="v-box v-box" x="382" y="151" width="116" height="46" rx="8"></rect><text className="v-text" x="440.0" y="171.0" textAnchor="middle">terms.json</text><text className="v-sub" x="440.0" y="188.0" textAnchor="middle">no database</text><line className="v-line" x1="440" y1="107" x2="440" y2="149" markerEnd="url(#mk-reader-a)"></line><rect className="v-box v-box--soft" x="507" y="151" width="116" height="46" rx="8"></rect><text className="v-text" x="565.0" y="171.0" textAnchor="middle">terms.json</text><text className="v-sub" x="565.0" y="188.0" textAnchor="middle">read back</text><rect className="v-box v-box" x="507" y="241" width="116" height="46" rx="8"></rect><text className="v-text" x="565.0" y="261.0" textAnchor="middle">Terms, markers</text><text className="v-sub" x="565.0" y="278.0" textAnchor="middle">one transaction</text><line className="v-line" x1="565" y1="197" x2="565" y2="239" markerEnd="url(#mk-reader-a)"></line><rect className="v-box v-box--accent" x="632" y="61" width="116" height="46" rx="8"></rect><text className="v-text" x="690.0" y="81.0" textAnchor="middle">Figure boxes</text><text className="v-sub" x="690.0" y="98.0" textAnchor="middle">model locates</text><rect className="v-box v-box" x="632" y="151" width="116" height="46" rx="8"></rect><text className="v-text" x="690.0" y="171.0" textAnchor="middle">Cropped figures</text><text className="v-sub" x="690.0" y="188.0" textAnchor="middle">figures.json</text><line className="v-line" x1="690" y1="107" x2="690" y2="149" markerEnd="url(#mk-reader-a)"></line><rect className="v-box v-box--soft" x="757" y="151" width="116" height="46" rx="8"></rect><text className="v-text" x="815.0" y="171.0" textAnchor="middle">figures.json</text><text className="v-sub" x="815.0" y="188.0" textAnchor="middle">read back</text><rect className="v-box v-box" x="757" y="241" width="116" height="46" rx="8"></rect><text className="v-text" x="815.0" y="261.0" textAnchor="middle">Section figures</text><text className="v-sub" x="815.0" y="278.0" textAnchor="middle">linked to terms</text><line className="v-line" x1="815" y1="197" x2="815" y2="239" markerEnd="url(#mk-reader-a)"></line>
      </svg>
      </div>
      <figcaption>Stages run left to right. For terms and figures, the model's output is cached to a file first and a separate import step writes it to the database. Answer cards are saved directly.</figcaption>
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
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Chapter reader</h3><p>A read view with sections, paragraphs and figures placed between the text.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>AI answer cards</h3><p>Generated question cards with summaries, points and multiple-choice explanations.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Auto-linked glossary</h3><p>Whole-word term markers are inserted into paragraphs and linked to cards and diagrams.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Figure extraction</h3><p>A vision model locates figures on rendered pages and crops them to images.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Quizzes and flashcards</h3><p>Practice tools with local progress tracking.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Full-text search</h3><p>Search over paragraphs using a search index built for the purpose.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Page lens</h3><p>Upload a photo of a page for AI analysis, with rate limiting.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Word lookup and speech</h3><p>Vocabulary support with word lookup and speech.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a scanned PDF to a reviewed, searchable reader.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label={"6-stage flow: Textbook PDF, AI ingestion, Validation & cache, PostgreSQL, Next.js reader, Page lens"}>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Textbook PDF</span><span className="cs-node__sub">page rendering</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">AI ingestion</span><span className="cs-node__sub">answer cards, terms, figures</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Validation &amp; cache</span><span className="cs-node__sub">Zod schemas</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">PostgreSQL</span><span className="cs-node__sub">chapters, cards, glossary</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Next.js reader</span><span className="cs-node__sub">read, quiz, search</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Page lens</span><span className="cs-node__sub">photo analysis API</span></li>
      </ol>
      </div>
      <figcaption>Pages are rendered and passed to AI ingestion, which produces cards, terms and figures. Output is validated and cached, then stored in PostgreSQL. The reader serves students from that data; the page-lens API is a separate route that sends a student's photo to the model.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>Ingestion scripts write through idempotent import transactions.</li>
      <li>The reader reads through a repository that can fall back to demo content.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Provenance and review states</h3><p>Content carries explicit provenance (demo, approved, AI-generated) and review status (draft, needs review, approved).</p></div></li>
      <li><div><h3>Repository pattern</h3><p>In-memory demo content and a PostgreSQL implementation are chosen by environment.</p></div></li>
      <li><div><h3>Database security</h3><p>A row-level security migration is paired with server-only database access.</p></div></li>
      <li><div><h3>Staged, safe ingestion</h3><p>Cached stages use schema-validated files, partial-run guards, transactions and dry-run.</p></div></li>
      <li><div><h3>Model fallback</h3><p>Multiple models are tried when figure detection fails.</p></div></li>
      <li><div><h3>Image safety</h3><p>Image features use safe fetching, license checks and request limits.</p></div></li>
      <li><div><h3>Tested</h3><p>Extensive unit tests plus database integration tests.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div>
      <dt>Frontend</dt>
      <dd><ul className="cs-chips"><li className="chip">Next.js</li><li className="chip">React</li><li className="chip">Tailwind CSS</li><li className="chip">shadcn/ui</li><li className="chip">Base UI</li></ul></dd>
      </div>
      <div>
      <dt>Backend</dt>
      <dd><ul className="cs-chips"><li className="chip">Next.js route handlers</li><li className="chip">Node.js</li><li className="chip">TypeScript</li></ul></dd>
      </div>
      <div>
      <dt>Data</dt>
      <dd><ul className="cs-chips"><li className="chip">PostgreSQL (pg)</li><li className="chip">Full-text search</li><li className="chip">Row-level security</li></ul></dd>
      </div>
      <div>
      <dt>AI &amp; PDF</dt>
      <dd><ul className="cs-chips"><li className="chip">Gemini models</li><li className="chip">mupdf</li><li className="chip">pdf-lib</li><li className="chip">sharp</li></ul></dd>
      </div>
      <div>
      <dt>Validation &amp; testing</dt>
      <dd><ul className="cs-chips"><li className="chip">Zod</li><li className="chip">Vitest</li></ul></dd>
      </div>
      <div>
      <dt>Infrastructure</dt>
      <dd><ul className="cs-chips"><li className="chip">Docker Compose for local database</li></ul></dd>
      </div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide">
      <p className="cs-visual__title">Technology layers, reader to infrastructure</p>
      <div className="cs-visual__frame">
      <svg className="cs-svg" viewBox="0 0 900 394" role="img" aria-labelledby="reader-b-t reader-b-d">
      <title id="reader-b-t">Technology layers, reader to infrastructure</title>
      <desc id="reader-b-d">Layered diagram of the stack. Frontend: Next.js, React, Tailwind CSS, shadcn/ui, Base UI. Backend: Next.js route handlers, Node.js, TypeScript. Data: PostgreSQL, full-text search, row-level security. AI and PDF: Gemini models, mupdf, pdf-lib, sharp. Validation and testing: Zod and Vitest. Infrastructure: Docker Compose for the local database.</desc>
      <defs><marker id="mk-reader-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path className="v-arrow" d="M0 0 L10 5 L0 10 z"></path></marker></defs>
      <rect className="v-lane" x="10" y="10" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="34" textAnchor="start">Frontend</text><text className="v-sub" x="26" y="51" textAnchor="start">the study reader</text><rect className="v-box v-box--accent" x="215" y="21" width="78" height="32" rx="6"></rect><text className="v-text" x="254.0" y="42" textAnchor="middle">Next.js</text><rect className="v-box v-box--accent" x="305" y="21" width="64" height="32" rx="6"></rect><text className="v-text" x="337.0" y="42" textAnchor="middle">React</text><rect className="v-box v-box--accent" x="381" y="21" width="114" height="32" rx="6"></rect><text className="v-text" x="438.0" y="42" textAnchor="middle">Tailwind CSS</text><rect className="v-box v-box--accent" x="507" y="21" width="92" height="32" rx="6"></rect><text className="v-text" x="553.0" y="42" textAnchor="middle">shadcn/ui</text><rect className="v-box v-box--accent" x="611" y="21" width="78" height="32" rx="6"></rect><text className="v-text" x="650.0" y="42" textAnchor="middle">Base UI</text><rect className="v-lane" x="10" y="74" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="98" textAnchor="start">Backend</text><text className="v-sub" x="26" y="115" textAnchor="start">route handlers</text><rect className="v-box v-box" x="215" y="85" width="186" height="32" rx="6"></rect><text className="v-text" x="308.0" y="106" textAnchor="middle">Next.js route handlers</text><rect className="v-box v-box" x="413" y="85" width="78" height="32" rx="6"></rect><text className="v-text" x="452.0" y="106" textAnchor="middle">Node.js</text><rect className="v-box v-box" x="503" y="85" width="100" height="32" rx="6"></rect><text className="v-text" x="553.0" y="106" textAnchor="middle">TypeScript</text><rect className="v-lane" x="10" y="138" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="162" textAnchor="start">Data</text><text className="v-sub" x="26" y="179" textAnchor="start">content and search</text><rect className="v-box v-box" x="215" y="149" width="136" height="32" rx="6"></rect><text className="v-text" x="283.0" y="170" textAnchor="middle">PostgreSQL (pg)</text><rect className="v-box v-box" x="363" y="149" width="143" height="32" rx="6"></rect><text className="v-text" x="434.5" y="170" textAnchor="middle">Full-text search</text><rect className="v-box v-box" x="518" y="149" width="157" height="32" rx="6"></rect><text className="v-text" x="596.5" y="170" textAnchor="middle">Row-level security</text><rect className="v-lane" x="10" y="202" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="226" textAnchor="start">AI &amp; PDF</text><text className="v-sub" x="26" y="243" textAnchor="start">ingestion scripts</text><rect className="v-box v-box" x="215" y="213" width="121" height="32" rx="6"></rect><text className="v-text" x="275.5" y="234" textAnchor="middle">Gemini models</text><rect className="v-box v-box" x="348" y="213" width="64" height="32" rx="6"></rect><text className="v-text" x="380.0" y="234" textAnchor="middle">mupdf</text><rect className="v-box v-box" x="424" y="213" width="78" height="32" rx="6"></rect><text className="v-text" x="463.0" y="234" textAnchor="middle">pdf-lib</text><rect className="v-box v-box" x="514" y="213" width="64" height="32" rx="6"></rect><text className="v-text" x="546.0" y="234" textAnchor="middle">sharp</text><rect className="v-lane" x="10" y="266" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="290" textAnchor="start">Validation &amp; testing</text><text className="v-sub" x="26" y="307" textAnchor="start">checks on every stage</text><rect className="v-box v-box--soft" x="215" y="277" width="49" height="32" rx="6"></rect><text className="v-text" x="239.5" y="298" textAnchor="middle">Zod</text><rect className="v-box v-box--soft" x="276" y="277" width="71" height="32" rx="6"></rect><text className="v-text" x="311.5" y="298" textAnchor="middle">Vitest</text><rect className="v-lane" x="10" y="330" width="880" height="54" rx="10"></rect><text className="v-text" x="26" y="354" textAnchor="start">Infrastructure</text><text className="v-sub" x="26" y="371" textAnchor="start">local setup</text><rect className="v-box v-box--soft" x="215" y="341" width="265" height="32" rx="6"></rect><text className="v-text" x="347.5" y="362" textAnchor="middle">Docker Compose for local database</text>
      </svg>
      </div>
      <figcaption>The reader and its route handlers sit on PostgreSQL. The ingestion tools fill that database offline, and validation and testing wrap every layer.</figcaption>
      </figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Converts static scanned material into interactive, searchable study content.</li>
      <li>Keeps AI output reviewable through explicit provenance and review states.</li>
      <li>Makes chapter ingestion repeatable and safe to re-run.</li>
      <li>Works without a database through demo mode, lowering the barrier to try it.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/supplier-catalog-sync-platform/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">AI-assisted supplier catalog sync platform</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/ai-social-carousel-content-pipeline/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">AI social carousel pipeline with approval dashboard</span></Link>
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
