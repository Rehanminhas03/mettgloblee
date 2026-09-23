import Link from 'next/link';
import { HomeButton } from './Button';
import { Reveal } from './Reveal';

type Tone = 'jetour' | 'hyundai' | 'csm';

const CASES: {
  href: string;
  tone: Tone;
  sector: string;
  num: string;
  brand: string;
  title: string;
  copy: string;
  metrics: { value: string; label: string }[];
  link: string;
}[] = [
  {
    href: '/case-study-jetour-ittehad',
    tone: 'jetour',
    sector: 'AUTOMOTIVE · ISLAMABAD',
    num: '01',
    brand: 'JETOUR ITTEHAD',
    title: 'From zero digital presence to a measurable lead engine.',
    copy: 'Brand launch, Meta acquisition, lead automation, outdoor visibility and live activations working as one system.',
    metrics: [
      { value: '79', label: 'verified leads' },
      { value: '82%', label: 'from Reel creative' },
      { value: '20.3%', label: 'visit-stage+' },
    ],
    link: 'Read the Jetour case study',
  },
  {
    href: '/case-study-hyundai-islamabad',
    tone: 'hyundai',
    sector: 'AUTOMOTIVE · ISLAMABAD',
    num: '02',
    brand: 'HYUNDAI ISLAMABAD',
    title:
      'Connecting an established automotive brand into a local growth system.',
    copy: 'Content, digital journey, lead handling, outdoor visibility and activation planning built around measurable showroom outcomes.',
    metrics: [
      { value: '3', label: 'managed social channels' },
      { value: '1', label: 'connected funnel' },
      { value: 'LIVE', label: 'measurement framework' },
    ],
    link: 'Read the Hyundai case study',
  },
  {
    href: '/case-study-csm-ittehad',
    tone: 'csm',
    sector: 'EV AUTOMOTIVE · ISLAMABAD',
    num: '03',
    brand: 'CSM ITTEHAD',
    title: 'Turning a new EV presence into showroom traffic.',
    copy: 'Brand foundation, Meta acquisition, lead automation and local visibility built around a measurable visit funnel.',
    metrics: [
      { value: '~400', label: 'client-reported leads' },
      { value: '112', label: 'showroom visits' },
      { value: '~28%', label: 'lead-to-visit rate' },
    ],
    link: 'Read the CSM case study',
  },
];

const TONE = {
  jetour: {
    card: 'bg-ink text-white border-[#26231e]',
    top: 'text-[#bdb6a9]',
    brand: 'text-gold2',
    copy: 'text-[#b9b4aa]',
    value: 'text-gold2',
    small: 'text-[#aaa59b]',
    span: '',
  },
  hyundai: {
    card: 'bg-white text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    value: 'text-gold',
    small: 'text-muted',
    span: '',
  },
  csm: {
    card: 'bg-[linear-gradient(145deg,#f7f1e5,#fff)] text-ink border-line',
    top: 'text-muted',
    brand: 'text-gold',
    copy: 'text-muted',
    value: 'text-gold',
    small: 'text-muted',
    span: 'max-b1100:col-span-full max-b1100:min-h-[400px] max-b900:col-auto',
  },
} as const;

/** `.case-studies-home` — the three-card proof band. */
export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="border-line px-pad max-b620:px-6 max-b620:py-[78px] border-y bg-[linear-gradient(180deg,#f6f1e7_0%,#fbfaf6_100%)] py-[105px]"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        03 / CASE STUDIES
      </div>

      <Reveal className="max-b900:grid-cols-1 mt-8 mb-[38px] grid grid-cols-[minmax(0,1.15fr)_minmax(280px,.85fr)] items-end gap-[54px]">
        <div>
          <span className="text-gold block text-[9px] font-black tracking-[.18em]">
            SELECTED WORK · VERIFIED WHERE MEASURED
          </span>
          <h2 className="mt-[7px] mb-0 text-[clamp(44px,6vw,86px)] leading-[.94] tracking-[-.065em]">
            Work you can
            <br />
            <span className="text-gold">trace to evidence.</span>
          </h2>
        </div>
        <p className="text-muted m-0 max-w-[620px] leading-[1.75]">
          We publish what we can substantiate. Explore how MettGlobal connects
          strategy, creative, digital systems, automation and on-ground
          execution around real client problems.
        </p>
      </Reveal>

      <div className="max-b1100:grid-cols-2 max-b900:grid-cols-1 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[18px]">
        {CASES.map(item => {
          const tone = TONE[item.tone];
          return (
            <Reveal key={item.href} className={tone.span}>
              <Link
                href={item.href}
                className={`max-b900:min-h-[430px] max-b620:rounded-3xl max-b620:p-[26px] relative flex min-h-[470px] flex-col overflow-hidden rounded-[30px] border p-[34px] transition-[transform,box-shadow,border-color] duration-[.25s] after:absolute after:top-[-100px] after:right-[-120px] after:h-[280px] after:w-[280px] after:rounded-full after:border after:border-[rgba(184,137,45,.24)] after:shadow-[0_0_0_48px_rgba(184,137,45,.035)] after:content-[''] hover:-translate-y-[5px] hover:border-[#c8af7e] hover:shadow-[0_28px_70px_rgba(38,29,13,.12)] ${tone.card}`}
              >
                <div
                  className={`relative z-[1] flex items-center justify-between text-[9px] font-black tracking-[.15em] ${tone.top}`}
                >
                  <span>{item.sector}</span>
                  <b className="grid h-9 w-9 place-items-center rounded-full border border-current text-[10px]">
                    {item.num}
                  </b>
                </div>

                <div
                  className={`max-b620:mt-[50px] relative z-[1] mt-[72px] text-xs font-black tracking-[.18em] ${tone.brand}`}
                >
                  {item.brand}
                </div>

                <h3 className="relative z-[1] mt-[14px] mb-3 max-w-[700px] text-[clamp(27px,2.4vw,43px)] leading-none tracking-[-.055em]">
                  {item.title}
                </h3>
                <p
                  className={`relative z-[1] m-0 max-w-[680px] leading-[1.7] ${tone.copy}`}
                >
                  {item.copy}
                </p>

                <div className="max-b620:grid-cols-2 max-b620:[&>div:last-child]:col-span-full relative z-[1] mt-auto grid grid-cols-3 gap-[10px] pt-9">
                  {item.metrics.map(metric => (
                    <div
                      key={metric.label}
                      className="border-t border-[rgba(184,137,45,.34)] pt-[14px]"
                    >
                      <strong
                        className={`block text-[30px] leading-none tracking-[-.04em] ${tone.value}`}
                      >
                        {metric.value}
                      </strong>
                      <small
                        className={`mt-[6px] block text-[9px] tracking-[.11em] uppercase ${tone.small}`}
                      >
                        {metric.label}
                      </small>
                    </div>
                  ))}
                </div>

                <span className="relative z-[1] mt-6 text-[11px] font-black tracking-[.05em]">
                  {item.link}
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="border-line max-b900:flex-col max-b900:items-start mt-[18px] flex items-center justify-between gap-6 rounded-[22px] border bg-white/60 px-6 py-[22px]">
        <div className="flex flex-wrap items-baseline gap-[10px]">
          <strong className="text-[13px]">Proof over theatre.</strong>
          <span className="text-muted text-xs">
            No invented ROI, rankings or performance numbers.
          </span>
        </div>
        <HomeButton href="/case-studies" variant="ghost">
          Explore all case studies
        </HomeButton>
      </Reveal>
    </section>
  );
}
