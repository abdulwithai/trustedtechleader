'use client';

import { useEffect } from 'react';

/* Case studies listing: category filter (progressive enhancement). Without JS the filter stays hidden and every card is shown. */
export default function CaseStudiesBehavior() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>('[data-cs-filter]');
    const grid = document.querySelector<HTMLElement>('[data-cs-grid]');
    if (!bar || !grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.cs-card[data-category]'));
    const chips = Array.from(bar.querySelectorAll<HTMLButtonElement>('button[data-filter]'));
    const count = bar.querySelector<HTMLElement>('[data-cs-count]');
    const empty = document.querySelector<HTMLElement>('[data-cs-empty]');
    if (!cards.length || !chips.length) return;

    const label = (n: number) => (n === 1 ? '1 case study' : n + ' case studies');

    // Hide chips for categories with no cards, so there are no dead filters.
    chips.forEach((c) => {
      const f = c.getAttribute('data-filter');
      if (f === 'all') return;
      if (!cards.some((card) => card.getAttribute('data-category') === f)) c.hidden = true;
    });

    // Show how many case studies each filter holds.
    chips.forEach((c) => {
      const f = c.getAttribute('data-filter');
      const n = f === 'all' ? cards.length : cards.filter((card) => card.getAttribute('data-category') === f).length;
      const badge = document.createElement('span');
      badge.className = 'cs-filter__n';
      badge.textContent = String(n);
      c.appendChild(badge);
    });

    const apply = (filter: string | null) => {
      let shown = 0;
      cards.forEach((card) => {
        const on = filter === 'all' || card.getAttribute('data-category') === filter;
        card.hidden = !on;
        if (on) shown++;
      });
      chips.forEach((c) => {
        c.setAttribute('aria-pressed', c.getAttribute('data-filter') === filter ? 'true' : 'false');
      });
      if (count) count.textContent = 'Showing ' + label(shown);
      if (empty) empty.hidden = shown > 0;
    };

    const handlers = chips.map((c) => {
      const h = () => apply(c.getAttribute('data-filter'));
      c.addEventListener('click', h);
      return h;
    });

    // Optional deep link: /case-studies/#ai-automation
    let initial = 'all';
    const hash = (window.location.hash || '').replace('#', '');
    if (hash && chips.some((c) => !c.hidden && c.getAttribute('data-filter') === hash)) initial = hash;

    bar.hidden = false;
    apply(initial);

    return () => {
      chips.forEach((c, i) => {
        c.removeEventListener('click', handlers[i]);
        c.querySelector('.cs-filter__n')?.remove();
      });
    };
  }, []);

  return null;
}
