import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROJECT_CTA, SERVICE_FOOTER, SERVICE_NAV } from '@/lib/navigation';

export const metadata = pageMetadata('/ecommerce-growth');

const BLOCKS = [
  {
    heading: 'Marketplace operations',
    copy: 'Support can cover Amazon, Walmart and other channels across catalogue execution, inventory visibility, shipment planning, replenishment, fulfillment coordination and issue resolution.',
  },
  {
    heading: 'Inventory & replenishment',
    copy: 'Improve available-to-sell accuracy, identify stock risk and build clearer replenishment routines before stockouts become a marketing problem.',
  },
  {
    heading: 'Claims, returns & exceptions',
    copy: 'Operational leakage often hides in lost stock, damaged orders, carrier claims, marketplace reimbursements and unresolved returns.',
  },
  {
    heading: 'Reporting that leads to action',
    copy: 'Dashboards should surface stock risk, late orders, unresolved claims, return reasons and marketplace issues that require intervention.',
  },
];

export default function EcommerceGrowthPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={PROJECT_CTA}
      footerLinks={SERVICE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/ecommerce-growth')} />
      <JsonLd data={serviceJsonLd('/ecommerce-growth')} />

      <PageHero
        kicker="SERVICE / ECOMMERCE"
        title={
          <>
            Growth after
            <br />
            <HeroAccent>the click.</HeroAccent>
          </>
        }
      >
        Commerce performance depends on more than ads. Inventory, catalogue
        quality, marketplace health, fulfillment, claims and operational
        handoffs all shape the result.
      </PageHero>

      <ServiceLayout
        sideKicker="WHAT WE HELP WITH"
        sideHeading="Connected marketplace and operating support."
        ctaHref="/contact"
        ctaLabel="Discuss eCommerce"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Commerce is a system.</>}
        copy={
          'We can review the chain from listing and demand through stock, fulfillment and returns.'
        }
        ctaHref="/contact"
        ctaLabel="Request an eCommerce review"
      />
    </PageShell>
  );
}
