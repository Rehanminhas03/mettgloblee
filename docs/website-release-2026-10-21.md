# Forms and meeting-request release — 21 October 2026

Release branch: codex/meeting-forms-release. Baseline/rollback reference: main 46450110a4caabf1d89c64f5db8cd4b2929e0d52. Includes reviewed changes 03ba110, 17cfcda and a6ee3d1, plus the final initial-meeting-placeholder contrast correction. The user explicitly requested verification and deployment of the prior changes, leaving the portrait experiments out.

## Released behaviour

- Main calls use +92 313 426 2282; WhatsApp stays +92 304 6551553. The specified +1 (832) 821-4066 number is removed. Other named team members' existing contact numbers remain.
- Enquiry and meeting requests go through same-origin /api/enquiries to the existing FormSubmit provider/contact@mettglobal.com mailbox. Server-side origin/body/field/meeting validation, fixed recipient/settings and bounded waits are included.
- Explicit acceptance, rejection, offline state and unconfirmed receipt have distinct feedback. A timeout/lost response is never described as proof that the message was not sent. No automatic retries. Double-clicks are guarded; fields remain editable, drafts survive time changes and edits made while sending survive late confirmations.
- The meeting page keeps Online call and Office visit, duration/topic choices and manual email confirmation. The premium card uses the original site logo and a centered heading with step indicator. All 24 hourly preferences are grouped by daypart, six shown at once. Visitors choose in their device timezone; forwarded emails include the Pakistan-time equivalent. This is a request flow, not a live calendar/free-busy system.
- Google Business Profile appears in About Find us and footer Connect from one shared list. Structured data uses that list without duplicating Google. Get directions remains a separate office-building Maps link.
- No Calendly integration, AI-service buttons or leadership portraits are included. Existing leadership text cards are preserved.

## Preflight verification

Production build/TypeScript, ESLint, 28 client/server form regression tests and Git whitespace checks passed. The final browser sweep passed 69 Chromium and 68 WebKit assertions for submission states, duplicate guards, editable fields, slow/lost responses, real client timeout, retained meeting drafts, layout, accessibility and call/WhatsApp links. A separate meeting sweep passed 50 assertions in each engine, including all 24 hours, six visible times, both formats, selected payloads, Asia/Karachi and America/Chicago timezone handling, centered heading and original sidebar logo. Ten About/footer profile consistency and responsive/accessibility checks passed. The site audit passed 51 sitemap routes and 17 portfolio studies.

The final sweep found and corrected the initial empty time-picker text contrast (4.19:1 before the correction). Its accessibility scan then passed, followed by the complete 137-check form/page browser rerun. Local screenshots/diagnostics stay outside this release commit.

WebKit is browser emulation, not a physical iPhone. Local HTTPS certificate/RSC-prefetch warnings are recorded separately from unexpected errors. The live trusted-HTTPS navigation and production submission checks follow deployment.

## Delivery limits and production checks

Earlier two labelled real requests received explicit provider acceptance. Independent Zoho inbox arrival was not observed. Email delivery still depends on FormSubmit and Zoho; this release does not claim a durable enquiry database or exactly-once delivery. Request IDs correlate messages and feedback.

After merge: verify the production deployment SHA/status, rerun the live route audit, verify expected contact/profile/meeting content and trusted-HTTPS browser flow, and send one clearly labelled QA enquiry plus one QA meeting request (explicitly no actual meeting required). Record response references/timing in local diagnostics. Never report inbox receipt solely from provider acknowledgement.

If rollback is required, revert this release's merge through a new review branch and pull request. Do not force-push, rewrite history or delete remote branches. The existing pre-push guard remains enabled.
