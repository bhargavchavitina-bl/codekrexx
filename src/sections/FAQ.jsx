import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { faqData } from '../data/faqData';

export function FAQ() {
  const [openId, setOpenId] = useState(faqData[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-secondary/10 top-1/2 left-0 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="A few things you might want to know before getting started."
          highlight="getting started."
          subtitle="Whether you're running a startup, managing a growing business, or simply looking to automate the way you work, here's what you should know about working with Codekrexx."
          align="center"
        />

        <div className="space-y-4 mt-12">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <GlassCard
                key={item.id}
                className={`transition-all duration-300 border-[#045EAC]/15 dark:border-white/10 overflow-hidden ${
                  isOpen ? 'border-brand-secondary/50 shadow-glass' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0B1B2E] dark:text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-[#08A3FF]/15 text-[#045EAC] dark:text-brand-secondary rotate-180'
                        : 'bg-[#045EAC]/10 dark:bg-white/5 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans border-t border-[#045EAC]/10 dark:border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
