'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WaIcon } from '@/components/home/WaIcon';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
} from '@/components/ui/resizable-navbar';
import {
  HEADER_CTA,
  HEADER_NAV,
  PHONE_US,
  WHATSAPP_URL,
  isCurrent,
} from '@/lib/navigation';
import { SiteLogo } from './SiteLogo';

const CTA_CLASS =
  'group inline-flex items-center gap-3 rounded-full bg-[#0f0f0d] py-[5px] pr-[5px] pl-5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-black';

function CtaArrow() {
  return (
    <span className="bg-gold2 text-ink grid h-[34px] w-[34px] flex-none place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[15px] w-[15px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h15M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

/** Same round badge as the WhatsApp button, so the pair reads as one group. */
function PhoneLink({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href={PHONE_US.href}
      aria-label={`Call Mett Global on ${PHONE_US.label}`}
      title={PHONE_US.label}
      onClick={onClick}
      className={WA_CLASS}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.6 3.5h2.6l1.5 4.2-2 1.4a12 12 0 0 0 6.2 6.2l1.4-2 4.2 1.5v2.6a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
      </svg>
    </a>
  );
}

const WA_CLASS =
  'border-line inline-grid h-10 w-10 flex-none place-items-center rounded-full border bg-white transition-[transform,border-color,box-shadow] duration-[.25s] hover:-translate-y-px hover:border-[rgba(184,137,45,.45)] hover:shadow-[0_8px_24px_rgba(0,0,0,.08)]';

/**
 * The site header, used on every page: a resizable glass navbar that sits
 * full width at the top and shrinks into a floating pill on scroll, with a
 * dropdown menu below 900px.
 *
 * `contents` keeps the sticky navbar's containing block the page, not this
 * element, so it stays pinned while scrolling.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('site-nav-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const items = HEADER_NAV.map(link => ({ name: link.label, link: link.href }));
  const current = (href: string) => isCurrent(href, pathname);

  return (
    <header className="text-ink contents">
      <Navbar pinned={open}>
        {/* Desktop */}
        <NavBody>
          <SiteLogo compact />
          <NavItems items={items} isCurrent={current} />
          <div className="flex items-center gap-3">
            <PhoneLink />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp Mett Global"
              className={WA_CLASS}
            >
              <WaIcon className="!h-[28px] !w-[28px]" />
            </a>
            <Link
              href={HEADER_CTA.href}
              aria-current={pathname === HEADER_CTA.href ? 'page' : undefined}
              className={CTA_CLASS}
            >
              {HEADER_CTA.label}
              <CtaArrow />
            </Link>
          </div>
        </NavBody>

        {/* Mobile and tablet */}
        <MobileNav>
          <MobileNavHeader>
            <SiteLogo compact />
            <MobileNavToggle
              isOpen={open}
              onClick={() => setOpen(!open)}
              controls="site-nav"
            />
          </MobileNavHeader>

          <MobileNavMenu id="site-nav" isOpen={open}>
            {HEADER_NAV.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={current(link.href) ? 'page' : undefined}
                className={current(link.href) ? 'text-gold' : ''}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <PhoneLink onClick={close} />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp Mett Global"
                onClick={close}
                className={WA_CLASS}
              >
                <WaIcon className="!h-[28px] !w-[28px]" />
              </a>
              <Link
                href={HEADER_CTA.href}
                onClick={close}
                className={`${CTA_CLASS} flex-1 justify-between`}
              >
                {HEADER_CTA.label}
                <CtaArrow />
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}
