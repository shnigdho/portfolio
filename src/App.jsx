import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Process from './components/Process';
import ImageSlider from './components/ImageSlider';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Process />
      <Projects />
      <ImageSlider /> {/* Gallery / Photography Section */}
      <About />
      <Contact />
    </div>
  )
}

export default App;
