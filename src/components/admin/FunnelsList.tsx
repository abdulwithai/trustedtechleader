'use client';

import { useEffect, useRef, useState } from 'react';
import { funnelList, SITE_URL } from '@/lib/funnels';
import { copyText } from './copyText';

type Status = { id: string; ok: boolean } | null;

export default function FunnelsList() {
  const [status, setStatus] = useState<Status>(null);
  const [origin, setOrigin] = useState(SITE_URL);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Links follow the host the admin is opened on (localhost in dev, the live domain in production).
  useEffect(() => { setOrigin(window.location.origin); }, []);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  async function copy(id: string, url: string) {
    const ok = await copyText(url);
    setStatus({ id, ok });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(null), 2000);
  }

  if (funnelList.length === 0) return <p className="adm-muted">No funnels yet.</p>;

  const live = status ? (status.ok ? 'Link copied to clipboard.' : 'Copy failed.') : '';

  return (
    <div>
      <ul className="adm-funnels">
        {funnelList.map((f) => {
          const url = origin + f.entry;
          const mine = status?.id === f.id ? status : null;
          return (
            <li key={f.id} className="adm-funnel">
              <h2>{f.label}</h2>
              <p className="adm-muted">{f.id}</p>
              <p className="adm-funnel__url">{url}</p>
              <div className="adm-actions">
                <button type="button" className="adm-btn adm-btn--primary" onClick={() => copy(f.id, url)}>
                  {mine?.ok ? 'Copied' : 'Copy link'}
                </button>
                <a className="adm-btn" href={url} target="_blank" rel="noopener noreferrer">Open</a>
                {mine && !mine.ok && <span className="adm-error" role="alert">Copy failed</span>}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="adm-sr" role="status" aria-live="polite">{live}</p>
    </div>
  );
}
