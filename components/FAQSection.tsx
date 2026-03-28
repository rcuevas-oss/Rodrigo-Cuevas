import React from 'react';
import { FadeIn } from './FadeIn';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ArrowRight, HelpCircle, MessageSquareMore, Sparkles } from 'lucide-react';
import { faqs } from '../content/faqs.js';

export const FAQSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef3f7_0%,#f8fbfd_46%,#eef3f7_100%)] py-16 sm:py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 16%, rgba(142,166,255,0.13), transparent 22%), radial-gradient(circle at 82% 18%, rgba(126,224,255,0.14), transparent 18%), radial-gradient(circle at 50% 100%, rgba(199,255,99,0.1), transparent 24%)',
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
                <HelpCircle className="mr-2 h-3.5 w-3.5" />
                Preguntas frecuentes
              </Badge>
              <h2 className="max-w-4xl text-[2.72rem] font-semibold tracking-[-0.07em] text-foreground sm:text-5xl lg:text-[4.15rem]">
                Dudas comunes antes de avanzar
              </h2>
              <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#60707e] sm:text-lg">
                Si estás evaluando automatización, IA, sistemas internos o digitalización, estas son algunas de las preguntas que más suelen aparecer antes de tomar una decisión.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-[#111827] p-5 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Qué solemos aclarar</p>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-[-0.04em] sm:text-[1.55rem]">
                  Si conviene partir por una web, una automatización, un sistema o una mezcla de varias piezas.
                </h3>
              </div>

              <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-white/88 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.07)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">La idea</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {['bajar incertidumbre', 'ordenar la decisión', 'dar claridad'].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#dce4ea] bg-[#f6f9fb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[1.02rem] font-semibold tracking-[-0.03em] text-[#111827]">
                  Estas respuestas están pensadas para ayudarte a entender el camino, no para empujarte a una solución cerrada.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 70} className="h-full">
              <Card
                className={`group relative h-full overflow-hidden rounded-[2rem] border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.96))] shadow-[0_24px_62px_rgba(70,85,98,0.07)] transition-all duration-500 hover:border-[#c7d3dc] hover:shadow-[0_32px_80px_rgba(70,85,98,0.1)] sm:rounded-[2.3rem] ${
                  index % 2 === 1 ? 'lg:translate-y-8' : ''
                }`}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl"
                  style={{
                    backgroundColor: index % 3 === 0 ? '#8ea6ff' : index % 3 === 1 ? '#7ee0ff' : '#c7ff63',
                    opacity: 0.14,
                  }}
                />

                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff4f8] text-[#111827] shadow-[0_10px_24px_rgba(70,85,98,0.05)]">
                      <MessageSquareMore size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="rounded-full border border-[#dde5eb] bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                        duda frecuente
                      </div>
                      <h3 className="mt-4 text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[1.55rem]">
                        {faq.question}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#60707e] sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={220}>
          <div className="mt-10 overflow-hidden rounded-[2.2rem] border border-[#d8e1e8] bg-[linear-gradient(135deg,#111827_0%,#162032_58%,#101826_100%)] p-5 text-white shadow-[0_28px_78px_rgba(17,24,39,0.16)] sm:rounded-[2.6rem] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#c7ff63] sm:text-[11px] sm:tracking-[0.18em]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Si tu duda no aparece aquí
                </div>
                <h3 className="text-[1.95rem] font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                  Lo aterrizamos contigo en una primera conversación, incluso si todavía no tienes claro qué necesitas.
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/72 sm:text-base">
                  Podemos ayudarte a ordenar si conviene partir por sitio web, automatización, agente de IA, sistema interno o una combinación según tu etapa actual.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <div className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72 sm:px-4 sm:text-[11px] sm:tracking-[0.16em]">
                  diagnóstico • claridad • siguiente paso
                </div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c7ff63] px-4 py-3 text-sm font-semibold text-[#111827] shadow-[0_14px_36px_rgba(199,255,99,0.2)] transition-transform duration-300 hover:translate-x-1 sm:px-5"
                >
                  Hablar sobre mi caso
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQSection;
