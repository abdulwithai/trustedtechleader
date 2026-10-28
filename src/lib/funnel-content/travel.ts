import type { FunnelContent } from './types';

const travel: FunnelContent = {
  meta: {
    title: 'Booking and manifest system for travel businesses | Trusted Tech Leader',
    description: 'Every trip inquiry quoted, every deposit collected, every seat on the manifest. A booking and payments system for tour operators, group travel organisers and travel clubs.',
    path: '/travel/',
    ogImageAlt: 'Trusted Tech Leader: booking and manifest systems for travel businesses',
    breadcrumbName: 'Booking system for travel businesses',
  },
  shell: {
    funnel: 'travel',
    pageClass: 'page-travel page-funnel',
    current: '/travel/',
    crumb: 'For travel businesses',
    footerNote: 'Example records are fictional demo data.',
  },
  hero: {
    kicker: 'Tour operators · Group travel · Travel clubs',
    h1: 'Every trip inquiry quoted. Every deposit collected. Every seat on the manifest.',
    lead: 'Inquiries from WhatsApp, Instagram, email and forms land in one record. Payment links go out and the manifest updates automatically.',
    primaryCta: 'Book a call',
    secondaryCta: { href: '#stages', label: 'How it works' },
  },
  demo: {
    tablistLabel: 'Trip type',
    badge: 'Demo data',
    viaLabel: 'via',
    routedLabel: 'Assigned to',
    records: [
      { key: 'group', tabLabel: 'Group tour', name: 'D. Marques', matter: 'Lisbon & Porto · 8 nights · 4 travellers', source: 'Instagram DM', team: 'Group desk',
        steps: [['10:12 am','Captured','Instagram DM added to one record with dates and party size'],['10:25 am','Quoted','Quote sent for the 14 May departure'],['11:40 am','Deposit paid','Payment link paid, receipt sent'],['11:41 am','On the manifest','4 seats added to the 14 May departure, 6 left'],['Apr 30','Balance reminder','Balance unpaid: SMS sent with a payment link']] },
      { key: 'custom', tabLabel: 'Custom itinerary', name: 'S. Whitfield', matter: 'Kyoto & Osaka · 10 nights · 2 travellers', source: 'website form', team: 'Itinerary desk',
        steps: [['8:30 pm','Captured','Website form added to the CRM with budget and dates'],['8:31 pm','Acknowledged','Reply sent, itinerary draft due next morning'],['9:15 am','Quoted','Itinerary and price sent for approval'],['2:05 pm','Deposit paid','Payment link paid, trip record confirmed'],['Jun 2','Balance reminder','Balance unpaid: SMS reminder with a payment link']] },
      { key: 'member', tabLabel: 'Membership', name: 'R. Haddad', matter: 'Travel club presentation · 2 guests', source: 'Zoom presentation', team: 'Membership desk',
        steps: [['9:00 am','Captured','Presentation sign-up added to the household record'],['9:02 am','Confirmed','Confirmation sent with the Zoom link and time slot'],['6:30 pm','On the manifest','Thu 7:00 pm slot taken, 3 places left'],['Thu 7:00','Checked in','Not joined: marked no-show on the manifest'],['Thu 7:20','Rebooked','SMS sent with a rebooking link, new slot chosen']] },
    ],
  },
  stages: {
    title: 'From first message to a full departure.',
    sub: 'Five stages run on one record per traveller. The sixth is where repeat bookings come from.',
    items: [
      { n: '01', title: 'Capture', body: 'WhatsApp, Instagram, email and forms land in one record.' },
      { n: '02', title: 'Quote', body: 'A fast first reply with the quote for the right trip.' },
      { n: '03', title: 'Book and pay', body: 'A hosted payment link for the deposit, with resend.' },
      { n: '04', title: 'Manifest', body: 'Travellers go on the manifest, with a cap per departure or time slot.' },
      { n: '05', title: 'Remind', body: 'Balances chased by SMS or email with a payment link.' },
      { n: '06 · Next', title: 'Review and rebook', body: 'A follow-up after the trip, and an offer for the next departure.', next: true },
    ],
  },
  parts: {
    items: [
      { label: 'Part one', title: 'Inquiry-to-booking system', lead: 'Every inquiry in one record, quoted, paid and confirmed.',
        list: ['Messages and forms routed into one household or traveller record', 'Hosted payment links, with resend', 'SMS and email follow-up campaigns'] },
      { label: 'Part two', title: 'Trip operations', lead: 'Know who is on each departure and who still owes a balance.',
        list: ['Manifest by city and day, with a seat cap per time slot', 'Check-in for Zoom and in-person tours', 'Balance and dues tracking per household, plus a daily closing report'] },
    ],
  },
  fee: {
    title: 'Both parts, one fixed project fee.',
    sub: 'Scoped on a walkthrough call. Your data and payment account stay yours.',
    cta: 'Book a call',
  },
  proof: {
    eyebrow: 'Case study',
    title: 'Travel membership CRM, tour manifest and payments platform.',
    body: 'A working admin system with a household CRM, a tour manifest with check-in, payment links and a dues report per household.',
    href: '/case-studies/travel-membership-crm-tour-manifest-payments/',
    linkLabel: 'Read the case study',
  },
  faq: {
    eyebrow: 'Questions travel teams ask',
    title: 'Built around how trips are sold.',
    items: [
      { q: 'Does this work with our existing booking tool and Stripe?', a: 'Payment links and dues reporting run from Stripe data. Whether it fits alongside your current booking tool is checked on the call, before anything is scoped.' },
      { q: 'What happens in peak season when inquiries spike?', a: 'Every message lands in a record and is queued for a quote, so volume does not depend on someone watching the inbox. Seat caps stop a departure being oversold.' },
      { q: 'Can travellers see their own trip?', a: 'Customer travel portal access is part of the system, and role-based users keep staff to what they need.' },
      { q: 'What will you report back?', a: 'Time to first quote, share of deposits collected, balances outstanding, and no-shows before and after.' },
    ],
  },
  cta: {
    title: 'Watch a group-tour inquiry go from DM to a seat on the manifest.',
    button: 'Book a call',
  },
};

export default travel;
