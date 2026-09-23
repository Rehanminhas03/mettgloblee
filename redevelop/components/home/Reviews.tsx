import { Reveal } from './Reveal';

/** `.reviews` — a single card pointing at the official Google review channel. */
export function Reviews() {
  return (
    <section
      id="reviews"
      className="px-pad max-b900:px-7 max-b560:px-6 bg-[#f3eee5] py-[100px]"
    >
      <div className="text-gold2 text-[11px] font-extrabold tracking-[.2em] uppercase">
        08 / GOOGLE REVIEWS
      </div>

      <Reveal className="max-b760:grid-cols-1 my-12 grid grid-cols-[1fr_.7fr] items-end gap-[70px]">
        <h2 className="m-0 text-[clamp(46px,5.5vw,78px)] leading-[.95] tracking-[-.05em]">
          Public feedback.
          <br />
          <span className="text-gold">Independent by design.</span>
        </h2>
        <p className="text-muted leading-[1.75]">
          Worked with MettGlobal? Share your experience on Google.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-[980px] grid-cols-[minmax(0,1fr)] gap-4">
        <aside
          aria-label="MettGlobal Google Reviews"
          className="max-b700:min-h-0 flex min-h-[430px] flex-col rounded-[28px] border border-[#25231f] bg-[#0d0d0c] p-[clamp(30px,4vw,54px)] text-white"
        >
          {/* .google-brand — the wordmark in Google's own colours */}
          <div
            aria-label="Google"
            className="font-dm mb-[34px] flex w-max items-center rounded-2xl bg-white px-4 py-3 text-[27px] leading-none font-extrabold tracking-[-.08em] shadow-[0_16px_45px_rgba(0,0,0,.12)]"
          >
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          <span className="text-gold text-[10px] font-black tracking-[.18em]">
            OFFICIAL GOOGLE REVIEW CHANNEL
          </span>
          <h3 className="my-3 max-w-[680px] text-[clamp(38px,5vw,66px)] leading-[1.05] tracking-[-.04em]">
            Worked with MettGlobal?
          </h3>
          <p className="max-w-[760px] text-base leading-[1.7] text-[#aaa69d]">
            Your feedback helps other businesses get to know our work.
          </p>

          <a
            href="https://g.page/r/CZtnRyIz1b4GEBM/review"
            target="_blank"
            rel="noopener"
            data-google-review-link
            className="bg-gold hover:bg-gold2 mt-[22px] inline-flex w-max max-w-full items-center justify-center rounded-full px-5 py-[14px] text-xs font-black text-white transition-[transform,background] duration-[.25s] hover:-translate-y-0.5 hover:text-black"
          >
            Leave a Google Review
          </a>
        </aside>
      </div>
    </section>
  );
}
