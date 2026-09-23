'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandMark } from './BrandMark';
import {
  BOOK_CTA,
  MAIN_NAV,
  type NavCta,
  type NavLink,
} from '@/lib/navigation';

/**
 * Standard page header.
 *
 * Combines `header` / `nav` / `nav .cta` from page.css with the
 * `.clean-mobile-nav-toggle` behaviour the Vite plugin injected into every
 * non-homepage build: below 900px the nav collapses behind a Menu / Close
 * button. Links and CTA vary per page, so both are passed in.
 */
export function PageHeader({
  links = MAIN_NAV,
  cta = BOOK_CTA,
}: {
  links?: NavLink[];
  cta?: NavCta;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-p-line max-b900:flex-wrap max-b900:px-[22px] max-b900:py-[14px] max-b620:py-3 sticky top-0 z-20 flex min-h-[92px] items-center justify-between gap-6 border-b bg-[rgba(244,239,229,.95)] px-[6vw] backdrop-blur-[18px]">
      <BrandMark />

      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="max-b900:inline-flex max-b900:items-center max-b900:gap-[7px] hidden cursor-pointer rounded-full border border-current bg-transparent px-[13px] py-[9px] text-[11px] font-extrabold text-inherit"
      >
        {open ? 'Close' : 'Menu'}
      </button>

      <nav
        className={`max-b900:overflow-x-auto max-b900:[scrollbar-width:thin] flex items-center gap-6 text-xs font-extrabold ${
          open
            ? 'max-b900:flex max-b900:w-full max-b900:flex-wrap max-b900:gap-x-4 max-b900:gap-y-3 max-b900:pb-0.5 max-b900:pt-2'
            : 'max-b900:hidden'
        }`}
      >
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="max-b900:block max-b900:whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={cta.href}
          aria-current={cta.current ? 'page' : undefined}
          className="bg-p-ink max-b900:block max-b900:whitespace-nowrap rounded-full px-[17px] py-[13px] text-white"
        >
          {cta.label}
        </Link>
      </nav>
    </header>
  );
}
