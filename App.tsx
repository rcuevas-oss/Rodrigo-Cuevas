import React from 'react';
import SiteHeader from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { AutomationPlayground } from './components/AutomationPlayground';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Engagement } from './components/Engagement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-brand-500/20 selection:text-foreground">
      <SiteHeader />
      <main className="flex-grow">
        <Hero />
        <Services />
        <EnterpriseDashboard />
        <AutomationPlayground />
        <Features />
        <Testimonials />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;