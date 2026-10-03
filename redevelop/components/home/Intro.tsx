/**
 * Opening curtain for the homepage: a black screen with the wordmark, a gold
 * line drawn across the centre, then the two halves part up and down.
 *
 * Pure CSS, so it plays before hydration. The inline script marks the session
 * so the curtain only runs on the first homepage visit; afterwards
 * `html[data-intro=seen]` hides it (see globals.css).
 */
const SEEN_SCRIPT = `try{if(sessionStorage.getItem('mg-intro')){document.documentElement.dataset.intro='seen'}else{sessionStorage.setItem('mg-intro','1')}}catch(e){}`;

const HALF = 'absolute left-0 h-1/2 w-full bg-black';

export function Intro() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: SEEN_SCRIPT }} />
      <div
        data-intro
        aria-hidden="true"
        className="animate-intro-done pointer-events-none fixed inset-0 z-[300] motion-reduce:hidden"
      >
        <div
          className={`${HALF} top-0 animate-[intro-up_.95s_cubic-bezier(.77,0,.18,1)_1.05s_forwards]`}
        />
        <div
          className={`${HALF} bottom-0 animate-[intro-down_.95s_cubic-bezier(.77,0,.18,1)_1.05s_forwards]`}
        />

        {/* Gold seam drawn outward from the centre */}
        <div className="bg-gold2 absolute top-1/2 left-1/2 h-px w-screen animate-[intro-seam_1.4s_cubic-bezier(.2,.7,.2,1)_forwards]" />

        {/* Wordmark, fading out just before the split */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-[calc(100%+18px)] animate-[intro-mark_1.05s_ease_forwards] text-center text-[clamp(22px,2.6vw,34px)] font-bold tracking-[-.04em] text-white">
          Mett <span className="text-gold2">Global</span>
        </div>
      </div>
    </>
  );
}
