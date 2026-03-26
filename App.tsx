import React, { useState, useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AIChat } from './components/AIChat';
import { Services } from './components/Services';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { AutomationPlayground } from './components/AutomationPlayground';
import { AIAgentsSection } from './components/AIAgentsSection';
import BikeCommerceLanding from './components/BikeCommerceLanding';
import BikeThemesGallery from './components/BikeThemesGallery';
import { Features } from './components/Features';
import { FAQSection } from './components/FAQSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'default' | 'emma'>('default');
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isBikeLanding = pathname === '/tiendas-bicicletas';
  const isBikeThemesGallery = pathname === '/tiendas-bicicletas/temas' || pathname === '/tiendas-bicicletas/layouts';

  useEffect(() => {
    if (theme === 'emma') {
      document.documentElement.classList.add('theme-emma');
    } else {
      document.documentElement.classList.remove('theme-emma');
    }
  }, [theme]);

  useEffect(() => {
    document.title = isBikeThemesGallery
      ? 'NexAI | Layouts y bloques para tiendas de bicicletas'
      : isBikeLanding
        ? 'NexAI | Shopify y automatización para tiendas de bicicletas'
        : 'NexAI | Soluciones digitales para pymes en crecimiento';
  }, [isBikeLanding, isBikeThemesGallery]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'emma' : 'default');
  };

  if (isBikeLanding) {
    return <BikeCommerceLanding />;
  }

  if (isBikeThemesGallery) {
    return <BikeThemesGallery />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fb] font-sans text-foreground transition-colors duration-500 selection:bg-primary/20 selection:text-foreground">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <Services />
        <EnterpriseDashboard />
        <AutomationPlayground />
        <AIAgentsSection />
        <Features />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;
