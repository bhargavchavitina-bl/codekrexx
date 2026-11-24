import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Unlock, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { differentiators, statCounters } from '../data/differentiatorsData';

const iconMap = {
  ShieldAlert,
  Zap,
  Unlock,
  Lock,
};

export function WhyCodekrexx() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow */}
      <div className="glow-orb w-[650px] h-[650px] bg-violet-600/15 top-1/3 right-10 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE CODEKREXX EDGE"
          title="Why enterprise leaders trust our engineering."
          highlight="trust our engineering"
          subtitle="We combine elite full-stack system architecture with frontier AI agent models to deliver solutions that are resilient, observable, and fully owned by you."
          align="center"
        />

        {/* 4 Animated Metric Counters Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statCounters.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 text-center border-violet-500/20 group hover:border-cyan-400/40">
                <div className="text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 mb-2">
                  <AnimatedCounter
                    target={stat.targetValue}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="font-heading font-bold text-sm sm:text-base text-white dark:text-white light:text-slate-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-sans leading-snug">
                  {stat.description}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* 4 Core Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => {
            const Icon = iconMap[diff.icon] || ShieldAlert;

            return (
              <GlassCard
                key={diff.id}
                className="p-8 border-white/10 dark:border-white/10 light:border-slate-200 group hover:border-cyan-400/40"
                glowColor="rgba(139, 92, 246, 0.25)"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-500 text-white shadow-md shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-block text-[11px] font-mono font-semibold uppercase text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40 mb-2">
                      {diff.highlight}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2.5">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
