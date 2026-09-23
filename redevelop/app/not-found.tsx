import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { Btn } from '@/components/page/ui';

/** Port of 404.html — App Router serves this for any unmatched route. */
export default function NotFound() {
  return (
    <PageShell
      navLinks={[
        { href: '/services', label: 'Services' },
        { href: '/case-studies', label: 'Case Studies' },
        { href: '/blog', label: 'Blog' },
      ]}
      navCta={{ href: '/contact', label: 'Contact' }}
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ]}
    >
      <PageHero
        kicker="404 / PAGE NOT FOUND"
        title={
          <>
            This page took
            <br />
            <HeroAccent>a wrong turn.</HeroAccent>
          </>
        }
        actions={
          <>
            <Btn href="/" variant="dark">
              Return home
            </Btn>{' '}
            <Btn href="/case-studies">View case studies</Btn>
          </>
        }
      >
        The link may be outdated or the page may have moved. Start again from
        the homepage or explore the work below.
      </PageHero>
    </PageShell>
  );
}
