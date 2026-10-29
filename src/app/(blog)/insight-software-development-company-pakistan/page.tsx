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

export const metadata = pageMetadata(
  '/insight-software-development-company-pakistan',
);

const FAQS = [
  {
    question: 'How do software teams in Pakistan coordinate with US clients?',
    answer:
      'We combine our technical development team in Islamabad with U.S. business representation, providing overlapping working hours and direct communication.',
  },
  {
    question: 'Who owns the custom software code and intellectual property?',
    answer:
      'The client owns 100% of the custom source code, database architectures, and intellectual property upon project completion.',
  },
  {
    question: 'What maintenance and hosting support is provided after launch?',
    answer:
      'We provide managed deployment, automated database backups, uptime monitoring, security patching, and ongoing feature development.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'A custom software development company in Pakistan designs, builds, and maintains web applications, ERP platforms, and custom business portals. Engineering teams combine modern frameworks like Next.js and TypeScript with reliable relational databases. This provides growing businesses with enterprise-grade software without the recurring licensing costs of off-the-shelf SaaS.',
  },
  {
    t: 'h2',
    text: 'Why international businesses choose software engineering in Pakistan',
  },
  {
    t: 'p',
    text: 'Software engineering in Pakistan offers high technical proficiency, strong English communication, and cost effectiveness. Development teams in Islamabad regularly build high-traffic web applications, custom CRM platforms, and logistics dispatch engines for international clients across North America and Europe.',
  },
  {
    t: 'quote',
    text: 'Custom software should be engineered as an appreciating operational asset, tailored to unique business logic rather than rigid commercial templates.',
  },
  {
    t: 'h2',
    text: 'Core software engineering capabilities',
  },
  {
    t: 'p',
    text: 'Modern software engineering delivers across four primary business solutions:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Custom ERP and CRM Platforms:{' '}
        <span className="font-normal text-[#514d46]">
          Multi-showroom automotive ERPs, logistics dispatch systems, and sales CRMs built with granular role based access control and executive dashboards.
        </span>
      </strong>,
      <strong key="2">
        High-Converting Next.js Web Platforms:{' '}
        <span className="font-normal text-[#514d46]">
          Server rendered web architectures engineered with TypeScript and Tailwind CSS, maintaining sub-second load times and high Core Web Vitals.
        </span>
      </strong>,
      <strong key="3">
        Cross-Platform Mobile Applications:{' '}
        <span className="font-normal text-[#514d46]">
          Native quality iOS and Android applications developed with Flutter, coupled with dispatcher admin portals and real-time GPS location tracking.
        </span>
      </strong>,
      <strong key="4">
        B2B Client and Partner Portals:{' '}
        <span className="font-normal text-[#514d46]">
          Secure client access portals connecting directly to backend databases, replacing slow email threads and manual document requests.
        </span>
      </strong>,
    ],
  },
  {
    t: 'h2',
    text: 'Verified deployments across Pakistan and the USA',
  },
  {
    t: 'p',
    text: 'Mett Global delivers end-to-end web and software engineering, serving clients in the USA and Pakistan. Our track record includes on-demand car care apps with live tracking, field service scheduling systems for US commercial operations, and scalable Next.js web applications.',
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
          Looking to engineer custom software or a web application? See our{' '}
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

export default function SoftwareDevelopmentCompanyPakistanGuide() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / WEBSITES & SOFTWARE DEVELOPMENT'}
      title={
        'Custom Software Development Company in Pakistan: ERP and Web Apps'
      }
      dek={
        'How Pakistan software engineering teams build scalable Next.js web applications, multi-showroom dealership ERPs, client portals, and mobile apps for companies in Pakistan and the USA.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · SOFTWARE ENGINEERING · 5 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'SYSTEM ARCHITECTURE',
            'UI/UX DESIGN',
            'FULL-STACK BUILD',
            'SECURITY AUDIT',
            'CLOUD DEPLOYMENT',
          ]}
        />
      }
      endHeading={'Looking to build custom software or an ERP platform?'}
      endHref={'/appointment'}
      endLabel={'Book a Call with Our Engineering Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-software-development-company-pakistan',
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
