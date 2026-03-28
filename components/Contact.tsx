import React from 'react';
import { Button } from './ui/button';
import { FadeIn } from './FadeIn';
import { ArrowRight, CalendarClock, ClipboardList, MessageSquareMore, Sparkles } from 'lucide-react';

const firstCallItems = [
  'Entender qué problema conviene resolver primero.',
  'Definir si la mejor salida es web, automatización, sistema o una combinación.',
  'Proponer un siguiente paso realista para tu etapa actual.',
];

const contactSignals = [
  {
    title: 'Diagnóstico claro',
    text: 'Aterrizamos la necesidad y ordenamos prioridades.',
    icon: ClipboardList,
  },
  {
    title: 'Conversación útil',
    text: 'Sin lenguaje innecesario ni soluciones infladas.',
    icon: MessageSquareMore,
  },
  {
    title: 'Siguiente paso',
    text: 'Te vas con más claridad sobre cómo avanzar.',
    icon: CalendarClock,
  },
];

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="relative overflow-hidden bg-transparent pt-16 pb-4 sm:pt-20 sm:pb-6 md:pt-24 md:pb-8">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[2.4rem] border border-[#1c2430] bg-[linear-gradient(135deg,#111827_0%,#182332_58%,#101826_100%)] p-5 text-white shadow-[0_32px_90px_rgba(17,24,39,0.18)] sm:rounded-[2.9rem] sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-stretch lg:gap-8">
              <div className="max-w-3xl">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Siguiente paso</p>
                <h2 className="mt-3 text-[2.35rem] font-semibold tracking-[-0.055em] sm:mt-4 sm:text-4xl lg:text-[4.2rem]">
                  Cuéntanos qué quieres mejorar en tu negocio
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[rgba(255,255,255,0.74)] sm:mt-5 sm:text-lg">
                  Si hoy sientes que estás vendiendo más pero operando con desorden, podemos ayudarte a definir una solución clara, útil y adaptada a tu etapa actual.
                </p>

                <div className="mt-6 flex max-w-2xl flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 w-full rounded-full bg-[#c7ff63] px-6 font-semibold text-[#111827] shadow-[0_18px_40px_rgba(199,255,99,0.18)] hover:bg-[#d8ff91] sm:h-12 sm:w-auto"
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
                    className="h-11 w-full rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white sm:h-12 sm:w-auto"
                  >
                    <a href="https://wa.me/" target="_blank" rel="noreferrer">
                      Hablar por WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8">
                  {['software a medida', 'tiendas online', 'automatización', 'digitalización'].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/72 sm:text-[11px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm text-[rgba(255,255,255,0.64)] sm:mt-6">
                  Te orientamos incluso si todavía no tienes totalmente claro qué necesitas.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur sm:p-6">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#c7ff63]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Primera conversación
                  </div>
                  <h3 className="text-[1.4rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.6rem]">
                    Lo que normalmente definimos al principio
                  </h3>
                  <div className="mt-4 space-y-3">
                    {firstCallItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.3rem] border border-white/8 bg-[#0b121b] px-4 py-3 text-sm leading-relaxed text-white/74"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {contactSignals.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4 shadow-[0_16px_38px_rgba(0,0,0,0.16)] backdrop-blur"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#c7ff63] shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
                        <item.icon size={18} />
                      </div>
                      <h4 className="mt-4 text-[1.02rem] font-semibold tracking-[-0.03em] text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/68">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
