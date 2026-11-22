import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import WorkGallery from '@/components/work/WorkGallery';
import { SITE } from '@/lib/site';

const title = 'Charlotte Social Media Work by Neighborhood';
const description =
  'Concept samples of Reels and feed content for Charlotte neighborhoods: NoDa, South End and Ballantyne. Real client work will replace them as it is signed off.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/work/' },
  openGraph: { title, description, url: '/work/' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work/` },
  ],
};

export default function WorkPage() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Section>
        <p className="eyebrow">Work</p>
        <h1>Charlotte, one neighborhood at a time.</h1>
        <p className="lead">
          We are new, so we have no client results to show yet. Instead, here are three concept samples that show how we would plan and shoot for
          a business in each neighborhood. Each one is labeled as a concept and none is a real client. Real case studies replace them as clients sign off.
        </p>
      </Section>
      <Section tone="tint">
        <WorkGallery />
      </Section>
      <CTABand
        title="Want your neighborhood on this page?"
        body="Tell us about your business in a 20-minute call. No pitch deck, no pressure."
      />
    </PageShell>
  );
}
