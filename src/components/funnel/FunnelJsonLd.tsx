import { SITE_URL } from '@/lib/funnels';
import type { FunnelContent } from '@/lib/funnel-content/types';

function Ld({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function FunnelJsonLd({ content }: { content: FunnelContent }) {
  const { meta, faq } = content;
  const url = SITE_URL + meta.path;
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url + '#webpage',
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { '@type': 'WebSite', '@id': SITE_URL + '/#website', name: 'Trusted Tech Leader', url: SITE_URL + '/' },
    publisher: {
      '@type': 'Organization',
      '@id': SITE_URL + '/#organization',
      name: 'Trusted Tech Leader',
      url: SITE_URL + '/',
      logo: SITE_URL + '/apple-touch-icon.png',
    },
    inLanguage: 'en-US',
  };
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: meta.breadcrumbName, item: url },
    ],
  };
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
  return (
    <>
      <Ld data={webPage} />
      <Ld data={breadcrumbs} />
      <Ld data={faqPage} />
    </>
  );
}
