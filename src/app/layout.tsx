import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Tracking from '@/components/Tracking';
import '@/styles/site.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://trustedtechleader.com'),
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = { themeColor: '#0F1A2A' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
        />
      </head>
      <body>
        {children}
        <Tracking />
      </body>
    </html>
  );
}
