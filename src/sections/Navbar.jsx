import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/Logo';
import { ThemeToggle } from '../components/ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How We Work', href: '#how-we-work', id: 'how-we-work' },
    { name: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
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
          ? 'py-3.5 bg-[#FDF3DA]/90 dark:bg-[#070C17]/90 backdrop-blur-xl border-b border-[#045EAC]/15 dark:border-white/10 shadow-[0_4px_24px_rgba(4,94,172,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
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
          <nav className="hidden lg:flex items-center gap-1 bg-white/75 dark:bg-slate-900/50 p-1.5 rounded-full border border-[#045EAC]/15 dark:border-white/10 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#045EAC] dark:text-brand-secondary'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#045EAC] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#08A3FF]/15 dark:bg-brand-primary/25 border border-[#08A3FF]/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-[#045EAC]/20 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 text-[#045EAC] dark:text-slate-300 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-brand-secondary" /> : <Menu className="w-5 h-5" />}
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
            className="lg:hidden border-b border-[#045EAC]/15 dark:border-white/10 bg-[#FDF3DA]/95 dark:bg-[#070C17]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    activeId === item.id
                      ? 'bg-[#08A3FF]/15 text-[#045EAC] dark:bg-brand-primary/20 dark:text-brand-secondary border border-[#08A3FF]/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-[#045EAC]/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
