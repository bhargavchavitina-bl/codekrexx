import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag, ArrowUpRight, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { projectsData, projectCategories } from '../data/projectsData';

export function Projects({ onStartProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-violet-600/15 top-1/2 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CASE STUDIES & PROOF"
          title="Engineered for measurable business velocity."
          highlight="measurable business velocity"
          subtitle="Explore real systems we've shipped across logistics, fintech, B2B sales, and healthcare. Real metrics, actual architectures."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 dark:text-cyan-300 light:text-violet-700 font-bold'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-filter-pill"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-cyan-400/40 rounded-xl shadow-neon-cyan -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <GlassCard
                  className="h-full p-6 flex flex-col justify-between group border-white/10 dark:border-white/10 light:border-slate-200"
                  glowColor="rgba(6, 182, 212, 0.25)"
                >
                  <div>
                    {/* Top Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase font-semibold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {project.client}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem Statement */}
                    <div className="mb-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3">
                      <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">Problem: </span>
                      {project.problem}
                    </div>

                    {/* Metric Highlight Box */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 via-violet-950/30 to-fuchsia-950/30 border border-cyan-500/20 mb-5">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
                          {project.metricValue}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          {project.metricLabel}
                        </span>
                      </div>
                      <div className="text-[11px] text-cyan-400/80 font-mono mt-1">
                        &bull; {project.secondaryMetric}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techTags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 dark:bg-white/5 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-mono cursor-pointer"
                    >
                      <span>Case Study Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-500">
                      Sample Study
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Case Study Breakdown'}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                {selectedProject.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Client Partner: {selectedProject.client}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-rose-400 font-bold mb-1.5">
                The Operational Bottleneck:
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {selectedProject.problem}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-bold mb-1.5">
                Engineered AI Solution:
              </h4>
              <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {selectedProject.solution}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-800/40">
              <div className="text-xs font-mono text-violet-300 font-semibold mb-1">
                Verified Outcome Metrics:
              </div>
              <div className="text-2xl font-bold font-heading text-white">
                {selectedProject.metricValue} {selectedProject.metricLabel}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1">
                {selectedProject.secondaryMetric}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                Tech Stack Architecture:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techTags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  const p = selectedProject;
                  setSelectedProject(null);
                  if (onStartProject) onStartProject(p.title);
                }}
              >
                Build Something Similar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
