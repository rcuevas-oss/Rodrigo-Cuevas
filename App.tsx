import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AiAssistant } from './components/AiAssistant';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Engagement } from './components/Engagement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-brand-500/20 selection:text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AiAssistant />
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