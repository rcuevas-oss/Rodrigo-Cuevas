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
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
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
      
      {/* Premium AI Chat Widget */}
      <AIChat />
    </div>
  );
}

export default App;