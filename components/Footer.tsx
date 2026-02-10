import React from 'react';
import { APP_NAME } from '../constants';
import { Command } from 'lucide-react';
import { Separator } from './ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Command size={14} className="text-primary-foreground" />
               </div>
              <span className="text-lg font-bold tracking-tight text-foreground">{APP_NAME}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infraestructura de automatización para la empresa moderna.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Producto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Integraciones</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Seguridad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Recursos</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-sm mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {APP_NAME} Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};