import React from 'react';
import { APP_NAME } from '../constants';
import { Command } from 'lucide-react';
import { Separator } from './ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#1b2430] bg-[#0f1622] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-[#c7ff63]">
                  <Command size={14} className="text-[#c7ff63]" />
               </div>
              <span className="text-lg font-bold tracking-tight text-white">{APP_NAME}</span>
            </div>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.68)]">
              Soluciones digitales para pymes que necesitan vender mejor, ordenar procesos y ahorrar tiempo.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Servicios</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li><a href="#servicios" className="transition-colors hover:text-white">Páginas web</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-white">Tiendas online</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-white">Automatización</a></li>
              <li><a href="#servicios" className="transition-colors hover:text-white">Software a medida</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Explorar</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li><a href="#casos-de-uso" className="transition-colors hover:text-white">Casos de uso</a></li>
              <li><a href="#como-trabajamos" className="transition-colors hover:text-white">Cómo trabajamos</a></li>
              <li><a href="#faq" className="transition-colors hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
              <li><a href="#contacto" className="transition-colors hover:text-white">Agendar diagnóstico</a></li>
              <li><a href="#contacto" className="transition-colors hover:text-white">Hablar por WhatsApp</a></li>
              <li><a href="mailto:hola@nexai.cl" className="transition-colors hover:text-white">hola@nexai.cl</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between text-xs text-[rgba(255,255,255,0.52)] md:flex-row">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
