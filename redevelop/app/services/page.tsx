import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/services');

const SERVICES = [
  {
    num: '01',
    title: 'eCommerce Growth & Operations',
    copy: 'Marketplace execution, inventory, replenishment, fulfillment, claims and catalogue health.',
    href: '/ecommerce-growth',
    cta: 'Explore eCommerce',
  },
  {
    num: '02',
    title: 'Web Development & Conversion',
    copy: 'Corporate sites, landing pages, UX, conversion paths, performance and technical quality.',
    href: '/web-development',
    cta: 'Explore web',
  },
  {
    num: '03',
    title: 'AI Automation',
    copy: 'Workflow mapping, AI-assisted processes, routing, extraction and human-in-the-loop systems.',
    href: '/ai-automation',
    cta: 'Explore automation',
  },
  {
    num: '04',
    title: 'Digital Marketing & Creative',
    copy: 'Paid media, campaign creative, offer diagnosis, landing-page alignment and performance thinking.',
    href: '/digital-marketing',
    cta: 'Explore growth',
  },
  {
    num: '05',
    title: 'Supply Chain & Operations',
    copy: 'Inventory control, warehouse workflows, 3PL coordination, logistics and reporting.',
    href: '/operations-supply-chain',
    cta: 'Explore operations',
  },
  {
    num: '06',
    title: 'Lead Generation & Sales Systems',
    copy: 'Prospecting, qualification, CRM structure, outreach and follow-up systems.',
    href: '/lead-generation-sales',
    cta: 'Explore sales systems',
  },
  {
    num: '07',
    title: 'AI Video & Content Production',
    copy: 'AI-supported video concepts, promos, explainers and campaign content.',
    href: '/ai-content-production',
    cta: 'Explore content production',
  },
  {
    num: '08',
    title: 'Audits & Diagnostics',
    copy: 'Independent review of websites, funnels, eCommerce operations, SEO/performance and workflows.',
    href: '/audits-diagnostics',
    cta: 'Explore audits',
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/services')} />

      {/* .hero */}
      <section className="max-b620:px-6 max-w-[1320px] px-[8vw] pt-[110px] pb-[90px]">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          CAPABILITIES
        </span>
        <h1 className="my-[24px] mb-[34px] text-[clamp(52px,8vw,110px)] leading-[.9] tracking-[-.07em]">
          One partner.
          <br />
          <span className="text-p-gold">Connected disciplines.</span>
        </h1>
        <p className="text-p-muted max-b620:text-[16px] my-[1em] max-w-[780px] text-[18px] leading-[1.75]">
          We work across growth, technology and operations so a business problem
          does not get trapped inside one specialist silo.
        </p>
      </section>

      {/* .section > .grid */}
      <section className="max-b620:px-6 px-[8vw] py-[90px]">
        <div className="max-b900:grid-cols-2 max-b620:grid-cols-1 grid grid-cols-3 gap-4">
          {SERVICES.map(service => (
            <article
              key={service.num}
              className="border-p-line flex min-h-[260px] flex-col rounded-3xl border bg-white/[.62] p-7"
            >
              <small className="text-p-gold text-[10px] font-black tracking-[.16em]">
                {service.num}
              </small>
              <h3 className="mt-[18px] mb-[14px] text-[28px] leading-[1.05] tracking-[-.04em]">
                {service.title}
              </h3>
              <p className="text-p-muted my-[1em] leading-[1.7]">
                {service.copy}
              </p>
              <Link
                href={service.href}
                className="text-p-gold mt-auto text-xs font-black"
              >
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* .contact-band */}
      <section className="max-b620:px-6 bg-[linear-gradient(135deg,#c89528,#e1bc67)] px-[8vw] py-[90px]">
        <h2 className="mt-0 mb-6 text-[clamp(42px,6vw,82px)] leading-[.95] tracking-[-.06em]">
          Start with the constraint.
          <br />
          Not the service list.
        </h2>
        <p className="my-[1em] max-w-[700px] leading-[1.7]">
          Tell us where the business is stuck. We will map the problem to the
          right combination of strategy, creative, technology and operations.
        </p>
        <Link
          href="/appointment"
          className="border-p-ink bg-p-ink inline-flex items-center justify-center rounded-full border px-5 py-[15px] text-xs font-extrabold text-white"
        >
          Book a diagnostic meeting
        </Link>
      </section>
    </PageShell>
  );
}
