import type { ReactNode } from 'react';

export type FAQItem = { q: string; a: ReactNode };

/** Accessible accordion built on native details/summary (keyboard + screen-reader friendly, works without JS). */
export default function FAQ({ items, className = '' }: { items: FAQItem[]; className?: string }) {
  return (
    <div className={`faq ${className}`.trim()}>
      {items.map((it) => (
        <details className="faq__item" key={it.q}>
          <summary className="faq__q">
            <span>{it.q}</span>
            <svg className="faq__chev" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="faq__a">{typeof it.a === 'string' ? <p>{it.a}</p> : it.a}</div>
        </details>
      ))}
    </div>
  );
}
