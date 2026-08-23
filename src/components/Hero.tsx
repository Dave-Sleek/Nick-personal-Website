/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { ArrowDownRight, Play } from 'lucide-react';

import { Reveal } from './Reveal';
import Magnetic from './Magnetic';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#f5f5f5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#f5f5f5]/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-10">
          <div className="mb-6">
            <Reveal delay={0.1}>
              <span className="block text-sm font-bold uppercase tracking-[0.4em] text-[#f5f5f5]/40">
                {SITE_DATA.name}
              </span>
            </Reveal>
          </div>
          
          <Reveal delay={0.2} width="100%">
            <h1 className="text-6xl md:text-[8rem] font-medium leading-[0.9] tracking-tighter mb-12 font-playfair italic md:not-italic">
              Entrepreneur. <br />
              <span className="md:ml-20 italic font-playfair text-[#f5f5f5]/80">Technology</span> Strategist. <br />
              Builder.
            </h1>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={0.3}>
              <p className="text-xl md:text-2xl text-[#f5f5f5]/60 font-light leading-relaxed mb-12">
                {SITE_DATA.hero.subheadline}
              </p>
            </Reveal>

            <div className="flex flex-wrap gap-6">
              <Magnetic strength={0.3}>
                <a 
                  href="#video"
                  className="group flex items-center gap-3 px-8 py-5 bg-[#f5f5f5] text-[#0a0a0a] rounded-full text-sm font-bold uppercase tracking-widest transition-transform"
                >
                  <Play size={18} fill="currentColor" />
                  {SITE_DATA.hero.ctaPrimary}
                </a>
              </Magnetic>
              
              <Magnetic strength={0.3}>
                <a 
                  href="#ventures"
                  className="group flex items-center gap-3 px-8 py-5 border border-[#f5f5f5]/20 text-[#f5f5f5] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#f5f5f5]/5 transition-colors"
                >
                  {SITE_DATA.hero.ctaSecondary}
                  <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Side Label */}
      <div className="absolute right-12 bottom-20 hidden lg:block overflow-hidden h-64">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="origin-bottom-right -rotate-90 text-[10px] font-bold uppercase tracking-[0.8em] text-[#f5f5f5]/20 whitespace-nowrap"
        >
          {SITE_DATA.domain} — EST 2026
        </motion.div>
      </div>
    </section>
  );
}
