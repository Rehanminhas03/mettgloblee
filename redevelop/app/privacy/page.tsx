import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('/privacy');

const BLOCKS = [
  {
    heading: 'Information you choose to provide',
    copy: 'Website forms may request your name, email address, phone or WhatsApp number, company, service interest, project context, preferred meeting date/time and meeting format.',
  },
  {
    heading: 'Why we use it',
    copy: 'We use submitted information to respond to enquiries, evaluate project fit, coordinate requested meetings and communicate about the request you initiated.',
  },
  {
    heading: 'Form processing',
    copy: 'The website currently uses FormSubmit to route website form submissions to contact@mettglobal.com. FormSubmit may process the submission as a third-party service before delivery. The workflow may be replaced by domain email, a CRM or another form processor; this notice should then be updated.',
  },
  {
    heading: 'Google reviews',
    copy: "MettGlobal uses Google as its public review channel. Visitors who choose to leave a review are sent to the official Google review destination and the review is handled under Google's own terms and privacy practices. The website does not currently collect a separate public-review form.",
  },
  {
    heading: 'Analytics and cookies',
    copy: 'The website uses Google Analytics measurement tags to understand page visits and selected actions such as booking, phone, email, WhatsApp and form interactions. Non-essential analytics and advertising storage is denied by default until a visitor chooses “Allow analytics” in the cookie preference notice. A visitor can decline analytics or clear the saved preference from their browser.',
  },
  {
    heading: 'Third-party services',
    copy: 'The site may link to or load services including Google Analytics, Google Tag Manager infrastructure, FormSubmit, WhatsApp, Google reviews and social platforms. Those services have their own terms and privacy practices.',
  },
  {
    heading: 'Retention and requests',
    copy: 'Information should be retained only as long as reasonably needed for the enquiry, client relationship, record keeping or applicable obligations. You may request access, correction or deletion by emailing contact@mettglobal.com, subject to legitimate record-keeping requirements.',
  },
  {
    heading: 'Updates',
    copy: 'Review this notice whenever analytics, advertising, a CRM, calendar synchronization, domain email or a new form provider is introduced.',
  },
];

export default function PrivacyPage() {
  return (
    <PageShell
      navLinks={[
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ]}
      footerLinks={[
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact' },
        { href: '/appointment', label: 'Book a meeting' },
        { href: '/terms', label: 'Terms' },
        { href: '/sitemap', label: 'Sitemap' },
      ]}
    >
      <JsonLd data={breadcrumbJsonLd('/privacy')} />

      <PageHero
        kicker="PRIVACY"
        title={
          <>
            Clear handling of
            <br />
            <HeroAccent>the information you send us.</HeroAccent>
          </>
        }
      >
        This notice explains the current MettGlobal website data flows and
        should be updated whenever a new analytics, calendar, social or CRM
        integration is activated.
      </PageHero>

      <ServiceLayout
        sideKicker="CURRENT WEBSITE WORKFLOW"
        sideHeading="Purpose-limited information handling."
        blocks={BLOCKS}
      />

      <ContactBand
        heading="Questions about your data?"
        copy="Contact MettGlobal at contact@mettglobal.com."
        ctaHref="mailto:contact@mettglobal.com"
        ctaLabel="Email MettGlobal"
      />
    </PageShell>
  );
}
