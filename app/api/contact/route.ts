import { NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = "minhasrehan96@gmail.com"
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name = "",
      email = "",
      company = "",
      phone = "",
      service = "",
      budget = "",
      message = "",
    } = body || {}

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — submission received but not emailed:", {
        name,
        email,
        company,
        phone,
        service,
        budget,
      })
      return NextResponse.json(
        { ok: true, warning: "Email backend not configured. Submission was logged on the server." },
        { status: 200 }
      )
    }

    const resend = new Resend(apiKey)

    const subject = `New inquiry from ${name}${company ? ` (${company})` : ""}`

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #0b0b14; color: #e8e8ee;">
        <h2 style="color: #00ffd5; margin: 0 0 16px;">New contact inquiry</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 8px 0; color: #8a8a99;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #8a8a99;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #00ffd5;">${escapeHtml(email)}</a></td></tr>
          ${company ? `<tr><td style="padding: 8px 0; color: #8a8a99;">Company</td><td style="padding: 8px 0;">${escapeHtml(company)}</td></tr>` : ""}
          ${phone ? `<tr><td style="padding: 8px 0; color: #8a8a99;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>` : ""}
          ${service ? `<tr><td style="padding: 8px 0; color: #8a8a99;">Service</td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding: 8px 0; color: #8a8a99;">Budget</td><td style="padding: 8px 0;">${escapeHtml(budget)}</td></tr>` : ""}
        </table>
        <h3 style="color: #00ffd5; margin: 24px 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
        <p style="white-space: pre-wrap; line-height: 1.6; padding: 16px; background: #15151f; border-radius: 8px; margin: 0;">${escapeHtml(message)}</p>
        <p style="color: #6a6a7a; font-size: 12px; margin: 24px 0 0;">Sent from the mettglobal.com contact form.</p>
      </div>
    `

    const text = [
      `New contact inquiry from ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      phone && `Phone: ${phone}`,
      service && `Service: ${service}`,
      budget && `Budget: ${budget}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n")

    const { error } = await resend.emails.send({
      from: `Mett Global Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return NextResponse.json({ error: "Could not send your message. Please try again or email us directly." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] Unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
