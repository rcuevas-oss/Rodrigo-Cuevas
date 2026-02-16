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
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            Infraestructura de <span className="text-primary">Clase Mundial</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            No improvisamos. Utilizamos las mismas tecnologías que potencian a las empresas más grandes del mundo para garantizar tu escalabilidad.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {techs.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <FadeIn key={tech.name} delay={index * 50}>
                                <div className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                                    <div
                                        className="transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 flex items-center justify-center h-12 w-12"
                                        style={{ color: tech.color }}
                                    >
                                        <Icon size={40} />
                                    </div>
                                    <span className="mt-4 text-xs font-bold text-muted-foreground/60 transition-colors group-hover:text-foreground uppercase tracking-widest">
                                        {tech.name}
                                    </span>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                <FadeIn delay={600}>
                    <div className="mt-16 p-8 rounded-[2.5rem] bg-muted/30 border border-border/50 text-center max-w-3xl mx-auto">
                        <p className="text-sm font-medium text-muted-foreground italic">
                            "Nuestra arquitectura se basa en software de código abierto y nubes privadas, eliminando rentas constantes por usuario y dándote propiedad total de tu tecnología."
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
