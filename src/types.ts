/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
}

export interface VentureItem {
  name: string;
  description: string;
  category: string;
  link?: string;
  status?: string;
}

export interface MediaItem {
  id: string;
  type: 'video' | 'article' | 'interview';
  title: string;
  url: string;
  thumbnail?: string;
}

export interface SiteData {
  name: string;
  domain: string;
  title: string;
  bio: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  videoProfile: {
    title: string;
    description: string;
    youtubeId: string;
  };
  about: {
    statement: string;
    details: string;
  };
  expertise: ExpertiseItem[];
  ventures: VentureItem[];
  credibility: {
    title: string;
    items: {
      year: string;
      role: string;
      company: string;
    }[];
  };
  socials: {
    linkedin: string;
    twitter: string;
    youtube: string;
    email: string;
  };
}
