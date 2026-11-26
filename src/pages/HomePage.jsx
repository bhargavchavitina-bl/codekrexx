import React from 'react';
import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { ProblemToSolution } from '../sections/ProblemToSolution';
import { Services } from '../sections/Services';
import { HowWeWork } from '../sections/HowWeWork';
import { TechStackMarquee } from '../sections/TechStackMarquee';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export function HomePage() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-brand-primary/30 selection:text-brand-secondary">
      {/* 1. Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero */}
        <Hero
          onGetStarted={scrollToContact}
          onSeeServices={scrollToServices}
        />

        {/* 3. Problem to Solution */}
        <ProblemToSolution />

        {/* 4. Services */}
        <Services onSelectService={scrollToContact} />

        {/* 5. How We Work */}
        <HowWeWork />

        {/* 6. Tech Stack */}
        <TechStackMarquee />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
