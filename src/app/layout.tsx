import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from 'next/font/google';
import Tracking from '@/components/Tracking';
// Order matters: tokens -> legacy site classes (restyled) -> brand primitives. See src/styles/README-design.md.
import '@/styles/tokens.css';
import '@/styles/site.css';
import '@/styles/brand.css';

// Self-hosted by next/font. The CSS variables land on <html>; tokens.css builds the
// --acs-display / --acs-sans / --acs-mono stacks (and site.css's --font-serif / --font-sans) from them.
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--acs-font-display', display: 'swap' });
const sans = Geist({ subsets: ['latin'], variable: '--acs-font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--acs-font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://trustedtechleader.com'),
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { themeColor: '#F6F4FB' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Tracking />
      </body>
    </html>
  );
}
