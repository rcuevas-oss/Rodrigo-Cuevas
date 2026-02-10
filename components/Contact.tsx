import React from 'react';
import { Button } from './ui/button';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Empieza a automatizar hoy.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Únete a los equipos de ingeniería que están reduciendo su carga operativa con {`NexAI`}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button size="lg">Comenzar gratis</Button>
             <Button variant="outline" size="lg">Contactar Ventas</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};