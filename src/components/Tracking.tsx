'use client';

/* Google Tag Manager loader with Consent Mode v2, a consent banner and click/lead events.
   Set GTM_ID below. Everything else (GA4, Ads, etc.) is configured inside GTM. */
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const GTM_ID: string = 'GTM-XXXXXXX'; // TODO: replace with your GTM container ID
const KEY = 'ttl_consent';

type TrackingWindow = Window & { dataLayer?: unknown[]; __ttlTrackingInit?: boolean };
type Params = Record<string, unknown>;

function w(): TrackingWindow {
  return window as TrackingWindow;
}

function gtag(..._args: unknown[]) {
  // GTM expects the raw `arguments` object, not an array
  // eslint-disable-next-line prefer-rest-params
  (w().dataLayer = w().dataLayer || []).push(arguments);
}

function push(name: string, params?: Params) {
  (w().dataLayer = w().dataLayer || []).push({ event: name, ...params });
}

function stored(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

function store(v: string) {
  try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
}

function update(granted: boolean) {
  const s = granted ? 'granted' : 'denied';
  gtag('consent', 'update', { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s });
}

// Runs once per page load (not per mount / navigation / strict-mode re-run)
function init() {
  const win = w();
  if (win.__ttlTrackingInit) return;
  win.__ttlTrackingInit = true;
  win.dataLayer = win.dataLayer || [];

  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', wait_for_update: 500,
  });
  const saved = stored();
  if (saved) update(saved === 'granted');

  if (GTM_ID && GTM_ID.indexOf('XXXX') === -1) {
    win.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
    document.head.appendChild(s);
  }
}

function watch(id: string, attr: string, test: (el: HTMLElement) => boolean, name: string): MutationObserver | null {
  const el = document.getElementById(id);
  if (!el) return null;
  const mo = new MutationObserver(() => { if (test(el)) push(name, { page_path: location.pathname }); });
  mo.observe(el, { attributes: true, attributeFilter: [attr] });
  return mo;
}

export default function Tracking() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(false);

  // Consent defaults + GTM (once), banner visibility, global click tracking
  useEffect(() => {
    init();
    if (!stored()) setShowBanner(true);

    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const a = t && t.closest ? t.closest<HTMLAnchorElement>('a[href]') : null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (a.closest('#scan-ok')) return;
      if (href.indexOf('mailto:') === 0) {
        push('generate_lead', { method: 'email', link_text: (a.textContent || '').trim().slice(0, 60), page_path: location.pathname });
      } else if (/^https?:\/\//.test(href) && a.hostname !== location.hostname) {
        push('outbound_click', { link_url: href, page_path: location.pathname });
      } else if (a.classList.contains('btn')) {
        push('cta_click', { link_text: (a.textContent || '').trim().slice(0, 60), link_url: href, page_path: location.pathname });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Per-page watchers, re-attached on client navigation
  useEffect(() => {
    // Lead: free-scan form produces the mailto and reveals #scan-ok
    const scan = watch('scan-ok', 'hidden', (el) => !el.hidden, 'generate_lead');
    // Audit tool: result panel revealed
    const result = watch('audit-result', 'hidden', (el) => !el.hidden, 'audit_complete');
    const af = document.getElementById('audit-form');
    const onSubmit = () => push('audit_start', { page_path: location.pathname });
    if (af) af.addEventListener('submit', onSubmit);
    return () => {
      if (scan) scan.disconnect();
      if (result) result.disconnect();
      if (af) af.removeEventListener('submit', onSubmit);
    };
  }, [pathname]);

  if (!showBanner) return null;

  const choose = (granted: boolean) => {
    store(granted ? 'granted' : 'denied');
    update(granted);
    push('consent_choice', { consent: granted ? 'granted' : 'denied' });
    setShowBanner(false);
  };

  return (
    <div className="consent-banner" role="dialog" aria-label="Cookie consent">
      <p>We use cookies for analytics to understand how the site is used. You can accept or decline.</p>
      <div className="consent-actions">
        <button type="button" className="btn btn-sm btn-light" data-consent="denied" onClick={() => choose(false)}>Decline</button>
        <button type="button" className="btn btn-sm btn-primary" data-consent="granted" onClick={() => choose(true)}>Accept</button>
      </div>
    </div>
  );
}
