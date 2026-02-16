import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    BarChart3,
    Users,
    Settings,
    Bell,
    Search,
    Cloud,
    Database,
    ArrowUpRight,
    TrendingUp,
    Activity,
    Server,
    Terminal,
    ChevronRight,
    UserCircle,
    CheckCircle2,
    Clock,
    FileText,
    MoreHorizontal
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
    SiGooglecloud,
    SiFirebase
} from 'react-icons/si';

export const EnterpriseDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [scaleValue, setScaleValue] = useState(120);

    const navItems = [
        { name: 'Overview', icon: LayoutDashboard },
        { name: 'CRM', icon: Users },
        { name: 'Operaciones', icon: Activity },
        { name: 'Finanzas', icon: BarChart3 },
        { name: 'Settings', icon: Settings },
    ];

    const getTabContent = () => {
        switch (activeTab) {
            case 'CRM':
                return {
                    title: "Gestión de Cartera de Clientes",
                    desc: "Control total de leads, prospectos y embudo de ventas.",
                    metrics: [
                        { label: "Pipeline Total", value: `$${(scaleValue * 1250).toLocaleString()}`, sub: "+12% este mes", icon: TrendingUp, color: "text-blue-600" },
                        { label: "Clientes Activos", value: scaleValue, sub: "Tasa de retención 98%", icon: Users, color: "text-slate-900" },
                        { label: "Conversión", value: "24.5%", sub: "Optimizado por IA", icon: Activity, color: "text-emerald-500" }
                    ],
                    type: 'table-clients',
                    customers: [
                        { name: "Empresa Alpha", industry: "Tecnología", status: "Activo", value: "$45,000" },
                        { name: "Servicios Globales", industry: "Logística", status: "Lead", value: "$12,500" },
                        { name: "Innova Retail", industry: "Comercio", status: "Activo", value: "$28,900" },
                        { name: "Tech Solutions", industry: "Software", status: "Pausado", value: "$8,200" }
                    ],
                    simLabel: "Proyección de Ventas",
                    simDesc: "Ajusta el volumen de leads para proyectar ingresos trimestrales.",
                    simUnit: "Leads/Mes"
                };
            case 'Finanzas':
                return {
                    title: "Módulo Financiero Central",
                    desc: "Transparencia total en flujo de caja, gastos y proyecciones de ahorro.",
                    metrics: [
                        { label: "Ahorro NexAI", value: `$${(scaleValue * 850).toLocaleString()}`, sub: "vs Software de terceros", icon: TrendingUp, color: "text-emerald-600" },
                        { label: "Gasto en Cloud", value: "$0.00", sub: "Infraestructura Propia", icon: Cloud, color: "text-blue-500" },
                        { label: "Margen Neto", value: "88.2%", sub: "+5.3% esta gestión", icon: Activity, color: "text-slate-900" }
                    ],
                    type: 'table-invoices',
                    invoices: [
                        { id: "INV-2024-001", client: "Empresa Alpha", amount: "$12,450", status: "Pagado", date: "12 Feb" },
                        { id: "INV-2024-002", client: "Innova Retail", amount: "$8,900", status: "Pendiente", date: "14 Feb" },
                        { id: "INV-2024-003", client: "Logistics Pro", amount: "$15,200", status: "Vencido", date: "05 Feb" }
                    ],
                    simLabel: "Simulador de Rentabilidad",
                    simDesc: "Ajusta la escala del negocio para visualizar el ahorro por propiedad de software.",
                    simUnit: "Transacciones"
                };
            case 'Operaciones':
                return {
                    title: "Control Operativo Interno",
                    desc: "Monitoreo de procesos centrales y eficiencia del equipo.",
                    metrics: [
                        { label: "Tareas Completadas", value: (scaleValue * 5).toLocaleString(), sub: "99.1% On-time", icon: CheckCircle2, color: "text-emerald-600" },
                        { label: "Carga de Trabajo", value: `${(scaleValue / 4).toFixed(1)}%`, sub: "Nivel óptimo", icon: Server, color: "text-blue-500" },
                        { label: "SLA Interno", value: "99.9%", sub: "Respuesta inmediata", icon: Clock, color: "text-slate-900" }
                    ],
                    type: 'chart',
                    chartLabel: "Eficiencia de Procesos",
                    simLabel: "Optimización Operativa",
                    simDesc: "Ajusta la carga operativa para ver la capacidad de respuesta del sistema.",
                    simUnit: "Procesos/Día"
                };
            default:
                return {
                    title: "Sistemas Propios, Sin Renta",
                    desc: "Reemplaza suscripciones costosas por infraestructura de alta ingeniería en tu nube.",
                    metrics: [
                        { label: "Ahorro NexAI Anual", value: `$${(scaleValue * 920).toLocaleString()}`, sub: "+100% vs SaaS RENTAL", icon: TrendingUp, color: "text-emerald-600" },
                        { label: "Usuarios Activos", value: scaleValue, sub: "Escalabilidad ilimitada", icon: Users, color: "text-slate-900" },
                        { label: "Integridad del Sistema", value: "99.98%", sub: "GCP native", icon: Activity, color: "text-blue-500" }
                    ],
                    type: 'chart',
                    chartLabel: "Actividad del Sistema (Real-time)",
                    simLabel: "Simulador de Escala",
                    simDesc: "Ajusta la carga para ver cómo responde tu infraestructura personalizada.",
                    simUnit: "Registros/Seg"
                };
        }
    };

    const content = getTabContent();

    return (
        <section id="enterprise-demo" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 bg-background/50 backdrop-blur border-border text-primary font-bold px-4 py-1.5 rounded-full shadow-sm">
                        Enterprise Resource Planning
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl mb-6">
                        {content.title.split(',')[0]} <span className="text-muted-foreground italic">Propio</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg font-medium opacity-80 leading-relaxed">
                        {content.desc}
                    </p>
                </div>

                <div className="relative group mx-auto max-w-6xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative flex flex-col md:flex-row h-[720px] bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-900/5">

                        {/* SIDEBAR */}
                        <aside className="hidden md:flex w-64 border-r border-border bg-muted/10 flex-col p-6">
                            <div className="flex items-center gap-3 mb-10 px-2">
                                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-xs">
                                    N
                                </div>
                                <span className="font-bold text-foreground tracking-tight">NexAI Admin</span>
                            </div>

                            <div className="space-y-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => setActiveTab(item.name)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === item.name
                                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/10'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                            }`}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-auto bg-card/50 rounded-2xl p-4 border border-border/50">
                                <div className="flex items-center gap-2 mb-2">
                                    <Cloud size={14} className="text-muted-foreground" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">NexOS Business</span>
                                </div>
                                <p className="text-[11px] font-medium leading-relaxed text-muted-foreground">
                                    Software propiedad de la empresa. Sin cuotas mensuales de uso.
                                </p>
                            </div>
                        </aside>

                        {/* MAIN CONTENT AREA */}
                        <main className="flex-1 flex flex-col overflow-hidden bg-background">
                            <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-card/80 backdrop-blur-sm z-10">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <span className="text-xs font-bold text-foreground">NexAI ERP</span>
                                    <ChevronRight size={14} />
                                    <span className="text-xs font-medium">{activeTab}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50">
                                        <Search size={14} className="text-muted-foreground" />
                                        <span className="text-[10px] font-bold text-muted-foreground">Buscar registros...</span>
                                    </div>
                                    <UserCircle size={28} className="text-muted-foreground/50" />
                                </div>
                            </header>

                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="p-8 space-y-8"
                                    >
                                        {/* METRICS */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                            {content.metrics.map((m) => (
                                                <Card key={`${activeTab}-${m.label}`} className="border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl">
                                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                                        <CardTitle className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.15em]">
                                                            {m.label}
                                                        </CardTitle>
                                                        <m.icon size={14} className={m.color} />
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="text-2xl font-black text-foreground">{m.value}</div>
                                                        <p className="text-[10px] font-bold text-emerald-600 mt-1">{m.sub}</p>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>

                                        <div className="grid lg:grid-cols-5 gap-8">
                                            {/* LEFT COLUMN: DYNAMIC CONTENT BASED ON TYPE */}
                                            <div className="lg:col-span-3 space-y-8">
                                                {content.type === 'chart' ? (
                                                    <Card className="border-border bg-card shadow-sm rounded-2xl">
                                                        <CardHeader>
                                                            <div className="flex items-center justify-between">
                                                                <div>
                                                                    <CardTitle className="text-sm font-bold text-foreground">{content.chartLabel}</CardTitle>
                                                                    <CardDescription className="text-[11px] text-muted-foreground">Métricas de rendimiento operacional interno.</CardDescription>
                                                                </div>
                                                                <div className="flex gap-1.5">
                                                                    <Badge variant="outline" className="text-[9px] font-black h-5 uppercase border-border">Diario</Badge>
                                                                    <Badge variant="outline" className="text-[9px] font-black h-5 bg-muted border-border uppercase">Mensual</Badge>
                                                                </div>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="h-48 flex items-end gap-2 pb-6">
                                                            {[40, 65, 30, 85, 45, 90, 60, 55, 75, 50, 80, 65, 40].map((h, i) => (
                                                                <motion.div
                                                                    key={`${activeTab}-bar-${i}`}
                                                                    initial={{ height: 0 }}
                                                                    animate={{ height: `${h}%` }}
                                                                    transition={{ delay: i * 0.05, duration: 1 }}
                                                                    className="flex-1 bg-muted rounded-t-lg relative overflow-hidden"
                                                                >
                                                                    <motion.div
                                                                        className="absolute inset-0 bg-primary origin-bottom"
                                                                        initial={{ scaleY: 0 }}
                                                                        animate={{ scaleY: (scaleValue / 500) }}
                                                                    />
                                                                </motion.div>
                                                            ))}
                                                        </CardContent>
                                                    </Card>
                                                ) : content.type === 'table-clients' ? (
                                                    <Card className="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
                                                        <CardHeader className="bg-muted/30 border-b border-border">
                                                            <CardTitle className="text-sm font-bold text-foreground">Cartera de Clientes</CardTitle>
                                                            <CardDescription className="text-[11px] text-muted-foreground">Registros activos en el CRM propio.</CardDescription>
                                                        </CardHeader>
                                                        <div className="divide-y divide-border/50">
                                                            {content.customers?.map((customer, i) => (
                                                                <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-black text-muted-foreground">
                                                                            {customer.name.substring(0, 2).toUpperCase()}
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs font-bold text-foreground">{customer.name}</p>
                                                                            <p className="text-[10px] text-muted-foreground font-medium">{customer.industry}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="text-xs font-black text-foreground">{customer.value}</p>
                                                                        <Badge className={`text-[8px] h-4 ${customer.status === 'Activo' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-muted text-muted-foreground border-border'}`}>
                                                                            {customer.status}
                                                                        </Badge>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Card>
                                                ) : (
                                                    <Card className="border-border bg-card shadow-sm rounded-2xl overflow-hidden">
                                                        <CardHeader className="bg-muted/30 border-b border-border">
                                                            <CardTitle className="text-sm font-bold text-foreground">Últimas Facturas</CardTitle>
                                                            <CardDescription className="text-[11px] text-muted-foreground">Control de ingresos en tiempo real.</CardDescription>
                                                        </CardHeader>
                                                        <div className="overflow-x-auto">
                                                            <table className="w-full text-left border-collapse">
                                                                <thead>
                                                                    <tr className="bg-muted/30">
                                                                        <th className="px-6 py-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest">ID</th>
                                                                        <th className="px-6 py-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Cliente</th>
                                                                        <th className="px-6 py-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Monto</th>
                                                                        <th className="px-6 py-3 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Estado</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="divide-y divide-border/50">
                                                                    {content.invoices?.map((inv, i) => (
                                                                        <tr key={i} className="hover:bg-muted/30 transition-colors">
                                                                            <td className="px-6 py-4 text-[10px] font-bold text-muted-foreground">{inv.id}</td>
                                                                            <td className="px-6 py-4 text-xs font-bold text-foreground">{inv.client}</td>
                                                                            <td className="px-6 py-4 text-xs font-black text-foreground">{inv.amount}</td>
                                                                            <td className="px-6 py-4">
                                                                                <Badge className={`text-[8px] h-4 ${inv.status === 'Pagado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : inv.status === 'Vencido' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                                                                    {inv.status}
                                                                                </Badge>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Card>
                                                )}
                                            </div>

                                            {/* SIMULATOR */}
                                            <div className="lg:col-span-2 space-y-6">
                                                <Card className="border-border bg-slate-950 text-white overflow-hidden relative rounded-2xl">
                                                    <CardHeader>
                                                        <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                                                            {content.simLabel}
                                                        </CardTitle>
                                                        <CardDescription className="text-white/60 text-xs mt-1 leading-relaxed">
                                                            {content.simDesc}
                                                        </CardDescription>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <div className="flex items-center justify-between mb-4">
                                                            <span className="text-[11px] font-bold text-white/50">Escala de Negocio</span>
                                                            <span className="text-lg font-black">{scaleValue} {content.simUnit}</span>
                                                        </div>
                                                        <input
                                                            type="range"
                                                            min="20"
                                                            max="500"
                                                            value={scaleValue}
                                                            onChange={(e) => setScaleValue(parseInt(e.target.value))}
                                                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                                                        />
                                                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">

                                                            <div>
                                                                <p className="text-[10px] uppercase font-black text-white/40">Costo Licencia</p>
                                                                <p className="text-xl font-black text-emerald-400">$0.00</p>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-[10px] uppercase font-black text-white/40">Propiedad</p>
                                                                <p className="text-xl font-black text-white">EMPRESARIAL</p>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>

                                                <div className="bg-card border border-border p-5 rounded-3xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
                                                    <div className="h-10 w-10 bg-blue-50/50 rounded-2xl flex items-center justify-center border border-blue-100/50">
                                                        <Activity className="text-blue-600" size={20} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="text-[11px] font-black text-foreground uppercase">Health Check</h5>
                                                        <p className="text-[10px] font-medium text-muted-foreground">Sincronización segura con Google Cloud</p>
                                                    </div>
                                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6 underline underline-offset-8 decoration-border">Integración con Infraestructura Global</p>
                    <div className="flex flex-wrap justify-center items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2"><SiGooglecloud size={20} /><span className="text-xs font-black tracking-tighter">Google Cloud</span></div>
                        <div className="flex items-center gap-2"><SiFirebase size={20} /><span className="text-xs font-black tracking-tighter">Realtime DB</span></div>
                        <div className="flex items-center gap-2"><Server size={20} /><span className="text-xs font-black tracking-tighter">Private Infrastructure</span></div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default EnterpriseDashboard;
