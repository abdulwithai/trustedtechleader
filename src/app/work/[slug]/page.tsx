import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import SampleBanner from '@/components/work/SampleBanner';
import { SAMPLE_BUILDS, getSampleBuild } from '@/lib/work/data';
import { SITE } from '@/lib/site';
import '@/styles/work.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SAMPLE_BUILDS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSampleBuild(slug);
  if (!s) return {};
  const title = `Sample build: ${s.name}`;
  const description = `A fictional example. ${s.summary} Not a real client, and no results are claimed.`;
  return { title, description, alternates: { canonical: `/work/${s.slug}/` }, openGraph: { title, description, url: `/work/${s.slug}/` } };
}

export default async function SampleBuildPage({ params }: Props) {
  const { slug } = await params;
  const s = getSampleBuild(slug);
  if (!s) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work/` },
      { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE.url}/work/${s.slug}/` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SampleBanner />

      <Section className="case-hero">
        <p className="eyebrow"><Link href="/work/">Sample build</Link></p>
        <h1>{s.name}</h1>
        <p className="lead">{s.summary}</p>
      </Section>

      <Section>
        <dl className="case-meta">
          <div><dt>Industry</dt><dd>{s.industry}</dd></div>
          <div><dt>Company</dt><dd>Example Heating &amp; Air (fictional)</dd></div>
          <div><dt>Status</dt><dd>Demonstration</dd></div>
        </dl>
      </Section>

      <Section narrow>
        <h2>The situation (fictional)</h2>
        <ul>{s.situation.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>What gets built</h2>
        {s.builds.map((b, i) => (
          <div key={b.title} style={{ marginTop: 24 }}>
            <h3>{i + 1}. {b.title}</h3>
            <p>{b.summary}</p>
            {b.messages.map((m) => (
              <blockquote key={m.text}>
                <p className="small muted">{m.when}</p>
                <p>{m.text}</p>
              </blockquote>
            ))}
          </div>
        ))}

        <h2>Pipeline stages</h2>
        <ol>{s.pipeline.map((p) => <li key={p}>{p}</li>)}</ol>

        <h2>What the owner sees</h2>
        <p>{s.ownerView}</p>
      </Section>

      <SampleBanner />
      <CTABand
        title="Want a system like this for your business?"
        body="Book a 20-minute call and I will walk through what a first week would look like for your company."
      />
    </PageShell>
  );
}
