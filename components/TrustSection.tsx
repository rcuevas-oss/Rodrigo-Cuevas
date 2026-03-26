import React from 'react';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { ClipboardList, Workflow, Building2 } from 'lucide-react';

const TRUST_FACTORS = [
  {
    title: "Más orden en la operación",
    description: "Creamos herramientas y procesos digitales para que el negocio funcione con más claridad, control y menos improvisación.",
    icon: ClipboardList,
  },
  {
    title: "Menos tareas manuales",
    description: "Automatizamos pasos repetitivos para que tu equipo ahorre tiempo y responda más rápido sin depender de trabajo manual.",
    icon: Workflow,
  },
  {
    title: "Empresa más digitalizada",
    description: "Centralizamos información, documentos y procesos para que tu equipo trabaje mejor desde cualquier lugar y con menos fricción.",
    icon: Building2,
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.1rem] border border-[#dce4ed] bg-white/86 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.06)] backdrop-blur sm:p-7">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary">Qué mejora primero</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                Tres focos claros para ordenar una pyme que ya está creciendo
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              La idea no es sumar complejidad. Es sacar fricción, ordenar la operación y dejar una base más útil para crecer.
            </p>
          </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TRUST_FACTORS.map((factor, index) => (
            <FadeIn key={index} delay={index * 100}>
              <Card className="h-full rounded-[1.7rem] border-[#e1e8ef] bg-[#f8fbfd] shadow-none">
                <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.12)]">
                    <factor.icon size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-[-0.03em] text-foreground">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
