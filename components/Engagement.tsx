import React from 'react';
import { ENGAGEMENT_MODELS } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Check, Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';

export const Engagement: React.FC = () => {
  return (
    <section id="modelos" className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Formas de trabajar juntos
          </h2>
          <p className="text-muted-foreground">
            Nos adaptamos a la etapa de tu negocio para que puedas avanzar con una solución concreta o con un acompañamiento más continuo.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
          {ENGAGEMENT_MODELS.map((model, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <Card className={`h-full flex flex-col ${model.highlight ? 'border-primary shadow-md ring-1 ring-primary' : 'border-border'}`}>
                <CardHeader className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                     <div className="p-2 bg-secondary rounded-lg text-primary">
                        <Briefcase size={20} />
                     </div>
                     {model.highlight && <Badge>Más Solicitado</Badge>}
                  </div>
                  <CardTitle className="text-xl mb-2">{model.name}</CardTitle>
                  <CardDescription>
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow px-5 pb-5 sm:px-6 sm:pb-6">
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 p-0.5 rounded-full bg-primary/10 text-primary shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Button asChild className="w-full" variant={model.highlight ? 'default' : 'outline'}>
                    <a href="#contacto">{model.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
