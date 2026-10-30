export type ServiceIcon = 'target' | 'review' | 'plus' | 'map' | 'layers' | 'handover' | 'phone' | 'link' | 'devices';

export type ServiceContent = {
  visual: 'automation' | 'systems' | 'apps';
  heroLabel: string;
  eyebrow: string;
  title: { before: string; hl: string };
  lead: string;
  included: { title: { before: string; hl: string }; items: string[] };
  process: { title: { before: string; hl: string }; lead: string; pill: string; steps: { title: string; text: string; icon: ServiceIcon }[] };
  related: { title: { before: string; hl: string }; lead: string; cases: { href: string; title: string; text: string }[] };
  cta: { title: { before: string; hl: string }; lead: string };
};
