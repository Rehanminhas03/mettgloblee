# Form delivery investigation — in progress

The user's enquiry and meeting screenshots show uncertain receipt after submission. Validation and popup regression tests do not establish real email delivery reliability. Do not call these forms fixed or deploy this branch until the real delivery path is verified.

## Reproduced failure

On 22 October Pakistan time (21 October 2026 19:00:34 UTC), a clearly labelled real localhost enquiry returned HTTP 504 after 20,156 ms. The response reason was `provider-timeout`; request reference `6985d922-1a26-4a03-b69d-e4571b9badc7`. Recipient: `contact@mettglobal.com`. There was no automatic retry. Inbox receipt has not been verified for that reference.

Subsequent read-only curl requests also timed out without receiving response bytes. An earlier read-only API probe returned provider HTTP 405 promptly. This establishes intermittent reachability/response failure on the FormSubmit path from this machine; it does not identify a global outage or explain every earlier production failure. Increasing the timeout or displaying unconditional success would not fix reliable receipt confirmation.

Evidence: local-only `docs/qa/delivery-investigation-2026-10-22.json`. Exactly one real investigation enquiry has been sent so far; do not blindly rerun its script.

## Prepared alternative

`MAIL_DELIVERY=smtp` explicitly selects direct SMTP for both enquiry and meeting delivery. The default remains the existing provider until setup is complete. SMTP never falls back to FormSubmit following an uncertain result, avoiding automatic duplicate delivery.

Server-only `src/lib/smtp-delivery.ts` uses Nodemailer 10.1.7. Sender is the configured authenticated mailbox, recipient is fixed to `contact@mettglobal.com`, and visitor email is Reply-To. No visitor can supply SMTP settings, recipients, attachments, file access or URL fetches. TLS certificate validation remains enabled. Ports 465 and 587 are supported; 587 requires STARTTLS. Explicit acknowledgement with the fixed recipient accepted is required for success. Lost connections remain uncertain; authentication/permanent SMTP refusal is distinguished from uncertain acceptance. Connection and overall deadlines are bounded; secrets and email contents are not logged.

Local environment settings, never committed:

```dotenv
MAIL_DELIVERY=smtp
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=465
SMTP_USER=contact@mettglobal.com
SMTP_PASSWORD=<dedicated Zoho app password>
```

Zoho account sign-in confirmed the United States data center. The account's own mail server settings must still be checked if available before testing. The dedicated credential is not yet generated/configured at this checkpoint. The app-password dialog is prepared with name `Mett Global website forms`; the user was asked to click Generate. A temporary loopback-only setup helper can save the credential to ignored `.env.local` without printing it or sending it through chat. It is not part of the product or a deployment.

## Verification so far

- 76 automated form/SMTP tests passed. These include validation before sending, required meeting phone, normalized international phone, fixed recipient/sender, TLS configuration, explicit acceptance, refused login, lost acknowledgement and no fallback duplicates.
- TypeScript and ESLint passed.
- Optimized build passed with `CIRCLE_NODE_TOTAL=2` (one static generation worker). A default-worker build exhausted host resources; free physical memory was approximately 84 MB. No other project's processes were stopped. Build concurrency was limited only for that shell process; application configuration was not modified.
- Local optimized server is available at http://localhost:3015. Port 3000 belongs to another project and was left untouched.
- Real Zoho SMTP tests and mailbox receipt verification are still pending the private account connection. No release-readiness claim is justified yet.

References: [Zoho SMTP configuration](https://www.zoho.com/mail/help/zoho-smtp.html), [Nodemailer SMTP transport](https://nodemailer.com/smtp), [FormSubmit AJAX documentation](https://formsubmit.co/ajax-documentation).
