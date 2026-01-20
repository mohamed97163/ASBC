import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VisionMissionValues from './components/VisionMissionValues';
import Services from './components/Services';
import SectorsWeServe from './components/SectorsWeServe';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import SuccessPartners from './components/SuccessPartners';
import Partners from './components/Partners';
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
        <VisionMissionValues />
        <Services />
        <SectorsWeServe />
        <TechStack />
        <Projects />
        <Certifications />
        <SuccessPartners />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
