import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { Btn } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/contact-success');

export default function ContactSuccessPage() {
  return (
    <PageShell
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/contact-success')} />

      <PageHero
        kicker="MESSAGE RECEIVED"
        title={
          <>
            Thank you.
            <br />
            <HeroAccent>We have it.</HeroAccent>
          </>
        }
        actions={
          <>
            <Btn href="/" variant="dark">
              Return home
            </Btn>{' '}
            <Btn href="/appointment">Book a meeting</Btn>
          </>
        }
      >
        Your enquiry has been sent to the MettGlobal team. We will review the
        details and reply by email. If the matter is urgent, contact us
        directly.
      </PageHero>
    </PageShell>
  );
}
