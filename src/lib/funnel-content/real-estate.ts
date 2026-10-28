import type { FunnelContent } from './types';

const realEstate: FunnelContent = {
  meta: {
    title: 'Seller lead and deal tracking for real estate investors | Trusted Tech Leader',
    description: 'Offer letters sent at a steady pace, every seller reply captured in one record, and each deal tracked through due diligence, closing and accounting. For land investors, wholesalers and property teams.',
    path: '/real-estate/',
    ogImageAlt: 'Trusted Tech Leader: direct mail and deal tracking systems for real estate investors',
    breadcrumbName: 'Seller lead and deal tracking for real estate investors',
  },
  shell: {
    funnel: 'real-estate',
    pageClass: 'page-realestate page-funnel',
    current: '/real-estate/',
    crumb: 'For real estate investors',
    footerNote: 'This page describes software services and is not legal or tax advice. Example records are fictional demo data.',
  },
  hero: {
    kicker: 'Land investors · Wholesalers · Property teams',
    h1: 'Every seller lead answered. Every deal tracked from letter to closing.',
    lead: 'Offer letters go out at a steady pace, replies land in one record, and each deal moves through due diligence, closing and accounting without re-keying.',
    primaryCta: 'Book a call',
    secondaryCta: { href: '#stages', label: 'How it works' },
  },
  demo: {
    tablistLabel: 'Lead source',
    badge: 'Demo data',
    viaLabel: 'via',
    routedLabel: 'Assigned to',
    records: [
      { key: 'mail', tabLabel: 'Mail reply', name: 'Parcel 114-22-07 · T. Morgan', matter: '5.2 acres · Pinal County, AZ · vacant land', source: 'offer letter #2', team: 'Acquisitions',
        steps: [['Mar 3','Mailed','Offer letter #2 sent from the March batch'],['Mar 19\n10:12 am','Reply captured','Owner returned the reply card; added to the parcel record'],['Mar 19\n10:14 am','Property details added','Acreage, access and tax status filled in on the record'],['Mar 20\n9:00 am','Offer sent','Written offer sent to the owner'],['Apr 19','Recovered','No answer: follow-up scheduled at 30, 60 and 90 days']] },
      { key: 'form', tabLabel: 'Seller form', name: 'Parcel 308-41-12 · R. Delgado', matter: '12 acres · Navajo County, AZ · rural land', source: 'website form', team: 'Acquisitions',
        steps: [['May 6','Mailed','Offer letter #1 sent from the May batch'],['Jun 8\n7:48 pm','Reply captured','Seller form submitted; contact details added to the record'],['Jun 9\n8:30 am','Property details added','Boundaries, road access and liens noted'],['Jun 9\n11:00 am','Offer sent','Offer sent and a call booked for Thursday'],['Jun 12','Recovered','Offer accepted: due diligence opened, closing date set']] },
      { key: 'call', tabLabel: 'Inbound call', name: 'Parcel 072-15-33 · K. Whitfield', matter: '0.8 acre · Maricopa County, AZ · infill lot', source: 'inbound call', team: 'Acquisitions',
        steps: [['Aug 2','Mailed','Offer letter #1 sent'],['Aug 14\n1:05 pm','Reply captured','Call logged against the parcel, with a note and a tag for the team'],['Aug 14\n1:30 pm','Property details added','Lot size and zoning added to the record'],['Aug 15\n9:15 am','Offer sent','Offer sent; owner asked for time'],['Sep 14','Recovered','Closing complete: sale pushed to Xero']] },
    ],
  },
  stages: {
    title: 'From offer letter to recorded deed.',
    sub: 'Five stages run from the list you already own. The sixth keeps old leads working.',
    items: [
      { n: '01', title: 'Reach', body: 'An owner list is imported and letters go out at a steady daily pace.' },
      { n: '02', title: 'Capture', body: 'Replies by mail, form or call land in one record for the parcel.' },
      { n: '03', title: 'Qualify', body: 'Property details and owner notes are added before an offer goes out.' },
      { n: '04', title: 'Offer', body: 'The offer is sent, with follow-ups scheduled if there is no answer.' },
      { n: '05', title: 'Close', body: 'Due diligence, documents and closing are tracked on the same record.' },
      { n: '06 · Next', title: 'Nurture and re-mail', body: 'Quiet leads are followed up and re-mailed on a schedule.', next: true },
    ],
  },
  parts: {
    items: [
      { label: 'Part one · Stages 1–3', title: 'Outreach engine', lead: 'Letters out at a pace you set, every reply in one place.',
        list: ['CSV import of owner lists into a mailing queue', 'Letters dripped on a schedule within daily limits and pause settings', 'Replies captured in one record per property'] },
      { label: 'Part two · Stages 4–5', title: 'Deal pipeline', lead: 'Each deal tracked from first offer to the books.',
        list: ['Properties, due diligence, closings and sales on one record', 'Documents such as deeds generated from templates', 'County property-tax checks, accounting sync and team permissions'] },
    ],
  },
  fee: {
    title: 'Both parts, one fixed project fee.',
    sub: 'Scoped on a walkthrough call. Your data stays yours.',
    cta: 'Book a call',
  },
  proof: {
    eyebrow: 'Case study',
    title: 'A property direct mail and tax payment platform',
    body: 'Owner lists imported by CSV, letters mailed on a schedule within daily limits, and deals tracked through closings with sales pushed to Xero.',
    href: '/case-studies/property-direct-mail-and-tax-payment-platform/',
    linkLabel: 'Read the case study',
  },
  faq: {
    eyebrow: 'Questions investors ask',
    title: 'Built around how deals actually move.',
    items: [
      { q: 'Are automated texts and calls allowed?', a: 'Consent and do-not-call rules vary by state and by how a number was collected. We check yours before anything goes live and only contact people who replied to you. This is not legal advice.' },
      { q: 'Can we keep our current CRM or spreadsheets?', a: 'Yes. We start from the lists and tools you already use, and scope any import or sync on the call. Your data stays yours.' },
      { q: 'Who on the team sees which deals?', a: 'Access is set per team member with sub-users and permissions, so acquisitions, dispositions and accounting each see what they need.' },
      { q: 'What will you report back?', a: 'Reply rate per mailing, time to first contact, offers sent and deals closed per month.' },
    ],
  },
  cta: {
    title: 'Watch a mail reply become a closed deal in your accounts.',
    button: 'Book a call',
  },
};

export default realEstate;
