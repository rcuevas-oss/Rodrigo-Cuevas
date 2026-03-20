import React, { useState, useEffect } from 'react';
import { Palette } from 'lucide-react';
import SiteHeader from './components/SiteHeader';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AIChat } from './components/AIChat';
import { Services } from './components/Services';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { AutomationPlayground } from './components/AutomationPlayground';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Engagement } from './components/Engagement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'default' | 'emma'>('default');

  useEffect(() => {
    if (theme === 'emma') {
      document.documentElement.classList.add('theme-emma');
    } else {
      document.documentElement.classList.remove('theme-emma');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'emma' : 'default');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans transition-colors duration-500 selection:bg-primary/20 selection:text-foreground">
      <SiteHeader />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <Services />
        <EnterpriseDashboard />
        <AutomationPlayground />
        <Features />
        <TechStack />
        <Engagement />
        <Contact />
      </main>
      <Footer />
      
      {/* Theme Switcher Floating Button */}
      <button 
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center gap-2 bg-[#AAFF00] text-black hover:bg-[#9cf000] px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all outline-none"
        title="Cambiar diseño"
      >
        <Palette className="w-5 h-5 flex-shrink-0" />
        <span className="font-semibold text-sm whitespace-nowrap">{theme === 'default' ? 'Ver versión Emma' : 'Ver versión Original'}</span>
      </button>

      {/* Premium AI Chat Widget */}
      <AIChat />
    </div>
  );
}

export default App;