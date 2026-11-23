'use client';

/* GA4 + Microsoft Clarity. No-ops unless the env IDs are set at build time:
   NEXT_PUBLIC_GA4_ID (G-XXXXXXX) and NEXT_PUBLIC_CLARITY_ID. No consent banner (US-only launch, plan §9). */
import { useEffect } from 'react';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || '';

type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; clarity?: (...a: unknown[]) => void; __ttlInit?: boolean };

/** Fire a GA4 event from anywhere (e.g. trackEvent('booking_submit')). Safe when GA4 is not configured. */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as W;
  if (w.gtag) w.gtag('event', name, params || {});
}

function addScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export default function Tracking() {
  useEffect(() => {
    const w = window as W;
    if (w.__ttlInit) return;
    w.__ttlInit = true;
    if (GA4_ID) {
      w.dataLayer = w.dataLayer || [];
      w.gtag = function () { (w.dataLayer as unknown[]).push(arguments); };
      w.gtag('js', new Date());
      w.gtag('config', GA4_ID);
      addScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_ID));
    }
    if (CLARITY_ID) {
      const c = function (...a: unknown[]) { ((w.clarity as unknown as { q?: unknown[] }).q = (w.clarity as unknown as { q?: unknown[] }).q || []).push(a); };
      w.clarity = w.clarity || (c as (...a: unknown[]) => void);
      addScript('https://www.clarity.ms/tag/' + encodeURIComponent(CLARITY_ID));
    }
  }, []);
  return null;
}
