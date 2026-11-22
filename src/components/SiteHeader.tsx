'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { NAV, SITE } from '@/lib/site';

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Trusted Tech Leader, home">
      Trusted Tech <span>Leader</span>
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [floatVisible, setFloatVisible] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setFloatVisible(max > 0 && window.scrollY / max >= 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); };
  }, [open]);

  const current = (href: string) => (pathname === href || pathname.startsWith(href + '/') ? 'page' : undefined);

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Logo />
          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav__link" aria-current={current(n.href)}>{n.label}</Link>
            ))}
            <Button href={SITE.bookHref} size="sm">{SITE.bookLabel}</Button>
          </nav>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
          </button>
        </div>
      </header>

      <div id="mobile-menu" className="mobile-menu" hidden={!open} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu__top">
          <Logo />
          <button type="button" className="nav-toggle" aria-label="Close menu" onClick={() => { setOpen(false); toggleRef.current?.focus(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {[...NAV, { href: '/contact', label: 'Contact' }].map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <Button href={SITE.bookHref}>{SITE.bookLabel}</Button>
          <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
        </div>
      </div>

      <Link href={SITE.bookHref} className={`btn btn--primary float-cta${floatVisible && !open ? ' is-visible' : ''}`} tabIndex={floatVisible ? 0 : -1} aria-hidden={!floatVisible}>
        Book a call
      </Link>
    </>
  );
}
