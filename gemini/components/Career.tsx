import React from 'react';
import { SiteContent } from '../types';
import { ArrowRight } from 'lucide-react';

interface CareerProps {
  content: SiteContent['career'];
  isRTL: boolean;
}

const Career: React.FC<CareerProps> = ({ content, isRTL }) => {
  const ArrowIcon = isRTL ? 
    () => <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> : 
    () => <ArrowRight className="w-5 h-5 ml-2" />;

  return (
    <section id="career" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-700 pb-8">
            <div className="max-w-2xl">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
                <p className="text-gray-400 text-lg">{content.subtitle}</p>
            </div>
            <button className="mt-6 md:mt-0 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-sm font-medium transition-colors">
                {content.cta}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.openings.map((job, idx) => (
            <div key={idx} className="bg-primary-light/30 border border-gray-700 p-8 rounded hover:bg-primary-light/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-accent transition-colors">{job.title}</h3>
                <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded">{job.type}</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm">{job.description}</p>
              <div className="flex items-center text-sm font-medium text-gray-300">
                <span>{job.location}</span>
                <div className="flex-grow"></div>
                <span className="flex items-center text-accent cursor-pointer">
                  {isRTL ? 'לפרטים נוספים' : 'Learn More'}
                  <ArrowIcon />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;