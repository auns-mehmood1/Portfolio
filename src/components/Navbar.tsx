import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/80 backdrop-blur-lg border-black/10 dark:bg-dark-bg/80 dark:border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-[color:var(--text-inverse)] font-bold text-xl group-hover:rotate-12 transition-transform">
            M
          </div>
          <span className="text-xl font-display font-bold tracking-tight">
            MetaBuf <span className="gradient-text">Sol.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-purple',
                location.pathname === link.path
                  ? 'text-brand-purple'
                  : 'text-[color:var(--text-secondary)]'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6 text-sm">
            Contact Us
          </Link>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-[color:var(--text-primary)]" />
            ) : (
              <span
                className={
                  // Show visible border in both modes; in light mode use a visible gray border, in dark use current subtle border
                  "inline-flex items-center justify-center rounded-full " +
                  (theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-black/5 border border-[#c4c4c4]")
                }
                style={{ width: 32, height: 32 }}
              >
                <Moon size={20} className="text-[color:var(--text-primary)]" />
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-[color:var(--text-primary)]" />
            ) : (
              <span
                className={
                  // Show visible border in both modes; in light mode use a visible gray border, in dark use current subtle border
                  "inline-flex items-center justify-center rounded-full " +
                  (theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-black/5 border border-[#c4c4c4]")
                }
                style={{ width: 32, height: 32 }}
              >
                <Moon size={20} className="text-[color:var(--text-primary)]" />
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 border-b border-black/10 dark:bg-dark-card dark:border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight size={18} className="text-[color:var(--text-disabled)]" />
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
