import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, service, address, details } = req.body

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Name, phone, and service are required' })
  }

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })

  // Log to Vercel function logs as backup
  console.log(`[Estimate] ${timestamp} | ${name} | ${phone} | ${service}`)

  // Send email notification via Resend
  if (process.env.RESEND_API_KEY && process.env.NOTIFY_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const recipients = process.env.NOTIFY_EMAIL.split(',').map((e) => e.trim())

      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'EZ Construction <onboarding@resend.dev>',
        to: recipients,
        subject: `New Estimate Request: ${service}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1e3a5f; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #f5a623; margin: 0; font-size: 22px;">New Estimate Request</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0;">EZ Construction LLC</p>
            </div>
            <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f; width: 120px;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Phone:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #f5a623;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Email:</td>
                  <td style="padding: 8px 0;">${email || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Service:</td>
                  <td style="padding: 8px 0; font-weight: bold;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f;">Address:</td>
                  <td style="padding: 8px 0;">${address || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e3a5f; vertical-align: top;">Details:</td>
                  <td style="padding: 8px 0;">${details || 'None'}</td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
              <p style="color: #9ca3af; font-size: 13px; margin: 0;">Submitted ${timestamp} via ez-construction.com</p>
            </div>
          </div>
        `,
      })
    } catch (err) {
      console.error('Email send failed:', err.message)
    }
  }

  return res.status(200).json({ success: true, message: 'Estimate request received' })
}
