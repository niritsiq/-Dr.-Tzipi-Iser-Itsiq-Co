import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, SiteContent } from '../types';

interface NavigationProps {
  content: SiteContent['nav'];
  lang: Language;
  toggleLang: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ content, lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: content.home, href: "#hero" },
    { label: content.about, href: "#about" },
    { label: content.expertise, href: "#expertise" },
    { label: content.team, href: "#team" },
    { label: content.career, href: "#career" },
    { label: content.contact, href: "#contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-bold text-primary tracking-tight">
              Dr. Tzipi Iser Itsiq
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-light hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 rtl:space-x-reverse text-primary hover:text-accent border border-gray-300 px-3 py-1 rounded-full transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm font-bold">{lang === 'en' ? 'עב' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
             <button
              onClick={toggleLang}
              className="flex items-center space-x-1 rtl:space-x-reverse text-primary border border-gray-300 px-2 py-1 rounded-full"
            >
              <span className="text-xs font-bold">{lang === 'en' ? 'עב' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-3 text-base font-medium text-primary hover:bg-gray-50 hover:text-accent border-b border-gray-100 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;