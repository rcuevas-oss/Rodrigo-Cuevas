import React from 'react';
import { METHODOLOGY } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';

export const Features: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Metodología de Despliegue
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso iterativo y seguro para integrar IA en infraestructura crítica sin interrumpir operaciones.
          </p>
        </FadeIn>

        <div className="grid gap-6">
          {METHODOLOGY.map((step, index) => (
            <FadeIn key={step.id} delay={index * 100}>
              <Card className="border-border shadow-sm">
                <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
                   <div className="shrink-0">
                      <span className="text-sm font-mono font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                         {step.id}
                      </span>
                   </div>
                   <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title.split(' ').slice(1).join(' ')} 
                        {/* Removing the number from title since we display ID separately, or keep as is if preferred */}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.content}
                      </p>
                   </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};