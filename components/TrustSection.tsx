import React from 'react';
import { FadeIn } from './FadeIn';
import { Card, CardContent } from './ui/card';
import { Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const TRUST_FACTORS = [
    {
        title: "Sin Costos Ocultos",
        description: "Modelo transparente. Sabes exactamente qué pagas y qué obtienes desde el día uno.",
        icon: ShieldCheck,
    },
    {
        title: "Resultados en Semanas",
        description: "No esperes años. Implementamos MVPs funcionales en ciclos rápidos de 2 semanas.",
        icon: Zap,
    },
    {
        title: "Escala Contigo",
        description: "Tu infraestructura crece automáticamente con tu negocio. Desde 10 usuarios hasta grandes operaciones globales.",
        icon: TrendingUp,
    },
];

export const TrustSection: React.FC = () => {
    return (
        <section className="py-12 bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {TRUST_FACTORS.map((factor, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <Card className="border-none shadow-none bg-transparent">
                                <CardContent className="p-0 flex flex-col items-center text-center sm:items-start sm:text-left">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                        <factor.icon size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">{factor.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {factor.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
