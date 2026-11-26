import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { GlassCard } from '../components/GlassCard';
import { blogPosts } from '../data/blogData';

export function BlogPage() {
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

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#045EAC] dark:text-brand-secondary font-semibold mb-2 block">
            CODEKREXX NOTES & GUIDES
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0B1B2E] dark:text-white mb-4">
            Practical AI & Workflow Automation Guides.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Straightforward notes on connecting business tools, designing dependable workflows, and putting AI to work in everyday operations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <GlassCard
              key={post.id}
              className="p-8 flex flex-col justify-between group border-[#045EAC]/15 dark:border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase text-[#045EAC] dark:text-brand-secondary bg-[#08A3FF]/10 px-2.5 py-1 rounded border border-[#08A3FF]/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#0B1B2E] dark:text-white mb-3 group-hover:text-[#045EAC] dark:group-hover:text-brand-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-sans">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#045EAC]/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-[#045EAC]/10 dark:border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#045EAC]/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">By {post.author}</span>
                <span className="text-xs font-mono font-bold text-[#045EAC] dark:text-brand-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
