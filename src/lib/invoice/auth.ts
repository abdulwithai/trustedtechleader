// SHA-256 hex of the admin password. This is a light gate for a static site, not real security.
// To change the password, run:  npm run admin:hash -- "new password"
// then paste the printed hash below.
export const ADMIN_PASSWORD_SHA256 = '909981d13a5d0e4858b2c6002b7be7911133bccaef94e4e3ef4f85a5fc8f17fd';

const SESSION_KEY = 'ttl-admin:session';

export async function checkPassword(pw: string): Promise<boolean> {
  try {
    const data = new TextEncoder().encode(pw);
    const digest = await crypto.subtle.digest('SHA-256', data);
    const hex = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hex === ADMIN_PASSWORD_SHA256;
  } catch {
    return false;
  }
}

export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export function logIn(): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, '1');
  } catch {
    /* ignore */
  }
}

export function logOut(): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* ignore */
  }
}
