import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import WorkGallery from '@/components/work/WorkGallery';
import ConceptBanner from '@/components/work/ConceptBanner';
import { SITE } from '@/lib/site';

const title = 'Charlotte Growth Work by Neighborhood';
const description =
  'Concept growth plans for Charlotte neighborhoods (NoDa, South End, Ballantyne) showing lead generation, content, CRM and AI automation. Fictional businesses, not real clients.';

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
      <ConceptBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Section>
        <p className="eyebrow">Work</p>
        <h1>Growth plans, one Charlotte neighborhood at a time.</h1>
        <p className="lead">
          We are new, so we have no client results to show yet. Instead, here are three concept plans that show how we would connect lead
          generation, content, CRM and AI automation for a business in each neighborhood. Each one is labeled as a concept and none is a real
          client. Real case studies replace them as clients sign off.
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
