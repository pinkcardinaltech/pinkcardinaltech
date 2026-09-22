'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled ? 'bg-glass' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo mark */}
          <div className="flex items-center gap-2.5">
            <div className="relative w-7 h-7 rounded overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Pink Cardinal Technology"
                fill
                className="object-cover"
                priority
                sizes="28px"
              />
            </div>
            <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
              Pink Cardinal Technology
            </span>
          </div>

          {/* Single CTA */}
          <a
            href="mailto:hello@pinkcardinal.tech"
            className="text-xs font-medium tracking-wide text-slate-400 hover:text-white transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
