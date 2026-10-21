# Contact and form reliability review — 21 October 2026

Branch: `codex/contact-and-form-reliability`, based on production merge `46450110a4caabf1d89c64f5db8cd4b2929e0d52`. No production deployment or merge is included in this task.

## Changes

- Remove +1 (832) 821-4066 from the rendered website, including the shared header and co-founder card. The separate Usman business-development number is preserved.
- Main calls now use +92 313 426 2282 (03134262282) across contact sections, footer, floating call button, shared header and structured data. WhatsApp retains +92 304 6551553.
- Route submissions through same-origin POST /api/enquiries instead of a browser cross-origin POST to FormSubmit. The existing contact inbox and provider remain in place; no new paid service or credentials are needed.
- Validate body size, origin/Host, request reference, field lengths, required inputs and meeting options before forwarding. The recipient, subject and provider settings are controlled on the server, with no visitor-controlled CC/webhook/recipient fields.
- Only explicit provider acceptance shows success. A lost response or timeout is shown as receipt unconfirmed, because an email may already have been sent. There is no automatic retry.
- Keep fields editable while sending; show immediate progress and an additional status after six seconds. The server waits at most 20 seconds for the provider; the UI settles after at most 25 seconds of active browser execution even if fetch ignores abort.
- Prevent double-click/Enter duplicates while pending. An unchanged successful enquiry cannot immediately be resent. An uncertain retry is explicitly labelled as potentially duplicating the request. Request references are included in both feedback and provider messages.
- Snapshot the submitted data and retain edits made while the response is pending. A late confirmation cannot silently discard those newer edits. Preserve meeting details when changing the selected time.
- Disable submission until the enhanced form is ready. Keep existing no-JavaScript email alternatives.

## Cause established and limits of diagnosis

The previous client returned false for every failure mode, including its 15-second abort, HTTP errors, invalid JSON and transport exceptions. Both form interfaces interpreted that as definitely not sent. This conflicts with the supplied inbox evidence: the provider can accept and send an email before its response is lost or delayed. Entire fieldsets were also disabled during the wait, preventing edits, and the generic enquiry button did not show a sending label.

The screenshots do not prove a particular iOS CORS or provider-internal failure. The new server route removes the browser's direct cross-origin dependency, and the state model handles uncertain transport truthfully. Provider acceptance still cannot independently prove Zoho inbox delivery. The provider remains an external dependency; this is not a durable enquiry database or an exactly-once delivery queue. Reference IDs are correlation IDs, not a claim of persistent server-side idempotency.

## Verification

- Production build, lint, TypeScript and git whitespace checks passed.
- `npm.cmd run test:forms`: 26 automated client/server regression tests passed, including a fetch that ignores AbortSignal, stalled response parsing, explicit refusals, malformed replies, origin validation, oversized requests and expired slots.
- All 51 sitemap pages and 17 portfolio entries passed the existing site audit.
- Chromium: 69 targeted browser assertions passed. WebKit: 68 assertions passed over local HTTPS. These cover success, rejection, uncertain receipt, offline behavior, duplicate clicks, the real client timeout, edits during sending, meeting draft preservation, selected slot payloads and successful confirmations.
- Layout and call/WhatsApp link sweeps covered /, /contact, /appointment and /about at 320, 390, 820 and 1440px in both engines. Axe checks on the phone-sized contact and appointment pages found no violations in the tested rules.
- Initial HTTP WebKit testing could not load scripts because the production upgrade-insecure-requests policy attempted HTTPS for local HTTP assets. Testing moved to a local HTTPS proxy; production CSP was not weakened. WebKit functional tests passed there, but local certificate/RSC-prefetch warnings remain recorded separately. A read-only live production navigation check from contact to about to appointment, using normal trusted HTTPS and no certificate bypass, produced zero page errors or failed requests. Physical iPhone testing of this updated release is still required in its hosted preview.
- A WebKit fetch through the actual local HTTPS server route passed the origin/Host check using a synthetic honeypot payload; no provider email was sent by that integration test.

## Real provider checks

Two clearly labelled QA submissions were accepted by FormSubmit through the new endpoint:

| Request      | Reference                            | Observed response time |
| ------------ | ------------------------------------ | ---------------------- |
| Test enquiry | 407e80b0-96af-4fab-818e-04e71df49a56 | 2.669 seconds          |
| Test meeting | 1724d716-257d-4b7c-a81e-2d5449a79bcb | 0.670 seconds          |

Recipient: contact@mettglobal.com. The meeting test explicitly says not to schedule a real meeting. Earlier local origin-check attempts were rejected before forwarding and sent no provider emails. The two accepted requests were not automatically retried. Their arrival in the Zoho mailbox was not independently observed in this session; provider acceptance is the verified result.

Detailed diagnostics and screenshots remain local under docs/qa; do not publish that directory as part of this change. The AI-link assessment and neutral draft prompt are in docs/ask-ai-feasibility-2026-10-21.md. AI links have not been added to the site.

## Before deployment

Review localhost, then publish a review branch and verify its Vercel preview under real HTTPS. Check the updated forms on a physical iPhone and match the test reference IDs in Zoho. Follow the user's explicit deployment instruction before merging main. Do not remove or bypass the pre-push guard.
