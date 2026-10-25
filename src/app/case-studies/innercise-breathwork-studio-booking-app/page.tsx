import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Innercise: breathwork studio app | Trusted Tech Leader"
  },
  "description": "A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.",
  "alternates": {
    "canonical": "/case-studies/innercise-breathwork-studio-booking-app/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Innercise: breathwork studio app | Trusted Tech Leader",
    "description": "A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.",
    "url": "https://trustedtechleader.com/case-studies/innercise-breathwork-studio-booking-app/",
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
    "title": "Innercise: breathwork studio app | Trusted Tech Leader",
    "description": "A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Described from the public store listings and studio site.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Innercise: iOS and Android member app for a Danish breathwork and sauna studio\",\"description\":\"A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Mobile apps\",\"url\":\"https://trustedtechleader.com/case-studies/innercise-breathwork-studio-booking-app/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/innercise-breathwork-studio-booking-app/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Innercise: iOS and Android member app for a Danish breathwork and sauna studio\",\"item\":\"https://trustedtechleader.com/case-studies/innercise-breathwork-studio-booking-app/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Innercise: iOS and Android member app for a Danish breathwork and sauna studio</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="mobile-apps">Case study · Mobile apps</p>
      <h1 id="cs-title" className="h1-md">Innercise: iOS and Android member app for a Danish breathwork and sauna studio</h1>
      <p className="lead">A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Health &amp; wellness: breathwork and sauna studio</dd></div>
      <div><dt>Category</dt><dd>Mobile apps</dd></div>
      <div><dt>Scope</dt><dd>One live app, described from its <a href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">App Store</a> and <a href="https://play.google.com/store/apps/details?id=dk.yogo.innercise" rel="noopener" target="_blank">Google Play</a> listings and the studio's site, <a href="https://innercise.dk/" rel="noopener" target="_blank">innercise.dk</a> (October 2026). Danish text is translated.</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Members and customers of Innercise, a Danish studio that teaches breathwork and runs sauna sessions (saunagus). The listing calls a member an &quot;innerciser&quot;.</dd></div>
      <div className="cell"><dt>Platforms</dt><dd>iPhone and iPod touch (iOS 13.0 or later, 40.4 MB) and Android. The listings show the seller as YOGO.DK ApS of Copenhagen, which also publishes apps for other studios.</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>It is the studio's own member app, not a general fitness app. One screen shows the class schedule, with sessions at the studio's different addresses, and the same app handles courses, price lists, a member profile and booking.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What the app does</a></li>
      <li><a href="#features">Key features</a></li>
      <li><a href="#architecture">How the app is laid out</a></li>
      <li><a href="#stack">Platforms and listing details</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live app</h2>
      <p>Four iPhone screenshots from the App Store listing. The text in them is Danish. Each opens the listing.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>App Store listing: Innercise</span></div>
      <img src="/case-studies/innercise-breathwork-studio-booking-app/schedule.jpg" width="600" height="1299" loading="lazy" alt="Innercise iPhone app Schedule tab in Danish: a list of upcoming classes grouped by day, each card showing a title, a room and address, a time range and a coloured bar, with a Fully booked label on one class and a 6 places free label on another, and a bottom tab bar." />
      </a>
      <figcaption><b><a href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">Schedule tab</a></b> The Schedule tab (Skema in Danish): classes grouped by day with room, address, time and a price in kroner. Some cards carry a Fully booked or places-free label.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>App Store listing: Innercise</span></div>
      <img src="/case-studies/innercise-breathwork-studio-booking-app/session-detail.jpg" width="600" height="1299" loading="lazy" alt="Innercise iPhone app session detail screen in Danish: a date and time in the header, a price, a class title, an instructor line, a room and address, a photo banner and a large Log in button." />
      </a>
      <figcaption><b><a href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">Session detail</a></b> A session page: date and time, price, instructor, room, a banner image, the start of a description and a Log in button (Log ind) for visitors who are not signed in.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>App Store listing: Innercise</span></div>
      <img src="/case-studies/innercise-breathwork-studio-booking-app/login.jpg" width="600" height="1299" loading="lazy" alt="Innercise iPhone app Log in screen in Danish: the studio logo above e-mail and password fields, a Log in button and links to create a profile or reset the password." />
      </a>
      <figcaption><b><a href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">Log in</a></b> The Profile tab for a visitor who is not signed in: e-mail and password fields, a note that a profile is needed to sign up, and links to create a profile or reset the password.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>App Store listing: Innercise</span></div>
      <img src="/case-studies/innercise-breathwork-studio-booking-app/profile.jpg" width="600" height="1299" loading="lazy" alt="Innercise iPhone app Profile tab in Danish: an empty My activity chart with months from September to August, a My classes card saying no enrolled classes and a My agreements card with a Create agreement button." />
      </a>
      <figcaption><b><a href="https://apps.apple.com/dk/app/innercise/id6463287972" rel="noopener" target="_blank">Profile</a></b> The Profile tab (Profil) for a signed-in account with no activity: a My activity chart by month, My classes, and My agreements with a Create agreement button.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A studio that sells classes, multi-week courses, events and memberships needs members to find the next session quickly, see whether there is room, book it and keep their membership up to date. A website can do this, but members want it on their phone, signed in, and close to the schedule.</p>
      <p>The studio also runs in several places. Its site lists three sites around Copenhagen (Sydhavn, Vanl&oslash;se and Frederiksdal), and the screenshots show sessions in other towns too. A schedule has to say where each session is.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What the app does</h2></div>
      <div className="cs-prose">
      <p>The App Store description (in Danish, translated here) says the app is &quot;a digital extension&quot; of the Innercise experience. On opening, it gives an overview of the member's enrolled courses, memberships and other activities. A calendar shows upcoming sessions. Upcoming activities and membership renewal are reachable from the profile.</p>
      <p>It also says members can sign up for courses, view their membership details and book breathwork training or sauna sessions. The Google Play description is an English version of the same text. The studio's site links to both listings under &quot;Download the Innercise app&quot;.</p>
      <p>The studio is unrelated to the NeuroGym &quot;Innercise&quot; mindset app. The studio itself, per its site, is a health centre for breathwork, sauna sessions and ice baths. Its classes include breathwork with ice bath and sauna with ice bath, plus longer courses such as a four-week basic course.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">From the listing description and the four screenshots.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Overview of your activities</h3><p>The listing says the first screen shows registered courses, memberships and other activities, so a member can plan their time.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Schedule and calendar</h3><p>The listing calls the calendar &quot;a central part of the app&quot;, for seeing upcoming sessions. The Schedule screenshot lists classes by day, with the teacher, room, address, time and price, and availability labels such as &quot;Fully booked&quot;.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Book breathwork and sauna sessions</h3><p>The description says members can book breathwork training or sauna sessions (&quot;saunagus&quot;, a guided sauna ritual) and enrol in courses. A session page shows the instructor, room and a description, with a Log in button for visitors.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Membership details and renewal</h3><p>The listing says members can see their membership information and renew the membership from their profile.</p></li><li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Profile</h3><p>A Profile tab with e-mail and password sign-in, create-profile and reset-password links, and, once signed in, a monthly activity chart plus lists headed My classes and My agreements.</p></li></ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How the app is laid out</h2></div>
      <p>The bottom tab bar visible in every screenshot.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5 tabs: Schedule, Courses, Prices, Profile, More">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Schedule</span><span className="cs-node__sub">Skema: classes by day</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Courses</span><span className="cs-node__sub">Kurser</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Prices</span><span className="cs-node__sub">Priser</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Profile</span><span className="cs-node__sub">Profil: sign-in, activity, classes</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">More</span><span className="cs-node__sub">Mere</span></li>
      </ol>
      </div>
      <figcaption>Five tabs: Schedule, Courses, Prices, Profile and More.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the layout">
      <li>A visitor who is not signed in can still open the schedule and a session page. The session page shows a Log in button where a booking action would be.</li>
      <li>The Google Play data safety section lists no data shared with third parties and encryption in transit.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="stack-title">Platforms and listing details</h2><p className="body-sm">As the listings show in October 2026.</p></div>
      <dl className="cs-stack">
      <div><dt>Platforms</dt><dd><ul className="cs-chips"><li className="chip">iPhone and iPod touch</li><li className="chip">iOS 13.0 or later</li><li className="chip">Android (Google Play)</li></ul></dd></div>
      <div><dt>App Store listing</dt><dd><ul className="cs-chips"><li className="chip">Health &amp; Fitness</li><li className="chip">Free</li><li className="chip">40.4 MB</li><li className="chip">Age rating 4+</li><li className="chip">Version 3.33.0</li></ul></dd></div>
      <div><dt>Google Play listing</dt><dd><ul className="cs-chips"><li className="chip">Health &amp; Fitness</li><li className="chip">500+ downloads</li><li className="chip">Rated for 3+</li><li className="chip">Updated 14 Aug 2026</li></ul></dd></div>
      <div><dt>Product notes</dt><dd><ul className="cs-chips"><li className="chip">Danish interface</li><li className="chip">15 App Store versions, 2.11.3 (Aug 2023) to 3.33.0 (Aug 2026)</li></ul></dd></div>
      <div><dt>Publisher</dt><dd><ul className="cs-chips"><li className="chip">YOGO.DK ApS, Copenhagen</li><li className="chip">Booking-platform publisher; other apps include a reformer studio and a pilates studio</li><li className="chip">Studio site: innercise.dk</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="value-title">Business value</h2><p className="body-sm">What this kind of app enables for a studio.</p></div>
      <ul className="cs-value">
      <li>Gives members the schedule, their courses and their membership in one place on their phone.</li>
      <li>Lets a member find a class or sauna session, see its room and address and check whether it is full.</li>
      <li>Moves routine membership questions, such as renewal and enrolment, into the member's own profile.</li>
      <li>Gives a studio with several sites one schedule that says where each session takes place.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/trading-card-tv-live-auction-marketplace-app/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Trading Card TV: live-stream auctions, marketplace and card trading app</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/aghaz-halal-investing-mobile-app/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Aghaz: halal goal-based investing mobile app for US investors</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need a member or booking app like this?</h2>
      <p className="body-sm">Tell us what members need to do on their phone and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
    </PageShell>
  );
}
