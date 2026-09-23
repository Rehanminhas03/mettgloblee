import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { PROJECT_CTA, SERVICE_FOOTER, SERVICE_NAV } from '@/lib/navigation';

export const metadata = pageMetadata('/operations-supply-chain');

const BLOCKS = [
  {
    heading: 'Inventory control',
    copy: 'Cycle counts, variance review, stock risk and replenishment create a stronger base for commercial decisions.',
  },
  {
    heading: 'Warehouse & 3PL coordination',
    copy: 'Support operating routines around inbound, outbound, service levels, issue resolution and 3PL communication.',
  },
  {
    heading: 'Logistics & claims',
    copy: 'Carrier performance, lost or damaged shipments, overcharge review and claims workflows require repeatable ownership.',
  },
  {
    heading: 'Management visibility',
    copy: 'Operational reporting should focus on exceptions, lead times, inventory health and open issues.',
  },
];

export default function OperationsSupplyChainPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={PROJECT_CTA}
      footerLinks={SERVICE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/operations-supply-chain')} />
      <JsonLd data={serviceJsonLd('/operations-supply-chain')} />

      <PageHero
        kicker="SERVICE / OPERATIONS"
        title={
          <>
            Make the operation
            <br />
            <HeroAccent>visible and controllable.</HeroAccent>
          </>
        }
      >
        Inventory, warehouses, carriers, 3PLs and reporting all create handoffs.
        The goal is to make ownership, exceptions and performance easier to see.
      </PageHero>

      <ServiceLayout
        sideKicker="SUPPLY CHAIN"
        sideHeading="Practical operating support."
        ctaHref="/contact"
        ctaLabel="Discuss operations"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Operational clarity compounds.</>}
        copy={
          'Better visibility makes planning, escalation and improvement easier.'
        }
        ctaHref="/contact"
        ctaLabel="Review your operation"
      />
    </PageShell>
  );
}
