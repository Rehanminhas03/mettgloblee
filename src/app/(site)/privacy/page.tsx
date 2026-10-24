import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';
import { ADDRESS_LINE, MAPS_URL } from '@/lib/site';

export const metadata = pageMetadata('/privacy');

const BLOCKS = [
  {
    heading: 'Who we are',
    copy: `Mett Global is a business growth and technology company based in Islamabad, Pakistan (${ADDRESS_LINE}). This notice explains what personal information the Mett Global website collects, why we use it and the choices you have.`,
  },
  {
    heading: 'Information you choose to provide',
    copy: 'Website forms may ask for your name, email address, phone or WhatsApp number, company, the service you are interested in, your project details, and, if you request a meeting, your preferred date, time, time zone and meeting format. If you contact us by email, WhatsApp or social media, we receive whatever you send us.',
  },
  {
    heading: 'Information collected automatically',
    copy: 'When you visit our website, our analytics and business intelligence tools may collect technical information such as your IP address, browser and device type, approximate geographic location, pages viewed, time spent and referral sources.',
  },
  {
    heading: 'Why we use it',
    copy: 'We use the information you send to respond to your enquiry, assess whether we can help, arrange requested meetings and keep a record of the conversation. We use analytics and B2B visitor intelligence to understand how the website is used, improve our services, identify prospective business clients and conduct relevant commercial outreach.',
  },
  {
    heading: 'Form processing',
    copy: 'Website enquiries and meeting requests are delivered to contact@mettglobal.com through FormSubmit, a third-party form service that processes the submission before it reaches us. Messages sent through WhatsApp, email or social platforms are handled by those platforms under their own terms.',
  },
  {
    heading: 'Analytics, B2B intelligence and cookies',
    copy: (
      <>
        The website uses Google Analytics to measure page visits and selected actions such as bookings, calls, emails, WhatsApp clicks and form submissions.
        <br />
        <br />
        We also use Apollo.io (Website Visitor Tracking) to identify business organizations visiting our website and understand commercial interest in our services. Apollo processes IP addresses and browsing activity to provide business-level intelligence and prospective business contact profiles. You can learn more about how Apollo handles data or request removal from their database by visiting the{' '}
        <a
          href="https://www.apollo.io/privacy-policy"
          target="_blank"
          rel="noopener"
          className="text-gold font-semibold hover:underline"
        >
          Apollo.io Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://www.apollo.io/privacy-policy#opt-out"
          target="_blank"
          rel="noopener"
          className="text-gold font-semibold hover:underline"
        >
          Apollo Opt-Out Portal
        </a>.
        <br />
        <br />
        Google Analytics storage is switched off by default and starts only if you choose “Allow analytics” in the cookie notice. Your choice is saved in your own browser, and you can change it at any time with the “Cookie settings” link in the footer of every page. Choosing “Decline” stops analytics and removes the Google Analytics cookies the site set.
      </>
    ),
  },
  {
    heading: 'Who we share it with',
    copy: 'We do not sell personal information. We share it only with service providers that help us run the website, communicate with prospective and existing clients, and manage business operations—such as hosting, form delivery, analytics and B2B sales intelligence (Apollo.io)—when needed to fulfill your requests, conduct legitimate business development, or comply with legal obligations. Those providers handle data in accordance with their own privacy commitments.',
  },
  {
    heading: 'International processing',
    copy: 'Mett Global is based in Pakistan and works with clients worldwide. Our service providers may process information in other countries, including the United States. By sending us an enquiry, you understand that your information may be handled outside your own country.',
  },
  {
    heading: 'Security',
    copy: 'We take reasonable steps to protect the information you send us, including secure (HTTPS) delivery and limiting who can read enquiries. No method of transmission or storage is completely secure, so please avoid sending sensitive personal or financial details through the website forms.',
  },
  {
    heading: 'Retention and your choices',
    copy: 'We keep enquiry information only as long as it is reasonably needed for the conversation, any resulting client relationship, record keeping or legal obligations. You may ask to access, correct or delete the information we hold about you, or withdraw your analytics consent, by emailing contact@mettglobal.com. We may need to keep some records where the law or a legitimate business need requires it.',
  },
  {
    heading: 'Children',
    copy: 'The website is intended for businesses and is not directed at children. We do not knowingly collect personal information from anyone under 16.',
  },
  {
    heading: 'Client project data',
    copy: 'Personal data handled inside the apps, portals, CRMs and other systems we build or run for clients is governed by our agreement with that client, not by this website notice.',
  },
  {
    heading: 'Changes to this notice',
    copy: 'We may update this notice when the website or the way we handle information changes. The current version is always on this page, with the date it was last updated. Last updated: 25 October 2026.',
  },
  {
    heading: 'Contact us',
    copy: (
      <>
        Questions about your data can be sent to{' '}
        <a href="mailto:contact@mettglobal.com">contact@mettglobal.com</a> or by
        post to Mett Global, {ADDRESS_LINE} (
        <a href={MAPS_URL} target="_blank" rel="noopener">
          map
        </a>
        ). The terms for using this website are on the{' '}
        <Link href="/terms">Terms page</Link>.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/privacy')} />
      <JsonLd data={pageJsonLd('/privacy', 'WebPage')} />

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
        This notice explains what information the Mett Global website collects,
        why we use it, who handles it and the choices you have.
      </PageHero>

      <ServiceLayout
        sideKicker="PRIVACY NOTICE"
        sideHeading="Only what is needed, used for the purpose you intended."
        blocks={BLOCKS}
      />

      <ContactBand
        heading="Questions about your data?"
        copy="Contact Mett Global at contact@mettglobal.com."
        ctaHref="mailto:contact@mettglobal.com"
        ctaLabel="Email Mett Global"
      />
    </PageShell>
  );
}
