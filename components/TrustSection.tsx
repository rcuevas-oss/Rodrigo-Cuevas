import React from 'react';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Building2, ClipboardList, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const TRUST_FACTORS = [
  {
    title: 'Más orden en la operación',
    description:
      'Creamos herramientas y procesos digitales para que el negocio funcione con más claridad, control y menos improvisación.',
    detail: 'Procesos internos más visibles y menos dependencia de conversaciones dispersas.',
    icon: ClipboardList,
    accent: '#c7ff63',
  },
  {
    title: 'Menos tareas manuales',
    description:
      'Automatizamos pasos repetitivos para que tu equipo ahorre tiempo y responda más rápido sin depender de trabajo manual.',
    detail: 'Menos carga operativa y más velocidad donde hoy se pierde tiempo.',
    icon: Workflow,
    accent: '#7ee0ff',
  },
  {
    title: 'Empresa más digitalizada',
    description:
      'Centralizamos información, documentos y procesos para que tu equipo trabaje mejor desde cualquier lugar y con menos fricción.',
    detail: 'Información más accesible, trazabilidad más simple y mejor base para crecer.',
    icon: Building2,
    accent: '#8ea6ff',
  },
];

export const TrustSection: React.FC = () => {
  return (
    <section className="relative -mt-10 overflow-hidden rounded-t-[2.5rem] border-y border-[#0d141c] bg-[linear-gradient(160deg,#0b1117_0%,#101923_52%,#121d28_100%)] pt-20 pb-14 shadow-[0_-24px_60px_rgba(8,12,18,0.1)] sm:-mt-14 sm:rounded-t-[3rem] sm:pt-24 sm:pb-16 md:-mt-16 md:pt-28 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(199,255,99,0.45),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(199,255,99,0.14), transparent 22%), radial-gradient(circle at 88% 16%, rgba(126,224,255,0.16), transparent 18%), radial-gradient(circle at 52% 100%, rgba(142,166,255,0.16), transparent 30%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-end lg:gap-8">
          <FadeIn>
            <div className="max-w-3xl">
              <Badge className="mb-4 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#dbe8f4] shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
                <Sparkles className="mr-2 h-3.5 w-3.5 text-[#c7ff63]" />
                Qué mejora primero
              </Badge>
              <h2 className="text-[2.55rem] font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.35rem]">
                Tres focos claros para ordenar una pyme que ya está creciendo
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[rgba(226,236,247,0.72)] sm:text-lg">
                La idea no es sumar complejidad. Es sacar fricción, ordenar la operación y construir una base digital con más criterio para vender mejor y trabajar con menos desgaste.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {['menos fricción', 'más control', 'mejor base digital'].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.05)] px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[rgba(226,236,247,0.74)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#27303b] bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.04)_100%)] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.24)] backdrop-blur sm:rounded-[2.4rem] sm:p-6">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c7ff63]">Dirección inicial</p>
                  <h3 className="mt-3 text-[1.45rem] font-semibold tracking-[-0.05em] text-white sm:text-[1.7rem]">
                    Lo primero no es agregar más herramientas. Es decidir qué conviene resolver antes.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(226,236,247,0.78)] sm:text-base">
                    Normalmente partimos por operación, automatización o digitalización, según dónde hoy se está perdiendo más tiempo, más contexto o más capacidad de respuesta.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7ff63] text-[#0f172a] shadow-[0_18px_36px_rgba(199,255,99,0.18)]">
                  <ShieldCheck size={18} />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {['operación', 'automatización', 'digitalización'].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.07)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(226,236,247,0.82)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:gap-5">
          {TRUST_FACTORS.map((factor, index) => (
            <FadeIn key={factor.title} delay={index * 120}>
              <Card className="group relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#1a222d] bg-[linear-gradient(180deg,#26303c_0%,#1a222d_100%)] text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-1.5 sm:rounded-[2.1rem]">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: factor.accent, opacity: 0.16 }}
                />
                <CardContent className="relative flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_16px_34px_rgba(0,0,0,0.16)]"
                      style={{ backgroundColor: factor.accent, color: '#111827' }}
                    >
                      <factor.icon size={20} />
                    </div>
                    <div className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[rgba(226,236,247,0.58)]">
                      foco {index + 1}
                    </div>
                  </div>

                  <h3 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.65rem]">
                    {factor.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgba(226,236,247,0.78)] sm:text-[15px]">
                    {factor.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="rounded-[1.35rem] border border-white/10 bg-[#0f1722] px-4 py-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[rgba(226,236,247,0.42)]">Qué cambia</p>
                      <p className="mt-2 text-sm leading-relaxed text-[rgba(226,236,247,0.82)]">{factor.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={220}>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
            <ArrowRight className="h-3.5 w-3.5 text-[#c7ff63]" />
            Diagnóstico con foco en impacto real, no en sumar complejidad
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
