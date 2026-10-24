import type { NextConfig } from 'next';
import { RETIRED_SERVICE_REDIRECTS } from './src/lib/services';

/**
 * Security and caching headers carried over from the static build's
 * `vercel.json`, declared here so they apply on any host rather than only on
 * Vercel.
 */
/**
 * Content Security Policy: only this site, Google Analytics and the FormSubmit
 * form endpoint are allowed. Inline scripts stay permitted because Next.js,
 * the GA bootstrap and JSON-LD use them. Production only — the dev server
 * needs `eval` for hot reloading.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "connect-src 'self' https://formsubmit.co https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "img-src 'self' data: https://*.google-analytics.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "form-action 'self' https://formsubmit.co",
  "frame-src 'none'",
  "worker-src 'self'",
  "manifest-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const SECURITY_HEADERS = [
  ...(process.env.VERCEL_ENV === 'preview'
    ? [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
    : []),
  ...(process.env.NODE_ENV === 'production'
    ? [{ key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY }]
    : []),
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()',
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    cpus: 2,
  },

  async redirects() {
    return [
      ...RETIRED_SERVICE_REDIRECTS.map(({ from, to }) => ({
        source: from,
        destination: to,
        permanent: true,
      })),
      {
        source: '/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/case-studies/10',
        destination: '/portfolio/sfykea',
        permanent: true,
      },
      {
        source: '/case-studies/11',
        destination: '/portfolio/ittehad-steel',
        permanent: true,
      },
      {
        source: '/case-studies/12',
        destination: '/portfolio/hyundai-islamabad',
        permanent: true,
      },
      {
        source: '/case-studies/13',
        destination: '/portfolio/jetour-ittehad',
        permanent: true,
      },
      {
        source: '/ai-content-production.html',
        destination: '/ai-automation-content',
        permanent: true,
      },
      {
        source: '/insight-ecommerce-operations.html',
        destination: '/insight-ecommerce-operations',
        permanent: true,
      },
      {
        source: '/insight-supply-chain-control.html',
        destination: '/insight-supply-chain-control',
        permanent: true,
      },
      {
        source: '/audits-diagnostics.html',
        destination: '/services',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      { source: '/:path*', headers: SECURITY_HEADERS },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600' }],
      },
    ];
  },
};

export default nextConfig;
