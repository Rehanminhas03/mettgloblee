import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { LeaderCard, type Leader } from '@/components/page/LeaderCard';
import {
  Card,
  CardGrid,
  ProcessGrid,
  Section,
  SectionHead,
} from '@/components/page/ui';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/about');

const LEADERSHIP: Leader[] = [
  {
    role: 'Founder',
    name: 'Hammad Ayub',
    copy: 'Leads marketing, paid media, customer relationships, content direction and commercial positioning.',
    email: 'hammad@mettglobal.com',
    photo: '/team/HammadAyub.jpeg',
    whatsapp: '+923355005901',
    phone: { href: 'tel:+923355005901', label: '+92 335 500 5901' },
  },
  {
    role: 'Co-Founder',
    name: 'Muhammad Ahmad Aamir',
    copy: 'Leads business development, sales coordination, eCommerce, logistics, supply chain and operational execution.',
    email: 'ahmad@mettglobal.com',
    photo: '/team/AhmedAmir.PNG',
    whatsapp: '+923046551553',
    phone: { href: 'tel:+923134262282', label: '+92 313 426 2282' },
  },
  {
    role: 'Director, U.S. Business Development',
    name: 'Usman Rafiq',
    copy: 'U.S. Representative for MettGlobal, leading commercial conversations and U.S. client coordination.',
    email: 'usman@mettglobal.com',
    photo: '/team/UsmanRafiq.jpeg',
    whatsapp: '18328580716',
    phone: { href: 'tel:+18328580716', label: '+1 (832) 858-0716' },
  },
];

const REASONS = [
  {
    label: '01',
    title: 'Founder-led direction',
    copy: 'Commercial decisions, positioning and priorities stay close to MettGlobal leadership instead of disappearing into layers of account management.',
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

      <PageHero
        kicker="ABOUT METTGLOBAL"
        title={
          <>
            Founder-led.
            <br />
            <HeroAccent>Built to execute.</HeroAccent>
          </>
        }
      >
        MettGlobal brings commercial thinking and specialist delivery into one
        connected operating model. The founders stay close to the work, then
        bring in specialists when the scope demands it.
      </PageHero>

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
        <SectionHead heading="Why MettGlobal" dark>
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
        ctaLabel="Talk to MettGlobal"
      />
    </PageShell>
  );
}
