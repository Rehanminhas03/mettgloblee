import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { ConsentBanner } from '@/components/ConsentBanner';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'MettGlobal | Growth, eCommerce, AI & Operations',
  description:
    'MettGlobal helps ambitious businesses improve eCommerce, marketing, websites, AI automation, supply chain and sales operations.',
  applicationName: 'MettGlobal',
  authors: [{ name: 'MettGlobal' }],
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  formatDetection: { telephone: true },
  icons: {
    icon: [{ url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: { siteName: 'MettGlobal', type: 'website', locale: 'en_PK' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a09',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/*
        The background follows the surface the page declares, so rubber-band
        overscroll matches the section behind it exactly as it did when each
        stylesheet set its own `body` colour.
      */}
      <body className="bg-paper has-[[data-surface=page]]:bg-p-paper has-[[data-surface=article]]:bg-a-ivory font-sans">
        <Analytics />
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
