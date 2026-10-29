import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/Analytics';
import { ConsentBanner } from '@/components/ConsentBanner';
import { FloatingContact } from '@/components/home/FloatingContact';
import { SITE_URL } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { WEBSITE_JSON_LD, ORGANIZATION_JSON_LD } from '@/lib/site-schema';

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
    index: process.env.VERCEL_ENV !== 'preview',
    follow: process.env.VERCEL_ENV !== 'preview',
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
  openGraph: {
    siteName: 'Mett Global',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_PK'],
  },
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
const INTRO_SESSION_SCRIPT = `try{if(/bot|crawler|spider|crawling|lighthouse|pagespeed|googlebot/i.test(navigator.userAgent)||sessionStorage.getItem('mg-intro')){document.documentElement.dataset.intro='seen'}else if(location.pathname==='/'){sessionStorage.setItem('mg-intro','1')}}catch(e){}`;
const MOTION_PREFERENCE_SCRIPT = `try{if(sessionStorage.getItem('mett_motion_paused')==='true')document.documentElement.dataset.motionPaused='true'}catch(e){}`;
const APOLLO_TRACKER_SCRIPT = `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"6ad147840f4362001451b919"})},document.head.appendChild(o)}initApollo();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_SESSION_SCRIPT }} />
        <script
          dangerouslySetInnerHTML={{ __html: MOTION_PREFERENCE_SCRIPT }}
        />
        <script
          dangerouslySetInnerHTML={{ __html: APOLLO_TRACKER_SCRIPT }}
        />
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
      </head>
      {/*
        The background follows the surface the page declares, so rubber-band
        overscroll matches the section behind it exactly as it did when each
        stylesheet set its own `body` colour.
      */}
      <body className="bg-paper has-[[data-surface=page]]:bg-p-paper has-[[data-surface=article]]:bg-a-ivory font-sans">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [WEBSITE_JSON_LD, ORGANIZATION_JSON_LD],
          }}
        />
        <Analytics />
        {children}
        <FloatingContact />
        <ConsentBanner />
      </body>
    </html>
  );
}
