import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { ConsentBanner } from '@/components/ConsentBanner';
import { FloatingContact } from '@/components/home/FloatingContact';
import { SITE_URL } from '@/lib/site';

/* Real Inter, self-hosted by next/font; `font-sans` falls back to Arial. */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Mett Global | Growth, eCommerce, AI & Operations',
  description:
    'Mett Global builds, grows and automates businesses through digital marketing and growth, web and software development, AI automation and content, and e-commerce and supply chain.',
  applicationName: 'Mett Global',
  authors: [{ name: 'Mett Global' }],
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
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: { siteName: 'Mett Global', type: 'website', locale: 'en_PK' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a09',
};

/**
 * Runs before first paint. If the homepage curtain already played this
 * session, mark the document so the curtain is hidden; on the homepage's
 * first visit, remember that it is about to play.
 */
const INTRO_SESSION_SCRIPT = `try{if(sessionStorage.getItem('mg-intro')){document.documentElement.dataset.intro='seen'}else if(location.pathname==='/'){sessionStorage.setItem('mg-intro','1')}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SESSION_SCRIPT }} />
      </head>
      {/*
        The background follows the surface the page declares, so rubber-band
        overscroll matches the section behind it exactly as it did when each
        stylesheet set its own `body` colour.
      */}
      <body className="bg-paper has-[[data-surface=page]]:bg-p-paper has-[[data-surface=article]]:bg-a-ivory font-sans">
        <Analytics />
        {children}
        <FloatingContact />
        <ConsentBanner />
      </body>
    </html>
  );
}
