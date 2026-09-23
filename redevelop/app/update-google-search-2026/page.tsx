import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-google-search-2026');

const FACTS = [
  {
    label: 'FOUNDATION',
    value: 'CRAWL',
    note: 'Google must be able to discover and access the page',
  },
  {
    label: 'NEXT STEP',
    value: 'INDEX',
    note: 'technical eligibility does not guarantee indexing or ranking',
  },
  {
    label: 'PAGE QUALITY',
    value: 'USABLE',
    note: 'secure, fast, accessible and functional across devices',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Verify what Google can actually see' },
  {
    t: 'p',
    text: 'Use Search Console URL Inspection and Google’s testing tools to confirm that important pages are crawlable, return the right status, expose useful content and are not unintentionally blocked.',
  },
  { t: 'h2', text: 'Canonical and sitemap signals should agree' },
  {
    t: 'p',
    text: 'Canonical URLs, internal links and sitemap entries should point toward the same preferred pages. Contradictory signals make a site harder to reason about for both crawlers and developers.',
  },
  { t: 'h2', text: 'Performance is part of page quality, not a trophy score' },
  {
    t: 'p',
    text: 'Optimize real user experience: avoid unnecessary script, stabilize layout, keep interaction responsive and make the mobile experience complete. A perfect lab score is not a guarantee of ranking.',
  },
  { t: 'h2', text: 'Accessibility and SEO overlap' },
  {
    t: 'p',
    text: 'Semantic headings, descriptive links, labels, keyboard access and understandable content help users and make the page structure clearer. Treat accessibility as a product requirement rather than an SEO hack.',
  },
  {
    t: 'quote',
    text: 'The technical job is to remove barriers to discovery and use. The content still has to deserve the visit.',
  },
  {
    t: 'source',
    label: 'OFFICIAL SOURCE',
    body: (
      <>
        <SourceLink
          href={
            'https://developers.google.com/search/docs/fundamentals/get-started-developers'
          }
        >
          {'Google Search Central — SEO Guide for Web Developers'}
        </SourceLink>
        <SourceNote>
          {
            'Google explicitly notes that meeting requirements and best practices does not guarantee crawling, indexing or ranking.'
          }
        </SourceNote>
      </>
    ),
  },
];

export default function GoogleSearch2026Brief() {
  return (
    <ArticleShell
      back={'CURRENT BRIEF / WEB & SEARCH'}
      title={
        'Google Search in 2026: the technical basics that still decide whether pages can compete'
      }
      dek={
        'Google’s current developer guidance still starts with fundamentals: make content accessible to Google, then ensure the website is secure, fast, accessible and functional across devices. Search visibility cannot be repaired by metadata alone if the underlying page is difficult to crawl or use.'
      }
      meta={
        'CURRENT BRIEF · SOURCE CHECKED 17 SEP 2026 · GOOGLE SEARCH CENTRAL'
      }
      graphic={<PolicyGraphic facts={FACTS} />}
      footerNote={'Current search brief'}
      endHeading={'Need your website’s technical foundation reviewed?'}
      endHref={'/web-development'}
      endLabel={'Explore web development'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
