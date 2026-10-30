import type { CSSProperties } from 'react';
import Auditor from '@/components/brand/Auditor';
import type { ServiceContent } from '@/lib/service-content/types';

const d = (n: number) => ({ '--d': n } as CSSProperties);

function Crossfade({ from, to, fromChip, toChip, toKind }: { from: string; to: string; fromChip: string; toChip: string; toKind: 'ai' | 'ok' }) {
  return (
    <div className="svc-xf">
      <div className="svc-xf__from" aria-hidden="true">
        <span className="acs-chip acs-chip--warn">{fromChip}</span>
        <span>{from}</span>
      </div>
      <div className="svc-xf__to">
        <span className={`acs-chip ${toKind === 'ok' ? 'acs-chip--ok' : 'svc-chip--ai'}`}>{toChip}</span>
        <span>{to}</span>
      </div>
    </div>
  );
}

function Bar({ url, label }: { url: string; label: string }) {
  return (
    <>
      <div className="svc-bar">
        <span className="svc-bar__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="svc-bar__url">{url}</span>
      </div>
      <span className="acs-eyebrow acs-eyebrow--plain svc-label">{label}</span>
    </>
  );
}

function Automation({ label }: { label: string }) {
  return (
    <div className="acs-card acs-card--lg svc-card">
      <Bar url="your-workflow" label={label} />
      <ol className="svc-rows">
        <li className="acs-slot svc-row" style={d(0)}>
          <Crossfade fromChip="Manual" from="Someone retypes fields from a PDF" toChip="AI draft" to="AI reads the PDF and drafts the mapping" toKind="ai" />
        </li>
        <li className="acs-slot svc-row" style={d(1)}>
          <div className="svc-xf__static"><span className="acs-chip acs-chip--warn">Review</span><span>The draft waits in a review queue</span></div>
        </li>
        <li className="acs-slot svc-row svc-row--last" style={d(2)}>
          <div className="svc-xf__static svc-xf__static--ok">
            <span className="acs-chip acs-chip--ok">Approved</span><span>A person approves it, then it is published</span>
          </div>
        </li>
      </ol>
    </div>
  );
}

const MODULES = [
  { from: 'Leads in a spreadsheet', fromChip: 'Sheet', to: 'Leads, contacts and follow-up', toChip: 'CRM' },
  { from: 'Invoices in a separate tool', fromChip: 'Tool', to: 'Invoices and payment links', toChip: 'Billing' },
  { from: 'Stock kept on a list', fromChip: 'List', to: 'Stock tracked per item', toChip: 'Inventory' },
  { from: 'Reports built by hand', fromChip: 'Manual', to: 'Dashboards from the same data', toChip: 'Reports' },
];

function Systems({ label }: { label: string }) {
  return (
    <div className="acs-card acs-card--lg svc-card">
      <Bar url="your-system" label={label} />
      <ul className="svc-rows svc-rows--tight">
        {MODULES.map((m, i) => (
          <li key={m.toChip} className="acs-slot svc-row svc-row--sys" style={d(i)}>
            <Crossfade from={m.from} to={m.to} fromChip={m.fromChip} toChip={m.toChip} toKind="ok" />
          </li>
        ))}
      </ul>
      <p className="svc-foot"><svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#3FA34D" /><path d="m5.8 10.3 2.7 2.7 5.4-5.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>Same data everywhere. No re-keying.</p>
    </div>
  );
}

function Apps({ label }: { label: string }) {
  return (
    <div className="acs-card acs-card--lg svc-card svc-apps">
      <span className="acs-eyebrow acs-eyebrow--plain svc-label">{label}</span>
      <div className="svc-apps__top">
        <div className="svc-phone" aria-hidden="true">
          <span className="svc-phone__notch" />
          <span className="svc-phone__title">Order</span>
          <span className="svc-phone__line" />
          <span className="svc-phone__line svc-phone__line--s" />
          <span className="svc-phone__btn">Place order</span>
        </div>
        <div className="svc-web">
          <div className="svc-bar svc-bar--sm"><span className="svc-bar__dots" aria-hidden="true"><i /><i /><i /></span><span className="svc-bar__url">admin</span></div>
          <ul className="svc-web__rows">
            <li><span className="acs-chip acs-chip--ok">New</span>Order from the app</li>
            <li><span className="acs-chip acs-chip--ok">New</span>Member signed up</li>
            <li><span className="acs-chip">Seen</span>Earlier order</li>
          </ul>
        </div>
      </div>
      <div className="svc-apps__links" aria-hidden="true"><span /><span /></div>
      <div className="svc-apps__node"><strong>One API</strong><span>+ one admin dashboard</span></div>
    </div>
  );
}

export default function HeroVisual({ kind, label }: { kind: ServiceContent['visual']; label: string }) {
  return (
    <div className={`svc-stage svc-stage--${kind}`}>
      <Auditor pose={kind === 'apps' ? 'point' : 'present'} facing="right" className="svc-auditor" />
      {kind === 'automation' && <Automation label={label} />}
      {kind === 'systems' && <Systems label={label} />}
      {kind === 'apps' && <Apps label={label} />}
    </div>
  );
}
