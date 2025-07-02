import './App.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Lazy load components
const Hero = lazy(() => import('./components/hero/Hero'));
const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const WorkExperience = lazy(() => import('./components/Work/WorkExperience'));

function App() {
  return (
    <>
      <div className="container">
        <Navbar />

        <Suspense fallback={<div className="lazy-loader">Loading...</div>}>
          <section id="hero">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="project">
            <Projects />
          </section>

          <section id="workExperience">
            <WorkExperience />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default App;
