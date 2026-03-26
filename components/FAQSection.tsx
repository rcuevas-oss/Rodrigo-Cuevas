import React from 'react';
import { FadeIn } from './FadeIn';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { HelpCircle, MessageSquareMore } from 'lucide-react';

const faqs = [
  {
    question: '¿Trabajan solo con empresas grandes o también con pymes?',
    answer: 'Trabajamos especialmente con pymes y negocios que ya están creciendo. La idea es ayudarte a ordenar procesos, digitalizar áreas y automatizar tareas sin sobredimensionar el proyecto.',
  },
  {
    question: '¿Necesito tener totalmente claro qué solución necesito antes de hablar con ustedes?',
    answer: 'No. Muchas veces el negocio sabe qué problema tiene, pero no qué herramienta conviene implementar. En la primera conversación te ayudamos a aterrizar si lo mejor es una automatización, un sistema interno, un agente de IA, una web o una combinación de varias cosas.',
  },
  {
    question: '¿Hacen solo proyectos con IA?',
    answer: 'No. Podemos desarrollar soluciones sin IA cuando eso es lo más útil para el negocio. La IA es una herramienta más dentro de una solución completa, no una obligación.',
  },
  {
    question: '¿Pueden integrarse con herramientas que ya usamos en la empresa?',
    answer: 'Sí. Podemos trabajar sobre herramientas que ya estén usando, como Google Workspace, Microsoft 365, WhatsApp, Shopify, Buk, sistemas internos, planillas o documentos en la nube, siempre que tenga sentido para la operación.',
  },
  {
    question: '¿Qué tipo de procesos se pueden automatizar?',
    answer: 'Solicitudes internas, aprobaciones, RRHH, seguimiento comercial, atención por WhatsApp, agendamiento, carga de documentos, digitalización de carpetas, registros operativos, ecommerce y muchos otros procesos repetitivos o desordenados.',
  },
  {
    question: '¿Qué pasa después de entregar la solución?',
    answer: 'Podemos dejar todo listo para que tu equipo lo use con autonomía o seguir acompañándote con mejoras, soporte y evolución continua según lo que tu negocio necesite.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <FadeIn>
            <Badge variant="outline" className="mb-4 bg-muted border-border text-primary font-bold px-4 py-1.5 rounded-full shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 mr-2" />
              Preguntas frecuentes
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
              Dudas comunes antes de avanzar
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Si estás evaluando automatización, IA, sistemas internos o digitalización, estas son algunas de las preguntas que más suelen aparecer.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 60}>
              <Card className="border-border bg-card/70 backdrop-blur shadow-lg shadow-black/5 rounded-[2rem]">
                <CardContent className="p-5 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MessageSquareMore size={18} />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
