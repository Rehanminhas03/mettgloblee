'use client';

import Link from 'next/link';
import { useState } from 'react';
import { WaIcon } from './WaIcon';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '#partners', label: 'Partners' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

/**
 * `.nav` — sticky header with the animated underline on hover and, below
 * 900px, the hamburger drawer that `src/main.ts` controlled.
 */
export function HomeNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="px-pad max-b900:h-20 sticky top-0 z-40 flex h-[94px] items-center justify-between border-b border-[rgba(220,213,200,.75)] bg-[rgba(251,250,246,0.88)] backdrop-blur-[18px]">
      <Link
        href="#home"
        aria-label="MettGlobal home"
        className="flex items-center gap-3"
      >
        {/* .mark — a dot and a tilted bar forming the monogram */}
        <span className="relative block h-[34px] w-[34px]">
          <i className="absolute top-[3px] left-0 h-[9px] w-[9px] rounded-full bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
          <b className="absolute top-px left-4 h-[31px] w-3 rotate-[35deg] rounded-[10px] bg-[linear-gradient(145deg,var(--color-gold2),var(--color-gold))]" />
        </span>
        <span className="flex flex-col">
          <strong className="max-b900:text-[21px] text-2xl leading-none tracking-[-.04em]">
            Mett Global
          </strong>
          <small className="mt-[5px] text-[8px] tracking-[.06em]">
            The Art of Digital Excellence
          </small>
        </span>
      </Link>

      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="max-b900:block hidden h-11 w-11 border-0 bg-none"
      >
        <span className="bg-ink mx-auto my-[7px] block h-0.5 w-7" />
        <span className="bg-ink mx-auto my-[7px] block h-0.5 w-7" />
      </button>

      <nav
        className={`max-b900:absolute max-b900:left-0 max-b900:right-0 max-b900:top-20 max-b900:flex-col max-b900:items-stretch max-b900:gap-5 max-b900:border-b max-b900:border-line max-b900:bg-paper max-b900:px-pad max-b900:py-[25px] items-center gap-[30px] text-[13px] font-bold ${
          open ? 'max-b900:flex flex' : 'max-b900:hidden flex'
        }`}
      >
        {LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            className="after:bg-gold relative after:absolute after:right-full after:bottom-[-7px] after:left-0 after:h-px after:transition-all after:duration-[.35s] after:content-[''] hover:after:right-0"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="https://wa.me/923046551553?text=Hi%20MettGlobal%2C%20I%27d%20like%20to%20discuss%20a%20project."
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
          href="/appointment"
          onClick={close}
          className="relative isolate overflow-hidden rounded-full bg-black px-[18px] py-[13px] text-white before:absolute before:inset-0 before:-z-[1] before:-translate-x-[140%] before:bg-[linear-gradient(105deg,transparent_25%,rgba(255,255,255,.16)_48%,transparent_70%)] before:transition-transform before:duration-700 before:ease-[cubic-bezier(.2,.7,.2,1)] before:content-[''] hover:before:translate-x-[140%]"
        >
          Book a meeting
        </Link>
      </nav>
    </header>
  );
}
