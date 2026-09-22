'use client';

import { motion } from 'framer-motion';
import { Code2, Layers } from 'lucide-react';

const PILLARS = [
  {
    icon: <Code2 size={18} />,
    label: 'We Build',
    body: 'Purposeful software for organizations with real operational complexity.',
  },
  {
    icon: <Layers size={18} />,
    label: 'We Advise',
    body: 'Senior technology guidance when the decisions matter.',
  },
] as const;

export function Contact() {
  return (
    <section id="work" className="pt-8 pb-20 sm:pt-12 sm:pb-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase mb-12"
        >
          What We Do
        </motion.p>

        {/* Two-column pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-2.5 mb-3 text-cardinal-red">
                {pillar.icon}
                <span className="text-sm font-semibold tracking-wide">
                  {pillar.label}
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="border-t border-slate-100 pt-12"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase mb-4">
            Let&apos;s Talk
          </p>
          <a
            href="mailto:hello@pinkcardinal.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl font-light text-slate-800 hover:text-cardinal-red transition-colors duration-200"
          >
            hello@pinkcardinal.tech
          </a>
        </motion.div>
      </div>
    </section>
  );
}
