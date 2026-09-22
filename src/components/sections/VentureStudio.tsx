'use client';

import { motion } from 'framer-motion';
import {
  CreditCard,
  Stethoscope,
  Truck,
  ArrowRight,
  Smartphone,
  Shield,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface Product {
  id: string;
  badge: string;
  badgeVariant: 'pink' | 'gold' | 'coral';
  icon: React.ReactNode;
  title: string;
  description: string;
  features: Feature[];
  accentColor: string;
  glowColor: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'curbside',
    badge: 'Municipal & Waste',
    badgeVariant: 'pink',
    icon: <CreditCard size={28} />,
    title: 'Curbside & Utility Payments',
    description:
      '1-Tap Apple Pay SMS card recovery overlaying legacy ERPs — Navusoft, Soft-Pak, and beyond. Residents pay outstanding balances in seconds via text, no app install required.',
    features: [
      { icon: <Smartphone size={14} />, text: '1-Tap Apple Pay & Google Pay via SMS' },
      { icon: <Shield size={14} />, text: 'PCI-DSS tokenized card recovery' },
      { icon: <Zap size={14} />, text: 'Native ERP overlay — zero migration' },
    ],
    accentColor: 'cardinal-pink',
    glowColor: 'rgba(225, 29, 116, 0.15)',
  },
  {
    id: 'medpay',
    badge: '1-Tap MedPay',
    badgeVariant: 'coral',
    icon: <Stethoscope size={28} />,
    title: '1-Tap MedPay',
    description:
      'Post-insurance patient copay recovery with native HSA/FSA health card support for pediatric clinics, surgical centers, and specialty practices. Reduce AR days by up to 60%.',
    features: [
      { icon: <Shield size={14} />, text: 'HIPAA-compliant payment messaging' },
      { icon: <CreditCard size={14} />, text: 'Native HSA / FSA card acceptance' },
      { icon: <Zap size={14} />, text: 'Automated post-EOB billing triggers' },
    ],
    accentColor: 'cardinal-coral',
    glowColor: 'rgba(244, 114, 182, 0.12)',
  },
  {
    id: 'dispatch',
    badge: 'Route & Field',
    badgeVariant: 'gold',
    icon: <Truck size={28} />,
    title: 'Route & Field Dispatch',
    description:
      'Live winter snow plowing proximity alerts and SafeRoute K-12 school transit tracking. Real-time GPS dispatch with resident-facing ETAs and automated notification workflows.',
    features: [
      { icon: <Zap size={14} />, text: 'Live GPS proximity push alerts' },
      { icon: <Shield size={14} />, text: 'K-12 SafeRoute student tracking' },
      { icon: <Smartphone size={14} />, text: 'Automated dispatch notifications' },
    ],
    accentColor: 'cardinal-gold',
    glowColor: 'rgba(245, 158, 11, 0.12)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function VentureStudio() {
  return (
    <section id="ventures" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-cardinal-pink/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cardinal-pink/10 border border-cardinal-pink/25 text-cardinal-coral text-xs font-medium tracking-wide uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-cardinal-pink" />
            Pillar I — Venture Software Studio
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Software We Build &amp;{' '}
            <span className="text-gradient-cardinal">Operate</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            High-converting 1-tap mobile self-service portals that overlay legacy
            ERP systems for essential services — zero migration required, live in
            days.
          </p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-glass-light rounded-2xl p-6 border border-white/8 hover:border-white/16 transition-all duration-300 cursor-default overflow-hidden"
              style={{
                boxShadow: `0 0 0 0 ${product.glowColor}`,
              }}
              onHoverStart={(e) => {
                const target = e.target as HTMLElement;
                const card = target.closest('.group') as HTMLElement;
                if (card) card.style.boxShadow = `0 8px 40px ${product.glowColor}`;
              }}
              onHoverEnd={(e) => {
                const target = e.target as HTMLElement;
                const card = target.closest('.group') as HTMLElement;
                if (card) card.style.boxShadow = `0 0 0 0 ${product.glowColor}`;
              }}
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 text-${product.accentColor}`}
                style={{ background: product.glowColor }}
              >
                {product.icon}
              </div>

              {/* Badge */}
              <div className="mb-3">
                <Badge variant={product.badgeVariant}>{product.badge}</Badge>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className={`text-${product.accentColor} flex-shrink-0`}>
                      {feat.icon}
                    </span>
                    {feat.text}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <button className={`flex items-center gap-1.5 text-sm font-medium text-${product.accentColor} group-hover:gap-2.5 transition-all`}>
                Learn more <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
