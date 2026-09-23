import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { ContactBand } from '@/components/page/ContactBand';
import { ProcessGrid, Section, SectionHead } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';
import { CASE_FOOTER, CASE_NAV, GLOBAL_FOOTER_NOTE } from '@/lib/navigation';

export const metadata = pageMetadata('/case-studies');

type CaseCard = {
  href: string;
  tone: 'dark' | 'light' | 'csm';
  num: string;
  sector: string;
  wordmark: string;
  title: string;
  copy: string;
  kpis: { value: string; label: string }[];
};

const CASES: CaseCard[] = [
  {
    href: '/case-study-jetour-ittehad',
    tone: 'dark',
    num: '01',
    sector: 'AUTOMOTIVE · GROWTH SYSTEM',
    wordmark: 'JETOUR ITTEHAD',
    title: 'Building a dealership growth engine from zero.',
    copy: 'Social launch, Meta lead generation, website journey, automation, billboards and seven documented activations across Islamabad.',
    kpis: [
      { value: '79', label: 'verified leads' },
      { value: '82%', label: 'Reel lead share' },
      { value: '20.3%', label: 'visit-stage+' },
      { value: '1', label: 'confirmed booking' },
    ],
  },
  {
    href: '/case-study-hyundai-islamabad',
    tone: 'light',
    num: '02',
    sector: 'AUTOMOTIVE · GROWTH INFRASTRUCTURE',
    wordmark: 'HYUNDAI ISLAMABAD',
    title: 'Turning product strength into a connected local journey.',
    copy: 'Content direction, website-to-showroom journey, lead-handling framework, outdoor visibility and activation planning for the Islamabad market.',
    kpis: [
      { value: '3', label: 'social channels in scope' },
      { value: '1', label: 'connected funnel' },
      { value: '0', label: 'invented performance claims' },
      { value: 'LIVE', label: 'measurement framework' },
    ],
  },
  {
    href: '/case-study-csm-ittehad',
    tone: 'csm',
    num: '03',
    sector: 'EV AUTOMOTIVE · LEAD GENERATION',
    wordmark: 'CSM ITTEHAD',
    title: 'Building awareness into measurable showroom traffic.',
    copy: 'Brand setup, EV3 campaign execution, lead automation, website journey and local visibility for a new Islamabad EV presence.',
    kpis: [
      { value: '~400', label: 'client-reported leads' },
      { value: '112', label: 'showroom visits' },
      { value: '~28%', label: 'lead-to-visit rate' },
      { value: 'OPEN', label: 'sales closure tracking' },
    ],
  },
];

const METHOD = [
  {
    num: '01',
    title: 'Verified metrics',
    copy: 'Counts, percentages and outcomes are calculated only from documented campaign or pipeline data.',
  },
  {
    num: '02',
    title: 'Evidence-led narrative',
    copy: 'We separate work completed from claims about market impact we cannot independently establish.',
  },
  {
    num: '03',
    title: 'No vanity ROI',
    copy: 'We do not publish CPL, ROAS, revenue or rankings when the underlying financial data is unavailable.',
  },
  {
    num: '04',
    title: 'Living case studies',
    copy: 'Pages can be updated as more client-approved analytics, photography and outcomes become available.',
  },
];

/* Per-tone colour treatment for `.dark-case`, `.light-case`, `.csm-index-card` */
const TONE = {
  dark: {
    card: 'border-[#2d2921] bg-[#11110f] text-white',
    label: 'text-[#aaa49a]',
    wordmark: 'text-p-gold2',
    copy: 'text-[#aaa59b]',
    value: 'text-p-gold2',
    small: 'text-[#aaa59b]',
  },
  light: {
    card: 'border-p-line bg-white',
    label: 'text-p-muted',
    wordmark: 'text-p-gold',
    copy: 'text-p-muted',
    value: 'text-p-gold',
    small: 'text-p-muted',
  },
  csm: {
    card: 'border-[#332e24] bg-[linear-gradient(145deg,#17150f,#2f2615)] text-white min-[1050px]:col-span-full min-[1050px]:min-h-[460px]',
    label: 'text-[#aaa59b]',
    wordmark: 'text-p-gold2',
    copy: 'text-[#aaa59b]',
    value: 'text-p-gold2',
    small: 'text-[#aaa59b]',
  },
} as const;

export default function CaseStudiesPage() {
  return (
    <PageShell
      navLinks={CASE_NAV}
      footerNote={GLOBAL_FOOTER_NOTE}
      footerLinks={CASE_FOOTER}
    >
      <JsonLd data={breadcrumbJsonLd('/case-studies')} />

      {/* .hero.case-index-hero */}
      <section className="max-b620:px-6 max-w-[1320px] bg-[radial-gradient(circle_at_82%_18%,rgba(184,137,45,.10),transparent_22%),var(--color-p-paper)] px-[8vw] pt-[110px] pb-[90px]">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          CASE STUDIES / SELECTED WORK
        </span>
        <h1 className="mt-6 mb-[34px] text-[clamp(52px,8vw,110px)] leading-[.9] tracking-[-.07em]">
          Proof before
          <br />
          <span className="text-p-gold">promises.</span>
        </h1>
        <p className="text-p-muted max-b620:text-[16px] my-[1em] max-w-[780px] text-[18px] leading-[1.75]">
          MettGlobal case studies show how strategy, creative, technology,
          automation and operations come together around real client problems.
          Performance figures are published only where the underlying evidence
          supports them.
        </p>
      </section>

      <Section className="bg-[#f6f1e7]">
        {/* .case-index-grid */}
        <div className="max-b1000:grid-cols-1 grid grid-cols-[1.08fr_.92fr] gap-[18px] min-[1050px]:grid-cols-[repeat(2,minmax(0,1fr))]">
          {CASES.map(item => {
            const tone = TONE[item.tone];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`max-b620:min-h-[500px] max-b620:p-[26px] relative flex min-h-[540px] flex-col overflow-hidden rounded-[30px] border p-[34px] transition-[transform,box-shadow] duration-[.25s] after:absolute after:top-[-100px] after:right-[-130px] after:h-[300px] after:w-[300px] after:rounded-full after:border after:border-[rgba(184,137,45,.22)] after:shadow-[0_0_0_48px_rgba(184,137,45,.035)] after:content-[''] hover:-translate-y-[5px] hover:shadow-[0_28px_72px_rgba(42,31,13,.12)] ${tone.card}`}
              >
                <div
                  className={`relative z-[1] flex items-center gap-[10px] text-[9px] font-black tracking-[.14em] ${tone.label}`}
                >
                  <span className="grid h-[34px] w-[34px] place-items-center rounded-full border border-current">
                    {item.num}
                  </span>
                  {item.sector}
                </div>

                <div
                  className={`relative z-[1] mt-[70px] text-[11px] font-black tracking-[.18em] ${tone.wordmark} max-b620:mt-[50px]`}
                >
                  {item.wordmark}
                </div>

                <h2 className="relative z-[1] mt-[14px] mb-3 text-[clamp(34px,4vw,58px)] leading-[.98] tracking-[-.055em]">
                  {item.title}
                </h2>
                <p
                  className={`relative z-[1] my-[1em] max-w-[680px] leading-[1.7] ${tone.copy}`}
                >
                  {item.copy}
                </p>

                <div
                  className={`relative z-[1] mt-auto grid grid-cols-2 gap-3 pt-7 ${
                    item.tone === 'csm' ? 'min-[1050px]:grid-cols-4' : ''
                  }`}
                >
                  {item.kpis.map(kpi => (
                    <div
                      key={kpi.label}
                      className="border-t border-[rgba(184,137,45,.33)] pt-[15px]"
                    >
                      <b
                        className={`block text-[28px] leading-none tracking-[-.04em] ${tone.value}`}
                      >
                        {kpi.value}
                      </b>
                      <small
                        className={`mt-[6px] block text-[9px] tracking-[.1em] uppercase ${tone.small}`}
                      >
                        {kpi.label}
                      </small>
                    </div>
                  ))}
                </div>

                <strong className="relative z-[1] mt-6 text-[11px]">
                  Explore case study
                </strong>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section dark>
        <SectionHead heading="How we publish proof" dark>
          A case study is only useful if the reader can tell what is measured,
          what is operational evidence and what is still awaiting data.
        </SectionHead>
        <ProcessGrid steps={METHOD} dark />
      </Section>

      <ContactBand
        heading="Have a problem worth measuring?"
        copy="Bring us the commercial or operational constraint. We will map the system and the evidence required to judge it properly."
        ctaHref="/appointment"
        ctaLabel="Book a meeting"
      />
    </PageShell>
  );
}
