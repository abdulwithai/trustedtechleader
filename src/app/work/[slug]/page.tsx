import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { Section } from '@/components/Container';
import CTABand from '@/components/CTABand';
import ConceptBanner from '@/components/work/ConceptBanner';
import { CASE_STUDIES, getCaseStudy } from '@/lib/work/data';
import { SITE } from '@/lib/site';
import '@/styles/work.css';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const title = `${c.name}: ${c.neighborhood} ${c.industry} ${c.isConcept ? 'Concept' : 'Case Study'}`;
  const description = `${c.isConcept ? 'Concept piece, fictional business. ' : ''}${c.summary}`;
  return { title, description, alternates: { canonical: `/work/${c.slug}/` }, openGraph: { title, description, url: `/work/${c.slug}/` } };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work/` },
      { '@type': 'ListItem', position: 3, name: c.name, item: `${SITE.url}/work/${c.slug}/` },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {c.isConcept ? <ConceptBanner /> : null}

      <Section className="case-hero">
        <p className="eyebrow"><a href="/work/">Work</a> / {c.neighborhood}</p>
        <h1>{c.name}</h1>
        <p className="work-card__tags">
          <span className="pill">{c.neighborhood}</span>
          {c.isConcept ? <span className="badge">Concept</span> : null}
        </p>
        <p className="lead">{c.summary}</p>
        <div className="case-hero__cover">Cover placeholder<br />Real photography and screenshots will go here. No stock or AI images.</div>
      </Section>

      <Section>
        <dl className="case-meta">
          <div><dt>Industry</dt><dd>{c.industry}</dd></div>
          <div><dt>Neighborhood</dt><dd>{c.neighborhood}</dd></div>
          <div><dt>Partnership start</dt><dd>{c.startDate}</dd></div>
          <div><dt>Current tier</dt><dd>{c.tier}</dd></div>
        </dl>
      </Section>

      <Section narrow>
        <h2>The challenge</h2>
        <p>{c.problem}</p>
        <h2>What we would build</h2>
        <ul>{c.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
        <p className="small muted">Voice: {c.voice}. Planned content volume: {c.mediaPlan.reels} Reels, {c.mediaPlan.posts} feed posts.</p>
        <h2>How it fits together</h2>
        <p>{c.approach}</p>
      </Section>

      <Section tone="tint">
        <h2>Planned assets</h2>
        <p className="muted">Placeholders only. Nothing has been produced or built for this concept yet.</p>
        <ul className="media-grid">
          {c.mediaLabels.map((m, i) => <li key={`${m}-${i}`}><div>{m}<span>Placeholder</span></div></li>)}
        </ul>
      </Section>

      <Section narrow>
        <h2>Results</h2>
        <p>
          {c.isConcept
            ? 'None. This is a concept, so there are no results to report. When we publish real case studies, every number will be checked against the client’s own analytics and rounded down.'
            : 'Verified results go here.'}
        </p>
        {c.results.length > 0 ? (
          <ul>{c.results.map((r) => <li key={r.label}><strong>{r.value}</strong> {r.label}</li>)}</ul>
        ) : null}
        <h2>Client quote</h2>
        {c.quote ? (
          <blockquote><p>{c.quote.text}</p><footer>{c.quote.name}, {c.quote.role}</footer></blockquote>
        ) : (
          <p>None. There is no client behind this concept, so no one has said anything about it.</p>
        )}
        <h2>Behind the scenes</h2>
        <p>{c.behindTheScenes}</p>
        <div className="case-actions">
          <a className="btn btn--secondary" href="/work/">See more growth work →</a>
        </div>
        <p className="caption muted case-credit">Photo credits: none yet. Real case studies credit our Charlotte production partner for each photo.</p>
      </Section>

      <CTABand
        title="Want a plan like this for your business?"
        body="Book a 20-minute call and we will talk through what a first month would look like."
      />
    </PageShell>
  );
}
