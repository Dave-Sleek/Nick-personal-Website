/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Sun, Moon } from 'lucide-react';
import { SITE_DATA, NAV_ITEMS } from '../data';

import Magnetic from './Magnetic';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-muted)]' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Magnetic strength={0.2}>
            <a href="#" className="text-xl font-bold tracking-tighter uppercase leading-none">
              {SITE_DATA.name}
            </a>
          </Magnetic>

          <Magnetic strength={0.4}>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--accent-alpha)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Magnetic>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} strength={0.3}>
              <a 
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase opacity-60 hover:opacity-100 transition-opacity p-2"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.4}>
            <a 
              href="#video"
              className="flex items-center gap-2 px-5 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <Play size={14} fill="currentColor" />
              Watch Video
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className=""
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--bg-primary)] border-b border-[var(--border-muted)] p-6 flex flex-col gap-6 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-2xl font-medium tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#video"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full text-sm font-bold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Play size={16} fill="currentColor" />
              Watch Video
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
