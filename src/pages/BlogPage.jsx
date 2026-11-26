import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { GlassCard } from '../components/GlassCard';
import { blogPosts } from '../data/blogData';

export function BlogPage() {
  return (
    <div className="relative min-h-screen bg-[#07070E] text-slate-100">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-secondary hover:text-brand-secondary-light transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-secondary font-semibold mb-2 block">
            CODEKREXX NOTES & GUIDES
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Practical AI & Workflow Automation Guides.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Straightforward notes on connecting business tools, designing dependable workflows, and putting AI to work in everyday operations.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post) => (
            <GlassCard
              key={post.id}
              className="p-8 flex flex-col justify-between group border-white/10"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase text-brand-secondary bg-brand-secondary/10 px-2.5 py-1 rounded border border-brand-secondary/30">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">By {post.author}</span>
                <span className="text-xs font-mono font-bold text-brand-secondary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
