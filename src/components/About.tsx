/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Reveal } from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="md:col-span-5">
            <div>
              <Reveal>
                <span className="block text-xs font-bold uppercase tracking-[0.5em] text-[#f5f5f5]/30 mb-8">
                  The Narrative
                </span>
              </Reveal>
              <Reveal delay={0.4}>
                <h2 className="text-5xl md:text-[5.5rem] font-playfair italic leading-[0.85] tracking-tighter mb-12">
                  About <br />
                  Nick.
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                <div className="h-px w-full bg-gradient-to-r from-[#f5f5f5]/20 to-transparent" />
                <Reveal delay={0.6}>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f5f5f5]/40 font-bold">
                    Entrepreneur & Strategist
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-12 text-[#f5f5f5]">
                {SITE_DATA.about.statement}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-12">
                <p className="text-lg md:text-xl text-[#f5f5f5]/50 leading-relaxed font-light">
                  {SITE_DATA.about.details}
                </p>
              </div>

              {/* Decorative Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mt-20 pt-20 border-t border-[#f5f5f5]/5">
                <div>
                  <span className="block text-3xl font-medium mb-2 tracking-tighter">10+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/30">Years in Innovation</span>
                </div>
                <div>
                  <span className="block text-3xl font-medium mb-2 tracking-tighter">∞</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/30">Commitment to Growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
