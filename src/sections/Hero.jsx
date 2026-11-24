import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Play, Bot, Zap, Shield, Cpu } from 'lucide-react';
import { Button } from '../components/Button';
import { HeroCanvas } from '../components/HeroCanvas';
import { GlassCard } from '../components/GlassCard';

export function Hero({ onGetStarted, onSeeWork }) {
  const rotatingWords = ['Automate', 'Scale', 'Innovate', 'Accelerate', 'Solve'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Neural Canvas */}
      <HeroCanvas />

      {/* Floating Ambient Glowing Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-violet-600/25 top-1/4 -left-32 -z-10 animate-pulse-slow" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-500/20 top-1/3 -right-36 -z-10 animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-fuchsia-600/20 -bottom-20 left-1/3 -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Rotator, Subtext & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Announcement */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-violet-500/30 bg-violet-950/40 text-violet-300 backdrop-blur-md mb-6 shadow-[0_0_20px_-3px_rgba(139,92,246,0.3)]"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Autonomous AI Agents & Enterprise Process Automation</span>
            </motion.div>

            {/* Main Headline with dynamic word rotation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1] mb-6"
            >
              We turn real-world problems into{' '}
              <span className="inline-block relative whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              AI solutions.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8"
            >
              Codekrexx engineers custom multi-agent workflows, self-healing process automations, intelligent chatbots, and predictive sales pipelines that run autonomously on your tech stack.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={onGetStarted}
                className="w-full sm:w-auto shadow-neon-violet"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Play}
                iconPosition="left"
                onClick={onSeeWork}
                className="w-full sm:w-auto"
              >
                See Our Work
              </Button>
            </motion.div>

            {/* Trust Line & Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>AI agents that work 24/7 so you don't have to</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>Zero vendor lock-in</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-fuchsia-400" />
                <span>Enterprise SOC2 & HIPAA ready</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic 3D-Tilt AI Agent Nodes Visualizer */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Center Swarm Hub Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer decorative glow boundary */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 rounded-3xl blur-xl opacity-40 animate-pulse-slow" />
              
              <GlassCard className="p-6 relative border-violet-500/30 bg-[#0c0d1b]/80 backdrop-blur-2xl">
                {/* Agent Console Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">codekrexx-mesh://v3.8</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Swarm Online
                  </span>
                </div>

                {/* Simulated Active Agent Nodes */}
                <div className="space-y-3.5">
                  
                  {/* Node 1: Sales Agent */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Lead Qualification Agent
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Enriched 42 prospects • 100% matched
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                      0.8s avg
                    </span>
                  </motion.div>

                  {/* Node 2: Reconciliation Agent */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          ERP Invoice Parser
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Auto-reconciled $420k without diffs
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      99.4% acc
                    </span>
                  </motion.div>

                  {/* Node 3: Support Agent */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Support Sentinel Copilot
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          142 tickets resolved • 0 escalations
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-fuchsia-400 bg-fuchsia-950/40 px-2 py-0.5 rounded border border-fuchsia-800/40">
                      Active
                    </span>
                  </motion.div>
                </div>

                {/* Status Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Shield className="w-3.5 h-3.5 text-cyan-400" />
                    ZDR Zero Data Retention
                  </span>
                  <span className="font-mono text-cyan-400 text-[11px]">
                    4.2k ops/sec
                  </span>
                </div>
              </GlassCard>

              {/* Floating Decorative Badges with subtle floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 bg-slate-900/90 border border-cyan-500/40 text-white rounded-xl p-3 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2.5"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-semibold">Autonomous Supervisor Running</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-6 bg-slate-900/90 border border-violet-500/40 text-white rounded-xl p-3 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2.5"
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-semibold">Real-time Tool Calling Enabled</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
