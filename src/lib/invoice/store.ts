import type { Invoice, Service, UploadedInvoice } from './types';

const SERVICES_KEY = 'ttl-admin:services';
const INVOICES_KEY = 'ttl-admin:invoices';
const UPLOADED_KEY = 'ttl-admin:uploaded-invoices';

function readArray<T>(key: string): T[] | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return null;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : null;
  } catch {
    return null;
  }
}

function writeValue(key: string, value: unknown): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable or full */
  }
}

export function newId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    /* fall through */
  }
  return (
    Date.now().toString(36) +
    '-' +
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  );
}

function seedServices(): Service[] {
  return [
    {
      id: newId(),
      name: 'Expo Promotional Video',
      description:
        '40-50 second looping video for expo LCD display. Professional video editing, motion graphics and music. Delivered in with-music and silent versions.',
      rate: 5000,
      currency: 'PKR',
    },
  ];
}

export function loadServices(): Service[] {
  if (typeof window === 'undefined') return [];
  const stored = readArray<Service>(SERVICES_KEY);
  if (stored) return stored;
  const seed = seedServices();
  writeValue(SERVICES_KEY, seed);
  return seed;
}

export function saveServices(list: Service[]): void {
  writeValue(SERVICES_KEY, list);
}

export function loadInvoices(): Invoice[] {
  const stored = readArray<Invoice>(INVOICES_KEY);
  if (!stored) return [];
  return stored
    .filter((i) => i && typeof i === 'object')
    .sort((a, b) => String(b.savedAt ?? '').localeCompare(String(a.savedAt ?? '')));
}

export function saveInvoice(inv: Invoice): void {
  if (typeof window === 'undefined') return;
  const list = readArray<Invoice>(INVOICES_KEY) ?? [];
  const idx = list.findIndex((i) => i && i.id === inv.id);
  if (idx >= 0) list[idx] = inv;
  else list.push(inv);
  writeValue(INVOICES_KEY, list);
}

export function deleteInvoice(id: string): void {
  if (typeof window === 'undefined') return;
  const list = readArray<Invoice>(INVOICES_KEY);
  if (!list) return;
  writeValue(
    INVOICES_KEY,
    list.filter((i) => !i || i.id !== id),
  );
}

export function loadUploadedInvoices(): UploadedInvoice[] {
  const stored = readArray<UploadedInvoice>(UPLOADED_KEY);
  if (!stored) return [];
  return stored
    .filter((i) => i && typeof i === 'object')
    .sort((a, b) => String(b.savedAt ?? '').localeCompare(String(a.savedAt ?? '')));
}

/** Returns false when the write fails (e.g. localStorage quota exceeded). */
export function saveUploadedInvoice(inv: UploadedInvoice): boolean {
  if (typeof window === 'undefined') return false;
  const list = readArray<UploadedInvoice>(UPLOADED_KEY) ?? [];
  list.push(inv);
  try {
    window.localStorage.setItem(UPLOADED_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export function deleteUploadedInvoice(id: string): void {
  if (typeof window === 'undefined') return;
  const list = readArray<UploadedInvoice>(UPLOADED_KEY);
  if (!list) return;
  writeValue(
    UPLOADED_KEY,
    list.filter((i) => !i || i.id !== id),
  );
}

export function nextInvoiceNumber(date: string): string {
  const year = /^\d{4}/.test(date) ? date.slice(0, 4) : String(new Date().getFullYear());
  const prefix = `TTL-${year}-`;
  // TTL-2026-001 was issued outside this tool.
  let max = year === '2026' ? 1 : 0;
  for (const inv of loadInvoices()) {
    const num = typeof inv.number === 'string' ? inv.number : '';
    if (!num.startsWith(prefix)) continue;
    const n = parseInt(num.slice(prefix.length), 10);
    if (Number.isFinite(n) && n > max) max = n;
  }
  return `${prefix}${String(max + 1).padStart(3, '0')}`;
}
