import React from 'react';
import { METHODOLOGY } from '../constants';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="como-trabajamos" className="py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl mb-6">
              Cómo <span className="text-primary italic">trabajamos</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Un proceso claro para ayudarte a avanzar sin complicarte con lenguaje técnico ni proyectos sobredimensionados.
            </p>
          </FadeIn>
        </div>

        <div className="relative rounded-[2.4rem] border border-[#dce4ed] bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] p-6 shadow-[0_24px_62px_rgba(70,85,98,0.06)] sm:p-8">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {METHODOLOGY.map((step, index) => (
              <FadeIn key={step.id} delay={index * 150}>
                <div className="relative flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-8 items-start group">
                  {/* Step Icon with circle mask */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary shadow-xl shadow-primary/5 shrink-0 transition-transform duration-500 group-hover:scale-110">
                    <step.icon size={28} className="text-primary" />
                  </div>

                  {/* Mobile header (Icon + Phase) */}
                  <div className="flex items-center gap-4 md:hidden mb-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon size={20} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-primary">
                      {step.id}
                    </span>
                  </div>

                  <Card className="flex-1 overflow-hidden rounded-[1.9rem] border-[#e1e9f0] bg-white shadow-[0_18px_46px_rgba(70,85,98,0.05)] transition-all duration-500 hover:border-primary/20">
                    <CardContent className="p-5 sm:p-6 md:p-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.03em] text-foreground">
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
                          {index === 0 && ["Revisión del negocio", "Prioridades claras", "Problemas concretos"].map(tag => (
                            <div key={tag} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary" />
                              {tag}
                            </div>
                          ))}
                          {index === 1 && ["Alcance definido", "Orden de trabajo", "Próximo paso claro"].map(tag => (
                            <div key={tag} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                              <CheckCircle2 size={12} className="text-primary" />
                              {tag}
                            </div>
                          ))}
                          {index === 2 && ["Implementación", "Ajustes", "Acompañamiento"].map(tag => (
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
