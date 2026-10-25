import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';

export const metadata: Metadata = {
  "title": {
    "absolute": "Web and mobile apps | Trusted Tech Leader"
  },
  "description": "Customer-facing web and mobile apps that run on the same API and admin system as your back office.",
  "alternates": {
    "canonical": "/web-and-mobile-apps/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Web and mobile apps | Trusted Tech Leader",
    "description": "Customer-facing web and mobile apps that run on the same API and admin system as your back office.",
    "url": "https://trustedtechleader.com/web-and-mobile-apps/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: web and mobile apps"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Web and mobile apps | Trusted Tech Leader",
    "description": "Customer-facing web and mobile apps that run on the same API and admin system as your back office.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: web and mobile apps"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-web-and-mobile-apps" crumb="Web and mobile apps" linkedin={false} footerNote={<>Case studies are anonymized: each is described from the codebase, no client is named and no metrics are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/web-and-mobile-apps/#webpage\",\"url\":\"https://trustedtechleader.com/web-and-mobile-apps/\",\"name\":\"Web and mobile apps | Trusted Tech Leader\",\"description\":\"Customer-facing web and mobile apps that run on the same API and admin system as your back office.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Web and mobile apps\",\"item\":\"https://trustedtechleader.com/web-and-mobile-apps/\"}]}" }} />
      <main id="main">
      <section className="section container" aria-labelledby="hero-title">
      <p className="eyebrow eyebrow--dot">Web and mobile apps</p>
      <h1 id="hero-title" className="h1-md maxw-prose">Apps your customers use, on the system your team runs.</h1>
      <p className="lead mt-3 maxw-prose">We build web and mobile apps that share one API and admin dashboard with your back office. Orders and members show up in an admin your team uses.</p>
      <div className="btn-row mt-4">
      <a className="btn btn-primary" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Start a conversation</a>
      <a className="btn btn-outline" href="#related">See related case studies</a>
      </div>
      </section>
      <section className="section section-sand" aria-labelledby="included-title">
      <div className="container grid grid-split">
      <h2 id="included-title" className="h2-lg">What's included</h2>
      <ul className="stack">
      <li>Native or cross-platform mobile apps for iOS and Android</li>
      <li>Web apps and customer portals</li>
      <li>An admin dashboard or CMS for your team</li>
      <li>One API behind the apps and the back office</li>
      <li>Accounts, bookings, ordering and payments where needed</li>
      <li>Build and testing on iOS and Android</li>
      </ul>
      </div>
      </section>
      <section className="section container" aria-labelledby="how-title">
      <h2 id="how-title" className="h2-lg">How we work</h2>
      <div className="grid grid-3 mt-4">
      <div><p className="numeral">i.</p><h3 className="h3-md">Define the journey</h3><p className="body-sm">We agree the key screens and what the back office needs to see.</p></div>
      <div><p className="numeral">ii.</p><h3 className="h3-md">Build app and admin together</h3><p className="body-sm">The app, API and admin dashboard are built against the same data from the start.</p></div>
      <div><p className="numeral">iii.</p><h3 className="h3-md">Build and test on iOS and Android</h3><p className="body-sm">We build and test the app on both platforms.</p></div>
      </div>
      </section>
      <section className="section container rule-top" id="related" aria-labelledby="related-title">
      <h2 id="related-title" className="h2-lg">Related case studies</h2>
      <div className="grid grid-2 mt-4">
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/cafe-ordering-loyalty-mobile-app-and-admin/">Cafe ordering and loyalty app</Link></h3>
      <p className="body-sm">A cafe platform with a mobile app for ordering and rewards, plus an admin dashboard and API, built around a safe card-payment flow.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/wellness-training-platform-apps-cms-ai/">Wellness platform with AI coach</Link></h3>
      <p className="body-sm">A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/innercise-breathwork-studio-booking-app/">Innercise: breathwork studio app</Link></h3>
      <p className="body-sm">A member app for a Danish breathwork and sauna studio: a class schedule, courses, prices and profile, and booking of breathwork and sauna sessions.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/trading-card-tv-live-auction-marketplace-app/">Trading Card TV live auction app</Link></h3>
      <p className="body-sm">A live-stream shopping, auction, marketplace and card-for-card trading app for trading-card collectors on iOS and Android.</p>
      </article>
      </div>
      </section>
      <section className="section section-dark text-center" aria-labelledby="cta-title">
      <div className="container">
      <h2 id="cta-title" className="h2-lg">Tell us what your customers should be able to do.</h2>
      <div className="btn-row btn-row--center mt-4">
      <a className="btn btn-light btn-lg" href="mailto:hello@trustedtechleader.com?subject=Project%20enquiry">Email hello@trustedtechleader.com</a>
      </div>
      </div>
      </section>
      </main>
    </PageShell>
  );
}
