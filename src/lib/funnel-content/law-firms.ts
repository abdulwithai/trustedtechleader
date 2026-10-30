import type { FunnelContent } from './types';

const lawFirms: FunnelContent = {
  meta: {
    title: 'AI lead intake for law firms | Trusted Tech Leader',
    description: 'Every inquiry answered, every missed consult followed up. A unified lead system for immigration, personal injury and family law firms.',
    path: '/law-firms/',
    ogImageAlt: 'Trusted Tech Leader: AI lead systems for US law firms',
    breadcrumbName: 'AI lead intake for law firms',
  },
  shell: {
    funnel: 'law-firms',
    pageClass: 'page-law page-funnel',
    current: '/law-firms/',
    crumb: 'For law firms',
    footerNote: 'This page describes software services and is not legal advice. Example records are fictional demo data.',
  },
  hero: {
    kicker: 'Immigration · Personal injury · Family law',
    h1: 'Every inquiry answered. Every missed consult followed up.',
    highlight: 'Every missed consult followed up.',
    lead: 'We read intake documents before the lawyer picks up the phone. When a consultation is missed, a call and a text go out, so the conversation picks up where it stopped.',
    primaryCta: 'Book your free scan',
    secondaryCta: { href: '#stages', label: 'How it works' },
  },
  demo: {
    tablistLabel: 'Practice area',
    badge: 'Demo data',
    viaLabel: 'via',
    routedLabel: 'Routed to',
    records: [
      { key: 'imm', tabLabel: 'Immigration', name: 'M. Alvarez', matter: 'Family-based green card', source: 'website form', team: 'Immigration',
        steps: [['9:01 am','Captured','Website form added to the CRM'],['9:01 am','Read','I-130 receipt notice: receipt date and priority date added'],['9:03 am','Replied','First reply sent with consult times'],['9:20 am','Booked','Thu 2:00 pm with the immigration attorney'],['Thu 2:15','Recovered','Consult missed: call placed, SMS rebooking link sent']] },
      { key: 'pi', tabLabel: 'Personal injury', name: 'J. Okafor', matter: 'Rear-end collision', source: 'Facebook ad', team: 'Personal injury',
        steps: [['7:42 pm','Captured','Ad lead added to the CRM'],['7:42 pm','Read','Police report: date, location and insurer added'],['7:44 pm','Replied','After-hours reply with next-morning slots'],['8:05 am','Booked','Fri 10:30 am intake call'],['Fri 10:45','Recovered','No answer: call agent retried, SMS sent']] },
      { key: 'fam', tabLabel: 'Family law', name: 'R. Chen', matter: 'Custody modification', source: 'WhatsApp', team: 'Family law',
        steps: [['12:10 pm','Captured','WhatsApp message added to the CRM'],['12:10 pm','Read','Current custody order: county and case type added'],['12:12 pm','Replied','Reply on WhatsApp with booking link'],['12:31 pm','Booked','Mon 4:00 pm consultation'],['Mon 4:15','Recovered','Consult missed: SMS sent, call scheduled']] },
    ],
  },
  stages: {
    title: 'From first message to kept consultation.',
    highlight: 'kept consultation.',
    eyebrow: 'How it works',
    sub: 'Five stages run inside your existing CRM and calendar. The sixth is where the firm grows.',
    items: [
      { n: '01', title: 'Capture', body: 'Forms, WhatsApp and ad leads land in one CRM record.' },
      { n: '02', title: 'Read', body: 'Intake attachments are summarised onto the record.' },
      { n: '03', title: 'Respond', body: 'A fast first reply, routed to the right practice area.' },
      { n: '04', title: 'Book', body: "The consultation goes on the lawyer's calendar." },
      { n: '05', title: 'Recover', body: 'A missed consult triggers a call agent and an SMS.' },
      { n: '06 · Next', title: 'Grow', body: 'Review requests after good outcomes, and a check of what AI engines say about you.', next: true },
    ],
  },
  parts: {
    eyebrow: 'What you get',
    title: 'Two parts. One lead system.',
    highlight: 'One lead system.',
    items: [
      { label: 'Part one · Stages 1–4', title: 'Unified lead system', lead: 'Every inquiry in one record, read, answered and booked.',
        list: ['Website, WhatsApp and ad leads routed to your CRM', 'Attachments read and summarised for the lawyer', 'Routing by practice area, booking to calendar'] },
      { label: 'Part two · Stage 5', title: 'Missed-consult follow-up', lead: "When a consultation is missed, the conversation doesn't end.",
        list: ['Call agent reaches out to rebook', 'SMS with a direct rebooking link', 'Consent and disclosure set for your state'] },
    ],
  },
  fee: {
    title: 'Both parts, one fixed project fee.',
    sub: 'We scope it on a walkthrough call. Your CRM and calendar stay yours.',
    cta: 'Book your free scan',
  },
  faq: {
    eyebrow: 'Questions firms ask',
    title: 'Built around how firms work.',
    highlight: 'how firms work.',
    items: [
      { q: 'Do you need access to our client files?', a: 'Demos run on fictional data. In your build, documents stay inside the CRM and systems you already use.' },
      { q: 'Are the automated calls and texts allowed in our state?', a: 'Consent, disclosure and recording rules differ by state. We check yours before the follow-up agent goes live and only contact people who reached out to you. This is not legal advice.' },
      { q: 'Will this replace our intake staff?', a: 'No. It removes the repetitive part: copying leads, chasing replies, rebooking. Your team handles the conversations.' },
      { q: 'What will you report back?', a: 'Time to first response, share of leads followed up, no-show rate before and after, and staff hours saved a week.' },
    ],
  },
  cta: {
    title: 'Watch an immigration, injury or family lead move through all six stages.',
    highlight: 'all six stages.',
    lead: 'Book a walkthrough call and we will scope it with you.',
    button: 'Book your free scan',
  },
};

export default lawFirms;
