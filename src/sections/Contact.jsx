import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';
import { siteConfig } from '../data/siteConfig';

function SocialIcon({ name }) {
  switch (name) {
    case 'GitHub':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'Twitter / X':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      );
  }
}

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
        
        {/* Top Bold Gradient Banner (without consultation button) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 overflow-hidden mb-20 border border-brand-primary/40 bg-gradient-to-r from-brand-primary/20 via-[#100e2b]/90 to-brand-secondary/20 shadow-brand-primary text-center sm:text-left"
        >
          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary" />

          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full border border-brand-secondary/30 inline-flex items-center gap-1.5 mb-4">
              <Sparkles className="w-3 h-3 text-brand-secondary" /> Work With Us
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3">
              Ready to automate the work slowing your team down?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Tell us about your current workflows, the tools you use, and where manual tasks take up too much time. We'll help map out a practical solution that fits your business.
            </p>
          </div>
        </motion.div>

        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Talk with the Codekrexx team."
          highlight="Codekrexx team"
          subtitle="Have a workflow in mind or not sure where to begin? Reach out directly by email or connect with us through our channels below."
          align="center"
        />

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          
          {/* Primary Channel: Email & Contact Details */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-8 sm:p-10 border-brand-primary/20 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8 font-sans">
                  Share a quick overview of what you're looking to automate or build, and we'll follow up with next steps.
                </p>

                {/* Direct Email Card */}
                <div className="p-6 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-xl bg-brand-primary/20 text-brand-primary border border-brand-primary/30 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email</div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-lg font-heading font-bold text-white dark:text-white light:text-slate-900 hover:text-brand-secondary transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-brand-secondary/20 text-slate-300 hover:text-brand-secondary border border-white/10 hover:border-brand-secondary/40 transition-all cursor-pointer self-start sm:self-auto"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location & Telephone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                      <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900 mt-0.5">
                        {siteConfig.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-brand-accent/20 text-brand-accent border border-brand-accent/30 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Phone</div>
                      <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900 mt-0.5">
                        {siteConfig.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Built around your tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span>Human review controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary-light shrink-0" />
                  <span>Clear project scope</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Secondary Channel: Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 sm:p-10 border-brand-secondary/20 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
                  Connect With Us
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6 font-sans">
                  Follow our updates or reach out through any of the platforms below.
                </p>

                <div className="space-y-3">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 hover:border-brand-secondary/40 hover:bg-white/[0.06] transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-brand-primary/20 text-slate-300 group-hover:text-brand-secondary transition-colors">
                          <SocialIcon name={social.name} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            Connect with Codekrexx
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-brand-secondary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Practical Note */}
              <div className="mt-8 p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20">
                <div className="text-xs font-mono uppercase text-brand-secondary font-bold mb-1">
                  Not Sure Where to Start?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  You don't need a technical brief before reaching out. Share the repetitive tasks slowing your team down, and we can explore practical options together.
                </p>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
