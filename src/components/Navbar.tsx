/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';
import { SITE_DATA, NAV_ITEMS } from '../data';

import Magnetic from './Magnetic';

export default function Navbar() {
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
        isScrolled ? 'py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#f5f5f5]/10' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Magnetic strength={0.2}>
          <a href="#" className="text-xl font-bold tracking-tighter uppercase leading-none">
            {SITE_DATA.name}
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} strength={0.3}>
              <a 
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase text-[#f5f5f5]/60 hover:text-[#f5f5f5] transition-colors p-2"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.4}>
            <a 
              href="#video"
              className="flex items-center gap-2 px-5 py-2 bg-[#f5f5f5] text-[#0a0a0a] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#e5e5e5] transition-colors"
            >
              <Play size={14} fill="currentColor" />
              Watch Video
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#f5f5f5]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-[#f5f5f5]/10 p-6 flex flex-col gap-6 md:hidden"
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
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#f5f5f5] text-[#0a0a0a] rounded-full text-sm font-bold uppercase tracking-widest"
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
