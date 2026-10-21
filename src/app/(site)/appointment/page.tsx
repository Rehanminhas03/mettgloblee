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
      <section className="max-b760:w-[calc(100%_-_48px)] max-b760:pt-10 max-b760:pb-7 mx-auto w-[calc(100%_-_12vw)] max-w-[1280px] pt-[60px] pb-9">
        <span className="text-p-gold text-[10px] font-black tracking-[.2em]">
          BOOK A MEETING
        </span>
        <h1 className="mt-4 mb-5 text-[clamp(38px,4.8vw,64px)] leading-[1.05] tracking-[-.045em]">
          A conversation.
          <br />
          <span className="text-p-gold">A clear next step.</span>
        </h1>
        <p className="text-p-muted m-0 max-w-[720px] text-[16px] leading-[1.8]">
          Meet us online or at our Islamabad office. Choose a preferred time and
          tell us a little about your business. We’ll confirm the details by
          email.
        </p>
      </section>

      <Scheduler />

      <ContactBand
        heading="Need a faster answer?"
        copy="Use WhatsApp for a quick fit check before requesting a meeting."
        ctaHref="https://wa.me/923046551553?text=Hi%20Mett%20Global%2C%20I%27d%20like%20to%20discuss%20a%20meeting."
        ctaLabel="WhatsApp Mett Global"
      />
    </PageShell>
  );
}
