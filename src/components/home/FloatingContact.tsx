'use client';

import { PHONE } from '@/lib/navigation';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { WaIcon } from './WaIcon';

/**
 * `.floating-contact`, WhatsApp and call buttons, fixed bottom-right on every
 * page. On the homepage they wait until the visitor scrolls, so they never sit
 * over the hero's service line (the hero already carries a meeting CTA).
 */
export function FloatingContact() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const update = () => setScrolled(window.scrollY > 160);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [isHome]);

  const hidden = isHome && !scrolled;
  if (pathname === '/appointment' || pathname === '/contact') return null;

  return (
    <aside
      data-floating-contact
      inert={hidden}
      className={`fab fixed right-[22px] bottom-[22px] z-[45] flex items-center gap-2 transition-[opacity,transform] duration-300 ${
        hidden ? 'pointer-events-none translate-y-3 opacity-0' : ''
      }`}
    >
      <a
        href="https://wa.me/923046551553?text=Hi%20Mett%20Global"
        target="_blank"
        rel="noopener"
        aria-label="Chat with Mett Global on WhatsApp"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(224,188,104,.34)] bg-[#0c0c0b] text-white shadow-[0_16px_45px_rgba(0,0,0,.22)] transition-all duration-300 ease-out hover:w-auto hover:px-3.5 hover:gap-2"
      >
        <WaIcon className="!h-7 !w-7 border-0 bg-transparent flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold opacity-0 transition-all duration-300 ease-out group-hover:max-w-[80px] group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a
        href={PHONE.href}
        aria-label="Call Mett Global"
        className="bg-gold grid h-11 w-11 place-items-center rounded-full text-white shadow-[0_16px_45px_rgba(0,0,0,.18)] transition-transform duration-200 hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1z" />
        </svg>
      </a>
    </aside>
  );
}
