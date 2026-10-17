import { ServicePage } from '@/components/page/ServicePage';
import { Btn, Section } from '@/components/page/ui';
import { pageMetadata } from '@/lib/seo';
import { getService } from '@/lib/services';

export const metadata = pageMetadata('/ecommerce-supply-chain');

/** Points the service page at the operations case studies in the portfolio. */
function OperationsWork() {
  return (
    <Section>
      <h2 className="mt-0 mb-4 text-[clamp(28px,3vw,42px)] leading-[1.05] tracking-[-.04em]">
        See the work behind the service
      </h2>
      <p className="text-p-muted mt-0 mb-6 max-w-[640px] leading-[1.7]">
        Explore claims recovery, warehouse operations, sourcing and marketplace
        delivery.
      </p>
      <Btn href="/portfolio#international" variant="dark">
        Explore the operations case studies
      </Btn>
    </Section>
  );
}

export default function EcommerceSupplyChainPage() {
  return (
    <ServicePage
      service={getService('/ecommerce-supply-chain')}
      extra={<OperationsWork />}
    />
  );
}
