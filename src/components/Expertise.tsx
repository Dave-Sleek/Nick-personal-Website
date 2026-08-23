/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

export default function Expertise() {
  return (
    <section id="focus" className="py-24 md:py-40 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <Reveal>
            <span className="block text-xs font-bold uppercase tracking-[0.5em] opacity-30 mb-6">
              Primary Capabilities
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter uppercase leading-none">
              Focus & <br />
              Expertise.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {SITE_DATA.expertise.map((item) => (
              <StaggerItem key={item.id}>
                <div className="group cursor-default">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-4xl font-playfair italic opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                      {item.id}
                    </span>
                    <div className="w-12 h-[1px] bg-[var(--border-muted)] mt-5 group-hover:w-20 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  
                  <p className="opacity-50 leading-relaxed font-light pr-8">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
