import Link from 'next/link';
import { Bagel_Fat_One, Instrument_Serif } from 'next/font/google';
import styles from './HeroMarquee.module.css';

/* Fonts — loaded once by Next.js, self-hosted, no layout shift */
const display = Bagel_Fat_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const serif = Instrument_Serif({
  weight: '400',
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
});

const SERVICES = [
  'Performance Marketing',
  'Websites & Stores',
  'Custom CRMs',
  'AI Automation',
  'Amazon FBA Claims',
  'SEO & Local',
  'Supply Chain',
  'Analytics',
];

const PILLARS = ['01 Digital Growth', '02 Technology', '03 AI', '04 Commerce'];

type WordVariant = 'solid' | 'outline' | 'gold';
const SCALE_WORDS: WordVariant[] = ['solid', 'outline', 'gold', 'outline'];

/**
 * A seamless marquee: the list is rendered twice inside one track and the
 * track slides by exactly 50%, so the loop never jumps. The second copy is
 * aria-hidden so screen readers hear it once.
 */
function Track({
  className,
  children,
}: {
  className: string;
  children: (copy: number) => React.ReactNode;
}) {
  return (
    <div className={`${styles.track} ${className}`}>
      <div className={styles.group}>{children(0)}</div>
      <div className={styles.group} aria-hidden="true">
        {children(1)}
      </div>
    </div>
  );
}

/**
 * `.hero` — kinetic marquee opening panel: headline and calls to action over
 * three tilted, scrolling bands (services, the giant "Scale" word, pillars).
 */
export function HeroMarquee() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <h1 id="hero-title" className={styles.title}>
          You focus on business.
          <br />
          We build what makes it{' '}
          <span className={`${serif.className} ${styles.grow}`}>grow.</span>
        </h1>

        <div className={styles.ctas}>
          <Link href="/appointment" className={styles.btnPrimary}>
            Book a meeting
            <span className={styles.btnIcon} aria-hidden="true">
              →
            </span>
          </Link>
          <Link href="/services" className={styles.btnGhost}>
            Our services
          </Link>
        </div>
      </div>

      {/* Animated bands — decorative, the content is repeated in the sections below */}
      <div className={styles.bands} aria-hidden="true">
        <div className={`${styles.ribbon} ${styles.ribbonDark}`}>
          <Track className={styles.slowLeft}>
            {copy =>
              SERVICES.map(service => (
                <span key={`${copy}-${service}`} className={styles.ribbonItem}>
                  {service}
                  <span className={styles.star}>✦</span>
                </span>
              ))
            }
          </Track>
        </div>

        <div className={styles.bigRow}>
          <Track className={styles.fastLeft}>
            {copy =>
              SCALE_WORDS.map((variant, index) => (
                <span
                  key={`${copy}-${index}`}
                  className={`${display.className} ${styles.bigWord} ${styles[variant]}`}
                >
                  Scale
                </span>
              ))
            }
          </Track>
        </div>

        <div className={`${styles.ribbon} ${styles.ribbonGold}`}>
          <Track className={styles.slowRight}>
            {copy =>
              [...PILLARS, ...PILLARS].map((pillar, index) => (
                <span key={`${copy}-${index}`} className={styles.ribbonItem}>
                  {pillar}
                  <span className={styles.dot}>●</span>
                </span>
              ))
            }
          </Track>
        </div>
      </div>
    </section>
  );
}
