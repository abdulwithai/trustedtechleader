import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { SITE } from '@/lib/site';
import '@/styles/tokens.css';
import '@/styles/global.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.defaultTitle, template: '%s | TrustedTechLeader' },
  description: SITE.defaultDescription,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [{ url: '/assets/img/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/assets/img/og-default.png'] },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { themeColor: '#FAF8F5' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
