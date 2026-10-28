import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import '@/styles/pages/case-studies.css';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "Wade Litigation: location-page SEO | Trusted Tech Leader"
  },
  "description": "A California litigation firm site built on city pages: 20 city hubs and over 200 city-and-practice pages on WordPress, plus an audit.",
  "alternates": {
    "canonical": "/case-studies/wade-litigation-location-pages-seo/"
  },
  "openGraph": {
    "type": "article",
    "siteName": "Trusted Tech Leader",
    "title": "Wade Litigation: location-page SEO | Trusted Tech Leader",
    "description": "A California litigation firm site built on city pages: 20 city hubs and over 200 city-and-practice pages on WordPress, plus an audit.",
    "url": "https://trustedtechleader.com/case-studies/wade-litigation-location-pages-seo/",
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
    "title": "Wade Litigation: location-page SEO | Trusted Tech Leader",
    "description": "A California litigation firm site built on city pages: 20 city hubs and over 200 city-and-practice pages on WordPress, plus an audit.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Wade Litigation: location-page SEO and intake for a California litigation firm\",\"description\":\"A California litigation firm site built on city pages: 20 city hubs and over 200 city-and-practice pages on WordPress, plus an audit.\",\"dateModified\":\"2026-10-17\",\"articleSection\":\"Law firms\",\"url\":\"https://trustedtechleader.com/case-studies/wade-litigation-location-pages-seo/\",\"mainEntityOfPage\":\"https://trustedtechleader.com/case-studies/wade-litigation-location-pages-seo/\",\"author\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies\",\"item\":\"https://trustedtechleader.com/case-studies/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"Wade Litigation: location-page SEO and intake for a California litigation firm\",\"item\":\"https://trustedtechleader.com/case-studies/wade-litigation-location-pages-seo/\"}]}" }} />
      <main id="main">
      <nav className="container cs-crumbs" aria-label="Breadcrumb">
      <ol>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/case-studies/">Case studies</Link></li>
      <li><span aria-current="page">Wade Litigation: location-page SEO and intake for a California litigation firm</span></li>
      </ol>
      </nav>
      <section className="container cs-hero" aria-labelledby="cs-title">
      <p className="eyebrow cs-cat" data-category="law-firms">Case study · Law firms</p>
      <h1 id="cs-title" className="h1-md">Wade Litigation: location-page SEO and intake for a California litigation firm</h1>
      <p className="lead">A statewide litigation firm site organised around cities: 20 city hub pages, more than 200 city-and-practice pages, one shared intake form, and an audit of how the structure holds up.</p>
      <dl className="cs-meta">
      <div><dt>Sector</dt><dd>Legal services: family, civil, probate, business and real estate litigation in California</dd></div>
      <div><dt>Category</dt><dd>Law firms</dd></div>
      <div><dt>Scope</dt><dd>One live WordPress site, reviewed from public pages in October 2026</dd></div>
      </dl>
      </section>
      <section className="container cs-glance" aria-labelledby="glance-title">
      <h2 id="glance-title" className="cs-glance__title">At a glance</h2>
      <dl className="grid grid-hairline">
      <div className="cell"><dt>Who it's for</dt><dd>A litigation firm with offices across California that needs each city, and each practice in that city, to have its own findable page and one clear way to ask for a case evaluation.</dd></div>
      <div className="cell"><dt>Core stack</dt><dd>WordPress, Elementor Pro on the Hello Elementor theme, Yoast SEO Premium, Gravity Forms, WP Rocket, Cloudflare in front of WP Engine</dd></div>
      <div className="cell cs-glance__uvp"><dt>What sets it apart</dt><dd>Location is the main axis of the site: 343 URLs in the page sitemap, 229 of them under /locations/, plus 84 team profiles and 633 blog posts.</dd></div>
      <div className="cell"><dt>On this page</dt><dd>
      <ul className="cs-toc">
      <li><a href="#challenge">Challenge</a></li>
      <li><a href="#solution">What is built</a></li>
      <li><a href="#features">Key pages and structure</a></li>
      <li><a href="#architecture">Technical SEO baseline</a></li>
      <li><a href="#implementation">Audit findings</a></li>
      <li><a href="#stack">Technology stack</a></li>
      <li><a href="#value">Business value</a></li>
      <li><a href="#network">Part of the same site network</a></li>
      </ul>
      </dd></div>
      </dl>
      </section>
      <section className="container cs-showcase" aria-labelledby="show-title">
      <div className="cs-showcase__head">
      <h2 id="show-title">The live site</h2>
      <p>The homepage and one city page, captured in October 2026. Each opens the live page.</p>
      </div>
      <div className="cs-shots cs-shots--inner">
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://wadelitigation.com/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>wadelitigation.com</span></div>
      <img src="/case-studies/wade-litigation-location-pages-seo/home.jpg" width="1440" height="900" loading="lazy" alt="Homepage of Wade Litigation as captured in October 2026: a team photo behind the heading Top Litigation Firm in California, a Get a Free Evaluation button, a 150+ 5 star reviews badge and the phone number in the header." />
      </a>
      <figcaption><b><a href="https://wadelitigation.com/" rel="noopener" target="_blank">Wade Litigation homepage</a></b> A team photo hero with a free-evaluation button, a review badge and a click-to-call number.</figcaption>
      </figure>
      <figure className="cs-shot">
      <a className="cs-shot__link" href="https://wadelitigation.com/locations/san-diego/" rel="noopener" target="_blank">
      <div className="cs-screen__bar"><i></i><i></i><i></i><span>wadelitigation.com/locations/san-diego/</span></div>
      <img src="/case-studies/wade-litigation-location-pages-seo/inner.jpg" width="1440" height="900" loading="lazy" alt="Wade Litigation San Diego city page as captured in October 2026: a team photo banner reading San Diego, CA, a San Diego Litigation Attorneys introduction, and a sidebar with headings for the intake form and the San Diego practice areas." />
      </a>
      <figcaption><b><a href="https://wadelitigation.com/locations/san-diego/" rel="noopener" target="_blank">San Diego city page</a></b> A city hub with local introduction copy, and sidebar headings for the intake form and the San Diego practice areas.</figcaption>
      </figure>
      </div>
      </section>
      <section className="section cs-section" aria-label="Challenge and solution">
      <div className="container">
      <div className="grid grid-split cs-row" id="challenge">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">01</span><h2>The challenge</h2></div>
      <div className="cs-prose">
      <p>People looking for a litigation lawyer search by city and by problem: a divorce lawyer in San Diego, a probate lawyer in Los Angeles. A firm with offices across the state has to answer each of those searches with a page that is clearly about that place and that practice, without turning into hundreds of near-identical pages.</p>
      <p>The same pages also have to build trust with a visitor who is often stressed, and turn that visit into a contact request, whichever page they landed on.</p>
      </div>
      </div>
      <div className="grid grid-split cs-row" id="solution">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">02</span><h2>What is built</h2></div>
      <div className="cs-prose">
      <p>The site uses three layers. A homepage and a handful of practice-area pages sit at the top. Below them, each city has a hub page at /locations/&lt;city&gt;/, and below that each city has its own pages per practice, such as /locations/san-diego/divorce-attorney/. The hub pages we compared open with copy written for that city, then share the same sidebar form, practice list, office list and review block.</p>
      <p>Every page carries the same call to action: a free evaluation through one Gravity Forms intake form, plus a header phone number.</p>
      </div>
      </div>
      </div>
      </section>
      <section className="cs-section" id="features" aria-labelledby="features-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">03</span><h2 id="features-title">Key pages and structure</h2></div>
      <p className="body-sm">Counts come from the page and post sitemaps; the 16 city pages in the main menu were checked one by one.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3>City hub pages</h3><p>The page sitemap lists 20 hubs: the 16 linked from the menu (Alameda, Beverly Hills, Los Angeles, Los Gatos, Merced County, Modesto, Newport Beach, Redondo Beach, Riverside, Sacramento, San Bernardino, San Diego, San Francisco, San Ramon, Santa Cruz County, Walnut Creek) plus Irvine, Palo Alto, Pleasanton and San Jose.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3>City-and-practice pages</h3><p>208 URLs sit one level below a city (20 hubs plus 208 deeper pages is 228; the 229 /locations/ URLs in the page sitemap appear to include the /locations/ index page itself), for example divorce, child support, restraining order, probate and appeals in San Diego. A sampled page runs to about 4,200 words with an FAQ section.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3>Practice-area pages</h3><p>Top-level pages for divorce, custody, family law, civil, business, real estate and probate litigation, and appeals, plus a practice-areas index.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3>Team profiles</h3><p>84 pages under /our-team/, one per person.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">05</span><h3>Proof pages</h3><p>Reviews, testimonials, video reviews, firm awards, press, case results and a firm-videos page. The homepage hero headline reads "Top Litigation Firm in California".</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">06</span><h3>Blog</h3><p>633 posts in the post sitemap, including 74 whose URLs contain "victory", "claims" or "wins", such as case write-ups from past matters.</p></li>
      </ul>
      </div>
      </section>
      <section className="band-dark cs-arch-band" id="architecture" aria-labelledby="arch-title">
      <div className="container">
      <div className="cs-arch-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">04</span><h2 id="arch-title">Technical SEO baseline</h2></div>
      <p>What is in place on the live site, confirmed in the page source, robots.txt (the file that tells search engines which areas to skip), sitemaps and response headers.</p>
      </div>
      <figure className="cs-arch">
      <div className="cs-arch__scroll">
      <ol className="cs-flow" aria-label="5-stage flow: City hub, City-and-practice page, Yoast metadata and schema, Sitemaps and robots, Intake form">
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">City hub</span><span className="cs-node__sub">/locations/&lt;city&gt;/</span></li>
      <li className="cs-node cs-node--accent"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">City-and-practice page</span><span className="cs-node__sub">Service, FAQPage schema</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Yoast SEO Premium</span><span className="cs-node__sub">titles, canonicals, robots meta</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Sitemaps and robots</span><span className="cs-node__sub">page and post sitemaps</span></li>
      <li className="cs-node"><span className="cs-node__n" aria-hidden="true"></span><span className="cs-node__label">Intake form</span><span className="cs-node__sub">Gravity Forms, case-type branching</span></li>
      </ol>
      </div>
      <figcaption>A visitor reaches a city hub or a city-and-practice page, Yoast supplies the metadata and schema, and every page leads to the same intake form.</figcaption>
      <ul className="cs-flow-notes" aria-label="Notes on the baseline">
      <li>Pages checked return a self-referencing canonical (a tag that tells search engines which address is the main one) and a robots meta (a tag that tells search engines whether to index the page) of <code>index, follow, max-image-preview:large</code>. robots.txt has an empty Disallow and lists <code>sitemap_index.xml</code>, which holds a page sitemap and a post sitemap; /sitemap.xml redirects to it.</li>
      <li>The homepage emits JSON-LD (structured data that describes the page to search engines): Organization, two LegalService nodes (Los Gatos and Redondo Beach), WebSite, WebPage, a Person node for the founder and BreadcrumbList. The sampled city-and-practice page emits Service, WebPage, ImageObject, FAQPage and BreadcrumbList. The three city hubs checked emit no JSON-LD.</li>
      <li>The intake form is a single Gravity Forms form that asks for name, email, phone, county and location of the case, then branches by case type (family, civil, probate, business, real estate), a free-text concern, consent to be contacted and how the visitor heard about the firm.</li>
      </ul>
      </figure>
      </div>
      </section>
      <section className="cs-section" id="implementation" aria-labelledby="impl-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">05</span><h2 id="impl-title">Audit findings</h2><p className="body-sm">Reviewed from public pages in October 2026. Where the structure still has room to improve.</p></div>
      <ol className="cs-notes">
      <li><div><h3>Shared blocks on city hubs</h3><p>Comparing San Diego with Modesto, Los Gatos and Beverly Hills, the city introductions are different text, but about 88 to 90 percent of the text lines on the page are identical across them: the review block, services list, office list and form. Local detail beyond the intro and a county list is thin.</p></div></li>
      <li><div><h3>Heading and title patterns</h3><p>Hub H1s (the main page headings) read "San Diego, Ca" and carry no practice words; the descriptive heading is the H2 (second-level heading) below. The San Diego title contains "Blog", the Beverly Hills title is formatted "|Law Office|", and the Modesto page reuses the image alt text "Santa Clara County CA".</p></div></li>
      <li><div><h3>Maps and office details</h3><p>Every hub embeds the same seven office maps, starting with Redondo Beach, rather than a map for its own city. The Modesto hub shows opening hours but a local address could not be confirmed.</p></div></li>
      <li><div><h3>Phone numbers and name</h3><p>The header shows 408-214-5225, the consent text gives 888-909-9430, and the schema lists 866-925-4552, 888-705-5059 and 866-784-2624. A script rewrites the number from a URL parameter, which suggests call tracking, but this could not be confirmed. The brand also appears as "Wade Litigation", "Wade Law Group" and, on a 2011 post, "Wade &amp; Silverstein".</p></div></li>
      <li><div><h3>Schema coverage</h3><p>The three hubs checked have no structured data while the deeper pages do. The homepage describes only two of the seven offices with LegalService, and the "150+ 5 Star Reviews" badge has no review or rating markup behind it.</p></div></li>
      <li><div><h3>Orphaned parent</h3><p>The Fremont city-and-practice pages return 200 and appear in the sitemap, but /locations/fremont/ returns 404, so those eight pages have no hub above them.</p></div></li>
      <li><div><h3>Image alt text</h3><p>12 of 87 images on the rendered homepage and 10 of 68 on the San Diego hub have empty alt text, and some use generic labels such as "google icn", "about image" and "Svg Icon". The Open Graph image (the preview picture shown when a link is shared) is the hero banner video still.</p></div></li>
      <li><div><h3>Redirect chain and testimonials</h3><p>https://www.wadelitigation.com/ redirects to http://wadelitigation.com/ and then to https, two hops where one would do. Testimonials on city hubs show initials only (M.W, R.L, L.S, K.S) in H2 tags, which makes headings that say nothing about the page.</p></div></li>
      <li><div><h3>Bot protection</h3><p>The site sits behind Cloudflare. Headless Chrome and plain requests with a full browser user agent string both returned the pages we reviewed, while a bare short user agent string was challenged with a 403; how a default client or search crawler is treated could not be confirmed. Worth checking that crawlers are not challenged.</p></div></li>
      </ol>
      </div>
      </section>
      <section className="cs-section" id="stack" aria-labelledby="stack-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">06</span><h2 id="stack-title">Technology stack</h2><p className="body-sm">Taken from page source, generator tags and response headers.</p></div>
      <dl className="cs-stack">
      <div><dt>Platform</dt><dd><ul className="cs-chips"><li className="chip">WordPress</li><li className="chip">Elementor 4.3.5</li><li className="chip">Elementor Pro</li><li className="chip">Hello Elementor theme</li></ul></dd></div>
      <div><dt>SEO</dt><dd><ul className="cs-chips"><li className="chip">Yoast SEO Premium 28.7</li><li className="chip">JSON-LD schema</li><li className="chip">XML sitemaps</li></ul></dd></div>
      <div><dt>Leads and analytics</dt><dd><ul className="cs-chips"><li className="chip">Gravity Forms</li><li className="chip">ActiveCampaign forms</li><li className="chip">Google Analytics (Premium plugin)</li><li className="chip">Facebook Pixel</li><li className="chip">UTM capture</li></ul></dd></div>
      <div><dt>Speed and hosting</dt><dd><ul className="cs-chips"><li className="chip">WP Rocket 3.23</li><li className="chip">WP Engine</li><li className="chip">Cloudflare</li></ul></dd></div>
      </dl>
      </div>
      </section>
      <section className="section-sand cs-value-sec" id="value" aria-labelledby="value-title">
      <div className="container grid grid-split">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">07</span><h2 id="value-title">Business value</h2><p className="body-sm">What the setup enables. No ranking or traffic numbers are claimed.</p></div>
      <ul className="cs-value">
      <li>Gives every city, and every practice in that city, its own indexable URL with a self-referencing canonical.</li>
      <li>Keeps one intake form and one set of proof blocks across the whole site, so a change appears to be made once.</li>
      <li>Offers deeper pages with FAQ and service markup that may answer specific local questions.</li>
      <li>Turns the audit into a short list: fix the orphaned Fremont pages, add local detail and schema to hubs, and tidy titles and alt text.</li>
      </ul>
      </div>
      </section>
      <section className="cs-section" id="network" aria-labelledby="network-title">
      <div className="container">
      <div className="cs-features-head">
      <div className="cs-sec-head"><span className="cs-index" aria-hidden="true">08</span><h2 id="network-title">Part of the same site network</h2></div>
      <p className="body-sm">Four related California legal sites reviewed the same way.</p>
      </div>
      <ul className="grid grid-hairline cs-features">
      <li className="cell cs-feature"><span className="cs-feature__n">01</span><h3><Link href="/case-studies/legal-cali-multi-practice-law-firm-seo/">Legal Cali</Link></h3><p>Multi-practice law firm SEO.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">02</span><h3><Link href="/case-studies/awarded-attorneys-civil-litigation-seo/">Awarded Attorneys</Link></h3><p>WordPress and technical SEO for a civil litigation brand.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">03</span><h3><Link href="/case-studies/california-probate-attorneys-niche-seo/">California Probate Attorneys</Link></h3><p>Niche WordPress SEO for a probate-only site.</p></li>
      <li className="cell cs-feature"><span className="cs-feature__n">04</span><h3><Link href="/case-studies/california-civil-attorneys-service-page-seo/">California Civil Attorneys</Link></h3><p>Service-page SEO for a civil litigation site.</p></li>
      </ul>
      </div>
      </section>
      <nav className="container cs-pager" aria-labelledby="pager-title">
      <div className="cs-pager__head">
      <h2 id="pager-title">More case studies</h2>
      <Link href="/case-studies/">All case studies</Link>
      </div>
      <div className="cs-pager__grid">
      <Link className="cs-pager__link" href="/case-studies/awarded-attorneys-civil-litigation-seo/" rel="prev"><span className="cs-pager__dir">&larr; Previous</span><span className="cs-pager__title">Awarded Attorneys: WordPress and technical SEO for a civil litigation brand</span></Link>
      <Link className="cs-pager__link cs-pager__link--next" href="/case-studies/california-probate-attorneys-niche-seo/" rel="next"><span className="cs-pager__dir">Next &rarr;</span><span className="cs-pager__title">California Probate Attorneys: niche WordPress SEO for a probate-only site</span></Link>
      </div>
      </nav>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Need SEO and WordPress work like this?</h2>
      <p className="body-sm">Tell us what the site needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a> 
      </section>
      </main>
    </PageShell>
  );
}
