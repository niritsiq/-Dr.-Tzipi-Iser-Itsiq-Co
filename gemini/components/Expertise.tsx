import React from 'react';
import * as Icons from 'lucide-react';
import { SiteContent, ExpertiseItem } from '../types';

interface ExpertiseProps {
  content: SiteContent['expertise'];
}

// Dynamic Icon Component
const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (Icons as any)[name];
  return LucideIcon ? <LucideIcon className={className} /> : <Icons.HelpCircle className={className} />;
};

const Expertise: React.FC<ExpertiseProps> = ({ content }) => {
  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{content.title}</h2>
          <p className="text-lg text-gray-600">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-accent group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6">
                <IconRenderer name={item.iconName} className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;