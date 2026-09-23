import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactBand } from '@/components/page/ContactBand';
import { Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import {
  BlogCard,
  BlogGrid,
  UpdateCard,
  UpdateGrid,
  type BlogArt,
  type PolicyArt,
} from '@/components/page/blog';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { GLOBAL_FOOTER_NOTE } from '@/lib/navigation';

export const metadata = pageMetadata('/blog');

const UPDATES: {
  art: PolicyArt;
  artLabel: string;
  artFigure: string;
  artNote: string;
  category: string;
  title: React.ReactNode;
  copy: string;
  href: string;
}[] = [
  {
    art: 'amazon',
    artLabel: 'AMAZON / 2026',
    artFigure: '+$0.08',
    artNote: 'average FBA fee increase per unit',
    category: 'ECOMMERCE · PLATFORM UPDATE',
    title: (
      <>
        Amazon&rsquo;s 2026 US FBA fee changes: what operators should
        recalculate
      </>
    ),
    copy: 'Effective dates, unit economics, packaging, inbound choices and inventory-health actions.',
    href: '/update-amazon-fba-fees-2026',
  },
  {
    art: 'ai-act',
    artLabel: 'EU AI ACT',
    artFigure: '02 AUG',
    artNote: '2026 transparency rules apply',
    category: 'AI · REGULATORY UPDATE',
    title:
      'EU AI Act transparency rules are now live: what AI-facing teams should know',
    copy: 'User disclosure, synthetic-content marking, deepfake labelling and operational review.',
    href: '/update-eu-ai-act-transparency-2026',
  },
  {
    art: 'consent',
    artLabel: 'GOOGLE ADS',
    artFigure: 'EEA',
    artNote: 'consent signals affect measurement & personalization',
    category: 'MARKETING · PRIVACY POLICY',
    title: 'Google Ads consent requirements in 2026: a practical EEA checklist',
    copy: 'Consent banners, consent signals, tags, measurement and remarketing considerations.',
    href: '/update-google-ads-consent-2026',
  },
  {
    art: 'ics',
    artLabel: 'EU CUSTOMS / ICS2',
    artFigure: 'ALL MODES',
    artNote: 'air · sea · road · rail',
    category: 'SUPPLY CHAIN · COMPLIANCE',
    title:
      'ICS2 in 2026: why complete ENS data is now an operating requirement',
    copy: 'Data quality, filing responsibility and shipment-readiness for goods entering the EU.',
    href: '/update-eu-ics2-2026',
  },
  {
    art: 'search',
    artLabel: 'GOOGLE SEARCH',
    artFigure: '2026',
    artNote: 'crawl · index · quality · page experience',
    category: 'WEB · SEARCH',
    title:
      'Google Search in 2026: the technical basics that still decide whether pages can compete',
    copy: 'Crawlability, indexing, secure delivery, mobile quality, accessibility and performance.',
    href: '/update-google-search-2026',
  },
];

const FIELD_GUIDES: {
  art?: BlogArt;
  num: string;
  topic: string;
  readTime: string;
  title: string;
  copy: string;
  href: string;
}[] = [
  {
    num: '01',
    topic: 'ECOMMERCE OPERATIONS',
    readTime: '9 MIN READ',
    title:
      'The eCommerce growth leak most teams miss: operations after the click',
    copy: 'Inventory accuracy, replenishment, order handoffs, returns and marketplace health.',
    href: '/insight-ecommerce-operations',
  },
  {
    art: 'web',
    num: '02',
    topic: 'WEBSITE & CRO',
    readTime: '8 MIN READ',
    title: 'A practical website conversion audit before you spend more on ads',
    copy: 'Message clarity, trust, mobile friction, forms and ad-to-page continuity.',
    href: '/insight-conversion-audit',
  },
  {
    art: 'ai',
    num: '03',
    topic: 'AI AUTOMATION',
    readTime: '10 MIN READ',
    title: 'Where AI automation actually saves time in a growing business',
    copy: 'Workflow mapping, deterministic work, exception handling and measurement.',
    href: '/insight-ai-automation',
  },
  {
    art: 'growth',
    num: '04',
    topic: 'DIGITAL MARKETING',
    readTime: '7 MIN READ',
    title: 'Why better ads cannot rescue a weak offer and landing page',
    copy: 'Diagnose audience, creative, offer, page and follow-up as one acquisition system.',
    href: '/insight-growth-system',
  },
  {
    art: 'supply',
    num: '05',
    topic: 'SUPPLY CHAIN',
    readTime: '9 MIN READ',
    title: 'Inventory accuracy is a system, not a stock count',
    copy: 'Control receiving, adjustments, locations, cycle counts and exception ownership.',
    href: '/insight-supply-chain-control',
  },
  {
    art: 'sales',
    num: '06',
    topic: 'LEAD GENERATION',
    readTime: '9 MIN READ',
    title: 'Build a prospecting system before hiring more salespeople',
    copy: 'ICP definition, buying signals, qualification, CRM hygiene, outreach and follow-up.',
    href: '/insight-lead-generation-system',
  },
  {
    art: 'video',
    num: '07',
    topic: 'AI VIDEO & CONTENT',
    readTime: '7 MIN READ',
    title: 'The brief that makes AI video useful instead of generic',
    copy: 'Audience, promise, proof, structure, visual direction and human review.',
    href: '/insight-ai-video-brief',
  },
  {
    art: 'audit',
    num: '08',
    topic: 'AUDITS & DIAGNOSTICS',
    readTime: '8 MIN READ',
    title: 'How to run an audit that produces decisions, not a 70-page PDF',
    copy: 'Evidence, severity, business impact, ownership, prioritization and measurable next steps.',
    href: '/insight-audit-framework',
  },
];

const PLAYBOOKS: {
  art: BlogArt;
  num: string;
  topic: string;
  readTime: string;
  title: string;
  copy: string;
  href: string;
  linkLabel: string;
}[] = [
  {
    art: 'measurement',
    num: '09',
    topic: 'CAMPAIGN MEASUREMENT',
    readTime: '8 MIN READ',
    title: 'UTMs that survive reporting: a practical campaign naming system',
    copy: 'Build a naming contract that keeps source, medium, campaign and creative data usable.',
    href: '/insight-utm-governance',
    linkLabel: 'Read the operator playbook',
  },
  {
    art: 'catalog',
    num: '10',
    topic: 'PRODUCT DATA QUALITY',
    readTime: '9 MIN READ',
    title: 'The product feed is part of the storefront',
    copy: 'Audit IDs, titles, images, variants, price and availability before adding more spend.',
    href: '/insight-product-feed-health',
    linkLabel: 'Read the operator playbook',
  },
  {
    art: 'landed',
    num: '11',
    topic: 'CROSS-BORDER OPERATIONS',
    readTime: '10 MIN READ',
    title: 'Landed cost before launch: the margin model operators should use',
    copy: 'Make freight, duty, destination charges and returns risk visible before you commit.',
    href: '/insight-landed-cost-model',
    linkLabel: 'Read the operator playbook',
  },
  {
    art: 'scorecard',
    num: '12',
    topic: '3PL SELECTION',
    readTime: '9 MIN READ',
    title: 'The 3PL scorecard: compare warehouses beyond pick fees',
    copy: 'Use reliability, inventory control, systems, cost transparency and resilience.',
    href: '/insight-3pl-scorecard',
    linkLabel: 'Read the operator playbook',
  },
  {
    art: 'passport',
    num: '13',
    topic: 'PRODUCT DATA & COMPLIANCE',
    readTime: '10 MIN READ',
    title: 'Digital Product Passports: prepare the data now',
    copy: 'Organize product identity, evidence, ownership and access before the data rush.',
    href: '/insight-digital-product-passport',
    linkLabel: 'Read the practice note',
  },
];

export default function BlogPage() {
  return (
    <PageShell
      footerNote={GLOBAL_FOOTER_NOTE}
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/appointment', label: 'Book a meeting' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/blog')} />

      <PageHero
        kicker="METTGLOBAL / BLOG"
        title={
          <>
            Current updates.
            <br />
            <HeroAccent>Practical interpretation.</HeroAccent>
          </>
        }
      >
        Platform changes and policy updates matter only when teams understand
        what changes operationally. We pair current briefs sourced from official
        documentation with evergreen field guides that help businesses make
        better decisions.
      </PageHero>

      <Section>
        <SectionHead heading="Current briefs">
          Policy and platform notes checked against official sources.{' '}
          <strong>Last reviewed: 20 September 2026.</strong> Always verify the
          linked source before acting because platform rules can change.
        </SectionHead>
        <UpdateGrid>
          {UPDATES.map(update => (
            <UpdateCard
              key={update.href}
              {...update}
              linkLabel="Read current brief"
            />
          ))}
        </UpdateGrid>
      </Section>

      <Section dark>
        <SectionHead heading="Field guides" dark>
          Eight evergreen guides mapped to the services MettGlobal currently
          offers.
        </SectionHead>
        <BlogGrid>
          {FIELD_GUIDES.map(guide => (
            <BlogCard
              key={guide.href}
              {...guide}
              linkLabel="Read the field guide"
              dark
            />
          ))}
        </BlogGrid>
      </Section>

      <Section>
        <SectionHead heading="Operator playbooks">
          Five new, evidence-led guides for the decisions that sit between
          marketing, commerce, trade and delivery. Each guide includes an
          original visual model and links to the source material used.
        </SectionHead>
        <BlogGrid>
          {PLAYBOOKS.map(playbook => (
            <BlogCard key={playbook.href} {...playbook} />
          ))}
        </BlogGrid>
      </Section>

      <ContactBand
        heading={
          <>
            Read the update.
            <br />
            Then decide what changes operationally.
          </>
        }
        copy="If a platform or policy change affects your business, MettGlobal can help translate it into an operating checklist."
        ctaHref="/appointment"
        ctaLabel="Book a diagnostic meeting"
      />
    </PageShell>
  );
}
