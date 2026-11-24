import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { ThemeToggle } from '../components/ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Navbar({ onBookConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How We Work', href: '#how-we-work', id: 'how-we-work' },
    { name: 'Live Demo', href: '#demo', id: 'demo' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const activeId = useScrollSpy(navItems.map(item => item.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#07070E]/85 dark:bg-[#07070E]/85 light:bg-white/90 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="focus:outline-none" aria-label="Codekrexx Home">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/70 p-1.5 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 dark:text-cyan-300 light:text-violet-700'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-950'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-500/30 dark:from-violet-600/30 dark:to-cyan-500/30 light:from-violet-200 light:to-cyan-200 border border-cyan-400/30 rounded-full -z-10 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              icon={Calendar}
              iconPosition="left"
              onClick={onBookConsultation}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-700/60 dark:border-white/10 light:border-slate-300 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Slide-In Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#07070E]/95 dark:bg-[#07070E]/95 light:bg-white/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    activeId === item.id
                      ? 'bg-violet-600/20 text-cyan-300 border border-violet-500/30'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={ArrowRight}
                  onClick={() => {
                    closeMenu();
                    if (onBookConsultation) onBookConsultation();
                  }}
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
