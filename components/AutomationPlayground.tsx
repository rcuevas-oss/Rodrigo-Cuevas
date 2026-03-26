import React, { useState, useEffect, useMemo } from 'react';
import ReactFlow, {
  Background,
  ReactFlowProvider,
  Handle,
  Position,
  NodeProps,
  Edge,
  Node,
  FitViewOptions
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import {
  Clock,
  Database,
  Mail,
  MessageSquare,
  Play,
  ShieldCheck,
  ChevronRight
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

const CustomNode = ({ data }: NodeProps) => {
  const Icon = data.icon || MessageSquare;
  const isMobile = data.isMobile;
  const isRunning = data.status === 'running';

  const statusStyles = {
    running: "bg-primary/20 text-primary border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.15)]",
    completed: "bg-emerald-500/20 text-emerald-600 border-emerald-500/30",
    queued: "bg-muted text-muted-foreground border-border"
  };

  const statusLabel = {
    running: "EN CURSO",
    completed: "LISTO",
    queued: "PENDIENTE"
  };

  return (
    <Card className={`relative ${isMobile ? 'min-w-[168px] rounded-xl p-3' : 'min-w-[220px] rounded-2xl p-4'} border-border/80 shadow-sm bg-card/95 backdrop-blur-sm transition-all duration-500 ${isRunning ? 'ring-2 ring-primary/50 scale-[1.02]' : ''}`}>
      <Handle
        type="target"
        position={data.targetPos || Position.Left}
        className="!w-2 !h-2 !bg-muted-foreground ring-4 ring-card"
      />

      <div className={`flex items-start ${isMobile ? 'gap-3' : 'gap-4'}`}>
        <div
          className={`${isMobile ? 'p-2 rounded-lg' : 'p-2.5 rounded-xl'} transition-all duration-500 flex items-center justify-center shadow-sm`}
          style={{
            backgroundColor: isRunning ? data.color : `${data.color}25`,
            color: isRunning ? '#ffffff' : data.color
          }}
        >
          <Icon size={isMobile ? 18 : 20} />
        </div>
        <div className="flex-1 overflow-hidden">
          <h4 className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-bold text-card-foreground leading-tight truncate`}>
            {data.title}
          </h4>
          <p className={`${isMobile ? 'text-[9px]' : 'text-[10px]'} text-muted-foreground mt-1 mb-2 truncate font-medium`}>
            {data.tool}
          </p>
          <Badge
            variant="outline"
            className={cn("text-[8px] md:text-[9px] px-2 h-4 font-black border-0 uppercase tracking-tighter", statusStyles[data.status as keyof typeof statusStyles])}
          >
            {statusLabel[data.status as keyof typeof statusLabel]}
          </Badge>
        </div>
      </div>

      {isRunning && (
        <motion.div
          className="absolute -bottom-[2px] left-4 right-4 h-[3px] bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}

      <Handle
        type="source"
        position={data.sourcePos || Position.Right}
        className="!w-2 !h-2 !bg-muted-foreground ring-4 ring-card"
      />
    </Card>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const scenarioMeta: Record<ScenarioKey, { label: string; subtitle: string; outcome: string }> = {
  rrhh: {
    label: 'RRHH',
    subtitle: 'Solicitudes, aprobaciones y registros internos más claros.',
    outcome: 'Resultado: menos trabajo manual y mejor trazabilidad en RRHH.'
  },
  cloud: {
    label: 'Documentos',
    subtitle: 'Digitalización, orden y acceso simple a documentos en la nube.',
    outcome: 'Resultado: documentos centralizados y menos desorden operativo.'
  },
  operations: {
    label: 'Operación',
    subtitle: 'Requerimientos internos, asignación y seguimiento operativo.',
    outcome: 'Resultado: procesos más claros y mejor control interno.'
  },
  shopify: {
    label: 'Shopify',
    subtitle: 'Embudo simple, compra, pago y postventa conectados.',
    outcome: 'Resultado: más orden comercial desde el interés hasta la postventa.'
  }
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
    { id: '5', title: 'Postventa y aviso', tool: 'Gmail / WhatsApp', icon: SiGooglecalendar, color: '#4285F4', status: 'queued' },
  ]
};

const edgesForScenario = (nodes: FlowNode[]) => {
  return nodes.slice(0, -1).map((node, i) => ({
    id: `e${node.id}-${nodes[i + 1].id}`,
    source: node.id,
    target: nodes[i + 1].id,
    animated: true,
    style: { stroke: i < 2 ? '#8b5cf6' : '#cbd5e1', strokeWidth: 2.5 }
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

  const { nodes, edges, runningNode } = useMemo(() => {
    const rawNodes = rawScenarios[currentScenario];
    const running = rawNodes.find(n => n.status === 'running');
    const runningIdx = rawNodes.findIndex(n => n.status === 'running') + 1;

    const positionedNodes = rawNodes.map((n, i) => {
      let x;
      let y;
      let targetPos;
      let sourcePos;

      if (isMobile) {
        x = 16;
        y = i * 98;
        targetPos = i === 0 ? Position.Left : Position.Top;
        sourcePos = Position.Bottom;
      } else {
        x = (i * 220) + 70;
        y = i % 2 === 0 ? 120 : 260;
        targetPos = Position.Left;
        sourcePos = Position.Right;
      }

      return {
        id: n.id,
        type: 'custom',
        position: { x, y },
        data: { ...n, isMobile, targetPos, sourcePos }
      };
    });

    return {
      nodes: positionedNodes,
      edges: edgesForScenario(rawNodes),
      runningNode: running ? { ...running, index: runningIdx } : null
    };
  }, [currentScenario, isMobile]);

  const fitViewOptions: FitViewOptions = {
    padding: isMobile ? 0.22 : 0.2,
    minZoom: isMobile ? 0.4 : 0.55,
    maxZoom: 0.9,
  };

  const currentMeta = scenarioMeta[currentScenario];

  return (
    <section id="flujos" className="relative w-full overflow-hidden py-16 md:py-24 bg-background border-y border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 overflow-hidden">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-[130px]" />
        <div className="h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px] -ml-40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <Badge variant="outline" className="mb-4 bg-muted border-border text-primary font-bold px-4 py-1 rounded-full shadow-sm">
            <Play className="w-3 h-3 mr-2 fill-primary" />
            Automatización e IA aplicada
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl mb-4">
            Así conectamos áreas y procesos del negocio
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg font-medium opacity-80">
            Desde RRHH y documentos hasta operación interna y ecommerce, diseñamos flujos con automatización e IA aplicada para que la empresa gane orden y velocidad.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 sm:gap-6 mb-10 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {(['rrhh', 'cloud', 'operations', 'shopify'] as const).map((scenario) => (
              <Button
                key={scenario}
                variant={currentScenario === scenario ? 'default' : 'outline'}
                onClick={() => setCurrentScenario(scenario)}
                className={`rounded-2xl px-4 sm:px-5 md:px-10 h-10 sm:h-11 md:h-14 truncate text-xs sm:text-sm font-bold shadow-xl transition-all duration-300 ${currentScenario === scenario ? 'bg-primary text-primary-foreground ring-4 sm:ring-8 ring-primary/10' : 'bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary'}`}
              >
                {scenarioMeta[scenario].label}
              </Button>
            ))}
          </div>

          <div className="w-full max-w-3xl bg-card/90 backdrop-blur-xl border border-border rounded-[1.5rem] sm:rounded-[2rem] py-4 px-5 sm:px-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between shadow-2xl">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-primary text-xs sm:text-sm font-black text-primary-foreground shadow-lg shadow-primary/20">
                {runningNode?.index || 1}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Paso {runningNode?.index || 1} de 5</span>
                <span className="text-sm sm:text-base md:text-lg font-bold text-foreground">{runningNode?.title || 'Iniciando flujo'}</span>
                <span className="text-xs text-muted-foreground mt-1">{currentMeta.subtitle}</span>
              </div>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto sm:min-w-[150px]">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-700 ${i <= (runningNode?.index || 1) ? 'bg-primary shadow-[0_0_12px_rgba(var(--primary),0.5)]' : 'bg-muted'}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] bg-card/40 backdrop-blur-md rounded-[2rem] sm:rounded-[3rem] border border-border shadow-2xl overflow-hidden ring-1 ring-border">
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes as Node[]}
              edges={edges as Edge[]}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={fitViewOptions}
              zoomOnPinch={true}
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
              <Background color="#cbd5e1" gap={32} size={1.5} variant={"dots" as any} className="opacity-10" />
            </ReactFlow>
          </ReactFlowProvider>

          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 pointer-events-none">
            <div className="bg-foreground/95 backdrop-blur-xl border border-background/10 p-2 pr-4 pl-3 sm:p-2.5 sm:px-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-2 sm:gap-3">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              <span className="text-[11px] font-black text-background uppercase tracking-widest leading-none">Flujo simplificado</span>
            </div>
          </div>

          <motion.div
            className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Sigue explorando</span>
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground shadow-sm">
              <ChevronRight className="rotate-90" size={16} />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm text-muted-foreground text-xs font-bold">
            <Clock className="w-4 h-4 text-primary" />
            {currentMeta.outcome}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationPlayground;
