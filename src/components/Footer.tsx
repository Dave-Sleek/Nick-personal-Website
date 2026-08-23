/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, ArrowRight, Youtube, Twitter, Linkedin } from 'lucide-react';
import { SITE_DATA } from '../data';
import Magnetic from './Magnetic';
import { Reveal } from './Reveal';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-32 md:py-60 overflow-hidden bg-[#0a0a0a]">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <span className="text-[30vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap">
          CONNECT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="flex flex-col items-center">
          <Reveal>
            <span className="block text-xs font-bold uppercase tracking-[0.6em] text-[#f5f5f5]/30 mb-12">
              Initiate Engagement
            </span>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] mb-16">
              Let's <br />
              Connect.
            </h2>
          </Reveal>
          
          <Reveal delay={0.6}>
            <p className="text-xl md:text-2xl text-[#f5f5f5]/50 font-light leading-relaxed mb-20 max-w-2xl mx-auto italic">
              "Interested in working together, discussing an opportunity, or learning more?"
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-8">
            <Magnetic strength={0.4}>
              <a 
                href={`mailto:${SITE_DATA.socials.email}`}
                className="group flex items-center gap-4 px-12 py-6 bg-[#f5f5f5] text-[#0a0a0a] rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                <Mail size={20} />
                Contact Nick
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </Magnetic>
            
            <Magnetic strength={0.4}>
              <a 
                href="#video"
                className="flex items-center gap-4 px-12 py-6 border border-[#f5f5f5]/20 text-[#f5f5f5] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#f5f5f5]/5 transition-colors"
              >
                Watch Video
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 bg-[#0a0a0a] border-t border-[#f5f5f5]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h3 className="text-xl font-bold tracking-tighter uppercase leading-none mb-4">
              {SITE_DATA.name}
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#f5f5f5]/20">
              {SITE_DATA.domain}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href={SITE_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={SITE_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors">
              <Twitter size={20} />
            </a>
            <a href={SITE_DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-[#f5f5f5]/40 hover:text-[#f5f5f5] transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/20">
            © {currentYear} {SITE_DATA.name}. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/20 hover:text-[#f5f5f5]/40 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/20 hover:text-[#f5f5f5]/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
