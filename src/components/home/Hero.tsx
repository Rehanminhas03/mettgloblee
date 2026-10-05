import Link from 'next/link';
import { Knewave } from 'next/font/google';
import { Reveal } from './Reveal';

/** Brush display face for the hero word only. */
const display = Knewave({ weight: '400', subsets: ['latin'], display: 'swap' });

const LETTER =
  'animate-rise inline-block transition-[transform,color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-[.07em] hover:-rotate-3 motion-reduce:animate-none';

const PILL =
  'absolute flex items-center gap-2 rounded-full border border-[rgba(184,137,45,.3)] bg-[rgba(255,255,255,.72)] px-4 py-2 text-[12px] font-bold whitespace-nowrap shadow-[0_8px_24px_rgba(38,29,13,.08)] backdrop-blur-md';

/** One word of the wordmark, its letters rising in on a stagger. */
function Word({
  text,
  offset,
  className,
}: {
  text: string;
  offset: number;
  className: string;
}) {
  return (
    <span className={`inline-flex ${className}`}>
      {[...text].map((letter, index) => (
        <span
          key={index}
          className={LETTER}
          style={{
            animationDelay: `calc(var(--intro-delay, 0ms) + ${(offset + index) * 55}ms)`,
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

/** The four pillars, arranged around a gold core. Decorative. */
function Orbit() {
  return (
    <div
      aria-hidden="true"
      className="max-b900:hidden pointer-events-none absolute top-[11%] right-[5vw] h-[clamp(230px,46vh,390px)] w-[clamp(230px,46vh,390px)]"
    >
      <div className="animate-orbit absolute inset-0 rounded-full border border-[rgba(184,137,45,.32)] shadow-[0_0_0_46px_rgba(184,137,45,.04)]">
        <span className="bg-gold2 absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_0_6px_rgba(224,188,104,.25)]" />
      </div>
      <div className="animate-orbit-reverse absolute inset-[16%] rounded-full border border-dashed border-[rgba(184,137,45,.4)]">
        <span className="bg-gold absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full" />
      </div>
      <div className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#f0d58a,#c8952a_70%)] shadow-[0_18px_50px_rgba(184,137,45,.35)]" />
      <span
        className={`${PILL} top-0 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <i className="text-gold not-italic">01</i> Digital Growth
      </span>
      <span
        className={`${PILL} top-1/2 right-0 translate-x-[12%] -translate-y-1/2`}
      >
        <i className="text-gold not-italic">02</i> Technology
      </span>
      <span
        className={`${PILL} bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2`}
      >
        <i className="text-gold not-italic">03</i> AI
      </span>
      <span
        className={`${PILL} top-1/2 left-0 -translate-x-[12%] -translate-y-1/2`}
      >
        <i className="text-gold not-italic">04</i> Commerce
      </span>
    </div>
  );
}

/**
 * `.hero` — minimal light opening panel: one oversized brush word across the
 * top and the headline with its call to action. Fills the first screen below
 * the sticky header.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-view text-ink max-b900:justify-center max-b900:gap-12 relative flex flex-col justify-between overflow-hidden bg-[#f4efe5] pt-[clamp(20px,3vh,40px)] pb-[clamp(24px,4vh,44px)]"
    >
      {/* Background: soft gold glow and a fading dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(224,188,104,.38),transparent_66%)]" />
        <div className="absolute -bottom-48 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),transparent_68%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(31,27,19,.16)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_88%)] [background-size:26px_26px]" />
      </div>

      <Orbit />

      {/* Display word — decorative; letters rise in, then lift on hover */}
      <div
        aria-hidden="true"
        className={`${display.className} px-pad text-ink short:text-[23vw] relative my-auto flex overflow-hidden py-[.08em] text-[27vw] leading-[.95] tracking-[-.01em] whitespace-nowrap select-none`}
      >
        <Word text="Scale" offset={0} className="" />
      </div>

      <div className="px-pad relative">
        <Reveal className="max-b900:flex-col max-b900:items-start flex items-end justify-between gap-10">
          <h1 className="max-b560:text-[44px] m-0 max-w-[1200px] text-[clamp(44px,5.2vw,88px)] leading-[.98] font-medium tracking-[-.05em]">
            You focus on business.
            <br className="max-b560:hidden" /> We build what makes it{' '}
            <span className="text-gold">grow.</span>
          </h1>

          <Link
            href="/appointment"
            className="group bg-ink mb-[.6vw] inline-flex flex-none items-center gap-5 rounded-full py-2 pr-2 pl-7 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-black"
          >
            Book a meeting
            <span className="bg-gold2 text-ink grid h-11 w-11 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
