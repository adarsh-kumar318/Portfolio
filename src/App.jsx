import Navbar from './components/Navbar';
import StarsCanvas from './components/canvas/StarsCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, { Suspense } from 'react';

function App() {
  return (
    <div className="min-h-screen font-sans text-light selection:bg-primary/30 selection:text-white relative z-0 bg-transparent">
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
