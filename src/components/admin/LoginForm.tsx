'use client';

import { useState } from 'react';
import { checkPassword, logIn } from '@/lib/invoice/auth';

export default function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      if (await checkPassword(pw)) {
        logIn();
        onSuccess();
      } else {
        setError('Incorrect password.');
      }
    } catch {
      setError('Could not check the password in this browser.');
    }
    setBusy(false);
  }

  return (
    <main className="adm-login">
      <form className="adm-card" onSubmit={submit}>
        <h1>Admin sign in</h1>
        <div className="adm-field">
          <label htmlFor="adm-pw">Password</label>
          <input id="adm-pw" type="password" autoComplete="current-password" value={pw}
            onChange={(e) => setPw(e.target.value)} aria-invalid={!!error}
            aria-describedby={error ? 'adm-pw-err' : undefined} required />
        </div>
        {error && <p className="adm-error" id="adm-pw-err" role="alert">{error}</p>}
        <button type="submit" className="adm-btn adm-btn--primary" disabled={busy}>
          {busy ? 'Checking' : 'Sign in'}
        </button>
      </form>
    </main>
  );
}
