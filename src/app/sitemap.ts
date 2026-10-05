import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * XML sitemap, carrying over the exact routes, `lastmod` dates and priorities
 * from the hand-maintained `public/sitemap.xml` of the static build.
 */
const ENTRIES = [
  { path: '/', lastModified: '2026-10-06', priority: 1.0 },
  { path: '/services', lastModified: '2026-10-06', priority: 0.9 },
  { path: '/portfolio', lastModified: '2026-10-06', priority: 0.9 },
  { path: '/case-studies', lastModified: '2026-10-06', priority: 0.9 },
  {
    path: '/case-study-jetour-ittehad',
    lastModified: '2026-09-20',
    priority: 0.8,
  },
  {
    path: '/case-study-hyundai-islamabad',
    lastModified: '2026-09-20',
    priority: 0.8,
  },
  {
    path: '/case-study-csm-ittehad',
    lastModified: '2026-09-20',
    priority: 0.8,
  },
  { path: '/about', lastModified: '2026-10-06', priority: 0.8 },
  { path: '/blog', lastModified: '2026-10-06', priority: 0.9 },
  { path: '/contact', lastModified: '2026-10-06', priority: 0.8 },
  { path: '/appointment', lastModified: '2026-10-06', priority: 0.8 },
  { path: '/sitemap', lastModified: '2026-09-17', priority: 0.4 },
  { path: '/privacy', lastModified: '2026-10-06', priority: 0.3 },
  { path: '/terms', lastModified: '2026-10-06', priority: 0.3 },
  { path: '/portfolio/dealership-erp', lastModified: '2026-10-06', priority: 0.8 },
  { path: '/portfolio/ittehad-steel', lastModified: '2026-10-06', priority: 0.6 },
  { path: '/portfolio/sfykea', lastModified: '2026-10-05', priority: 0.8 },
  { path: '/portfolio/mowing', lastModified: '2026-10-05', priority: 0.8 },
  { path: '/portfolio/serenada-mental-health', lastModified: '2026-10-05', priority: 0.6 },
  { path: '/portfolio/prospect-smile', lastModified: '2026-10-05', priority: 0.6 },
  { path: '/portfolio/luxury-ohare-limo', lastModified: '2026-10-05', priority: 0.6 },
  { path: '/digital-marketing-growth', lastModified: '2026-10-05', priority: 0.9 },
  { path: '/web-software-development', lastModified: '2026-10-05', priority: 0.9 },
  { path: '/ai-automation-content', lastModified: '2026-10-05', priority: 0.9 },
  { path: '/ecommerce-supply-chain', lastModified: '2026-10-05', priority: 0.9 },
  {
    path: '/update-amazon-fba-fees-2026',
    lastModified: '2026-09-17',
    priority: 0.8,
  },
  {
    path: '/update-eu-ai-act-transparency-2026',
    lastModified: '2026-09-17',
    priority: 0.8,
  },
  {
    path: '/update-google-ads-consent-2026',
    lastModified: '2026-09-17',
    priority: 0.8,
  },
  { path: '/update-eu-ics2-2026', lastModified: '2026-09-17', priority: 0.8 },
  {
    path: '/update-google-search-2026',
    lastModified: '2026-09-17',
    priority: 0.8,
  },
  {
    path: '/insight-ecommerce-operations',
    lastModified: '2026-09-17',
    priority: 0.7,
  },
  {
    path: '/insight-conversion-audit',
    lastModified: '2026-09-17',
    priority: 0.7,
  },
  { path: '/insight-erp-for-growing-businesses', lastModified: '2026-10-06', priority: 0.7 },
  { path: '/insight-booking-app-partner-portal', lastModified: '2026-10-06', priority: 0.7 },
  { path: '/insight-digital-outdoor-marketing', lastModified: '2026-10-06', priority: 0.7 },
  { path: '/insight-ai-automation', lastModified: '2026-09-17', priority: 0.7 },
  { path: '/insight-growth-system', lastModified: '2026-09-17', priority: 0.7 },
  {
    path: '/insight-supply-chain-control',
    lastModified: '2026-09-17',
    priority: 0.7,
  },
  {
    path: '/insight-lead-generation-system',
    lastModified: '2026-09-17',
    priority: 0.7,
  },
  {
    path: '/insight-ai-video-brief',
    lastModified: '2026-09-17',
    priority: 0.7,
  },
  {
    path: '/insight-utm-governance',
    lastModified: '2026-09-20',
    priority: 0.7,
  },
  {
    path: '/insight-product-feed-health',
    lastModified: '2026-09-20',
    priority: 0.7,
  },
  {
    path: '/insight-landed-cost-model',
    lastModified: '2026-09-20',
    priority: 0.7,
  },
  { path: '/insight-3pl-scorecard', lastModified: '2026-09-20', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ENTRIES.map(entry => ({
    url: entry.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`,
    lastModified: entry.lastModified,
    priority: entry.priority,
  }));
}
