import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  budget?: string
  message: string
}

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Email HTML template
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00ffd5, #00b4d8); padding: 20px; border-radius: 8px 8px 0 0; }
    .header h1 { color: #000; margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 5px; padding: 10px; background: #fff; border-radius: 4px; border: 1px solid #eee; }
    .message-box { background: #fff; padding: 15px; border-left: 4px solid #00ffd5; margin-top: 10px; }
    .footer { background: #333; color: #fff; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${body.name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
      </div>
      ${body.company ? `
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${body.company}</div>
      </div>
      ` : ""}
      ${body.phone ? `
      <div class="field">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${body.phone}">${body.phone}</a></div>
      </div>
      ` : ""}
      ${body.service ? `
      <div class="field">
        <div class="label">Service Interested In</div>
        <div class="value">${body.service}</div>
      </div>
      ` : ""}
      ${body.budget ? `
      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${body.budget}</div>
      </div>
      ` : ""}
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${body.message.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      METT Global - Contact Form Submission<br>
      Received: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })} PKT
    </div>
  </div>
</body>
</html>
    `

    // Plain text version
    const emailText = `
New Contact Form Submission
============================

Name: ${body.name}
Email: ${body.email}
${body.company ? `Company: ${body.company}` : ""}
${body.phone ? `Phone: ${body.phone}` : ""}
${body.service ? `Service: ${body.service}` : ""}
${body.budget ? `Budget: ${body.budget}` : ""}

Message:
${body.message}

---
Received: ${new Date().toISOString()}
    `

    // Send email
    await transporter.sendMail({
      from: `"METT Global Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "hello@mettglobal.com",
      replyTo: body.email,
      subject: `New Contact: ${body.name} - ${body.service || "General Inquiry"}`,
      text: emailText,
      html: emailHtml,
    })

    // Log for debugging
    console.log("✅ Contact form email sent successfully to:", process.env.CONTACT_EMAIL)

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send your message. Please try again or contact us directly." },
      { status: 500 }
    )
  }
}
