import { HomeButton } from './Button';
import { Reveal } from './Reveal';

/** `.hero` — dark opening panel with the orbiting monogram. */
export function Hero() {
  return (
    <section
      id="home"
      className="px-pad max-b900:min-h-0 max-b900:grid-cols-1 max-b900:pt-20 max-b560:px-6 relative grid min-h-[calc(100vh-130px)] grid-cols-[1.08fr_.92fr] items-center gap-[60px] overflow-hidden bg-black pt-[clamp(70px,9vw,130px)] pb-[55px] text-white"
    >
      {/* .hero-noise — a 7px dot lattice */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_0.7px,transparent_0.7px)] bg-[length:7px_7px] opacity-[.16]" />
      <div className="absolute top-[-330px] right-[-260px] h-[720px] w-[720px] rounded-full border border-[rgba(224,188,104,0.18)] bg-[radial-gradient(circle_at_35%_65%,rgba(184,137,45,0.22),transparent_55%)] blur-[1px]" />
      <div className="absolute bottom-[-250px] left-[-230px] h-[420px] w-[420px] rounded-full border border-[rgba(224,188,104,0.18)] blur-[1px]" />

      <Reveal className="relative z-[3]">
        <div className="text-gold2 flex items-center gap-3 text-[11px] font-extrabold tracking-[.2em] uppercase">
          <span className="bg-gold2 h-px w-[34px]" />
          One partner. Multiple disciplines. One standard.
        </div>
        <h1 className="max-b560:text-[58px] my-[30px] max-w-[950px] text-[clamp(58px,8vw,126px)] leading-[.83] tracking-[-.075em]">
          We build the systems behind{' '}
          <em className="text-gold2 font-serif font-normal not-italic">
            serious growth.
          </em>
        </h1>
        <p className="max-b560:text-[16px] max-w-[700px] text-[clamp(17px,1.4vw,21px)] leading-[1.65] text-[#aaa69d]">
          MettGlobal combines growth, eCommerce, creative, AI, web technology,
          supply chain and sales execution — so businesses can move faster
          without managing a fragmented vendor stack.
        </p>
        <div className="max-b560:flex-col mt-[34px] flex flex-wrap gap-3">
          <HomeButton href="#contact" variant="gold">
            Build with MettGlobal
          </HomeButton>
          <HomeButton href="#services" variant="ghost">
            Explore capabilities
          </HomeButton>
        </div>
      </Reveal>

      <Reveal className="max-b900:h-[390px] max-b560:h-[320px] relative z-[3] grid h-[600px] place-items-center">
        <div className="animate-spin-ring max-b900:h-[340px] max-b900:w-[340px] max-b560:h-[280px] max-b560:w-[280px] absolute h-[520px] w-[520px] rounded-full border border-[rgba(224,188,104,0.22)]" />
        <div className="animate-spin-ring-rev max-b900:h-[250px] max-b900:w-[250px] max-b560:h-[200px] max-b560:w-[200px] absolute h-[390px] w-[390px] rounded-full border border-[rgba(224,188,104,0.22)]" />

        {/* .mega-mark — the oversized monogram, gently floating */}
        <div className="animate-float max-b900:scale-[.7] relative h-[230px] w-[210px] drop-shadow-[0_30px_50px_rgba(184,137,45,0.18)]">
          <span className="absolute top-5 left-0 h-14 w-14 rounded-full bg-[linear-gradient(145deg,#f0cf7d,#9c6c17)]" />
          <i className="absolute top-0 left-[90px] h-[205px] w-[72px] rotate-[35deg] rounded-[60px] bg-[linear-gradient(145deg,#f0cf7d,#9c6c17)]" />
        </div>

        <div className="max-b900:bottom-0 max-b900:w-[230px] max-b560:hidden absolute right-0 bottom-[30px] w-[280px] border border-[rgba(224,188,104,0.22)] bg-[rgba(20,20,18,0.7)] p-6 backdrop-blur-[14px]">
          <small className="text-gold2 tracking-[.18em]">THE METT MODEL</small>
          <strong className="mt-3 block text-[22px] leading-[1.3]">
            Think commercially.
            <br />
            Build intelligently.
            <br />
            Execute relentlessly.
          </strong>
        </div>
      </Reveal>

      <div className="left-pad right-pad max-b900:hidden absolute bottom-[22px] z-[3] flex items-center gap-[18px] text-[9px] tracking-[.18em] text-[#706d65]">
        <span>SCROLL TO EXPLORE</span>
        <div className="h-px flex-1 bg-[#2c2b27]" />
        <span>ISLAMABAD · GLOBAL</span>
      </div>
    </section>
  );
}
