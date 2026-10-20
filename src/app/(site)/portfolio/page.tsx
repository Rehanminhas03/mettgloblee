import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Btn, Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { OperationsJourney } from '@/components/case-studies/OperationsJourney';
import { WorkCardGrid } from '@/components/site/WorkCards';
import { INTERNATIONAL, LOCAL, withoutStats } from '@/lib/portfolio';
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
            <HeroAccent>International and local.</HeroAccent>
          </>
        }
        actions={
          <span className="flex flex-wrap gap-3">
            <Btn href="#international" variant="dark">
              International clients
            </Btn>
            <Btn href="#local">Local clients</Btn>
          </span>
        }
      >
        Clients and projects across growth, eCommerce, web, automation and
        operations. Detailed case studies are linked where published.
      </PageHero>

      <div id="international" className="scroll-mt-24">
        <Section className="!pt-8">
          <SectionHead heading="International clients">
            Marketplace operations, supply chain delivery, websites and software
            for international businesses.
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
              International project details are being prepared for publication.
              References are available on request,{' '}
              <Link href="/appointment" className="text-p-gold font-bold">
                book a meeting
              </Link>
              .
            </div>
          )}
        </Section>
      </div>

      <div id="local" className="scroll-mt-24">
        <Section>
          <SectionHead heading="Local clients">
            Projects and partners in Pakistan.
          </SectionHead>
          <WorkCardGrid items={withoutStats(LOCAL)} />
        </Section>
      </div>

      <ContactBand
        heading="Have a project in mind?"
        copy="Tell us what you are building and we will show you relevant work."
        ctaHref="/contact"
        ctaLabel="Start a conversation"
      />
    </PageShell>
  );
}
