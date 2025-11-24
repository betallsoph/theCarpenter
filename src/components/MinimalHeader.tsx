'use client';

import { useEffect, useState } from 'react';

export default function MinimalHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <img
            src="/logo/kkk.png"
            alt="mộc nhà làm logo"
            className="w-16 h-16 rounded-xl object-cover transition-transform group-hover:scale-105"
          />
          <span className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            mộc nhà làm
          </span>
        </a>

        {/* CTA Button */}
        <a
          href="#contact"
          className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
            scrolled
              ? 'bg-sky-500 text-white hover:bg-sky-600'
              : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
          }`}
        >
          Liên hệ
        </a>
      </div>
    </header>
  );
}
