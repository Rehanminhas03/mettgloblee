import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ContactForm } from '@/components/page/ContactForm';
import { Btn, Section } from '@/components/page/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';
import { ADDRESS_LINE, MAPS_URL } from '@/lib/site';

export const metadata = pageMetadata('/contact');

const CARD = 'rounded-3xl border border-p-line bg-white p-7';
const CARD_LINK = 'mt-[10px] block font-extrabold';

export default function ContactPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/contact')} />
      <JsonLd data={pageJsonLd('/contact', 'ContactPage')} />

      <PageHero
        kicker="CONTACT"
        title={
          <>
            Bring us the problem.
            <br />
            <HeroAccent>We&rsquo;ll map the next move.</HeroAccent>
          </>
        }
        actions={
          <Btn href="/appointment" variant="dark">
            Choose a meeting date &amp; time
          </Btn>
        }
      >
        Tell us what you are trying to improve, what is currently blocking
        progress and what outcome matters. You can send a project enquiry or
        request a dedicated meeting time.
      </PageHero>

      <Section>
        {/* .contact-grid */}
        <div className="max-b1100:grid-cols-2 max-b620:grid-cols-1 grid grid-cols-4 gap-4">
          <article className={CARD}>
            <small className="text-p-gold font-black tracking-[.15em]">
              PAKISTAN
            </small>
            <h3 className="my-3 text-[26px]">MettGlobal</h3>
            <a
              href="https://wa.me/923046551553"
              target="_blank"
              rel="noopener"
              className={CARD_LINK}
            >
              WhatsApp +92 304 6551553
            </a>
            <a href="tel:+923046551553" className={CARD_LINK}>
              Call +92 304 6551553
            </a>
          </article>

          <article className={CARD}>
            <small className="text-p-gold font-black tracking-[.15em]">
              U.S. BUSINESS DEVELOPMENT
            </small>
            <h3 className="my-3 text-[26px]">Usman Rafiq</h3>
            <a
              href="https://wa.me/18328580716"
              target="_blank"
              rel="noopener"
              className={CARD_LINK}
            >
              WhatsApp +1 (832) 858-0716
            </a>
            <a href="tel:+18328580716" className={CARD_LINK}>
              Call +1 (832) 858-0716
            </a>
            <a href="mailto:usman@mettglobal.com" className={CARD_LINK}>
              usman@mettglobal.com
            </a>
          </article>

          <article className={CARD}>
            <small className="text-p-gold font-black tracking-[.15em]">
              EMAIL
            </small>
            <h3 className="my-3 text-[26px]">Projects &amp; meetings</h3>
            <a href="mailto:contact@mettglobal.com" className={CARD_LINK}>
              contact@mettglobal.com
            </a>
            <a href="/appointment" className={CARD_LINK}>
              Request a meeting
            </a>
          </article>

          <article className={CARD}>
            <small className="text-p-gold font-black tracking-[.15em]">
              OFFICE
            </small>
            <h3 className="my-3 text-[26px]">Islamabad</h3>
            <p className="text-p-muted m-0 leading-[1.6]">{ADDRESS_LINE}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
              className={CARD_LINK}
            >
              View on Google Maps ↗
            </a>
          </article>
        </div>

        <ContactForm />
      </Section>
    </PageShell>
  );
}
