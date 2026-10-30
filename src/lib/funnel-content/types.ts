import type { FunnelId } from '@/lib/funnels';

export type DemoStep = [time: string, label: string, detail: string];

export type DemoRecord = {
  /** Short key; used for tab ids (`tab-<key>`) and `data-practice`. */
  key: string;
  tabLabel: string;
  name: string;
  matter: string;
  source: string;
  team: string;
  steps: DemoStep[];
};

export type FunnelContent = {
  meta: {
    /** Used verbatim as the absolute <title>, og/twitter title, and JSON-LD WebPage name. */
    title: string;
    description: string;
    /** Canonical path with leading and trailing slash, e.g. "/law-firms/". */
    path: string;
    ogImageAlt: string;
    /** Name of the BreadcrumbList's second item. */
    breadcrumbName: string;
  };
  shell: {
    funnel: FunnelId;
    /** Page class(es); must include the theme class plus "page-funnel". */
    pageClass: string;
    current: string;
    crumb: string;
    footerNote: string;
  };
  hero: {
    /** Small industry line above the h1. */
    kicker: string;
    h1: string;
    lead: string;
    primaryCta: string;
    /** Optional phrase inside `h1` to render as the highlighted gradient phrase. */
    highlight?: string;
    secondaryCta: { href: string; label: string };
  };
  demo: {
    tablistLabel: string;
    badge: string;
    viaLabel: string;
    routedLabel: string;
    /** At least one; the first is pre-rendered. */
    records: DemoRecord[];
  };
  stages: {
    title: string;
    highlight?: string;
    eyebrow?: string;
    sub: string;
    items: { n: string; title: string; body: string; next?: boolean }[];
  };
  parts: {
    eyebrow?: string;
    title?: string;
    highlight?: string;
    items: { label: string; title: string; lead: string; list: string[] }[];
  };
  fee: { title: string; sub: string; cta: string };
  /** Optional proof band (case study / testimonial pointer). */
  proof?: { eyebrow: string; title: string; body?: string; href: string; linkLabel: string };
  faq: {
    eyebrow: string;
    title: string;
    highlight?: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; highlight?: string; lead?: string; button: string };
};
