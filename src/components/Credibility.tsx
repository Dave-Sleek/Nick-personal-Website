/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Reveal } from './Reveal';

export default function Credibility() {
  return (
    <section className="py-24 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-4">
            <div>
              <Reveal>
                <span className="block text-xs font-bold uppercase tracking-[0.5em] text-[#f5f5f5]/30 mb-8">
                  Professionalism
                </span>
              </Reveal>
              <Reveal delay={0.4}>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase leading-none mb-12">
                  {SITE_DATA.credibility.title}
                </h2>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-[#f5f5f5]/40 leading-relaxed font-light">
                  Building a track record of innovation and strategic execution across diverse technology landscapes.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-1">
              {SITE_DATA.credibility.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group grid grid-cols-12 items-center py-10 border-t border-[#f5f5f5]/5 hover:bg-[#f5f5f5]/[0.02] transition-colors px-4"
                >
                  <div className="col-span-3 md:col-span-2 text-xs font-bold uppercase tracking-widest text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] transition-colors">
                    {item.year}
                  </div>
                  <div className="col-span-9 md:col-span-6">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                      {item.role}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 md:text-right text-[#f5f5f5]/50 font-playfair italic md:text-xl">
                    {item.company}
                  </div>
                </motion.div>
              ))}
              <div className="h-[1px] w-full bg-[#f5f5f5]/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
