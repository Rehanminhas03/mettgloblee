import { PageShell } from '@/components/page/PageShell';
import { Scheduler } from '@/components/page/scheduler/Scheduler';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/appointment');

export default function AppointmentPage() {
  return (
    <PageShell
      navCta={{
        href: '/appointment',
        label: 'Book a meeting',
        current: true,
      }}
      footerNote="© MettGlobal · Meeting requests currently route to contact@mettglobal.com"
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/sitemap', label: 'Sitemap' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/appointment')} />

      {/* .booking-hero */}
      <section className="max-b760:px-6 max-b760:pb-[34px] max-b760:pt-[54px] max-w-[1180px] px-[8vw] pt-[72px] pb-12">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          BOOK A MEETING
        </span>
        <h1 className="mt-5 mb-[26px] text-[clamp(52px,7.5vw,96px)] leading-[.92] tracking-[-.065em]">
          Choose a date.
          <br />
          <span className="text-p-gold">Pick a time.</span>
        </h1>
        <p className="text-p-muted my-[1em] max-w-[760px] text-[17px] leading-[1.75]">
          A cleaner, calendar-first way to request time with MettGlobal. Select
          the meeting format, choose a preferred slot, then add your contact
          details. Requests currently route to{' '}
          <strong>contact@mettglobal.com</strong> for confirmation.
        </p>
      </section>

      <Scheduler />

      <ContactBand
        heading="Need a faster answer?"
        copy="Use WhatsApp for a quick fit check before requesting a meeting."
        ctaHref="https://wa.me/923046551553?text=Hi%20MettGlobal%2C%20I%27d%20like%20to%20discuss%20a%20meeting."
        ctaLabel="WhatsApp MettGlobal"
      />
    </PageShell>
  );
}
