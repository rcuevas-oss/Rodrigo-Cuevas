import React from 'react';
import { TESTIMONIALS } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

export const Testimonials: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Resultados Auditados
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="h-full bg-secondary/10 border-border">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-8">
                     <p className="text-4xl font-bold tracking-tight text-foreground mb-2">
                        {testimonial.metric}
                     </p>
                     <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Impacto medido</p>
                  </div>
                  <Separator className="mb-8" />
                  <blockquote className="text-lg text-foreground/80 mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <cite className="not-italic font-semibold text-foreground text-sm block">
                      {testimonial.author}
                    </cite>
                    <span className="text-muted-foreground text-sm">
                      {testimonial.role}, {testimonial.company}
                    </span>
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