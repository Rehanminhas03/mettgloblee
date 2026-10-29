import Link from 'next/link';
import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { NewPostPolish } from '@/components/article/NewPostPolish';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { blogPostingJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-dealership-erp-software');

const FAQS = [
  {
    question: 'Is the Mett Global dealership ERP currently available?',
    answer:
      'Our custom dealership ERP software is currently in active development. We work closely with dealership groups to build role specific modules tailored to showroom workflows.',
  },
  {
    question: 'Can a custom ERP connect to existing dealership DMS tools?',
    answer:
      'Yes. Modern web architectures allow custom platforms to synchronize via REST APIs with legacy systems or replace them in planned stages.',
  },
  {
    question: 'What technology stack is used for dealership web software?',
    answer:
      'We engineer platforms using Next.js, Node.js, and relational databases like PostgreSQL, featuring role based access control and cloud backups.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'Automotive dealerships require software that connects vehicle inventory, lead routing, customer negotiations, service bay scheduling, and multi-showroom reporting. While off-the-shelf software packages offer generic workflows, multi-rooftop dealerships frequently hit software limits that require costly per-seat licenses. Custom software aligns directly with how sales consultants and floor managers actually work.',
  },
  {
    t: 'h2',
    text: 'Why automotive dealerships outgrow off-the-shelf software',
  },
  {
    t: 'p',
    text: 'When a dealership operates multiple showrooms or brand franchises, sales consultants, accountants, service advisors, and general managers need role specific interfaces. Standard software either forces everyone into the same rigid screens or forces managers to export data into spreadsheets to reconcile sales numbers.',
  },
  {
    t: 'quote',
    text: 'A dealership ERP should adapt to your physical sales floor and inventory cycles, rather than forcing sales consultants to change how they sell.',
  },
  {
    t: 'h2',
    text: 'Comparing custom dealership ERPs to generic SaaS tools',
  },
  {
    t: 'p',
    text: 'Key architectural differences between custom platforms and standard commercial packages:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Per-Seat Licensing vs. Enterprise Ownership:{' '}
        <span className="font-normal text-[#514d46]">
          Off-the-shelf platforms charge monthly fees for every sales consultant, accountant, and floor manager. Custom ERP engineering eliminates recurring seat taxes.
        </span>
      </strong>,
      <strong key="2">
        Multi-Showroom Inventory Visibility:{' '}
        <span className="font-normal text-[#514d46]">
          Custom systems allow real-time cross-showroom vehicle lookups, reserve holds, and trade-in valuations without data latency between locations.
        </span>
      </strong>,
      <strong key="3">
        Automated Speed-to-Lead Workflows:{' '}
        <span className="font-normal text-[#514d46]">
          Connecting digital ad leads from Meta and Google directly into sales rep round-robin assignments, trigger alerts, and instant WhatsApp confirmations.
        </span>
      </strong>,
      <strong key="4">
        Executive Role-Based Portals:{' '}
        <span className="font-normal text-[#514d46]">
          Providing CEOs and general managers with live margin dashboards, aged inventory warnings, and conversion metrics across all locations in one view.
        </span>
      </strong>,
    ],
  },
  {
    t: 'h2',
    text: 'Status: Dealership ERP software in active development',
  },
  {
    t: 'p',
    text: 'To be completely transparent, our comprehensive dealership ERP software is currently in active development. We are engineering the platform modularly, beginning with vehicle inventory tracking, speed-to-lead routing, and showroom quotation workflows.',
  },
  {
    t: 'p',
    text: 'Mett Global pairs digital marketing with custom software development, serving clients in the USA and Pakistan. For Jetour Ittehad, our lead acquisition systems delivered 1,000+ verified leads and 50+ confirmed bookings. For the CSM Ittehad EV launch, our campaigns drove about 400 leads and 112 confirmed showroom visits.',
  },
  { t: 'h2', text: 'FAQ' },
  {
    t: 'ul',
    items: FAQS.map((faq, i) => (
      <strong key={i} className="block mb-2">
        {faq.question}{' '}
        <span className="font-normal text-[#514d46] block mt-0.5">
          {faq.answer}
        </span>
      </strong>
    )),
  },
  {
    t: 'source',
    label: 'SOFTWARE CAPABILITY ADVISORY',
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-[#514d46]">
          Planning custom dealership software or ERP modules? See our{' '}
          <Link
            href="/web-software-development"
            className="font-bold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
          >
            web and software development services
          </Link>{' '}
          or{' '}
          <Link
            href="/appointment"
            className="font-bold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
          >
            book a meeting
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function DealershipErpSoftwareGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / WEBSITES & SOFTWARE DEVELOPMENT'}
      title={'Custom Dealership ERP vs Off the Shelf Software'}
      dek={
        'Why growing automotive dealership groups choose custom ERP and CRM platforms over rigid off-the-shelf software to connect multi-showroom inventory, lead response, and executive reporting.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · SOFTWARE ARCHITECTURE · 5 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'INVENTORY SYNC',
            'LEAD INGESTION',
            'SHOWROOM WORKFLOW',
            'BILLING & LEDGER',
            'EXECUTIVE PORTAL',
          ]}
        />
      }
      endHeading={'Planning a custom dealership ERP or CRM?'}
      endHref={'/appointment'}
      endLabel={'Book a Call with Our Software Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-dealership-erp-software',
          { name: 'Ahmad Aamir' },
          '2026-10-30',
          FAQS,
        )}
      />
      <div className="new-post-content">
        <Prose blocks={BLOCKS} />
      </div>
    </ArticleShell>
  );
}
