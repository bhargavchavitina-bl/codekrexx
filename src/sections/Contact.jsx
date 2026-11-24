import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Calendar, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';

export function Contact({ prefilledService = '', onBookConsultation }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: prefilledService || 'Autonomous AI Agents',
    budget: '$10k - $25k',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '< $10k (Pilot)',
    '$10k - $25k (Standard Sprint)',
    '$25k - $50k (Enterprise Pipeline)',
    '$50k+ (Full Mesh Swarm)'
  ];

  const serviceOptions = [
    'Autonomous AI Agents',
    'Business Process Automation',
    'AI Chatbots & Support',
    'Lead Generation & Sales Automation',
    'AI Web/App Development',
    'Data & AI Integrations'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief note about your project (at least 10 characters).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // DEMO MODE SUBMISSION
    // TODO: In production, integrate EmailJS, Formspree, or your backend endpoint:
    // Example:
    // await fetch('https://api.codekrexx.com/v1/inbound-lead', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    console.log('🚀 [Codekrexx Inbound Lead Submitted - Demo Mode]:', {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'marketing-site-v3',
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#8B5CF6', '#06B6D4', '#EC4899', '#ffffff'],
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'Autonomous AI Agents',
      budget: '$10k - $25k',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[650px] h-[650px] bg-violet-600/15 top-1/4 right-0 -z-10" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-600/15 bottom-0 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Bold Gradient Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden mb-20 border border-violet-500/40 bg-gradient-to-r from-violet-950/80 via-[#100e2b]/90 to-cyan-950/80 shadow-[0_20px_60px_-15px_rgba(139,92,246,0.4)] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/40 inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="w-3 h-3 text-cyan-300" /> Zero Risk Exploration
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready to deploy autonomous AI agents on your payroll?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Schedule a 20-minute architectural scoping session. We'll identify your highest ROI manual bottlenecks and outline an implementation plan with fixed pricing.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              icon={Calendar}
              iconPosition="left"
              onClick={onBookConsultation}
              className="w-full sm:w-auto shadow-neon-cyan"
            >
              Book Scoping Call
            </Button>
          </div>
        </motion.div>

        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Start your autonomous AI transformation."
          highlight="autonomous AI transformation"
          subtitle="Send us a message or request a proposal. Our engineering team reviews project scopes within 24 hours."
          align="center"
        />

        {/* Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* Left Column: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 border-violet-500/20">
              <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-6">
                Direct Engineering Inquiries
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Direct Email</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm font-semibold text-white dark:text-white light:text-slate-900 hover:text-cyan-400 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Headquarters</div>
                    <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-500/30 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Direct Calendar</div>
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1 text-left"
                    >
                      Schedule Instant Discovery Session &rarr;
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Commitments */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                  Codekrexx Guarantees:
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA and Intellectual Property ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-retention frontier AI model connections</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed-scope sprint delivery or full refund</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border-violet-500/30 relative">
              
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white dark:text-white light:text-slate-900">
                    Request Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>. Our lead AI architect will review your project scope and contact you at <span className="text-violet-300 font-semibold">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-xs font-mono text-slate-400">
                    Ticket Ref: CKX-{Math.floor(100000 + Math.random() * 900000)} &bull; Demo Mode Logged
                  </div>
                  <div className="pt-4">
                    <Button variant="secondary" size="sm" onClick={resetForm}>
                      Submit Another Inquiry
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Logistics Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        Service Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c0d1b] dark:bg-[#0c0d1b] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0c0d1b] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all text-center cursor-pointer border ${
                            formData.budget === opt
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                              : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                      Project Goals & Bottlenecks *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to automate, what software you use, and your ideal timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 light:bg-slate-100 border text-sm text-white dark:text-white light:text-slate-900 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                      icon={Send}
                    >
                      {isSubmitting ? 'Evaluating Scope...' : 'Send Inquiry (Demo Mode)'}
                    </Button>
                    <p className="text-[11px] font-mono text-center text-slate-400 mt-2.5">
                      Demo mode: submissions log safely to console and display immediate confirmation.
                    </p>
                  </div>
                </form>
              )}
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
