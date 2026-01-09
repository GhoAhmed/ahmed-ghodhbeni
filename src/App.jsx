import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import ShowCase from "./sections/ShowCase"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowCase />
        <LogoShowcase />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App