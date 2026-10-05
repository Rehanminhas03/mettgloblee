import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-digital-outdoor-marketing');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'One message across every surface' },
  {
    t: 'p',
    text: 'A billboard, a poster, an Instagram reel and a showroom display are not four campaigns. They are one idea seen in different places. When the message, look and next step match, each surface makes the others work harder.',
  },
  { t: 'h2', text: 'Use outdoor to be noticed, digital to be measured' },
  {
    t: 'p',
    text: 'Outdoor advertising builds recall in the streets people already travel. Digital channels turn that recall into an action you can count. Give every outdoor piece a clear next step — a handle, a QR code or a WhatsApp number — so interest has somewhere to go.',
  },
  { t: 'h2', text: 'Make the Instagram page the destination' },
  {
    t: 'p',
    text: 'People who notice a brand outdoors often check its Instagram next. A consistent profile, a steady posting rhythm and recent work tell them the business is active and worth contacting.',
  },
  { t: 'h2', text: 'Let short video do the showing' },
  {
    t: 'p',
    text: 'Reels are the fastest way to show a product, a team or a process. Lead with the most interesting moment, keep one idea per video and end with a clear action. Production quality matters less than clarity.',
  },
  { t: 'h2', text: 'Design for a glance' },
  {
    t: 'ul',
    items: [
      'One idea per billboard or poster.',
      'Large, readable text that survives a passing glance.',
      'One clear next step.',
      'Consistent brand colour, type and tone across every piece.',
    ],
  },
  { t: 'h2', text: 'Capture every enquiry and follow up fast' },
  {
    t: 'p',
    text: 'Attention only becomes value if enquiries are captured and answered quickly. Route lead forms and WhatsApp messages into one sheet or CRM, notify the right person automatically and follow up the same day.',
  },
  { t: 'h2', text: 'Measure what you can and label what you cannot' },
  {
    t: 'p',
    text: 'Outdoor is hard to attribute exactly. Use unique QR codes, tracked links and dedicated numbers where you can, ask new customers how they heard about you, and compare periods. Be clear about which results are measured and which are estimated.',
  },
  {
    t: 'quote',
    text: 'The street gets the attention. The page, the video and the follow-up turn it into a conversation.',
  },
];

export default function DigitalOutdoorGuide() {
  return (
    <ArticleShell
      back={'BLOG / DIGITAL MARKETING'}
      title={
        'Instagram, billboards and the showroom: make digital and outdoor marketing work together'
      }
      dek={
        'Local and automotive brands often run outdoor and social separately. Connected, they reinforce each other and give you something to measure.'
      }
      meta={'METTGLOBAL FIELD GUIDE · DIGITAL MARKETING · 8 MIN READ'}
      graphic={
        <ChipGraphic steps={['AWARENESS', 'SOCIAL', 'ENQUIRY', 'VISIT']} />
      }
      endHeading={'Want your marketing connected?'}
      endHref={'/digital-marketing-growth'}
      endLabel={'Explore Digital Marketing & Growth'}
    >
      <JsonLd data={articleJsonLd('/insight-digital-outdoor-marketing')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
