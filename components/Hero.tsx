import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  ClipboardList,
  Database,
  FileText,
  Globe,
  LineChart,
  MessagesSquare,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { FadeIn } from './FadeIn';

const heroPillars = [
  {
    title: 'Operación interna',
    text: 'Solicitudes, aprobaciones, RRHH y herramientas internas con más orden y menos vueltas.',
    icon: ClipboardList,
  },
  {
    title: 'Atención e IA aplicada',
    text: 'Agentes, automatizaciones y respuestas con más contexto para vender y atender mejor.',
    icon: MessagesSquare,
  },
];

const heroSignals = ['web y ecommerce', 'automatización', 'sistemas internos', 'operación en la nube'];

const heroHighlights = [
  {
    title: 'Tiendas y presencia digital',
    text: 'Webs, ecommerce y páginas pensadas para vender mejor y mostrar con más claridad.',
    icon: Globe,
    accent: '#7ee0ff',
  },
  {
    title: 'Automatización útil',
    text: 'Menos pasos manuales, más velocidad y mejor seguimiento en tareas repetitivas.',
    icon: Workflow,
    accent: '#c7ff63',
  },
  {
    title: 'Sistemas y digitalización',
    text: 'Herramientas internas, formularios, documentos y operación con una base más clara.',
    icon: Database,
    accent: '#8ea6ff',
  },
];

export const Hero: React.FC = () => {
  return (
    <section className="home-hero relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#edf3f7_34%,#f8fbfd_74%,#eef3f7_100%)] pt-10 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(142,166,255,0.18),transparent_23%),radial-gradient(circle_at_84%_16%,rgba(126,224,255,0.18),transparent_20%),radial-gradient(circle_at_52%_100%,rgba(199,255,99,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.7),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,rgba(11,17,23,0.08))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <Badge
                variant="secondary"
                className="mb-4 inline-flex max-w-full rounded-full border border-[#d8e2ec] bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-[0_14px_34px_rgba(70,85,98,0.05)] hover:bg-white sm:mb-5 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.16em]"
              >
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                Software a medida, tiendas online, automatización e IA aplicada
              </Badge>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dde6ef] bg-white/70 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#5f6f7f] shadow-[0_12px_26px_rgba(70,85,98,0.04)] sm:text-[11px]">
                <Sparkles className="h-3.5 w-3.5 text-[#8aa61d]" />
                Base digital más sólida para crecer mejor
              </div>
            </FadeIn>

            <FadeIn delay={180}>
              <h1 className="mt-4 max-w-4xl text-[3rem] font-semibold leading-[0.94] tracking-[-0.065em] text-foreground sm:text-5xl lg:text-[5.15rem]">
                Software a medida, tiendas online y automatizaciones para pymes en crecimiento
              </h1>
            </FadeIn>

            <FadeIn delay={260}>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-[1.22rem]">
                Desarrollamos tiendas online, software a medida y automatizaciones para que tu empresa venda mejor, ordene procesos y escale con una base digital más clara.
              </p>
            </FadeIn>

            <FadeIn delay={340}>
              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="h-11 w-full rounded-full bg-[#111827] px-5 font-semibold text-white shadow-[0_18px_40px_rgba(17,24,39,0.14)] hover:bg-[#0f172a] sm:h-12 sm:w-auto sm:px-6"
                >
                  <a href="#contacto">
                    Agendar diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 w-full rounded-full border-[#d9e2eb] bg-white/90 px-5 shadow-[0_14px_32px_rgba(70,85,98,0.04)] sm:h-12 sm:w-auto sm:px-6"
                >
                  <a href="#casos-de-uso">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver ejemplos
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={420}>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                {['Pymes en crecimiento', 'Procesos internos más claros', 'Presencia digital sólida'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dbe3ec] bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#55616d] shadow-[0_12px_26px_rgba(70,85,98,0.04)] sm:px-3.5 sm:py-2 sm:text-[11px] sm:tracking-[0.14em]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={220}>
            <div className="relative">
              <div className="absolute inset-0 translate-y-5 rounded-[2rem] bg-[linear-gradient(180deg,rgba(20,27,35,0.12),rgba(20,27,35,0.02))] blur-3xl sm:translate-y-6 sm:rounded-[2.4rem]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#dce5ee] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,246,250,0.9))] p-4 shadow-[0_28px_80px_rgba(70,85,98,0.09)] sm:rounded-[2.4rem] sm:p-6">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(126,224,255,0.2),transparent_72%)] blur-3xl" />

                <div className="relative flex items-center justify-between rounded-[1.25rem] border border-[#e2e9ef] bg-white/90 px-3.5 py-3 sm:rounded-[1.4rem] sm:px-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#73808d]">Diagnóstico La Refactoria</p>
                    <p className="mt-1 text-sm font-semibold text-[#111827]">Qué conviene resolver primero</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.12)] sm:h-11 sm:w-11">
                    <Sparkles size={17} />
                  </div>
                </div>

                <div className="relative mt-4 rounded-[1.5rem] border border-[#dbe4ed] bg-[#111827] p-4 text-white shadow-[0_20px_46px_rgba(17,24,39,0.15)] sm:p-5">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a7b4c3]">Señal que vemos seguido</p>
                  <h3 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.04em] sm:text-[1.42rem]">
                    El negocio ya creció, pero la operación todavía sigue repartida entre mensajes, planillas y tareas manuales.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d8e1eb]">
                    Ahí es donde una combinación correcta de web, automatización y herramientas internas empieza a generar impacto real.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {heroPillars.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.25rem] border border-[#e2e9ef] bg-white/88 p-3.5 shadow-[0_16px_38px_rgba(70,85,98,0.05)] sm:rounded-[1.4rem] sm:p-4"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff4f8] text-[#111827] sm:mb-4 sm:h-11 sm:w-11">
                        <item.icon size={18} />
                      </div>
                      <h3 className="text-base font-semibold tracking-[-0.03em] text-[#111827]">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-[#65727f] sm:text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.35rem] border border-[#dde5ec] bg-[#f7fafc] px-4 py-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#748292]">Entradas típicas</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {heroSignals.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-[#dce5ec] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#5e6d7b]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.35rem] border border-[#dbe4ed] bg-[linear-gradient(180deg,#1b2532_0%,#111827_100%)] p-4 text-white shadow-[0_18px_36px_rgba(17,24,39,0.14)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a7b4c3]">Resultado esperado</p>
                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] sm:text-[1.2rem]">
                          Más orden, menos fricción y una base digital lista para crecer.
                        </h3>
                      </div>
                      <div className="hidden h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white/10 text-[#dfe9f4] sm:flex">
                        <LineChart size={18} />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Web y presencia', 'Automatización útil', 'Sistemas a medida'].map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d6e0eb] sm:text-[11px] sm:tracking-[0.14em]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={520}>
          <div className="relative mt-10 sm:mt-12 lg:mt-14">
            <div className="pointer-events-none absolute inset-x-6 top-6 h-24 rounded-full bg-[linear-gradient(90deg,rgba(126,224,255,0.16),rgba(199,255,99,0.14),rgba(142,166,255,0.14))] blur-3xl" />
            <div className="relative grid gap-3 rounded-[2rem] border border-white/70 bg-white/78 p-4 shadow-[0_20px_60px_rgba(70,85,98,0.08)] backdrop-blur sm:p-5 lg:grid-cols-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#dfe6ed] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.92))] p-4 shadow-[0_16px_34px_rgba(70,85,98,0.05)]"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl shadow-[0_14px_30px_rgba(17,24,39,0.08)]"
                    style={{ backgroundColor: `${item.accent}22`, color: item.accent }}
                  >
                    <item.icon size={19} strokeWidth={2.3} />
                  </div>
                  <h3 className="mt-4 text-[1.12rem] font-semibold tracking-[-0.04em] text-[#111827]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f6f7d]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
