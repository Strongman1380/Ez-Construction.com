import { Phone, Shield, Star } from 'lucide-react'

export default function Hero({ onEstimateClick }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/projects/garage-framing/2.jpg"
          alt="EZ Construction project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-orange" />
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">
              Licensed & Insured
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Quality Construction
            <span className="block text-orange mt-2">Made EZ</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
            From drywall to full home remodels, we deliver professional craftsmanship
            across Nebraska. Free estimates on every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={onEstimateClick}
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-navy-dark font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange/25 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Get a Free Estimate
            </button>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-orange text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors"
            >
              View Our Work
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange" />
              <span>Drywall & Paint</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange" />
              <span>Flooring & Roofing</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-orange" />
              <span>Home Remodels</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 0 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
