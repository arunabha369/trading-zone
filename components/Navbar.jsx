'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, Menu, TrendingUp } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/30 py-3 px-6'
            : 'bg-dark-surface/60 backdrop-blur-md border border-dark-border-subtle py-4 px-6'
        }`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group" aria-label="Trading Zone — Home">
            <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
              <TrendingUp className="w-5 h-5 text-neon" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-text-primary leading-tight tracking-tight">
                Trading Zone
              </span>
              <span className="text-[10px] text-text-muted leading-tight tracking-wider uppercase hidden sm:block">
                A Nirmal Bang Associate
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-neon rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918653548730"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-text-secondary hover:text-neon border border-dark-border rounded-xl text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon text-dark-bg font-semibold text-sm rounded-xl hover:bg-neon-hover transition-colors shadow-md shadow-neon/20"
            >
              Enquire
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-neon transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-6 space-y-1 border-t border-dark-border mt-4" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className="block px-4 py-3 text-text-secondary hover:text-neon hover:bg-dark-card/50 rounded-lg transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3 px-4 flex gap-3">
                  <a
                    href="tel:+918653548730"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-dark-border text-text-secondary rounded-xl font-medium hover:text-neon hover:border-neon/30 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMobile}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon text-dark-bg font-bold rounded-xl hover:bg-neon-hover transition-colors"
                  >
                    Enquire
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
