import { PageShell } from './PageShell';
import { PageHero, HeroAccent } from './PageHero';
import { ServiceLayout } from './ServiceLayout';
import { ContactBand } from './ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, serviceJsonLd } from '@/lib/seo';
import type { Service } from '@/lib/services';

/** The shared layout for the four service pages, driven by `lib/services`. */
export function ServicePage({ service }: { service: Service }) {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd(service.href)} />
      <JsonLd data={serviceJsonLd(service.href)} />

      <PageHero
        kicker={service.hero.kicker}
        title={
          <>
            {service.hero.title}
            <br />
            <HeroAccent>{service.hero.accent}</HeroAccent>
          </>
        }
      >
        {service.hero.copy}
      </PageHero>

      <ServiceLayout
        sideKicker="WHAT'S INCLUDED"
        sideHeading={service.sideHeading}
        ctaHref="/contact"
        ctaLabel="Discuss this service"
        blocks={service.details}
      />

      <ContactBand
        heading={service.band.heading}
        copy={service.band.copy}
        ctaHref="/appointment"
        ctaLabel={service.band.cta}
      />
    </PageShell>
  );
}
