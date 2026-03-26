import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, FileText, Sparkles, ClipboardList, MessagesSquare, LineChart } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f7fb_0%,#ffffff_72%)] pt-10 pb-10 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_14%_18%,rgba(158,180,255,0.16),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(151,209,199,0.16),transparent_20%)]" />
      <div className="absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.68),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-[0.1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <Badge variant="secondary" className="mb-4 inline-flex max-w-full rounded-full border border-[#d8e2ec] bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-[0_14px_34px_rgba(70,85,98,0.05)] hover:bg-white sm:mb-5 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.16em]">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                Sitios web, automatización, IA aplicada, sistemas internos y digitalización
              </Badge>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="max-w-4xl text-[3rem] font-semibold leading-[0.94] tracking-[-0.065em] text-foreground sm:text-5xl lg:text-[5.2rem]">
                Soluciones digitales para pymes que ya están creciendo
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-[1.24rem]">
                Te ayudamos a vender mejor, ordenar procesos internos y digitalizar tu operación con sitios web, automatizaciones, IA aplicada, sistemas a medida y soluciones en la nube.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
                <Button asChild variant="default" size="lg" className="h-11 w-full rounded-full bg-[#111827] px-5 font-semibold text-white shadow-[0_18px_40px_rgba(17,24,39,0.14)] hover:bg-[#0f172a] sm:h-12 sm:w-auto sm:px-6">
                  <a href="#contacto">
                    Agendar diagnóstico
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-11 w-full rounded-full border-[#d9e2eb] bg-white/90 px-5 shadow-[0_14px_32px_rgba(70,85,98,0.04)] sm:h-12 sm:w-auto sm:px-6">
                  <a href="#casos-de-uso">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver ejemplos
                  </a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
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

          <FadeIn delay={180}>
            <div className="relative">
              <div className="absolute inset-0 translate-y-5 rounded-[2rem] bg-[linear-gradient(180deg,rgba(20,27,35,0.08),rgba(20,27,35,0.02))] blur-3xl sm:translate-y-6 sm:rounded-[2.3rem]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#dce5ee] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.9))] p-4 shadow-[0_28px_80px_rgba(70,85,98,0.08)] sm:rounded-[2.3rem] sm:p-6">
                <div className="flex items-center justify-between rounded-[1.25rem] border border-[#e2e9ef] bg-white/90 px-3.5 py-3 sm:rounded-[1.4rem] sm:px-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#73808d]">Diagnóstico NexAI</p>
                    <p className="mt-1 text-sm font-semibold text-[#111827]">Qué resolvemos primero</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.12)] sm:h-11 sm:w-11">
                    <Sparkles size={17} />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:gap-4">
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {[
                      {
                        title: 'Operación interna',
                        text: 'Solicitudes, aprobaciones, RRHH y herramientas internas más claras.',
                        icon: ClipboardList,
                      },
                      {
                        title: 'Atención e IA aplicada',
                        text: 'Agentes, automatizaciones y respuestas con más contexto para el negocio.',
                        icon: MessagesSquare,
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-[1.25rem] border border-[#e2e9ef] bg-white/85 p-3.5 sm:rounded-[1.4rem] sm:p-4">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eff4f8] text-[#111827] sm:mb-4 sm:h-11 sm:w-11">
                          <item.icon size={18} />
                        </div>
                        <h3 className="text-base font-semibold tracking-[-0.03em] text-[#111827]">{item.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-[#65727f] sm:text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[1.4rem] border border-[#dbe4ed] bg-[#111827] p-4 text-white shadow-[0_20px_46px_rgba(17,24,39,0.16)] sm:rounded-[1.6rem] sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a7b4c3]">Resultado esperado</p>
                        <h3 className="mt-2 text-lg font-semibold tracking-[-0.04em] sm:text-xl">Más orden, menos fricción y una base digital lista para crecer.</h3>
                      </div>
                      <div className="hidden h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white/10 text-[#dfe9f4] sm:flex">
                        <LineChart size={18} />
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3 sm:mt-5 sm:gap-2.5">
                      {['Web y presencia', 'Automatización útil', 'Sistemas a medida'].map((item) => (
                        <div key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d6e0eb] sm:text-[11px] sm:tracking-[0.14em]">
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
      </div>
    </section>
  );
};
