import React from 'react';
import { ENGAGEMENT_MODELS } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Check, Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';

export const Engagement: React.FC = () => {
  return (
    <section id="modelos" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Modelos de Colaboración
          </h2>
          <p className="text-muted-foreground">
            Nos adaptamos a las necesidades de tu empresa. Ya sea un proyecto puntual o un equipo extendido, tenemos el modelo adecuado.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {ENGAGEMENT_MODELS.map((model, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <Card className={`h-full flex flex-col ${model.highlight ? 'border-primary shadow-md ring-1 ring-primary' : 'border-border'}`}>
                <CardHeader>
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
                <CardContent className="flex-grow">
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
                <CardFooter>
                  <Button className="w-full" variant={model.highlight ? 'default' : 'outline'}>
                    {model.cta}
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