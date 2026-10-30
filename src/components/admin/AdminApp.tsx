'use client';

import { useEffect, useState } from 'react';
import { isLoggedIn, logOut } from '@/lib/invoice/auth';
import LoginForm from './LoginForm';
import InvoiceEditor from './InvoiceEditor';
import InvoiceList from './InvoiceList';
import ServicesManager from './ServicesManager';
import FunnelsList from './FunnelsList';
import SocialPanel from './SocialPanel';
import type { Invoice } from '@/lib/invoice/types';

type Tab = 'new' | 'invoices' | 'services' | 'funnels' | 'social';
const TABS: { id: Tab; label: string }[] = [
  { id: 'new', label: 'New invoice' },
  { id: 'invoices', label: 'Invoices' },
  { id: 'services', label: 'Services' },
  { id: 'funnels', label: 'Funnels' },
  { id: 'social', label: 'Social' },
];

export default function AdminApp() {
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>('new');
  const [editing, setEditing] = useState<Invoice | null>(null);
  const [editorKey, setEditorKey] = useState(0);

  useEffect(() => {
    setAuthed(isLoggedIn());
    setMounted(true);
  }, []);

  if (!mounted) return <p className="adm-loading" role="status">Loading</p>;
  if (!authed) return <LoginForm onSuccess={() => setAuthed(true)} />;

  function open(inv: Invoice | null) {
    setEditing(inv);
    setEditorKey((k) => k + 1);
    setTab('new');
  }

  return (
    <div className="adm">
      <header className="adm-top">
        <strong>Trusted Tech Leader admin</strong>
        <button type="button" className="adm-btn" onClick={() => { logOut(); setAuthed(false); }}>
          Log out
        </button>
      </header>
      <div className="adm-tabs" role="tablist" aria-label="Admin sections">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="adm-panel"
            className="adm-tab"
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <main className="adm-panel" id="adm-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        {tab === 'new' && <InvoiceEditor key={editorKey} initial={editing} onReset={() => open(null)} />}
        {tab === 'invoices' && <InvoiceList onOpen={open} />}
        {tab === 'services' && <ServicesManager />}
        {tab === 'funnels' && <FunnelsList />}
        {tab === 'social' && <SocialPanel />}
      </main>
    </div>
  );
}
