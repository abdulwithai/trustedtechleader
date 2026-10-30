'use client';

import { useState } from 'react';
import type { Currency } from '@/lib/invoice/types';
import { newId, saveUploadedInvoice } from '@/lib/invoice/store';

const MAX_BYTES = 2 * 1024 * 1024;
const TYPES = ['application/pdf', 'image/png', 'image/jpeg'];

function today(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });
}

export default function UploadInvoice({ onSaved }: { onSaved: () => void }) {
  const [number, setNumber] = useState('');
  const [date, setDate] = useState(today);
  const [client, setClient] = useState('');
  const [currency, setCurrency] = useState<Currency>('PKR');
  const [amount, setAmount] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileKey, setFileKey] = useState(0);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const amt = parseFloat(amount);
    if (!number.trim() || !date || !client.trim() || !amount.trim()) { setError('Please fill in all fields.'); return; }
    if (!Number.isFinite(amt) || amt <= 0) { setError('Amount must be greater than 0.'); return; }
    if (!file) { setError('Please choose a PDF or image file.'); return; }
    if (!TYPES.includes(file.type)) { setError('The file must be a PDF, PNG or JPEG.'); return; }
    if (file.size > MAX_BYTES) { setError('The file is larger than 2 MB. Please upload a smaller file.'); return; }
    setBusy(true);
    try {
      const fileData = await readAsDataUrl(file);
      const ok = saveUploadedInvoice({
        id: newId(), number: number.trim(), date, currency, amount: amt, client: client.trim(),
        fileName: file.name, fileType: file.type, fileData, savedAt: new Date().toISOString(),
      });
      if (!ok) { setError('Storage is full. Delete some uploaded invoices and try again.'); setBusy(false); return; }
    } catch {
      setError('The file could not be read. Please try again.');
      setBusy(false);
      return;
    }
    setNumber(''); setDate(today()); setClient(''); setCurrency('PKR'); setAmount(''); setFile(null);
    setFileKey((k) => k + 1);
    setBusy(false);
    onSaved();
  }

  return (
    <form className="adm-card" onSubmit={submit} noValidate>
      <h2>Upload an existing invoice</h2>
      <div className="adm-grid">
        <div className="adm-field">
          <label htmlFor="up-number">Invoice number</label>
          <input id="up-number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="adm-field">
          <label htmlFor="up-date">Date</label>
          <input id="up-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className="adm-field">
        <label htmlFor="up-client">Client</label>
        <input id="up-client" value={client} onChange={(e) => setClient(e.target.value)} />
      </div>
      <div className="adm-grid">
        <div className="adm-field">
          <label htmlFor="up-cur">Currency</label>
          <select id="up-cur" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)}>
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <div className="adm-field">
          <label htmlFor="up-amount">Amount</label>
          <input id="up-amount" type="number" min={0} step="any" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
      </div>
      <div className="adm-field">
        <label htmlFor="up-file">File (PDF, PNG or JPEG, max 2 MB)</label>
        <input key={fileKey} id="up-file" type="file" accept="application/pdf,image/png,image/jpeg" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      </div>
      {error && <p className="adm-error" role="alert">{error}</p>}
      <div className="adm-actions">
        <button type="submit" className="adm-btn adm-btn--primary" disabled={busy}>{busy ? 'Saving' : 'Save uploaded invoice'}</button>
      </div>
    </form>
  );
}
