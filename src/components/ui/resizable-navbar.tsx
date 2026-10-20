'use client';

/**
 * Resizable navbar, ported from Aceternity UI's `resizable-navbar` and
 * restyled as a glass bar in the Mett Global palette. At the top of the page it
 * sits full width; once the visitor scrolls it shrinks into a floating,
 * blurred pill. Without the Tabler icon dependency (inline SVG instead) and
 * without a shadcn `cn` helper (a small local join).
 */

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const cn = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

const GLASS_SHADOW =
  '0 8px 32px rgba(38,29,13,.10), 0 1px 0 rgba(255,255,255,.7) inset, 0 0 0 1px rgba(184,137,45,.22)';

type VisibleProps = { visible?: boolean };

/** Scroll distance (px) before the bar is allowed to hide. */
const HIDE_AFTER = 60;
/** How long (ms) the bar stays visible after the first scroll down. */
const FIRST_SCROLL_VISIBLE_MS = 3500;
/** Ignore tiny scroll movements so a trackpad jitter does not flicker the bar. */
const SCROLL_THRESHOLD = 6;

/**
 * Sticky header that shrinks into a pill after 60px and, like Aceternity's
 * floating navbar, slides away when you scroll down and returns the moment you
 * scroll back up. The first scroll down keeps it visible for a few seconds
 * before it hides. It never hides near the top of the page, while the mobile
 * menu is open (`pinned`), or while keyboard focus is inside it.
 */
export function Navbar({
  children,
  className,
  pinned = false,
}: {
  children: React.ReactNode;
  className?: string;
  /** Keeps the bar on screen, for example while the mobile menu is open. */
  pinned?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const grace = useRef<'idle' | 'waiting' | 'done'>('idle');
  useEffect(() => {
    let previous = window.scrollY;
    let frame = 0;
    let timer: number | undefined;
    const update = () => {
      frame = 0;
      const latest = window.scrollY;
      setVisible(latest > 60);
      const delta = latest - previous;
      if (latest < HIDE_AFTER) setHidden(false);
      else if (delta > SCROLL_THRESHOLD) {
        if (grace.current === 'done') setHidden(true);
        else if (grace.current === 'idle') {
          grace.current = 'waiting';
          timer = window.setTimeout(() => {
            grace.current = 'done';
            if (window.scrollY >= HIDE_AFTER) setHidden(true);
          }, FIRST_SCROLL_VISIBLE_MS);
        }
      } else if (delta < -SCROLL_THRESHOLD) setHidden(false);
      if (Math.abs(delta) >= SCROLL_THRESHOLD) previous = latest;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      // Keyboard focus and an open mobile menu keep navigation available.
      onFocusCapture={() => setHidden(false)}
      style={{
        transform: hidden && !pinned ? 'translateY(-170%)' : 'translateY(0)',
      }}
      className={cn(
        'navbar-shell sticky inset-x-0 top-0 z-40 w-full',
        className,
      )}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<VisibleProps>, {
              visible,
            })
          : child,
      )}
    </div>
  );
}

export function NavBody({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
} & VisibleProps) {
  return (
    <div
      style={{
        minWidth: 'min(940px,96%)',
        width: visible ? '72%' : '100%',
        transform: visible ? 'translateY(10px)' : 'none',
        boxShadow: visible ? GLASS_SHADOW : undefined,
      }}
      data-compact={visible}
      className={cn(
        'navbar-body max-b1000:hidden relative z-[60] mx-auto flex h-[72px] w-full flex-row items-center justify-between self-start rounded-full px-[clamp(24px,5vw,78px)]',
        visible
          ? 'bg-[rgba(251,250,246,.94)] !px-6'
          : 'bg-[rgba(251,250,246,.94)] backdrop-blur-[10px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function NavItems({
  items,
  isCurrent,
  className,
  onItemClick,
}: {
  items: { name: string; link: string }[];
  isCurrent: (link: string) => boolean;
  className?: string;
  onItemClick?: () => void;
}) {
  return (
    <nav
      aria-label="Main"
      className={cn(
        'flex min-w-0 flex-1 flex-row items-center justify-center gap-1 px-3 text-[13px] font-bold',
        className,
      )}
    >
      {items.map(item => {
        const current = isCurrent(item.link);
        return (
          <Link
            key={item.link}
            href={item.link}
            onClick={onItemClick}
            aria-current={current ? 'page' : undefined}
            className={cn(
              'relative rounded-full px-3 py-2 whitespace-nowrap transition-colors hover:bg-[rgba(184,137,45,.12)] focus-visible:bg-[rgba(184,137,45,.12)] min-[1100px]:px-4',
              current ? 'text-gold' : 'text-ink',
            )}
          >
            <span className="relative z-10">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
} & VisibleProps) {
  return (
    <div
      style={{
        width: visible ? '92%' : '100%',
        borderRadius: visible ? '22px' : '0px',
        transform: visible ? 'translateY(8px)' : 'none',
        boxShadow: visible ? GLASS_SHADOW : undefined,
      }}
      className={cn(
        'navbar-body max-b1000:flex relative z-50 mx-auto hidden h-16 w-full flex-col justify-center px-6',
        visible ? 'bg-[rgba(251,250,246,.94)]' : 'bg-[rgba(251,250,246,.94)]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MobileNavHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MobileNavMenu({
  children,
  className,
  isOpen,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  id?: string;
}) {
  return (
    <>
      {isOpen && (
        <div
          id={id}
          className={cn(
            'mobile-menu absolute inset-x-0 top-[72px] z-50 flex w-full flex-col items-stretch gap-5 rounded-2xl border border-[rgba(184,137,45,.22)] bg-[rgba(251,250,246,.96)] px-6 py-6 text-[15px] font-bold shadow-[0_18px_45px_rgba(38,29,13,.14)] backdrop-blur-xl',
            className,
          )}
        >
          {children}
        </div>
      )}
    </>
  );
}

export function MobileNavToggle({
  isOpen,
  onClick,
  controls,
}: {
  isOpen: boolean;
  onClick: () => void;
  controls: string;
}) {
  return (
    <button
      id={`${controls}-toggle`}
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
      className="grid h-11 w-11 place-items-center"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {isOpen ? (
          <path d="M6 6l12 12M18 6L6 18" />
        ) : (
          <path d="M4 8h16M4 16h16" />
        )}
      </svg>
    </button>
  );
}
