import React from 'react';
import { SERVICES } from '../constants';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Bike } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative overflow-hidden bg-transparent py-12 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-[2.1rem] border border-[#dce4ed] bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] p-5 shadow-[0_28px_70px_rgba(70,85,98,0.06)] sm:rounded-[2.5rem] sm:p-8 lg:p-10">
          <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-6">
            <FadeIn>
              <div>
                <Badge variant="outline" className="mb-3 rounded-full border-[#dbe3ec] bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-primary shadow-sm sm:mb-4 sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
                  Especialidades NexAI
                </Badge>
                <h2 className="text-[2.8rem] font-semibold tracking-[-0.065em] text-foreground sm:text-5xl lg:text-[4.2rem]">
                  Soluciones digitales hechas a la medida de tu negocio
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="rounded-[1.5rem] border border-[#e2e9ef] bg-white/90 p-4 shadow-[0_14px_32px_rgba(70,85,98,0.04)] sm:rounded-[1.8rem] sm:p-5">
                <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  Te ayudamos a ordenar, automatizar y mejorar tu operación con herramientas, sistemas y soluciones adaptadas a tu etapa actual.
                </p>
              </div>
            </FadeIn>
          </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full group"
              >
                <Card className="h-full relative overflow-hidden rounded-[1.7rem] border-[#dfe7ef] bg-white p-4 shadow-[0_16px_42px_rgba(70,85,98,0.05)] transition-all duration-500 hover:border-[#cfd9e4] hover:shadow-[0_24px_56px_rgba(70,85,98,0.08)] sm:rounded-[2rem] sm:p-6">
                  <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(17,24,39,0.24),transparent)]" />
                  <div className="relative z-10">
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_16px_34px_rgba(17,24,39,0.12)] transition-transform duration-500 group-hover:scale-105 sm:mb-6 sm:h-12 sm:w-12"
                    >
                      <service.icon size={22} strokeWidth={2.5} />
                    </div>

                    <h3 className="mb-3 flex items-center gap-2 text-[1.65rem] font-semibold tracking-[-0.045em] text-foreground sm:text-2xl">
                      {service.title}
                      <ArrowUpRight className="h-5 w-5 translate-x-1 -translate-y-1 opacity-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </h3>

                    <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 border-t border-[#e6edf3] pt-4">
                      {service.tags.map((tag) => (
                        <Badge
                          key={`${service.title}-${tag}`}
                          variant="secondary"
                          className="border border-[#e4ebf2] bg-[#f8fbfd] px-2.5 py-1 text-[9px] font-bold text-muted-foreground transition-colors hover:bg-white hover:text-primary sm:text-[10px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

          <FadeIn delay={120}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="mt-6 sm:mt-8"
            >
              <a
                href="/tiendas-bicicletas"
                className="group block overflow-hidden rounded-[1.8rem] border border-[#d8e4d1] bg-[linear-gradient(135deg,#111827_0%,#162032_58%,#1d2c16_100%)] p-4 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:rounded-[2rem] sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#c7ff63] sm:mb-4 sm:text-[11px] sm:tracking-[0.18em]">
                      <Bike className="h-3.5 w-3.5" />
                      Especialidad vertical
                    </div>
                    <h3 className="max-w-2xl text-[1.85rem] font-semibold tracking-[-0.05em] text-white sm:text-3xl">
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
      </div>
    </section>
  );
};
