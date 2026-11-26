import React from 'react';
import { 
  Sparkles, 
  Bot, 
  Cpu, 
  Zap, 
  Terminal, 
  Activity, 
  Code, 
  Server, 
  Database, 
  Globe 
} from 'lucide-react';
import { techStackList } from '../data/techStackData';

const iconMap = {
  Sparkles,
  Bot,
  Cpu,
  Zap,
  Terminal,
  Activity,
  Code,
  Server,
  Database,
  Globe,
};

export function TechStackMarquee() {
  // Triple the items for a smooth seamless infinite loop on any screen resolution
  const marqueeItems = [...techStackList, ...techStackList, ...techStackList];

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-black/40 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
          Tools & Technologies We Work With
        </span>
      </div>

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border-white/10 dark:border-white/10 light:border-slate-200 hover:border-brand-secondary/50 transition-all select-none group cursor-pointer"
              >
                <div
                  className="p-2 rounded-xl bg-white/5 text-brand-secondary group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-white dark:text-white light:text-slate-900 whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="relative w-full overflow-hidden mt-4 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused] py-2">
          {marqueeItems.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border-white/10 dark:border-white/10 light:border-slate-200 hover:border-brand-primary/50 transition-all select-none group cursor-pointer"
              >
                <div
                  className="p-2 rounded-xl bg-white/5 text-brand-primary group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-heading font-bold text-white dark:text-white light:text-slate-900 whitespace-nowrap">
                    {tech.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                    {tech.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
