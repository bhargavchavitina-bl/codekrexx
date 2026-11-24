import React from 'react';

export function Logo({ className = "h-9", showText = true }) {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* SVG Icon Mark */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 rounded-xl blur-[6px] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Core Icon Container */}
        <div className="relative w-full h-full bg-[#0A0A14] border border-white/20 rounded-xl flex items-center justify-center p-1.5 shadow-inner">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            {/* Hexagonal agent node lattice */}
            <polygon 
              points="20,4 34,12 34,28 20,36 6,28 6,12" 
              stroke="url(#logo-grad)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="opacity-50"
            />
            {/* Dynamic K Glyph */}
            <path 
              d="M14 11V29 M14 20L26 11 M19 16L27 29" 
              stroke="url(#logo-grad)" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Active AI Node Core */}
            <circle cx="26" cy="11" r="2.2" fill="#06B6D4" className="animate-pulse" />
            <circle cx="27" cy="29" r="2.2" fill="#D946EF" />
            <circle cx="14" cy="20" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <span className="font-heading font-extrabold text-xl tracking-tight text-white dark:text-white light:text-slate-900 flex items-baseline">
          Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">krexx</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-0.5 animate-pulse inline-block" />
        </span>
      )}
    </div>
  );
}
