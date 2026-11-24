import React from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { Logo } from '../components/Logo';
import { siteConfig } from '../data/siteConfig';

function SocialIcon({ name }) {
  switch (name) {
    case 'GitHub':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'Twitter / X':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    default:
      return <MessageSquare className="w-4 h-4" />;
  }
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05050A] border-t border-white/10 dark:border-white/10 light:border-slate-200 pt-16 pb-12 overflow-hidden">
      {/* Subtle top neon ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10 dark:border-white/10 light:border-slate-200">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block" aria-label="Codekrexx Home">
              <Logo />
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-sans">
              Codekrexx engineers production-grade autonomous AI agents, intelligent business process automations, and custom LLM integrations that scale enterprise operations 24/7.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all cursor-pointer"
                  aria-label={`Codekrexx on ${social.name}`}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Column 1: Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 mb-4">
              AI Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Autonomous AI Agents
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Process Automation (n8n/Python)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  AI Customer Support Bots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Lead Gen & Outbound AI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Custom AI Web Applications
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Enterprise RAG & Data Lakes
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#how-we-work" className="hover:text-cyan-400 transition-colors">
                  Our 4-Step Process
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-cyan-400 transition-colors">
                  Interactive AI Demo
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Case Studies & Metrics
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Codekrexx
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Book Free Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Trust & Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white dark:text-white light:text-slate-900 mb-4">
              Governance & SLA
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5 text-cyan-400 font-mono">
                &bull; Zero Data Retention (ZDR)
              </li>
              <li className="flex items-center gap-1.5 text-violet-400 font-mono">
                &bull; SOC2 Type II Architecture
              </li>
              <li className="flex items-center gap-1.5 text-fuchsia-400 font-mono">
                &bull; HIPAA Compliant Storage
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                &bull; 99.9% Uptime Guarantee
              </li>
              <li className="flex items-center gap-1.5 text-slate-400">
                &bull; Dedicated Incident SLA
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name} Technologies, Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Whitepaper</span>
            
            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all border border-white/10 hover:border-cyan-400/40 cursor-pointer"
              aria-label="Back to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
