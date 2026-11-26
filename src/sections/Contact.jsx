import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Copy, 
  Check
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { siteConfig } from '../data/siteConfig';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient orbs */}
      <div className="glow-orb w-[650px] h-[650px] bg-brand-primary/15 top-1/4 right-0 -z-10" />
      <div className="glow-orb w-[600px] h-[600px] bg-brand-secondary/15 bottom-0 left-0 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Gradient Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden mb-20 border border-[#045EAC]/20 dark:border-brand-secondary/30 bg-gradient-to-r from-[#045EAC]/10 via-[#FFFDF7] to-[#08A3FF]/15 dark:from-brand-primary/20 dark:via-[#0B1628]/95 dark:to-brand-secondary/20 shadow-glass text-center sm:text-left"
        >
          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary" />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#045EAC] dark:text-brand-secondary bg-[#08A3FF]/10 px-3 py-1 rounded-full border border-[#08A3FF]/30 inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="w-3 h-3 text-brand-secondary" /> Work With Us
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1B2E] dark:text-white leading-tight mb-3">
              Ready to automate the work slowing your team down?
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              Tell us about your current workflows, the tools you use, and where manual tasks take up too much time. We'll help map out a practical solution that fits your business.
            </p>
          </div>
        </motion.div>

        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Talk with the Codekrexx team."
          highlight="Codekrexx team"
          subtitle="Have a workflow in mind or not sure where to begin? Reach out to us directly using the details below."
          align="center"
        />

        {/* Single Centered Address & Contact Card */}
        <div className="max-w-3xl mx-auto mt-12">
          <GlassCard className="p-8 sm:p-10 border-[#045EAC]/20 dark:border-white/10">
            <div>
              <h3 className="font-heading text-2xl font-bold text-[#0B1B2E] dark:text-white mb-2">
                Address
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-sans">
                {siteConfig.location} — share a quick overview of what you're looking to automate or build, and we'll follow up with next steps.
              </p>

              {/* Direct Email Card */}
              <div className="p-6 rounded-2xl bg-[#FDF3DA]/60 dark:bg-white/[0.03] border border-[#045EAC]/15 dark:border-white/10 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-[#045EAC]/10 dark:bg-brand-primary/25 text-[#045EAC] dark:text-[#60A5FA] border border-[#045EAC]/20 dark:border-brand-primary/30 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lg font-heading font-bold text-[#0B1B2E] dark:text-white hover:text-brand-secondary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white dark:bg-white/5 hover:bg-[#08A3FF]/10 dark:hover:bg-brand-secondary/20 text-[#045EAC] dark:text-slate-300 hover:text-brand-secondary border border-[#045EAC]/20 dark:border-white/10 hover:border-brand-secondary/40 transition-all cursor-pointer self-start sm:self-auto"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Address & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#FDF3DA]/60 dark:bg-white/[0.02] border border-[#045EAC]/15 dark:border-white/5 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#08A3FF]/15 text-[#0284C7] dark:text-brand-secondary border border-[#08A3FF]/30 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Address</div>
                    <div className="text-sm font-semibold text-[#0B1B2E] dark:text-white mt-0.5">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FDF3DA]/60 dark:bg-white/[0.02] border border-[#045EAC]/15 dark:border-white/5 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#0B78D6]/15 text-[#045EAC] dark:text-brand-accent-light border border-[#0B78D6]/25 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">Phone</div>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-sm font-semibold text-[#0B1B2E] dark:text-white hover:text-brand-secondary transition-colors mt-0.5 inline-block"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Highlights */}
            <div className="mt-8 pt-6 border-t border-[#045EAC]/15 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Built around your tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>Human review controls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#045EAC] dark:text-[#60A5FA] shrink-0" />
                <span>Clear project scope</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
