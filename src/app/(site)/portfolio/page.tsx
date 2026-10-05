import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Btn, Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
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

      <div id="local" className="scroll-mt-24">
        <Section>
          <SectionHead heading="Local clients">
            Projects and partners in Pakistan.
          </SectionHead>
          <WorkCardGrid items={withoutStats(LOCAL)} />
        </Section>
      </div>

      <div id="international" className="scroll-mt-24">
        <Section>
          <SectionHead heading="International clients">
            Websites, SEO and custom software delivered for businesses in the
            United States.
          </SectionHead>
          {INTERNATIONAL.length ? (
            <WorkCardGrid
              items={withoutStats(INTERNATIONAL)}
              cols={INTERNATIONAL.length % 2 ? 3 : 2}
            />
          ) : (
            <div className="border-p-line text-p-muted rounded-3xl border border-dashed p-8 text-[15px] leading-[1.65]">
              International project details are being prepared for publication.
              References are available on request —{' '}
              <Link href="/appointment" className="text-p-gold font-bold">
                book a meeting
              </Link>
              .
            </div>
          )}
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
