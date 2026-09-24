import Nav from "@/components/sections/Nav"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Timeline from "@/components/sections/Timeline"
import Gallery from "@/components/sections/Gallery"
import Contact from "@/components/sections/Contact"
import ManifestoSection from "./components/sections/Manifesto"
import StepsTowardsChange from "./components/sections/StepsTowardsChange"
import Footer from "./components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <Nav />
      <Hero />
      <About />
      <ManifestoSection />
      <StepsTowardsChange />
      <Timeline />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
