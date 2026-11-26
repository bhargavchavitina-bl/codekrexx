import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Cpu, Target, Users, Sparkles } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';

export function AboutPage() {
  const navigate = useNavigate();

  const principles = [
    {
      icon: Cpu,
      title: "Built for Real Work",
      description: "We don't build tools just for show. Every AI agent and automation is designed to connect with your actual systems and take repetitive work off your team's plate."
    },
    {
      icon: Shield,
      title: "Clear Permissions & Control",
      description: "Your business data stays organised and protected. We build workflows with role-based access and straightforward controls so your team knows how everything runs."
    },
    {
      icon: Target,
      title: "Start Small, Expand Over Time",
      description: "You don't need to rebuild your operations all at once. We can begin with one time-consuming workflow, get it running reliably, and grow from there."
    },
    {
      icon: Users,
      title: "Human Review When Needed",
      description: "Automation shouldn't mean losing oversight. We build approval steps, notifications, and clear handoffs whenever a decision calls for a person."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FDF3DA] dark:bg-[#070C17] text-[#0B1B2E] dark:text-slate-100">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#045EAC] dark:text-brand-secondary hover:text-brand-secondary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#045EAC] dark:text-brand-secondary font-semibold mb-2 block">
            ABOUT CODEKREXX
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B2E] dark:text-white mb-6 leading-tight">
            We build practical automation around the way your business works.
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
            At Codekrexx, we build AI agents and automated workflows that handle repetitive tasks, connect the tools your team already uses, and keep day-to-day operations running smoothly.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1B2E] dark:text-white mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-secondary" /> How We Approach Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <GlassCard key={idx} className="p-8 border-[#045EAC]/15 dark:border-brand-primary/20">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary text-white w-fit mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Mission Banner */}
        <div className="relative rounded-3xl p-10 sm:p-14 border border-[#045EAC]/20 dark:border-brand-secondary/30 bg-gradient-to-r from-[#045EAC]/10 via-[#FFFDF7] to-[#08A3FF]/15 dark:from-brand-primary/20 dark:via-[#0B1628]/95 dark:to-brand-secondary/20 shadow-glass flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0B1B2E] dark:text-white mb-2">
              Want to simplify your team's routine workload?
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xl">
              Tell us which tasks take up the most time, and we'll help design a workflow tailored to your tools and goals.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => navigate('/#contact')}>
            Get Started
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
