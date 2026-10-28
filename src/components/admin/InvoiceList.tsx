'use client';

import { useEffect, useState } from 'react';
import type { Invoice, UploadedInvoice } from '@/lib/invoice/types';
import { formatMoney, invoiceTotal } from '@/lib/invoice/money';
import {
  deleteInvoice, deleteUploadedInvoice, loadInvoices, loadUploadedInvoices, newId, nextInvoiceNumber, saveInvoice,
} from '@/lib/invoice/store';
import { downloadInvoicePdf } from '@/lib/invoice/pdf';
import UploadInvoice from './UploadInvoice';

export default function InvoiceList({ onOpen }: { onOpen: (inv: Invoice) => void }) {
  const [list, setList] = useState<Invoice[] | null>(null);
  const [uploaded, setUploaded] = useState<UploadedInvoice[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => { setList(loadInvoices()); setUploaded(loadUploadedInvoices()); }, []);
  const refresh = () => { setList(loadInvoices()); setUploaded(loadUploadedInvoices()); };

  async function pdf(inv: Invoice) {
    setBusyId(inv.id);
    setError('');
    try { await downloadInvoicePdf(inv); } catch { setError('The PDF could not be created. Please try again.'); }
    setBusyId(null);
  }

  function duplicate(inv: Invoice) {
    const d = new Date();
    const p = (n: number) => String(n).padStart(2, '0');
    const date = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
    saveInvoice({
      ...inv, id: newId(), number: nextInvoiceNumber(date), date, savedAt: new Date().toISOString(),
      client: { ...inv.client }, items: inv.items.map((i) => ({ ...i, id: newId() })),
    });
    refresh();
  }

  if (!list) return <p className="adm-loading" role="status">Loading</p>;

  return (
    <div>
      <UploadInvoice onSaved={refresh} />
      {list.length === 0 && uploaded.length === 0 && <p>No saved invoices yet.</p>}
      {error && <p className="adm-error" role="alert">{error}</p>}
      {list.length > 0 && (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <caption className="adm-sr">Saved invoices</caption>
            <thead><tr><th scope="col">Number</th><th scope="col">Date</th><th scope="col">Client</th><th scope="col">Total</th><th scope="col">Actions</th></tr></thead>
            <tbody>
              {list.map((inv) => (
                <tr key={inv.id}>
                  <td data-label="Number">{inv.number}</td>
                  <td data-label="Date">{inv.date}</td>
                  <td data-label="Client">{inv.client.name}</td>
                  <td data-label="Total">{formatMoney(invoiceTotal(inv), inv.currency)}</td>
                  <td className="adm-table__actions">
                    {confirmId === inv.id ? (
                      <>
                        <span>Delete {inv.number}?</span>
                        <button type="button" className="adm-btn adm-btn--danger" onClick={() => { deleteInvoice(inv.id); setConfirmId(null); refresh(); }}>Yes, delete</button>
                        <button type="button" className="adm-btn" onClick={() => setConfirmId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button type="button" className="adm-btn" onClick={() => onOpen(inv)}>Open</button>
                        <button type="button" className="adm-btn" disabled={busyId === inv.id} onClick={() => pdf(inv)}>{busyId === inv.id ? 'Preparing PDF' : 'Download PDF'}</button>
                        <button type="button" className="adm-btn" onClick={() => duplicate(inv)}>Duplicate</button>
                        <button type="button" className="adm-btn adm-btn--danger" onClick={() => setConfirmId(inv.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {uploaded.length > 0 && (
        <div className="adm-tablewrap">
          <table className="adm-table">
            <caption className="adm-sr">Uploaded invoices</caption>
            <thead><tr><th scope="col">Number</th><th scope="col">Date</th><th scope="col">Client</th><th scope="col">Total</th><th scope="col">Actions</th></tr></thead>
            <tbody>
              {uploaded.map((u) => (
                <tr key={u.id}>
                  <td data-label="Number">{u.number} <span className="adm-muted">Uploaded</span></td>
                  <td data-label="Date">{u.date}</td>
                  <td data-label="Client">{u.client}</td>
                  <td data-label="Total">{formatMoney(u.amount, u.currency)}</td>
                  <td className="adm-table__actions">
                    {confirmId === u.id ? (
                      <>
                        <span>Delete {u.number}?</span>
                        <button type="button" className="adm-btn adm-btn--danger" onClick={() => { deleteUploadedInvoice(u.id); setConfirmId(null); refresh(); }}>Yes, delete</button>
                        <button type="button" className="adm-btn" onClick={() => setConfirmId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        {/^data:(application\/pdf|image\/(png|jpeg));base64,/.test(u.fileData) && (
                          <a className="adm-btn" href={u.fileData} download={u.fileName}>Download</a>
                        )}
                        <button type="button" className="adm-btn adm-btn--danger" onClick={() => setConfirmId(u.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
