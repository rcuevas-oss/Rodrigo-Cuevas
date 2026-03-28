import React, { useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Background,
  Edge,
  FitViewOptions,
  Handle,
  Node,
  NodeProps,
  Position,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import {
  ChevronRight,
  Clock,
  Database,
  Mail,
  MessageSquare,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  SiGmail,
  SiGoogle,
  SiGooglecalendar,
  SiGoogledrive,
  SiGoogleforms,
  SiGooglesheets,
  SiInstagram,
  SiMercadopago,
  SiShopify,
  SiWhatsapp,
} from 'react-icons/si';

type ScenarioKey = 'rrhh' | 'cloud' | 'operations' | 'shopify';

type FlowNode = {
  id: string;
  title: string;
  tool: string;
  icon: any;
  color: string;
  status: 'completed' | 'running' | 'queued';
};

type ScenarioMeta = {
  label: string;
  subtitle: string;
  outcome: string;
  accent: string;
  note: string;
  chips: string[];
};

const scenarioMeta: Record<ScenarioKey, ScenarioMeta> = {
  rrhh: {
    label: 'RRHH',
    subtitle: 'Solicitudes, aprobaciones y registros internos más claros.',
    outcome: 'Resultado: menos trabajo manual y mejor trazabilidad en RRHH.',
    accent: '#8ea6ff',
    note: 'Ideal para solicitudes, cambios, aprobaciones y tareas repetitivas que hoy viven entre formularios, correo y planillas.',
    chips: ['solicitudes internas', 'aprobaciones', 'trazabilidad'],
  },
  cloud: {
    label: 'Documentos',
    subtitle: 'Digitalización, orden y acceso simple a documentos en la nube.',
    outcome: 'Resultado: documentos centralizados y menos desorden operativo.',
    accent: '#7ee0ff',
    note: 'Útil cuando la empresa necesita ordenar documentos, clasificación y acceso desde una operación más distribuida.',
    chips: ['documentos', 'clasificación', 'nube'],
  },
  operations: {
    label: 'Operación',
    subtitle: 'Requerimientos internos, asignación y seguimiento operativo.',
    outcome: 'Resultado: procesos más claros y mejor control interno.',
    accent: '#c7ff63',
    note: 'Pensado para requerimientos operativos, coordinación interna y seguimiento de estados con menos pasos manuales.',
    chips: ['seguimiento', 'priorización', 'control'],
  },
  shopify: {
    label: 'Shopify',
    subtitle: 'Embudo simple, compra, pago y postventa conectados.',
    outcome: 'Resultado: más orden comercial desde el interés hasta la postventa.',
    accent: '#59d6b5',
    note: 'Sirve para ecommerce, seguimiento comercial, compra, pago y comunicaciones posteriores sin fricción operativa.',
    chips: ['ecommerce', 'pago', 'postventa'],
  },
};

const rawScenarios: Record<ScenarioKey, FlowNode[]> = {
  rrhh: [
    { id: '1', title: 'Solicitud del colaborador', tool: 'Google Forms', icon: SiGoogleforms, color: '#7248B9', status: 'completed' },
    { id: '2', title: 'Validación', tool: 'Google Sheets', icon: SiGooglesheets, color: '#0F9D58', status: 'completed' },
    { id: '3', title: 'Aprobación', tool: 'Buk / Correo', icon: ShieldCheck, color: '#64748b', status: 'running' },
    { id: '4', title: 'Registro del cambio', tool: 'Buk', icon: Database, color: '#475569', status: 'queued' },
    { id: '5', title: 'Aviso al equipo', tool: 'Gmail', icon: SiGmail, color: '#D14836', status: 'queued' },
  ],
  cloud: [
    { id: '1', title: 'Ingreso de documento', tool: 'Gmail', icon: SiGmail, color: '#D14836', status: 'completed' },
    { id: '2', title: 'Clasificación', tool: 'Google Sheets', icon: SiGooglesheets, color: '#0F9D58', status: 'completed' },
    { id: '3', title: 'Guardado en nube', tool: 'Google Drive', icon: SiGoogledrive, color: '#0F9D58', status: 'running' },
    { id: '4', title: 'Revisión', tool: 'Outlook / Correo', icon: Mail, color: '#0A66C2', status: 'queued' },
    { id: '5', title: 'Acceso al equipo', tool: 'Drive / Microsoft 365', icon: SiGoogle, color: '#4285F4', status: 'queued' },
  ],
  operations: [
    { id: '1', title: 'Solicitud interna', tool: 'WhatsApp', icon: SiWhatsapp, color: '#25D366', status: 'completed' },
    { id: '2', title: 'Priorización', tool: 'Google Sheets', icon: SiGooglesheets, color: '#0F9D58', status: 'running' },
    { id: '3', title: 'Asignación', tool: 'Outlook', icon: Mail, color: '#0A66C2', status: 'queued' },
    { id: '4', title: 'Registro', tool: 'Defontana / Base interna', icon: Database, color: '#475569', status: 'queued' },
    { id: '5', title: 'Cierre del caso', tool: 'Correo', icon: SiGmail, color: '#D14836', status: 'queued' },
  ],
  shopify: [
    { id: '1', title: 'Interés del cliente', tool: 'Instagram / Landing', icon: SiInstagram, color: '#E4405F', status: 'completed' },
    { id: '2', title: 'Seguimiento simple', tool: 'WhatsApp Business', icon: SiWhatsapp, color: '#25D366', status: 'completed' },
    { id: '3', title: 'Compra en tienda', tool: 'Shopify', icon: SiShopify, color: '#7AB55C', status: 'running' },
    { id: '4', title: 'Pago y registro', tool: 'Webpay / Mercado Pago', icon: SiMercadopago, color: '#009EE3', status: 'queued' },
    { id: '5', title: 'Postventa y aviso', tool: 'Gmail / Calendar', icon: SiGooglecalendar, color: '#4285F4', status: 'queued' },
  ],
};

const CustomNode = ({ data }: NodeProps) => {
  const Icon = data.icon || MessageSquare;
  const isMobile = data.isMobile;
  const isRunning = data.status === 'running';

  const statusStyles = {
    running: 'bg-[#111827] text-white border-[#111827] shadow-[0_12px_28px_rgba(17,24,39,0.12)]',
    completed: 'bg-emerald-500/16 text-emerald-700 border-emerald-500/20',
    queued: 'bg-[#f3f7fa] text-[#6c7b88] border-[#dce5ec]',
  };

  const statusLabel = {
    running: 'EN CURSO',
    completed: 'LISTO',
    queued: 'PENDIENTE',
  };

  return (
    <Card
      className={cn(
        'relative border-[#dbe4ec] bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,249,252,0.95))] shadow-[0_14px_34px_rgba(70,85,98,0.06)] backdrop-blur-sm transition-all duration-500',
        isMobile ? 'min-w-[176px] rounded-[1.05rem] p-3' : 'min-w-[228px] rounded-[1.35rem] p-4',
        isRunning ? 'ring-2 ring-[#111827]/10 shadow-[0_20px_44px_rgba(17,24,39,0.1)]' : '',
      )}
    >
      <Handle
        type="target"
        position={data.targetPos || Position.Left}
        className="!h-2 !w-2 !bg-[#95a3b3] ring-4 ring-white"
      />

      <div className={cn('flex items-start', isMobile ? 'gap-3' : 'gap-4')}>
        <div
          className={cn(
            'flex items-center justify-center shadow-[0_10px_24px_rgba(17,24,39,0.08)]',
            isMobile ? 'rounded-xl p-2' : 'rounded-2xl p-2.5',
          )}
          style={{
            backgroundColor: isRunning ? data.color : `${data.color}18`,
            color: isRunning ? '#ffffff' : data.color,
          }}
        >
          <Icon size={isMobile ? 18 : 20} />
        </div>

        <div className="min-w-0 flex-1">
          <h4 className={cn('truncate font-bold leading-tight text-[#111827]', isMobile ? 'text-[10px]' : 'text-xs')}>
            {data.title}
          </h4>
          <p className={cn('mt-1 truncate font-medium text-[#70808d]', isMobile ? 'text-[9px]' : 'text-[10px]')}>
            {data.tool}
          </p>
          <Badge
            variant="outline"
            className={cn(
              'mt-2 h-4 border px-2 text-[8px] font-black uppercase tracking-tight',
              statusStyles[data.status as keyof typeof statusStyles],
            )}
          >
            {statusLabel[data.status as keyof typeof statusLabel]}
          </Badge>
        </div>
      </div>

      {isRunning && (
        <motion.div
          className="absolute -bottom-[2px] left-4 right-4 h-[3px] overflow-hidden rounded-full bg-[#e3ebf2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: data.color }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}

      <Handle
        type="source"
        position={data.sourcePos || Position.Right}
        className="!h-2 !w-2 !bg-[#95a3b3] ring-4 ring-white"
      />
    </Card>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const edgesForScenario = (nodes: FlowNode[], accent: string) => {
  const runningIndex = nodes.findIndex((node) => node.status === 'running');

  return nodes.slice(0, -1).map((node, i) => ({
    id: `e${node.id}-${nodes[i + 1].id}`,
    source: node.id,
    target: nodes[i + 1].id,
    animated: i <= runningIndex,
    style: {
      stroke: i < runningIndex ? accent : '#d7e0e8',
      strokeWidth: i < runningIndex ? 2.8 : 2.2,
      strokeDasharray: i < runningIndex ? undefined : '4 4',
    },
  }));
};

export const AutomationPlayground: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<ScenarioKey>('rrhh');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentMeta = scenarioMeta[currentScenario];

  const { nodes, edges, runningNode } = useMemo(() => {
    const rawNodes = rawScenarios[currentScenario];
    const running = rawNodes.find((node) => node.status === 'running');
    const runningIdx = rawNodes.findIndex((node) => node.status === 'running') + 1;

    const positionedNodes = rawNodes.map((node, i) => {
      let x;
      let y;
      let targetPos;
      let sourcePos;

      if (isMobile) {
        x = 16;
        y = i * 102;
        targetPos = i === 0 ? Position.Left : Position.Top;
        sourcePos = Position.Bottom;
      } else {
        x = i * 220 + 78;
        y = i % 2 === 0 ? 120 : 264;
        targetPos = Position.Left;
        sourcePos = Position.Right;
      }

      return {
        id: node.id,
        type: 'custom',
        position: { x, y },
        data: { ...node, isMobile, targetPos, sourcePos },
      };
    });

    return {
      nodes: positionedNodes,
      edges: edgesForScenario(rawNodes, currentMeta.accent),
      runningNode: running ? { ...running, index: runningIdx } : null,
    };
  }, [currentScenario, currentMeta.accent, isMobile]);

  const fitViewOptions: FitViewOptions = {
    padding: isMobile ? 0.24 : 0.2,
    minZoom: isMobile ? 0.4 : 0.55,
    maxZoom: 0.9,
  };

  return (
    <section
      id="flujos"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f8_46%,#f7fafc_100%)] py-16 sm:py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 16% 16%, rgba(142,166,255,0.14), transparent 22%), radial-gradient(circle at 85% 16%, rgba(126,224,255,0.14), transparent 18%), radial-gradient(circle at 50% 100%, rgba(199,255,99,0.1), transparent 24%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end lg:gap-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-[#d7e1e9] bg-white/85 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-[0_14px_30px_rgba(70,85,98,0.05)]"
            >
              <Play className="mr-2 h-3 w-3 fill-current" />
              Automatización e IA aplicada
            </Badge>
            <h2 className="max-w-4xl text-[2.72rem] font-semibold tracking-[-0.07em] text-foreground sm:text-5xl lg:text-[4.18rem]">
              Así conectamos áreas y procesos del negocio
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[#60707e] sm:text-lg">
              Desde RRHH y documentos hasta operación interna y ecommerce, diseñamos flujos con automatización e IA aplicada para que la empresa gane orden y velocidad.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-[#111827] p-5 text-white shadow-[0_26px_70px_rgba(17,24,39,0.16)] sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: currentMeta.accent }}>
                Lectura actual
              </p>
              <h3 className="mt-3 text-[1.38rem] font-semibold tracking-[-0.04em] sm:text-[1.56rem]">
                {currentMeta.label}: una forma simple de mover el proceso sin depender tanto de pasos manuales.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/72">{currentMeta.note}</p>
            </div>

            <div className="rounded-[1.9rem] border border-[#d8e1e8] bg-white/90 p-5 shadow-[0_22px_60px_rgba(70,85,98,0.07)] sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">Dónde impacta</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {currentMeta.chips.map((chip) => (
                  <div
                    key={chip}
                    className="rounded-full border border-[#dce4ea] bg-[#f6f9fb] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]"
                  >
                    {chip}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[1.02rem] font-semibold tracking-[-0.03em] text-[#111827]">
                Cambia la secuencia de trabajo, no solo el aspecto del flujo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 sm:gap-6">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {(['rrhh', 'cloud', 'operations', 'shopify'] as const).map((scenario) => {
              const active = currentScenario === scenario;

              return (
                <Button
                  key={scenario}
                  variant={active ? 'default' : 'outline'}
                  onClick={() => setCurrentScenario(scenario)}
                  className={cn(
                    'h-11 rounded-2xl px-4 text-xs font-black uppercase tracking-[0.14em] shadow-[0_12px_26px_rgba(70,85,98,0.06)] transition-all duration-300 sm:h-12 sm:px-6',
                    active
                      ? 'border-transparent bg-[#111827] text-white'
                      : 'border-[#dbe4ec] bg-white/85 text-[#61707c] hover:border-[#c7d3dc] hover:bg-white',
                  )}
                >
                  {scenarioMeta[scenario].label}
                </Button>
              );
            })}
          </div>

          <div className="grid w-full max-w-4xl gap-4 rounded-[2rem] border border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,249,252,0.95))] p-4 shadow-[0_24px_62px_rgba(70,85,98,0.06)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111827] text-sm font-black text-white shadow-[0_16px_34px_rgba(17,24,39,0.12)]">
                {runningNode?.index || 1}
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">
                  Paso {runningNode?.index || 1} de 5
                </span>
                <span className="mt-1 block text-base font-semibold tracking-[-0.03em] text-[#111827] sm:text-lg">
                  {runningNode?.title || 'Iniciando flujo'}
                </span>
                <span className="mt-1 block text-xs text-[#667684] sm:text-sm">{currentMeta.subtitle}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:min-w-[180px]">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={cn(
                    'h-2 flex-1 rounded-full transition-all duration-700',
                    index <= (runningNode?.index || 1) ? 'shadow-[0_0_12px_rgba(17,24,39,0.12)]' : 'bg-[#e6edf3]',
                  )}
                  style={{
                    backgroundColor: index <= (runningNode?.index || 1) ? currentMeta.accent : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-8 h-[430px] overflow-hidden rounded-[2.2rem] border border-[#d8e1e8] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,247,250,0.95))] shadow-[0_28px_80px_rgba(70,85,98,0.08)] sm:h-[500px] sm:rounded-[2.6rem] md:h-[570px]">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[radial-gradient(circle,rgba(142,166,255,0.18),transparent_72%)] blur-3xl" />

          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes as Node[]}
              edges={edges as Edge[]}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={fitViewOptions}
              zoomOnPinch
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              panOnScroll={false}
              panOnDrag={false}
              preventScrolling={false}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
              maxZoom={1}
              minZoom={0.1}
            >
              <Background color="#cbd5e1" gap={32} size={1.3} variant={"dots" as any} className="opacity-10" />
            </ReactFlow>
          </ReactFlowProvider>

          <div className="pointer-events-none absolute right-4 top-4 sm:right-8 sm:top-8">
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-[#111827] px-3 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.16)] sm:px-5">
              <div
                className="h-2 w-2 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                style={{ backgroundColor: currentMeta.accent }}
              />
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white">Flujo simplificado</span>
            </div>
          </div>

          <motion.div
            className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#748292]">Sigue explorando</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbe4ec] bg-white/82 text-[#667684] shadow-[0_12px_26px_rgba(70,85,98,0.05)]">
              <ChevronRight className="rotate-90" size={16} />
            </div>
          </motion.div>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#dbe4ec] bg-white/82 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f6f7d] shadow-[0_12px_26px_rgba(70,85,98,0.04)]">
          <Clock className="h-3.5 w-3.5 text-[#79aa0f]" />
          {currentMeta.outcome}
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#dbe4ec] bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#5f6f7d] shadow-[0_10px_24px_rgba(70,85,98,0.04)]">
          <Sparkles className="h-3.5 w-3.5 text-[#8ea6ff]" />
          Flujos pensados para que el negocio gane orden y velocidad real
        </div>
      </div>
    </section>
  );
};

export default AutomationPlayground;
