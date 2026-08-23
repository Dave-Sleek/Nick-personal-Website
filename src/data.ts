/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SiteData } from './types';

export const SITE_DATA: SiteData = {
  name: "Nick Perzichilli",
  domain: "NickPerzichilli.com",
  title: "Entrepreneur, Technology Strategist, Builder",
  bio: "Building businesses, technology, and systems at the intersection of innovation and opportunity.",
  hero: {
    headline: "Entrepreneur. Technology Strategist. Builder.",
    subheadline: "Building businesses, technology, and systems at the intersection of innovation and opportunity.",
    ctaPrimary: "Watch Video Profile",
    ctaSecondary: "Explore My Work"
  },
  videoProfile: {
    title: "VIDEO PROFILE",
    description: "Get to know Nick Perzichilli",
    youtubeId: "Y566P9uFbLQ"
  },
  about: {
    statement: "Nick Perzichilli is an entrepreneur and business professional focused on building businesses, technology-driven opportunities, and scalable systems.",
    details: "With a focus on long-term value creation, Nick operates at the nexus of strategic development and technological implementation. His approach combines entrepreneurial grit with a sophisticated understanding of modern technology stacks and business ecosystems."
  },
  expertise: [
    {
      id: "01",
      title: "ENTREPRENEURSHIP",
      description: "Developing and scaling high-growth ventures from concept to market leadership."
    },
    {
      id: "02",
      title: "TECHNOLOGY",
      description: "Implementing advanced technical architectures to solve complex business challenges."
    },
    {
      id: "03",
      title: "ARTIFICIAL INTELLIGENCE",
      description: "Leveraging generative models and machine learning to drive operational efficiency."
    },
    {
      id: "04",
      title: "BUSINESS DEVELOPMENT",
      description: "Forging strategic partnerships and identifying untapped market opportunities."
    },
    {
      id: "05",
      title: "STRATEGY",
      description: "Crafting comprehensive roadmaps for organizational growth and technological adaptation."
    },
    {
      id: "06",
      title: "DIGITAL INNOVATION",
      description: "Transforming traditional industries through disruptive digital methodologies."
    }
  ],
  ventures: [
    {
      name: "PROSPER",
      category: "Professional Ecosystem / Platform",
      description: "A comprehensive platform designed to empower professionals and facilitate high-level networking and growth.",
      status: "Active"
    },
    {
      name: "SWITCH",
      category: "Financial Technology / Business Initiative",
      description: "Innovative financial technology solutions aimed at streamlining business transactions and financial management.",
      status: "Development"
    },
    {
      name: "XLTV",
      category: "Business / Media Ecosystem",
      description: "A dynamic media platform focused on business insights, entrepreneurship, and professional storytelling.",
      status: "Active"
    }
  ],
  credibility: {
    title: "EXPERIENCE & CREDIBILITY",
    items: [
      {
        year: "Current",
        role: "Founder & Strategist",
        company: "Venture Portfolio"
      },
      {
        year: "2020 - 2024",
        role: "Executive Advisor",
        company: "Digital Transformation Initiatives"
      },
      {
        year: "2015 - 2020",
        role: "Technology Lead",
        company: "Strategic Development Group"
      }
    ]
  },
  socials: {
    linkedin: "https://linkedin.com/in/nickperzichilli",
    twitter: "https://twitter.com/nickperzichilli",
    youtube: "https://youtube.com/@nickperzichilli",
    email: "contact@nickperzichilli.com"
  }
};

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Focus", href: "#focus" },
  { label: "Ventures", href: "#ventures" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" }
];
