import React from 'react';
import { APP_NAME } from '../constants';
import { Separator } from './ui/separator';
import BrandLogo from './BrandLogo';

const footerTags = ['Software a medida', 'Tiendas online', 'Automatización', 'Digitalización'];

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#1b2430] bg-[#0f1622] py-14 text-white sm:py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 18%, rgba(199,255,99,0.08), transparent 20%), radial-gradient(circle at 82% 16%, rgba(126,224,255,0.08), transparent 18%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-2xl">
            <BrandLogo
              tone="light"
              subtitle="Software a medida · Ecommerce · Automatización"
              subtitleClassName="text-[11px] text-[rgba(255,255,255,0.62)]"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-[rgba(255,255,255,0.68)] sm:text-base">
              Soluciones digitales para pymes que necesitan vender mejor, ordenar procesos y ahorrar tiempo sin sobredimensionar la implementación.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {footerTags.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 sm:text-[11px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.58)]">
              Acompañamos desde el diagnóstico hasta la implementación para dejar una base digital más clara y útil para crecer.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Servicios</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Páginas web
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Tiendas online
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Automatización
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Software a medida
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Explorar</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li>
                <a href="#casos-de-uso" className="transition-colors hover:text-white">
                  Casos de uso
                </a>
              </li>
              <li>
                <a href="#como-trabajamos" className="transition-colors hover:text-white">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-white">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li>
                <a href="#contacto" className="transition-colors hover:text-white">
                  Agendar diagnóstico
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition-colors hover:text-white">
                  Hablar por WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hola@nexai.cl" className="transition-colors hover:text-white">
                  hola@nexai.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-[rgba(255,255,255,0.52)] md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.
          </p>
          <p>La Refactoria ayuda a ordenar, automatizar y digitalizar pymes en crecimiento.</p>
        </div>
      </div>
    </footer>
  );
};
