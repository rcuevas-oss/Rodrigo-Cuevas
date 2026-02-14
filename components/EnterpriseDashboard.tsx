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
    UserCircle
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
    const [userCount, setUserCount] = useState(120);

    const stats = useMemo(() => {
        const annualSaaS = userCount * 20 * 12;
        const nexaiSavings = annualSaaS; // Simplified logic for demo
        return {
            annualSaaS: annualSaaS.toLocaleString(),
            nexaiSavings: nexaiSavings.toLocaleString(),
            uptime: "99.98%",
            deployments: Math.floor(userCount / 4) + 12
        };
    }, [userCount]);

    const navItems = [
        { name: 'Overview', icon: LayoutDashboard },
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Projects', icon: Terminal },
        { name: 'Team', icon: Users },
        { name: 'Settings', icon: Settings },
    ];

    return (
        <section id="enterprise-demo" className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 bg-white border-slate-200 text-slate-900 font-bold px-4 py-1.5 rounded-full">
                        Enterprise Grade UI
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tighter text-slate-950 sm:text-5xl mb-6">
                        Sistemas <span className="text-slate-500 italic">Propios</span>, Sin Renta
                    </h2>
                    <p className="max-w-2xl mx-auto text-slate-600 text-lg font-medium opacity-80 leading-relaxed">
                        Reemplaza suscripciones costosas por infraestructura de alta ingeniería en tu propia nube de Google Cloud.
                    </p>
                </div>

                {/* MOCKUP CONTAINER */}
                <div className="relative group mx-auto max-w-6xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative flex flex-col md:flex-row h-[700px] bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-900/5">

                        {/* SIDEBAR MOCKUP */}
                        <aside className="hidden md:flex w-64 border-r border-slate-100 bg-slate-50/50 flex-col p-6">
                            <div className="flex items-center gap-3 mb-10 px-2">
                                <div className="w-8 h-8 bg-slate-950 rounded-lg flex items-center justify-center text-white font-black text-xs">
                                    N
                                </div>
                                <span className="font-bold text-slate-950 tracking-tight">NexAI Admin</span>
                            </div>

                            <div className="space-y-1">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => setActiveTab(item.name)}
                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === item.name
                                                ? 'bg-white text-slate-950 shadow-sm border border-slate-200/50'
                                                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100/50'
                                            }`}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-auto bg-slate-950 rounded-2xl p-4 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Cloud size={14} className="text-blue-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">GCP Native</span>
                                </div>
                                <p className="text-[11px] font-medium leading-relaxed opacity-60">
                                    Infraestructura 100% bajo tu propiedad legal.
                                </p>
                            </div>
                        </aside>

                        {/* MAIN CONTENT AREA */}
                        <main className="flex-1 flex flex-col overflow-hidden bg-white">
                            {/* Dashboard Header */}
                            <header className="h-16 border-b border-slate-50 flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm z-10">
                                <div className="flex items-center gap-2 text-slate-400">
                                    <span className="text-xs font-bold text-slate-950">Dashboard</span>
                                    <ChevronRight size={14} />
                                    <span className="text-xs font-medium">{activeTab}</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="hidden sm:flex items-center gap-2 bg-slate-100/80 px-3 py-1.5 rounded-lg border border-slate-200/50">
                                        <Search size={14} className="text-slate-400" />
                                        <span className="text-[10px] font-bold text-slate-400">Buscar reportes...</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <Bell size={18} />
                                        <UserCircle size={24} className="text-slate-950" />
                                    </div>
                                </div>
                            </header>

                            {/* Dashboard Body */}
                            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">

                                {/* Top Key Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <Card className="border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Ahorro NexAI Anual
                                            </CardTitle>
                                            <TrendingUp size={14} className="text-emerald-500" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-black text-slate-950">${stats.nexaiSavings}</div>
                                            <p className="text-[10px] font-bold text-emerald-600 mt-1">+100% vs SaaS RENTAL</p>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-slate-100 bg-white shadow-sm">
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                Usuarios Activos
                                            </CardTitle>
                                            <Users size={14} className="text-slate-400" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-black text-slate-950">{userCount}</div>
                                            <div className="w-full h-1 bg-slate-100 rounded-full mt-3 overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-slate-950"
                                                    animate={{ width: `${(userCount / 500) * 100}%` }}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-slate-100 bg-white shadow-sm">
                                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                                            <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                                GCP System Uptime
                                            </CardTitle>
                                            <Activity size={14} className="text-blue-500" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-black text-slate-950">{stats.uptime}</div>
                                            <p className="text-[10px] font-bold text-slate-400 mt-1">Status: Operational</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Main Grid: Chart + Simulation Controls */}
                                <div className="grid lg:grid-cols-5 gap-8">

                                    <Card className="lg:col-span-3 border-slate-100 bg-white shadow-sm">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <CardTitle className="text-sm font-bold">Histórico de Operaciones</CardTitle>
                                                    <CardDescription className="text-[11px]">Volumen de datos procesados en Firebase real-time.</CardDescription>
                                                </div>
                                                <div className="flex gap-1.5">
                                                    <Badge variant="outline" className="text-[9px] font-black h-5">D</Badge>
                                                    <Badge variant="outline" className="text-[9px] font-black h-5 bg-slate-50 border-slate-200">W</Badge>
                                                    <Badge variant="outline" className="text-[9px] font-black h-5">M</Badge>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="h-48 flex items-end gap-2 pb-6">
                                            {[40, 65, 30, 85, 45, 90, 60, 55, 75, 50, 80, 65, 40].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.05, duration: 1 }}
                                                    className="flex-1 bg-slate-100 rounded-t-lg relative group overflow-hidden"
                                                >
                                                    <motion.div
                                                        className="absolute inset-0 bg-slate-950 origin-bottom"
                                                        initial={{ scaleY: 0 }}
                                                        animate={{ scaleY: (userCount / 500) }}
                                                        transition={{ type: "spring", stiffness: 100 }}
                                                    />
                                                </motion.div>
                                            ))}
                                        </CardContent>
                                    </Card>

                                    <div className="lg:col-span-2 space-y-6">
                                        <Card className="border-slate-100 bg-slate-950 text-white overflow-hidden relative">
                                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                                <SiGooglecloud size={80} />
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                                                    Simulador de Escala
                                                </CardTitle>
                                                <CardDescription className="text-white/60 text-xs mt-1">
                                                    Ajusta el volumen para ver el ahorro vs modelos SaaS.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-[11px] font-bold text-white/50">Carga del Sistema</span>
                                                    <span className="text-lg font-black">{userCount} Bots Activos</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="20"
                                                    max="500"
                                                    value={userCount}
                                                    onChange={(e) => setUserCount(parseInt(e.target.value))}
                                                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                                                />
                                                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-[10px] uppercase font-black text-white/40">Pago mensual</p>
                                                        <p className="text-xl font-black text-emerald-400">$0.00</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-[10px] uppercase font-black text-white/40">Propiedad</p>
                                                        <p className="text-xl font-black text-white">Full Access</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        <div className="bg-white border border-slate-100 p-5 rounded-3xl flex items-center gap-4">
                                            <div className="h-10 w-10 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                                                <SiFirebase className="text-[#FFCA28]" size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-[11px] font-black text-slate-950 uppercase">Firebase DB State</h5>
                                                <p className="text-[10px] font-medium text-slate-400">Synced to Regional GCP-West-1</p>
                                            </div>
                                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </main>

                    </div>
                </div>

                {/* BOTTOM TAGLINE */}
                <div className="mt-12 flex flex-col items-center">
                    <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2">
                            <SiGooglecloud size={24} />
                            <span className="text-sm font-black tracking-tighter">Google Cloud</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiFirebase size={24} />
                            <span className="text-sm font-black tracking-tighter">Firebase</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Server size={24} />
                            <span className="text-sm font-black tracking-tighter">Custom Infra</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnterpriseDashboard;
