import { ArticleShell } from '@/components/article/ArticleShell';
import { PolicyGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/update-google-ads-consent-2026');

const FACTS = [
  {
    label: 'REGION',
    value: 'EEA',
    note: 'review traffic from European Economic Area users',
  },
  {
    label: 'KEY INPUT',
    value: 'CONSENT',
    note: 'collect and communicate required consent signals',
  },
  {
    label: 'AFFECTED USE',
    value: 'MEASURE',
    note: 'measurement, personalization and remarketing can depend on compliant setup',
  },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Start with the data path' },
  {
    t: 'p',
    text: 'Identify every place your website or app sends user data to Google: Google Ads tags, Analytics-linked advertising, app SDKs, enhanced conversions and uploaded customer data. The compliance review should follow the data, not just the marketing channel name.',
  },
  { t: 'h2', text: 'Consent is more than showing a banner' },
  {
    t: 'p',
    text: 'A banner needs to capture a meaningful choice and the resulting consent status must be communicated to the tags or framework that uses it. A visual banner with no working signal logic is not a complete implementation.',
  },
  { t: 'h2', text: 'Test denied and granted states' },
  {
    t: 'p',
    text: 'Use browser and tag-debugging tools to verify what happens before consent, after consent and after a user changes their choice. Measurement configuration should reflect the selected mode rather than behaving identically in every state.',
  },
  { t: 'h2', text: 'Document ownership' },
  {
    t: 'p',
    text: 'Marketing, web and legal/privacy teams often each own only part of the setup. Write down who owns the CMP, tag configuration, policy language, analytics validation and change management when new tools are added.',
  },
  {
    t: 'quote',
    text: 'Privacy implementation is a system of choices, signals and tag behavior—not a banner graphic.',
  },
  {
    t: 'source',
    label: 'OFFICIAL SOURCE',
    body: (
      <>
        <SourceLink
          href={'https://support.google.com/google-ads/answer/13695607?hl=en'}
        >
          {'Google Ads Help — Updates to consent mode for traffic in the EEA'}
        </SourceLink>
        <SourceNote>
          {
            'This is a practical implementation summary, not legal advice. Requirements vary by jurisdiction and data use.'
          }
        </SourceNote>
      </>
    ),
  },
];

export default function GoogleAdsConsent2026Brief() {
  return (
    <ArticleShell
      back={'CURRENT BRIEF / PAID MEDIA'}
      title={
        'Google Ads consent requirements in 2026: a practical EEA checklist'
      }
      dek={
        'For advertisers receiving traffic from the European Economic Area, Google says consent requirements affect measurement, ad personalization and remarketing when applicable Google tags, SDKs and uploaded data are used.'
      }
      meta={'CURRENT BRIEF · SOURCE CHECKED 17 SEP 2026 · GOOGLE ADS HELP'}
      graphic={<PolicyGraphic facts={FACTS} />}
      footerNote={'Current policy brief'}
      endHeading={'Need the acquisition and measurement stack reviewed?'}
      endHref={'/digital-marketing'}
      endLabel={'Explore digital marketing'}
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
