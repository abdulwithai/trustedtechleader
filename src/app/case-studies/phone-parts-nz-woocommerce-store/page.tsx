import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Phone Parts NZ: WooCommerce store | Trusted Tech Leader"
  },
  "description": "A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.",
  "alternates": {
    "canonical": "/case-studies/phone-parts-nz-woocommerce-store/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Phone Parts NZ: WooCommerce store | Trusted Tech Leader",
    "description": "A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.",
    "url": "https://trustedtechleader.com/case-studies/phone-parts-nz-woocommerce-store/",
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
    "title": "Phone Parts NZ: WooCommerce store | Trusted Tech Leader",
    "description": "A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Public pages of the store, archived December 2025 to January 2026.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs\",\"description\":\"A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"WordPress sites\",\"url\":\"https://trustedtechleader.com/case-studies/phone-parts-nz-woocommerce-store/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/phone-parts-nz-woocommerce-store/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs\",\"item\":\"https://trustedtechleader.com/case-studies/phone-parts-nz-woocommerce-store/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="wordpress-sites">Case study · WordPress sites</p>
      <h1 id="cs-title" className="h1-md">Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs</h1>
      <p className="lead">A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Retail: phone parts, accessories and repairs</dd></div>
      <div><dt>Category</dt><dd>WordPress sites</dd></div>
      <div><dt>Scope</dt><dd>One public WordPress and WooCommerce store, <a href="https://www.phoneparts.co.nz/" rel="noopener" target="_blank">phoneparts.co.nz</a>, as it stood in archived captures from December 2025 to January 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cs-glance__cell cell"><dt>Who it's for</dt><dd>Phone and tablet owners, repair technicians, resellers and businesses in New Zealand (and, for wholesale, Australia). It sells parts, accessories and repair tools, and also takes repair jobs at a Christchurch address.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress 6.8.3, WooCommerce 10.4.3 and the NitroPack speed plugin, as named in the page source of the 17 January 2026 capture, plus companion plugins for search, wishlists, discounts and payments</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One store serves four audiences from one header: retail shoppers, businesses (PP Business), wholesale buyers (PP Wholesale) and repair customers. A Request a Part form covers items that are not listed.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What is built</a></li>
      <li><a href="#features">Key features</a></li>
      <li><a href="#flow">Business, wholesale and requests</a></li>
      <li><a href="#architecture">How the store fits together</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The store, from the archive</h2>
      <p>The homepage and the wholesale page as archived on 17 January 2026 and 5 December 2025.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://web.archive.org/web/20260117100023/https://www.phoneparts.co.nz/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>phoneparts.co.nz (archived 17 Jan 2026)</span></div>
      <img src="/case-studies/phone-parts-nz-woocommerce-store/home.jpg" width="1100" height="565" loading="lazy" alt="Phone Parts NZ homepage as archived on 17 January 2026: a main menu from Shop by Device to Blogs, and a New Year Deals banner offering 15% off storewide with code NY2026 and a Shop Now button." />
      </a>
      <figcaption><b><a href="https://web.archive.org/web/20260117100023/https://www.phoneparts.co.nz/" rel="noopener" target="_blank">Homepage</a></b> Archived capture, 17 January 2026.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://web.archive.org/web/20251205091920/https://www.phoneparts.co.nz/wholesale/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>phoneparts.co.nz/wholesale/ (archived 5 Dec 2025)</span></div>
      <img src="/case-studies/phone-parts-nz-woocommerce-store/inner.jpg" width="1100" height="665" loading="lazy" alt="Phone Parts NZ wholesale page as archived on 5 December 2025: a main menu, a Wholesale Accounts heading, a list of account benefits and the account criteria." />
      </a>
      <figcaption><b><a href="https://web.archive.org/web/20251205091920/https://www.phoneparts.co.nz/wholesale/" rel="noopener" target="_blank">Wholesale</a></b> Archived capture, 5 December 2025. It lists the benefits and criteria of a wholesale account.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A parts retailer has two problems at once. The range is huge and tied to exact device models, so shoppers must be able to find a part by brand and model. And the customers differ: a person fixing one phone, a repair shop buying in bulk, and a company that wants a supplier.</p>
      <p>The store also sells repair work, not only products, and there will always be parts that are not listed. A single WooCommerce catalogue has to hold all of that without sending each audience through the same checkout.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The public store runs on WordPress with WooCommerce. A &quot;Shop by Device&quot; menu lists 19 brands, from Apple and Samsung to Nothing and One NZ, and a &quot;More Shopping&quot; menu lists 15 wider categories, including Repair Tools, Charging &amp; Cables and Computer Accessories. The homepage shows category tiles with product counts. In the 17 January 2026 capture these read 5290 products for Apple and 9245 for Samsung.</p>
      <p>Around that catalogue sit the other entry points: PP Business and PP Wholesale in a top strip, a Book Repair button, a Request a Part form, account login and signup, reward points, and links to the store's own iOS and Android apps.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">Seen on archived pages dated 5 December 2025 to 17 January 2026.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Device-first navigation</h3><p>A &quot;Shop by Device&quot; menu with 19 brands, and under Apple separate branches for iPhone, iPad, Apple Watch, MacBook and AirPods, each down to model level.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Repair tools range</h3><p>A repair-tools category with sub-categories such as screwdrivers, tool kits, pry tools, spudgers, tweezers and battery testers, and a separate Hydrogel Screen Protectors menu item.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Delivery and rewards strip</h3><p>The homepage says overnight NZ delivery on stocked items ordered before 2pm, free shipping on orders over $150, and reward points. As archived on 17 January 2026.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Accounts, wishlist and promo codes</h3><p>Login and signup forms in the header, a wishlist and a track-order link, and a site-wide promo bar. The archive shows two: XMAS25 (15% off, to Dec 25) and NY2026 (15% off, to Jan 18).</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Business and wholesale pages</h3><p>PP Business is a company-facing page and PP Wholesale describes an application-based account for technicians, resellers and larger buyers.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Request a Part</h3><p>A form for parts that are not in the catalogue, with fields for part, quantity, brand, model and specifications. The page says the team will send a link if the item exists, or try to source it.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Repair service and quote form</h3><p>A repairs page lists smartphone, PC and Mac, laptop and MacBook, iPad and tablet repair and data recovery, with a form that asks for device, brand, model and the fault.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Own mobile apps and blog</h3><p>The homepage links to the store's Google Play and App Store listings and mentions app-only deals. A blog carries posts dated from September to December 2025, and the promo bar moved from XMAS25 (December 2025) to NY2026 (January 2026).</p></li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="flow" aria-labelledby="flow-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="flow-title">Business, wholesale and requests</h2></div>
      <p className="body-sm">What each non-retail entry point showed in its capture.</p>
      </div>
      <ol className="cs-notes">
      <li><div><h3>PP Business <span className="body-sm">(archived 17 January 2026)</span></h3><p>The hero says &quot;Your trusted technology partner&quot; and offers Explore More and Contact Us buttons. The about text says the company was founded in 2012 in Christchurch by Jamie Breeze, who began by repairing phones for friends and family, and that it now supplies repair stores in New Zealand and Australia. Four service blocks follow: Procurement, tech repair, technical support (remote, or on site in Christchurch and nearby) and Reliable Partner.</p></div></li>
      <li><div><h3>PP Wholesale <span className="body-sm">(archived 5 December 2025)</span></h3><p>The page is for technicians, resellers and companies that place larger orders. It lists discounted pricing, wholesale-only deals, bulk hydrogel purchasing, white-label drop shipping and a dedicated wholesale team. The criteria are a purchase commitment that depends on the wholesale level, and being based in New Zealand or Australia. Applications are reviewed: the page says the team will be in touch if one is accepted.</p></div></li>
      <li><div><h3>Request a Part <span className="body-sm">(archived 17 January 2026)</span></h3><p>The form collects name, phone, email, the part wanted, quantity, brand, model, further model information, specifications and details. The page explains what happens next: staff check the database and reply with a link, or pass the request to a product manager, add the part if it can be sourced and notify the customer.</p></div></li>
      <li><div><h3>Repairs and Book Repair <span className="body-sm">(archived 13 January 2026)</span></h3><p>The repairs page describes a four-step process: request a quote, ship the package, receive updates, collect the repaired device. Its repair form asks for company name, name, email, phone, address, device type, brand and model, a fault description and whether the fault is intermittent. The header's Book Repair button points to <code>/repair/</code>.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="arch-title">How the store fits together</h2></div>
      <p>The public structure as it appears from the menus, footer and page source.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Device and category catalogue, Product pages and promo codes, Accounts and rewards, Business, wholesale and requests, Repairs and apps">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Catalogue</span><span className="cs-node__sub">19 brands, 15 wider categories</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">WooCommerce checkout</span><span className="cs-node__sub">cart, promo codes, wishlist</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Accounts and rewards</span><span className="cs-node__sub">login, signup, track order, points</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Business and wholesale</span><span className="cs-node__sub">company page, applied-for accounts</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Requests, repairs, apps</span><span className="cs-node__sub">part form, repair form, iOS and Android</span></li>
      </ol>
      </div>
      <figcaption>Shoppers browse by device or category and check out through WooCommerce. Trade buyers apply for a wholesale account, and anything not listed goes through the Request a Part form or the repair form.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the structure">
      <li>The same header, footer and device menu appear on the homepage, business, wholesale, request-a-part and repairs captures, so every entry point shares one site shell.</li>
      <li>The footer lists opening hours (Monday to Friday 09:30 to 17:30, Saturday 10:00 to 17:00, Sunday closed), a Christchurch address at 3/574 Colombo Street, a store and collection page, delivery, returns and payment information pages, and a note that downloading the apps gives an extra 15% off a first order.</li>
      <li>In January 2016 the store ran on Neto, a hosted ecommerce platform: the archived page loaded its theme and scripts from <code>cdn.neto.com.au</code>.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the page source of the 17 January 2026 capture and the store links.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress 6.8.3</li><li className="chip">WooCommerce 10.4.3</li><li className="chip">NitroPack</li></ul></dd></div>
      <div><dt>Shop plugins</dt><dd><ul className="cs-chips"><li className="chip">Ajax Search for WooCommerce</li><li className="chip">YITH Wishlist</li><li className="chip">YITH Badge Management</li><li className="chip">Back in Stock Notifier</li><li className="chip">Woo Discount Rules</li><li className="chip">Smart Coupons</li><li className="chip">Boost Sales</li></ul></dd></div>
      <div><dt>Payments and marketing</dt><dd><ul className="cs-chips"><li className="chip">Zip payments plugin</li><li className="chip">Google Listings &amp; Ads</li><li className="chip">Google Tag Manager</li><li className="chip">Contact Form 7</li></ul></dd></div>
      <div><dt>Apps and delivery</dt><dd><ul className="cs-chips"><li className="chip">Google Play app</li><li className="chip">App Store app</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables.</p></div>
      <ul className="cs-value">
      <li>Lets a shopper find a part by device and model, then check out, without calling the shop.</li>
      <li>Gives repair shops and companies their own pages and a wholesale application, so trade buyers do not use the retail path.</li>
      <li>Captures demand for parts that are not listed, through the Request a Part form, and turns it into catalogue additions.</li>
      <li>Brings retail, trade and repair work into one site, one account system and one set of delivery and returns pages.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/sendit-shipping-comparison-wordpress-seo/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Send it: WordPress, Elementor and technical SEO for a global shipping comparison site</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/programmatic-seo-page-generation-saas/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Programmatic SEO page generation SaaS</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need a WooCommerce store like this?</h2>
      <p className="body-sm">Tell us what the store needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a> 
      </section>
      </main>
    </PageShell>
  );
}
