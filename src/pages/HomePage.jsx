import React, { useState } from 'react';
import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { ProblemToSolution } from '../sections/ProblemToSolution';
import { Services } from '../sections/Services';
import { HowWeWork } from '../sections/HowWeWork';
import { TechStackMarquee } from '../sections/TechStackMarquee';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { Modal } from '../components/Modal';
import { Calendar, Mail, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export function HomePage() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

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
      <Navbar onBookConsultation={() => setIsConsultationModalOpen(true)} />

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

        {/* 6. Tech Stack (Immediately after How We Work) */}
        <TechStackMarquee />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Book Consultation Modal */}
      <Modal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        title="Schedule a Scoping Call"
      >
        <div className="space-y-6">
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Connect directly with a Codekrexx Principal AI Architect to review your workflows and evaluate automated agent pipelines.
          </p>

          <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/25 space-y-2.5">
            <div className="text-xs font-mono uppercase text-brand-secondary font-bold mb-2">
              What We'll Cover:
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
              Select Contact Method:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-secondary/20 border border-brand-secondary/40 hover:border-brand-secondary transition-all text-center group"
              >
                <Calendar className="w-5 h-5 text-brand-secondary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white">Direct Calendar Booking</div>
                <div className="text-[11px] text-brand-secondary font-mono mt-0.5">Open Calendly &rarr;</div>
              </a>

              <a
                href={`mailto:${siteConfig.email}?subject=Codekrexx%20Architecture%20Inquiry`}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all text-center group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-brand-primary mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-bold text-white">Email Us Directly</div>
                <div className="text-[11px] text-brand-primary-light font-mono mt-0.5">{siteConfig.email}</div>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
