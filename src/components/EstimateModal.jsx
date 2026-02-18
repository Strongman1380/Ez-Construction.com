import { useState } from 'react'
import { X, Phone, Send, CheckCircle, Loader2 } from 'lucide-react'

const serviceOptions = [
  'Drywall',
  'Paint',
  'Flooring',
  'Roofing',
  'Home Remodel',
  'Framing',
  'Junk Removal',
  'Other',
]

export default function EstimateModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  if (!open) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    // Send to API endpoint
    try {
      const res = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
    } catch {
      // Fallback: open mailto if API fails
      const subject = `Free Estimate Request - ${form.service}`
      const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AAddress: ${form.address}%0ADetails: ${form.details}`
      window.open(`mailto:ezconstruction@email.com?subject=${subject}&body=${body}`, '_self')
    }

    setSending(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setForm({ name: '', phone: '', email: '', service: '', address: '', details: '' })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={handleClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-dark rounded-t-2xl px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-white font-bold text-xl">Free Estimate</h2>
            <p className="text-white/60 text-sm">Tell us about your project</p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-16 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy-dark mb-2">Request Sent!</h3>
            <p className="text-gray-500 mb-6">
              We'll get back to you as soon as possible with your free estimate.
            </p>
            <div className="text-sm text-gray-400 mb-6">Or call us directly:</div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:4024180571"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-navy-dark font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Eliseo — (402) 418-0571
              </a>
              <a
                href="tel:4024180669"
                className="inline-flex items-center justify-center gap-2 bg-navy-dark hover:bg-navy text-white font-bold px-5 py-2.5 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                Jonathan — (402) 418-0669
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            {/* Name & Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-navy-dark mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-dark mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(402) 555-1234"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-navy-dark mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com (optional)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-navy-dark mb-1">Service Needed *</label>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm bg-white"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-navy-dark mb-1">Project Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="City or full address (optional)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block text-sm font-semibold text-navy-dark mb-1">Project Details</label>
              <textarea
                name="details"
                rows={3}
                value={form.details}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark disabled:opacity-70 text-navy-dark font-bold text-lg px-6 py-3.5 rounded-xl transition-colors shadow-lg shadow-orange/25"
            >
              {sending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              {sending ? 'Sending...' : 'Request Free Estimate'}
            </button>

            <p className="text-center text-gray-400 text-xs">
              Or call directly: <a href="tel:4024180571" className="text-orange hover:underline">(402) 418-0571</a>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
