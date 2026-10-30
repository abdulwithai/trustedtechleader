'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Site-wide scroll reveal. Render it once per page (PageShell and the audit landing do).
 *
 * - Adds `js` to <html> (and to `.acs` when present, for the audit page's `.acs.js` selectors).
 *   CSS only hides `[data-reveal]` under `html.js`, so content is visible without JS.
 * - Adds `is-in` to every `[data-reveal]` in the document the first time it scrolls into view,
 *   including elements rendered later (watched with a MutationObserver).
 * - Variants: data-reveal="" (rise), "pop", "left", "right". Stagger with style={{ '--d': 2 }}.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');
    document.querySelectorAll<HTMLElement>('.acs').forEach((el) => el.classList.add('js'));

    const all = () => document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
    if (!('IntersectionObserver' in window)) {
      all().forEach((el) => el.classList.add('is-in'));
      return;
    }
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // Tall blocks can never reach 15% visibility, so they reveal as soon as they enter.
          const tall = e.boundingClientRect.height > window.innerHeight * 0.8;
          if (e.isIntersecting && (e.intersectionRatio >= 0.15 || tall)) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: [0, 0.15] },
    );
    const observe = () =>
      all().forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
