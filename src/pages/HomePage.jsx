import React, { useState } from 'react';
import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { ProblemToSolution } from '../sections/ProblemToSolution';
import { Services } from '../sections/Services';
import { HowWeWork } from '../sections/HowWeWork';
import { LiveAiDemo } from '../sections/LiveAiDemo';
import { Projects } from '../sections/Projects';
import { WhyCodekrexx } from '../sections/WhyCodekrexx';
import { TechStackMarquee } from '../sections/TechStackMarquee';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function HomePage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('Autonomous AI Agents');

  const scrollToContact = (serviceName) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30 selection:text-cyan-300">
      {/* 1. Navbar */}
      <Navbar onBookConsultation={() => setIsConsultationModalOpen(true)} />

      <main>
        {/* 2. Hero */}
        <Hero
          onGetStarted={() => scrollToContact()}
          onSeeWork={scrollToProjects}
        />

        {/* 3. Problem to Solution */}
        <ProblemToSolution />

        {/* 4. Services */}
        <Services onSelectService={scrollToContact} />

        {/* 5. How We Work */}
        <HowWeWork />

        {/* 6. Live AI Demo */}
        <LiveAiDemo onContactWithSolution={scrollToContact} />

        {/* 7. Projects / Case Studies */}
        <Projects onStartProject={scrollToContact} />

        {/* 8. Why Codekrexx */}
        <WhyCodekrexx />

        {/* 9. Tech Stack Marquee */}
        <TechStackMarquee />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. FAQ */}
        <FAQ />

        {/* 12. Final CTA & Contact */}
        <Contact
          prefilledService={prefilledService}
          onBookConsultation={() => setIsConsultationModalOpen(true)}
        />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Book Consultation Modal */}
      <Modal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        title="Book a Free 20-Min AI Architecture Session"
      >
        <div className="space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Connect directly with a Codekrexx Principal AI Solutions Architect. We'll evaluate your workflow, review your API constraints, and outline an automated agent blueprint.
          </p>

          <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-800/40 space-y-2.5">
            <div className="text-xs font-mono uppercase text-cyan-300 font-bold mb-2">
              What We'll Cover In 20 Minutes:
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct bottleneck mapping & manual task ROI calculation</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Recommended agent orchestration & tool integrations</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fixed-timeline delivery estimate (usually 2-4 weeks)</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase">
              Schedule Your Time:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-cyan-400/40 hover:border-cyan-300 transition-all text-center group"
              >
                <Calendar className="w-5 h-5 text-cyan-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white">Direct Calendar Booking</div>
                <div className="text-[11px] text-cyan-300 font-mono mt-0.5">Open Calendly &rarr;</div>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsConsultationModalOpen(false);
                  scrollToContact('Autonomous AI Agents');
                }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-center group cursor-pointer"
              >
                <Clock className="w-5 h-5 text-violet-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white">Submit Brief via Form</div>
                <div className="text-[11px] text-violet-300 font-mono mt-0.5">Scroll to Form &rarr;</div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
