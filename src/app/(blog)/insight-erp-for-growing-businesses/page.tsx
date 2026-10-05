import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { Prose, type Block } from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-erp-for-growing-businesses');

const BLOCKS: Block[] = [
  { t: 'h2', text: 'Signs the spreadsheet has run out' },
  {
    t: 'p',
    text: 'The same customer lives in a spreadsheet, a chat thread and a paper file. Managers ask people for updates instead of reading a screen. Documents are rebuilt by hand each time. Nobody can say quickly where an order stands. None of these is a crisis on its own; together they are the signal that several teams now depend on one shared record.',
  },
  { t: 'h2', text: 'Follow one customer from end to end' },
  {
    t: 'p',
    text: 'Before choosing features, map the journey: first contact, follow-up, booking, delivery and after-sales. For each step, write down who touches it, what they need to see and what they must record. The system is the shared record of that journey.',
  },
  { t: 'h2', text: 'Build the spine first, then the modules' },
  {
    t: 'p',
    text: 'Sales, service, parts and accounts look like separate screens, but they describe one customer story. Start with the spine — customer, order, delivery — and let each module hang off it. That keeps data consistent and makes later modules faster to add.',
  },
  { t: 'h2', text: 'Give every role its own portal' },
  {
    t: 'ul',
    items: [
      'Sales staff need leads and follow-ups, not accounts.',
      'Managers need approvals and team performance.',
      'Back-office teams need orders and documents.',
      'Leadership needs one summary across teams or locations.',
    ],
  },
  {
    t: 'p',
    text: 'Role-based portals reduce noise and keep sensitive data in front of only the people who need it.',
  },
  { t: 'h2', text: 'Make documents a by-product' },
  {
    t: 'p',
    text: 'Quotations, vouchers and delivery notes should be generated from the record in one branded format, not retyped. It saves time and removes a common source of mistakes.',
  },
  { t: 'h2', text: 'Plan for several locations from day one' },
  {
    t: 'p',
    text: 'If the business has more than one branch or showroom, keep each location’s data separate while giving leadership a combined view. Retrofitting that separation later is far more expensive than designing it in.',
  },
  { t: 'h2', text: 'Add notifications and reporting early' },
  {
    t: 'p',
    text: 'Reminders make sure follow-ups happen, and a dashboard answers “where are we?” without a meeting. They are small features that change how a team works every day.',
  },
  { t: 'h2', text: 'Test what must not break' },
  {
    t: 'p',
    text: 'Approvals, calculations and permissions are where mistakes cost money. Automated tests on those paths are worth the effort, because they let the system keep growing without breaking what already works.',
  },
  {
    t: 'quote',
    text: 'A good business system is quiet: it makes the next step obvious for each person and the whole picture visible to the people who run it.',
  },
];

export default function ErpGuide() {
  return (
    <ArticleShell
      back={'BLOG / SOFTWARE'}
      title={
        'When a growing business needs its own ERP — and what it should track'
      }
      dek={
        'Spreadsheets and chat threads work until several teams depend on the same customer. That is the point where one shared system starts to pay for itself.'
      }
      meta={'METTGLOBAL FIELD GUIDE · SOFTWARE & SYSTEMS · 9 MIN READ'}
      graphic={
        <ChipGraphic
          steps={['ENQUIRY', 'FOLLOW-UP', 'ORDER', 'DELIVERY', 'AFTER-SALES']}
        />
      }
      endHeading={'Planning a custom system?'}
      endHref={'/web-software-development'}
      endLabel={'Explore Web & Software Development'}
    >
      <JsonLd data={articleJsonLd('/insight-erp-for-growing-businesses')} />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
