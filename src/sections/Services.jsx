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
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-600/15 top-1/4 right-0 -z-10" />
      <div className="glow-orb w-[500px] h-[500px] bg-violet-600/15 bottom-10 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR CAPABILITIES"
          title="Engineered for autonomous business impact."
          highlight="autonomous business impact"
          subtitle="From self-directed multi-agent swarms to custom enterprise LLM integrations, we build systems that take action, eliminate manual work, and scale with your volume."
          align="center"
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Bot;
            const isExpanded = !!expandedCards[service.id];

            return (
              <GlassCard
                key={service.id}
                className="p-7 flex flex-col justify-between group transition-all duration-300 border-white/10 dark:border-white/10 light:border-slate-200"
                glowColor={service.glowColor}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-200 border border-white/10 dark:border-white/10 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-6 font-sans">
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
                        className="overflow-hidden mb-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200"
                      >
                        <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-2.5">
                          Key Deliverables:
                        </h4>
                        <div className="space-y-2 mb-4">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="p-3 rounded-xl bg-violet-950/30 border border-violet-800/30 text-xs text-violet-200">
                          <span className="font-semibold text-cyan-300">Target Outcome: </span>
                          {service.outcomes}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleCard(service.id)}
                    className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Expand Details'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors font-mono"
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
        title={activeModalService?.title || 'Service Architecture'}
      >
        {activeModalService && (
          <div className="space-y-6">
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              {activeModalService.shortDescription}
            </p>

            {/* Deliverables List */}
            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Enterprise Deliverables
              </h4>
              <div className="space-y-2.5">
                {activeModalService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Use Cases */}
            <div>
              <h4 className="text-xs font-mono uppercase text-violet-400 font-bold tracking-wider mb-3">
                Production Use Cases
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {activeModalService.useCases.map((useCase, idx) => (
                  <div key={idx} className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 p-3 rounded-xl bg-violet-950/20 border border-violet-800/30">
                    <span className="font-semibold text-cyan-300">Case 0{idx + 1}: </span>
                    {useCase}
                  </div>
                ))}
              </div>
            </div>

            {/* Guaranteed Outcome */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-violet-900/30 via-fuchsia-900/30 to-cyan-900/30 border border-cyan-500/30">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-1">
                Typical Outcome
              </div>
              <div className="text-sm font-semibold text-white">
                {activeModalService.outcomes}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
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
                Inquire About {activeModalService.title}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
