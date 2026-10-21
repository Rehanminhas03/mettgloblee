# Premium meeting-request page — 21 October 2026

Branch: codex/premium-meeting-page, based on local contact/form fixes commit 03ba110. This is a localhost review; production has not been changed.

The user cancelled the Calendly integration and requested a professional version of the existing in-house meeting-request page. Runtime Calendly code, external frames and Calendly policy/copy changes were removed. The earlier draft is preserved only in ignored local tooling. No Calendly account settings or subscriptions were changed.

## User-facing changes

- Brand-matched cream, charcoal and gold scheduling card, clearer typography and a two-step date/time → details layout.
- Keep Online call and Office visit, with office address/directions when selected. Keep 30, 45 and 60 minute preferences and the topic selection.
- Preserve the email-based request process to contact@mettglobal.com. Wording explicitly says that the team confirms the meeting by email; these are preferred times, not live calendar availability.
- Allow every hourly start from 00:00 to 23:00, grouped into Night, Morning, Afternoon and Evening. Only six hour buttons are shown at once, rather than a 24-row list.
- Show the visitor's device timezone beside the picker and in the request summary. Preserve the local date, time and ISO start instant in the payload. The email forwarded by the server now also includes an office_time value converted to Asia/Karachi for the mailbox manager.
- Keep past times blocked and the 60-day date window. The server accepts all 24 valid hourly starts and rejects 24:00.
- Retain the earlier reliability fixes: no automatic retries, acceptance vs uncertain receipt, independent client deadline, editable fields, double-click guard, request references and preservation of drafts when changing time.
- Put optional tentative calendar holds behind a disclosure, and focus the confirmed-submission panel so mobile visitors can find the result.

## Verification

Production build, ESLint, TypeScript and whitespace checks passed. npm.cmd run test:forms passed 28 regression tests, including forwarding every hourly start and rejecting invalid hours. The site audit passed all 51 sitemap routes and 17 portfolio entries.

Targeted browser checks cover all 24 hours, six-at-a-time grouping, 23:00 requests, online/office format and duration/topic payloads, draft preservation, and local-to-UTC consistency in Asia/Karachi and America/New_York. Layout checks covered 320, 390, 768, 1024 and 1440px at both stages. Axe scans covered phone and desktop time/details views. Chromium and WebKit each passed 46 assertions; the WebKit run uses a local HTTPS test proxy and records known self-signed-certificate RSC-prefetch warnings separately. This does not substitute for a physical iPhone check over hosted trusted HTTPS.

All browser submissions in this design pass were simulated; no extra real enquiries or meetings were sent. The preceding contact/form review documents the two actual FormSubmit acceptance tests. Zoho inbox arrival was not independently observed, and the external provider remains a dependency.

Local diagnostics and screenshots are under docs/qa and are not part of the release commit. The previous call-number/WhatsApp changes and form fixes remain included in this branch. The user requested localhost review before deployment; do not assume the earlier deployment approval applies to this revised design.

## Final polish and profile consistency

Follow-up branch: codex/meeting-final-polish, based on premium meeting commit 17cfcda. The booking header is centered, with its progress indicator underneath. The sidebar now reuses the original SiteLogo component from the website header rather than an M badge. A WebKit accessibility scan caught a transient contrast dip during time-button colour interpolation; selection colours now switch immediately while border transitions remain subtle.

The About page's Find us profile chips were missing Google Business Profile. Added it to the shared profile list and changed the footer to consume that same list. Organization sameAs now reads the list without duplicating Google. Get directions continues to use the separate office-building Maps pin. A source inventory found no additional Mett Global social-link groups; case-study client links remain their own links.

Final production build and lint passed. Chromium and WebKit each passed 50 browser assertions, including centered heading, original sidebar logo, all hourly starts, preserved details, request payloads, Asia/Karachi and America/Chicago (Houston) local-to-UTC handling, and phone/tablet/desktop layout and accessibility checks. The company-facts section passed 10 additional link consistency, layout and accessibility assertions at 320, 390 and 1440px. The site audit again passed 51 routes and 17 studies. The 28 form regression tests passed during this polish pass; provider transport code was not changed. Browser submissions were mocked and no additional real emails were sent. Physical iPhone testing and independent Zoho inbox verification retain the limitations described above.

This revision is available on localhost for review. No push, merge or deployment has been performed for either premium-design branch.
