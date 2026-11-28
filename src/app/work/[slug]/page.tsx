import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import SampleBanner from '@/components/work/SampleBanner';
import { SAMPLES, getSample } from '@/lib/work/data';
import { SITE } from '@/lib/site';
import '@/styles/work.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SAMPLES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSample(slug);
  if (!s) return {};
  const title = `Sample: ${s.title}`;
  const description = `A fictional example. ${s.summary} Not a real client, and no results are claimed.`;
  return { title, description, alternates: { canonical: `/work/${s.slug}/` }, openGraph: { title, description, url: `/work/${s.slug}/` } };
}

export default async function SamplePage({ params }: Props) {
  const { slug } = await params;
  const s = getSample(slug);
  if (!s) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Samples', item: `${SITE.url}/work/` },
      { '@type': 'ListItem', position: 3, name: s.title, item: `${SITE.url}/work/${s.slug}/` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <SampleBanner />

      <Section className="case-hero">
        <p className="eyebrow"><Link href="/work/">Sample projects</Link></p>
        <h1>{s.title}</h1>
        <p className="lead">{s.summary}</p>
      </Section>

      <Section>
        <dl className="case-meta">
          <div><dt>Industry</dt><dd>{s.industry}</dd></div>
          <div><dt>Company</dt><dd>{s.business}</dd></div>
          <div><dt>Status</dt><dd>Demonstration</dd></div>
        </dl>
      </Section>

      {s.kind === 'automation' ? (
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
      ) : (
        <Section narrow>
          <h2>The situation (fictional)</h2>
          <ul>{s.situation.map((item) => <li key={item}>{item}</li>)}</ul>

          <h2>Content pillars</h2>
          <ul>
            {s.pillars.map((p) => (
              <li key={p.title}><strong>{p.title}.</strong> {p.text}</li>
            ))}
          </ul>

          <h2>Weekly rhythm</h2>
          <ul>{s.weeklyRhythm.map((item) => <li key={item}>{item}</li>)}</ul>

          <h2>Short video scripts</h2>
          {s.videoScripts.map((v, i) => (
            <div key={v.hook} style={{ marginTop: 24 }}>
              <h3>Video {i + 1}</h3>
              <blockquote>
                <p><strong>Hook:</strong> {v.hook}</p>
              </blockquote>
              <p><strong>Shots:</strong> {v.shots}</p>
              {v.onScreen ? <p><strong>On-screen text:</strong> {v.onScreen}</p> : null}
              <p><strong>Caption:</strong> {v.caption}</p>
            </div>
          ))}

          <h2>Post ideas</h2>
          <ul>{s.postIdeas.map((item) => <li key={item}>{item}</li>)}</ul>

          <h2>Approval</h2>
          <p>{s.approval}</p>
        </Section>
      )}

      <SampleBanner />
      <CTABand
        title="Want a plan like this for your business?"
        body="Book a 20-minute call and I will walk through what a first deliverable would look like for your company."
      />
    </PageShell>
  );
}
