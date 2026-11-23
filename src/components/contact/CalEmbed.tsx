'use client';

import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '@/components/Tracking';
import { SITE } from '@/lib/site';
import { CAL_LINK } from './config';

/** Cal.com inline embed (iframe), mounted only when scrolled near the viewport. */
export default function CalEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!CAL_LINK) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShow(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setShow(true); io.disconnect(); }
    }, { rootMargin: '400px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!CAL_LINK) return;
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== 'https://cal.com' && e.origin !== 'https://app.cal.com') return;
      const d = e.data as { originator?: string; type?: string } | undefined;
      if (d?.originator === 'CAL' && d.type === 'bookingSuccessful') trackEvent('booking_submit', { method: 'cal' });
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  if (!CAL_LINK) {
    return (
      <div className="card book-fallback">
        <h3>Book your 20-minute call by email</h3>
        <p>Email <a href={`mailto:${SITE.email}`} onClick={() => trackEvent('contact_email_click', { location: 'booking_fallback' })}>{SITE.email}</a> with two or three times that work (Monday to Friday, 7:30&ndash;10:30 AM Eastern) and we&rsquo;ll confirm within 12 hours.</p>
      </div>
    );
  }

  return (
    <div ref={ref} className="cal-embed">
      {show ? (
        <iframe
          src={`https://cal.com/${CAL_LINK}?embed=true&layout=month_view`}
          title="Book a 20-minute call"
          loading="lazy"
          onLoad={() => { if (!loaded) { setLoaded(true); trackEvent('booking_view', { method: 'cal' }); } }}
        />
      ) : null}
      <p className="small muted cal-embed__alt">
        Trouble loading? <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('booking_click', { method: 'cal_link' })}>Open the calendar in a new tab</a>.
      </p>
    </div>
  );
}
