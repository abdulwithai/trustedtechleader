import type { ServiceContent } from './types';

export const aiAutomation: ServiceContent = {
  visual: 'automation',
  heroLabel: 'Example workflow',
  eyebrow: 'AI automation',
  title: { before: 'AI that works ', hl: 'inside the workflow you already have.' },
  lead: 'Not another chatbot. We add AI to one specific step of your process, like drafting, reading documents or mapping data. A person reviews the output where it matters.',
  included: {
    title: { before: 'What’s ', hl: 'included' },
    items: [
      'AI-drafted content and data mappings with a review step',
      'Reading PDFs and scanned documents to draft mappings or study content',
      'AI assistants that can operate your system through its API',
      'Voice and text AI coaching or support inside an app',
      'Workflow automation that connects the steps between tools',
      'Review queues and audit logs where the workflow needs them',
    ],
  },
  process: {
    title: { before: 'One step first, ', hl: 'then the next.' },
    lead: 'We start with a single step and build from there.',
    pill: 'Step by step',
    steps: [
      { title: 'Pick one step', text: 'We find a repetitive step where AI helps and where mistakes are easy to catch.', icon: 'target' },
      { title: 'Build with review', text: 'The AI output goes to a person to approve before it is published.', icon: 'review' },
      { title: 'Extend', text: 'Once the first step is working, we add the next one.', icon: 'plus' },
    ],
  },
  related: {
    title: { before: 'See it in ', hl: 'real projects' },
    lead: 'Each one is described from the codebase. No metrics are claimed.',
    cases: [
      { href: '/case-studies/supplier-catalog-sync-platform/', title: 'Supplier catalog sync platform', text: 'Connects supplier APIs and feeds to one product and pricing format, with AI-drafted connector specs and field mappings, and CSV export.' },
      { href: '/case-studies/ai-social-carousel-content-pipeline/', title: 'AI social carousel pipeline', text: 'Turns a short topic into researched copy, branded carousel slides and a PDF, with a review dashboard and weekly planner before publishing.' },
      { href: '/case-studies/local-first-outreach-crm/', title: 'Local-first outreach CRM', text: 'A single-port outreach CRM on SQLite with a registry-driven REST API, OpenAPI spec and CSV import, designed so an AI assistant can operate it.' },
      { href: '/case-studies/wellness-training-platform-apps-cms-ai/', title: 'Wellness platform with AI coach', text: 'A subscription wellness platform with native mobile apps, a NestJS API, an admin CMS, AI voice and text coaching, and workflow automation.' },
    ],
  },
  cta: {
    title: { before: 'Show us a step that ', hl: 'eats your team’s time.' },
    lead: 'Book a call and walk us through it.',
  },
};
