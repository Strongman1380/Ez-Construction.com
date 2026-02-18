import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar({ onEstimateClick }) {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="EZ Construction LLC" className="h-14 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-orange font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onEstimateClick}
              className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-navy-dark font-bold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Free Estimate
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-orange font-medium py-2 text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onEstimateClick() }}
              className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-navy-dark font-bold px-5 py-3 rounded-lg transition-colors mt-2 w-full cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              Get a Free Estimate
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
