import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { Knewave } from 'next/font/google';
import { Reveal } from './Reveal';

/** Short sentence-style labels for the service line along the hero's foot. */
const SERVICE_LINE: Record<string, string> = {
  '/ecommerce-supply-chain': 'eCommerce & supply chain.',
  '/performance-marketing': 'Performance marketing.',
  '/software-development': 'Web & software development.',
  '/ai-automation': 'AI automation & content.',
};

/** Brush display face for the hero word only. */
const display = Knewave({ weight: '400', subsets: ['latin'], display: 'swap' });

const LETTER =
  'animate-rise inline-block transition-[transform,color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-[.07em] hover:-rotate-3 motion-reduce:animate-none';

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

/**
 * `.hero` — minimal light opening panel: one oversized brush word across the top, the headline, and the four services along the foot. Fills the
 * first screen below the sticky header.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-view bg-[#eee8dd] text-ink max-b900:justify-center max-b900:gap-12 relative flex flex-col justify-between overflow-hidden pt-[clamp(20px,3vh,40px)] pb-[clamp(24px,4vh,44px)]"
    >
      {/* Display word — decorative; letters rise in, then lift on hover */}
      <div
        aria-hidden="true"
        className={`${display.className} px-pad text-ink relative my-auto flex overflow-hidden py-[.08em] text-[27vw] short:text-[22vw] leading-[.95] tracking-[-.01em] whitespace-nowrap select-none`}
      >
        <Word text="Scale" offset={0} className="" />
      </div>

      <div className="px-pad">
        <Reveal className="max-b900:flex-col max-b900:items-start flex items-end justify-between gap-10">
          <h1 className="max-b560:text-[44px] m-0 max-w-[1200px] text-[clamp(48px,6.4vw,108px)] leading-[.98] font-medium tracking-[-.05em]">
            We build the systems
            <br className="max-b560:hidden" /> behind{' '}
            <span className="text-gold">serious growth.</span>
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

        <nav
          aria-label="Services"
          className="max-b900:grid max-b900:grid-cols-2 max-b900:gap-y-3 max-b560:grid-cols-1 mt-[clamp(28px,5vh,56px)] flex justify-between gap-x-8"
        >
          {SERVICES.map(service => (
            <Link
              key={service.href}
              href={service.href}
              className="hover:text-gold text-[clamp(15px,1.15vw,19px)] transition-colors duration-300"
            >
              {SERVICE_LINE[service.href] ?? service.title}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
