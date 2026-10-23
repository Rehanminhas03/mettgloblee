import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Btn, Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { OperationsJourney } from '@/components/case-studies/OperationsJourney';
import { WorkCardGrid } from '@/components/site/WorkCards';
import { PortfolioTabs } from '@/components/site/PortfolioTabs.client';
import { INTERNATIONAL, LOCAL, withoutStats } from '@/lib/portfolio';
import { SERVICE_TABS, forService } from '@/lib/portfolioServices';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/portfolio');

export default function PortfolioPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/portfolio')} />
      <JsonLd data={pageJsonLd('/portfolio', 'CollectionPage')} />

      <PageHero
        compact
        kicker="PORTFOLIO"
        title={
          <>
            Selected work.
            <br />
            <HeroAccent>Local and international.</HeroAccent>
          </>
        }
        actions={
          <span className="flex flex-wrap gap-3">
            <Btn href="#local" variant="dark">
              Local clients
            </Btn>
            <Btn href="#international">International clients</Btn>
          </span>
        }
      >
        Clients and projects across growth, eCommerce, web, automation and
        operations. Detailed case studies are linked where published.
      </PageHero>

      <PortfolioTabs
        tabs={[{ id: 'all', label: 'All' }, ...SERVICE_TABS]}
        panels={{
          all: (
            <>
              <div id="local" className="scroll-mt-24">
                <Section>
                  <SectionHead heading="Local clients">
                    Projects and partners in Pakistan.
                  </SectionHead>
                  <WorkCardGrid items={withoutStats(LOCAL)} />
                </Section>
              </div>

              <div id="international" className="scroll-mt-24">
                <Section className="!pt-8">
                  <SectionHead heading="International clients">
                    Marketplace operations, supply chain delivery, websites and
                    software for international businesses.
                  </SectionHead>

                  <OperationsJourney />

                  <h3 className="mt-14 mb-8 text-[clamp(28px,3vw,42px)] leading-[1.05] tracking-[-.04em]">
                    Websites and software
                  </h3>
                  {INTERNATIONAL.length ? (
                    <WorkCardGrid
                      items={withoutStats(INTERNATIONAL)}
                      cols={INTERNATIONAL.length % 2 ? 3 : 2}
                      titleAs="h4"
                    />
                  ) : (
                    <div className="border-p-line text-p-muted rounded-3xl border border-dashed p-8 text-[15px] leading-[1.65]">
                      International project details are being prepared for
                      publication. References are available on request,{' '}
                      <Link
                        href="/appointment"
                        className="text-p-gold font-bold"
                      >
                        book a meeting
                      </Link>
                      .
                    </div>
                  )}
                </Section>
              </div>
            </>
          ),
          ...Object.fromEntries(
            SERVICE_TABS.map(tab => {
              const local = forService(withoutStats(LOCAL), tab.id);
              const intl = forService(withoutStats(INTERNATIONAL), tab.id);
              return [
                tab.id,
                <Section key={tab.id}>
                  {local.length ? (
                    <>
                      <SectionHead heading="Local clients">
                        Projects and partners in Pakistan.
                      </SectionHead>
                      <WorkCardGrid items={local} />
                    </>
                  ) : null}
                  {tab.id === 'ecommerce' ? (
                    <>
                      <SectionHead heading="International clients">
                        Marketplace operations and supply chain delivery for
                        international businesses.
                      </SectionHead>
                      <OperationsJourney />
                    </>
                  ) : intl.length ? (
                    <div className={local.length ? 'mt-[70px]' : ''}>
                      <SectionHead heading="International clients">
                        Projects for international businesses.
                      </SectionHead>
                      <WorkCardGrid items={intl} titleAs="h4" />
                    </div>
                  ) : null}
                </Section>,
              ];
            }),
          ),
        }}
      />

      <ContactBand
        heading="Have a project in mind?"
        copy="Tell us what you are building and we will show you relevant work."
        ctaHref="/contact"
        ctaLabel="Start a conversation"
      />
    </PageShell>
  );
}
