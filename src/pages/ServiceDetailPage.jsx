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
    <div className="relative min-h-screen bg-[#07070E] text-slate-100">
      <Navbar onBookConsultation={() => navigate('/#contact')} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Hero Banner for Service */}
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden mb-16 border border-violet-500/30 bg-gradient-to-r from-violet-950/60 via-[#0e0d1f] to-cyan-950/60 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${service.color} text-white shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                  {service.badge} Solution
                </span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
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
              Get Custom Proposal
            </Button>
          </div>
        </div>

        {/* Technical Architecture & Deliverables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Deliverables Column */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 border-violet-500/20 h-full">
              <h2 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Complete System Deliverables
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-violet-900/30 to-cyan-900/30 border border-cyan-500/30">
                <div className="text-xs font-mono uppercase text-cyan-300 font-bold mb-1">
                  Expected Impact Guarantee:
                </div>
                <div className="text-sm font-semibold text-white">
                  {service.outcomes}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Use Cases Column */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 border-cyan-500/20 h-full">
              <h2 className="font-heading text-xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <div className="space-y-4">
                {service.useCases.map((useCase, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-violet-950/30 border border-violet-800/30">
                    <div className="text-xs font-mono text-cyan-400 uppercase font-bold mb-1">
                      Scenario 0{idx + 1}
                    </div>
                    <div className="text-sm text-slate-300">
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
                  onClick={() => navigate('/#demo')}
                >
                  Test in Live AI Simulator
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
