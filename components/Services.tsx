import React from 'react';
import { SERVICES } from '../constants';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Bike, Sparkles } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section
      id="servicios"
      className="relative -mt-8 overflow-hidden rounded-t-[2.5rem] bg-[linear-gradient(180deg,#eef3f6_0%,#f7fafc_48%,#edf2f6_100%)] pt-20 pb-14 shadow-[0_-18px_48px_rgba(8,12,18,0.08)] sm:-mt-10 sm:rounded-t-[3rem] sm:pt-24 sm:pb-20 md:pt-[6.5rem] md:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(142,166,255,0.42),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 10% 18%, rgba(126,224,255,0.14), transparent 22%), radial-gradient(circle at 88% 14%, rgba(199,255,99,0.16), transparent 18%), radial-gradient(circle at 52% 100%, rgba(142,166,255,0.10), transparent 26%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-8">
          <FadeIn>
            <div>
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-[#d7e1e9] bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-[0_14px_30px_rgba(70,85,98,0.05)]"
              >
                <Sparkles className="mr-2 h-3.5 w-3.5 text-[#79aa0f]" />
                Especialidades La Refactoria
              </Badge>
              <h2 className="max-w-3xl text-[2.9rem] font-semibold tracking-[-0.07em] text-foreground sm:text-5xl lg:text-[4.55rem]">
                Soluciones digitales hechas a la medida de tu negocio
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[#60707e] sm:text-lg">
                No trabajamos con una receta única. Diseñamos la combinación correcta de tienda online, software y automatización según la etapa real de tu empresa.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-[#d8e1e8] bg-[#111827] p-5 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c7ff63]">Cómo lo pensamos</p>
                <h3 className="mt-3 text-[1.4rem] font-semibold tracking-[-0.04em] sm:text-[1.55rem]">
                  Primero ordenamos la dirección. Después elegimos la pieza correcta.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  A veces la solución es una tienda online mejor resuelta. Otras veces es una automatización, un sistema interno o varias piezas conectadas.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-[#d8e1e8] bg-white/88 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.07)] sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">Lo que suele pasar</p>
                <p className="mt-3 text-[1.15rem] font-semibold tracking-[-0.035em] text-[#111827]">
                  El negocio ya está creciendo, pero la operación y la presencia digital todavía no acompañan ese ritmo.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {['más claridad', 'menos fricción', 'mejor conversión'].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#dce4ea] bg-[#f6f9fb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 120} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                className={index % 2 === 0 ? 'lg:translate-y-6' : ''}
              >
                <Card className="group relative h-full overflow-hidden rounded-[2rem] border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,249,252,0.96))] p-5 shadow-[0_26px_72px_rgba(70,85,98,0.08)] transition-all duration-500 hover:border-[#c7d3dc] hover:shadow-[0_34px_84px_rgba(70,85,98,0.11)] sm:rounded-[2.3rem] sm:p-6">
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl"
                    style={{ backgroundColor: service.color, opacity: 0.16 }}
                  />
                  <div
                    className="absolute inset-x-0 top-0 h-1.5 opacity-90"
                    style={{ background: `linear-gradient(90deg, transparent 0%, ${service.color} 22%, ${service.color} 78%, transparent 100%)` }}
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_16px_34px_rgba(17,24,39,0.08)]"
                        style={{ backgroundColor: `${service.color}18`, color: service.color }}
                      >
                        <service.icon size={22} strokeWidth={2.4} />
                      </div>

                      <div className="rounded-full border border-[#dde5eb] bg-[#f6f9fb] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                        servicio {index + 1}
                      </div>
                    </div>

                    <h3 className="max-w-[14ch] text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#111827] sm:text-[2rem]">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#60707e] sm:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 rounded-[1.45rem] border border-[#e1e8ee] bg-[linear-gradient(180deg,#f8fbfd_0%,#f2f7fb_100%)] px-4 py-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#748292]">Dónde impacta</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Badge
                            key={`${service.title}-${tag}`}
                            variant="secondary"
                            className="border border-[#dfe7ee] bg-white px-2.5 py-1 text-[9px] font-bold text-[#5e6d7b] sm:text-[10px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#111827]">
                        Ver cómo aterrizarlo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={180}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="mt-8 sm:mt-10"
          >
            <a
              href="/tiendas-bicicletas"
              className="group block overflow-hidden rounded-[2rem] border border-[#d8e4d1] bg-[linear-gradient(135deg,#111827_0%,#162032_58%,#1d2c16_100%)] p-5 text-white shadow-[0_28px_78px_rgba(17,24,39,0.16)] sm:rounded-[2.3rem] sm:p-6"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#c7ff63] sm:text-[11px] sm:tracking-[0.18em]">
                    <Bike className="h-3.5 w-3.5" />
                    Especialidad vertical
                  </div>
                  <h3 className="max-w-2xl text-[1.95rem] font-semibold tracking-[-0.05em] text-white sm:text-3xl">
                    Ecommerce y automatización para tiendas y talleres de bicicletas
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/72 sm:text-base">
                    Si tu negocio es del rubro bicicleta, ya tenemos una landing especializada con enfoque en Shopify, catálogo técnico, automatización y tráfico para ese mercado.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <div className="rounded-full border border-white/10 bg-white/8 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72 sm:px-4 sm:text-[11px] sm:tracking-[0.16em]">
                    Tienda online • catálogo • performance
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#c7ff63] px-4 py-3 text-sm font-semibold text-[#111827] shadow-[0_14px_36px_rgba(199,255,99,0.2)] transition-transform duration-300 group-hover:translate-x-1 sm:px-5">
                    Ver landing especializada
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};
