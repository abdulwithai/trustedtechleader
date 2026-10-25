import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Send it: shipping comparison SEO | Trusted Tech Leader"
  },
  "description": "A shipping rate comparison site on WordPress and Elementor: eight service pages, a quote form, a Yoast baseline and an audit of the gaps.",
  "alternates": {
    "canonical": "/case-studies/sendit-shipping-comparison-wordpress-seo/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Send it: shipping comparison SEO | Trusted Tech Leader",
    "description": "A shipping rate comparison site on WordPress and Elementor: eight service pages, a quote form, a Yoast baseline and an audit of the gaps.",
    "url": "https://trustedtechleader.com/case-studies/sendit-shipping-comparison-wordpress-seo/",
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
    "title": "Send it: shipping comparison SEO | Trusted Tech Leader",
    "description": "A shipping rate comparison site on WordPress and Elementor: eight service pages, a quote form, a Yoast baseline and an audit of the gaps.",
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
    <PageShell pageClass="page-case-study" current="/case-studies/" crumb="Case studies" footerNote={<>Described from the live site; no ranking or traffic figures are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Send it: WordPress, Elementor and technical SEO for a global shipping comparison site\",\"description\":\"A shipping rate comparison site on WordPress and Elementor: eight service pages, a quote form, a Yoast baseline and an audit of the gaps.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"WordPress sites\",\"url\":\"https://trustedtechleader.com/case-studies/sendit-shipping-comparison-wordpress-seo/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/sendit-shipping-comparison-wordpress-seo/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Send it: WordPress, Elementor and technical SEO for a global shipping comparison site\",\"item\":\"https://trustedtechleader.com/case-studies/sendit-shipping-comparison-wordpress-seo/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Send it: WordPress, Elementor and technical SEO for a global shipping comparison site</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="wordpress-sites">Case study · WordPress sites</p>
      <h1 id="cs-title" className="h1-md">Send it: WordPress, Elementor and technical SEO for a global shipping comparison site</h1>
      <p className="lead">A shipping rate comparison site on WordPress and Elementor: eight service pages, a quote form, a Yoast baseline and an audit of the gaps.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Logistics: international and domestic shipping rate comparison</dd></div>
      <div><dt>Category</dt><dd>WordPress sites</dd></div>
      <div><dt>Scope</dt><dd>One live WordPress site, <a href="https://senditworld.com/" rel="noopener" target="_blank">senditworld.com</a>, reviewed from public pages in October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>People and businesses who want to send documents, passports, luggage, boxes, pallets, sports gear or bikes, or arrange a move, and want to compare courier prices before booking. The quote form's default currency is AED.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress 7.1.3, Elementor 3.27.1 with Elementor Pro, Hello Elementor theme, Yoast SEO 27.4, WPForms, Contact Form 7, JetTabs and a custom plugin called custom-shipment, plus a client-rendered app on a subdomain</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>One quote form (Ship International or Ship Domestic) repeated on a landing page for each kind of item, with seven courier logos shown. The quote, booking and account steps run in a separate single-page app at app.senditworld.com, which the WordPress pages hand visitors to.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What is built</a></li>
      <li><a href="#features">Key pages and structure</a></li>
      <li><a href="#flow">The booking flow</a></li>
      <li><a href="#architecture">Technical SEO baseline</a></li>
      <li><a href="#implementation">Audit findings</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live site</h2>
      <p>The homepage and the luggage shipping page with its quote form, captured in October 2026. Each opens the live page.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://senditworld.com/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>senditworld.com</span></div>
      <img src="/case-studies/sendit-shipping-comparison-wordpress-seo/home.jpg" width="1440" height="900" loading="lazy" alt="Send it homepage as captured in October 2026: a header with Register and Login buttons, the heading Send it - The Global Shipping Comparison Site and a row of item icons from Document to Bike." />
      </a>
      <figcaption><b><a href="https://senditworld.com/" rel="noopener" target="_blank">Send it: homepage</a></b> A short pitch, then a row of item types (Document, Passport, Boxes, Luggage, Pallets, Sports, Bike) each with a Calculate link, and a headline claim of &quot;Save Up To 80%&quot;.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://senditworld.com/luggage-shipping/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>senditworld.com/luggage-shipping/</span></div>
      <img src="/case-studies/sendit-shipping-comparison-wordpress-seo/inner.jpg" width="1440" height="900" loading="lazy" alt="Send it luggage shipping page as captured in October 2026: a quote form with Ship International and Ship Domestic tabs, send from and deliver to country fields, weight, dimensions and a value field in AED, above a row of courier logos." />
      </a>
      <figcaption><b><a href="https://senditworld.com/luggage-shipping/" rel="noopener" target="_blank">Send it: luggage shipping</a></b> A quote form with Ship International and Ship Domestic tabs, country, weight, size and value fields, and logos for FedEx, DHL, UPS, DPD, SkyNet, Aramex and GLT/Immex.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>A comparison site does not move parcels itself. It has to convince a visitor, quickly, that it can find a cheaper courier price than going direct, and then get that visitor into a quote. The items vary a lot, from a passport envelope to a pallet to a household move, so each needs its own explanation, rules and wording.</p>
      <p>The site also has to say which rates are real. It makes strong promises, and every page has to repeat them clearly while the actual pricing is calculated somewhere else.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The marketing site runs on WordPress with Elementor. A homepage links to eight service landing pages. Each repeats the same layout: a hero with the quote form, courier logos, short explanation blocks, customer reviews and a short FAQ written for that item.</p>
      <p>The form is a plain GET form that sends the visitor to <code>app.senditworld.com/quote</code>. Register, Login and Get A Quote buttons also point to that app, which shows courier results, asks visitors to register or log in, and holds the booking and order screens (see The booking flow below). Yoast SEO writes titles, canonicals, Open Graph tags, schema and the XML sitemaps. The homepage meta description mentions &quot;220+ countries&quot; and &quot;Best rates guaranteed&quot;; these are the site's own claims, not checked here.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key pages and structure</h2></div>
      <p className="body-sm">Counts come from the site's own XML sitemaps and page source, October 2026.</p>
      </div>
      <ul className="grid grid-hairline cs-features"><li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>Service landing pages</h3><p>Eight pages, one per item type: <a href="https://senditworld.com/document-shipping/" rel="noopener" target="_blank">document</a>, <a href="https://senditworld.com/passport-shipping/" rel="noopener" target="_blank">passport</a>, <a href="https://senditworld.com/box-shipping/" rel="noopener" target="_blank">box</a>, <a href="https://senditworld.com/luggage-shipping/" rel="noopener" target="_blank">luggage</a>, <a href="https://senditworld.com/pallet-shipping/" rel="noopener" target="_blank">pallet</a>, <a href="https://senditworld.com/sports-equipment-shipping/" rel="noopener" target="_blank">sports equipment</a>, <a href="https://senditworld.com/bike-shipping/" rel="noopener" target="_blank">bike</a> and <a href="https://senditworld.com/relocation-services/" rel="noopener" target="_blank">relocation services</a>. The homepage links to every one of them in its menu and item row.</p><p className="body-sm">Pattern: <code>/box-shipping/</code>.</p></li><li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>Quote form</h3><p>Ship International and Ship Domestic tabs, send-from and deliver-to country fields, a service choice, weight, length, width, height and a value field in AED. The form's fields are sent in the address as a GET request to the app.</p><p className="body-sm">Quotes are produced on app.senditworld.com, not on the WordPress site.</p></li><li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Trust and rules pages</h3><p><a href="https://senditworld.com/about-us-sendit/" rel="noopener" target="_blank">About</a>, <a href="https://senditworld.com/faq/" rel="noopener" target="_blank">FAQ</a> (45 question entries in its markup, one of them a group heading), <a href="https://senditworld.com/prohibited-items/" rel="noopener" target="_blank">prohibited items</a>, <a href="https://senditworld.com/contact-us/" rel="noopener" target="_blank">contact</a>, <a href="https://senditworld.com/terms-conditions/" rel="noopener" target="_blank">terms and conditions</a> and <a href="https://senditworld.com/privacy-policy/" rel="noopener" target="_blank">privacy policy</a>.</p><p className="body-sm">Prohibited items is a short list page, about 2,000 characters of text.</p></li><li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Blog</h3><p>A <a href="https://senditworld.com/blog/" rel="noopener" target="_blank">blog page</a> with one post: &quot;Packaging Products Tips for Shipping&quot;, dated 11 August 2024. The post sitemap lists that single URL.</p></li><li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Account area</h3><p>Register and Login links go to <code>app.senditworld.com</code>, outside the WordPress site, so those pages are not part of its sitemaps. The sitemaps hold 18 page URLs, 1 post, 1 category and 1 author. No per-country or per-route pages were found.</p></li></ul>
      </div>
      </section>
      <section className="cs-section" id="flow" aria-labelledby="flow-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="flow-title">The booking flow</h2></div>
      <p className="body-sm">From a service page to an order. Each step is marked as seen on public pages or as behind a login that was not viewed. Nothing was submitted and no account was created.</p>
      </div>
      <div className="cs-shots">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://app.senditworld.com/get-a-quote" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>app.senditworld.com/get-a-quote</span></div>
      <img src="/case-studies/sendit-shipping-comparison-wordpress-seo/flow-1-get-a-quote.jpg" width="1440" height="900" loading="lazy" alt="Send it app Get a Quote page as captured in October 2026: a picker for Document, Passport, Suitcase, Box, Bicycle and Pallet, International and Domestic tabs, country, size, weight and AED value fields, and a Prohibited items List link." />
      </a>
      <figcaption><b><a href="https://app.senditworld.com/get-a-quote" rel="noopener" target="_blank">App: get a quote</a></b> The app's own quote page. Its send-from label reads &quot;Send from test&quot;.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://app.senditworld.com/get-a-quote" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>app.senditworld.com/quote</span></div>
      <img src="/case-studies/sendit-shipping-comparison-wordpress-seo/flow-2-packages.jpg" width="1440" height="900" loading="lazy" alt="Send it app Packages page as captured in October 2026: courier cards for FedEx, DHL Express and Aramex with With Insurance and Without Insurance buttons, a price in AED, a delivery time range and a Book button, plus Low Price and High Price sort buttons." />
      </a>
      <figcaption><b><a href="https://app.senditworld.com/get-a-quote" rel="noopener" target="_blank">App: packages (quote result)</a></b> A result page reached by submitting a quote, so the link goes to the quote page. Courier cards each show a price in AED.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://app.senditworld.com/register" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>app.senditworld.com/register</span></div>
      <img src="/case-studies/sendit-shipping-comparison-wordpress-seo/flow-3-register.jpg" width="1440" height="900" loading="lazy" alt="Send it app register page as captured in October 2026: a Welcome panel with first name, last name, email, phone with country code and password fields, and Login and Sign Up buttons." />
      </a>
      <figcaption><b><a href="https://app.senditworld.com/register" rel="noopener" target="_blank">App: register</a></b> First name, last name, email, phone with country code and password, with Login and Sign Up buttons.</figcaption>
      </figure>
      </div>
      <ol className="cs-notes">
      <li><div><h3>1. Quote form on a service page <span className="body-sm">(seen publicly)</span></h3><p>The WordPress item pages carry a form with Ship International and Ship Domestic tabs. It is a GET form to <code>app.senditworld.com/quote</code> with the fields from, to, weight, length, width, height, value, type and sType. The app also has its own Get a Quote page with the same fields and a picker for Document, Passport, Suitcase, Box, Bicycle and Pallet.</p></div></li>
      <li><div><h3>2. Packages: the quote results <span className="body-sm">(seen publicly)</span></h3><p>The results page is titled Packages. It shows one card per courier (FedEx International Priority, DHL Express Worldwide, Aramex Outbound Express and Timex Express were listed). Each card has a With Insurance and Without Insurance toggle, a price in AED, a delivery time range with a note that it is subject to flight delays, weekends, holidays or customs formalities, and a Book button. The page also has Low Price and High Price sorting and an Edit button for the quote. The screenshot shows the site's own prices in AED; they are not discussed or quoted as results.</p></div></li>
      <li><div><h3>3. Account wall: register or log in <span className="body-sm">(seen publicly)</span></h3><p>The register page asks for first name, last name, email, phone with a country code and a password, with Login and Sign Up buttons. Both were left untouched.</p></div></li>
      <li><div><h3>4. Booking, orders and account screens <span className="body-sm">(behind login, not viewed)</span></h3><p>The app's public JavaScript lists routes for booking, order confirmation, order failure, order detail, orders, transactions, addresses, settings and logout, and marks each as needing a signed-in user. Without an account they could not be viewed, so what they show could not be confirmed. The app routes <code>/quote</code> and <code>/get-a-quote</code> are marked as not needing a login, and <code>/login</code>, <code>/register</code> and <code>/reset-password</code> are marked visitor-only.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="arch-title">Technical SEO baseline</h2></div>
      <p>What is in place on senditworld.com and its app subdomain, read from the page source, robots.txt, sitemaps and response headers.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: Service landing pages, Yoast metadata and schema, Quote form and courier logos, Sitemaps and robots.txt, App for quotes, register and login">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Service landing pages</span><span className="cs-node__sub">8 item types, one FAQ each</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Yoast SEO 27.4</span><span className="cs-node__sub">title, canonical, Open Graph, schema</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Quote form and courier data</span><span className="cs-node__sub">GET to app.senditworld.com/quote</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sitemaps and robots.txt</span><span className="cs-node__sub">4 child sitemaps, all bots allowed</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Account and quotes app</span><span className="cs-node__sub">single-page app, robots.txt blocks all</span></li>
      </ol>
      </div>
      <figcaption>Service pages feed Yoast, which writes the metadata, schema and sitemaps. Visitors then fill in the quote form and move to a separate app, rendered in the browser, for rates, registration, login and orders.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the baseline">
      <li>Every public page checked has a canonical tag and Open Graph tags, and a robots meta of &quot;index, follow&quot;. Yoast writes a graph of WebPage, WebSite (with a search action) and Organization. The homepage, the seven item pages, the relocation page and the FAQ also carry FAQPage markup, and the blog post carries Article markup.</li>
      <li>robots.txt allows all crawlers, blocks only <code>/wp-content/uploads/wpforms/</code>, and names <code>/sitemap_index.xml</code>. That index lists post, page, category and author sitemaps.</li>
      <li>The homepage HTML is about 570 KB before compression and about 55 KB compressed. It has 43 script tags (23 of them external files) and 11 stylesheet links. Unknown URLs return a real 404, plain HTTP and the www host redirect with a 301, and <code>/wp-login.php</code> returns 404.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="impl-title">Audit findings</h2><p className="body-sm">Where the site still has room to improve.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Staging address in canonicals</h3><p>The blog page, the blog post, the terms and conditions page and the privacy policy page all have a canonical tag and an Open Graph URL pointing to <code>staging.senditworld.com</code> rather than the live domain. The live and sitemap URLs for these pages are on <code>senditworld.com</code>, so search engines are being told to prefer a different host. This is the most important fix on the list.</p></div></li>
      <li><div><h3>Two H1 headings on most pages</h3><p>The Hello Elementor theme prints the page name as an H1 in the markup, and Elementor adds a second H1 with the visible heading. On the luggage page that is &quot;Luggage Shipping&quot; and &quot;Luggage Shipping Service&quot;, and the same pattern appears on all item pages. On the homepage the only H1 is the text &quot;Home&quot;; it did not show in the captured screenshot, while the visible heading, &quot;Send it - The Global Shipping Comparison Site&quot;, is an H2. The H1 should say what the page is about.</p></div></li>
      <li><div><h3>Missing meta descriptions</h3><p>The sports equipment, prohibited items, terms and conditions and blog pages and the blog post have no meta description tag. Their only description is an automatic Open Graph excerpt from page text, such as &quot;Blogs - Send it Search Search&quot;. The homepage and other service pages have their own, with titles that differ page to page. The about page title repeats the site tagline.</p></div></li>
      <li><div><h3>Repeated copy across service pages</h3><p>The seven item pages share an introduction, the same five customer reviews, and, like the relocation page, the banner &quot;Found A Cheaper Rate? We'll Match the Price!&quot;. Each page does have its own FAQ of five questions. The passport page's meta description and visible heading are written only for UAE to UK shipments.</p></div></li>
      <li><div><h3>Claims without a source</h3><p>The site says &quot;Save Up To 80%&quot;, offers to beat any cheaper rate you find, and cites &quot;220+&quot; destinations. No supporting terms, method or date was found beside these claims, and the terms and conditions page does not mention price matching. They are the site's statements and are not endorsed here.</p></div></li>
      <li><div><h3>Sitemap includes redirects, and thin content</h3><p>The page sitemap lists <code>/our-services/</code>, which redirects with a 301 to the homepage, and <code>/luggage-delivery-service/</code>, which redirects to <code>/luggage-shipping/</code>. Only one blog post exists, dated August 2024, and the post sitemap was last changed that month. There are no per-country or per-route pages.</p></div></li>
      <li><div><h3>The app is a client-rendered shell</h3><p>The raw HTML of <code>app.senditworld.com</code> is a 2 KB shell with the title &quot;Sendit&quot;, an empty app container and a notice that it does not work without JavaScript. After JavaScript runs, the get-a-quote page gets the title &quot;Sendit - Get a Quote&quot;, so titles are set per route in the browser. No meta description, canonical tag, robots meta or H1 was found in the rendered page; the visible &quot;Get a Quote&quot; heading is an H5. Its robots.txt disallows all crawling, and <code>/sitemap.xml</code> returns the app shell, not a sitemap. That suits private account screens, but it means the app's quote pages are not crawlable, so the WordPress pages must carry all the search content.</p></div></li>
      <li><div><h3>Leftover test label</h3><p>The app's get-a-quote page shows the field label &quot;Send from test&quot; where the WordPress form says &quot;Send from&quot;. It appears in the rendered page and in the screenshot above, and looks like a test label left in.</p></div></li>
      <li><div><h3>Images, weight and analytics</h3><p>Every real image tag has an alt attribute, but 47 of 57 on the homepage have an empty one, so descriptive alt text is thin. Item pages are about 1 MB of HTML each, against 570 KB for the homepage. Analytics is present: a Google Tag Manager container and a gtag tag. A reCAPTCHA script loads, and no Cache-Control header was seen on the homepage response. Elementor Pro assets load at version 3.24.2 while Elementor core is 3.27.1.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from the page source and response headers.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress 7.1.3</li><li className="chip">Elementor 3.27.1</li><li className="chip">Elementor Pro</li><li className="chip">Hello Elementor theme</li><li className="chip">JetTabs</li></ul></dd></div>
      <div><dt>SEO</dt><dd><ul className="cs-chips"><li className="chip">Yoast SEO 27.4</li><li className="chip">JSON-LD graph</li><li className="chip">FAQPage markup</li><li className="chip">XML sitemap index</li></ul></dd></div>
      <div><dt>Forms and quotes</dt><dd><ul className="cs-chips"><li className="chip">WPForms</li><li className="chip">Contact Form 7</li><li className="chip">custom-shipment plugin</li><li className="chip">Quote app on a subdomain</li><li className="chip">reCAPTCHA</li></ul></dd></div>
      <div><dt>Tracking and hosting</dt><dd><ul className="cs-chips"><li className="chip">Google Tag Manager</li><li className="chip">Google tag (gtag)</li><li className="chip">Apache 2.4.52 on Ubuntu</li><li className="chip">Gzip responses</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">08</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables. No ranking, traffic or lead numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives each kind of shipment its own page, form and FAQ, so a search for one item type can land on a page about it.</li>
      <li>Lets a visitor start a quote from any item page without a call, and hands them to an app that calculates rates.</li>
      <li>Shows trust cues at the point of decision: seven courier logos, customer reviews and a prohibited-items list.</li>
      <li>Turns the audit above into a short fix list, starting with the staging canonicals, headings, meta descriptions and the sitemap redirects.</li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/spa-fleet-rental-wordpress-woocommerce-seo/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Spa Fleet: WordPress, WooCommerce and technical SEO for a mobile sauna rental business</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/phone-parts-nz-woocommerce-store/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need SEO and WordPress work like this?</h2>
      <p className="body-sm">Tell us what the site needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
    </PageShell>
  );
}
