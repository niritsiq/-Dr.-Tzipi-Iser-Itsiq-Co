import React from 'react';
import { SiteContent } from '../types';

interface TeamProps {
  content: SiteContent['team'];
}

const Team: React.FC<TeamProps> = ({ content }) => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{content.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.members.map((member, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-6 rounded-lg">
              <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-square relative overflow-hidden rounded-md shadow-md shrink-0">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback if the specific image URL fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-2xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;