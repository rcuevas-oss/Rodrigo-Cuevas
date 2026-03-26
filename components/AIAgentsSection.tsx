import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  ArrowRight,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  MessagesSquare,
  Network,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  SiGooglecalendar,
  SiGoogledrive,
  SiGoogleforms,
  SiWhatsapp,
} from 'react-icons/si';

const capabilities = [
  {
    eyebrow: 'Contexto real',
    title: 'Adaptado a tu rubro y a tu forma de atender',
    description:
      'Entrenamos el agente con el lenguaje del negocio, preguntas frecuentes, servicios, criterios comerciales y procesos internos.',
    icon: BrainCircuit,
  },
  {
    eyebrow: 'Más que responder',
    title: 'Clasifica, agenda, deriva y deja acciones listas',
    description:
      'No es una caja de texto bonita. Puede calificar consultas, proponer horarios, derivar al área correcta y dejar registro.',
    icon: Route,
  },
  {
    eyebrow: 'Conectado',
    title: 'Se integra con los canales y herramientas que ya usas',
    description:
      'Web, WhatsApp, formularios, agenda y documentos pueden quedar conectados para que el agente responda con más contexto.',
    icon: Network,
  },
];

const conversation = [
  {
    role: 'user',
    label: 'Cliente',
    text: 'Necesito automatizar solicitudes internas y que el agente pueda orientar y agendar una reunión.',
  },
  {
    role: 'agent',
    label: 'Agente NexAI',
    text: 'Puedo responder con el contexto de tu negocio, clasificar la necesidad, derivar al área correcta y dejar una reunión propuesta.',
  },
];

const agentActions = [
  { title: 'Responde con contexto', icon: MessagesSquare },
  { title: 'Agenda y califica', icon: CalendarClock },
  { title: 'Deriva al equipo', icon: Route },
];

const integrations = [
  { title: 'WhatsApp', icon: SiWhatsapp, color: '#25D366' },
  { title: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4' },
  { title: 'Google Drive', icon: SiGoogledrive, color: '#0F9D58' },
  { title: 'Google Forms', icon: SiGoogleforms, color: '#7248B9' },
];

const systemSignals = [
  'Clasifica la consulta en segundos',
  'Propone siguiente paso y horario',
  'Deriva con contexto al equipo',
];

const demoHighlights = [
  {
    title: 'Califica la intención',
    text: 'Detecta si la consulta necesita atención comercial, soporte o agenda.',
    icon: BrainCircuit,
  },
  {
    title: 'Orquesta el siguiente paso',
    text: 'Propone horario, deriva al área correcta y deja contexto listo.',
    icon: CalendarClock,
  },
];

export const AIAgentsSection: React.FC = () => {
  return (
    <section
      id="agentes-ia"
      className="relative overflow-hidden border-y border-[#dbe4ed] bg-[#f4f7fb] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(114, 137, 255, 0.10), transparent 24%), radial-gradient(circle at 88% 14%, rgba(164, 255, 115, 0.08), transparent 20%), linear-gradient(180deg, #f4f7fb 0%, #f8fbfd 34%, #ffffff 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <FadeIn>
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-[#dbe3ec] bg-white/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-primary shadow-sm"
            >
              <BrainCircuit className="mr-2 h-3.5 w-3.5" />
              Agentes de IA para atención
            </Badge>
            <h2 className="mb-5 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Creamos agentes de IA, no solo un chat
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Diseñamos agentes que responden con criterio, entienden el contexto de tu negocio y ejecutan acciones útiles en lugar de quedarse en una conversación superficial.
            </p>
          </FadeIn>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <FadeIn>
            <div className="rounded-[2.6rem] border border-[#dce5ee] bg-white/90 p-6 shadow-[0_26px_70px_rgba(70,85,98,0.06)] backdrop-blur sm:p-8">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary">
                    Atención inteligente
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
                    Un agente que entiende, responde y actúa con el tono de tu negocio
                  </h3>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_16px_34px_rgba(17,24,39,0.14)] sm:flex">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="grid gap-4">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="rounded-[2rem] border border-[#e2e9ef] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfd_100%)] p-5 shadow-[0_18px_36px_rgba(70,85,98,0.05)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_16px_32px_rgba(17,24,39,0.14)]">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                          {item.eyebrow}
                        </p>
                        <h4 className="mt-2 text-lg font-semibold tracking-[-0.03em] text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="relative overflow-hidden rounded-[2.8rem] border border-[#1d2835] bg-[#0b1118] p-5 text-white shadow-[0_38px_110px_rgba(10,18,30,0.28)] sm:p-6">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 86% 12%, rgba(199, 255, 99, 0.16), transparent 18%), radial-gradient(circle at 10% 92%, rgba(92, 129, 255, 0.22), transparent 24%), linear-gradient(135deg, #0d141d 0%, #121b27 46%, #091019 100%)',
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    'linear-gradient(120deg, rgba(7, 10, 16, 0.18) 0%, rgba(7, 10, 16, 0.05) 26%, rgba(7, 10, 16, 0.58) 62%, rgba(7, 10, 16, 0.88) 100%)',
                }}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[46%] bg-[linear-gradient(90deg,rgba(11,17,24,0)_0%,rgba(11,17,24,0.28)_12%,rgba(11,17,24,0.82)_58%,#091019_100%)]" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.9rem] border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#c7ff63]">
                      Demo de agente
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Atención, clasificación y agenda
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/70">
                    <span className="h-2 w-2 rounded-full bg-[#c7ff63] shadow-[0_0_16px_rgba(199,255,99,0.7)]" />
                    En vivo
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {integrations.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: 0.15 + index * 0.05 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75"
                    >
                      <item.icon size={13} color={item.color} />
                      <span>{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur sm:p-5">
                    <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                      <MessagesSquare size={13} className="text-[#c7ff63]" />
                      Conversación realista
                    </div>

                    <div className="space-y-3.5">
                      {conversation.map((item, index) => (
                        <motion.div
                          key={`${item.label}-${item.text}`}
                          initial={{ opacity: 0, x: item.role === 'user' ? 16 : -16, y: 12 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className={`max-w-[92%] border px-4 py-4 ${
                            item.role === 'user'
                              ? 'ml-auto rounded-[1.6rem_1.6rem_0.7rem_1.6rem] border-white/12 bg-white/10'
                              : 'mr-auto rounded-[1.6rem_1.6rem_1.6rem_0.7rem] border-white/12 bg-[#081019] shadow-[0_12px_28px_rgba(0,0,0,0.22)]'
                          }`}
                        >
                          <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                            {item.label}
                          </p>
                          <p className="text-sm leading-relaxed text-white/85">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {agentActions.map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80"
                        >
                          <item.icon size={14} className="text-[#c7ff63]" />
                          <span>{item.title}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: 0.22 }}
                      className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                            Estado del agente
                          </p>
                          <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-white">
                            Listo para atender, clasificar y ejecutar
                          </p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[#c7ff63]">
                          <ShieldCheck size={18} />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: 0.3 }}
                      className="rounded-[1.8rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                        Acciones en segundo plano
                      </p>
                      <div className="mt-4 grid gap-3">
                        {systemSignals.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#0a121c] px-3.5 py-3"
                          >
                            <CheckCircle2 size={15} className="shrink-0 text-[#c7ff63]" />
                            <span className="text-sm leading-relaxed text-white/[0.78]">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: 0.36 }}
                      className="rounded-[1.8rem] border border-white/10 bg-[rgba(10,18,28,0.9)] p-4"
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                        Capa de decisión
                      </p>
                      <div className="mt-4 grid gap-3">
                        {demoHighlights.map((item) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/8 text-[#c7ff63]">
                                <item.icon size={15} />
                              </div>
                              <p className="text-sm font-semibold text-white">{item.title}</p>
                            </div>
                            <p className="text-xs leading-relaxed text-white/[0.62]">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/[0.68]">
                    Puede vivir en web, WhatsApp o formularios y conectarse con tu agenda, documentos o procesos internos para responder mejor y dejar acciones listas.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      asChild
                      className="h-12 rounded-full bg-[#c7ff63] px-6 text-[#111827] shadow-[0_18px_40px_rgba(199,255,99,0.18)] hover:bg-[#d8ff91] sm:w-auto"
                    >
                      <a href="#contacto">
                        Quiero un agente para mi negocio
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 rounded-full border-white/14 bg-white/[0.04] px-6 text-white hover:bg-white/[0.08] hover:text-white"
                    >
                      <a href="#casos-de-uso">Ver casos de uso</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
