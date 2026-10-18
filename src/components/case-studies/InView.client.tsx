'use client';

import type { ReactNode } from 'react';
import { useInViewOnce } from './useInViewOnce';

/** Wrapper whose graphics play once on entering view (see useInViewOnce). */
export function InView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useInViewOnce<HTMLDivElement>();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
