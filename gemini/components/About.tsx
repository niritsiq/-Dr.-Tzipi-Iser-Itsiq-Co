import React from 'react';
import { SiteContent } from '../types';

interface AboutProps {
  content: SiteContent['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side - Decorative Abstract */}
          <div className="relative h-full min-h-[400px] hidden lg:block">
             <div className="absolute inset-0 bg-gray-100 rounded-lg transform rotate-3 scale-95 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
               alt="Legal Scales" 
               className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl"
             />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-2">{content.subtitle}</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">{content.title}</h3>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
              {Array.isArray(content.body) 
                ? content.body.map((p, idx) => <p key={idx}>{p}</p>)
                : <p>{content.body}</p>
              }
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-8">
              {content.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-start">
                  <div className="text-3xl font-bold text-accent font-serif mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;