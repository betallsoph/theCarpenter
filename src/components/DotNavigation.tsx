'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Trang chủ' },
  { id: 'about', label: 'Giới thiệu' },
  { id: 'products', label: 'Sản phẩm' },
  { id: 'contact', label: 'Liên hệ' },
];

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 justify-end"
            aria-label={section.label}
          >
            {/* Label - appears on hover */}
            <span className="text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded-full shadow-sm">
              {section.label}
            </span>
            {/* Dot */}
            <span
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === section.id
                  ? 'bg-sky-500 scale-125'
                  : 'bg-gray-300 hover:bg-sky-300'
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
}
