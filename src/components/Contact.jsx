import { Phone, MapPin, Facebook, FileText } from 'lucide-react'

const contacts = [
  {
    name: 'Eliseo Ruíz',
    phone: '(402) 418-0571',
    phoneRaw: '4024180571',
  },
  {
    name: 'Jonathan Vázquez',
    phone: '(402) 418-0669',
    phoneRaw: '4024180669',
  },
]

export default function Contact({ onEstimateClick }) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Give us a call for a free estimate. We'd love to hear about your project and show you
            what EZ Construction can do.
          </p>
        </div>

        {/* Estimate form button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={onEstimateClick}
            className="inline-flex items-center gap-3 bg-orange hover:bg-orange-dark text-navy-dark font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg shadow-orange/25 cursor-pointer"
          >
            <FileText className="w-6 h-6" />
            Request a Free Estimate Online
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.phoneRaw}
              href={`tel:${contact.phoneRaw}`}
              className="group bg-white/5 hover:bg-orange/10 border border-white/10 hover:border-orange/30 rounded-2xl p-8 text-center transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-orange/20 group-hover:bg-orange/30 flex items-center justify-center mx-auto mb-4 transition-colors">
                <Phone className="w-7 h-7 text-orange" />
              </div>
              <p className="text-white font-bold text-lg mb-1">{contact.name}</p>
              <p className="text-orange text-xl font-bold">{contact.phone}</p>
              <p className="text-white/40 text-sm mt-2">Tap to call</p>
            </a>
          ))}

          <a
            href="https://www.facebook.com/profile.php?id=61575081554352"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-400/30 rounded-2xl p-8 text-center transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 flex items-center justify-center mx-auto mb-4 transition-colors">
              <Facebook className="w-7 h-7 text-blue-400" />
            </div>
            <p className="text-white font-bold text-lg mb-1">Follow Us</p>
            <p className="text-blue-400 text-xl font-bold">Facebook</p>
            <p className="text-white/40 text-sm mt-2">See our latest work</p>
          </a>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-white/50">
            <MapPin className="w-4 h-4" />
            <span>Serving Lincoln, Crete, Hooper & communities across Nebraska</span>
          </div>
        </div>
      </div>
    </section>
  )
}
