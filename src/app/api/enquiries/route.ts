import { handleEnquiry } from '@/lib/enquiry-handler';
import { sendSmtpEnquiry } from '@/lib/smtp-delivery';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request: Request) {
  // Explicit selection prevents a half-configured SMTP setup silently falling
  // back to FormSubmit or sending the same enquiry through two providers.
  return handleEnquiry(
    request,
    fetch,
    process.env.MAIL_DELIVERY === 'smtp' ? sendSmtpEnquiry : undefined,
  );
}
