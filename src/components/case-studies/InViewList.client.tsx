'use client';
import type { ReactNode } from 'react';

/** Cards arrive as server HTML; this boundary only observes the list. */
export function InViewList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <ul className={className}>{children}</ul>;
}
