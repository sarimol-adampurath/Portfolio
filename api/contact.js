const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'sarimoladampurath@gmail.com'
const DEFAULT_FROM_EMAIL = 'Portfolio Contact <onboarding@resend.dev>'

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml({ name, email, message }) {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 16px;">New portfolio contact form submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 16px; border-radius: 12px; background: #e2e8f0;">${safeMessage}</div>
    </div>
  `
}

function buildEmailText({ name, email, message }) {
  return [
    'New portfolio contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Server email is not configured yet.' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const name = body?.name?.trim()
  const email = body?.email?.trim()
  const message = body?.message?.trim()

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please complete all fields.' })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Portfolio inquiry from ${name}`,
        html: buildEmailHtml({ name, email, message }),
        text: buildEmailText({ name, email, message }),
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({
        message: result?.message || 'Failed to send your message.',
      })
    }

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch {
    return res.status(500).json({ message: 'Failed to send your message.' })
  }
}