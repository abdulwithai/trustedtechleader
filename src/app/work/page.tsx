import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import SampleBanner from '@/components/work/SampleBanner';
import { SAMPLES } from '@/lib/work/data';
import { SITE } from '@/lib/site';

const title = 'Sample projects';
const description =
  'Two fictional sample projects: a lead follow-up automation and a 30-day social content plan. Demonstrations, not client results.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/work' },
  openGraph: { title, description, url: '/work' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Samples', item: `${SITE.url}/work/` },
  ],
};

export default function WorkPage() {
  return (
    <PageShell>
      <SampleBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Section>
        <p className="eyebrow">Samples</p>
        <h1>Sample projects</h1>
        <p className="lead">
          These are demonstrations, not client work. The businesses are fictional and no results are claimed. They show what I set up and
          what gets produced.
        </p>
      </Section>
      <Section tone="tint">
        <ul className="work-grid">
          {SAMPLES.map((s) => (
            <li key={s.slug}>
              <article className="card card--lift work-card">
                <div className="work-card__body">
                  <div className="work-card__tags">
                    <span className="pill">{s.industry}</span>
                    <span className="badge">Sample</span>
                  </div>
                  <h3><Link href={`/work/${s.slug}/`}>{s.title}</Link></h3>
                  <p>{s.summary}</p>
                  <span className="work-card__more" aria-hidden="true">Read the sample →</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>
      <SampleBanner />
      <CTABand
        title="Want a plan like this for your business?"
        body="Book a 20-minute call and I will walk through what a first deliverable would look like for your company."
      />
    </PageShell>
  );
}
