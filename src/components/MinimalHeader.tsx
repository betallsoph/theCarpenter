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
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            scrolled ? 'bg-sky-100' : 'bg-white/20 backdrop-blur-sm'
          }`}>
            <svg
              className={`w-6 h-6 transition-colors ${scrolled ? 'text-sky-500' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <span className={`text-xl font-bold transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            Mộc Việt
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
