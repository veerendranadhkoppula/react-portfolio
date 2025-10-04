import './App.css';

import Experience from './Experience/Experience';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
