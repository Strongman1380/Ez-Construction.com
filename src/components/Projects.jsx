import { useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react'

const projects = [
  {
    title: 'Sunroom Remodel',
    location: 'Hooper, NE',
    description: 'Complete sunroom renovation with new flooring, paint, and drywall finishing.',
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/sunroom-hooper/${i + 1}.jpg`),
  },
  {
    title: 'Garage Framing',
    location: 'Lincoln, NE',
    description: 'Full garage framing and construction from the ground up.',
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/garage-framing/${i + 1}.jpg`),
  },
  {
    title: 'Drywall Hang & Mud',
    location: 'Crete, NE',
    description: 'Professional drywall installation, mudding, and finishing throughout the home.',
    images: Array.from({ length: 6 }, (_, i) => `/images/projects/drywall-crete/${i + 1}.jpg`),
  },
  {
    title: 'Basement Remodel',
    location: 'Nebraska',
    description: 'Full basement renovation including drywall, flooring, and tile work.',
    images: Array.from({ length: 3 }, (_, i) => `/images/projects/basement-remodel/${i + 1}.jpg`),
  },
  {
    title: 'Trailer Remodel',
    location: 'Nebraska',
    description: 'Complete trailer gut and remodel with new walls, ceiling, and flooring.',
    images: Array.from({ length: 3 }, (_, i) => `/images/projects/trailer-remodel/${i + 1}.jpg`),
  },
]

function Lightbox({ project, imageIndex, onClose, onPrev, onNext }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white z-10">
        <X className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 text-white/70 hover:text-white z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 text-white/70 hover:text-white z-10 bg-white/10 hover:bg-white/20 rounded-full p-2"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
        <img
          src={project.images[imageIndex]}
          alt={`${project.title} - Photo ${imageIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        <div className="text-center mt-4">
          <p className="text-white font-semibold">{project.title}</p>
          <p className="text-white/50 text-sm">{imageIndex + 1} of {project.images.length}</p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onImageClick }) {
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => onImageClick(project, currentImage)}>
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentImage(i) }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentImage ? 'bg-orange w-6' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-orange text-sm font-medium mb-1">
          <MapPin className="w-3.5 h-3.5" />
          {project.location}
        </div>
        <h3 className="text-lg font-bold text-navy-dark mb-1">{project.title}</h3>
        <p className="text-gray-500 text-sm">{project.description}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (project, index) => setLightbox({ project, index })
  const closeLightbox = () => setLightbox(null)

  const prevImage = () => {
    if (!lightbox) return
    const { project, index } = lightbox
    setLightbox({ project, index: (index - 1 + project.images.length) % project.images.length })
  }

  const nextImage = () => {
    if (!lightbox) return
    const { project, index } = lightbox
    setLightbox({ project, index: (index + 1) % project.images.length })
  }

  return (
    <section id="projects" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-dark mt-3 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Take a look at some of our recent work across Nebraska. Every project gets our full
            attention and professional craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onImageClick={openLightbox} />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          project={lightbox.project}
          imageIndex={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
