import React from 'react';

export function GlassCard({
  children,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl glass-card transition-all duration-300 overflow-hidden hover:border-brand-primary/40 hover:shadow-brand-primary ${className}`}
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
