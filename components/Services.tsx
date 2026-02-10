import React from 'react';
import { SERVICES } from '../constants';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { FadeIn } from './FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <Card className="h-full border-border hover:border-brand-500/50 transition-colors shadow-none hover:shadow-md">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 text-primary">
                    <service.icon size={20} strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px] font-normal text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
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