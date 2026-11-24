import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = '',
  badgeColor = 'from-brand-primary/20 to-brand-secondary/20 text-brand-secondary border-brand-secondary/30',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl mb-14 md:mb-18 ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {/* Pill Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border backdrop-blur-md bg-gradient-to-r ${badgeColor}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-ping inline-block" />
          <span>{badge}</span>
        </motion.div>
      )}

      {/* Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.15]"
      >
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary">
              {highlight}
            </span>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-sans ${
            isCenter ? 'max-w-2xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
