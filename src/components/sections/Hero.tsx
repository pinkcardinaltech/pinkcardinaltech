'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const FADE_UP = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Layered background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-cardinal-pink/12 via-cardinal-magenta/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cardinal-gold/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cardinal-coral/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,250,252,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <motion.div
          {...FADE_UP}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cardinal-pink/10 border border-cardinal-pink/25 text-cardinal-coral text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cardinal-pink animate-pulse" />
          Minneapolis – St. Paul, MN · pinkcardinal.tech
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...FADE_UP}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Modern Software Ventures{' '}
          <span className="block text-gradient-cardinal">&amp; Strategic Technology Architecture.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...FADE_UP}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10"
        >
          We build high-converting mobile self-service systems for essential
          industries—and provide executive technology architecture advisory for
          enterprise modernization.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...FADE_UP}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('ventures')}
            className="group w-full sm:w-auto"
          >
            Explore Software Ventures
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollTo('advisory')}
            className="w-full sm:w-auto"
          >
            Advisory Services
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
