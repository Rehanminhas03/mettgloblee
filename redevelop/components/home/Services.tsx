import Link from 'next/link';
import { Reveal } from './Reveal';

type Tone = 'light' | 'dark' | 'gold';

type Service = {
  num: string;
  glyph?: string;
  title: string;
  copy: string;
  items: string[];
  cta: string;
  tone: Tone;
  wide?: boolean;
};

const SERVICES: Service[] = [
  {
    num: '01',
    glyph: '◎',
    tone: 'dark',
    title: 'eCommerce & Marketplace Operations',
    copy: 'End-to-end marketplace and DTC execution — from setup and catalog to inventory, fulfillment and growth.',
    items: [
      'Amazon Seller Central & Vendor operations',
      'Walmart Marketplace & WFS',
      'eBay, Etsy & Shopify management',
      'Listings, SEO, A+ content & storefronts',
      'FBA/FBM, replenishment & shipment planning',
      'Inventory reconciliation & marketplace claims',
      'Catalog health, pricing & promotions',
      'Multi-channel order and operations support',
    ],
    cta: 'Discuss eCommerce',
  },
  {
    num: '02',
    tone: 'gold',
    title: 'Growth, Paid Media & Social',
    copy: 'Creative and commercial systems designed to turn attention into conversations, leads and customers.',
    items: [
      'Meta & paid social campaign support',
      'Social media management',
      'Marketing strategy & campaign planning',
      'Organic social growth systems',
      'Content calendars & community support',
      'Graphic design & ad creative',
      'Short-form video & content creation',
      'Lead generation & outbound systems',
    ],
    cta: 'Build a growth system',
  },
  {
    num: '03',
    glyph: '✦',
    tone: 'light',
    title: 'AI Automation & AI Content',
    copy: 'Practical AI built around real workflows — not demos that never reach operations.',
    items: [
      'Workflow and task automation',
      'AI assistants & internal knowledge flows',
      'Lead qualification & sales automation',
      'AI video generation',
      'AI-assisted content production',
      'Process mapping & automation design',
      'Cross-tool integrations',
      'Reporting and operational automation',
    ],
    cta: 'Find automation opportunities',
  },
  {
    num: '04',
    glyph: '⌘',
    tone: 'light',
    title: 'Web Design & Development',
    copy: 'Fast, conversion-aware websites and digital experiences engineered around the customer journey.',
    items: [
      'Corporate & service websites',
      'Landing pages & conversion funnels',
      'Shopify & eCommerce builds',
      'Custom web applications',
      'Responsive UX/UI',
      'Performance & Core Web Vitals',
      'Technical SEO foundations',
      'Analytics and conversion tracking',
    ],
    cta: 'Plan a website',
  },
  {
    num: '05',
    glyph: '◇',
    tone: 'light',
    title: 'Audits & Diagnostics',
    copy: 'Independent review before execution. We identify friction, prioritize issues and turn findings into an action plan.',
    items: [
      'Website & conversion audits',
      'eCommerce marketplace audits',
      'Creative & paid-ad reviews',
      'SEO & performance diagnostics',
      'Operational workflow reviews',
      'Inventory & process health checks',
      'Sales-funnel & lead-flow diagnostics',
      'Growth opportunity mapping',
    ],
    cta: 'Request an audit',
  },
  {
    num: '06',
    glyph: '◈',
    tone: 'dark',
    title: 'Logistics, Supply Chain & Sourcing',
    copy: 'Operational support built from hands-on international eCommerce, warehousing and marketplace experience.',
    items: [
      'Inventory planning & forecasting',
      'Demand and replenishment planning',
      'Warehouse & 3PL coordination',
      'Production planning support',
      'Supplier sourcing in China & Pakistan',
      'Vendor comparison & coordination',
      'Freight, fulfillment & route analysis',
      'Operational dashboards & SOPs',
    ],
    cta: 'Strengthen operations',
  },
  {
    num: '07',
    tone: 'light',
    wide: true,
    title: 'Sales Support & Business Development',
    copy: 'Research, prospecting and sales infrastructure that helps teams create a more disciplined commercial pipeline.',
    items: [
      'Prospect research & database building',
      'Lead qualification',
      'Cold outreach systems',
      'CRM structure & pipeline hygiene',
      'Proposal and sales collateral support',
      'Follow-up systems',
      'Market and competitor research',
      'Sales operations support',
    ],
    cta: 'Build the pipeline',
  },
];

const TONE = {
  light: {
    card: 'bg-paper border border-[rgba(31,27,19,0.12)]',
    icon: 'text-gold',
    copy: 'text-muted',
    bullet: 'before:text-gold',
    link: 'text-gold',
  },
  dark: {
    card: 'bg-black text-white border border-black',
    icon: 'text-white',
    copy: 'text-[#c9c4ba]',
    bullet: 'before:text-gold2',
    link: 'text-gold2',
  },
  gold: {
    card: 'bg-[linear-gradient(145deg,#bd8c2d_0%,#8c6118_100%)] text-white border-0',
    icon: 'text-white',
    copy: 'text-[#c9c4ba]',
    bullet: 'before:text-gold2',
    link: 'text-gold2',
  },
} as const;

/** `.service-icon` — three pulsing signal bars. */
function SignalIcon({ className }: { className: string }) {
  return (
    <div
      className={`grid h-[62px] w-[62px] grid-cols-3 items-end gap-[5px] ${className}`}
    >
      <span className="animate-signal block h-[34%] [transform-origin:bottom] rounded-full bg-current [animation-delay:-0.4s]" />
      <span className="animate-signal block h-[68%] [transform-origin:bottom] rounded-full bg-current [animation-delay:-0.8s]" />
      <span className="animate-signal block h-full [transform-origin:bottom] rounded-full bg-current [animation-delay:-1.2s]" />
    </div>
  );
}

const CARD_BASE =
  'relative flex flex-col overflow-hidden rounded-3xl p-[42px] shadow-[0_1px_0_rgba(255,255,255,.72)_inset,0_16px_50px_rgba(31,27,19,.055)] transition-[transform,box-shadow] duration-[.45s] hover:-translate-y-[7px] hover:shadow-[0_30px_80px_rgba(31,27,19,.12)] max-b900:min-h-0 max-b900:p-[30px]';

const LINK_BASE =
  "relative isolate mt-auto overflow-hidden text-[13px] font-black before:absolute before:inset-0 before:-z-[1] before:-translate-x-[140%] before:bg-[linear-gradient(105deg,transparent_25%,rgba(255,255,255,.16)_48%,transparent_70%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] hover:before:translate-x-[140%]";

function Bullets({ tone, items }: { tone: Tone; items: string[] }) {
  return (
    <ul className="max-b560:grid-cols-1 m-0 mt-[26px] mb-[34px] grid list-none grid-cols-2 gap-x-[18px] gap-y-[10px] p-0">
      {items.map(item => (
        <li
          key={item}
          className={`relative pl-4 text-[13px] leading-[1.4] before:absolute before:left-0 before:content-['—'] ${TONE[tone].bullet}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** `.services` — the capability grid. */
export function Services() {
  return (
    <section
      id="services"
      className="px-pad max-b900:px-7 max-b900:py-[78px] max-b560:px-6 max-b560:py-[68px] bg-[linear-gradient(180deg,#f1ede5_0%,#e8e1d5_100%)] py-[110px]"
    >
      <div className="max-b900:grid-cols-1 max-b900:gap-8 mb-[70px] grid grid-cols-[.2fr_1fr_.6fr] items-end gap-[35px]">
        <div className="text-gold2 self-start text-[11px] font-extrabold tracking-[.2em] uppercase">
          02 / CAPABILITIES
        </div>
        <Reveal>
          <h2 className="max-b560:text-[49px] m-0 text-[clamp(48px,6.5vw,96px)] leading-[.92] tracking-[-.065em]">
            From storefront to supply chain.
            <br />
            <span className="text-gold font-serif font-normal">
              From attention to automation.
            </span>
          </h2>
        </Reveal>
        <p className="text-muted max-w-[650px] text-[18px] leading-[1.75]">
          Engage us for one focused problem or connect multiple capabilities
          into a single growth and operations program.
        </p>
      </div>

      <div className="max-b900:grid-cols-1 grid grid-cols-2 gap-[18px]">
        {SERVICES.map(service => {
          const tone = TONE[service.tone];

          if (service.wide) {
            return (
              <Reveal
                key={service.num}
                as="article"
                className={`${CARD_BASE} max-b900:col-auto max-b900:flex col-span-full grid min-h-[420px] grid-cols-[.15fr_.7fr_1fr] items-start gap-[30px] ${tone.card}`}
              >
                <div className="text-gold text-[11px] tracking-[.18em]">
                  {service.num}
                </div>
                <SignalIcon
                  className={`max-b900:hidden absolute top-[-45px] right-[35px] opacity-[.07] ${tone.icon}`}
                />
                <div>
                  <h3 className="m-0 mb-[18px] text-[clamp(30px,3vw,48px)] leading-none tracking-[-.045em]">
                    {service.title}
                  </h3>
                  <p className={`text-[17px] leading-[1.65] ${tone.copy}`}>
                    {service.copy}
                  </p>
                </div>
                <ul className="max-b560:grid-cols-1 m-0 grid list-none grid-cols-2 gap-x-[18px] gap-y-[10px] p-0">
                  {service.items.map(item => (
                    <li
                      key={item}
                      className={`relative pl-4 text-[13px] leading-[1.4] before:absolute before:left-0 before:content-['—'] ${tone.bullet}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`${LINK_BASE} max-b900:col-auto col-start-2 ${tone.link}`}
                >
                  {service.cta}
                </Link>
              </Reveal>
            );
          }

          return (
            <Reveal
              key={service.num}
              as="article"
              className={`${CARD_BASE} min-h-[650px] ${tone.card}`}
            >
              <div className="text-gold text-[11px] tracking-[.18em]">
                {service.num}
              </div>
              {service.glyph ? (
                <div
                  className={`max-b900:mb-6 max-b900:mt-12 mt-20 mb-7 grid h-[62px] w-[62px] grid-cols-3 items-end gap-[5px] ${tone.icon}`}
                >
                  {service.glyph}
                </div>
              ) : (
                <SignalIcon
                  className={`max-b900:mb-6 max-b900:mt-12 mt-20 mb-7 ${tone.icon}`}
                />
              )}
              <h3 className="m-0 mb-[18px] text-[clamp(30px,3vw,48px)] leading-none tracking-[-.045em]">
                {service.title}
              </h3>
              <p className={`text-[17px] leading-[1.65] ${tone.copy}`}>
                {service.copy}
              </p>
              <Bullets tone={service.tone} items={service.items} />
              <Link href="#contact" className={`${LINK_BASE} ${tone.link}`}>
                {service.cta}
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
