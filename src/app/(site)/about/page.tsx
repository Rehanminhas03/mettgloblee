import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { LeaderCard } from '@/components/page/LeaderCard';
import { LEADERSHIP } from '@/lib/leadership';
import {
  Card,
  CardGrid,
  ProcessGrid,
  Section,
  SectionHead,
} from '@/components/page/ui';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { ADDRESS_LINE, SITE_URL, SOCIAL_PROFILES } from '@/lib/site';
import { SERVICES } from '@/lib/services';

export const metadata = pageMetadata('/about');

const STATS = [
  { value: '2025', label: 'Founded' },
  { value: String(SERVICES.length), label: 'Service lines' },
  { value: 'Global', label: 'US · UK · EU · PK' },
];

const FACT_HEADING =
  'm-0 mb-4 text-[10px] font-black tracking-[.18em] text-p-gold2 uppercase';
const FACT_LIST = 'm-0 list-none p-0';
const FACT_ROW = 'border-t border-white/10 py-3 leading-[1.5]';

const REASONS = [
  {
    label: '01',
    title: 'Founder-led direction',
    copy: 'Commercial decisions, positioning and priorities stay close to Mett Global leadership instead of disappearing into layers of account management.',
  },
  {
    label: '02',
    title: 'One connected team',
    copy: 'Growth, commerce, web, AI, creative, sales and operations can work as one system when the engagement requires it.',
  },
  {
    label: '03',
    title: 'Built around the constraint',
    copy: 'We start with the business problem and assemble the right capability mix instead of forcing every client into the same package.',
  },
  {
    label: '04',
    title: 'Proof over theatre',
    copy: 'We separate verified work from ambition, define useful KPIs and avoid performance claims we cannot substantiate.',
  },
];

const PROCESS = [
  {
    num: '01',
    title: 'Diagnose',
    copy: 'Understand the constraint before recommending a service.',
  },
  {
    num: '02',
    title: 'Design',
    copy: 'Define the intervention, ownership and measures that matter.',
  },
  {
    num: '03',
    title: 'Execute',
    copy: 'Bring in the right specialists and keep commercial ownership clear.',
  },
  {
    num: '04',
    title: 'Improve',
    copy: 'Use operating reality and data to decide what changes next.',
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/about')} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: `${SITE_URL}/about`,
          name: 'About Mett Global',
          dateModified: '2026-10-14',
          about: { '@id': `${SITE_URL}/#organization` },
          mainEntity: LEADERSHIP.map(person => ({
            '@type': 'Person',
            name: person.name,
            jobTitle: person.role,
            email: person.email,
            worksFor: { '@id': `${SITE_URL}/#organization` },
          })),
        }}
      />

      <PageHero
        kicker="ABOUT METT GLOBAL"
        title={
          <>
            Founder-led.
            <br />
            <HeroAccent>Built to execute.</HeroAccent>
          </>
        }
      >
        Mett Global brings commercial thinking and specialist delivery into one
        connected operating model. The founders stay close to the work, then
        bring in specialists when the scope demands it.
      </PageHero>

      <Section dark className="!py-[72px]">
        <div id="company-facts" className="scroll-mt-24">
          <span className="text-p-gold2 text-[10px] font-black tracking-[.2em]">
            AT A GLANCE
          </span>
          <h2 className="mt-4 mb-4 text-[clamp(32px,4vw,52px)] leading-[1.05] tracking-[-.04em]">
            Company facts
          </h2>
          <p className="m-0 max-w-[640px] leading-[1.7] text-[#cfcabd]">
            Mett Global was founded in 2025. Headquartered in Islamabad, Pakistan with active operations across the United States, United Kingdom, Canada, and European Union, the firm provides end-to-end performance marketing, custom software development, AI automation, and multi-channel e-commerce supply chain management.
          </p>

          {/* Four headline figures */}
          <dl className="max-b760:grid-cols-2 max-b760:gap-y-8 m-0 mt-12 grid grid-cols-3 gap-x-6 border-t border-white/15 pt-8">
            {STATS.map(stat => (
              <div key={stat.label}>
                <dd className="text-p-gold2 m-0 text-[clamp(30px,3.4vw,48px)] leading-none font-extrabold tracking-[-.04em]">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-[11px] font-bold tracking-[.14em] text-[#a8a398] uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          {/* Details: plain columns, no boxes */}
          <div className="max-b900:grid-cols-1 max-b900:gap-10 mt-14 grid grid-cols-3 gap-x-12">
            <div>
              <h3 className={FACT_HEADING}>Leadership</h3>
              <ul className={FACT_LIST}>
                {LEADERSHIP.map(person => (
                  <li key={person.email} className={FACT_ROW}>
                    <strong className="block text-[15px] text-white">
                      {person.name}
                    </strong>
                    <span className="text-[13px] text-[#a8a398]">
                      {person.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={FACT_HEADING}>Services</h3>
              <ul className={FACT_LIST}>
                {SERVICES.map(service => (
                  <li key={service.href} className={FACT_ROW}>
                    <Link
                      href={service.href}
                      className="hover:text-p-gold2 text-[15px] text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={FACT_HEADING}>Find us</h3>
              <ul className={FACT_LIST}>
                <li className={FACT_ROW}>
                  <a
                    href="mailto:contact@mettglobal.com"
                    className="hover:text-p-gold2 text-[15px] text-white transition-colors"
                  >
                    contact@mettglobal.com
                  </a>
                </li>
                <li className={`${FACT_ROW} text-[13px] text-[#a8a398]`}>
                  {ADDRESS_LINE}
                </li>
              </ul>
              <p className="mt-5 mb-0 flex flex-wrap gap-2">
                {SOCIAL_PROFILES.map(profile => (
                  <a
                    key={profile.href}
                    href={profile.href}
                    target="_blank"
                    rel="noopener"
                    className="hover:border-p-gold2 hover:text-p-gold2 rounded-full border border-white/20 px-3 py-[5px] text-[12px] font-bold text-white transition-colors"
                  >
                    {profile.label}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead heading="Leadership">
          Commercial ownership stays close to the founders while specialist
          delivery flexes around the problem.
        </SectionHead>
        <div className="max-b1100:grid-cols-2 max-b1100:[&>*:last-child:nth-child(odd)]:col-span-full max-b1100:[&>*:last-child:nth-child(odd)]:w-[calc(50%-9px)] max-b1100:[&>*:last-child:nth-child(odd)]:justify-self-center max-b760:grid-cols-1 max-b760:[&>*:last-child:nth-child(odd)]:w-full grid grid-cols-3 gap-[18px]">
          {LEADERSHIP.map(leader => (
            <LeaderCard key={leader.email} leader={leader} />
          ))}
        </div>
      </Section>

      <Section dark>
        <SectionHead heading="Why Mett Global" dark>
          Senior attention and connected execution, without the agency
          hierarchy.
        </SectionHead>
        <CardGrid cols={4}>
          {REASONS.map(reason => (
            <Card key={reason.title} {...reason} dark />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionHead heading="How we operate">
          The founders own the relationship and the work. Extra capacity is
          added deliberately rather than making every client navigate a large
          agency hierarchy.
        </SectionHead>
        <ProcessGrid steps={PROCESS} />
      </Section>

      <ContactBand
        heading="Bring us the problem."
        copy="We will tell you which part of the system deserves attention first."
        ctaHref="/contact"
        ctaLabel="Talk to Mett Global"
      />
    </PageShell>
  );
}
