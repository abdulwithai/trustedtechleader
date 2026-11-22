'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/components/Tracking';
import { SITE } from '@/lib/site';
import { FORMSPREE_ID } from './config';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) { setStatus('ok'); return; } // honeypot tripped: pretend success
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${encodeURIComponent(FORMSPREE_ID)}`, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent('contact_submit');
      setStatus('ok');
      form.reset();
    } catch {
      trackEvent('contact_submit_error');
      setStatus('error');
    }
  }

  if (!FORMSPREE_ID) {
    return (
      <p>The form isn&rsquo;t live yet. Please email <a href={`mailto:${SITE.email}`} onClick={() => trackEvent('contact_email_click', { location: 'form_fallback' })}>{SITE.email}</a> and we&rsquo;ll reply within 12 hours.</p>
    );
  }

  if (status === 'ok') {
    return <p role="status" className="form-ok">Got it. I&rsquo;ll reply within 12 hours &mdash; I&rsquo;m in Karachi so expect it overnight your time.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <input type="hidden" name="_subject" value="New message from trustedtechleader.com" />
      <div className="form__row">
        <div className="field"><label htmlFor="cf-name">Name</label><input id="cf-name" name="name" type="text" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="cf-biz">Business name</label><input id="cf-biz" name="business" type="text" autoComplete="organization" /></div>
      </div>
      <div className="form__row">
        <div className="field"><label htmlFor="cf-email">Email</label><input id="cf-email" name="email" type="email" autoComplete="email" required /></div>
        <div className="field"><label htmlFor="cf-ig">Business Instagram handle</label><input id="cf-ig" name="instagram" type="text" placeholder="@yourbusiness" /></div>
      </div>
      <div className="field"><label htmlFor="cf-msg">Message</label><textarea id="cf-msg" name="message" rows={5} required /></div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-hp">Leave this field empty</label>
        <input id="cf-hp" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
      <p role="alert" className="form-err" hidden={status !== 'error'}>
        Something went wrong. Please email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> instead.
      </p>
    </form>
  );
}
