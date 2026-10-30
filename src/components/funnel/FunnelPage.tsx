import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { SITE_URL } from '@/lib/funnels';
import type { FunnelContent } from '@/lib/funnel-content/types';
import FunnelHero from './FunnelHero';
import StageStrip from './StageStrip';
import OfferParts from './OfferParts';
import ProofBand from './ProofBand';
import Faq from './Faq';
import CtaBand from './CtaBand';
import FunnelJsonLd from './FunnelJsonLd';
import FunnelBehavior from './FunnelBehavior';
import '@/styles/pages/funnel.css';

export function generateFunnelMetadata(content: FunnelContent): Metadata {
  const { title, description, path, ogImageAlt } = content.meta;
  const image = SITE_URL + '/assets/img/og-default.png';
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'Trusted Tech Leader',
      title,
      description,
      url: SITE_URL + path,
      locale: 'en_US',
      images: [{ url: image, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: image, alt: ogImageAlt }],
    },
  };
}

export default function FunnelPage({ content }: { content: FunnelContent }) {
  const { shell } = content;
  return (
    <PageShell funnel={shell.funnel} pageClass={shell.pageClass} current={shell.current} crumb={shell.crumb} footerNote={shell.footerNote}>
      <FunnelJsonLd content={content} />
      <main id="main">
        <FunnelHero content={content} />
        <StageStrip stages={content.stages} />
        <OfferParts parts={content.parts} fee={content.fee} />
        <ProofBand proof={content.proof} />
        <Faq faq={content.faq} />
        <CtaBand cta={content.cta} />
      </main>
      <FunnelBehavior records={content.demo.records} />
    </PageShell>
  );
}
