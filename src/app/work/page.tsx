import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import SampleBanner from '@/components/work/SampleBanner';
import { SAMPLE_BUILD } from '@/lib/work/data';
import { SITE } from '@/lib/site';

const title = 'Sample build';
const description =
  'A fictional HVAC follow-up system: missed-call text-back, web form replies, estimate follow-up and review requests. A demonstration, not a client result.';

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
    { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work/` },
  ],
};

export default function WorkPage() {
  return (
    <PageShell>
      <SampleBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Section>
        <p className="eyebrow">Work</p>
        <h1>Sample build</h1>
        <p className="lead">
          This is a demonstration, not client work. &ldquo;Example Heating &amp; Air&rdquo; is a fictional company used to show exactly what
          I set up and the messages it sends.
        </p>
      </Section>
      <Section tone="tint">
        <ul className="work-grid">
          <li>
            <article className="card card--lift work-card">
              <div className="work-card__body">
                <div className="work-card__tags">
                  <span className="pill">HVAC</span>
                  <span className="badge">Sample</span>
                </div>
                <h3><Link href={`/work/${SAMPLE_BUILD.slug}/`}>{SAMPLE_BUILD.name}</Link></h3>
                <p>{SAMPLE_BUILD.summary}</p>
                <span className="work-card__more" aria-hidden="true">Read the sample →</span>
              </div>
            </article>
          </li>
        </ul>
      </Section>
      <SampleBanner />
      <CTABand
        title="Want a system like this for your business?"
        body="Book a 20-minute call and I will walk through what a first week would look like for your company."
      />
    </PageShell>
  );
}
