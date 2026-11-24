import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Search, Sparkles } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { projectsData, projectCategories } from '../data/projectsData';

export function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = projectsData.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-[#07070E] text-slate-100">
      <Navbar onBookConsultation={() => navigate('/#contact')} />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 block">
            PORTFOLIO & PROOF OF EXECUTION
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Shipped Systems & Autonomous Architectures.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Explore our end-to-end case studies across workflow automation, conversational RAG bots, outbound sales pipelines, and full-stack generative web platforms.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-neon-cyan'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, client, or tag..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((project) => (
            <GlassCard
              key={project.id}
              className="p-7 flex flex-col justify-between group border-white/10"
              glowColor="rgba(139, 92, 246, 0.25)"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-800/40">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400">{project.client}</span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.problem}
                </p>

                <div className="p-3.5 rounded-xl bg-violet-950/30 border border-violet-800/30 mb-5">
                  <div className="text-2xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
                    {project.metricValue}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {project.metricLabel}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techTags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-mono">Sample Case Study</span>
                <button
                  type="button"
                  onClick={() => navigate('/#contact')}
                  className="text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 cursor-pointer"
                >
                  <span>Build This</span> &rarr;
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center p-10 rounded-2xl glass-card border-violet-500/30 max-w-2xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-white mb-2">
            Have a custom workflow that isn't listed here?
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            We architect tailored solutions for proprietary databases, legacy ERPs, and unique operations.
          </p>
          <Button variant="primary" size="md" onClick={() => navigate('/#contact')}>
            Talk to an AI Architect
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
