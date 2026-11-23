'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/components/Tracking';
import { KIT_FORM_ID } from './config';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get('website')) { setStatus('ok'); return; } // honeypot
    setStatus('sending');
    const body = new FormData();
    body.set('email_address', String(d.get('email') || ''));
    body.set('fields[first_name]', String(d.get('first_name') || ''));
    const biz = String(d.get('business') || '');
    if (biz) body.set('fields[business_name]', biz);
    try {
      // Kit's public form endpoint does not send CORS headers; an opaque response means it was delivered.
      await fetch(`https://app.kit.com/forms/${encodeURIComponent(KIT_FORM_ID)}/subscriptions`, { method: 'POST', body, mode: 'no-cors' });
      trackEvent('newsletter_signup');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (!KIT_FORM_ID) {
    return <p className="muted">The Friday newsletter is launching soon.</p>;
  }
  if (status === 'ok') {
    return <p role="status" className="form-ok">You&rsquo;re in. Check your inbox to confirm.</p>;
  }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field"><label htmlFor="nl-first">First name</label><input id="nl-first" name="first_name" type="text" autoComplete="given-name" required /></div>
        <div className="field"><label htmlFor="nl-email">Email</label><input id="nl-email" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="field"><label htmlFor="nl-biz">Business name (optional)</label><input id="nl-biz" name="business" type="text" autoComplete="organization" /></div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="nl-hp">Leave this field empty</label>
        <input id="nl-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Subscribing…' : 'Get the Friday email'}</button>
      <p role="alert" className="form-err" hidden={status !== 'error'}>Couldn&rsquo;t subscribe right now. Please try again later.</p>
    </form>
  );
}
