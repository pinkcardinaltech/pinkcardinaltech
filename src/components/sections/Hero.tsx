'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Very subtle radial vignette — dark, not colorful */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(15,23,42,0) 0%, rgba(2,6,23,0.6) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        {/* Logo — the splash centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-white/8 shadow-2xl">
            <Image
              src="/images/logo.jpg"
              alt="Pink Cardinal Technology — geometric cardinal in flight"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl font-light text-slate-200 tracking-tight mb-8 leading-snug"
        >
          Software ventures &amp; architecture advisory.
        </motion.p>

        {/* Text CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-6 text-sm"
        >
          <button
            onClick={scrollToWork}
            className="text-slate-500 hover:text-slate-200 transition-colors tracking-wide"
          >
            Our Work ↓
          </button>
          <span className="text-slate-700">·</span>
          <a
            href="mailto:hello@pinkcardinal.tech"
            className="text-cardinal-red hover:text-cardinal-muted transition-colors tracking-wide font-medium"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
