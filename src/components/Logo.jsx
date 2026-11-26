import React from 'react';
import codekrexxMark from '../assets/codekrexx-mark.png';
import codekrexxLogo from '../assets/codekrexx-logo.png';

export function Logo({ className = '', variant = 'inline', showText = true }) {
  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col items-start select-none group cursor-pointer ${className}`}>
        {/* Exact brand logo on light / warm cream background */}
        <img
          src={codekrexxLogo}
          alt="Codekrexx - AI Automation"
          className="h-24 w-auto object-contain dark:hidden"
        />

        {/* High-contrast dark-mode equivalent */}
        <div className="hidden dark:flex flex-col items-center">
          <img
            src={codekrexxMark}
            alt="Codekrexx"
            className="h-14 w-auto object-contain mb-1.5 drop-shadow-[0_0_10px_rgba(8,163,255,0.25)]"
          />
          <span className="font-heading font-extrabold text-2xl tracking-tight leading-none">
            <span className="text-[#60A5FA]">code</span>
            <span className="text-[#08A3FF]">krexx</span>
          </span>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="w-5 h-[1px] bg-slate-400/70" />
            <span className="text-[10px] font-sans font-medium tracking-[0.14em] text-slate-300">
              AI Automation
            </span>
            <span className="w-5 h-[1px] bg-slate-400/70" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 select-none group cursor-pointer ${className}`}>
      <img
        src={codekrexxMark}
        alt="Codekrexx"
        className="h-9 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading font-extrabold text-xl tracking-tight flex items-baseline">
            <span className="text-[#045EAC] dark:text-[#60A5FA]">code</span>
            <span className="text-[#08A3FF]">krexx</span>
          </span>
          <span className="text-[9px] font-sans font-semibold tracking-[0.16em] uppercase text-[#045EAC]/80 dark:text-slate-300 mt-0.5">
            AI Automation
          </span>
        </div>
      )}
    </div>
  );
}
