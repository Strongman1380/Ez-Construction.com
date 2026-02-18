import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import EstimateModal from './components/EstimateModal'

function App() {
  const [estimateOpen, setEstimateOpen] = useState(false)

  const openEstimate = () => setEstimateOpen(true)
  const closeEstimate = () => setEstimateOpen(false)

  return (
    <div className="min-h-screen bg-white">
      <Navbar onEstimateClick={openEstimate} />
      <Hero onEstimateClick={openEstimate} />
      <Services />
      <Projects />
      <About />
      <Contact onEstimateClick={openEstimate} />
      <Footer />
      <EstimateModal open={estimateOpen} onClose={closeEstimate} />
    </div>
  )
}

export default App
