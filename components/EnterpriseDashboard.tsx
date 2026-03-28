import React from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  FolderSync,
  LayoutDashboard,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FadeIn } from './FadeIn';

const cases = [
  {
    title: 'Sistemas internos para RRHH y operación',
    description:
      'Creamos herramientas para solicitudes, vacaciones, onboarding, seguimiento interno y tareas que hoy viven en planillas o mensajes.',
    icon: Building2,
    points: ['Procesos internos más claros', 'Menos dependencia de planillas', 'Más trazabilidad'],
    accent: '#8ea6ff',
    eyebrow: 'operación interna',
  },
  {
    title: 'Automatización de aprobaciones y tareas',
    description:
      'Conectamos solicitudes, validaciones y avisos internos, incorporando IA cuando aporta valor para clasificar, ordenar y acelerar tareas del día a día.',
    icon: Workflow,
    points: ['Menos tareas repetitivas', 'IA para clasificar y ordenar', 'Procesos más claros'],
    accent: '#c7ff63',
    eyebrow: 'automatización útil',
  },
  {
    title: 'Digitalización y documentos en la nube',
    description:
      'Centralizamos carpetas, formularios, aprobaciones y documentos para que la empresa trabaje con más orden y menos pérdida de información.',
    icon: Cloud,
    points: ['Información centralizada', 'Acceso más simple', 'Menos desorden documental'],
    accent: '#7ee0ff',
    eyebrow: 'base documental',
  },
];

const highlightedFlow = [
  'Un colaborador hace una solicitud interna o carga un formulario',
  'La información se valida y se ordena automáticamente',
  'La jefatura o el área responsable recibe aviso y contexto',
  'El cambio queda registrado y disponible para el equipo',
];

export const EnterpriseDashboard: React.FC = () => {
  return (
    <section
      id="casos-de-uso"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#edf3f7_0%,#f7fafc_44%,#eef4f7_100%)] py-16 sm:py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 14% 16%, rgba(142,166,255,0.14), transparent 22%), radial-gradient(circle at 85% 18%, rgba(126,224,255,0.14), transparent 20%), radial-gradient(circle at 50% 100%, rgba(199,255,99,0.12), transparent 25%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end lg:gap-8">
          <FadeIn>
            <div className="max-w-3xl">
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#d7e1e9] bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-[0_14px_30px_rgba(70,85,98,0.05)]"
              >
                Casos de uso para pymes en crecimiento
              </Badge>
              <h2 className="max-w-4xl text-[2.7rem] font-semibold tracking-[-0.07em] text-foreground sm:text-5xl lg:text-[4.25rem]">
                Soluciones que <span className="text-[#64748b] italic">sí aterrizamos</span> en negocios reales
              </h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#60707e] sm:text-lg">
                No vendemos un software empaquetado. Diseñamos e implementamos herramientas, automatizaciones, IA aplicada y sistemas según la forma en que hoy funciona tu negocio.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-[#111827] p-5 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Qué se ve acá</p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.04em] sm:text-[1.55rem]">
                  Ejemplos aterrizados para operación, documentos y automatización.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  La idea es mostrar cómo una necesidad concreta se convierte en una solución útil y no en una promesa genérica.
                </p>
              </div>

              <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-white/90 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.07)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">Lo importante</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {['menos fricción', 'más trazabilidad', 'mejor seguimiento'].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#dce4ea] bg-[#f6f9fb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[1.02rem] font-semibold tracking-[-0.03em] text-[#111827]">
                  Cada ejemplo está pensado para mostrar impacto real sobre tareas, tiempos y claridad operativa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <FadeIn key={item.title} delay={index * 120} className="h-full">
              <Card className="group relative h-full overflow-hidden rounded-[2rem] border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.96))] shadow-[0_26px_72px_rgba(70,85,98,0.08)] transition-all duration-500 hover:border-[#c7d3dc] hover:shadow-[0_34px_84px_rgba(70,85,98,0.11)] sm:rounded-[2.3rem]">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
                  style={{ backgroundColor: item.accent, opacity: 0.16 }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-1.5 opacity-90"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${item.accent} 22%, ${item.accent} 78%, transparent 100%)` }}
                />

                <CardHeader className="space-y-4 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_16px_34px_rgba(17,24,39,0.08)]"
                      style={{ backgroundColor: `${item.accent}20`, color: item.accent }}
                    >
                      <item.icon size={22} />
                    </div>
                    <div className="rounded-full border border-[#dde5eb] bg-[#f6f9fb] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                      {item.eyebrow}
                    </div>
                  </div>

                  <div>
                    <CardTitle className="text-[1.72rem] leading-[1.02] tracking-[-0.05em] text-[#111827] sm:text-[1.95rem]">
                      {item.title}
                    </CardTitle>
                    <p className="mt-4 text-[15px] leading-relaxed text-[#60707e] sm:text-base">{item.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                  <div className="rounded-[1.45rem] border border-[#e1e8ee] bg-[linear-gradient(180deg,#f8fbfd_0%,#f2f7fb_100%)] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#748292]">Qué cambia</p>
                    <div className="mt-3 space-y-2.5">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-[#5f6f7d]">
                          <CheckCircle2 size={16} className="shrink-0" style={{ color: item.accent }} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[1.16fr_0.84fr]">
          <FadeIn>
            <Card className="relative h-full overflow-hidden rounded-[2.2rem] border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.96))] shadow-[0_26px_72px_rgba(70,85,98,0.08)] sm:rounded-[2.5rem]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,transparent,#8ea6ff_22%,#7ee0ff_74%,transparent)]" />
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">
                  <LayoutDashboard size={14} className="text-[#8ea6ff]" />
                  Ejemplo de solución implementable
                </div>
                <CardTitle className="mt-3 text-[1.75rem] tracking-[-0.05em] text-[#111827] sm:text-[2rem]">
                  Sistema interno para solicitudes, RRHH y seguimiento operativo
                </CardTitle>
              </CardHeader>

              <CardContent className="grid gap-4 px-5 pb-5 pt-0 sm:gap-5 sm:px-6 sm:pb-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.6rem] border border-[#1f2937]/10 bg-[linear-gradient(180deg,#101827_0%,#182231_100%)] p-5 text-white shadow-[0_20px_46px_rgba(17,24,39,0.14)]">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a7b4c3]">Antes</p>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/76">
                      <p>Solicitudes internas repartidas entre WhatsApp, correos y planillas.</p>
                      <p>Aprobaciones poco claras y sin trazabilidad.</p>
                      <p>Documentos y cambios difíciles de encontrar o seguir.</p>
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-[#dce6ef] bg-[linear-gradient(180deg,#f8fbfd_0%,#f1f7fb_100%)] p-5 shadow-[0_14px_34px_rgba(70,85,98,0.05)]">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">Después</p>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#5f6f7d]">
                      <p>Ingreso centralizado de solicitudes y formularios.</p>
                      <p>Flujo claro de aprobación y seguimiento.</p>
                      <p>Información ordenada y disponible para cada área.</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {['Más orden interno', 'Menos tareas manuales', 'Mejor trazabilidad'].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#dde5ec] bg-white/84 px-4 py-3.5 text-sm font-semibold text-[#111827] shadow-[0_10px_24px_rgba(70,85,98,0.04)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={140}>
            <Card className="relative h-full overflow-hidden rounded-[2.2rem] border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.96))] shadow-[0_26px_72px_rgba(70,85,98,0.08)] sm:rounded-[2.5rem]">
              <div className="pointer-events-none absolute -right-10 top-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(199,255,99,0.3),transparent_68%)] blur-2xl" />
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">
                  <FolderSync size={14} className="text-[#c7ff63]" />
                  Qué puede incluir
                </div>
                <CardTitle className="mt-3 text-[1.65rem] tracking-[-0.05em] text-[#111827] sm:text-[1.9rem]">
                  Un flujo hecho a la medida de cada área del negocio
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                {highlightedFlow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-[1.45rem] border border-[#e1e8ee] bg-[linear-gradient(180deg,#f8fbfd_0%,#f2f7fb_100%)] px-3.5 py-3.5 shadow-[0_10px_24px_rgba(70,85,98,0.04)] sm:gap-4 sm:px-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#111827] text-xs font-black text-white shadow-[0_14px_28px_rgba(17,24,39,0.12)]">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-relaxed text-[#5f6f7d]">{step}</p>
                  </div>
                ))}

                <div className="flex items-start gap-3 rounded-[1.5rem] border border-[#dbe4ec] bg-[#111827] p-4 text-white shadow-[0_20px_46px_rgba(17,24,39,0.14)] sm:p-5">
                  <ArrowRight className="mt-0.5 shrink-0 text-[#c7ff63]" size={18} />
                  <p className="text-sm leading-relaxed text-white/76">
                    La solución final puede ser una automatización, un panel simple, un sistema interno o una combinación de varias piezas con IA aplicada según tu necesidad real.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={220}>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dbe4ec] bg-white/82 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f6f7d] shadow-[0_12px_26px_rgba(70,85,98,0.04)]">
            <Sparkles className="h-3.5 w-3.5 text-[#79aa0f]" />
            Ejemplos pensados para mostrar impacto real, no solo features
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EnterpriseDashboard;
