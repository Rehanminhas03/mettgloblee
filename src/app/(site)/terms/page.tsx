import Link from 'next/link';
import { PageShell } from '@/components/page/PageShell';
import { PageHero, HeroAccent } from '@/components/page/PageHero';
import { ServiceLayout } from '@/components/page/ServiceLayout';
import { ContactBand } from '@/components/page/ContactBand';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, pageMetadata, pageJsonLd } from '@/lib/seo';
import { ADDRESS_LINE, MAPS_URL } from '@/lib/site';

export const metadata = pageMetadata('/terms');

const BLOCKS = [
  {
    heading: '1. Informational content',
    copy: 'Website pages, service descriptions, articles, current briefs and field guides are provided for general information. They do not constitute legal, tax, financial or other regulated professional advice.',
  },
  {
    heading: '2. Enquiries and service discussions',
    copy: 'Submitting an enquiry, sending a WhatsApp message or requesting a meeting does not create a client relationship or guarantee availability, a reply, a proposal or an engagement. When you contact us, you confirm that the information you give is accurate and that we may use it to respond. A project begins only after scope, commercial terms and responsibilities are agreed in writing.',
  },
  {
    heading: '3. Accuracy and updates',
    copy: 'We aim to keep the website current, but platforms, policies, fees and regulations change. Current briefs link to official sources where practical; please verify time-sensitive information before acting on it.',
  },
  {
    heading: '4. Acceptable use',
    copy: 'You may use this website for lawful business and informational purposes. You must not attempt to disrupt the website, probe or bypass its security, scrape it in a way that harms its operation, submit malicious material or impersonate another person or organization.',
  },
  {
    heading: '5. Third-party platforms and links',
    copy: 'The website may link to Google, Meta, Instagram, WhatsApp, social networks, app stores, marketplaces and other third-party services, including the websites and apps of our clients. Those services operate under their own terms, availability and privacy practices, and MettGlobal is not responsible for their content or availability.',
  },
  {
    heading: '6. Intellectual property',
    copy: 'Unless otherwise stated, MettGlobal’s original website copy, brand presentation, graphics and site design are owned by or licensed to MettGlobal. You may view the website and share links to it for legitimate purposes, but you may not reproduce, republish, sell or substantially copy its content without written permission. Third-party names, logos and marks remain the property of their respective owners.',
  },
  {
    heading: '7. Portfolio and case-study references',
    copy: 'Clients, platforms and brands are shown as portfolio or service-context references and are not an endorsement unless an endorsement is explicitly documented. Interface previews, dashboards and figures on case-study pages may be illustrative and are labelled as such; they do not represent real client performance. Where real figures are shown, they are attributed to their source.',
  },
  {
    heading: '8. No guaranteed commercial outcome',
    copy: 'Marketing, advertising, marketplace, website, software, automation and operational outcomes depend on many factors. Nothing on this website promises a specific ranking, revenue, conversion rate or other commercial result.',
  },
  {
    heading: '9. Disclaimer and limitation',
    copy: 'The website is provided on an “as available” basis. To the extent permitted by applicable law, MettGlobal does not guarantee uninterrupted availability or that every page will be error-free. Nothing in these terms excludes liability that cannot legally be excluded.',
  },
  {
    heading: '10. Governing law',
    copy: 'These website terms are governed by the laws of Pakistan, and any dispute about the use of the website is subject to the courts of Islamabad. Client engagements are governed by the law stated in their own signed agreement.',
  },
  {
    heading: '11. Changes to these terms',
    copy: 'We may update these terms when the website, its integrations or our processes change. The current version is published on this page. Client obligations are documented in the applicable signed agreement. Last updated: 6 October 2026.',
  },
  {
    heading: '12. Contact',
    copy: (
      <>
        Questions about these terms can be sent to{' '}
        <a href="mailto:contact@mettglobal.com">contact@mettglobal.com</a> or by
        post to MettGlobal, {ADDRESS_LINE} (
        <a href={MAPS_URL} target="_blank" rel="noopener">
          map
        </a>
        ). For privacy questions, see the{' '}
        <Link href="/privacy">Privacy page</Link>.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <JsonLd data={breadcrumbJsonLd('/terms')} />
      <JsonLd data={pageJsonLd('/terms', 'WebPage')} />

      <PageHero
        kicker="WEBSITE TERMS"
        title={
          <>
            Clear expectations.
            <br />
            <HeroAccent>Before an engagement begins.</HeroAccent>
          </>
        }
      >
        These terms describe the use of MettGlobal&rsquo;s public website.
        Specific client work is governed by the proposal, scope, contract or
        other written terms agreed for that engagement.
      </PageHero>

      <ServiceLayout
        sideKicker="PUBLIC WEBSITE"
        sideHeading="Information, not a substitute for a signed scope."
        blocks={BLOCKS}
      />

      <ContactBand
        heading="Need to discuss a project?"
        copy="Use the project enquiry or booking flow and we will map the next appropriate step."
        ctaHref="/contact"
        ctaLabel="Contact MettGlobal"
      />
    </PageShell>
  );
}
