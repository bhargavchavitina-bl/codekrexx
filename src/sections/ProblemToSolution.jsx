import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  UserX, 
  FolderSync, 
  AlertCircle, 
  Sparkles, 
  TrendingUp, 
  Network, 
  ShieldCheck, 
  RotateCw, 
  Check, 
  XCircle 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { problemsData } from '../data/problemsData';

const iconMap = {
  Clock,
  UserX,
  FolderSync,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Network,
  ShieldCheck,
};

function FlipCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const ProblemIcon = iconMap[item.problemIcon] || AlertCircle;
  const SolutionIcon = iconMap[item.solutionIcon] || Sparkles;

  return (
    <div
      className="relative h-[380px] w-full cursor-pointer perspective-1000 group"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Toggle solution for: ${item.problemTitle}`}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* FRONT SIDE: PROBLEM */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-card p-6 flex flex-col justify-between border border-rose-500/20 dark:border-rose-500/20 light:border-slate-300 backface-hidden shadow-lg group-hover:border-rose-500/40 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30">
                <ProblemIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-semibold uppercase text-rose-400 bg-rose-950/40 px-2.5 py-1 rounded-full border border-rose-800/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                The Bottleneck
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2.5">
              {item.problemTitle}
            </h3>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
              {item.problemSubtitle}
            </p>

            <div className="space-y-2 mt-4">
              {item.painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="group-hover:text-brand-secondary transition-colors flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              Click to flip for solution
            </span>
            <span className="text-slate-500">0{item.id}/04</span>
          </div>
        </div>

        {/* BACK SIDE: SOLUTION */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-card p-6 flex flex-col justify-between border border-brand-secondary/40 dark:border-brand-secondary/40 light:border-slate-300 backface-hidden shadow-brand-secondary bg-gradient-to-br from-[#0c0f24] to-[#130d24]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-brand-primary via-brand-accent to-brand-secondary text-white shadow-md">
                <SolutionIcon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-semibold uppercase text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-full border border-brand-secondary/40 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-secondary" />
                Codekrexx Fix
              </span>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary-light">
              {item.solutionTitle}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {item.solutionSubtitle}
            </p>

            <div className="space-y-2 mt-4">
              {item.solutionGains.map((gain, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center shrink-0 mt-0.5 border border-brand-secondary/40">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{gain}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-secondary font-mono">
            <span className="flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5" /> Click to flip back
            </span>
            <span className="text-emerald-400 font-semibold">Automated</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export function ProblemToSolution() {
  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PROBLEM TO SOLUTION"
          title="Manual bottlenecks are costing you growth."
          highlight="costing you growth"
          subtitle="Companies lose hundreds of hours each month to disjointed software and repetitive workflows. See how our autonomous agents resolve each friction point."
          align="center"
        />

        {/* 4 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemsData.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
