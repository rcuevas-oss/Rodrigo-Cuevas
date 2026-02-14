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
    Database,
    Truck,
    Zap,
    CheckCircle2,
    Clock,
    Play,
    ShieldCheck,
    Bot,
    MessageSquare,
    ChevronRight
} from 'lucide-react';
import {
    SiWhatsapp,
    SiOpenai,
    SiSlack,
    SiGmail,
    SiSalesforce,
    SiHubspot,
    SiShopify,
    SiStripe,
    SiZapier,
    SiTrello,
    SiAsana,
    SiFacebook,
    SiGoogle
} from 'react-icons/si';

// --- CUSTOM NODE ---
const CustomNode = ({ data }: NodeProps) => {
    const Icon = data.icon || MessageSquare;
    const isMobile = data.isMobile;
    const isRunning = data.status === 'running';

    const statusStyles = {
        running: "bg-violet-50 text-violet-600 border-violet-100 shadow-[0_0_20px_rgba(139,92,246,0.15)]",
        completed: "bg-green-50 text-green-600 border-green-100",
        queued: "bg-slate-50 text-slate-400 border-slate-200"
    };

    const statusLabel = {
        running: "RUNNING",
        completed: "COMPLETED",
        queued: "QUEUED"
    };

    return (
        <Card className={`relative ${isMobile ? 'min-w-[155px]' : 'min-w-[200px]'} border-slate-200/80 shadow-sm rounded-2xl p-4 bg-white/95 backdrop-blur-sm transition-all duration-500 ${isRunning ? 'ring-2 ring-violet-500/20 scale-[1.02]' : ''}`}>
            <Handle
                type="target"
                position={data.targetPos || Position.Left}
                className="!w-2 !h-2 !bg-slate-300 ring-4 ring-white"
            />

            <div className="flex items-start gap-4">
                <div
                    className="p-2.5 rounded-xl transition-all duration-500 flex items-center justify-center shadow-sm"
                    style={{
                        backgroundColor: isRunning ? data.color : `${data.color}15`,
                        color: isRunning ? '#ffffff' : data.color
                    }}
                >
                    <Icon size={isMobile ? 18 : 20} />
                </div>
                <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between mb-1.5">
                        <h4 className={`${isMobile ? 'text-[11px]' : 'text-xs'} font-bold text-slate-900 leading-none truncate`}>
                            {data.title}
                        </h4>
                    </div>
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
                    className="absolute -bottom-[2px] left-4 right-4 h-[3px] bg-slate-100 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="h-full bg-violet-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            )}

            <Handle
                type="source"
                position={data.sourcePos || Position.Right}
                className="!w-2 !h-2 !bg-slate-300 ring-4 ring-white"
            />
        </Card>
    );
};

const nodeTypes = {
    custom: CustomNode,
};

// --- DATA SCENARIOS (7 Steps with Brand Icons & Colors) ---
const rawScenarios = {
    whatsapp: [
        { id: '1', title: 'Entrada WhatsApp', subtitle: 'Trigger', icon: SiWhatsapp, color: '#25D366', status: 'completed' },
        { id: '2', title: 'Filtro de Spam', subtitle: 'IA Cleanup', icon: ShieldCheck, color: '#64748b', status: 'completed' },
        { id: '3', title: 'Clasificador IA', subtitle: 'OpenAI GPT-4', icon: SiOpenai, color: '#412991', status: 'running' },
        { id: '4', title: 'Consulta Base Datos', subtitle: 'Búsqueda', icon: Database, color: '#475569', status: 'queued' },
        { id: '5', title: 'Generar Respuesta', subtitle: 'IA Gen', icon: Zap, color: '#f59e0b', status: 'queued' },
        { id: '6', title: 'Registro Salesforce', subtitle: 'Acción CRM', icon: SiSalesforce, color: '#00A1E0', status: 'queued' },
        { id: '7', title: 'Notificación Slack', subtitle: 'Resultado', icon: SiSlack, color: '#4A154B', status: 'queued' },
    ],
    leads: [
        { id: '1', title: 'Facebook Ads', subtitle: 'Trigger', icon: SiFacebook, color: '#1877F2', status: 'completed' },
        { id: '2', title: 'Limpieza IA', subtitle: 'Analytics Sync', icon: SiGoogle, color: '#4285F4', status: 'completed' },
        { id: '3', title: 'Enriquecimiento', subtitle: 'HubSpot Sync', icon: SiHubspot, color: '#FF7A59', status: 'running' },
        { id: '4', title: 'Scoring IA', subtitle: 'OpenAI Model', icon: SiOpenai, color: '#412991', status: 'queued' },
        { id: '5', title: 'Asignación CRM', subtitle: 'Salesforce', icon: SiSalesforce, color: '#00A1E0', status: 'queued' },
        { id: '6', title: 'Email Tracking', subtitle: 'Gmail API', icon: SiGmail, color: '#D14836', status: 'queued' },
        { id: '7', title: 'Reporte Trello', subtitle: 'Board Sync', icon: SiTrello, color: '#0079BF', status: 'queued' },
    ],
    ecommerce: [
        { id: '1', title: 'Tienda Shopify', subtitle: 'Trigger', icon: SiShopify, color: '#7AB55C', status: 'completed' },
        { id: '2', title: 'Pago Stripe', subtitle: 'Payment', icon: SiStripe, color: '#635BFF', status: 'completed' },
        { id: '3', title: 'Detección Fraude', subtitle: 'IA Security', icon: ShieldCheck, color: '#64748b', status: 'running' },
        { id: '4', title: 'Generar Guía', subtitle: 'Logística', icon: Truck, color: '#475569', status: 'queued' },
        { id: '5', title: 'Logística Zapier', subtitle: 'Webhooks', icon: SiZapier, color: '#FF4F00', status: 'queued' },
        { id: '6', title: 'Actualizar ERP', subtitle: 'Asana Sync', icon: SiAsana, color: '#F06560', status: 'queued' },
        { id: '7', title: 'Email Cliente', subtitle: 'Gmail', icon: SiGmail, color: '#D14836', status: 'queued' },
    ]
};

const edgesForScenario = (nodes: any[]) => {
    return nodes.slice(0, -1).map((node, i) => ({
        id: `e${node.id}-${nodes[i + 1].id}`,
        source: node.id,
        target: nodes[i + 1].id,
        animated: true,
        style: { stroke: i < 3 ? '#8b5cf6' : '#cbd5e1', strokeWidth: 2 }
    }));
};

export const AutomationPlayground: React.FC = () => {
    const [currentScenario, setCurrentScenario] = useState<keyof typeof rawScenarios>('whatsapp');
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
            let x, y, targetPos, sourcePos;

            if (isMobile) {
                x = (i % 2) * 170;
                y = Math.floor(i / 2) * 130;
                targetPos = Position.Left;
                sourcePos = Position.Right;
                if (i % 2 === 1 && i < 6) sourcePos = Position.Bottom;
                if (i % 2 === 0 && i > 0) targetPos = Position.Top;
            } else {
                // DESKTOP SNAKE LAYOUT (7 Steps) - Centered
                const spacingX = 250;
                const offsetX = 110;
                if (i < 4) {
                    x = (i * spacingX) + offsetX;
                    y = 50;
                    targetPos = Position.Left;
                    sourcePos = Position.Right;
                    if (i === 3) sourcePos = Position.Bottom;
                } else {
                    x = ((3 - (i - 4)) * spacingX) + offsetX;
                    y = 230;
                    targetPos = (i === 4) ? Position.Top : Position.Right;
                    sourcePos = Position.Left;
                }
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
        padding: isMobile ? 0.35 : 0.25,
        minZoom: isMobile ? 0.25 : 0.5,
        maxZoom: 0.85,
    };

    return (
        <section id="evaluador-ia" className="relative w-full overflow-hidden py-16 md:py-24 bg-slate-50/30 border-y border-slate-100">
            {/* Background Aura & Floating Icons */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-40 overflow-hidden">
                <div className="h-[600px] w-[600px] rounded-full bg-violet-100 blur-[130px]" />
                <div className="h-[400px] w-[400px] rounded-full bg-blue-50 blur-[100px] -ml-40" />

                <div className="absolute top-[10%] left-[15%] opacity-20 blur-[1px] transform rotate-12" style={{ color: '#D14836' }}>
                    <SiGmail size={48} />
                </div>
                <div className="absolute top-[25%] right-[12%] opacity-15 blur-[2px] transform -rotate-12" style={{ color: '#4A154B' }}>
                    <SiSlack size={64} />
                </div>
                <div className="absolute bottom-[20%] left-[10%] opacity-20 blur-[1px] transform -rotate-6" style={{ color: '#FF4F00' }}>
                    <SiZapier size={56} />
                </div>
                <div className="absolute bottom-[10%] right-[15%] opacity-15 blur-[2px] transform rotate-12" style={{ color: '#000000' }}>
                    <SiOpenai size={80} />
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 relative z-10">
                <div className="text-center mb-10">
                    <Badge variant="outline" className="mb-4 bg-white/80 border-slate-200 text-violet-600 font-bold px-4 py-1 rounded-full shadow-sm">
                        <Play className="w-3 h-3 mr-2 fill-violet-600" />
                        NexAI Intelligence Flow
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter text-slate-950 sm:text-4xl md:text-5xl mb-4">
                        Flujo de automatización <span className="text-violet-600">Premium</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium opacity-80">
                        Visualiza cómo orquestamos 7 procesos críticos integrando las mejores herramientas.
                    </p>
                </div>

                {/* CONTROLS (Top) */}
                <div className="flex flex-col items-center gap-6 mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {(['whatsapp', 'leads', 'ecommerce'] as const).map((s) => (
                            <Button
                                key={s}
                                variant={currentScenario === s ? 'default' : 'outline'}
                                onClick={() => setCurrentScenario(s)}
                                className={`rounded-2xl px-6 md:px-10 h-11 md:h-14 truncate text-sm font-bold shadow-xl transition-all duration-300 ${currentScenario === s ? 'bg-slate-950 text-white ring-8 ring-slate-900/5' : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-600'}`}
                            >
                                {s === 'whatsapp' ? 'Atención Cliente' : s === 'leads' ? 'Captación de Leads' : 'Gestión de Pedidos'}
                            </Button>
                        ))}
                    </div>

                    <div className="w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] py-4 px-8 flex items-center justify-between shadow-2xl shadow-slate-200/40">
                        <div className="flex items-center gap-5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-black text-white shadow-lg shadow-violet-200">
                                {runningNode?.index || 1}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Paso {runningNode?.index || 1} de 7</span>
                                <span className="text-base md:text-lg font-bold text-slate-950">{runningNode?.title || 'Iniciando sistema'}</span>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 min-w-[150px]">
                            {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                <div key={i} className={`h-2 flex-1 rounded-full transition-all duration-700 ${i <= (runningNode?.index || 1) ? 'bg-violet-600 shadow-[0_0_12px_rgba(139,92,246,0.5)]' : 'bg-slate-100'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[480px] md:h-[620px] bg-white/40 backdrop-blur-md rounded-[3rem] border border-slate-200/50 shadow-2xl shadow-slate-200/10 overflow-hidden ring-1 ring-black/5">
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
                            <Background color="#cbd5e1" gap={32} size={1.5} variant={"dots" as any} className="opacity-20" />
                        </ReactFlow>
                    </ReactFlowProvider>

                    <div className="absolute top-8 right-8 pointer-events-none">
                        <div className="bg-slate-950/95 backdrop-blur-xl border border-white/10 p-2.5 px-5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                            <span className="text-[11px] font-black text-white uppercase tracking-widest leading-none">Live Process Simulation</span>
                        </div>
                    </div>

                    {/* Navigation Guide Arrow */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Sigue explorando</span>
                        <div className="h-10 w-10 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-400 shadow-sm">
                            <ChevronRight className="rotate-90" size={18} />
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-xs font-bold">
                        <Clock className="w-4 h-4 text-violet-500" />
                        Velocidad de procesamiento: &lt; 0.3ms por nodo
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutomationPlayground;
