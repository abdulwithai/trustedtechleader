'use client';

import { useEffect, useState } from 'react';

/** Mobile menu toggle; also owns `is-open` on the parent header and closes on Escape, nav click and desktop resize. */
export default function NavToggle() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btn = document.querySelector<HTMLButtonElement>('.nav-toggle');
    btn?.closest('.site-header')?.classList.toggle('is-open', open);
  }, [open]);

  useEffect(() => {
    const nav = document.getElementById('site-nav');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        document.querySelector<HTMLButtonElement>('.nav-toggle')?.focus();
      }
    };
    const onNav = (e: Event) => {
      if ((e.target as Element).closest('a')) setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 1101px)');
    const onMq = (m: MediaQueryListEvent) => {
      if (m.matches) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    nav?.addEventListener('click', onNav);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      nav?.removeEventListener('click', onNav);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  return (
    <button
      className="nav-toggle"
      type="button"
      aria-expanded={open}
      aria-controls="site-nav"
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={() => setOpen((o) => !o)}
    >
      <span className="nav-toggle__bars" aria-hidden="true"></span>
    </button>
  );
}
