import React from 'react';
import { HERO_CONTENT } from '../constants';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, FileText } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-[0.2]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <FadeIn delay={0}>
            <Badge variant="secondary" className="mb-6 px-3 py-1 font-normal text-muted-foreground border-border hover:bg-secondary">
              <span className="mr-2 inline-block w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              {HERO_CONTENT.badge}
            </Badge>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Especialistas en Automatización para PyMEs en Crecimiento
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto text-balance">
              Transformamos pequeñas y medianas empresas con tecnología de clase mundial. Infraestructura propia que se adapta a tu etapa actual y escala con tu operación.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="default" size="lg" className="w-full sm:w-auto font-semibold">
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <FileText className="mr-2 h-4 w-4" />
                {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};