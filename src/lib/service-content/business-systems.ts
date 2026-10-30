import type { ServiceContent } from './types';

export const businessSystems: ServiceContent = {
  visual: 'systems',
  heroLabel: 'Example: one system',
  eyebrow: 'Business systems',
  title: { before: 'One system for ', hl: 'leads, billing, stock and reports.' },
  lead: 'Scattered spreadsheets and disconnected tools mean the same data gets typed in again and again. We build a custom system where CRM, billing, inventory and reporting live together.',
  included: {
    title: { before: 'What’s ', hl: 'included' },
    items: [
      'A CRM for leads, contacts and follow-up',
      'Billing: invoices, recurring charges and payment links',
      'Inventory and stock tracking where your business needs it',
      'Reporting and dashboards from the same data',
      'CSV export and reporting',
      'Roles, so each person sees what they need',
    ],
  },
  process: {
    title: { before: 'Map it, build in phases, ', hl: 'hand it over.' },
    lead: 'The parts you need first come first.',
    pill: 'Step by step',
    steps: [
      { title: 'Map the process', text: 'We walk through how work moves today and agree what the system must do first.', icon: 'map' },
      { title: 'Build in phases', text: 'We build the system in phases, starting with the parts you need first.', icon: 'layers' },
      { title: 'Hand over', text: 'We walk your team through the system.', icon: 'handover' },
    ],
  },
  related: {
    title: { before: 'See it in ', hl: 'real projects' },
    lead: 'Each one is described from the codebase. No metrics are claimed.',
    cases: [
      { href: '/case-studies/multi-tenant-pharmacy-erp-pos/', title: 'Multi-tenant pharmacy ERP and POS', text: 'A multi-tenant pharmacy ERP with double-entry accounting, batch-level FEFO inventory and an offline-capable retail point of sale.' },
      { href: '/case-studies/membership-sales-crm-and-billing/', title: 'Membership sales CRM and billing', text: 'Laravel platform covering leads, tour scheduling, e-signed contracts, payments, recurring invoicing, commissions, analytics and bulk SMS and email.' },
      { href: '/case-studies/travel-membership-crm-tour-manifest-payments/', title: 'Travel membership CRM platform', text: 'A Laravel admin system for a travel membership business: household CRM, tour manifest with check-in, payment links, dues reporting and campaigns.' },
      { href: '/case-studies/ro-plant-monitoring-system/', title: 'Water-plant monitoring system', text: 'A web system for daily log sheets at reverse osmosis and sewage plants: operator readings, supervisor dashboards and print-ready monthly sheets.' },
    ],
  },
  cta: {
    title: { before: 'Tell us what ', hl: 'runs your business today.' },
    lead: 'Book a call and walk us through how work moves right now.',
  },
};
