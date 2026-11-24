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
      title: "Action Over Chatter",
      description: "Chatbots that merely summarize text are obsolete. We engineer autonomous agents that invoke tools, verify inputs, handle exceptions, and complete real-world tasks."
    },
    {
      icon: Shield,
      title: "Zero-Compromise Security",
      description: "Enterprise data is confidential. We enforce Zero Data Retention (ZDR) endpoints, zero model training on client telemetry, and role-based access governance."
    },
    {
      icon: Target,
      title: "Measurable ROI Sprints",
      description: "We don't do endless research projects. Every engagement has a fixed scope, a 2 to 4-week delivery timeline, and a concrete metric of hours or dollars saved."
    },
    {
      icon: Users,
      title: "Human-in-the-Loop Safeguards",
      description: "Autonomous execution with intuitive supervisor dashboards, confidence scoring thresholds, and immediate escalation channels when ambiguity arises."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#07070E] text-slate-100">
      <Navbar onBookConsultation={() => navigate('/#contact')} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-secondary hover:text-brand-secondary-light transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary font-semibold mb-2 block">
            ABOUT CODEKREXX
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We are building the autonomous operational backbone for modern enterprise.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed font-sans">
            Founded with a clear conviction: the next decade of software is not about static SaaS dashboards. It is about autonomous agent systems that collaborate with human teams, resolve bottlenecks in milliseconds, and run 24 hours a day without downtime.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand-secondary" /> Engineering Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <GlassCard key={idx} className="p-8 border-brand-primary/20">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-brand-primary to-brand-secondary text-white w-fit mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Mission Banner */}
        <div className="relative rounded-3xl p-10 sm:p-14 border border-brand-primary/40 bg-gradient-to-r from-brand-primary/20 via-[#100e2b]/90 to-brand-secondary/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Want to automate your team's routine workload?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Let's build an autonomous agent pipeline customized to your databases, tools, and business objectives.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => navigate('/#contact')}>
            Start a Conversation
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
