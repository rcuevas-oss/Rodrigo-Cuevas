import React from 'react';
import { PRICING_PLANS } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { Badge } from './ui/badge';

export const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Planes Flexibles
          </h2>
          <p className="text-muted-foreground">
            Escala tu infraestructura de automatización a medida que crece tu operación. Sin costos ocultos.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <Card className={`h-full flex flex-col ${plan.highlight ? 'border-primary shadow-md ring-1 ring-primary' : 'border-border'}`}>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                     <CardTitle className="text-xl">{plan.name}</CardTitle>
                     {plan.highlight && <Badge>Recomendado</Badge>}
                  </div>
                  <div className="flex items-baseline gap-1">
                     <span className="text-3xl font-bold">{plan.price}</span>
                     {plan.price !== 'Custom' && <span className="text-muted-foreground text-sm">/mes</span>}
                  </div>
                  <CardDescription className="pt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.highlight ? 'default' : 'outline'}>
                    {plan.cta}
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