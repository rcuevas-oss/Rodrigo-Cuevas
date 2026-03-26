import React from 'react';
import {
  Building2,
  Cloud,
  FolderSync,
  LayoutDashboard,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { FadeIn } from './FadeIn';

const cases = [
  {
    title: 'Sistemas internos para RRHH y operación',
    description: 'Creamos herramientas para solicitudes, vacaciones, onboarding, seguimiento interno y tareas que hoy viven en planillas o mensajes.',
    icon: Building2,
    points: ['Procesos internos más claros', 'Menos dependencia de planillas', 'Más trazabilidad'],
  },
  {
    title: 'Automatización de aprobaciones y tareas',
    description: 'Conectamos solicitudes, validaciones y avisos internos, incorporando IA cuando aporta valor para clasificar, ordenar y acelerar tareas del día a día.',
    icon: Workflow,
    points: ['Menos tareas repetitivas', 'IA para clasificar y ordenar', 'Procesos más claros'],
  },
  {
    title: 'Digitalización y documentos en la nube',
    description: 'Centralizamos carpetas, formularios, aprobaciones y documentos para que la empresa trabaje con más orden y menos pérdida de información.',
    icon: Cloud,
    points: ['Información centralizada', 'Acceso más simple', 'Menos desorden documental'],
  },
];

const highlightedFlow = [
  'Un colaborador hace una solicitud interna o carga un formulario',
  'La información se valida y se ordena automáticamente',
  'La jefatura o el área responsable recibe aviso y contexto',
  'El cambio queda registrado y disponible para el equipo',
];

export const EnterpriseDashboard: React.FC = () => {
  return (
    <section id="casos-de-uso" className="py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <Badge variant="outline" className="mb-4 bg-background/60 backdrop-blur border-border text-primary font-bold px-4 py-1.5 rounded-full shadow-sm">
              Casos de uso para pymes en crecimiento
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl mb-5 sm:mb-6">
              Soluciones que <span className="text-muted-foreground italic">sí aterrizamos</span> en negocios reales
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg font-medium opacity-80 leading-relaxed">
              No vendemos un software empaquetado. Diseñamos e implementamos herramientas, automatizaciones, IA aplicada y sistemas según la forma en que hoy funciona tu negocio.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3 mb-10 md:mb-12">
          {cases.map((item, index) => (
            <FadeIn key={item.title} delay={index * 120} className="h-full">
              <Card className="h-full bg-card/70 backdrop-blur border-border/60 shadow-xl shadow-black/5 rounded-[2rem]">
                <CardHeader className="space-y-4 p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl tracking-tight text-foreground mb-3">{item.title}</CardTitle>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:gap-8 items-stretch">
          <FadeIn>
            <Card className="h-full overflow-hidden rounded-[2.5rem] border-border bg-background shadow-2xl shadow-black/5">
              <CardHeader className="border-b border-border bg-card/60 p-5 sm:p-6">
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-black uppercase tracking-[0.18em]">
                  <LayoutDashboard size={14} className="text-primary" />
                  Ejemplo de solución implementable
                </div>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Sistema interno para solicitudes, RRHH y seguimiento operativo
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:gap-6 p-5 sm:p-6 md:grid-cols-2">
                <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-muted/20 p-5 sm:p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-muted-foreground mb-4">Antes</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Solicitudes internas repartidas entre WhatsApp, correos y planillas.</p>
                    <p>Aprobaciones poco claras y sin trazabilidad.</p>
                    <p>Documentos y cambios difíciles de encontrar o seguir.</p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-primary/20 bg-primary/[0.03] p-5 sm:p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary mb-4">Después</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Ingreso centralizado de solicitudes y formularios.</p>
                    <p>Flujo claro de aprobación y seguimiento.</p>
                    <p>Información ordenada y disponible para cada área.</p>
                  </div>
                </div>

                <div className="md:col-span-2 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {['Más orden interno', 'Menos tareas manuales', 'Mejor trazabilidad'].map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-card/60 px-4 py-4 text-sm font-semibold text-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={150}>
            <Card className="h-full rounded-[2.5rem] border-border bg-card/80 shadow-xl shadow-black/5">
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 text-muted-foreground text-xs font-black uppercase tracking-[0.18em]">
                  <FolderSync size={14} className="text-primary" />
                  Qué puede incluir
                </div>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Un flujo hecho a la medida de cada área del negocio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-5 px-5 pb-5 sm:px-6 sm:pb-6">
                {highlightedFlow.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="mt-0.5 h-8 w-8 sm:h-9 sm:w-9 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xs sm:text-sm font-black shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-background/70 px-4 py-3.5 sm:py-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}

                <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-muted/30 p-4 sm:p-5 flex items-start gap-3">
                  <ArrowRight className="mt-0.5 text-primary shrink-0" size={18} />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La solución final puede ser una automatización, un panel simple, un sistema interno o una combinación de varias piezas con IA aplicada según tu necesidad real.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDashboard;
