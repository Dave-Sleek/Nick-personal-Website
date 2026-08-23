/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Youtube, ExternalLink, FileText } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './Reveal';

const MEDIA_ITEMS = [
  {
    type: 'youtube',
    title: 'Professional Profile: The Entrepreneurial Journey',
    date: '2024',
    icon: <Youtube size={20} />,
    link: '#'
  },
  {
    type: 'article',
    title: 'The Intersection of AI and Business Strategy',
    date: '2024',
    icon: <FileText size={20} />,
    link: '#'
  },
  {
    type: 'interview',
    title: 'Strategic Leadership in the Digital Age',
    date: '2023',
    icon: <ExternalLink size={20} />,
    link: '#'
  }
];

export default function Media() {
  return (
    <section id="media" className="py-24 md:py-40 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div>
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.5em] text-[#f5f5f5]/30 mb-6">
                Publications & Press
              </span>
            </Reveal>
            <Reveal delay={0.4}>
              <h2 className="text-4xl md:text-7xl font-medium tracking-tighter uppercase">
                Media & Insights.
              </h2>
            </Reveal>
          </div>
        </div>

        <StaggerContainer>
          <div className="grid md:grid-cols-3 gap-8">
            {MEDIA_ITEMS.map((item, index) => (
              <StaggerItem key={index}>
                <a
                  href={item.link}
                  className="group block p-10 bg-[#0f0f0f] border border-[#f5f5f5]/5 rounded-3xl hover:bg-[#1a1a1a] transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-3 bg-[#f5f5f5]/5 rounded-xl text-[#f5f5f5]/40 group-hover:text-[#f5f5f5] transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5f5f5]/20">
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold uppercase tracking-tight leading-tight mb-8">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5f5f5]/30 group-hover:text-[#f5f5f5] transition-colors">
                    View Resource <ArrowRightIcon />
                  </div>
                </a>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
