import React from 'react';
import { SiteContent } from '../types';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactProps {
  content: SiteContent['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{content.title}</h2>
             <p className="text-lg text-gray-600 mb-12">{content.subtitle}</p>

             <div className="space-y-8">
               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-accent">
                     <MapPin size={20} />
                   </div>
                 </div>
                 <div className="ltr:ml-4 rtl:mr-4">
                   <h4 className="text-lg font-bold text-primary">{content.addressLabel}</h4>
                   <p className="text-gray-600 mt-1">
                     Weizman St 2, Tel Aviv-Yafo<br/>
                     Lipa Meir & Co., Israel
                   </p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-accent">
                     <Phone size={20} />
                   </div>
                 </div>
                 <div className="ltr:ml-4 rtl:mr-4">
                   <h4 className="text-lg font-bold text-primary">{content.phoneLabel}</h4>
                   <p className="text-gray-600 mt-1">+972-3-607-0630</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="flex-shrink-0">
                   <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-accent">
                     <Mail size={20} />
                   </div>
                 </div>
                 <div className="ltr:ml-4 rtl:mr-4">
                   <h4 className="text-lg font-bold text-primary">{content.emailLabel}</h4>
                   <p className="text-gray-600 mt-1">office@lipameir.co.il</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{content.form.name}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{content.form.email}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{content.form.subject}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{content.form.message}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="button" // Prevent submit for demo
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded transition-colors"
              >
                {content.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;