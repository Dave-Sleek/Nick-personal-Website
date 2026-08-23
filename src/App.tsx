/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { SITE_DATA } from './data';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Expertise from './components/Expertise';
import Ventures from './components/Ventures';
import Media from './components/Media';
import Credibility from './components/Credibility';
import ContactCTA, { Footer } from './components/Footer';

// A subtle custom cursor for desktop
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#f5f5f5]/30 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(245, 245, 245, 0.1)" : "rgba(245, 245, 245, 0)",
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-[#f5f5f5] rounded-full" />
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time for the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": SITE_DATA.name,
    "jobTitle": SITE_DATA.title,
    "url": `https://${SITE_DATA.domain}`,
    "sameAs": [
      SITE_DATA.socials.linkedin,
      SITE_DATA.socials.twitter,
      SITE_DATA.socials.youtube
    ],
    "description": SITE_DATA.bio,
    "knowsAbout": SITE_DATA.expertise.map(item => item.title)
  };

  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      <Preloader isLoading={isLoading} />
      <CustomCursor />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#f5f5f5] z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <VideoSection />
        <About />
        <Expertise />
        <Ventures />
        <Media />
        <Credibility />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
