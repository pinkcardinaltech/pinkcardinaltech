'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  engagementType: string;
  message: string;
}

const ENGAGEMENT_TYPES = [
  'SaaS Product Pilot (Curbside / MedPay / Dispatch)',
  'Architecture Advisory Retainer',
  'Technical Due Diligence',
  'Fractional Principal Engineering',
  'Other / General Inquiry',
] as const;

const CONTACT_OPTIONS = [
  {
    icon: <Calendar size={20} />,
    title: 'Schedule a Call',
    description: 'Book a 30-minute discovery call directly on our calendar.',
    action: 'Book Time',
    color: 'cardinal-pink',
  },
  {
    icon: <MessageSquare size={20} />,
    title: 'Send a Message',
    description: 'Describe your engagement — we respond within one business day.',
    action: null,
    color: 'cardinal-gold',
  },
  {
    icon: <Building2 size={20} />,
    title: 'Enterprise Inquiry',
    description: 'Large-scale modernization or multi-product deployments? Let\'s talk scope.',
    action: null,
    color: 'cardinal-coral',
  },
];

export function Contact() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    engagementType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow background */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-cardinal-pink/10 to-transparent pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cardinal-pink/10 border border-cardinal-pink/25 text-cardinal-coral text-xs font-medium tracking-wide uppercase mb-4">
            <span className="w-1 h-1 rounded-full bg-cardinal-pink" />
            Executive Inquiry
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Start a Conversation
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Whether you&apos;re evaluating a SaaS pilot, need architecture advisory, or
            want to explore a fractional engagement — we&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact options */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_OPTIONS.map((opt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-glass-light border border-white/8 hover:border-white/16 transition-colors"
              >
                <div className={`text-${opt.color} mb-3`}>{opt.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{opt.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {opt.description}
                </p>
                {opt.action && (
                  <button className={`text-xs font-medium text-${opt.color} hover:underline`}>
                    {opt.action} →
                  </button>
                )}
              </div>
            ))}

            {/* Location blurb */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-slate-300 font-medium block mb-1">
                  Pink Cardinal Technology LLC
                </span>
                Minneapolis – St. Paul, MN<br />
                <a
                  href="mailto:hello@pinkcardinal.tech"
                  className="text-cardinal-coral hover:text-cardinal-pink transition-colors"
                >
                  hello@pinkcardinal.tech
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-glass-light rounded-2xl border border-white/8 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cardinal-pink/15 flex items-center justify-center">
                    <Send size={32} className="text-cardinal-pink" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                  <p className="text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. A Pink Cardinal advisor will follow up
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(
                      [
                        { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                        { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@company.com' },
                      ] as const
                    ).map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formState[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/30 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                      Type of Engagement
                    </label>
                    <select
                      name="engagementType"
                      value={formState.engagementType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/30 transition-colors appearance-none"
                    >
                      <option value="" disabled className="text-slate-600">
                        Select engagement type…
                      </option>
                      {ENGAGEMENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                      How Can We Help?
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Describe your project, challenges, or advisory needs…"
                      rows={4}
                      required
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/30 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    className="w-full justify-center"
                  >
                    <Send size={16} />
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
