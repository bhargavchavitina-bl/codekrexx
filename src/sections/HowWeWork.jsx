import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Sliders, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { processSteps } from '../data/processData';

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
      <div className="glow-orb w-[600px] h-[600px] bg-violet-600/10 top-1/3 left-1/2 -translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR PROCESS"
          title="From bottleneck to autonomous deployment in 4 steps."
          highlight="autonomous deployment"
          subtitle="A battle-tested agile framework tailored for rapid agent engineering and production reliability without enterprise bureaucracy."
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          
          {/* Vertical Connecting Central Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-white/10 dark:bg-white/10 light:bg-slate-200">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="w-full h-full origin-top bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
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
                      <GlassCard className="p-7 border-violet-500/20 group hover:border-cyan-400/40">
                        {/* Header Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/40">
                            {step.tag}
                          </span>
                          <span className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            {step.step}
                          </span>
                        </div>

                        {/* Title & Phase */}
                        <div className="text-xs font-mono text-slate-400 mb-1">
                          Phase: {step.phase}
                        </div>
                        <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-3">
                          {step.title}
                        </h3>

                        <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-5">
                          {step.description}
                        </p>

                        {/* Deliverables Checklist */}
                        <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2">
                          {step.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>

                  {/* Center Node Circle */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#090a16] border border-cyan-400/40 items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] z-20">
                    <Icon className="w-5 h-5 text-cyan-300" />
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
