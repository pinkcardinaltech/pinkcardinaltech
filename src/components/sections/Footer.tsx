import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const FOOTER_LINKS = [
  {
    group: 'Ventures',
    links: [
      { label: 'Curbside & Utility Payments', href: '#ventures' },
      { label: '1-Tap MedPay', href: '#ventures' },
      { label: 'Route & Field Dispatch', href: '#ventures' },
    ],
  },
  {
    group: 'Advisory',
    links: [
      { label: 'ERP Modernization', href: '#advisory' },
      { label: 'Cloud Migration', href: '#advisory' },
      { label: 'Payment Architecture', href: '#advisory' },
      { label: 'Fractional Engineering', href: '#advisory' },
    ],
  },
  {
    group: 'Company',
    links: [
      { label: 'Our Philosophy', href: '#philosophy' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'pinkcardinal.tech', href: 'https://pinkcardinal.tech', external: true },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/6 pt-16 pb-8 overflow-hidden">
      {/* Subtle top gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cardinal-pink/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/logo.jpg"
                  alt="Pink Cardinal Technology"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-white leading-tight block">
                  Pink Cardinal
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">
                  Technology
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
              Modern software ventures &amp; strategic technology architecture
              advisory. Minneapolis – St. Paul, MN.
            </p>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.group}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {group.group}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ExternalLink size={10} className="flex-shrink-0" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © 2026 Pink Cardinal Technology LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span>pinkcardinal.tech</span>
            <span>·</span>
            <span>Minneapolis / St. Paul, MN</span>
            <span>·</span>
            <a
              href="mailto:hello@pinkcardinal.tech"
              className="hover:text-slate-400 transition-colors"
            >
              hello@pinkcardinal.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
