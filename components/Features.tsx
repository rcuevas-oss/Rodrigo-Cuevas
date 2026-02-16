import React from 'react';
import { METHODOLOGY } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-muted/50 border-y border-border overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
              Metodología de <span className="text-primary italic">Despliegue</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Un proceso iterativo y seguro para integrar IA en infraestructura crítica sin interrumpir operaciones.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

          <div className="space-y-12">
            {METHODOLOGY.map((step, index) => (
              <FadeIn key={step.id} delay={index * 150}>
                <div className="relative flex flex-col md:flex-row gap-8 items-start group">
                  {/* Step Icon with circle mask */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary shadow-xl shadow-primary/5 shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <step.icon size={28} className="text-primary" />
                  </div>

                  {/* Mobile header (Icon + Phase) */}
                  <div className="flex items-center gap-4 md:hidden mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon size={20} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-primary">
                      {step.id}
                    </span>
                  </div>

                  <Card className="flex-1 bg-card/40 backdrop-blur-sm border-border shadow-2xl shadow-black/5 hover:border-primary/30 transition-all duration-500 rounded-3xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 border border-border px-2 py-0.5 rounded-md">
                            {step.id}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.content}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                          {index === 0 && ["Mapeo de Procesos", "Análisis de ROI", "Auditoría Técnica"].map(tag => (
                            <div key={tag} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary" />
                              {tag}
                            </div>
                          ))}
                          {index === 1 && ["Entorno Sandbox", "Simulación", "Arquitectura Cloud"].map(tag => (
                            <div key={tag} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary" />
                              {tag}
                            </div>
                          ))}
                          {index === 2 && ["Rollout Gradual", "QA & Soporte", "Documentación"].map(tag => (
                            <div key={tag} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary" />
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};