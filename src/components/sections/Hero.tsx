'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl -translate-y-6 sm:-translate-y-10">
        {/* Logo — the splash centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] rounded-2xl overflow-hidden">
            <Image
              src="/images/logo.jpg"
              alt="Pink Cardinal Technology — geometric cardinal in flight"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 440px"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl sm:text-2xl font-light text-slate-700 tracking-tight mb-8 leading-snug"
        >
          Software ventures &amp; technology advisory.
        </motion.p>

        {/* Text CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-6 text-sm"
        >
          <button
            onClick={scrollToWork}
            className="text-slate-400 hover:text-slate-700 transition-colors tracking-wide"
          >
            Our Work ↓
          </button>
          <span className="text-slate-300">·</span>
          <a
            href="mailto:hello@pinkcardinal.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cardinal-red hover:text-cardinal-deep transition-colors tracking-wide font-medium"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
