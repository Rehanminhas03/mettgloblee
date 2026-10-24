import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Legacy routes whose content has been permanently removed without a genuine
 * 1-to-1 replacement. Returning HTTP 410 (Gone) with noindex/noarchive ensures
 * search engines (Googlebot, Bingbot) drop them cleanly from the index and stop
 * reporting "Crawled - currently not indexed" soft 404s.
 */
const GONE_PATHS = new Set([
  // Legacy numeric case studies removed without equivalent detail pages:
  '/case-studies/1', // Yuaia Haircare (removed)
  '/case-studies/2', // HammerPath (no individual detail page)
  '/case-studies/3', // AI-Powered Customer Service (removed)
  '/case-studies/4', // Smart Learning Arabia (removed)
  '/case-studies/5', // E-commerce Platform Rebuild (removed)
  '/case-studies/6', // Multi-Marketplace Expansion (removed)
  '/case-studies/7', // Marketlyn (no individual detail page)
  '/case-studies/8', // AZ Remote Books (no individual detail page)
  '/case-studies/9', // Codminal (no individual detail page)

  // Legacy numeric blog articles removed in redesign:
  '/blog/1', // The Future of AI in E-commerce
  '/blog/2', // Essential Cybersecurity Practices for Small Businesses
  '/blog/3', // Amazon FBA in 2025: Complete Guide
  '/blog/4', // Building Scalable Web Applications with Next.js
  '/blog/5', // Digital Marketing Strategies That Actually Work

  // Retired service line not offered by Mett Global:
  '/services/data-entry',

  // Decommissioned team directory (consolidated to /about, purged from search index):
  '/team',
]);

const GONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
  <title>410 Gone | Content Permanently Removed</title>
</head>
<body style="font-family:system-ui,-apple-system,sans-serif;background:#05070e;color:#e2e8f0;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:24px;box-sizing:border-box;">
  <div style="text-align:center;max-width:520px;">
    <p style="font-size:0.875rem;letter-spacing:0.15em;text-transform:uppercase;color:#00e5ff;margin:0 0 0.5rem;font-weight:600;">Status 410</p>
    <h1 style="font-size:2rem;margin:0 0 1rem;color:#f8fafc;font-weight:700;">Content Permanently Removed</h1>
    <p style="font-size:0.95rem;line-height:1.6;color:#94a3b8;margin:0 0 2rem;">The requested legacy page has been permanently decommissioned and is no longer part of Mett Global's services or portfolio.</p>
    <a href="/" style="display:inline-block;padding:0.75rem 1.75rem;background:#00e5ff;color:#05070e;text-decoration:none;font-weight:600;border-radius:9999px;font-size:0.9rem;">Return to Homepage</a>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/case-studies/:path*',
    '/blog/:path*',
    '/services/data-entry',
    '/team',
  ],
};
