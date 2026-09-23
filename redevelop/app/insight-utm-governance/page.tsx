import { ArticleShell } from '@/components/article/ArticleShell';
import { UtmGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-utm-governance');

const FIELDS = [
  { param: 'utm_source', value: 'meta', note: 'where traffic began' },
  { param: 'utm_medium', value: 'paid_social', note: 'how it arrived' },
  {
    param: 'utm_campaign',
    value: 'ev3-isb-launch',
    note: 'business initiative',
    accent: true,
  },
  { param: 'utm_content', value: 'reel-01', note: 'creative variation' },
  { param: 'utm_term', value: 'family-suv', note: 'keyword or audience' },
];

const BLOCKS: Block[] = [
  { t: 'h2', text: 'UTM tags are a data contract' },
  {
    t: 'p',
    text: 'UTM parameters are not a substitute for analytics design, but they are a small and powerful contract between the person launching a campaign and the people reading the results. Google Analytics describes them as custom URL parameters that identify the campaigns and referrals sending traffic to a property. The operational implication is simple: the values need to be consistent enough to group together and specific enough to answer a decision.',
  },
  {
    t: 'p',
    text: (
      <>
        Use <strong>source</strong> for the platform or referrer,{' '}
        <strong>medium</strong> for the channel type, and{' '}
        <strong>campaign</strong> for the business initiative. Add{' '}
        <strong>content</strong> when several ads share the same campaign and{' '}
        <strong>term</strong> when keyword or audience detail matters. Treat the
        extra fields as a controlled vocabulary, not as free-form notes.
      </>
    ),
  },
  { t: 'h2', text: 'Choose a naming grammar before you need the report' },
  {
    t: 'p',
    text: 'A useful grammar is short, lowercase and readable by someone who did not build the campaign. For example:',
  },
  {
    t: 'p',
    text: (
      <strong>
        utm_source=meta&amp;utm_medium=paid_social&amp;utm_campaign=ev3-isb-launch&amp;utm_content=reel-01
      </strong>
    ),
  },
  {
    t: 'p',
    text: 'The example carries four decisions: the source is Meta, the medium is paid social, the campaign is an Islamabad EV3 launch and the creative is the first reel. The exact vocabulary will vary by business. The important part is that the vocabulary is documented and reused.',
  },
  {
    t: 'ul',
    items: [
      'Pick one spelling for every source and medium. Keep values lowercase.',
      <>
        Use a predictable campaign pattern such as <em>offer-market-period</em>.
      </>,
      'Keep creative labels stable enough to compare formats, hooks or variants.',
      'Never put customer names, email addresses or other personal information in a URL parameter.',
    ],
  },
  { t: 'h2', text: 'Build the control around the link, not around memory' },
  {
    t: 'p',
    text: 'Most UTM errors happen before the URL reaches the ad platform. Give the team one campaign builder or spreadsheet with dropdowns for source and medium, a required campaign field, an owner, a launch date and the final destination URL. A generated URL should be reviewed like a small piece of production data: does the destination load, does the naming match the brief, and will the value appear in the intended report?',
  },
  {
    t: 'p',
    text: 'Keep a short dictionary beside the builder. Define whether “paid_social” or “paid-social” is valid, whether market is encoded as “pk” or “pakistan,” and which campaign components are mandatory. Google notes that UTM values are case-sensitive, so inconsistent capitalization can split what looks like one campaign into multiple rows.',
  },
  { t: 'h2', text: 'Audit the report for three failure modes' },
  {
    t: 'p',
    text: (
      <>
        <strong>Unclassified traffic:</strong> a required parameter is missing
        and the report shows &ldquo;(not set).&rdquo;{' '}
        <strong>Fragmented traffic:</strong> capitalization or spelling creates
        several buckets for one channel. <strong>Misleading detail:</strong> a
        campaign name changes halfway through the flight, so the trend looks
        like performance changed when only the label changed.
      </>
    ),
  },
  {
    t: 'p',
    text: 'Run a weekly exception report for missing source, missing medium, new values and sudden volume from an unexpected value. Assign a person to close the exceptions. Governance only works when somebody owns the cleanup loop.',
  },
  { t: 'h2', text: 'A 30-minute rollout' },
  {
    t: 'ol',
    items: [
      'List the channels, markets and campaign types the business actually uses.',
      'Approve a small vocabulary and write two or three valid examples.',
      'Put those choices into a controlled builder with an owner and review date.',
      'Update dashboard filters so the new values map to the decisions leadership makes.',
      'Review the first week of links and fix the process, not just the individual URL.',
    ],
  },
  {
    t: 'quote',
    text: 'Clean attribution is not a reporting trick. It is the trail that connects a campaign decision to a business outcome.',
  },
  {
    t: 'source',
    label: 'PRIMARY SOURCE',
    body: (
      <>
        <SourceLink href="https://support.google.com/analytics/answer/10917952?hl=en">
          Google Analytics: URL builders and custom campaign URLs
        </SourceLink>
        <SourceNote>
          Google&rsquo;s guidance covers the standard UTM parameters, consistent
          naming, case sensitivity and the Campaign URL Builder. Platform
          interfaces and reporting rules can change, so verify the current
          documentation before changing a live measurement setup.
        </SourceNote>
      </>
    ),
  },
];

export default function UtmGovernanceGuide() {
  return (
    <ArticleShell
      back="BLOG / MARKETING MEASUREMENT"
      title="UTMs that survive reporting: a practical campaign naming system"
      dek={
        <>
          Attribution breaks quietly. One person types &ldquo;Meta,&rdquo;
          another types &ldquo;facebook,&rdquo; and a third leaves the campaign
          field blank. The ads still run, but the reporting starts telling
          several incompatible stories.
        </>
      }
      meta="METTGLOBAL OPERATOR PLAYBOOK · CAMPAIGN MEASUREMENT · 8 MIN READ"
      graphic={<UtmGraphic fields={FIELDS} />}
      endHeading="Need a measurement system that the team can trust?"
      endHref="/digital-marketing"
      endLabel="Explore digital marketing"
    >
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
