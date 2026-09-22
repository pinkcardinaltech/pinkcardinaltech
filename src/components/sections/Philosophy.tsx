'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Heart } from 'lucide-react';

const PILLARS = [
  {
    icon: <Compass size={20} />,
    title: 'Cardinal — Foundational Principles',
    body: 'Cardinal directions have guided explorers for centuries. Cardinal principles anchor engineering excellence — clean interfaces, deterministic systems, and zero-compromise on security. We build on bedrock, not trends.',
    color: 'text-cardinal-pink',
    bg: 'bg-cardinal-pink/10',
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Pink — Rare & Transformative',
    body: 'A pink cardinal exists in nature — an ultra-rare genetic marvel. It\'s our unicorn metaphor: real, not mythological. We pursue the uncommon intersection of deep technical rigor and human-centered design that most firms never reach.',
    color: 'text-cardinal-coral',
    bg: 'bg-cardinal-coral/10',
  },
  {
    icon: <Heart size={20} />,
    title: 'Family — Purpose-Grounded Work',
    body: 'This company was named with daughters in mind. Pink for the girls who\'ll inherit the companies we modernize, the systems we secure, and the technology we build to serve communities. Purpose isn\'t a marketing word here — it\'s the foundation.',
    color: 'text-cardinal-gold',
    bg: 'bg-cardinal-gold/10',
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-cardinal-glow opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Logo + visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center lg:items-start"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cardinal-pink/20 via-cardinal-coral/10 to-cardinal-gold/15 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/logo.jpg"
                  alt="Pink Cardinal Technology — Origami geometric cardinal in upward flight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 320px"
                />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="max-w-sm text-center lg:text-left">
              <p className="text-xl font-display italic text-slate-300 leading-relaxed mb-3">
                &ldquo;Build an agent workplace, not a prompt library. Judgment stays human.&rdquo;
              </p>
              <cite className="text-sm text-slate-500 not-italic">
                — Pink Cardinal Technology Company Philosophy
              </cite>
            </blockquote>
          </motion.div>

          {/* Right — Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cardinal-pink/10 border border-cardinal-pink/25 text-cardinal-coral text-xs font-medium tracking-wide uppercase mb-4">
                <span className="w-1 h-1 rounded-full bg-cardinal-pink" />
                Our Identity
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Why{' '}
                <span className="text-gradient-cardinal">Pink Cardinal?</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                The name isn&apos;t a metaphor — it&apos;s a worldview. Every word carries
                meaning, and every product we ship carries this identity.
              </p>
            </motion.div>

            <div className="space-y-5">
              {PILLARS.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl bg-glass-light border border-white/6 hover:border-white/12 transition-colors"
                >
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center`}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
