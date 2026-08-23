/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 md:py-48 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.5em] opacity-30 mb-6">
                Portfolio
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter uppercase leading-none">
                Selected <br />
                Ventures.
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.6}>
            <p className="opacity-40 text-sm uppercase tracking-widest font-medium">
              Strategic Projects & Initiatives
            </p>
          </Reveal>
        </div>

        <StaggerContainer>
          <div className="space-y-32">
            {SITE_DATA.ventures.map((venture, index) => (
              <StaggerItem key={venture.name}>
                <div className="group">
                  <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-1 text-[8vw] md:text-[5rem] font-playfair italic opacity-5 leading-none select-none">
                      0{index + 1}
                    </div>
                    
                    <div className="md:col-span-6">
                      <span className="inline-block px-3 py-1 border border-[var(--border-muted)] rounded-full text-[10px] font-bold uppercase tracking-widest opacity-40 mb-8">
                        {venture.category}
                      </span>
                      <h3 className="text-5xl md:text-[6rem] font-bold tracking-tighter uppercase leading-none mb-8 group-hover:italic group-hover:translate-x-4 transition-all duration-700 ease-in-out">
                        {venture.name}
                      </h3>
                    </div>

                    <div className="md:col-span-5">
                      <div className="max-w-md">
                        <p className="text-xl md:text-2xl opacity-60 font-light leading-relaxed mb-10">
                          {venture.description}
                        </p>
                        
                        <div className="flex items-center gap-8">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${venture.status === 'Active' ? 'bg-green-500/50' : 'bg-orange-500/50'}`} />
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-30">
                              {venture.status}
                            </span>
                          </div>
                          
                          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group/btn">
                            Case Study 
                            <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-gradient-to-r from-[var(--border-muted)] via-[var(--accent-alpha)] to-transparent mt-24" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
