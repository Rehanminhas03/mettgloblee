'use client';

import { usePathname } from 'next/navigation';
import { WaIcon } from './WaIcon';

/** `.floating-contact` — WhatsApp and call buttons, fixed bottom-right on every page except the contact pages. */
export function FloatingContact() {
  const pathname = usePathname();
  /* These pages already show every contact option. */
  const onContactPage = pathname === '/appointment' || pathname === '/contact';
  if (onContactPage) return null;

  return (
    <aside
      data-floating-contact
      className="max-b560:bottom-[calc(12px+env(safe-area-inset-bottom))] max-b560:right-[12px] max-b560:flex-col-reverse max-b560:items-end fixed right-[22px] bottom-[22px] z-[45] flex items-center gap-2"
    >
      <a
        href="https://wa.me/923046551553?text=Hi%20Mett%20Global"
        target="_blank"
        rel="noopener"
        aria-label="Chat with Mett Global on WhatsApp"
        className="max-b560:h-11 max-b560:w-11 max-b560:justify-center max-b560:p-0 flex items-center gap-[9px] rounded-full border border-[rgba(224,188,104,.34)] bg-[#0c0c0b] px-[18px] py-[13px] text-xs text-white shadow-[0_16px_45px_rgba(0,0,0,.22)]"
      >
        <WaIcon className="!h-[34px] !w-[34px] border-0 bg-transparent" />
        <b className="max-b560:hidden">WhatsApp</b>
      </a>
      <a
        href="tel:+923046551553"
        aria-label="Call Mett Global"
        className="bg-gold max-b560:h-11 max-b560:w-11 grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_16px_45px_rgba(0,0,0,.18)]"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          focusable="false"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      </a>
    </aside>
  );
}
