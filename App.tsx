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
import { Features } from './components/Features';
import { FAQSection } from './components/FAQSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { applySeoForPath } from './lib/seo';
import { normalizePathname } from './seo.config.js';

type AppTheme = 'default' | 'emma';

const THEME_STORAGE_KEY = 'la-refactoria-theme';
const LEGACY_BIKE_PATHS = new Set(['/tiendas-bicicletas/temas', '/tiendas-bicicletas/layouts']);

const readStoredTheme = (): AppTheme => {
  if (typeof window === 'undefined') {
    return 'default';
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === 'emma' ? 'emma' : 'default';
};

function App() {
  const [theme, setTheme] = useState<AppTheme>(() => readStoredTheme());
  const rawPathname = normalizePathname(window.location.pathname);
  const pathname = LEGACY_BIKE_PATHS.has(rawPathname) ? '/tiendas-bicicletas' : rawPathname;
  const isBikeLanding = pathname === '/tiendas-bicicletas';

  useEffect(() => {
    if (theme === 'emma') {
      document.documentElement.classList.add('theme-emma');
    } else {
      document.documentElement.classList.remove('theme-emma');
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (rawPathname !== pathname) {
      window.history.replaceState(window.history.state, '', pathname);
    }
  }, [pathname, rawPathname]);

  useEffect(() => {
    applySeoForPath(pathname);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'emma' : 'default');
  };

  if (isBikeLanding) {
    return <BikeCommerceLanding theme={theme} onToggleTheme={toggleTheme} />;
  }

  return (
    <div className="home-route-root min-h-screen w-full overflow-x-hidden flex flex-col bg-[linear-gradient(180deg,#f8fbfd_0%,#eef3f7_26%,#f7fafc_56%,#eef3f7_100%)] font-sans text-foreground transition-colors duration-500 selection:bg-primary/20 selection:text-foreground">
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-grow w-full">
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
