import React from 'react';
import { SERVICES } from '../constants';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { FadeIn } from './FadeIn';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32 overflow-hidden bg-muted/30 border-y border-border">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur border-border text-primary font-bold px-4 py-1.5 rounded-full shadow-sm">
              Especialidades NexAI
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl mb-6">
              Servicios de <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Alta Ingeniería</span>
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl font-medium opacity-80 leading-relaxed">
              No ofrecemos soluciones genéricas. Construimos infraestructura inteligente que se integra profundamente en tu flujo operativo.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {SERVICES.map((service, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full group"
              >
                <Card className="h-full relative overflow-hidden bg-card/60 backdrop-blur-xl border-border/60 shadow-xl shadow-black/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/50">
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 bg-secondary text-primary"
                    >
                      <service.icon size={28} strokeWidth={2.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight flex items-center gap-2">
                      {service.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground" />
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {service.tags.map((tag) => (
                        <Badge
                          key={`${service.title}-${tag}`}
                          variant="secondary"
                          className="bg-secondary/50 text-muted-foreground text-[10px] font-bold px-2.5 py-1 border border-border/50 hover:bg-background hover:text-primary transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};