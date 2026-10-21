# Submission notifications — localhost review only

Current branch: codex/submission-notifications, based on diagnostics commit f54e686. The user explicitly stopped further publishing and requested a local review on a port other than 3000. Do not push, merge or deploy this version without fresh user approval. Port 3000 was left untouched; the review server runs at http://localhost:3015.

## Local changes

Shared native-dialog result notifications are now used by homepage enquiries, Contact and Book a meeting. Explicit acceptance opens a success pop-up; meeting copy makes clear that the team still confirms the time by email. Rejected/offline requests show clear failure/retry guidance. Lost or missing acknowledgement opens an unconfirmed-receipt notification and never falsely claims either success or definite non-delivery. Entered details remain intact. Notifications are labelled, keyboard accessible, focused on open and dismissible with a button or the native Escape behaviour. Closing a notification does not submit the form again. Existing inline feedback and reference IDs remain.

No portrait or Calendly changes are present.

## Local verification

Production build/TypeScript, ESLint and 28 client/server form tests passed. The notification sweep passed 146 assertions across homepage, Contact and meeting forms at 390 and 1440px: accepted/rejected/unconfirmed/offline states, visible headings, focus placement, targeted WCAG A/AA accessibility, retained editable details, layout, dismissal and no duplicate requests. All synthetic checks intercepted the endpoint and sent no external messages.

Two separate clearly labelled real localhost checks were explicitly accepted by the provider and displayed success notifications:

| Form            | Reference                            | Response time |
| --------------- | ------------------------------------ | ------------- |
| Contact enquiry | 4676bee3-92fd-4bee-985b-a7a5ff340621 | 1.812s        |
| Meeting request | f6932ef1-a17f-4bfd-ae62-62c82266b4c1 | 1.353s        |

Recipient: contact@mettglobal.com. The meeting was labelled NOT A REAL MEETING. The test selected 19:00 in America/Chicago and retained the corresponding UTC instant. Independent Zoho inbox receipt was not observed. Local screenshots and full diagnostics remain under docs/qa and are excluded from this commit. Physical iPhone testing has not been performed for the pop-ups.

## Production status — unresolved delivery error

PR #10 was merged and deployed before the user stopped publishing. Main is 97dc362df036a78cad7f67d6db85f5c0e94d5ba9. Its live pages, phone/profile changes, 51-route audit and trusted-HTTPS WebKit navigation passed, but the first real production enquiry returned HTTP 504 / unconfirmed after 2.660 seconds (reference 2725f3b0-c6e8-48e3-bf29-9212e446f0bf). It was not retried; it may have reached the provider. The planned production meeting test was not sent after that failure.

The cause is not yet established: the production handler caught an upstream fetch or response-parsing exception. Do not claim it was a timeout, CORS issue or Vercel IP block without evidence. Local success does not prove production delivery. Vercel preview pages require login, and the connected browser could not load the hosting console to inspect runtime logs.

Diagnostics PR #11 (codex/form-provider-diagnostics) is published but UNMERGED. It adds bounded failure categories and a read-only GET upstream reachability probe; it does not fix delivery. Current local notifications include that diagnostic code. No diagnostic or notification deployment occurred after the user's explicit publishing hold. Production needs a verified delivery fix before it can be declared working; do not merge #11 alone and claim success.

Review URLs: /contact and /appointment on localhost:3015.
