import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Sliders, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { processSteps, processSectionCopy } from '../data/processData';

const iconMap = {
  Compass,
  Sliders,
  Code2,
  Rocket,
};

export function HowWeWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
  });

  return (
    <section id="how-we-work" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background ambient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-primary/10 top-1/3 left-1/2 -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={processSectionCopy.badge}
          title={processSectionCopy.title}
          highlight={processSectionCopy.highlight}
          subtitle={processSectionCopy.subtitle}
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Vertical Connecting Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-[#045EAC]/15 dark:bg-white/10">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="w-full h-full origin-top bg-gradient-to-b from-brand-secondary via-brand-accent to-brand-primary"
            />
          </div>

          {/* 4 Process Steps */}
          <div className="space-y-12 md:space-y-20">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon] || Compass;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard className="p-7 border-[#045EAC]/15 dark:border-brand-primary/20 group hover:border-brand-secondary/40">
                        {/* Header Tag & Step Number */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#045EAC] dark:text-brand-secondary bg-[#08A3FF]/10 px-3 py-1 rounded-full border border-[#08A3FF]/30">
                            {step.tag}
                          </span>
                          <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#045EAC] via-[#0B78D6] to-[#08A3FF] dark:from-[#60A5FA] dark:via-[#08A3FF] dark:to-[#3CB6FF]">
                            {step.step}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-3 leading-snug">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-sans">
                          {step.description}
                        </p>

                        {/* Bullet Points */}
                        <div className="pt-4 border-t border-[#045EAC]/10 dark:border-white/10 space-y-2.5">
                          {step.bulletPoints.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-normal">
                              <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>

                  {/* Center Node Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#FFFDF7] dark:bg-[#091222] border border-[#08A3FF]/45 items-center justify-center shadow-glass z-20">
                    <Icon className="w-5 h-5 text-[#045EAC] dark:text-brand-secondary" />
                  </div>

                  {/* Empty side for layout balance */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
