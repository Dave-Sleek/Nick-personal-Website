/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { SITE_DATA } from '../data';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Brand Name */}
            <div className="overflow-hidden mb-4">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="block text-2xl font-bold tracking-tighter uppercase"
              >
                {SITE_DATA.name}
              </motion.span>
            </div>

            {/* Progress Track */}
            <div className="w-48 h-[1px] bg-[#f5f5f5]/10 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute inset-0 bg-[#f5f5f5]"
              />
            </div>

            {/* Subtle Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-[10px] font-bold uppercase tracking-[0.6em] text-[#f5f5f5]/20"
            >
              Initializing Experience
            </motion.span>
          </div>

          {/* Background Decorative Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
            <motion.span 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="text-[40vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap"
            >
              {SITE_DATA.name.split(' ')[0]}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
