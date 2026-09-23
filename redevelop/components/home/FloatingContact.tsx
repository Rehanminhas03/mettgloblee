import { WaIcon } from './WaIcon';

/** `.floating-contact` — the persistent WhatsApp and call buttons. */
export function FloatingContact() {
  return (
    <aside className="max-b560:bottom-[14px] max-b560:right-[14px] fixed right-[22px] bottom-[22px] z-[45] flex items-center gap-2">
      <a
        href="https://wa.me/923046551553?text=Hi%20MettGlobal"
        target="_blank"
        rel="noopener"
        aria-label="Chat with MettGlobal on WhatsApp"
        className="max-b560:h-12 max-b560:w-12 max-b560:justify-center max-b560:p-0 flex items-center gap-[9px] rounded-full border border-[rgba(224,188,104,.34)] bg-[#0c0c0b] px-[18px] py-[13px] text-xs text-white shadow-[0_16px_45px_rgba(0,0,0,.22)]"
      >
        <WaIcon className="!h-[34px] !w-[34px] border-0 bg-transparent" />
        <b className="max-b560:hidden">WhatsApp</b>
      </a>
      <a
        href="tel:+923046551553"
        aria-label="Call MettGlobal"
        className="bg-gold grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_16px_45px_rgba(0,0,0,.18)]"
      >
        ☎
      </a>
    </aside>
  );
}
