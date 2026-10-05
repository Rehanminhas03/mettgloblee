import { PageShell } from '@/components/page/PageShell';
import { Scheduler } from '@/components/page/scheduler/Scheduler';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';

export const metadata = pageMetadata('/appointment');

export default function AppointmentPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/appointment')} />
      <JsonLd data={pageJsonLd('/appointment', 'WebPage')} />

      {/* .booking-hero */}
      <section className="max-b760:px-6 max-b760:pb-[34px] max-b760:pt-[54px] max-w-[1180px] px-[8vw] pt-[72px] pb-12">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          BOOK A MEETING
        </span>
        <h1 className="mt-5 mb-[26px] text-[clamp(40px,5.2vw,72px)] leading-[1.02] tracking-[-.045em]">
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
