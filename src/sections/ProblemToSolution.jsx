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
  XCircle,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { problemsData, problemsSectionCopy } from '../data/problemsData';

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

function FlipCard({ item, isFlipped, onToggle }) {
  const ProblemIcon = iconMap[item.problemIcon] || AlertCircle;
  const SolutionIcon = iconMap[item.solutionIcon] || Sparkles;

  return (
    <div
      className="relative min-h-[500px] sm:min-h-[510px] h-full w-full cursor-pointer perspective-1000 group"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
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
        {/* FRONT SIDE: PROBLEM (WHERE WORK GETS STUCK) */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-rose-500/20 dark:border-rose-500/20 light:border-slate-300 backface-hidden shadow-lg group-hover:border-rose-500/40 transition-colors"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            {/* Header: Icon & Category Tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30">
                <ProblemIcon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold uppercase text-rose-400 bg-rose-950/40 px-2.5 py-1 rounded-full border border-rose-800/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                {item.category}
              </span>
            </div>

            {/* Problem Title */}
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mb-3 leading-snug">
              {item.problemTitle}
            </h3>

            {/* Problem Subtitle */}
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4 font-sans">
              {item.problemSubtitle}
            </p>

            {/* Pain Points */}
            <div className="space-y-2.5 mt-4">
              {item.painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-normal">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 mt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 font-semibold text-rose-400/90 group-hover:text-brand-secondary transition-colors">
              <span>See how we solve this</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-slate-500 font-mono">{item.step}/04</span>
          </div>
        </div>

        {/* BACK SIDE: SOLUTION (OUR SOLUTIONS) */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-brand-secondary/40 dark:border-brand-secondary/40 light:border-slate-300 backface-hidden shadow-brand-secondary bg-gradient-to-br from-[#0c0f24] to-[#130d24]"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div>
            {/* Header: Solution Icon & Category Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-brand-primary via-brand-accent to-brand-secondary text-white shadow-md">
                <SolutionIcon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-semibold uppercase text-brand-secondary bg-brand-secondary/15 px-2.5 py-1 rounded-full border border-brand-secondary/40 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-secondary" />
                {item.solutionCategory}
              </span>
            </div>

            {/* Solution Title */}
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2.5 text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary-light leading-snug">
              {item.solutionTitle}
            </h3>

            {/* Solution Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans">
              {item.solutionSubtitle}
            </p>

            {/* Gains / Features */}
            <div className="space-y-2.5 mt-4">
              {item.solutionGains.map((gain, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-normal">
                  <div className="w-4 h-4 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center shrink-0 mt-0.5 border border-brand-secondary/40">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{gain}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Flip Back */}
          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-brand-secondary font-mono">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <RotateCw className="w-3.5 h-3.5" /> Click to flip back
            </span>
            <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              Automated
            </span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export function ProblemToSolution() {
  const [flippedCards, setFlippedCards] = useState({});
  const [viewMode, setViewMode] = useState('problem'); // 'problem' | 'solution'

  const handleCardToggle = (id) => {
    setFlippedCards((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      const flippedCount = Object.values(updated).filter(Boolean).length;
      if (flippedCount >= 2) {
        setViewMode('solution');
      } else {
        setViewMode('problem');
      }
      return updated;
    });
  };

  const handleModeSwitch = (mode) => {
    setViewMode(mode);
    const shouldFlip = mode === 'solution';
    const newFlipped = {};
    problemsData.forEach((item) => {
      newFlipped[item.id] = shouldFlip;
    });
    setFlippedCards(newFlipped);
  };

  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle Pills: Where Work Gets Stuck vs Our Solutions */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => handleModeSwitch('problem')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'problem'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Where Work Gets Stuck
            </button>
            <button
              type="button"
              onClick={() => handleModeSwitch('solution')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'solution'
                  ? 'bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/40 shadow-brand-secondary'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Our Solutions
            </button>
          </div>
        </div>

        {/* Section Heading: Replaces 'Manual bottlenecks...' and below line with 'AI WORKFLOW AUTOMATION', 'Let repetitive work take care of itself.' */}
        <SectionHeading
          badge={problemsSectionCopy.badge}
          title={problemsSectionCopy.title}
          highlight={problemsSectionCopy.highlight}
          subtitle={problemsSectionCopy.subtitle}
          align="center"
          badgeColor="from-brand-primary/20 to-brand-secondary/20 text-brand-secondary border-brand-secondary/30"
        />

        {/* 4 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {problemsData.map((item) => (
            <FlipCard
              key={item.id}
              item={item}
              isFlipped={!!flippedCards[item.id]}
              onToggle={() => handleCardToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
