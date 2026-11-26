import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Sparkles, ArrowRight, Bot, Cpu, Zap, Layers, MessagesSquare, Database } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Bot,
  Cpu,
  MessagesSquare,
  Zap,
  Layers,
  Database,
};

export function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const Icon = iconMap[service.iconName] || Bot;

  return (
    <div className="relative min-h-screen bg-[#FDF3DA] dark:bg-[#070C17] text-[#0B1B2E] dark:text-slate-100">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#045EAC] dark:text-brand-secondary hover:text-brand-secondary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Hero Banner for Service */}
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden mb-16 border border-[#045EAC]/20 dark:border-brand-secondary/30 bg-gradient-to-r from-[#045EAC]/10 via-[#FFFDF7] to-[#08A3FF]/15 dark:from-brand-primary/20 dark:via-[#0B1628] dark:to-brand-secondary/20 shadow-glass">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#045EAC] dark:text-brand-secondary bg-[#08A3FF]/10 px-3 py-1 rounded-full border border-[#08A3FF]/30">
                  {service.badge} Solution
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B2E] dark:text-white mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {service.shortDescription}
              </p>
            </div>

            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => navigate('/#contact')}
              className="shrink-0"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Deliverables & Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Deliverables Column */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 border-[#045EAC]/15 dark:border-brand-primary/20 h-full">
              <h2 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-secondary" /> What We Build
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FDF3DA]/60 dark:bg-white/5 border border-[#045EAC]/10 dark:border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#045EAC]/10 via-[#0B78D6]/10 to-[#08A3FF]/15 border border-[#08A3FF]/30">
                <div className="text-xs font-mono uppercase text-[#045EAC] dark:text-brand-secondary font-bold mb-1">
                  How It Helps:
                </div>
                <div className="text-sm font-semibold text-[#0B1B2E] dark:text-white">
                  {service.outcomes}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Use Cases Column */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 border-[#045EAC]/15 dark:border-brand-secondary/20 h-full">
              <h2 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-6">
                Common Examples
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#08A3FF]/10 border border-[#08A3FF]/25">
                    <div className="text-xs font-mono text-[#045EAC] dark:text-brand-secondary uppercase font-bold mb-1">
                      Example 0{idx + 1}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      {useCase}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => navigate('/#contact')}
                >
                  Talk With Our Team
                </Button>
              </div>
            </GlassCard>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
