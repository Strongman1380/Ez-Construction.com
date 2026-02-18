import { Phone, Facebook, MapPin, Shield } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      {/* Footer banner */}
      <div className="relative h-48 overflow-hidden">
        <img
          src="/images/footer-banner.jpg"
          alt="EZ Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/images/logo.png" alt="EZ Construction LLC" className="h-20 w-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">EZ Construction LLC</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Licensed and insured construction services across Nebraska.
              Quality craftsmanship on every project.
            </p>
            <div className="flex items-center gap-2 text-orange text-sm font-medium">
              <Shield className="w-4 h-4" />
              Licensed & Insured
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Drywall</li>
              <li>Paint</li>
              <li>Flooring</li>
              <li>Roofing</li>
              <li>Home Remodels</li>
              <li>Framing</li>
              <li>Junk Removal</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:4024180571" className="flex items-center gap-2 text-white/50 hover:text-orange text-sm transition-colors">
                <Phone className="w-4 h-4" />
                Eliseo Ruíz — (402) 418-0571
              </a>
              <a href="tel:4024180669" className="flex items-center gap-2 text-white/50 hover:text-orange text-sm transition-colors">
                <Phone className="w-4 h-4" />
                Jonathan Vázquez — (402) 418-0669
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575081554352"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-blue-400 text-sm transition-colors"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4" />
                Serving all of Nebraska
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-white/30 text-sm">
          &copy; {currentYear} EZ Construction LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
