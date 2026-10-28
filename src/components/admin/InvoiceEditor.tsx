'use client';

import { useEffect, useState } from 'react';
import type { Currency, Invoice, LineItem, Service } from '@/lib/invoice/types';
import { formatMoney, invoiceTotal, lineAmount } from '@/lib/invoice/money';
import { loadServices, newId, nextInvoiceNumber, saveInvoice } from '@/lib/invoice/store';
import { downloadInvoicePdf } from '@/lib/invoice/pdf';

function today(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function blank(): Invoice {
  const date = today();
  return {
    id: newId(),
    number: nextInvoiceNumber(date),
    date,
    currency: 'PKR',
    client: { name: '', address: '' },
    projectTitle: '',
    projectSubtitle: '',
    items: [],
    paymentTerms: 'Due on receipt',
    notes: '',
    savedAt: '',
  };
}

export default function InvoiceEditor({ initial, onReset }: { initial: Invoice | null; onReset: () => void }) {
  const [inv, setInv] = useState<Invoice | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setInv(initial ? { ...initial, client: { ...initial.client }, items: initial.items.map((i) => ({ ...i })) } : blank());
    setServices(loadServices());
  }, [initial]);

  if (!inv) return <p className="adm-loading" role="status">Loading</p>;

  const set = <K extends keyof Invoice>(k: K, v: Invoice[K]) => { setInv({ ...inv, [k]: v }); setStatus(''); };
  const setItem = (id: string, patch: Partial<LineItem>) => {
    setInv({ ...inv, items: inv.items.map((i) => (i.id === id ? { ...i, ...patch } : i)) });
    setStatus('');
  };
  const num = (s: string) => { const n = parseFloat(s); return Number.isFinite(n) ? n : 0; };

  function addService(id: string) {
    const s = services.find((x) => x.id === id);
    if (!s || !inv) return;
    // The first item sets the invoice currency; later items in another currency are flagged.
    const currency = inv.items.length === 0 ? s.currency : inv.currency;
    setInv({ ...inv, currency, items: [...inv.items, { id: newId(), name: s.name, description: s.description, qty: 1, rate: s.rate }] });
    setStatus('');
    setErrors(s.currency === currency ? [] : [`"${s.name}" is priced in ${s.currency} but this invoice is in ${currency}. Check its rate.`]);
  }

  function setDate(date: string) {
    if (!inv) return;
    // Keep an auto-numbered invoice in step with the year of its date.
    const auto = !inv.savedAt && inv.number === nextInvoiceNumber(inv.date);
    setInv({ ...inv, date, number: auto && date ? nextInvoiceNumber(date) : inv.number });
    setStatus('');
  }

  function validate(): string[] {
    const e: string[] = [];
    if (!inv!.client.name.trim()) e.push('Client name is required.');
    if (inv!.items.length === 0) e.push('Add at least one line item.');
    inv!.items.forEach((it, i) => { if (!it.name.trim()) e.push(`Line ${i + 1} needs a name.`); });
    return e;
  }

  function save(): Invoice | null {
    const e = validate();
    setErrors(e);
    if (e.length) return null;
    const saved = { ...inv!, savedAt: new Date().toISOString() };
    saveInvoice(saved);
    setInv(saved);
    return saved;
  }

  function onSave() {
    const s = save();
    setStatus(s ? 'Invoice saved.' : '');
  }

  async function onPdf() {
    const s = save();
    if (!s) return;
    setBusy(true);
    setStatus('');
    try {
      await downloadInvoicePdf(s);
      setStatus('Invoice saved and PDF downloaded.');
    } catch {
      setErrors(['The PDF could not be created. Please try again.']);
    }
    setBusy(false);
  }

  return (
    <form className="adm-editor" onSubmit={(e) => { e.preventDefault(); onSave(); }} noValidate>
      <div className="adm-grid">
        <div className="adm-field">
          <label htmlFor="inv-number">Invoice number</label>
          <input id="inv-number" value={inv.number} onChange={(e) => set('number', e.target.value)} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-date">Date</label>
          <input id="inv-date" type="date" value={inv.date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-cur">Currency</label>
          <select id="inv-cur" value={inv.currency} onChange={(e) => set('currency', e.target.value as Currency)}>
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="adm-field">
          <label htmlFor="inv-terms">Payment terms</label>
          <input id="inv-terms" value={inv.paymentTerms} onChange={(e) => set('paymentTerms', e.target.value)} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-client">Client name</label>
          <input id="inv-client" value={inv.client.name} onChange={(e) => set('client', { ...inv.client, name: e.target.value })} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-addr">Client address</label>
          <textarea id="inv-addr" rows={3} value={inv.client.address} onChange={(e) => set('client', { ...inv.client, address: e.target.value })} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-ptitle">Project title</label>
          <input id="inv-ptitle" value={inv.projectTitle} onChange={(e) => set('projectTitle', e.target.value)} />
        </div>
        <div className="adm-field">
          <label htmlFor="inv-psub">Project subtitle</label>
          <input id="inv-psub" value={inv.projectSubtitle} onChange={(e) => set('projectSubtitle', e.target.value)} />
        </div>
      </div>

      <h2>Line items</h2>
      <div className="adm-row adm-row--tools">
        <div className="adm-field">
          <label htmlFor="add-service">Add service</label>
          <select id="add-service" value="" onChange={(e) => { if (e.target.value) addService(e.target.value); }}>
            <option value="">{services.length ? 'Choose a saved service' : 'No saved services yet'}</option>
            {services.map((s) => <option key={s.id} value={s.id}>{s.name} ({formatMoney(s.rate, s.currency)})</option>)}
          </select>
        </div>
        <button type="button" className="adm-btn" onClick={() => set('items', [...inv.items, { id: newId(), name: '', description: '', qty: 1, rate: 0 }])}>
          Add custom item
        </button>
      </div>

      <ul className="adm-items">
        {inv.items.map((it, i) => (
          <li key={it.id} className="adm-item">
            <div className="adm-field adm-item__name">
              <label htmlFor={`n-${it.id}`}>Item {i + 1} name</label>
              <input id={`n-${it.id}`} value={it.name} onChange={(e) => setItem(it.id, { name: e.target.value })} />
            </div>
            <div className="adm-field adm-item__desc">
              <label htmlFor={`d-${it.id}`}>Item {i + 1} description</label>
              <input id={`d-${it.id}`} value={it.description} onChange={(e) => setItem(it.id, { description: e.target.value })} />
            </div>
            <div className="adm-field adm-item__num">
              <label htmlFor={`q-${it.id}`}>Qty</label>
              <input id={`q-${it.id}`} type="number" min={0} step="any" value={it.qty} onChange={(e) => setItem(it.id, { qty: Math.max(0, num(e.target.value)) })} />
            </div>
            <div className="adm-field adm-item__num">
              <label htmlFor={`r-${it.id}`}>Rate</label>
              <input id={`r-${it.id}`} type="number" min={0} step="any" value={it.rate} onChange={(e) => setItem(it.id, { rate: num(e.target.value) })} />
            </div>
            <div className="adm-item__amt" aria-label={`Item ${i + 1} amount`}>{formatMoney(lineAmount(it), inv.currency)}</div>
            <button type="button" className="adm-btn adm-btn--danger" onClick={() => set('items', inv.items.filter((x) => x.id !== it.id))}>
              Remove<span className="adm-sr"> item {i + 1}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="adm-total">Total: <strong>{formatMoney(invoiceTotal(inv), inv.currency)}</strong></p>

      <div className="adm-field">
        <label htmlFor="inv-notes">Notes</label>
        <textarea id="inv-notes" rows={3} value={inv.notes} onChange={(e) => set('notes', e.target.value)} />
      </div>

      {errors.length > 0 && (
        <ul className="adm-error" role="alert">{errors.map((e) => <li key={e}>{e}</li>)}</ul>
      )}
      {status && <p className="adm-ok" role="status">{status}</p>}

      <div className="adm-actions">
        <button type="submit" className="adm-btn adm-btn--primary">Save</button>
        <button type="button" className="adm-btn" onClick={onPdf} disabled={busy} aria-busy={busy}>
          {busy ? 'Preparing PDF' : 'Download PDF'}
        </button>
        <button type="button" className="adm-btn" onClick={onReset}>New</button>
      </div>
    </form>
  );
}
