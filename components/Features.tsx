import React from 'react';
import { METHODOLOGY } from '../constants';
import { FadeIn } from './FadeIn';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Sparkles } from 'lucide-react';

const methodologySignals = [
  ['Revisión del negocio', 'Prioridades claras', 'Problemas concretos'],
  ['Alcance definido', 'Orden de trabajo', 'Próximo paso claro'],
  ['Implementación', 'Ajustes', 'Acompañamiento'],
];

export const Features: React.FC = () => {
  return (
    <section
      id="como-trabajamos"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef3f7_0%,#f8fbfd_48%,#eef3f7_100%)] py-16 sm:py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 16%, rgba(142,166,255,0.13), transparent 22%), radial-gradient(circle at 84% 20%, rgba(126,224,255,0.14), transparent 18%), radial-gradient(circle at 50% 100%, rgba(199,255,99,0.10), transparent 24%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-end lg:gap-8">
          <FadeIn>
            <div>
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#d7e1e9] bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-[0_14px_30px_rgba(70,85,98,0.05)]"
              >
                Cómo trabajamos
              </Badge>
              <h2 className="max-w-4xl text-[2.75rem] font-semibold tracking-[-0.07em] text-foreground sm:text-5xl lg:text-[4.2rem]">
                Un proceso claro para avanzar <span className="italic text-[#64748b]">sin sobredimensionar</span> el proyecto
              </h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#60707e] sm:text-lg">
                Te guiamos con una secuencia simple: entender bien el problema, aterrizar una solución realista y ejecutar con acompañamiento.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.85rem] border border-[#d8e1e8] bg-[#111827] p-5 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Nuestra forma</p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.04em] sm:text-[1.52rem]">
                  Menos humo, más diagnóstico, decisiones claras y ejecución útil.
                </h3>
              </div>

              <div className="rounded-[1.85rem] border border-[#d8e1e8] bg-white/88 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.07)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">Lo que cuidamos</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {['claridad', 'ritmo', 'acompañamiento'].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#dce4ea] bg-[#f6f9fb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[1.02rem] font-semibold tracking-[-0.03em] text-[#111827]">
                  La meta es que sepas qué sigue, por qué conviene y cómo se implementa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[2.3rem] border border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,249,252,0.96))] p-5 shadow-[0_28px_80px_rgba(70,85,98,0.08)] sm:rounded-[2.8rem] sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(142,166,255,0.42),transparent)]" />
          <div className="pointer-events-none absolute left-[2.45rem] top-12 bottom-12 hidden w-px bg-[linear-gradient(180deg,rgba(17,24,39,0.18),rgba(142,166,255,0.22),transparent)] md:block" />

          <div className="space-y-6 sm:space-y-7">
            {METHODOLOGY.map((step, index) => (
              <FadeIn key={step.id} delay={index * 140}>
                <div className="relative grid gap-4 md:grid-cols-[auto_1fr] md:gap-6">
                  <div className="relative z-10 hidden md:flex">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#1f2937] bg-white text-[#111827] shadow-[0_18px_40px_rgba(17,24,39,0.08)]">
                      <step.icon size={28} />
                    </div>
                  </div>

                  <Card className="overflow-hidden rounded-[1.9rem] border-[#dde5ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,251,253,0.94))] shadow-[0_18px_46px_rgba(70,85,98,0.05)]">
                    <CardContent className="p-5 sm:p-6 md:p-7">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3 md:hidden">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff4f8] text-[#111827] shadow-[0_10px_24px_rgba(70,85,98,0.05)]">
                              <step.icon size={20} />
                            </div>
                            <div className="rounded-full border border-[#dde5eb] bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                              {step.id}
                            </div>
                          </div>

                          <div className="hidden md:block rounded-full border border-[#dde5eb] bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                            {step.id}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[#111827] sm:text-[1.7rem]">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-[15px] leading-relaxed text-[#60707e] sm:text-base">{step.content}</p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                          {methodologySignals[index].map((tag) => (
                            <div
                              key={tag}
                              className="inline-flex items-center gap-2 rounded-full border border-[#dce4ea] bg-[#f8fbfd] px-3 py-2 text-[11px] font-semibold text-[#5f6f7d] shadow-[0_8px_20px_rgba(70,85,98,0.04)]"
                            >
                              <CheckCircle2 size={13} className="text-[#79aa0f]" />
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

        <FadeIn delay={220}>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dbe4ec] bg-white/82 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f6f7d] shadow-[0_12px_26px_rgba(70,85,98,0.04)]">
            <Sparkles className="h-3.5 w-3.5 text-[#79aa0f]" />
            Proceso pensado para crear tracción, no complejidad extra
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
