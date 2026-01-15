
import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="reveal py-24">
          <About />
        </section>
        <section id="skills" className="reveal py-24 bg-slate-100">
          <AboutSkillsContainer />
        </section>
        <section id="experience" className="reveal py-24">
          <Experience />
        </section>
        <section id="contact" className="reveal py-24 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Internal container to separate skills and tools logically if needed
const AboutSkillsContainer: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
        Skills & Capabilities
      </h2>
      <Skills />
    </div>
  );
};

export default App;
