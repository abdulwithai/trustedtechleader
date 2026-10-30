import type { Currency, Invoice, LineItem } from './types';

export function lineAmount(item: LineItem): number {
  return item.qty * item.rate;
}

export function invoiceTotal(inv: Pick<Invoice, 'items'>): number {
  return inv.items.reduce((sum, it) => sum + lineAmount(it), 0);
}

export function formatMoney(n: number, currency: Currency): string {
  const whole = Math.abs(n - Math.round(n)) < 0.005;
  const num = (whole ? Math.round(n) : n).toLocaleString('en-US', {
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  });
  return `${currency} ${num}`;
}
