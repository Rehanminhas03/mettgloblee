import Link from 'next/link';
import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import { NewPostPolish } from '@/components/article/NewPostPolish';
import {
  Prose,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { blogPostingJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/insight-meta-lead-ads-lead-quality');

const FAQS = [
  {
    question: 'What is the Higher Intent form in Meta lead ads?',
    answer:
      'It is an instant form type that adds a review screen where people confirm their details, plus text saying your business may follow up. It runs on Facebook Feed and Instagram feed on mobile only.',
  },
  {
    question: 'Will Higher Intent forms cost more per lead?',
    answer:
      'Usually you get fewer leads, so cost per lead often goes up. Meta does not publish the exact difference. Compare cost per booked appointment instead.',
  },
  {
    question: 'Why do my Facebook lead ads have wrong phone numbers?',
    answer:
      'The default More Volume form is fast to submit, so autofilled or mistyped details slip through. The Higher Intent review screen asks people to confirm details first.',
  },
  {
    question: 'What is the qualified leads performance goal?',
    answer:
      'It is an ad set goal that tries to reach people most likely to become customers. It needs your CRM to send lead stages back to Meta through the Conversions API.',
  },
  {
    question: 'How fast should I call a Meta lead?',
    answer:
      'As fast as you can. Meta says reducing the time to follow up can improve lead quality. Aim for minutes during business hours.',
  },
  {
    question: 'Should I use a landing page instead of an instant form?',
    answer:
      'Instant forms are easier to submit on mobile. A landing page adds friction, which can filter for intent, but it needs a fast, clear page. Test both if your volume allows.',
  },
];

const BLOCKS: Block[] = [
  {
    t: 'p',
    text: 'Most lead quality problems are setup problems, not audience problems. Here is how to fix them, in order.',
  },
  { t: 'h2', text: 'Why Meta lead ads bring in junk leads' },
  {
    t: 'p',
    text: 'Meta delivers what you ask for. The default form type, More Volume, is built to be quick to submit on mobile. That is great for a coupon or a newsletter. It is weak for a quote, a consultation, or a booking, where a person on your team has to call every lead.',
  },
  {
    t: 'p',
    text: 'The usual signs:',
  },
  {
    t: 'ul',
    items: [
      'Phone numbers that are wrong or disconnected',
      'People who say they never filled out a form',
      'Leads outside your service area',
      'Leads who answer once and never book',
    ],
  },
  {
    t: 'p',
    text: 'Each one has a fix.',
  },
  { t: 'h2', text: 'Step 1: Use the Higher Intent form type' },
  {
    t: 'p',
    text: 'You choose the form type when you build the instant form. There are three:',
  },
  {
    t: 'ul',
    items: [
      <span key="1">
        <strong>More Volume</strong> (default): quick to fill out and submit.
      </span>,
      <span key="2">
        <strong>Higher Intent</strong>: adds a review step so people confirm their info before sending.
      </span>,
      <span key="3">
        <strong>Rich Creative</strong>: lets you add images and more text about your business.
      </span>,
    ],
  },
  {
    t: 'p',
    text: 'Meta lists these features for Higher Intent forms:',
  },
  {
    t: 'ul',
    items: [
      'Inline text under the contact fields that says your business may follow up',
      'An extra review screen to confirm details',
      'Delivery on Facebook Feed and Instagram feed on mobile only, not desktop',
    ],
  },
  {
    t: 'p',
    text: 'Meta says Higher Intent can make sense when every lead needs follow up or further qualification. Expect fewer leads. Meta does not publish how many fewer, so test both form types on the same offer and compare the share of leads that actually book, not just cost per lead.',
  },
  { t: 'h2', text: 'Step 2: Ask one or two qualifying questions' },
  {
    t: 'p',
    text: 'A short form gets more submissions. A form with zero filters gets more noise. Find the balance:',
  },
  {
    t: 'ul',
    items: [
      'Add one or two multiple choice questions, such as service area or timeline.',
      'Avoid open ended questions. They slow people down.',
      'Let contact fields autofill from what people already shared with Meta.',
      'Use the intro section to say what happens after they submit.',
    ],
  },
  {
    t: 'p',
    text: 'Good examples for a US home services or clinic business: "Which ZIP code is the job in?" and "When do you need this done?" The answers also tell your team who to call first.',
  },
  { t: 'h2', text: 'Step 3: Follow up in minutes, not days' },
  {
    t: 'p',
    text: "Meta's own guidance puts speed first. It recommends connecting a CRM or using Leads Center, since manual CSV downloads slow follow up.",
  },
  {
    t: 'p',
    text: 'Practical rules:',
  },
  {
    t: 'ul',
    items: [
      'Connect the form to your CRM so every lead lands in one place instantly.',
      'Run lead ads during hours when someone can call.',
      'Send a text or WhatsApp message right away saying who you are and why you are calling.',
      'Make at least three call attempts over two days before marking a lead dead.',
    ],
  },
  {
    t: 'p',
    text: 'A lead who filled a form an hour ago remembers you. A lead you call three days later often does not.',
  },
  { t: 'h2', text: 'Step 4: Send sales outcomes back to Meta' },
  {
    t: 'p',
    text: 'This is the step most small businesses skip, and it is the one that compounds.',
  },
  {
    t: 'p',
    text: 'Meta offers a performance goal called Maximize number of qualified leads. It aims to show your ad to people most likely to become customers, not just people likely to fill a form. To work, it needs data from your CRM about what happened after the form, sent through the Conversions API. You choose which funnel stages count as a good outcome, such as "qualified" or "appointment booked."',
  },
  {
    t: 'p',
    text: 'Steps:',
  },
  {
    t: 'ol',
    items: [
      'Define 2 or 3 lead stages in your CRM, such as Contacted, Qualified, Booked.',
      'Connect the CRM to Meta through the Conversions API. Many CRMs have a native integration.',
      'Update lead stages every day. Stale data teaches Meta nothing.',
      'Once enough leads have stages, test the qualified leads goal against your current campaign.',
    ],
  },
  { t: 'h2', text: 'Step 5: Judge the right number' },
  {
    t: 'p',
    text: 'Cost per lead is the wrong scorecard. Track this chain instead:',
  },
  {
    t: 'ul',
    items: [
      'Cost per lead',
      'Contact rate (leads you actually spoke to)',
      'Qualified rate',
      'Cost per booked appointment or confirmed visit',
    ],
  },
  {
    t: 'p',
    text: 'If Higher Intent doubles your cost per lead but your cost per booking drops, it won.',
  },
  { t: 'h2', text: 'What this looks like in practice' },
  {
    t: 'p',
    text: 'Mett Global runs Meta lead campaigns with this setup for local and ecommerce businesses, serving clients in the USA and Pakistan. For the Jetour Ittehad dealership, Meta lead ads produced 1,000+ verified leads and 50+ confirmed bookings. For the CSM Ittehad EV launch, the campaign drove about 400 leads and 112 confirmed showroom visits. In both cases the work was in the form, the follow up, and tracking each lead to a visit.',
  },
  {
    t: 'p',
    text: (
      <>
        If your leads convert but your website does not, read our{' '}
        <Link
          href="/insight-conversion-audit"
          className="font-semibold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
        >
          website conversion audit
        </Link>{' '}
        guide. For a deeper look at a full dealership funnel, see the{' '}
        <Link
          href="/insight-dealership-lead-engine"
          className="font-semibold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
        >
          dealership lead engine
        </Link>
        .
      </>
    ),
  },
  { t: 'h2', text: 'A quick checklist' },
  {
    t: 'ul',
    items: [
      'Form type set to Higher Intent for any offer that needs a call',
      'One or two multiple choice qualifying questions',
      'Intro and ending screens say who will contact them and when',
      'CRM connected, no manual downloads',
      'First contact attempt within minutes during business hours',
      'Lead stages updated daily and shared through the Conversions API',
      'Reporting on cost per booking, not cost per lead',
    ],
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
    label: 'PERFORMANCE MARKETING ADVISORY',
    body: (
      <>
        <p className="text-[15px] leading-relaxed text-[#514d46]">
          Want Meta lead ads that turn into booked appointments? See our{' '}
          <Link
            href="/digital-marketing-growth"
            className="font-bold text-[#11110f] underline decoration-[#d2b26a] underline-offset-4 hover:text-[#8c6118]"
          >
            digital marketing and growth services
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

export default function MetaLeadAdsLeadQualityPage() {
  return (
    <ArticleShell
      back={'FIELD GUIDE / DIGITAL MARKETING & GROWTH'}
      title={'Meta Lead Ads Higher Intent: Fix Low Quality Leads'}
      dek={
        'If your Meta lead ads bring in wrong numbers and people who never answer, switch the instant form type from More Volume to Higher Intent. Higher Intent adds a review screen where people confirm their details, plus a note that your business may follow up. Then add one or two qualifying questions, call fast, and send your sales outcomes back to Meta so it learns which leads become customers.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · PAID MEDIA · 4 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'HIGHER INTENT',
            'QUALIFYING FILTER',
            'FAST RESPONSE',
            'CONVERSIONS API',
            'QUALIFIED REVENUE',
          ]}
        />
      }
      endHeading={'Want Meta lead ads that turn into booked appointments?'}
      endHref={'/appointment'}
      endLabel={'Book a Strategy Call with Our Media Team'}
    >
      <NewPostPolish />
      <JsonLd
        data={blogPostingJsonLd(
          '/insight-meta-lead-ads-lead-quality',
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
