'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES, NEIGHBORHOODS, type Neighborhood } from '@/lib/work/data';
import '@/styles/work.css';

/** Neighborhood filter. Client state only, so it works on a static export. */
export default function WorkGallery() {
  const [active, setActive] = useState<Neighborhood | 'All'>('All');
  const shown = CASE_STUDIES.filter((c) => active === 'All' || c.neighborhood === active);
  const hasWork = (n: Neighborhood) => CASE_STUDIES.some((c) => c.neighborhood === n);

  return (
    <>
      <ul className="work-filter" aria-label="Filter by Charlotte neighborhood">
        <li>
          <button type="button" className="work-filter__btn" aria-pressed={active === 'All'} onClick={() => setActive('All')}>All</button>
        </li>
        {NEIGHBORHOODS.map((n) => (
          <li key={n}>
            <button
              type="button"
              className="work-filter__btn"
              aria-pressed={active === n}
              disabled={!hasWork(n)}
              title={hasWork(n) ? undefined : 'Coming soon'}
              onClick={() => setActive(n)}
            >
              {n}
              {hasWork(n) ? '' : ' (soon)'}
            </button>
          </li>
        ))}
      </ul>
      <p className="visually-hidden" aria-live="polite">{shown.length} {shown.length === 1 ? 'project' : 'projects'} shown</p>
      {shown.length === 0 ? (
        <p className="work-empty muted">No work in this neighborhood yet.</p>
      ) : (
        <ul className="work-grid">
          {shown.map((c) => (
            <li key={c.slug}>
              <article className="card card--lift work-card">
                <div className="work-card__thumb">Concept sample<br />photo and Reel thumbnails coming</div>
                <div className="work-card__body">
                  <div className="work-card__tags">
                    <span className="pill">{c.neighborhood}</span>
                    {c.isConcept ? <span className="badge">Concept</span> : null}
                  </div>
                  <h3><Link href={`/work/${c.slug}/`}>{c.name}</Link></h3>
                  <p className="small muted">{c.industry}</p>
                  <p>{c.summary}</p>
                  <span className="work-card__more" aria-hidden="true">Read the concept →</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
