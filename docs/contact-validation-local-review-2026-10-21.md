# Contact detail validation — localhost review

21 October 2026. Branch: `codex/form-contact-validation`. Local review only; no push, merge or deployment authorized for this revision.

The homepage enquiry, Contact and meeting request now share email validation and accessible inline errors. The existing optional meeting phone field validates international country codes and Pakistan local numbers. Errors appear on blur or submission, invalid submissions are blocked, and editing clears the error without discarding the draft. The browser focuses the first invalid field. Existing result notifications remain in place.

The API independently enforces the same rules before forwarding any email. It returns field-specific validation errors and normalizes valid phone numbers to E.164 for the mailbox. Phone parsing uses the pinned `libphonenumber-js` 1.13.15 full metadata; validation makes no external network requests. Overseas numbers require their country code rather than guessing the visitor's country. Phone remains optional; no additional fields were introduced.

Validation checks syntax and numbering rules, not whether a mailbox or number exists, is reachable, or belongs to the visitor. It does not provide email verification or SMS verification. Quoted/non-ASCII email local parts and phone extensions are not supported by these form formats.

## Checks

- Optimized Next.js build and TypeScript: passed.
- ESLint: passed on sequential rerun. The concurrent lint run exhausted machine memory while the build was running; the build itself passed.
- Form regression suite: 64 passed, including malformed emails, international/Pakistan phone formats, API validation before forwarding, phone normalization and field-error response parsing.
- Browser validation: 176 assertions passed across homepage, Contact and meeting at 320, 390, 768 and 1440 pixels. Checked errors, blocked requests, focus, draft retention, corrections, optional phone, valid submissions and horizontal overflow. Meeting error-state forms passed axe WCAG A/AA checks at all four widths. Mobile screenshot inspected.
- Result notification regression: 146 assertions passed across homepage, Contact and meeting at 390 and 1440 pixels, including accepted, rejected, offline and uncertain outcomes. Requests were intercepted; these checks sent no emails.

Local evidence: `docs/qa/contact-validation-qa.json`, `docs/qa/contact-validation-mobile.png`, `docs/qa/submission-dialog-qa.json`. These QA artifacts are intentionally not staged with source changes.

Review at http://localhost:3015/contact and http://localhost:3015/appointment. Port 3000 belongs to another project and was left alone.

## Release limitation

This branch includes the earlier local notification changes and the unmerged provider diagnostic changes. Earlier real localhost submissions received explicit provider acceptance, but the earlier production HTTP 504/unconfirmed delivery issue remains undiagnosed. Local and mocked validation success does not establish production delivery reliability. PR #11 is still unmerged; do not merge or deploy under the user's current review hold.
