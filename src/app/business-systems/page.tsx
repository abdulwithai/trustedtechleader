import ServicePage from '@/components/service/ServicePage';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { businessSystems } from '@/lib/service-content/business-systems';

export const metadata: Metadata = {
  "title": {
    "absolute": "Custom business systems | Trusted Tech Leader"
  },
  "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
  "alternates": {
    "canonical": "/business-systems/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Trusted Tech Leader",
    "title": "Custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
    "url": "https://trustedtechleader.com/business-systems/",
    "locale": "en_US",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "width": 1200,
        "height": 630,
        "alt": "Trusted Tech Leader: business systems"
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Custom business systems | Trusted Tech Leader",
    "description": "Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.",
    "images": [
      {
        "url": "https://trustedtechleader.com/assets/img/og-default.png",
        "alt": "Trusted Tech Leader: business systems"
      }
    ]
  }
};

export default function Page() {
  return (
    <PageShell pageClass="page-business-systems" crumb="Business systems" linkedin={false} footerNote={<>Case studies are anonymized: each is described from the codebase, no client is named and no metrics are claimed.</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://trustedtechleader.com/business-systems/#webpage\",\"url\":\"https://trustedtechleader.com/business-systems/\",\"name\":\"Custom business systems | Trusted Tech Leader\",\"description\":\"Custom CRM, billing, inventory and reporting built as one system around how your business runs, not around a template.\",\"isPartOf\":{\"@type\":\"WebSite\",\"@id\":\"https://trustedtechleader.com/#website\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\"},\"publisher\":{\"@type\":\"Organization\",\"@id\":\"https://trustedtechleader.com/#organization\",\"name\":\"Trusted Tech Leader\",\"url\":\"https://trustedtechleader.com/\",\"logo\":\"https://trustedtechleader.com/apple-touch-icon.png\"},\"inLanguage\":\"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://trustedtechleader.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Business systems\",\"item\":\"https://trustedtechleader.com/business-systems/\"}]}" }} />
      <ServicePage c={businessSystems} />
    </PageShell>
  );
}
