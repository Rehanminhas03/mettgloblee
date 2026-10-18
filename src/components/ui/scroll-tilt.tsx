'use client';

/**
 * Container-scroll effect, after Aceternity UI's "Container Scroll Animation":
 * a card that starts tilted back and slightly small, then flattens and grows
 * to its natural size as it scrolls into the reading position.
 *
 * Children are server-rendered and never hidden. The tilt is applied only
 * after hydration and never with `prefers-reduced-motion`, so without
 * JavaScript, or for visitors who ask for less motion, the card is simply
 * shown flat at full size.
 */
import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useHydrated } from '@/hooks/useHydrated';

/** Starting tilt in degrees and starting scale; the end state is 0deg and 1. */
const START_TILT = 8;
const START_SCALE = 0.97;

export function ScrollTilt({
  children,
  className,
  disabled = false,
}: {
  children: ReactNode;
  className?: string;
  /** Above-the-fold panels stay flat; their own count-up is the motion. */
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hydrated = useHydrated();
  const reduceMotion = useReducedMotion();

  // 0 when the card's top edge enters the bottom of the screen, 1 when it
  // is 70% down: anything visible on first paint is already flat.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 70%'],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [START_TILT, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [START_SCALE, 1]);

  const animated = hydrated && !reduceMotion && !disabled;

  return (
    <div
      ref={ref}
      className={className}
      style={{ perspective: '1000px', overflow: 'clip' }}
    >
      <motion.div
        style={
          animated
            ? { rotateX, scale, transformOrigin: 'center top' }
            : undefined
        }
        className={animated ? 'will-change-transform' : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}
