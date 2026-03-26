import React from 'react';
import { FadeIn } from './FadeIn';
import {
    SiGooglecloud,
    SiOpenai,
    SiFirebase,
    SiPython,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiStripe,
    SiGithub,
    SiVercel,
    SiDocker,
    SiPostgresql
} from 'react-icons/si';

const techs = [
    { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
    { name: 'OpenAI', icon: SiOpenai, color: '#412991' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Stripe', icon: SiStripe, color: '#008CD1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

export const TechStack: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Tecnología que usamos <span className="text-primary">cuando aporta valor</span>
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            Elegimos herramientas según lo que tu negocio necesita hoy y lo que te permitirá seguir creciendo con más orden mañana.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 lg:grid-cols-6 md:gap-8">
                    {techs.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <FadeIn key={tech.name} delay={index * 50}>
                                <div className="group relative flex flex-col items-center justify-center p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                                    <div
                                        className="transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12"
                                        style={{ color: tech.color }}
                                    >
                                        <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                                    </div>
                                    <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-bold text-muted-foreground/60 transition-colors group-hover:text-foreground uppercase tracking-widest text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={600}>
                    <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-muted/30 border border-border/50 text-center max-w-3xl mx-auto">
                        <p className="text-sm font-medium text-muted-foreground italic">
                            "La tecnología debe estar al servicio del negocio: elegimos lo necesario para que vendas mejor, ganes tiempo y trabajes con más orden."
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
