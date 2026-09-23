import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import {
  Card,
  CardGrid,
  ProcessGrid,
  RosterList,
  Section,
  SectionHead,
} from '@/components/page/ui';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { PROJECT_CTA } from '@/lib/navigation';

export const metadata = pageMetadata('/about');

const LEADERSHIP = [
  {
    label: 'FOUNDER',
    title: 'Hammad Ayub',
    copy: 'Leads marketing, paid media, customer relationships, content direction and commercial positioning.',
    linkHref: 'mailto:hammad@mettglobal.com',
    linkLabel: 'hammad@mettglobal.com',
  },
  {
    label: 'CO-FOUNDER',
    title: 'Muhammad Ahmad Aamir',
    copy: 'Leads business development, sales coordination, eCommerce, logistics, supply chain and operational execution.',
    linkHref: 'mailto:ahmad@mettglobal.com',
    linkLabel: 'ahmad@mettglobal.com',
  },
  {
    label: 'U.S. BUSINESS DEVELOPMENT',
    title: 'Usman Rafiq',
    copy: 'Director, U.S. Business Development and U.S. Representative for commercial conversations and client coordination.',
    linkHref: 'mailto:usman@mettglobal.com',
    linkLabel: 'usman@mettglobal.com',
  },
];

const TEAM = [
  { name: 'Rehan Minhas', role: 'Technical Delivery Lead' },
  { name: 'Abdullah Randhawa', role: 'Web Developer' },
  { name: 'Muhammad Rafay', role: 'Cybersecurity & Full-Stack Engineer' },
  { name: 'Farasat Ali', role: 'eCommerce Operations Specialist' },
  { name: 'Ali Hassan', role: 'Creative & eCommerce Specialist' },
  { name: 'Muhammad Ilyas', role: 'AI Automation Engineer' },
  { name: 'Junaid', role: 'AI Video & Automation Specialist' },
  { name: 'Shahrukh Butt', role: 'Project Operations Coordinator' },
  { name: 'Mohsin Zarar', role: 'Full-Stack Developer' },
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
    <PageShell
      navCta={PROJECT_CTA}
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ]}
    >
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
        connected operating model. The core team stays close to the work, then
        expands with additional specialists when the scope demands it.
      </PageHero>

      <Section>
        <SectionHead heading="Leadership">
          Commercial ownership stays close to the founders while specialist
          delivery flexes around the problem.
        </SectionHead>
        <CardGrid>
          {LEADERSHIP.map(person => (
            <Card key={person.title} {...person} />
          ))}
        </CardGrid>
      </Section>

      <Section dark>
        <SectionHead heading="Core team, wider bench" dark>
          The visible core team covers web, full-stack development,
          cybersecurity, eCommerce, creative, AI automation, video and project
          operations.
        </SectionHead>
        <RosterList people={TEAM} />
      </Section>

      <Section>
        <SectionHead heading="How we operate">
          A small core owns the relationship and the work. Extra capacity is
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
