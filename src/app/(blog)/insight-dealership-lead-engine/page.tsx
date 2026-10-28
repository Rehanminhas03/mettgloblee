import Link from 'next/link';
import { ArticleShell } from '@/components/article/ArticleShell';
import { ChipGraphic } from '@/components/article/graphics';
import {
  Prose,
  SourceLink,
  SourceNote,
  type Block,
} from '@/components/article/prose';
import { JsonLd } from '@/components/JsonLd';
import { articleJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata(
  '/insight-dealership-lead-engine',
);

const BLOCKS: Block[] = [
  { t: 'h2', text: 'The dealership lead leakage crisis: Why 70% of automotive ad leads go cold' },
  {
    t: 'p',
    text: 'Modern automotive retail faces an expensive paradox. Dealerships and multi-rooftop franchise groups invest tens of thousands of dollars each month into Meta Lead Ads, vehicle inventory carousel ads, and Google Performance Max campaigns. High-intent prospective car buyers browse trims, check financing terms, and submit inquiries for test drives. Yet, across automotive retail, more than 70% of these digital inquiries never step foot inside the showroom.',
  },
  {
    t: 'p',
    text: 'The failure rarely lies in ad creative or audience targeting. It stems almost entirely from latency at the point of conversion. In the typical dealership workflow, leads generated on Meta or Google land into a generic corporate inbox or an unmonitored spreadsheet. Hours—or even entire business days—pass before a floor sales consultant opens the file, dials the phone number, or sends an unformatted email.',
  },
  {
    t: 'quote',
    text: 'Car buyers do not wait. When an automotive shopper inquires about an SUV or sedan, they submit inquiries across two or three competing local dealerships simultaneously. The first dealership to confirm vehicle availability, provide answers, and lock in a showroom test drive captures 74% of closed sales.',
  },
  { t: 'h2', text: 'Sub-5-minute speed-to-lead: The mathematical law of automotive conversion' },
  {
    t: 'p',
    text: 'Empirical data in automotive lead management reveals a brutal decaying conversion curve. A study evaluating thousands of inbound digital car buyer inquiries demonstrated that sales teams who contact an inquiry within five minutes are 21 times more likely to qualify the prospect than those who wait 30 minutes.',
  },
  {
    t: 'p',
    text: 'Beyond 60 minutes, the likelihood of having a meaningful conversation drops by 391%. By the four-hour mark, the customer has either booked an appointment with a nearby competitor, experienced buyer hesitation, or ceased answering unknown numbers altogether.',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        0 to 5 Minutes:{' '}
        <span className="font-normal text-[#514d46]">
          The customer is actively holding their smartphone, focused on the exact vehicle trim, and emotionally receptive. Connection rates exceed 78%.
        </span>
      </strong>,
      <strong key="2">
        30 to 60 Minutes:{' '}
        <span className="font-normal text-[#514d46]">
          The shopper has transitioned to daily tasks, errands, or meetings. Inbound calls are treated as unsolicited interruptions; connection rates plummet below 25%.
        </span>
      </strong>,
      <strong key="3">
        24+ Hours:{' '}
        <span className="font-normal text-[#514d46]">
          Lead viability drops near zero. Ad spend allocated to acquiring that prospect is effectively lost, inflating Customer Acquisition Cost (CAC) across the entire group.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The automated CRM lead router: Webhooks, round-robin dispatch & instant confirmation' },
  {
    t: 'p',
    text: 'Overcoming the speed-to-lead gap requires replacing manual lead handling with automated real-time ingestion and dispatch architecture. When an automotive prospect submits an inquiry, an API webhook instantly fires into the dealership CRM or ERP system.',
  },
  {
    t: 'p',
    text: 'Within 90 seconds of form submission, a synchronized two-way protocol executes simultaneously:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Automated Customer Confirmation via SMS & WhatsApp:{' '}
        <span className="font-normal text-[#514d46]">
          The buyer immediately receives a personalized, branded message confirming their specific vehicle interest, detailing showroom operating hours, providing a direct Google Maps pin, and introducing their assigned sales consultant with a digital card.
        </span>
      </strong>,
      <strong key="2">
        Instant Round-Robin Sales Rep Notification:{' '}
        <span className="font-normal text-[#514d46]">
          The CRM evaluates floor consultant availability, territory routing, or specific vehicle specialty (e.g. EV certified vs commercial fleet rep) and triggers an immediate push notification and click-to-call prompt directly to the consultant’s mobile device.
        </span>
      </strong>,
      <strong key="3">
        Automatic Fallback Escalation SLAs:{' '}
        <span className="font-normal text-[#514d46]">
          If the primary assigned consultant does not initiate contact within 8 minutes, the system automatically reassigns the lead to an on-duty BDC manager or secondary floor consultant, guaranteeing zero lost opportunities.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'Enterprise case study proof: Jetour, Hyundai & CSM Automotive' },
  {
    t: 'p',
    text: (
      <>
        This exact infrastructure powers Mett Global’s automotive growth systems. In the flagship launch campaign for{' '}
        <Link
          href="/portfolio/jetour-ittehad"
          className="font-bold underline decoration-[#d2b26a] underline-offset-4 text-[#11110f] hover:text-p-gold"
        >
          Jetour Ittehad
        </Link>
        , high-impact Meta video ad campaigns were synchronized with immediate CRM webhook routing and physical showroom activations, generating over 1,000 verified buyer leads and securing 50+ confirmed vehicle bookings during launch month.
      </>
    ),
  },
  {
    t: 'p',
    text: (
      <>
        Similarly, for{' '}
        <Link
          href="/portfolio/hyundai-islamabad"
          className="font-bold underline decoration-[#d2b26a] underline-offset-4 text-[#11110f] hover:text-p-gold"
        >
          Hyundai Islamabad
        </Link>
        , Mett Global engineered an omnichannel digital ecosystem across three primary social channels that generated 15,000+ targeted video views and routed showroom test-drive requests directly to floor sales reps. For electric vehicle retailer{' '}
        <Link
          href="/portfolio/csm-ittehad"
          className="font-bold underline decoration-[#d2b26a] underline-offset-4 text-[#11110f] hover:text-p-gold"
        >
          Capital Smart Motors (CSM Ittehad)
        </Link>
        , Meta ad acquisition paired with automated lead capture directly produced 112 verified showroom visits.
      </>
    ),
  },
  {
    t: 'p',
    text: (
      <>
        To support multi-location operations, Mett Global also developed a custom{' '}
        <Link
          href="/portfolio/dealership-erp"
          className="font-bold underline decoration-[#d2b26a] underline-offset-4 text-[#11110f] hover:text-p-gold"
        >
          Multi-Showroom Dealership ERP
        </Link>{' '}
        providing role-based inventory tracking, customer vehicle service histories, and live floor-visit attribution across multiple regional rooftops.
      </>
    ),
  },
  {
    t: 'quote',
    text: 'Whether operating a multi-rooftop franchise group in Texas, Illinois, or California, or managing a premier brand launch in an international metro, the core economics remain unchanged: rapid lead routing and connected showroom tracking turn speculative ad spend into measurable vehicle deliveries.',
  },
  { t: 'h2', text: 'Showroom footfall attribution: Closing the loop from ad click to signed buyers order' },
  {
    t: 'p',
    text: 'A major pain point for dealership General Managers and Chief Marketing Officers is the disconnect between digital ad reporting and the dealership DMS (Dealer Management System). Ad platforms report cost per click and cost per lead, but dealership balance sheets depend entirely on showroom visits, trade-in valuations, and signed purchase agreements.',
  },
  {
    t: 'p',
    text: 'A complete dealership lead engine incorporates offline conversion synchronization (Meta Conversions API and Google Offline Conversion Tracking):',
  },
  {
    t: 'ul',
    items: [
      <strong key="1">
        Showroom Reception Check-in Logging:{' '}
        <span className="font-normal text-[#514d46]">
          When a visitor arrives for a test drive, front desk reception matches their phone number or appointment ID in the CRM, timestamping the physical visit.
        </span>
      </strong>,
      <strong key="2">
        Automated Conversion Feedback Loop:{' '}
        <span className="font-normal text-[#514d46]">
          Offline showroom visit events are hashed and fed back to Google and Meta ad algorithms daily. The machine learning models automatically optimize toward audiences that physically visit the dealership rather than casual form-fillers.
        </span>
      </strong>,
      <strong key="3">
        Dynamic Call Tracking (DNI):{' '}
        <span className="font-normal text-[#514d46]">
          Dynamic Number Insertion attributes inbound phone calls directly to individual ad campaigns, keywords, and landing pages, logging audio recordings and sentiment directly inside the lead record.
        </span>
      </strong>,
    ],
  },
  { t: 'h2', text: 'The Automotive Dealership Lead Audit: 5 critical checkpoints' },
  {
    t: 'p',
    text: 'Before allocating additional ad budget to vehicle inventory campaigns or brand launches, dealership operators should evaluate their current operational infrastructure:',
  },
  {
    t: 'ol',
    items: [
      <strong key="1">
        Response Time SLA:{' '}
        <span className="font-normal text-[#514d46]">
          Is your dealership average speed-to-lead under five minutes during business hours, and does an automated multi-channel protocol engage after-hours inquiries immediately?
        </span>
      </strong>,
      <strong key="2">
        Direct CRM API Webhooks:{' '}
        <span className="font-normal text-[#514d46]">
          Are Meta and Google leads entering the sales queue within seconds via automated webhooks, or are reps manually downloading CSV files?
        </span>
      </strong>,
      <strong key="3">
        Two-Way SMS & WhatsApp Integration:{' '}
        <span className="font-normal text-[#514d46]">
          Can prospects immediately reply to automated confirmations to confirm or reschedule their test drive directly with a human consultant?
        </span>
      </strong>,
      <strong key="4">
        Offline Conversion Syncing:{' '}
        <span className="font-normal text-[#514d46]">
          Are closed showroom visits and sales fed back to ad platforms to train algorithmic bidding on actual revenue?
        </span>
      </strong>,
      <strong key="5">
        Lead-to-Showroom Attribution:{' '}
        <span className="font-normal text-[#514d46]">
          Can leadership identify the exact campaign, ad creative, and vehicle trim that delivered each showroom guest?
        </span>
      </strong>,
    ],
  },
  {
    t: 'source',
    label: 'INFORMATIONAL OPERATOR RESOURCE',
    body: (
      <>
        <SourceLink href="/digital-marketing-growth">
          Mett Global: Digital Marketing & Growth Practice
        </SourceLink>
        <SourceNote>
          For full-funnel automotive performance marketing, multi-rooftop CRM lead automation, and showroom footfall tracking, explore Mett Global’s Digital Marketing & Growth practice and custom automotive ERP solutions.
        </SourceNote>
      </>
    ),
  },
];

export default function DealershipLeadEngineGuide() {
  return (
    <ArticleShell
      back={'INFORMATIONAL GUIDE / AUTOMOTIVE GROWTH'}
      title={
        'Automotive Dealership Lead Engine: From Meta & Google Ads to Verified Showroom Footfall'
      }
      dek={
        'The end-to-end operational architecture connecting automotive inventory ads and brand launch campaigns to automated CRM webhook ingestion, sub-5-minute sales rep dispatch, and verified test-drive showroom visits.'
      }
      meta={'METT GLOBAL OPERATOR GUIDE · AUTOMOTIVE GROWTH & CRM · 6 MIN READ'}
      graphic={
        <ChipGraphic
          steps={[
            'META & GOOGLE ADS',
            'SUB-5-MIN SPEED-TO-LEAD',
            'CRM WEBHOOK ROUTING',
            'SALES REP DISPATCH',
            'SHOWROOM TEST DRIVE',
          ]}
        />
      }
      endHeading={'Looking to engineer a high-converting lead engine for your dealership?'}
      endHref={'/appointment'}
      endLabel={'Book an Automotive Growth Strategy Session with Our Team'}
    >
      <JsonLd
        data={articleJsonLd('/insight-dealership-lead-engine')}
      />
      <Prose blocks={BLOCKS} />
    </ArticleShell>
  );
}
