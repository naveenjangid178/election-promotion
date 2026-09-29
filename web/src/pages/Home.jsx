import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import ManifestoSection from "../components/sections/Manifesto"
import StepsTowardsChange from "../components/sections/StepsTowardsChange"
import Timeline from "../components/sections/Timeline"
import Gallery from "../components/sections/Gallery"
import Contact from "../components/sections/Contact"

const Home = () => {
  return (
    <div className="min-h-screen bg-sand text-ink">
      <Hero />
      <About />
      <ManifestoSection />
      <StepsTowardsChange />
      <Timeline />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home