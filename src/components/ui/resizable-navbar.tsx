'use client';

/**
 * Resizable navbar — ported from Aceternity UI's `resizable-navbar` and
 * restyled as a glass bar in the Mett Global palette. At the top of the page it
 * sits full width; once the visitor scrolls it shrinks into a floating,
 * blurred pill. Without the Tabler icon dependency (inline SVG instead) and
 * without a shadcn `cn` helper (a small local join).
 */

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react';

const cn = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

const GLASS_SHADOW =
  '0 8px 32px rgba(38,29,13,.10), 0 1px 0 rgba(255,255,255,.7) inset, 0 0 0 1px rgba(184,137,45,.22)';

type VisibleProps = { visible?: boolean };

/** Scroll distance (px) before the bar is allowed to hide. */
const HIDE_AFTER = 120;
/** How long (ms) the bar stays visible after the first scroll down. */
const FIRST_SCROLL_VISIBLE_MS = 2500;
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
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  // The first scroll down is special: the bar stays on screen for a moment so
  // visitors see it, then hides. 'idle' -> 'waiting' -> 'done'.
  const grace = useRef<'idle' | 'waiting' | 'done'>('idle');
  const graceTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(graceTimer.current), []);

  useMotionValueEvent(scrollY, 'change', latest => {
    setVisible(latest > 60);
    const delta = latest - (scrollY.getPrevious() ?? latest);
    if (latest < HIDE_AFTER) {
      setHidden(false);
    } else if (delta > SCROLL_THRESHOLD) {
      if (grace.current === 'done') {
        setHidden(true);
      } else if (grace.current === 'idle') {
        grace.current = 'waiting';
        graceTimer.current = window.setTimeout(() => {
          grace.current = 'done';
          // Only hide if the visitor is still down the page.
          if (scrollY.get() >= HIDE_AFTER) setHidden(true);
        }, FIRST_SCROLL_VISIBLE_MS);
      }
    } else if (delta < -SCROLL_THRESHOLD) {
      setHidden(false);
    }
  });

  return (
    <motion.div
      // Keyboard users tabbing into a hidden bar bring it back into view.
      onFocusCapture={() => setHidden(false)}
      animate={{ y: hidden && !pinned ? '-170%' : '0%' }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }
      }
      className={cn('sticky inset-x-0 top-0 z-40 w-full', className)}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<VisibleProps>, {
              visible,
            })
          : child,
      )}
    </motion.div>
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
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(18px) saturate(1.4)' : 'blur(0px)',
        boxShadow: visible ? GLASS_SHADOW : '0 0 0 0 rgba(0,0,0,0)',
        width: visible ? '72%' : '100%',
        y: visible ? 10 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      style={{ minWidth: 'min(940px, 96%)' }}
      className={cn(
        'max-b1000:hidden relative z-[60] mx-auto flex h-[72px] w-full flex-row items-center justify-between self-start rounded-full px-[clamp(24px,5vw,78px)]',
        visible
          ? 'bg-[rgba(251,250,246,.62)] !px-6'
          : 'bg-[rgba(251,250,246,.55)] backdrop-blur-[10px]',
        className,
      )}
    >
      {children}
    </motion.div>
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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      aria-label="Main"
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'flex min-w-0 flex-1 flex-row items-center justify-center gap-1 px-3 text-[13px] font-bold',
        className,
      )}
    >
      {items.map((item, index) => {
        const current = isCurrent(item.link);
        return (
          <Link
            key={item.link}
            href={item.link}
            onMouseEnter={() => setHovered(index)}
            onFocus={() => setHovered(index)}
            onClick={onItemClick}
            aria-current={current ? 'page' : undefined}
            className={cn(
              'relative rounded-full px-3 py-2 whitespace-nowrap transition-colors min-[1100px]:px-4',
              current ? 'text-gold' : 'text-ink',
            )}
          >
            {hovered === index && (
              <motion.span
                layoutId="nav-hover"
                className="absolute inset-0 rounded-full bg-[rgba(184,137,45,.12)]"
              />
            )}
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
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(18px) saturate(1.4)' : 'blur(0px)',
        boxShadow: visible ? GLASS_SHADOW : '0 0 0 0 rgba(0,0,0,0)',
        width: visible ? '92%' : '100%',
        borderRadius: visible ? '22px' : '0px',
        y: visible ? 8 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      className={cn(
        'max-b1000:flex relative z-50 mx-auto hidden h-16 w-full flex-col justify-center px-6',
        visible ? 'bg-[rgba(251,250,246,.72)]' : 'bg-[rgba(251,250,246,.6)]',
        className,
      )}
    >
      {children}
    </motion.div>
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={cn(
            'absolute inset-x-0 top-[72px] z-50 flex w-full flex-col items-stretch gap-5 rounded-2xl border border-[rgba(184,137,45,.22)] bg-[rgba(251,250,246,.96)] px-6 py-6 text-[15px] font-bold shadow-[0_18px_45px_rgba(38,29,13,.14)] backdrop-blur-xl',
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
