import Link from 'next/link';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { BOOKING_URL } from '@/lib/booking';

export const metadata: Metadata = {
  "title": {
    "absolute": "AI automation inside your workflow | Trusted Tech Leader"
  },
  "description": "AI added where it removes repetitive work: drafting, reading, matching and routing, with a person reviewing before it is published.",
  "alternates": {
    "canonical": "/ai-automation/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "AI automation inside your workflow | Trusted Tech Leader",
    "description": "AI added where it removes repetitive work: drafting, reading, matching and routing, with a person reviewing before it is published.",
    "url": "https://trustedtechleader.com/ai-automation/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: ai automation"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "AI automation inside your workflow | Trusted Tech Leader",
    "description": "AI added where it removes repetitive work: drafting, reading, matching and routing, with a person reviewing before it is published.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: ai automation"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-ai-automation" crumb="AI automation" linkedin={false} footerNote={<>Case studies are anonymized: each is described from the codebase, no client is named and no metrics are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/ai-automation/#webpage\",\"url\":\"https://trustedtechleader.com/ai-automation/\",\"name\":\"AI automation inside your workflow | Trusted Tech Leader\",\"description\":\"AI added where it removes repetitive work: drafting, reading, matching and routing, with a person reviewing before it is published.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"AI automation\",\"item\":\"https://trustedtechleader.com/ai-automation/\"}]}" }} />
      <main id="main">
      <section className="section container" aria-labelledby="hero-title">
      <p className="eyebrow eyebrow--dot">AI automation</p>
      <h1 id="hero-title" className="h1-md maxw-prose">AI that works inside the workflow you already have.</h1>
      <p className="lead mt-3 maxw-prose">We add AI to a specific step of your process, such as drafting, reading documents or mapping data, instead of selling a separate chatbot. A person reviews the output where it matters. </p>
      <div className="btn-row mt-4">
      <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
      <a className="btn btn-outline" href="#related">See related case studies</a>
      </div>
      </section>
      <section className="section section-sand" aria-labelledby="included-title">
      <div className="container grid grid-split">
      <h2 id="included-title" className="h2-lg">What's included</h2>
      <ul className="stack">
      <li>AI-drafted content and data mappings with a review step</li>
      <li>Reading PDFs and scanned documents to draft mappings or study content</li>
      <li>AI assistants that can operate your system through its API</li>
      <li>Voice and text AI coaching or support inside an app</li>
      <li>Workflow automation that connects the steps between tools</li>
      <li>Review queues and audit logs where the workflow needs them</li>
      </ul>
      </div>
      </section>
      <section className="section container" aria-labelledby="how-title">
      <h2 id="how-title" className="h2-lg">How we work</h2>
      <div className="grid grid-3 mt-4">
      <div><p className="numeral">i.</p><h3 className="h3-md">Pick one step</h3><p className="body-sm">We find a repetitive step where AI helps and where errors are easy to catch.</p></div>
      <div><p className="numeral">ii.</p><h3 className="h3-md">Build with review</h3><p className="body-sm">The AI output goes to a person to approve before it is published.</p></div>
      <div><p className="numeral">iii.</p><h3 className="h3-md">Extend</h3><p className="body-sm">We add the next step once the first one is working.</p></div>
      </div>
      </section>
      <section className="section container rule-top" id="related" aria-labelledby="related-title">
      <h2 id="related-title" className="h2-lg">Related case studies</h2>
      <div className="grid grid-2 mt-4">
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/supplier-catalog-sync-platform/">Supplier catalog sync platform</Link></h3>
      <p className="body-sm">Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/ai-social-carousel-content-pipeline/">AI social carousel pipeline</Link></h3>
      <p className="body-sm">Turns a short topic into researched copy, branded carousel slides and a PDF, with a review dashboard and weekly planner before publishing.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/local-first-outreach-crm/">Local-first outreach CRM</Link></h3>
      <p className="body-sm">A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.</p>
      </article>
      <article className="card">
      <h3 className="h3-md"><Link href="/case-studies/wellness-training-platform-apps-cms-ai/">Wellness platform with AI coach</Link></h3>
      <p className="body-sm">A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.</p>
      </article>
      </div>
      </section>
      <section className="section section-dark text-center" aria-labelledby="cta-title">
      <div className="container">
      <h2 id="cta-title" className="h2-lg">Show us a step that eats your team&#x27;s time.</h2>
      <div className="btn-row btn-row--center mt-4">
      <a className="btn btn-light btn-lg" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call</a>
      </div>
      </div>
      </section>
      </main>
    </PageShell>
  );
}
