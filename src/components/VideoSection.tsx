/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SITE_DATA } from '../data';
import { Reveal } from './Reveal';

export default function VideoSection() {
  return (
    <section id="video" className="py-24 md:py-40 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <div>
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.5em] text-[#f5f5f5]/30 mb-4">
                Featured Media
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="text-4xl md:text-7xl font-medium tracking-tighter uppercase leading-none">
                {SITE_DATA.videoProfile.title}
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.6}>
            <p className="text-[#f5f5f5]/50 max-w-sm text-right font-light italic">
              "{SITE_DATA.videoProfile.description}"
            </p>
          </Reveal>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group aspect-video w-full overflow-hidden rounded-2xl md:rounded-[40px] bg-[#1a1a1a] shadow-2xl"
        >
          <iframe
            className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
            src={`https://www.youtube.com/embed/${SITE_DATA.videoProfile.youtubeId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
            title="Nick Perzichilli Video Profile"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Custom Overlay for premium feel before play */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a0a0a]/60 to-transparent flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full border border-[#f5f5f5]/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <Play fill="#f5f5f5" size={32} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#f5f5f5]/80">
                WATCH VIDEO
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
