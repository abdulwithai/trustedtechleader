/**
 * Funnel registry. A funnel is a self-contained niche flow that ad traffic lands on,
 * with its own header nav (the general site nav is niche-neutral).
 *
 * To add a new funnel (e.g. healthcare):
 *  1. Write its content in `src/lib/funnel-content/<id>.ts` (a `FunnelContent`).
 *  2. Add a theme in `src/styles/pages/funnel-<id>.css` that overrides the `--f-*`
 *     vars from `funnel.css` under `.page-<id>`.
 *  3. Create `src/app/(funnel-<id>)/<path>/page.tsx` rendering <FunnelPage content={...} />
 *     (see the travel or real-estate page; the route group folder is not part of the URL).
 *  4. Add an entry to `funnels` below; `FunnelId` extends automatically via the keys.
 *  5. Add the new URL to `public/sitemap.xml` and `public/llms.txt`.
 */
/** Production origin, used to build absolute funnel links. */
export const SITE_URL = 'https://trustedtechleader.com';

export type FunnelLink = {
  href: string;
  label: string;
  /** Render as a plain <a> (in-page anchor) instead of next/link. */
  anchor?: boolean;
};

export type Funnel = {
  label: string;
  /** Entry path ad traffic is sent to. */
  entry: string;
  nav: FunnelLink[];
};

export const funnels = {
  'law-firms': {
    label: 'Law firms',
    entry: '/law-firms/',
    nav: [
      { href: '/law-firms/', label: 'Overview' },
      { href: '/ai-visibility/', label: 'AI visibility' },
      { href: '/ai-audit/', label: 'Free AI audit' },
      { href: '/free-scan/', label: 'Free scan' },
    ],
  },
  travel: {
    label: 'Travel',
    entry: '/travel/',
    nav: [
      { href: '#stages', label: 'How it works', anchor: true },
      { href: '#proof', label: 'Our work', anchor: true },
      { href: '#questions', label: 'Questions', anchor: true },
    ],
  },
  'real-estate': {
    label: 'Real estate',
    entry: '/real-estate/',
    nav: [
      { href: '#stages', label: 'How it works', anchor: true },
      { href: '#proof', label: 'Our work', anchor: true },
      { href: '#questions', label: 'Questions', anchor: true },
    ],
  },
} as const satisfies Record<string, Funnel>;

export type FunnelId = keyof typeof funnels;

export const funnelList = (Object.keys(funnels) as FunnelId[]).map((id) => ({ id, ...funnels[id] }));
