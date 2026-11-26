import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  MessagesSquare, 
  Zap, 
  Layers, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Bot,
  Cpu,
  MessagesSquare,
  Zap,
  Layers,
  Database,
};

export function Services({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-secondary/15 top-1/4 right-0 -z-10" />
      <div className="glow-orb w-[500px] h-[500px] bg-brand-primary/15 bottom-10 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="What We Do"
          title="AI solutions built around the way your business works."
          highlight="the way your business works."
          subtitle={
            <>
              Every business has tasks that take more time than they should. We help identify those tasks and build AI-powered solutions that make everyday operations easier, faster, and more manageable.
              <span className="block mt-3">
                Whether you need a single automated workflow or a complete AI-powered system, we build around your actual requirements.
              </span>
            </>
          }
          align="center"
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Bot;
            const isExpanded = !!expandedCards[service.id];

            return (
              <GlassCard
                key={service.id}
                className="p-7 flex flex-col justify-between group transition-all duration-300 border-[#045EAC]/15 dark:border-white/10"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#045EAC]/10 dark:bg-white/5 border border-[#045EAC]/20 dark:border-white/10 text-[#045EAC] dark:text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-3 group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Deliverables In-Card */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6 pt-4 border-t border-[#045EAC]/10 dark:border-white/10"
                      >
                        <h4 className="text-xs font-mono uppercase text-[#045EAC] dark:text-brand-secondary font-semibold mb-2.5">
                          What's Included:
                        </h4>
                        <div className="space-y-2 mb-4">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="p-3 rounded-xl bg-[#08A3FF]/10 border border-[#08A3FF]/25 text-xs text-slate-800 dark:text-slate-200">
                          <span className="font-semibold text-[#045EAC] dark:text-brand-secondary">How It Helps: </span>
                          {service.outcomes}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#045EAC]/10 dark:border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCard(service.id)}
                    className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#045EAC] dark:hover:text-brand-secondary flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Expand Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-[#045EAC] dark:text-brand-accent-light hover:text-brand-secondary flex items-center gap-1 transition-colors font-mono cursor-pointer"
                  >
                    <span>Full Spec</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        title={activeModalService?.title || 'Service Details'}
      >
        {activeModalService && (
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              {activeModalService.shortDescription}
            </p>

            {/* Deliverables List */}
            <div>
              <h4 className="text-xs font-mono uppercase text-[#045EAC] dark:text-brand-secondary font-bold tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-secondary" />
                What We Build
              </h4>
              <div className="space-y-2.5">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200 p-2.5 rounded-xl bg-[#FDF3DA]/60 dark:bg-white/5 border border-[#045EAC]/10 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Examples */}
            <div>
              <h4 className="text-xs font-mono uppercase text-[#045EAC] dark:text-brand-accent-light font-bold tracking-wider mb-3">
                Common Examples
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {activeModalService.useCases.map((useCase, idx) => (
                  <div key={idx} className="text-xs text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-[#08A3FF]/10 border border-[#08A3FF]/25">
                    <span className="font-semibold text-[#045EAC] dark:text-brand-secondary">Example 0{idx + 1}: </span>
                    {useCase}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Impact */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#045EAC]/10 via-[#0B78D6]/10 to-[#08A3FF]/15 border border-[#08A3FF]/30">
              <div className="text-xs font-mono uppercase tracking-wider text-[#045EAC] dark:text-brand-secondary font-bold mb-1">
                How It Helps
              </div>
              <div className="text-sm font-semibold text-[#0B1B2E] dark:text-white">
                {activeModalService.outcomes}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex justify-end gap-3 pt-4 border-t border-[#045EAC]/15 dark:border-white/10">
              <Button
                variant="primary"
                size="md"
                icon={ArrowRight}
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  if (onSelectService) onSelectService(s.title);
                }}
              >
                Ask About {activeModalService.title}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
