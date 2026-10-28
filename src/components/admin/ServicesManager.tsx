'use client';

import { useEffect, useState } from 'react';
import type { Currency, Service } from '@/lib/invoice/types';
import { formatMoney } from '@/lib/invoice/money';
import { loadServices, newId, saveServices } from '@/lib/invoice/store';

const EMPTY: Service = { id: '', name: '', description: '', rate: 0, currency: 'PKR' };

export default function ServicesManager() {
  const [list, setList] = useState<Service[] | null>(null);
  const [form, setForm] = useState<Service | null>(null);
  const [error, setError] = useState('');
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => { setList(loadServices()); }, []);

  function commit(next: Service[]) { saveServices(next); setList(next); }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form || !list) return;
    if (!form.name.trim()) { setError('Service name is required.'); return; }
    setError('');
    const svc = { ...form, id: form.id || newId() };
    commit(list.some((s) => s.id === svc.id) ? list.map((s) => (s.id === svc.id ? svc : s)) : [...list, svc]);
    setForm(null);
  }

  if (!list) return <p className="adm-loading" role="status">Loading</p>;

  return (
    <div>
      {!form && <button type="button" className="adm-btn adm-btn--primary" onClick={() => { setError(''); setForm({ ...EMPTY }); }}>Add service</button>}
      {form && (
        <form className="adm-card" onSubmit={submit} noValidate>
          <h2>{form.id ? 'Edit service' : 'New service'}</h2>
          <div className="adm-field">
            <label htmlFor="svc-name">Name</label>
            <input id="svc-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="adm-field">
            <label htmlFor="svc-desc">Description</label>
            <textarea id="svc-desc" rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="adm-grid">
            <div className="adm-field">
              <label htmlFor="svc-rate">Rate</label>
              <input id="svc-rate" type="number" min={0} step="any" value={form.rate} onChange={(e) => setForm({ ...form, rate: Math.max(0, parseFloat(e.target.value) || 0) })} />
            </div>
            <div className="adm-field">
              <label htmlFor="svc-cur">Currency</label>
              <select id="svc-cur" value={form.currency} onChange={(e) => setForm({ ...form, currency: e.target.value as Currency })}>
                <option value="PKR">PKR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
          {error && <p className="adm-error" role="alert">{error}</p>}
          <div className="adm-actions">
            <button type="submit" className="adm-btn adm-btn--primary">Save service</button>
            <button type="button" className="adm-btn" onClick={() => setForm(null)}>Cancel</button>
          </div>
        </form>
      )}
      {list.length === 0 ? <p>No services yet.</p> : (
        <ul className="adm-services">
          {list.map((s) => (
            <li key={s.id} className="adm-service">
              <div>
                <strong>{s.name}</strong> <span className="adm-muted">{formatMoney(s.rate, s.currency)}</span>
                {s.description && <p className="adm-muted">{s.description}</p>}
              </div>
              <div className="adm-actions">
                {confirmId === s.id ? (
                  <>
                    <span>Delete {s.name}?</span>
                    <button type="button" className="adm-btn adm-btn--danger" onClick={() => { commit(list.filter((x) => x.id !== s.id)); setConfirmId(null); }}>Yes, delete</button>
                    <button type="button" className="adm-btn" onClick={() => setConfirmId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button type="button" className="adm-btn" onClick={() => { setError(''); setForm({ ...s }); }}>Edit</button>
                    <button type="button" className="adm-btn adm-btn--danger" onClick={() => setConfirmId(s.id)}>Delete</button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
