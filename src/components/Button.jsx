import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  target,
  rel,
  type = 'button',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-semibold rounded-2xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'relative overflow-hidden text-white bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary hover:brightness-110 shadow-brand-primary hover:shadow-brand-secondary border border-white/20 active:scale-[0.98]',
    secondary:
      'bg-white/85 dark:bg-slate-900/80 text-[#0B1B2E] dark:text-slate-100 border border-[#045EAC]/20 dark:border-white/10 hover:border-brand-secondary/60 hover:bg-white dark:hover:bg-slate-800/90 shadow-sm backdrop-blur-md active:scale-[0.98]',
    outline:
      'bg-transparent text-[#045EAC] dark:text-slate-200 border border-[#045EAC]/30 dark:border-white/20 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/10 active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-700 dark:text-slate-300 hover:text-[#045EAC] dark:hover:text-white hover:bg-[#045EAC]/5 dark:hover:bg-white/5 active:scale-[0.98]',
  };

  const baseClasses =
    'inline-flex items-center justify-center font-heading tracking-wide transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 focus:ring-offset-[#FDF3DA] dark:focus:ring-offset-[#070C17] disabled:opacity-50 disabled:pointer-events-none';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0`} />
      )}
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {Icon && iconPosition === 'right' && (
        <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0 transition-transform duration-200 group-hover:translate-x-0.5`} />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`group ${combinedClasses}`}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
