import { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      
      <div ref={homeRef}>
        <Home scrollToProjects={() => scrollToSection(projectsRef)} />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={projectsRef}>
        <Project />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
