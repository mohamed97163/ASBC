import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Team from './components/Team';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <TechStack />
        <Projects />
        <Certifications />
        <Team />
        <Partners />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
