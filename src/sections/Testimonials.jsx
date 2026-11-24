import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { testimonialsData } from '../data/testimonialsData';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CLIENT FEEDBACK"
          title="Autonomous reliability trusted in production."
          highlight="trusted in production"
          subtitle="See how enterprise operators and founders leverage Codekrexx to eliminate manual operations and unlock exponential scale."
          align="center"
        />

        {/* Carousel Container */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Viewport */}
          <div className="min-h-[340px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full"
              >
                <GlassCard className="p-8 sm:p-12 border-brand-primary/30 relative shadow-2xl">
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 dark:text-white/5 light:text-slate-200 pointer-events-none" />

                  {/* Rating Stars & Sample Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono uppercase bg-white/5 text-slate-400 px-2.5 py-0.5 rounded border border-white/10">
                      Sample Feedback
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p className="text-base sm:text-xl text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed font-sans mb-8">
                    "{current.quote}"
                  </p>

                  {/* Author Meta & Metric Highlight */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-primary via-brand-accent to-brand-secondary p-0.5 shadow-md">
                        <img
                          src={current.avatar}
                          alt={current.author}
                          className="w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full rounded-full bg-slate-900 items-center justify-center text-xs font-bold text-white font-heading">
                          {current.initials}
                        </div>
                      </div>
                      <div>
                        <div className="font-heading font-bold text-base text-white dark:text-white light:text-slate-900">
                          {current.author}
                        </div>
                        <div className="text-xs text-slate-400">
                          {current.role} &bull; <span className="text-brand-secondary">{current.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-primary/15 text-brand-primary-light border border-brand-primary/30 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
                      <span>{current.metricHighlight}</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev / Next & Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary shadow-brand-secondary'
                      : 'w-2 bg-white/20 dark:bg-white/20 light:bg-slate-300 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
