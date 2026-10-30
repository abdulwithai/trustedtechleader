import type { ReactNode } from 'react';
import type { ServiceIcon } from '@/lib/service-content/types';

const ico = { viewBox: '0 0 24 24', width: 28, height: 28, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export const STEP_ICONS: Record<ServiceIcon, ReactNode> = {
  target: (<svg {...ico}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>),
  review: (<svg {...ico}><path d="M3 12s3.5-6.5 9-6.5S21 12 21 12s-3.5 6.5-9 6.5S3 12 3 12z" /><path d="m9.5 12 1.8 1.8 3.2-3.4" /></svg>),
  plus: (<svg {...ico}><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M12 8.5v7M8.5 12h7" /></svg>),
  map: (<svg {...ico}><path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20l-6-2.5L3 20z" /><path d="M9 4v13.5M15 6.5V20" /></svg>),
  layers: (<svg {...ico}><path d="m12 4 9 4.5-9 4.5-9-4.5z" /><path d="m3 12.5 9 4.5 9-4.5" /><path d="m3 16.5 9 4.5 9-4.5" /></svg>),
  handover: (<svg {...ico}><path d="M4 13h4l3 2.5h4a2 2 0 0 0 0-4h-3" /><path d="M8 13V8.5l5-3 6 3V12" /></svg>),
  phone: (<svg {...ico}><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></svg>),
  link: (<svg {...ico}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 10 18.7l1-1" /></svg>),
  devices: (<svg {...ico}><rect x="3" y="5" width="13" height="10" rx="2" /><path d="M7 19h5" /><rect x="16.5" y="9" width="4.5" height="9" rx="1.5" /></svg>),
};

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5.5 12.5 4.2 4.2L18.5 7.5" />
  </svg>
);
