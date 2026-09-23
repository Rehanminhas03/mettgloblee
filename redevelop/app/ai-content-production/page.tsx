import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from '@/lib/seo';
import { BOOK_CTA, SERVICE_NAV, STANDARD_FOOTER } from '@/lib/navigation';

export const metadata = pageMetadata('/ai-content-production');

const BLOCKS = [
  {
    heading: 'Creative briefing',
    copy: 'Define audience, objective, hook, value proposition, proof, call to action, platform and visual direction before generating anything.',
  },
  {
    heading: 'AI-assisted production',
    copy: 'Use AI for concept variation, scripts, visual exploration, voice and editing support where it improves speed without removing review.',
  },
  {
    heading: 'Brand consistency',
    copy: 'Build repeatable prompts, references, review criteria and asset rules so output feels connected to the brand rather than random.',
  },
  {
    heading: 'Human review',
    copy: 'Check claims, context, visual quality, pacing and platform fit before publishing. Generated content is a production tool, not a substitute for accountability.',
  },
];

export default function AiContentProductionPage() {
  return (
    <PageShell
      navLinks={SERVICE_NAV}
      navCta={BOOK_CTA}
      footerLinks={STANDARD_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/ai-content-production')} />
      <JsonLd data={serviceJsonLd('/ai-content-production')} />

      <PageHero
        kicker="AI VIDEO & CONTENT"
        title={
          <>
            Faster production.
            <br />
            <HeroAccent>Without generic output.</HeroAccent>
          </>
        }
      >
        AI can increase creative throughput, but the useful layer is still
        human: audience understanding, message, proof, brand direction and
        quality control.
      </PageHero>

      <ServiceLayout
        sideKicker="CONTENT SYSTEM"
        sideHeading="Brief, generate, review, refine."
        ctaHref="/appointment"
        ctaLabel="Discuss content production"
        blocks={BLOCKS}
      />

      <ContactBand
        heading={<>Give AI a better brief.</>}
        copy={
          'The quality of generated content usually improves when the strategy and review system improve first.'
        }
        ctaHref="/insight-ai-video-brief"
        ctaLabel="Read the AI video guide"
      />
    </PageShell>
  );
}
