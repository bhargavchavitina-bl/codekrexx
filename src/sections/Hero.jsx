import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Bot, Zap, Shield, Cpu, Layers } from 'lucide-react';
import { Button } from '../components/Button';
import { HeroCanvas } from '../components/HeroCanvas';
import { GlassCard } from '../components/GlassCard';

export function Hero({ onGetStarted, onSeeServices }) {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Neural Canvas (Ambient drift only) */}
      <HeroCanvas />

      {/* Floating Ambient Glowing Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-brand-primary/20 top-1/4 -left-32 -z-10 animate-pulse-slow" />
      <div className="glow-orb w-[600px] h-[600px] bg-brand-secondary/15 top-1/3 -right-36 -z-10 animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-accent/15 -bottom-20 left-1/3 -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs & Highlights */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-primary/30 bg-brand-primary/10 text-brand-primary-light backdrop-blur-md mb-6 shadow-brand-primary"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
              </span>
              <span>AI Agents & Business Automation</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1] mb-6"
            >
              We make AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary drop-shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                work for your business
              </span>
              , not just look impressive.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8"
            >
              At Codekrexx, we build AI agents and automation systems that take care of repetitive work, connect your business tools, and help your team work more efficiently. From smart assistants to complete workflows, we turn ideas into practical solutions that solve real business problems.
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
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={Layers}
                iconPosition="left"
                onClick={onSeeServices}
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>AI agents that handle everyday tasks around the clock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Automation built around the tools your business already uses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Solutions designed to grow with your business</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: AI Workflow Preview Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer decorative glow boundary */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary rounded-3xl blur-xl opacity-35 animate-pulse-slow" />
              
              <GlassCard className="p-6 relative border-brand-primary/30 bg-[#0c0d1b]/80 backdrop-blur-2xl">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 dark:border-white/10 light:border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">workflow-automation</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    System Active
                  </span>
                </div>

                {/* Active Workflow Examples */}
                <div className="space-y-3.5">
                  
                  {/* Node 1: Sales & Leads */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-colors hover:border-brand-primary/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-brand-primary/20 text-brand-primary border border-brand-primary/30">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Lead Follow-Up Agent
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Organizes new enquiries and updates your CRM
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded border border-brand-secondary/30 shrink-0">
                      Synced
                    </span>
                  </div>

                  {/* Node 2: Operations */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-colors hover:border-brand-secondary/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Operations Workflow
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Moves updates across spreadsheets and tools
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 shrink-0">
                      Automated
                    </span>
                  </div>

                  {/* Node 3: Support */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/5 dark:border-white/5 light:border-slate-200 flex items-start justify-between gap-3 transition-colors hover:border-brand-accent/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white dark:text-white light:text-slate-900">
                          Customer Assistant
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          Answers common questions with team handoff
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/30 shrink-0">
                      Active
                    </span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Shield className="w-3.5 h-3.5 text-brand-secondary" />
                    Built around your tools
                  </span>
                  <span className="font-mono text-brand-secondary text-[11px]">
                    Ready to scale
                  </span>
                </div>
              </GlassCard>

              {/* Corner Badges */}
              <div className="absolute -top-6 -right-6 bg-slate-900/90 border border-brand-secondary/40 text-white rounded-xl p-3 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary animate-ping" />
                <span className="text-xs font-semibold">Workflow Automation Active</span>
              </div>

              <div className="absolute -bottom-5 -left-6 bg-slate-900/90 border border-brand-primary/40 text-white rounded-xl p-3 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
                <span className="text-xs font-semibold">Human Approval Controls</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
