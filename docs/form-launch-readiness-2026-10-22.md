# Form and launch readiness — 22 October 2026

## Decision: do not publish this version yet

The forms have passed local functional checks and two earlier real SMTP deliveries, but the sending service selection needs correction before production. An SMTP login accepting test messages is not sufficient evidence of production suitability. This finding supersedes any implication in earlier messages that successful localhost delivery alone meant launch readiness.

## What exists now

The forms are custom Mett Global website forms, not Zoho Forms or Calendly. A shared server route validates submitted data and sends an email using Nodemailer and encrypted SMTP. Local configuration currently authenticates the existing `contact@mettglobal.com` mailbox with a dedicated application password. The password is private, ignored by Git, and absent from the client build. No additional service was purchased or subscription altered during setup.

The notification destination is fixed. The visitor's email becomes Reply-To so a normal reply can go to that visitor. The meeting form records the visitor's preferred date, time, time zone, online/office choice, duration and topic. It requests a meeting; it does not reserve calendar availability or confirm a booking. The owner must confirm the meeting by email. There is no automatic customer confirmation email currently.

Invalid email/phone formats are blocked before forwarding; meeting phone is required. Format validation does not prove ownership or existence of an email/number. Success is shown after explicit sending-service acceptance. Explicit refusal/offline and uncertain delivery are separate states. Uncertainty preserves details and avoids automatic duplicate retries. There is no durable receipt database that can guarantee automatic recovery of a lost acknowledgement.

The previous FormSubmit path was reproduced timing out after 20.156 seconds. A provider may send email before its HTTP confirmation is received, so receipt and browser timeout can disagree. This explains the observed failure mode, not every historic incident or a proven global FormSubmit outage.

## Material provider finding

[Zoho Mail's current usage policy](https://www.zoho.com/mail/help/usage-policy.html) excludes automated and transactional sending from ordinary Mail. Zoho documents its separate [Transactional Emails integration](https://www.zoho.com/mail/help/adminconsole/transactional-email-integration.html), currently branded CPaaS and formerly ZeptoMail, for website/application-triggered messages. Normal mailbox SMTP is therefore not the production recommendation for these website notifications.

The authenticated admin console was inspected read-only. It confirms yearly Mail Lite, four organization users and four licenses. Its Transactional Emails module presents Get Started and then a prefilled Mett Global/mettglobal.com setup with a Create account button. That final button was NOT clicked. No new service account, charge, purchase or DNS change was made.

Published integrated credits depend on plan and seats: Mail Lite lists one credit per five users, with 10,000 emails per credit. Four licenses do not establish this account's actual free allocation. The standalone [CPaaS pricing page](https://www.zoho.com/cpaas/pricing.html) advertises a free first credit and credit-based paid use. Exact account entitlement and any later charge remain unverified; do not promise unlimited free sending or make a purchase without the user's authorization.

## Verified results and limits

- Re-ran all 76 automated form/SMTP tests: passed. They simulate sender acceptance/refusal/lost responses and check validation, not every future real delivery.
- Re-ran 192 browser validation assertions at 320, 390, 768 and 1440 pixels across homepage, Contact and meeting: passed. These requests were intercepted and sent zero emails.
- Read-only technical audit of all 51 sitemap pages: passed checked HTTP statuses, one H1 per page, canonical presence/correctness, unique/nonempty titles and descriptions, internal resources/links/anchors and no orphaned sitemap pages. Robots allows indexing. Live HTTP/HTTPS/domain redirects and live robots/sitemap checks also passed. These checks are not a guarantee of rankings, exhaustive visual perfection or current field Core Web Vitals.
- Latest completed optimized build/TypeScript and ESLint passed in the previous implementation pass; application source has not changed during this readiness audit.
- Earlier real tests on 22 October Pakistan time: enquiry accepted in 5.650 s and meeting in 4.204 s, both with success popups and matching references verified in the Zoho contact inbox. Evidence: `docs/qa/zoho-local-real-delivery-2026-10-22.json`.
- No further real emails were sent in this audit after discovering the service-selection issue. New evidence: `docs/qa/contact-validation-qa.json`, `docs/qa/launch-readiness-pages-2026-10-22.json`, `docs/qa/launch-readiness-technical-2026-10-22.json`.

## Necessary next work before production

1. Activate or connect the appropriate transactional service after required user approval, verify actual included credits and authenticate mettglobal.com for that sending service. Do not disturb existing MX/mail hosting records.
2. Adapt SMTP credential handling for the chosen transactional service: the present adapter validates SMTP_USER as an email and also uses it as From. Transactional SMTP may use a non-email username, so authentication username and verified From address must be separated before switching credentials. Current local mailbox credentials are not a drop-in replacement for transactional credentials.
3. Privately configure the correct service credentials in the existing Mett Global Vercel project. Do not commit secrets or fall back silently to the old FormSubmit path.
4. Send labelled enquiry and meeting tests through a hosted preview. Verify both browser success and matching service/inbox receipts, plus rejected/uncertain behavior. Only then approve and verify production rollout.

Current branch: `codex/form-launch-readiness`, based on `2546fb7`. Localhost remains http://localhost:3015. Nothing in this audit was pushed, merged or deployed. Port 3000 belongs to another project and was left untouched. Older PR #11 is not a delivery fix and must not be merged separately as one.
