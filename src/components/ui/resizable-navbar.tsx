'use client';

/**
 * Resizable navbar — ported from Aceternity UI's `resizable-navbar` and
 * restyled as a glass bar in the MettGlobal palette. At the top of the page it
 * sits full width; once the visitor scrolls it shrinks into a floating,
 * blurred pill. Without the Tabler icon dependency (inline SVG instead) and
 * without a shadcn `cn` helper (a small local join).
 */

import React, { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';

const cn = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(' ');

const GLASS_SHADOW =
  '0 8px 32px rgba(38,29,13,.10), 0 1px 0 rgba(255,255,255,.7) inset, 0 0 0 1px rgba(184,137,45,.22)';

type VisibleProps = { visible?: boolean };

export function Navbar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => setVisible(latest > 60));

  return (
    <div className={cn('sticky inset-x-0 top-0 z-40 w-full', className)}>
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
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(18px) saturate(1.4)' : 'blur(0px)',
        boxShadow: visible ? GLASS_SHADOW : '0 0 0 0 rgba(0,0,0,0)',
        width: visible ? '72%' : '100%',
        y: visible ? 10 : 0,
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 50 }}
      style={{ minWidth: 'min(880px, 96%)' }}
      className={cn(
        'max-b900:hidden relative z-[60] mx-auto flex h-[72px] w-full flex-row items-center justify-between self-start rounded-full px-[clamp(24px,5vw,78px)]',
        visible
          ? '!px-6 bg-[rgba(251,250,246,.62)]'
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
        'pointer-events-none absolute inset-0 flex flex-row items-center justify-center gap-1 text-[13px] font-bold',
        className,
      )}
    >
      {items.map((item, index) => {
        const current = isCurrent(item.link);
        return (
          <a
            key={item.link}
            href={item.link}
            onMouseEnter={() => setHovered(index)}
            onFocus={() => setHovered(index)}
            onClick={onItemClick}
            aria-current={current ? 'page' : undefined}
            className={cn(
              'pointer-events-auto relative rounded-full px-4 py-2 transition-colors',
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
          </a>
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
        'max-b900:flex relative z-50 mx-auto hidden h-16 w-full flex-col justify-center px-6',
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
        {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
      </svg>
    </button>
  );
}
