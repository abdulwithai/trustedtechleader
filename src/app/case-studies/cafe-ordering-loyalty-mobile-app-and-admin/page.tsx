import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Cafe ordering and loyalty app | Trusted Tech Leader"
  },
  "description": "A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.",
  "alternates": {
    "canonical": "/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Cafe ordering and loyalty app | Trusted Tech Leader",
    "description": "A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.",
    "url": "https://trustedtechleader.com/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/",
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
    "title": "Cafe ordering and loyalty app | Trusted Tech Leader",
    "description": "A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Cafe ordering and loyalty platform with mobile app and admin\",\"description\":\"A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Business systems\",\"url\":\"https://trustedtechleader.com/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Cafe ordering and loyalty platform with mobile app and admin\",\"item\":\"https://trustedtechleader.com/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Cafe ordering and loyalty platform with mobile app and admin</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="business-systems">Case study · Business systems</p>
      <h1 id="cs-title" className="h1-md">Cafe ordering and loyalty platform with mobile app and admin</h1>
      <p className="lead">A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Cafe and food service</dd></div>
      <div><dt>Category</dt><dd>Business systems</dd></div>
      <div><dt>Maturity</dt><dd>Code-complete on a feature branch; live card payments await payment-provider keys; a legacy unpaid order endpoint remains; see known gaps</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>Cafe customers who order and collect, and cafe staff and owners who run the menu, orders and rewards.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>Expo and React Native, Node.js and Express, MongoDB, Stripe</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>The server, not the phone, decides what an order costs, and in the app's card checkout a payment can only ever produce one order, even if the app closes mid-checkout.</dd></div>
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
      <p>The customer's cart at checkout, and the staff view of the same order moving through the kitchen.</p>
      </div>
      <figure className="cs-screen" role="group" aria-label="Illustrative cafe ordering screens showing a customer cart with a reward and a staff order board">
      <div className="cs-screen__window">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>Cafe ordering: Harbour Street branch</span></div>
      <div className="cs-screen__body">
      <div className="m-row"><span><span className="m-h">Harbour Street branch</span></span><span><span className="m-pill m-pill--ok">Checkout open</span> <span className="m-pill m-pill--info">Order #1042</span></span></div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card">
      <span className="m-title">Customer cart</span>
      <div className="m-row"><span>Spiced tea latte<br /><small>Large, oat milk</small></span><span>$5.50</span></div>
      <div className="m-row"><span>Almond biscuit<br /><small>Quantity 2</small></span><span>$4.00</span></div>
      <div className="m-row"><span>Free drink reward<br /><small>25 stars, code applied</small></span><span>$0.00</span></div>
      <div className="m-row"><span>Coupon WELCOME10</span><span>-$0.95</span></div>
      <div className="m-row"><span>Tax</span><span>$1.05</span></div>
      <div className="m-row"><span>Total</span><span className="m-total">$9.60</span></div>
      <span className="m-btn m-btn--mt">Pay by card</span>
      </div>
      <div className="m-card">
      <span className="m-title">Staff order board</span>
      <div className="m-row"><span>#1040 Two flat whites</span><span className="m-pill m-pill--ok">Ready</span></div>
      <div className="m-row"><span>#1041 Iced tea, muffin</span><span className="m-pill m-pill--warn">Preparing</span></div>
      <div className="m-row"><span>#1042 Spiced tea latte and 2 more</span><span className="m-pill m-pill--info">Pending</span></div>
      <div className="m-row"><span>One step forward or back, or cancel with a reason</span><span className="m-pill m-pill--info">Guided</span></div>
      </div>
      </div>
      <div className="m-grid m-cols-2 m-card__title">
      <div className="m-card m-card--accent">
      <span className="m-title">Rewards</span>
      <div className="m-row"><span>Stars balance</span><span className="m-total">32</span></div>
      <div className="m-row"><span>Free drink<br /><small>25 stars</small></span><span className="m-pill m-pill--ok">Available</span></div>
      <div className="m-row"><span>Invite a friend<br /><small>Share your referral code</small></span><span className="m-pill m-pill--info">+5 stars</span></div>
      </div>
      <div className="m-card">
      <span className="m-title">Store controls</span>
      <div className="m-row"><span>Pause online checkout</span><span className="m-pill m-pill--ok">Off</span></div>
      <div className="m-row"><span>Refund through the payment provider</span><span className="m-pill m-pill--warn">Admin only</span></div>
      <div className="m-row"><span>Offer banner on the home screen</span><span className="m-pill m-pill--info">Scheduled</span></div>
      </div>
      </div>
      </div>
      </div>
      <figcaption><b>Illustrative screen</b> sample items, prices and codes, not client data</figcaption>
      </figure>
      </section>
      <section className="container cs-story-sec" aria-labelledby="story-title">
      <h2 id="story-title">From menu to pickup</h2>
      <ol className="cs-story">
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><circle className="s-paper" cx="38" cy="30" r="11"></circle><path className="s-stroke" d="M18 90 V72 a20 20 0 0 1 40 0 V90"></path><rect className="s-paper" x="84" y="14" width="46" height="84" rx="8"></rect><rect className="s-fill" x="90" y="24" width="34" height="48" rx="3"></rect><path className="s-amber" d="M98 40 h18 l-2 16 h-14 z"></path><path className="s-stroke" d="M116 44 h4 a4 4 0 0 1 0 8 h-5"></path><rect className="s-blue s-pulse" x="92" y="80" width="30" height="10" rx="5"></rect></svg></div>
      <h3>Sam browses the menu on the phone</h3>
      <p>Sam picks a branch, finds a drink, chooses the size and milk, and adds it to the cart. A coupon or a free reward can go in too.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="12" y="30" width="66" height="44" rx="6"></rect><path className="s-stroke" d="M12 44 H78"></path><rect className="s-fill" x="20" y="56" width="22" height="6" rx="2"></rect><path className="s-stroke s-move" d="M80 52 H108"></path><rect className="s-solid" x="108" y="26" width="42" height="52" rx="5"></rect><path className="s-stroke" d="M116 40 h26 M116 50 h26 M116 60 h16"></path><circle className="s-blue s-pulse" cx="136" cy="84" r="10"></circle><path className="s-tick" d="M131 84 l4 4 l7 -8"></path></svg></div>
      <h3>Paying is checked on the server</h3>
      <p>The app asks the server to set up the payment. The server works out the real price from its own menu, never from what the phone says.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="10" y="20" width="36" height="24" rx="4"></rect><path className="s-stroke" d="M18 32 h20"></path><rect className="s-fill" x="10" y="66" width="36" height="24" rx="4"></rect><path className="s-stroke" d="M18 78 h20"></path><path className="s-stroke s-move" d="M48 32 C76 32 78 55 100 55 M48 78 C76 78 78 55 100 55"></path><rect className="s-paper" x="102" y="36" width="44" height="38" rx="5"></rect><path className="s-stroke" d="M110 48 h28 M110 58 h28 M110 66 h16"></path><circle className="s-amber s-pulse" cx="146" cy="34" r="6"></circle></svg></div>
      <h3>The order arrives even if the app closes</h3>
      <p>Sam pays by card. In the app's card checkout, the order is created once the payment is confirmed, whether the app reports it or the payment provider does.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><rect className="s-paper" x="8" y="30" width="40" height="56" rx="5"></rect><rect className="s-paper" x="60" y="30" width="40" height="56" rx="5"></rect><rect className="s-fill" x="112" y="30" width="40" height="56" rx="5"></rect><rect className="s-amber s-move" x="14" y="38" width="28" height="18" rx="3"></rect><path className="s-stroke" d="M22 66 h12 M68 44 h24 M120 44 h24"></path><circle className="s-blue s-pulse" cx="132" cy="68" r="7"></circle><path className="s-tick" d="M128 68 l3 3 l6 -7"></path></svg></div>
      <h3>The kitchen moves it step by step</h3>
      <p>Staff see the order in the admin dashboard and move it from pending to preparing to ready. Sam's app shows the same steps.</p>
      </li>
      <li>
      <div className="cs-story__art" aria-hidden="true"><svg viewBox="0 0 160 110"><path className="s-amber s-pulse" d="M50 22 l8 17 18 2 -13 12 4 18 -17 -9 -17 9 4 -18 -13 -12 18 -2 z"></path><path className="s-stroke" d="M96 90 H146"></path><rect className="s-fill" x="96" y="84" width="14" height="6"></rect><rect className="s-fill" x="112" y="84" width="14" height="6"></rect><rect className="s-paper" x="128" y="84" width="18" height="6"></rect><path className="s-amber" d="M108 44 h26 l-3 28 h-20 z"></path><path className="s-stroke" d="M134 50 h6 a6 6 0 0 1 0 12 h-8"></path></svg></div>
      <h3>Sam earns stars towards a free drink</h3>
      <p>Each paid order adds stars to Sam's balance. Stars can be spent on a reward, and a refund takes them back.</p>
      </li>
      </ol>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A cafe wants customers to order and pay from their phone, and staff to see each order in a simple queue. It also wants a way to bring people back, such as points towards a free drink, plus coupons and offers it can switch on and off itself.</p>
      <p>The hard part is the money. A phone can be closed, lose signal or be tampered with at any moment, yet one payment must always produce exactly one order, at the price the cafe set. Rewards add a second ledger that must stay correct through double taps, refunds and referral bonuses.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>The solution</h2></div>
      <div className="cs-prose">
      <p>The platform has two parts. A customer mobile app lets people pick a branch, browse the menu, customise a drink, apply a coupon or reward, pay by card and follow the order. An admin dashboard and server let staff manage branches, menu, orders, coupons, rewards and the home-screen offer banner, and refund a payment.</p>
      <p>The server is the single source of truth. It recalculates every price and tax amount itself, creates an order in the app's card checkout only after the payment provider confirms payment, and records stars in an audited ledger so every balance change can be explained.</p>
      </div>
      </div>
      <details className="cs-tech"><summary>For your technical team<small>how it works under the hood</small></summary><div className="cs-tech__body"><figure className="cs-visual"><p className="cs-visual__title">Mechanism: one payment, one order</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 556" role="img" aria-labelledby="cafe-a-t cafe-a-d"><title id="cafe-a-t">Card checkout converging on one order</title><desc id="cafe-a-d">Sequence diagram with four participants: mobile app, admin API, Stripe and MongoDB. Step 1: the app asks the API to create a payment, sending the cart and a unique attempt id. Step 2: the API re-prices the cart from the database and saves a pending checkout with a pre-allocated order id. Step 3: the API creates a Stripe payment intent for the server-side amount. Step 4: the customer pays in the payment sheet, talking to Stripe directly. Step 5: the app asks the API to confirm, and the API re-checks the payment with Stripe. Step 6: Stripe also sends a signed webhook to the API, which runs the same finalize step. Step 7: the finalize step creates the order exactly once, awards stars and sends emails.</desc><defs><marker id="mk-cafe-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker><marker id="mk-cafe-a-s" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow v-arrow--accent" d="M0,0 L10,5 L0,10 z"></path></marker></defs><line className="v-line v-line--soft" x1="150" y1="54" x2="150" y2="542"></line><rect className="v-box" x="75.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="150.0" y="36.0" textAnchor="middle">Mobile app</text><line className="v-line v-line--soft" x1="370" y1="54" x2="370" y2="542"></line><rect className="v-box v-box--accent" x="295.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="370.0" y="36.0" textAnchor="middle">Admin API</text><line className="v-line v-line--soft" x1="590" y1="54" x2="590" y2="542"></line><rect className="v-box" x="515.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="590.0" y="36.0" textAnchor="middle">Stripe</text><line className="v-line v-line--soft" x1="810" y1="54" x2="810" y2="542"></line><rect className="v-box" x="735.0" y="10" width="150" height="44" rx="6"></rect><text className="v-text" x="810.0" y="36.0" textAnchor="middle">MongoDB</text><line className="v-line v-line--accent" x1="152" y1="104" x2="368" y2="104" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="260.0" y="82" textAnchor="middle">Create payment request:</text><text className="v-sub" x="260.0" y="96" textAnchor="middle">cart and attempt id</text><circle className="v-dot" cx="22" cy="104" r="11"></circle><text className="v-text v-text--light" x="22" y="108" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>1</text><line className="v-line v-line--accent" x1="372" y1="170" x2="808" y2="170" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="590.0" y="148" textAnchor="middle">Re-price from the database,</text><text className="v-sub" x="590.0" y="162" textAnchor="middle">save pending checkout</text><circle className="v-dot" cx="22" cy="170" r="11"></circle><text className="v-text v-text--light" x="22" y="174" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>2</text><line className="v-line v-line--accent" x1="372" y1="236" x2="588" y2="236" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="480.0" y="214" textAnchor="middle">Create payment intent for</text><text className="v-sub" x="480.0" y="228" textAnchor="middle">the server-side amount</text><circle className="v-dot" cx="22" cy="236" r="11"></circle><text className="v-text v-text--light" x="22" y="240" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>3</text><line className="v-line v-line--accent" x1="152" y1="302" x2="588" y2="302" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="370.0" y="280" textAnchor="middle">Customer pays in the</text><text className="v-sub" x="370.0" y="294" textAnchor="middle">payment sheet</text><circle className="v-dot" cx="22" cy="302" r="11"></circle><text className="v-text v-text--light" x="22" y="306" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>4</text><line className="v-line v-line--accent" x1="152" y1="368" x2="368" y2="368" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="260.0" y="346" textAnchor="middle">Confirm: re-check the</text><text className="v-sub" x="260.0" y="360" textAnchor="middle">payment with Stripe</text><circle className="v-dot" cx="22" cy="368" r="11"></circle><text className="v-text v-text--light" x="22" y="372" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>5</text><line className="v-line v-line--accent v-line--soft" x1="588" y1="434" x2="372" y2="434" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="480.0" y="412" textAnchor="middle">Signed webhook:</text><text className="v-sub" x="480.0" y="426" textAnchor="middle">same finalize step</text><circle className="v-dot" cx="22" cy="434" r="11"></circle><text className="v-text v-text--light" x="22" y="438" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>6</text><line className="v-line v-line--accent" x1="372" y1="500" x2="808" y2="500" markerEnd="url(#mk-cafe-a-s)"></line><text className="v-sub" x="590.0" y="478" textAnchor="middle">Create the order once,</text><text className="v-sub" x="590.0" y="492" textAnchor="middle">award stars, send emails</text><circle className="v-dot" cx="22" cy="500" r="11"></circle><text className="v-text v-text--light" x="22" y="504" textAnchor="middle" style={{ fontSize: "11px" } as React.CSSProperties}>7</text></svg></div><figcaption>Read top to bottom. In the app's card checkout, the order does not exist until payment is confirmed. The app's confirm call and Stripe's signed webhook both run the same idempotent finalize step, backed by an order id allocated in advance and a unique index on the payment intent id, so whichever arrives first creates the order and the other finds it.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key features</h2></div>
      <p className="body-sm">What the system does, as built in the codebase.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Customer mobile app</h3><p>Tabs for home, cart, rewards, account and event booking (which opens the cafe's web booking page), plus product detail, order tracking and order history. The sign-in session is kept in the device's secure storage.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Customisable menu</h3><p>Branches, categories and products with sizes, milk options, a sugar toggle and one optional extra, each with its own price add-on. Items can be marked unavailable with a short reason shown in the app.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Safe card checkout</h3><p>Card payments through Stripe's payment sheet. The server re-prices the cart, adds tax and, in this flow, creates the order only after payment is confirmed.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Order workflow</h3><p>Pending, preparing, ready and completed, one step at a time, or cancelled with a required reason. Every change records who made it and when. Order emails go to the cafe and the customer when mail is configured.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Rewards and referrals</h3><p>Stars earned on food spend, a signup bonus and a referral bonus, a reward catalogue where free-item rewards can be applied at checkout (fixed-discount rewards are defined but not yet applied at checkout), redemption codes, and per-reward limits.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Coupons and offers</h3><p>Percentage or fixed-amount coupons with a minimum order, a use limit and an expiry date, plus an offer banner carousel on the app's home screen.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">07</span><h3>Admin dashboard</h3><p>A browser dashboard for overview figures, branches, categories, products with image upload, orders, rewards and the offer banner, with a switch to pause online checkout.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">08</span><h3>Refunds that fix the stars</h3><p>Full or partial refunds from the dashboard through Stripe, with the matching stars taken back from the customer's balance.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">How it fits together</h2></div>
      <p>From a tap in the app to a confirmed order and a star balance.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Mobile app, Admin API, Stripe, MongoDB, Admin dashboard">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Mobile app</span><span className="cs-node__sub">Expo, React Native, payment sheet</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Admin API</span><span className="cs-node__sub">Express, JWT, validation, rate limits</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Stripe</span><span className="cs-node__sub">payment intents, refunds, signed webhooks</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">MongoDB</span><span className="cs-node__sub">orders, menu, stars ledger</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Admin dashboard</span><span className="cs-node__sub">static page served by the API</span></li>
      </ol>
      </div>
      <figcaption>The mobile app and the admin dashboard both call one Express API. The API reads and writes MongoDB and talks to Stripe for payments, refunds and webhooks. The dashboard is a static page that the API itself serves.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the flow">
      <li>A payment-provider interface sits in front of Stripe, so the checkout code does not call Stripe directly.</li>
      <li>The app tracks an order by polling the API and can show a local notification when it is ready.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Implementation notes</h2><p className="body-sm">Engineering decisions worth knowing about.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Server-side pricing</h3><p>The server validates the cart, coupon and reward against the database and computes the charged amount. The app's tax figure is labelled as an estimate and mirrors the server's rule.</p></div></li>
      <li><div><h3>Idempotent order creation</h3><p>An order id is pre-allocated when the payment is set up, and a unique sparse index on the payment intent id backs it, so the confirm call and the webhook can race safely. The server re-verifies the payment with Stripe rather than trusting the caller.</p></div></li>
      <li><div><h3>Webhooks that fail closed</h3><p>Webhooks use the raw request body and verify the signature, and are rejected when no webhook secret is set. Processed events are de-duplicated with a unique key.</p></div></li>
      <li><div><h3>Audited stars ledger</h3><p>Every award or deduction passes through one function keyed by a unique reference, so repeats are harmless, and a failed deduction is rolled back. Spending is a guarded atomic decrement that cannot go negative, and a refund reversal is the one case allowed to. A repair routine back-fills a missing signup or referral bonus.</p></div></li>
      <li><div><h3>Redemption safety</h3><p>Redeeming uses a client request id so a double tap replays the same result, claims global and per-user limits atomically and undoes those claims on failure. Codes are stamped with a 30-day expiry, but enforcing expiry is listed as a deferred gap.</p></div></li>
      <li><div><h3>Order status machine</h3><p>Transitions are limited to one step or a cancel, applied with optimistic concurrency so a double click cannot record twice. Older status names are normalised on read instead of rewritten.</p></div></li>
      <li><div><h3>Account and request hardening</h3><p>Accounts lock for 15 minutes after five failed sign-ins. Separate rate limits cover sign-in, payments, coupons, redemptions and admin changes. Helmet headers, query sanitising and a 50 kb body limit are on, and a guard refuses to start a non-production run against the production database host.</p></div></li>
      <li><div><h3>Known gaps</h3><p>An older order endpoint still creates an unpaid order with no payment step; it is kept for other callers and the security tests use it. A fully discounted order under $0.50 cannot go through card checkout, so a cart holding only a free reward is blocked. Apple Pay and Google Pay are accepted but their merchant IDs are placeholders. If a coupon or reward claim fails after payment, the order is still created and only flagged. Deferred per the launch checklist: redemption expiry enforcement, saved payment methods, a remote kill-switch for mobile checkout and richer reward analytics. Tax is one fixed rate and currency is US dollars.</p></div></li>
      <li><div><h3>Scripts and tests</h3><p>Seed and backfill scripts load the menu, an admin and the starting reward. Four test scripts cover security, order status, rewards and Stripe payment flows against a running server and a development database; there is no automated runner.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the project's dependency and config files.</p></div>
      <dl className="cs-stack">
      <div><dt>Mobile app</dt><dd><ul className="cs-chips"><li className="chip">Expo SDK 54</li><li className="chip">React Native</li><li className="chip">React</li><li className="chip">Expo Router</li><li className="chip">TypeScript</li><li className="chip">Stripe React Native SDK</li><li className="chip">Expo Secure Store</li><li className="chip">Expo Notifications</li><li className="chip">Reanimated</li></ul></dd></div>
      <div><dt>API</dt><dd><ul className="cs-chips"><li className="chip">Node.js 20</li><li className="chip">Express</li><li className="chip">TypeScript</li><li className="chip">Mongoose</li><li className="chip">Zod</li><li className="chip">jsonwebtoken</li><li className="chip">bcryptjs</li><li className="chip">Multer</li><li className="chip">Nodemailer</li><li className="chip">Helmet</li><li className="chip">express-rate-limit</li></ul></dd></div>
      <div><dt>Admin UI</dt><dd><ul className="cs-chips"><li className="chip">Static HTML, CSS and JavaScript</li></ul></dd></div>
      <div><dt>Data</dt><dd><ul className="cs-chips"><li className="chip">MongoDB</li></ul></dd></div>
      <div><dt>Payments</dt><dd><ul className="cs-chips"><li className="chip">Stripe</li></ul></dd></div>
      <div><dt>Delivery</dt><dd><ul className="cs-chips"><li className="chip">Docker</li><li className="chip">AWS ECR</li><li className="chip">AWS App Runner</li><li className="chip">Expo EAS Build</li></ul></dd></div>
      </dl>
      <details className="cs-tech"><summary>For your technical team<small>technology layers</small></summary><div className="cs-tech__body"><figure className="cs-visual cs-visual--wide"><p className="cs-visual__title">Technology stack by layer</p><div className="cs-visual__frame"><svg className="cs-svg" viewBox="0 0 900 472" role="img" aria-labelledby="cafe-b-t cafe-b-d"><title id="cafe-b-t">Cafe platform technology stack by layer</title><desc id="cafe-b-d">Layered stack diagram. Mobile app: Expo SDK 54, React Native, React, Expo Router, TypeScript, Stripe React Native SDK, Expo Secure Store, Expo Notifications and Reanimated. API: Node.js 20, Express, TypeScript, Mongoose, Zod, jsonwebtoken, bcryptjs, Multer, Nodemailer, Helmet and express-rate-limit. Admin UI: static HTML, CSS and JavaScript. Data: MongoDB. Payments: Stripe. Delivery: Docker, AWS ECR, AWS App Runner and Expo EAS Build.</desc><defs><marker id="mk-cafe-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path className="v-arrow" d="M0,0 L10,5 L0,10 z"></path></marker></defs><rect className="v-lane" x="8" y="8" width="884" height="96" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="16" width="118" height="80" rx="6"></rect><text className="v-label" x="75" y="60.0" textAnchor="middle">Mobile app</text><rect className="v-box" x="166" y="24" width="99" height="32" rx="6"></rect><text className="v-text" x="215.5" y="44" textAnchor="middle">Expo SDK 54</text><rect className="v-box" x="273" y="24" width="106" height="32" rx="6"></rect><text className="v-text" x="326.0" y="44" textAnchor="middle">React Native</text><rect className="v-box" x="387" y="24" width="56" height="32" rx="6"></rect><text className="v-text" x="415.0" y="44" textAnchor="middle">React</text><rect className="v-box" x="451" y="24" width="99" height="32" rx="6"></rect><text className="v-text" x="500.5" y="44" textAnchor="middle">Expo Router</text><rect className="v-box" x="558" y="24" width="92" height="32" rx="6"></rect><text className="v-text" x="604.0" y="44" textAnchor="middle">TypeScript</text><rect className="v-box" x="658" y="24" width="185" height="32" rx="6"></rect><text className="v-text" x="750.5" y="44" textAnchor="middle">Stripe React Native SDK</text><rect className="v-box" x="166" y="64" width="142" height="32" rx="6"></rect><text className="v-text" x="237.0" y="84" textAnchor="middle">Expo Secure Store</text><rect className="v-box" x="316" y="64" width="149" height="32" rx="6"></rect><text className="v-text" x="390.5" y="84" textAnchor="middle">Expo Notifications</text><rect className="v-box" x="473" y="64" width="92" height="32" rx="6"></rect><text className="v-text" x="519.0" y="84" textAnchor="middle">Reanimated</text><rect className="v-lane" x="8" y="112" width="884" height="96" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="120" width="118" height="80" rx="6"></rect><text className="v-label" x="75" y="164.0" textAnchor="middle">API</text><rect className="v-box" x="166" y="128" width="92" height="32" rx="6"></rect><text className="v-text" x="212.0" y="148" textAnchor="middle">Node.js 20</text><rect className="v-box" x="266" y="128" width="70" height="32" rx="6"></rect><text className="v-text" x="301.0" y="148" textAnchor="middle">Express</text><rect className="v-box" x="344" y="128" width="92" height="32" rx="6"></rect><text className="v-text" x="390.0" y="148" textAnchor="middle">TypeScript</text><rect className="v-box" x="444" y="128" width="77" height="32" rx="6"></rect><text className="v-text" x="482.5" y="148" textAnchor="middle">Mongoose</text><rect className="v-box" x="529" y="128" width="41" height="32" rx="6"></rect><text className="v-text" x="549.5" y="148" textAnchor="middle">Zod</text><rect className="v-box" x="578" y="128" width="106" height="32" rx="6"></rect><text className="v-text" x="631.0" y="148" textAnchor="middle">jsonwebtoken</text><rect className="v-box" x="692" y="128" width="77" height="32" rx="6"></rect><text className="v-text" x="730.5" y="148" textAnchor="middle">bcryptjs</text><rect className="v-box" x="777" y="128" width="63" height="32" rx="6"></rect><text className="v-text" x="808.5" y="148" textAnchor="middle">Multer</text><rect className="v-box" x="166" y="168" width="92" height="32" rx="6"></rect><text className="v-text" x="212.0" y="188" textAnchor="middle">Nodemailer</text><rect className="v-box" x="266" y="168" width="63" height="32" rx="6"></rect><text className="v-text" x="297.5" y="188" textAnchor="middle">Helmet</text><rect className="v-box" x="337" y="168" width="149" height="32" rx="6"></rect><text className="v-text" x="411.5" y="188" textAnchor="middle">express-rate-limit</text><rect className="v-lane" x="8" y="216" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="224" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="248.0" textAnchor="middle">Admin UI</text><rect className="v-box" x="166" y="232" width="243" height="32" rx="6"></rect><text className="v-text" x="287.5" y="252" textAnchor="middle">Static HTML, CSS and JavaScript</text><rect className="v-lane" x="8" y="280" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="288" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="312.0" textAnchor="middle">Data</text><rect className="v-box" x="166" y="296" width="70" height="32" rx="6"></rect><text className="v-text" x="201.0" y="316" textAnchor="middle">MongoDB</text><rect className="v-lane" x="8" y="344" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="352" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="376.0" textAnchor="middle">Payments</text><rect className="v-box" x="166" y="360" width="63" height="32" rx="6"></rect><text className="v-text" x="197.5" y="380" textAnchor="middle">Stripe</text><rect className="v-lane" x="8" y="408" width="884" height="56" rx="8"></rect><rect className="v-box v-box--accent" x="16" y="416" width="118" height="40" rx="6"></rect><text className="v-label" x="75" y="440.0" textAnchor="middle">Delivery</text><rect className="v-box" x="166" y="424" width="63" height="32" rx="6"></rect><text className="v-text" x="197.5" y="444" textAnchor="middle">Docker</text><rect className="v-box" x="237" y="424" width="70" height="32" rx="6"></rect><text className="v-text" x="272.0" y="444" textAnchor="middle">AWS ECR</text><rect className="v-box" x="315" y="424" width="120" height="32" rx="6"></rect><text className="v-text" x="375.0" y="444" textAnchor="middle">AWS App Runner</text><rect className="v-box" x="443" y="424" width="120" height="32" rx="6"></rect><text className="v-text" x="503.0" y="444" textAnchor="middle">Expo EAS Build</text></svg></div><figcaption>The phone app and the browser dashboard both talk to the Express API, which stores data in MongoDB and delegates payments to Stripe. The API ships as a Docker image to AWS App Runner, and the app is built with Expo's build service.</figcaption></figure></div></details>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the system enables. No numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Lets customers order and pay ahead from their phone while staff work from one clear queue.</li>
      <li>Keeps prices under the cafe's control, because the server decides what is charged.</li>
      <li>Avoids duplicate or lost orders when a phone drops out mid-payment.</li>
      <li>Gives the cafe its own loyalty scheme, coupons and offers without a third-party tool.</li>
      <li>Lets staff pause online checkout, mark items unavailable and refund a payment from one dashboard.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/travel-membership-crm-tour-manifest-payments/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Travel membership CRM, tour manifest and payments platform</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/wellness-training-platform-apps-cms-ai/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Wellness training platform: apps, CMS and AI coach</span></Link>
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
