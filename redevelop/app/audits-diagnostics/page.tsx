import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { BOOK_CTA, SERVICE_NAV, STANDARD_FOOTER } from '@/lib/navigation';

export const metadata = pageMetadata('/audits-diagnostics');

const BLOCKS = [
  {
    heading: 'Website and conversion audits',
    copy: 'Review message clarity, mobile usability, conversion paths, technical quality, performance, SEO fundamentals and trust signals.',
  },
  {
    heading: 'eCommerce and operations audits',
    copy: 'Inspect inventory accuracy, marketplace health, handoffs, claims, fulfillment, returns and operational reporting.',
  },
  {
    heading: 'Workflow and automation audits',
    copy: 'Map repetitive processes, decision points, exceptions, tools and handoffs before recommending automation.',
  },
  {
    heading: 'Actionable output',
    copy: 'Rank findings by severity, business impact, confidence and effort so the report produces a sequence of work rather than a long unprioritized issue list.',
  },
];

export default function AuditsDiagnosticsPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={BOOK_CTA}
      footerLinks={STANDARD_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/audits-diagnostics')} />
      <JsonLd data={serviceJsonLd('/audits-diagnostics')} />

      <PageHero
        kicker="AUDITS & DIAGNOSTICS"
        title={
          <>
            Find the constraint.
            <br />
            <HeroAccent>Prioritize what changes next.</HeroAccent>
          </>
        }
      >
        A useful audit should turn evidence into decisions: what is wrong, why
        it matters, what to fix first, who owns it and how improvement will be
        measured.
      </PageHero>

      <ServiceLayout
        sideKicker="DIAGNOSTIC WORK"
        sideHeading="Evidence before recommendations."
        ctaHref="/appointment"
        ctaLabel="Request an audit discussion"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Do not optimize blindly.</>}
        copy={
          'Use a diagnostic engagement when the problem is visible but the cause is not yet clear.'
        }
        ctaHref="/insight-audit-framework"
        ctaLabel="Read the audit framework"
      />
    </PageShell>
  );
}
