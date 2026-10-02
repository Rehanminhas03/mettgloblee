import { HomeButton } from './Button';
import { Reveal } from './Reveal';

/**
 * `.hero` — dark opening panel with the orbiting monogram. Sized to fill the
 * first screen below the sticky header (94px) without overflowing it.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="px-pad max-b900:grid-cols-1 max-b900:content-center max-b900:py-[72px] max-b560:px-6 max-b560:py-14 min-h-view relative grid grid-cols-[1.15fr_.85fr] items-center gap-[60px] overflow-hidden bg-black py-16 text-white"
    >
      {/* .hero-noise — a 7px dot lattice */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_0.7px,transparent_0.7px)] bg-[length:7px_7px] opacity-[.16]" />
      <div className="absolute top-[-330px] right-[-260px] h-[720px] w-[720px] rounded-full border border-[rgba(224,188,104,0.18)] bg-[radial-gradient(circle_at_35%_65%,rgba(184,137,45,0.22),transparent_55%)] blur-[1px]" />

      <Reveal className="relative z-[3]">
        <div className="text-gold2 flex items-center gap-3 text-[11px] font-extrabold tracking-[.2em] uppercase">
          <span className="bg-gold2 h-px w-[34px]" />
          One partner. Multiple disciplines.
        </div>
        <h1 className="max-b560:text-[40px] my-6 max-w-[760px] text-[clamp(42px,5.2vw,76px)] leading-[1.02] tracking-[-.05em]">
          We build the systems behind{' '}
          <em className="text-gold2 font-serif font-normal not-italic">
            serious growth.
          </em>
        </h1>
        <p className="max-b560:text-[16px] max-w-[600px] text-[clamp(16px,1.25vw,18px)] leading-[1.7] text-[#aaa69d]">
          eCommerce and supply chain, performance marketing, web and software
          development, and AI automation — one partner, so businesses can move
          faster without managing a fragmented vendor stack.
        </p>
        <div className="max-b560:flex-col mt-8 flex flex-wrap gap-3">
          <HomeButton href="/appointment" variant="gold">
            Book a meeting
          </HomeButton>
          <HomeButton href="#services" variant="ghost">
            Explore services
          </HomeButton>
        </div>
      </Reveal>

      <Reveal className="max-b900:hidden relative z-[3] grid h-[460px] place-items-center">
        <div className="animate-spin-ring absolute h-[420px] w-[420px] rounded-full border border-[rgba(224,188,104,0.22)]" />
        <div className="animate-spin-ring-rev absolute h-[310px] w-[310px] rounded-full border border-[rgba(224,188,104,0.22)]" />

        {/* .mega-mark — the oversized monogram, gently floating */}
        <div className="animate-float relative h-[230px] w-[210px] scale-[.78] drop-shadow-[0_30px_50px_rgba(184,137,45,0.18)]">
          <span className="absolute top-5 left-0 h-14 w-14 rounded-full bg-[linear-gradient(145deg,#f0cf7d,#9c6c17)]" />
          <i className="absolute top-0 left-[90px] h-[205px] w-[72px] rotate-[35deg] rounded-[60px] bg-[linear-gradient(145deg,#f0cf7d,#9c6c17)]" />
        </div>
      </Reveal>
    </section>
  );
}
