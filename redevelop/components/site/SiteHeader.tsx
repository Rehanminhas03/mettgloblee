'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WaIcon } from '@/components/home/WaIcon';
import {
  HEADER_CTA,
  HEADER_NAV,
  WHATSAPP_URL,
  isCurrent,
} from '@/lib/navigation';
import { SiteLogo } from './SiteLogo';

/**
 * `.nav` — the homepage header, used on every page: sticky bar with the
 * animated underline on hover and, below 900px, the hamburger drawer.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="px-pad max-b900:h-20 text-ink sticky top-0 z-40 flex h-[94px] items-center justify-between border-b border-[rgba(220,213,200,.75)] bg-[rgba(251,250,246,0.88)] backdrop-blur-[18px]">
      <SiteLogo compact />

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
        className="max-b900:block hidden h-11 w-11 border-0 bg-none"
      >
        <span className="bg-ink mx-auto my-[7px] block h-0.5 w-7" />
        <span className="bg-ink mx-auto my-[7px] block h-0.5 w-7" />
      </button>

      <nav
        id="site-nav"
        aria-label="Main"
        className={`max-b900:absolute max-b900:left-0 max-b900:right-0 max-b900:top-20 max-b900:flex-col max-b900:items-stretch max-b900:gap-5 max-b900:border-b max-b900:border-line max-b900:bg-paper max-b900:px-pad max-b900:py-[25px] items-center gap-[30px] text-[13px] font-bold ${
          open ? 'max-b900:flex flex' : 'max-b900:hidden flex'
        }`}
      >
        {HEADER_NAV.map(link => {
          const current = isCurrent(link.href, pathname);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={current ? 'page' : undefined}
              className={`after:bg-gold relative after:absolute after:bottom-[-7px] after:left-0 after:h-px after:transition-all after:duration-[.35s] after:content-[''] hover:after:right-0 ${
                current ? 'after:right-0' : 'after:right-full'
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp MettGlobal"
          onClick={close}
          className="border-line max-b900:h-11 max-b900:w-11 inline-grid h-[46px] w-[46px] flex-none place-items-center rounded-full border bg-white transition-[transform,border-color,box-shadow] duration-[.25s] hover:-translate-y-px hover:border-[rgba(184,137,45,.45)] hover:shadow-[0_8px_24px_rgba(0,0,0,.08)]"
        >
          <WaIcon className="max-b900:!h-7 max-b900:!w-7 !h-[30px] !w-[30px]" />
        </a>

        {/* .nav-cta — the shimmer sweep lives in the ::before layer */}
        <Link
          href={HEADER_CTA.href}
          onClick={close}
          aria-current={pathname === HEADER_CTA.href ? 'page' : undefined}
          className="relative isolate overflow-hidden rounded-full bg-black px-[18px] py-[13px] text-white before:absolute before:inset-0 before:-z-[1] before:-translate-x-[140%] before:bg-[linear-gradient(105deg,transparent_25%,rgba(255,255,255,.16)_48%,transparent_70%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] hover:before:translate-x-[140%]"
        >
          {HEADER_CTA.label}
        </Link>
      </nav>
    </header>
  );
}
