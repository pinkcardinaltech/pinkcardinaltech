'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';

const NAV_LINKS = [
  { label: 'Ventures', href: '#ventures' },
  { label: 'Advisory', href: '#advisory' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-glass border-b border-white/8 shadow-xl shadow-black/20'
            : 'bg-transparent border-b border-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-cardinal-pink/50 transition-all">
                <Image
                  src="/images/logo.jpg"
                  alt="Pink Cardinal Technology Logo"
                  fill
                  className="object-cover"
                  priority
                  sizes="36px"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-sm font-bold text-white leading-tight tracking-tight">
                  Pink Cardinal
                </span>
                <span className="block text-xs text-slate-400 leading-tight tracking-widest uppercase">
                  Technology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setConsultOpen(true)}
                className="hidden sm:inline-flex"
              >
                Schedule Consultation
              </Button>
              <button
                className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/8 bg-slate-950/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-white/8 mt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setMobileOpen(false);
                      setConsultOpen(true);
                    }}
                    className="w-full justify-center"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultOpen}
        onClose={() => {
          setConsultOpen(false);
          setSubmitted(false);
          setFormState({ name: '', email: '', company: '', message: '' });
        }}
        title="Schedule a Consultation"
      >
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cardinal-pink/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-cardinal-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">We&apos;ll be in touch!</h3>
            <p className="text-slate-400 text-sm">
              Thank you for your inquiry. A Pink Cardinal advisor will reach out within one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-slate-400 mb-2">
              Tell us about your engagement—we respond within one business day.
            </p>
            {(
              [
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                { name: 'email', label: 'Work Email', type: 'email', placeholder: 'jane@company.com' },
                { name: 'company', label: 'Company / Organization', type: 'text', placeholder: 'Acme Corp' },
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
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full px-3 py-2.5 bg-slate-800 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/40 transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wide">
                How Can We Help?
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Briefly describe your project or advisory needs..."
                rows={3}
                required
                className="w-full px-3 py-2.5 bg-slate-800 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cardinal-pink/60 focus:ring-1 focus:ring-cardinal-pink/40 transition-colors resize-none"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="w-full justify-center mt-2">
              Send Inquiry
            </Button>
          </form>
        )}
      </Modal>
    </>
  );
}
