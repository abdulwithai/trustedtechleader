import ServicePage from '@/components/service/ServicePage';
import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { webAndMobileApps } from '@/lib/service-content/web-and-mobile-apps';

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
      <ServicePage c={webAndMobileApps} />
    </PageShell>
  );
}
