import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  useRevealOnScroll(); // activa las animaciones de entrada

  return (
    <>
      <Navbar />
      <main className="container my-5">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
