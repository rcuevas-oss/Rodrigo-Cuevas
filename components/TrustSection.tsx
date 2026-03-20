import React from 'react';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const TRUST_FACTORS = [
  {
    title: "Sin lenguaje enredado",
    description: "Te explicamos cada solución de forma clara para que puedas tomar decisiones sin necesidad de ser técnico.",
    icon: ShieldCheck,
  },
  {
    title: "Soluciones útiles desde el inicio",
    description: "Empezamos por lo que realmente te quita tiempo o te genera desorden, sin proyectos innecesariamente grandes.",
    icon: Zap,
  },
  {
    title: "Tu negocio puede crecer con más orden",
    description: "Creamos herramientas que se adaptan a tu etapa actual y te permiten seguir avanzando sin depender de tareas manuales.",
    icon: TrendingUp,
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {TRUST_FACTORS.map((factor, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0 flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <factor.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};