export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, service, address, details } = req.body

  if (!name || !phone || !service) {
    return res.status(400).json({ error: 'Name, phone, and service are required' })
  }

  // Log the estimate request (visible in Vercel function logs)
  console.log('--- New Estimate Request ---')
  console.log(`Name: ${name}`)
  console.log(`Phone: ${phone}`)
  console.log(`Email: ${email || 'N/A'}`)
  console.log(`Service: ${service}`)
  console.log(`Address: ${address || 'N/A'}`)
  console.log(`Details: ${details || 'N/A'}`)
  console.log(`Date: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}`)
  console.log('----------------------------')

  // If you want email notifications later, add SendGrid/Resend here:
  // await sendEmail({ to: 'your@email.com', subject: `Estimate: ${service}`, ... })

  return res.status(200).json({ success: true, message: 'Estimate request received' })
}
