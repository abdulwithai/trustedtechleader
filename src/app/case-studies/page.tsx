import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import CaseStudiesBehavior from '@/components/behaviors/CaseStudiesBehavior';
import '@/styles/pages/case-studies.css';

export const metadata: Metadata = {
  "title": {
    "absolute": "Case studies: custom business systems | Trusted Tech Leader"
  },
  "description": "Custom CRM, billing and operations systems for founder-led businesses, described from the code. Also law-firm SEO, WordPress and mobile apps. No invented metrics.",
  "alternates": {
    "canonical": "/case-studies/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Case studies: custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing and operations systems for founder-led businesses, described from the code. Also law-firm SEO, WordPress and mobile apps. No invented metrics.",
    "url": "https://trustedtechleader.com/case-studies/",
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
    "title": "Case studies: custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing and operations systems for founder-led businesses, described from the code. Also law-firm SEO, WordPress and mobile apps. No invented metrics.",
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
    <PageShell pageClass="page-case-studies" current="/case-studies/" crumb="Case studies" footerNote={<>Case studies are anonymized: each is described from the codebase, no client is named and no metrics are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"CollectionPage\",\"@id\":\"https://trustedtechleader.com/case-studies/#webpage\",\"url\":\"https://trustedtechleader.com/case-studies/\",\"name\":\"Case studies: custom business systems | Trusted Tech Leader\",\"description\":\"Custom CRM, billing and operations systems for founder-led businesses, described from the code. Also law-firm SEO, WordPress and mobile apps. No invented metrics.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Case studies: software and legal SEO\",\"item\":\"https://trustedtechleader.com/case-studies/\"}]}" }} />
      <main id="main">
      <section className="container cs-hero" aria-labelledby="hero-title">
      <p className="eyebrow eyebrow--dot">Case studies</p>
      <h1 id="hero-title" className="h1-md">Systems we have built.</h1>
      <p className="lead mt-3">Custom CRM, billing and operations platforms. Described from the evidence, with no invented metrics.</p>
      </section>
      <section className="container cs-list" id="all" aria-labelledby="list-title">
      <h2 id="list-title" className="visually-hidden">All case studies</h2>
      
      <div className="cs-filter" data-cs-filter="" hidden>
      <div className="cs-filter__chips" role="group" aria-label="Filter by category">
      <button className="chip" type="button" data-filter="all" aria-pressed="true">All</button>
      <button className="chip" type="button" data-filter="business-systems" aria-pressed="false">Business systems</button>
      <button className="chip" type="button" data-filter="ai-automation" aria-pressed="false">AI &amp; automation</button>
      <button className="chip" type="button" data-filter="saas-platforms" aria-pressed="false">SaaS platforms</button>
      <button className="chip" type="button" data-filter="mobile-apps" aria-pressed="false">Mobile apps</button>
      <button className="chip" type="button" data-filter="dev-content-tools" aria-pressed="false">Developer &amp; content tools</button>
      <button className="chip" type="button" data-filter="law-firms" aria-pressed="false">Law firms</button>
      <button className="chip" type="button" data-filter="wordpress-sites" aria-pressed="false">WordPress sites</button>
      </div>
      <p className="cs-filter__count" data-cs-count="" aria-live="polite"></p>
      </div>
      <ul className="cs-grid" data-cs-grid="">
      
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Pharmacy retail and distribution</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/multi-tenant-pharmacy-erp-pos/">Multi-tenant pharmacy ERP and POS</Link></h3>
      <p className="cs-card__text">A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO (first expired, first out) inventory and an offline-capable retail point of sale.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Next.js</li>
      <li className="chip">FastAPI</li>
      <li className="chip">PostgreSQL</li>
      <li className="chip">Celery</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Phased MVP; POS and aging reports</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Water treatment and facilities operations</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/ro-plant-monitoring-system/">Water-plant monitoring and reporting system</Link></h3>
      <p className="cs-card__text">A web system for RO and sewage treatment plants: daily operator readings, supervisor dashboards, pressure limits, maintenance and expenses, and print-ready monthly log sheets.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">PHP</li>
      <li className="chip">JavaScript</li>
      <li className="chip">Tailwind CSS</li>
      <li className="chip">SheetJS</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working system; screens from the live app</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Real estate investing</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/property-direct-mail-and-tax-payment-platform/">Property direct mail and tax payment platform</Link></h3>
      <p className="cs-card__text">A Laravel platform for land investors: automated direct-mail offer campaigns, property and sales tracking, tax-payment checks and accounting sync.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Laravel</li>
      <li className="chip">Alpine.js</li>
      <li className="chip">MySQL</li>
      <li className="chip">Stripe</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Established app migrating from legacy code</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Travel membership sales</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/membership-sales-crm-and-billing/">Membership sales CRM, contracts and billing platform</Link></h3>
      <p className="cs-card__text">Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS/email.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Laravel</li>
      <li className="chip">Vue 3</li>
      <li className="chip">MySQL</li>
      <li className="chip">Stripe</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Substantial app; limited automated tests</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Travel membership sales</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/travel-membership-crm-tour-manifest-payments/">Travel membership CRM, tour manifest and payments platform</Link></h3>
      <p className="cs-card__text">Laravel admin system with a household CRM, tour manifest with per-slot capacity and check-in, hosted payment links, dues reporting, commissions and SMS/email campaigns.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Laravel</li>
      <li className="chip">Vue 3</li>
      <li className="chip">Stripe</li>
      <li className="chip">Dialpad</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working system; screens from the live admin account</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="business-systems">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="business-systems">Business systems</span>
      <span>Cafe and food service</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/">Cafe ordering and loyalty platform with mobile app and admin</Link></h3>
      <p className="cs-card__text">A cafe platform with a customer mobile app for ordering and rewards, plus an admin dashboard and API for menu, orders, coupons and refunds, built around a safe card-payment flow.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">React Native</li>
      <li className="chip">Express</li>
      <li className="chip">MongoDB</li>
      <li className="chip">Stripe</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Code-complete; live payments await keys; known gaps listed</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="ai-automation">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="ai-automation">AI &amp; automation</span>
      <span>Health &amp; wellness subscriptions</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/wellness-training-platform-apps-cms-ai/">Wellness training platform: apps, CMS and AI coach</Link></h3>
      <p className="cs-card__text">A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">NestJS</li>
      <li className="chip">Next.js</li>
      <li className="chip">Anthropic</li>
      <li className="chip">Stripe</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Production-style platform; web app partly incomplete</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="ai-automation">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="ai-automation">AI &amp; automation</span>
      <span>Promotional products &amp; apparel supply</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/supplier-catalog-sync-platform/">AI-assisted supplier catalog sync platform</Link></h3>
      <p className="cs-card__text">Connects supplier APIs and feeds to one product and decoration-pricing format, with AI-drafted connector specs and field mappings, script-based connectors and CSV export.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Node.js</li>
      <li className="chip">TypeScript</li>
      <li className="chip">BullMQ</li>
      <li className="chip">PostgreSQL</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">In active development; deployable, with an automated test suite</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="ai-automation">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="ai-automation">AI &amp; automation</span>
      <span>Education technology</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/ai-textbook-study-reader/">AI textbook ingestion and study reader</Link></h3>
      <p className="cs-card__text">Turns scanned textbook chapters into a searchable reader with AI answer cards, glossary links, extracted figures, quizzes and flashcards.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Next.js</li>
      <li className="chip">PostgreSQL</li>
      <li className="chip">Gemini</li>
      <li className="chip">Zod</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">In active development; tested ingestion pipeline</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="ai-automation">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="ai-automation">AI &amp; automation</span>
      <span>Marketing and content creation</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/ai-social-carousel-content-pipeline/">AI social carousel pipeline with approval dashboard</Link></h3>
      <p className="cs-card__text">Turns a short topic into researched copy, branded carousel slides and a PDF, with a review dashboard and weekly planner before anything is published.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Node.js</li>
      <li className="chip">Playwright</li>
      <li className="chip">PostgreSQL</li>
      <li className="chip">Anthropic</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working prototype; one real publish path</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="ai-automation">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="ai-automation">AI &amp; automation</span>
      <span>Video content production</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/ai-video-content-workflow-mcp-server/">MCP server for AI-assisted video content workflow</Link></h3>
      <p className="cs-card__text">An MCP server that lets an AI assistant run a multi-channel video pipeline from research to script, visuals and voiceover using spreadsheets and cloud docs.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Python</li>
      <li className="chip">Model Context Protocol</li>
      <li className="chip">Google Sheets API</li>
      <li className="chip">Google Docs API</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working local system</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="saas-platforms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="saas-platforms">SaaS platforms</span>
      <span>Marketing agencies and SEO</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/programmatic-seo-page-generation-saas/">Programmatic SEO page generation SaaS</Link></h3>
      <p className="cs-card__text">A multi-workspace SaaS that turns CSV data and templates into SEO-checked pages and publishes them straight to WordPress, Shopify, WooCommerce and PrestaShop.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">React</li>
      <li className="chip">Supabase</li>
      <li className="chip">Stripe</li>
      <li className="chip">WordPress</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Active development, CI regression tested</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="saas-platforms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="saas-platforms">SaaS platforms</span>
      <span>Productivity and video communication</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/self-hosted-screen-recorder-extension/">Open-source screen recorder and async video platform with bring-your-own storage</Link></h3>
      <p className="cs-card__text">A Chrome extension records screen, tab or webcam and uploads to an API that keeps video with a storage provider the owner chooses, while a web app handles the library, player, editing and sharing.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Chrome Extension MV3</li>
      <li className="chip">Next.js</li>
      <li className="chip">FastAPI</li>
      <li className="chip">PostgreSQL</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">MIT-licensed open-core repository; tiered plans defined in code</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="mobile-apps">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="mobile-apps">Mobile apps</span>
      <span>Collectibles: live-stream commerce for trading cards</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/trading-card-tv-live-auction-marketplace-app/">Trading Card TV: live-stream auctions, marketplace and card trading app</Link></h3>
      <p className="cs-card__text">A live-stream shopping, auction, marketplace and card-for-card trading app for trading-card collectors on iOS and Android.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">iOS</li>
      <li className="chip">Android</li>
      <li className="chip">Live video</li>
      <li className="chip">In-app purchases</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live app; described from store listings</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="mobile-apps">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="mobile-apps">Mobile apps</span>
      <span>Health &amp; wellness: breathwork and sauna studio</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/innercise-breathwork-studio-booking-app/">Innercise: iOS and Android member app for a Danish breathwork and sauna studio</Link></h3>
      <p className="cs-card__text">A member app for a Danish breathwork and sauna studio: class schedule, courses, prices and profile, with booking of breathwork and sauna sessions.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">iOS</li>
      <li className="chip">Android</li>
      <li className="chip">Class booking</li>
      <li className="chip">Member profile</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live app; described from store listings</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="mobile-apps">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="mobile-apps">Mobile apps</span>
      <span>Fintech: halal (Sharia-compliant) investing</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/aghaz-halal-investing-mobile-app/">Aghaz: halal goal-based investing mobile app for US investors</Link></h3>
      <p className="cs-card__text">A US halal investing app on Android: goal-based portfolios, a halal stock screener and linked investment accounts, with a stated flat fee.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Android</li>
      <li className="chip">Goal tracking</li>
      <li className="chip">Halal stock screener</li>
      <li className="chip">Account linking</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live app; described from store listing</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="dev-content-tools">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="dev-content-tools">Developer &amp; content tools</span>
      <span>Creator tooling and social media</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/multi-platform-short-video-publisher/">Multi-platform short-video publisher with dashboard</Link></h3>
      <p className="cs-card__text">A local command-line tool and dashboard that publishes one vertical video to four social platforms, retrying only the platforms that failed.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">Python</li>
      <li className="chip">PostgreSQL</li>
      <li className="chip">OAuth 2.0 PKCE</li>
      <li className="chip">pytest</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working local tool; unit-tested adapters</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="dev-content-tools">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="dev-content-tools">Developer &amp; content tools</span>
      <span>Sales prospecting &amp; freelance outreach</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/local-first-outreach-crm/">Local-first outreach CRM with self-describing API</Link></h3>
      <p className="cs-card__text">A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">React</li>
      <li className="chip">Fastify</li>
      <li className="chip">SQLite</li>
      <li className="chip">Drizzle ORM</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Working single-user tool; no automated tests</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="law-firms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="law-firms">Law firms</span>
      <span>Legal services, California</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/legal-cali-multi-practice-law-firm-seo/">Legal Cali: WordPress and technical SEO for a multi-practice California law firm</Link></h3>
      <p className="cs-card__text">Multi-practice California firm site with attorney profiles and a service page per practice area, reviewed for its technical SEO baseline and remaining gaps.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor</li>
      <li className="chip">All in One SEO</li>
      <li className="chip">Gravity Forms</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="law-firms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="law-firms">Law firms</span>
      <span>Legal services, California</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/awarded-attorneys-civil-litigation-seo/">Awarded Attorneys: WordPress and technical SEO for a civil litigation brand</Link></h3>
      <p className="cs-card__text">Civil litigation brand covering family, probate, business and real estate matters, with its heading, title and service-page copy issues documented.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor</li>
      <li className="chip">All in One SEO</li>
      <li className="chip">JSON-LD</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="law-firms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="law-firms">Law firms</span>
      <span>Legal services, California</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/wade-litigation-location-pages-seo/">Wade Litigation: location-page SEO and intake for a California litigation firm</Link></h3>
      <p className="cs-card__text">Founder-led firm site with 20 city hub pages, over 200 city-and-practice pages and one shared intake form, reviewed for how they support local search.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor</li>
      <li className="chip">Location pages</li>
      <li className="chip">Gravity Forms</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="law-firms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="law-firms">Law firms</span>
      <span>Legal services, California</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/california-probate-attorneys-niche-seo/">California Probate Attorneys: niche WordPress SEO for a probate-only site</Link></h3>
      <p className="cs-card__text">Probate-only site covering trust disputes, contested wills and estate litigation, with blog focus, heading and form issues documented.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor</li>
      <li className="chip">All in One SEO</li>
      <li className="chip">Gravity Forms</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="law-firms">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="law-firms">Law firms</span>
      <span>Legal services, California</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/california-civil-attorneys-service-page-seo/">California Civil Attorneys: service-page SEO for a civil litigation site</Link></h3>
      <p className="cs-card__text">Civil litigation site with service pages for contract, business and real estate disputes, reviewed for its SEO baseline and remaining gaps.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor</li>
      <li className="chip">All in One SEO</li>
      <li className="chip">Gravity Forms</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="wordpress-sites">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="wordpress-sites">WordPress sites</span>
      <span>Rentals and bookings</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/spa-fleet-rental-wordpress-woocommerce-seo/">Spa Fleet: WordPress, WooCommerce and technical SEO for a mobile sauna rental business</Link></h3>
      <p className="cs-card__text">Mobile sauna rental site with booking, cart, delivery-fee, event and gift-certificate pages, reviewed for its technical SEO baseline and remaining gaps.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">WooCommerce</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="wordpress-sites">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="wordpress-sites">WordPress sites</span>
      <span>Logistics and shipping</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/sendit-shipping-comparison-wordpress-seo/">Send it: WordPress, Elementor and technical SEO for a global shipping comparison site</Link></h3>
      <p className="cs-card__text">Shipping rate comparison site with service pages for documents, luggage, pallets and more, and a quote form on each, reviewed for its technical SEO baseline and remaining gaps.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">Elementor Pro</li>
      <li className="chip">Custom plugin</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      <li className="cs-card" data-category="wordpress-sites">
      <article className="cs-card__inner">
      <div className="cs-card__meta">
      <span className="cs-cat" data-category="wordpress-sites">WordPress sites</span>
      <span>Retail: phone parts, accessories and repairs</span>
      </div>
      <h3 className="cs-card__title"><Link href="/case-studies/phone-parts-nz-woocommerce-store/">Phone Parts NZ: WooCommerce store for phone parts, accessories and repairs</Link></h3>
      <p className="cs-card__text">A New Zealand WooCommerce store for phone parts, tools and repairs, with business and wholesale entry points, a part-request form and a repair form.</p>
      <ul className="cs-chips" aria-label="Key technologies">
      <li className="chip">WordPress</li>
      <li className="chip">WooCommerce</li>
      <li className="chip">NitroPack</li>
      <li className="chip">iOS and Android apps</li>
      </ul>
      <p className="cs-card__foot">
      <span className="cs-card__maturity">Live site; audited from public pages</span>
      <span className="cs-card__more" aria-hidden="true">Read <span>&rarr;</span></span>
      </p>
      </article>
      </li>
      
      </ul>
      <p className="cs-empty" data-cs-empty="" hidden>No case studies in this category yet.</p>
      </section>
      <section className="section-sand cs-principles" aria-labelledby="principles-title">
      <div className="container">
      <h2 id="principles-title" className="visually-hidden">How these case studies are written</h2>
      <div className="grid grid-3 gap-lg">
      <div><p className="numeral">i.</p><h3 className="h3-md">Software builds are anonymized.</h3><p className="body-sm">Titles describe the system, not the business. The law-firm, WordPress and mobile-app case studies are the exception: they cover public sites and apps, so each links to its live site or store listing.</p></div>
      <div><p className="numeral">ii.</p><h3 className="h3-md">Described from the evidence.</h3><p className="body-sm">Software builds are described from the repository. Law-firm sites are described from their public pages, page source and server responses.</p></div>
      <div><p className="numeral">iii.</p><h3 className="h3-md">No invented metrics.</h3><p className="body-sm">Business value is what the system enables. We do not quote numbers the code cannot prove.</p></div>
      </div>
      </div>
      </section>
      <section className="cs-cta" aria-labelledby="cta-title">
      <div>
      <h2 id="cta-title">Have a system like one of these to build?</h2>
      <p className="body-sm">Tell us what it needs to do and we will scope it with you on a call.</p>
      </div>
      <a className="btn btn-dark btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Discuss a build</a> 
      </section>
      </main>
      <CaseStudiesBehavior />
    </PageShell>
  );
}
