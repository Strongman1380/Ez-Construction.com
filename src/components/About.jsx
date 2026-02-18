import { Shield, ThumbsUp, Clock, Users } from 'lucide-react'

const highlights = [
  { icon: Shield, label: 'Licensed & Insured', description: 'Fully licensed and insured for your peace of mind.' },
  { icon: ThumbsUp, label: 'Free Estimates', description: 'No cost, no obligation quotes on every project.' },
  { icon: Clock, label: 'On Time', description: 'We respect your time and complete projects on schedule.' },
  { icon: Users, label: 'Family Owned', description: 'Personal attention and care on every job we take on.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-dark mt-3 mb-6">
              Building Nebraska,<br />One Project at a Time
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              EZ Construction LLC is a licensed and insured construction company serving communities
              across Nebraska. Led by Eliseo Ruíz and Jonathan Vázquez, our team brings hands-on
              expertise and a commitment to quality to every project.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether it's a basement remodel in Lincoln, drywall work in Crete, or a sunroom renovation
              in Hooper — we treat every home like our own. From the first free estimate to the final
              walkthrough, we're with you every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/projects/sunroom-hooper/1.jpg"
                  alt="Sunroom remodel"
                  className="w-full rounded-2xl object-cover aspect-[3/4]"
                />
                <img
                  src="/images/projects/basement-remodel/1.jpg"
                  alt="Basement remodel"
                  className="w-full rounded-2xl object-cover aspect-square"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/projects/garage-framing/2.jpg"
                  alt="Garage framing"
                  className="w-full rounded-2xl object-cover aspect-square"
                />
                <img
                  src="/images/projects/drywall-crete/1.jpg"
                  alt="Drywall work"
                  className="w-full rounded-2xl object-cover aspect-[3/4]"
                />
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
