import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Aghaz: halal investing app | Trusted Tech Leader"
  },
  "description": "A US halal investing app on Google Play: goal-based portfolios, a halal stock screener, a flat fee schedule and a regulated broker behind it.",
  "alternates": {
    "canonical": "/case-studies/aghaz-halal-investing-mobile-app/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Aghaz: halal investing app | Trusted Tech Leader",
    "description": "A US halal investing app on Google Play: goal-based portfolios, a halal stock screener, a flat fee schedule and a regulated broker behind it.",
    "url": "https://trustedtechleader.com/case-studies/aghaz-halal-investing-mobile-app/",
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
    "title": "Aghaz: halal investing app | Trusted Tech Leader",
    "description": "A US halal investing app on Google Play: goal-based portfolios, a halal stock screener, a flat fee schedule and a regulated broker behind it.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Described from the public store listing.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Aghaz: halal goal-based investing mobile app for US investors\",\"description\":\"A US halal investing app on Google Play: goal-based portfolios, a halal stock screener, a flat fee schedule and a regulated broker behind it.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Mobile apps\",\"url\":\"https://trustedtechleader.com/case-studies/aghaz-halal-investing-mobile-app/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/aghaz-halal-investing-mobile-app/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Aghaz: halal goal-based investing mobile app for US investors\",\"item\":\"https://trustedtechleader.com/case-studies/aghaz-halal-investing-mobile-app/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Aghaz: halal goal-based investing mobile app for US investors</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="mobile-apps">Case study · Mobile apps</p>
      <h1 id="cs-title" className="h1-md">Aghaz: halal goal-based investing mobile app for US investors</h1>
      <p className="lead">A US halal investing app on Google Play: goal-based portfolios, a halal stock screener, a flat fee schedule and a regulated broker behind it.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Fintech: halal (Sharia-compliant) investing</dd></div>
      <div><dt>Category</dt><dd>Mobile apps</dd></div>
      <div><dt>Scope</dt><dd>One Android app, described from its public <a href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">Google Play listing</a> as of October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>US-based Muslims who want to save for personal goals through investments that follow Islamic principles. The listing says Aghaz is for &quot;US-based Muslims&quot;.</dd></div>
      <div className="cell"><dt>Core platform</dt><dd>An Android app on Google Play in the Finance category, published under the developer name Manzil Inc. The listing links to a website, aghazinvest.com.</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>Investing is organised around goals (up to 10 per customer, by the listing), with portfolios the listing calls Sharia compliant, a halal stock screener, and a plain fee: 0.49% a year plus $2 a month, as listed.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What the app does</a></li>
      <li><a href="#features">Key features</a></li>
      <li><a href="#structure">How the service is structured</a></li>
      <li><a href="#stack">Platform and listing details</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live app</h2>
      <p>Three of the screenshots on the Google Play listing, as shown in October 2026: the launch screen, the goal picker and the portfolio view. Each opens the listing.</p>
      </div>
      <div className="cs-shots">
      <figure className="cs-shot">
      <a className="cs-shot__link" href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Google Play: Aghaz</span></div>
      <img src="/case-studies/aghaz-halal-investing-mobile-app/launch.jpg" width="508" height="1100" loading="lazy" alt="Aghaz Google Play screenshot captured in October 2026: a phone showing a dark blue launch screen with a geometric pattern and the Aghaz Investments logo, under the heading Invest without compromise." />
      </a>
      <figcaption><b><a href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">Aghaz: launch screen</a></b> A dark blue splash screen with an Islamic-style geometric pattern and the Aghaz Investments logo.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Google Play: Aghaz</span></div>
      <img src="/case-studies/aghaz-halal-investing-mobile-app/goals.jpg" width="508" height="1100" loading="lazy" alt="Aghaz Google Play screenshot captured in October 2026: a tilted phone showing a Create Goals list with Hajj, Vacation, New Car, Business, Renovation, Donation, Marriage and Custom Goal, under the heading Start saving for your dream with goal based investing." />
      </a>
      <figcaption><b><a href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">Aghaz: goal picker</a></b> A list of template goals (Hajj, Vacation, New Car, Business, Renovation, Donation, Marriage and Custom Goal) with a View More button.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Google Play: Aghaz</span></div>
      <img src="/case-studies/aghaz-halal-investing-mobile-app/portfolio.jpg" width="508" height="1100" loading="lazy" alt="Aghaz Google Play screenshot captured in October 2026: a hand holding a phone that shows a Your Investment Portfolio screen listing asset groups, under the heading Fully managed portfolios powered by AI." />
      </a>
      <figcaption><b><a href={"https://play.google.com/store/apps/details?id=com.aghazinvest&hl=en"} rel="noopener" target="_blank">Aghaz: portfolio view</a></b> A portfolio screen that groups holdings by type, such as large-cap stocks, ETFs, REITs, Sukuk, precious metals and cash.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>Many investors in the US want their money to follow their religious beliefs. For Muslim investors that means avoiding holdings that conflict with Sharia (Islamic law). Screening holdings for that takes time.</p>
      <p>The product also sits in a regulated field. It has to say clearly who gives the advice, who holds the securities and what it costs, and it must keep to financial rules in everything it says. An app like this has to earn trust before it asks anyone to deposit money.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What the app does</h2></div>
      <div className="cs-prose">
      <p>Per the listing, Aghaz is a goals-based investment adviser in an app. A member signs up, answers a few questions about their investing style, then funds a primary account or creates a goal. For each goal, the member sets the purpose, the amount to save and the date it is due. The listing says software then builds a portfolio for that goal.</p>
      <p>The listing says the portfolios follow Islamic principles, and that they are certified by IdealRatings (a Sharia-screening data firm) against AAOIFI standards (a body that publishes Islamic finance standards) and reviewed by the company's Sharia scholars.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">As described in the listing's own text, October 2026.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Goal-based investing</h3><p>Customers can create up to 10 goals. The listing gives a first car or a house as examples, and the screenshots show template goals such as Hajj (the pilgrimage to Mecca), Vacation, Business and Marriage, plus a Custom Goal.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Halal portfolios</h3><p>Professionally managed, automated portfolios the listing describes as Sharia compliant. The portfolio screenshot shows holdings grouped as stocks, ETFs (exchange-traded funds), REITs (real-estate investment trusts), Sukuk (Islamic finance certificates), precious metals and cash.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Halal stock screener</h3><p>Members can link other investment accounts, or type in individual stocks, to check whether those holdings fit their values. The listing says access is unlimited for members and that other financial tools are included.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Personalised insights</h3><p>The listing says the app gives real-time insights and recommendations for each goal, so the member can see whether it remains on track.</p></li><li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Stated fee structure</h3><p>The listing states 0.49% of total investment per year plus a $2 monthly subscription fee, described as having no surprises. Fees as listed, October 2026.</p></li></ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="structure" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How the service is structured</h2></div>
      <p>How the service fits together, as described in the listing.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Sign-up and investing questions, Goals, Halal portfolios, Screener and insights, Regulated parties">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sign-up</span><span className="cs-node__sub">register, answer investing-style questions</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Goals</span><span className="cs-node__sub">purpose, amount, due date; up to 10</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Halal portfolios</span><span className="cs-node__sub">built per goal by software</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Screener and insights</span><span className="cs-node__sub">linked accounts, goal tracking</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Regulated parties</span><span className="cs-node__sub">SEC-registered adviser, DriveWealth broker</span></li>
      </ol>
      </div>
      <figcaption>A member signs up and sets goals. Software builds a portfolio per goal, and the screener and insights keep the member informed.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the structure">
      <li>The listing says Aghaz Investment Advisors is registered as an investment adviser with the SEC, and that securities are offered and sold through DriveWealth, a registered broker-dealer and member of FINRA and SIPC.</li>
      <li>Aghaz Investment Advisors gives the advice. DriveWealth handles the securities.</li>
      <li>The listing names IdealRatings and the AAOIFI standard for the halal screening, and adds a review by the company's Sharia scholars.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="stack-title">Platform and listing details</h2><p className="body-sm">Taken from the Google Play listing.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">Available on Android (Google Play)</li><li className="chip">Finance category</li></ul></dd></div>
      <div><dt>Listing</dt><dd><ul className="cs-chips"><li className="chip">Developer: Manzil Inc.</li><li className="chip">Last listing update: 11 Sep 2023 (a bug-fix release)</li><li className="chip">1K+ downloads (Google Play band)</li><li className="chip">Rated for 3+</li></ul></dd></div>
      <div><dt>Data safety</dt><dd><ul className="cs-chips"><li className="chip">No data shared with third parties</li><li className="chip">Data encrypted in transit</li><li className="chip">May collect location and personal info</li></ul></dd></div>
      <div><dt>Regulated parties named</dt><dd><ul className="cs-chips"><li className="chip">SEC-registered adviser</li><li className="chip">DriveWealth (broker-dealer)</li><li className="chip">FINRA and SIPC member</li><li className="chip">IdealRatings screening</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables.</p></div>
      <ul className="cs-value">
      <li>Turns a values requirement (halal investing) into a clear product promise that a customer can check against named standards and parties.</li>
      <li>Frames saving around life goals the customer already has, such as a car, a home, a business or Hajj, rather than around market jargon.</li>
      <li>Puts the regulated structure and the fees up front in the listing, which helps a first-time investor decide whether to trust the app.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/innercise-breathwork-studio-booking-app/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Innercise: iOS and Android member app for a Danish breathwork and sauna studio</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/legal-cali-multi-practice-law-firm-seo/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Legal Cali: WordPress and technical SEO for a multi-practice California law firm</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need a mobile app like this?</h2>
      <p className="body-sm">Tell us what the app needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
    </PageShell>
  );
}
