import React from 'react';
import { SiteContent } from '../types';

interface HeroProps {
  content: SiteContent['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Modern Law Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in-up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            {content.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            {content.subtitle}
            </p>
            <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-white font-semibold py-4 px-10 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg uppercase tracking-wider text-sm"
            >
            {content.cta}
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;