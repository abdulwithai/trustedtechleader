import ServicePage from '@/components/service/ServicePage';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { aiAutomation } from '@/lib/service-content/ai-automation';

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
      <ServicePage c={aiAutomation} />
    </PageShell>
  );
}
