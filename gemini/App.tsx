import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Team from './components/Team';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  // Initialize state based on browser preference if available, default to 'he' for Israeli law firm
  const [lang, setLang] = useState<Language>('he');

  const content = CONTENT[lang];

  // Effect to update document direction (LTR/RTL) based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'he' : 'en'));
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${lang === 'he' ? 'rtl' : 'ltr'}`}>
      <Navigation content={content.nav} lang={lang} toggleLang={toggleLang} />
      
      <main className="flex-grow">
        <Hero content={content.hero} />
        <About content={content.about} />
        <Team content={content.team} />
        <Expertise content={content.expertise} />
        <Career content={content.career} isRTL={lang === 'he'} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;