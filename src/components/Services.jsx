import { Paintbrush, Home, Layers, HardHat, Trash2, Hammer, Wrench, LayoutGrid } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Drywall',
    description: 'Professional drywall hanging, mudding, taping, and finishing for new builds and repairs.',
  },
  {
    icon: Paintbrush,
    title: 'Paint',
    description: 'Interior and exterior painting services with clean lines and lasting finishes.',
  },
  {
    icon: LayoutGrid,
    title: 'Flooring',
    description: 'Installation of hardwood, laminate, tile, and vinyl flooring for any room.',
  },
  {
    icon: HardHat,
    title: 'Roofing',
    description: 'Roof repairs and installations to keep your home protected from the elements.',
  },
  {
    icon: Home,
    title: 'Home Remodels',
    description: 'Complete home renovations including basements, sunrooms, kitchens, and more.',
  },
  {
    icon: Hammer,
    title: 'Framing',
    description: 'Structural framing for garages, additions, and new construction projects.',
  },
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: 'Efficient cleanup and junk removal to keep your project site or property clear.',
  },
  {
    icon: Wrench,
    title: 'And More',
    description: "Whatever your construction need, we've got you covered. Just ask about your project!",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-dark mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From small repairs to full-scale remodels, EZ Construction LLC delivers quality
            workmanship on every project across Nebraska.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-gray-50 hover:bg-navy-dark rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-navy-dark/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 group-hover:bg-orange/20 flex items-center justify-center mb-4 transition-colors">
                <service.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-lg font-bold text-navy-dark group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
