import React from 'react';
import { Button } from './ui/button';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[2.6rem] border border-[#1c2430] bg-[linear-gradient(135deg,#111827_0%,#182332_58%,#101826_100%)] px-6 py-10 text-center text-white shadow-[0_32px_90px_rgba(17,24,39,0.18)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="mx-auto max-w-3xl">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Siguiente paso</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Cuéntanos qué quieres mejorar en tu negocio
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[rgba(255,255,255,0.74)] sm:text-lg">
                Si hoy sientes que estás vendiendo más pero operando con desorden, podemos ayudarte a definir una solución clara, útil y adaptada a tu etapa actual.
              </p>
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="h-12 w-full rounded-full bg-[#c7ff63] px-6 font-semibold text-[#111827] shadow-[0_18px_40px_rgba(199,255,99,0.18)] hover:bg-[#d8ff91] sm:w-auto">
                <a href="#contacto">Agendar diagnóstico</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 w-full rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto">
                <a href="https://wa.me/" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-[rgba(255,255,255,0.64)]">
              Te orientamos incluso si todavía no tienes totalmente claro qué necesitas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
