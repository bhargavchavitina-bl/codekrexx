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
      'bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-700/60 dark:border-white/10 light:border-slate-300 hover:border-brand-primary/50 hover:bg-slate-800/90 shadow-md backdrop-blur-md active:scale-[0.98]',
    outline:
      'bg-transparent text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700 dark:border-white/20 light:border-slate-300 hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-secondary/10 active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white dark:hover:text-white light:text-slate-700 light:hover:text-slate-950 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100 active:scale-[0.98]',
  };

  const baseClasses =
    'inline-flex items-center justify-center font-heading tracking-wide transition-all duration-300 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-[#07070E] disabled:opacity-50 disabled:pointer-events-none';

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
