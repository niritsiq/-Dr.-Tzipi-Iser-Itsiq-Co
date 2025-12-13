import React from 'react';
import { SiteContent } from '../types';

interface FooterProps {
  content: SiteContent['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
            <span className="font-serif text-white font-bold text-lg">Dr. Tzipi Iser Itsiq</span>
        </div>
        <div className="text-sm">
          {content.rights} &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;