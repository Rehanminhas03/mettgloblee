import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/sitemap');

const GROUPS = [
  {
    label: 'COMPANY',
    title: 'Core pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
      { href: '/appointment', label: 'Book a meeting' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Website Terms' },
    ],
  },
  {
    label: 'SERVICES',
    title: 'Capabilities',
    links: [
      { href: '/ecommerce-growth', label: 'eCommerce Growth & Operations' },
      { href: '/web-development', label: 'Web Development & Conversion' },
      { href: '/ai-automation', label: 'AI Automation' },
      { href: '/digital-marketing', label: 'Digital Marketing & Creative' },
      { href: '/operations-supply-chain', label: 'Supply Chain & Operations' },
      {
        href: '/lead-generation-sales',
        label: 'Lead Generation & Sales Systems',
      },
      {
        href: '/ai-content-production',
        label: 'AI Video & Content Production',
      },
      { href: '/audits-diagnostics', label: 'Audits & Diagnostics' },
    ],
  },
  {
    label: 'CURRENT BRIEFS',
    title: '2026 updates',
    links: [
      { href: '/update-amazon-fba-fees-2026', label: 'Amazon FBA fee changes' },
      {
        href: '/update-eu-ai-act-transparency-2026',
        label: 'EU AI Act transparency rules',
      },
      {
        href: '/update-google-ads-consent-2026',
        label: 'Google Ads consent requirements',
      },
      { href: '/update-eu-ics2-2026', label: 'EU ICS2 customs requirements' },
      {
        href: '/update-google-search-2026',
        label: 'Google Search technical fundamentals',
      },
    ],
  },
  {
    label: 'FIELD GUIDES',
    title: 'Practical knowledge',
    links: [
      {
        href: '/insight-ecommerce-operations',
        label: 'eCommerce operations after the click',
      },
      { href: '/insight-conversion-audit', label: 'Website conversion audit' },
      { href: '/insight-ai-automation', label: 'Practical AI automation' },
      { href: '/insight-growth-system', label: 'Ads, offers & landing pages' },
      {
        href: '/insight-supply-chain-control',
        label: 'Inventory accuracy systems',
      },
      { href: '/insight-lead-generation-system', label: 'Prospecting systems' },
      { href: '/insight-ai-video-brief', label: 'AI video briefing' },
      {
        href: '/insight-audit-framework',
        label: 'Actionable audit framework',
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <PageShell
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/sitemap')} />

      <PageHero
        kicker="SITE MAP"
        title={
          <>
            Everything MettGlobal.
            <br />
            <HeroAccent>One index.</HeroAccent>
          </>
        }
      >
        A human-readable directory of the public website. Search engines can
        also use the XML sitemap referenced in robots.txt.
      </PageHero>

      {/* .section.sitemap-section */}
      <section className="max-b620:px-6 px-[8vw] pt-5 pb-[90px]">
        <div className="max-b760:grid-cols-1 grid grid-cols-[repeat(2,minmax(0,1fr))] gap-4">
          {GROUPS.map(group => (
            <article
              key={group.label}
              className="border-p-line grid content-start rounded-3xl border bg-white p-[30px]"
            >
              <small className="text-p-gold font-black tracking-[.14em]">
                {group.label}
              </small>
              <h2 className="mt-[10px] mb-[22px] text-[30px] tracking-[-.04em]">
                {group.title}
              </h2>
              {group.links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-t border-[#ebe3d5] py-[10px] text-[13px] font-bold hover:text-[#8c6118]"
                >
                  {link.label}
                </Link>
              ))}
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
