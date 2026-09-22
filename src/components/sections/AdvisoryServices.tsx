'use client';

import { motion } from 'framer-motion';
import { Server, Cloud, CreditCard, Users, CheckCircle2 } from 'lucide-react';

interface Offering {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

const OFFERINGS: Offering[] = [
  {
    icon: <Server size={24} />,
    title: 'Legacy ERP Modernization',
    description:
      'Strategic modernization roadmaps for Navusoft, Soft-Pak, Epic, and custom enterprise platforms. We architect the bridge between legacy systems and modern cloud-native infrastructure.',
    deliverables: [
      'System integration architecture',
      'API gateway & event streaming design',
      'Phased migration roadmap',
    ],
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Serverless Migration',
    description:
      'End-to-end serverless migration on AWS, GCP, or Azure. Eliminate operational overhead, reduce infrastructure cost, and unlock auto-scaling for essential service workloads.',
    deliverables: [
      'Cloud architecture blueprints',
      'Infrastructure-as-code templates',
      'Cost & performance modeling',
    ],
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Payment Tokenization Architecture',
    description:
      'High-volume PCI-DSS compliant tokenization design for healthcare, municipal, and commercial payment flows. From card-present to SMS-triggered card recovery at scale.',
    deliverables: [
      'PCI-DSS scope reduction design',
      'Token vault & network integration',
      'HSA/FSA & digital wallet support',
    ],
  },
  {
    icon: <Users size={24} />,
    title: 'Fractional Principal Engineering',
    description:
      'Senior engineering leadership without the full-time commitment. Embedded advisory for mid-market firms, private equity portcos, and healthcare operators needing CTO-caliber guidance.',
    deliverables: [
      'Technical due diligence & audits',
      'Engineering team structure & hiring',
      'Architecture review & standards',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function AdvisoryServices() {
  return (
    <section id="advisory" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.4) 30%, rgba(15,23,42,0.4) 70%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cardinal-gold/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cardinal-gold/10 border border-cardinal-gold/25 text-cardinal-amber text-xs font-medium tracking-wide uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-cardinal-gold" />
            Pillar II — Technology Architecture Advisory
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Senior Architecture{' '}
            <span className="text-gradient-cardinal">Leadership</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            For mid-market firms, private equity portcos, and healthcare & essential
            service operators who need executive technology leadership without the
            full-time overhead.
          </p>
        </motion.div>

        {/* Offering cards — 2-column grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {OFFERINGS.map((offering, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="group bg-glass-light rounded-2xl p-6 border border-white/8 hover:border-cardinal-gold/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cardinal-gold/12 text-cardinal-gold flex items-center justify-center">
                  {offering.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {offering.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {offering.description}
                  </p>
                  <ul className="space-y-1.5">
                    {offering.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={12} className="text-cardinal-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-cardinal-gold/10 via-cardinal-amber/8 to-cardinal-gold/10 border border-cardinal-gold/20 p-8 text-center"
        >
          <p className="text-sm text-cardinal-amber font-medium tracking-wide uppercase mb-2">
            Ready to modernize?
          </p>
          <h3 className="text-2xl font-bold text-white mb-4">
            Engage Pink Cardinal Architecture Advisory
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Fixed-scope engagements, fractional retainers, or full technical due
            diligence. We fit your timeline and budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
