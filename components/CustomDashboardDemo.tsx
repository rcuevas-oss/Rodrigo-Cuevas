import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
    BarChart3,
    Database,
    Cloud,
    CreditCard,
    Users,
    Zap,
    TrendingDown,
    DollarSign,
    Server,
    Infinity,
    CheckCircle2,
    Lock
} from 'lucide-react';
import {
    SiGooglecloud,
    SiFirebase,
    SiSupabase,
    SiPostgresql
} from 'react-icons/si';

export const CustomDashboardDemo: React.FC = () => {
    const [userCount, setUserCount] = useState(50);
    const [isAnimate, setIsAnimate] = useState(true);

    const stats = useMemo(() => {
        // SaaS model: ~ $20 per user per month
        const saasMonthly = userCount * 20;
        const saasAnnual = saasMonthly * 12;

        // NexAI: $0 monthly
        const nexaiAnnual = 0;
        const savings = saasAnnual - nexaiAnnual;

        return {
            saasMonthly,
            saasAnnual,
            savings
        };
    }, [userCount]);

    return (
        <section id="custom-systems" className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: CONTENT & CONTROLS */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4 bg-emerald-50 border-emerald-100 text-emerald-600 font-black px-4 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                                <Infinity className="w-3 h-3 mr-2" />
                                Sistemas de un solo pago
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-950 mb-6 leading-[1.1]">
                                Despídete de las <br />
                                <span className="text-emerald-600">Suscripciones SaaS</span>
                            </h2>
                            <p className="text-lg text-slate-600 font-medium opacity-80 leading-relaxed">
                                Desplegamos aplicaciones personalizadas sobre **Google Cloud** y **Firebase**. No pagas alquiler de software, eres dueño del 100% de tu código e infraestructura.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <Users className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <span className="text-sm font-bold text-slate-950">Número de Usuarios</span>
                                </div>
                                <span className="text-2xl font-black text-emerald-600">{userCount}</span>
                            </div>

                            <input
                                type="range"
                                min="5"
                                max="500"
                                value={userCount}
                                onChange={(e) => setUserCount(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-2"
                            />
                            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span>5 Usuarios</span>
                                <span>500 Usuarios</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl shadow-slate-200/20">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Gasto SaaS Anual</span>
                                <span className="text-2xl font-black text-slate-950">${stats.saasAnnual.toLocaleString()}</span>
                                <div className="flex items-center gap-1 mt-2 text-red-500">
                                    <TrendingDown className="w-3 h-3 rotate-180" />
                                    <span className="text-[10px] font-bold">Pérdida neta</span>
                                </div>
                            </div>
                            <div className="bg-emerald-600 p-6 rounded-3xl shadow-xl shadow-emerald-200/40">
                                <span className="text-[10px] font-black text-white/60 uppercase tracking-widest block mb-1">Tu Ahorro con NexAI</span>
                                <span className="text-2xl font-black text-white">${stats.savings.toLocaleString()}</span>
                                <div className="flex items-center gap-1 mt-2 text-white">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span className="text-[10px] font-bold">100% Retención</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: DASHBOARD SIMULATION */}
                    <div className="relative">
                        {/* Fake Browser Container */}
                        <div className="bg-white/80 backdrop-blur-2xl border-4 border-slate-950 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden">
                            {/* Browser Header */}
                            <div className="h-12 border-b-4 border-slate-950 bg-slate-50 flex items-center px-6 gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                </div>
                                <div className="flex-1 bg-white h-7 rounded-lg border-2 border-slate-950 flex items-center px-3 gap-2">
                                    <Lock className="w-2.5 h-2.5 text-emerald-500" />
                                    <span className="text-[10px] font-bold text-slate-400">admin.tuempresa.com/dashboard</span>
                                </div>
                            </div>

                            {/* Dashboard UI */}
                            <div className="p-8 space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 bg-slate-950 rounded-2xl flex items-center justify-center text-white">
                                            <BarChart3 className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-black text-slate-950">Analytics Real-time</h4>
                                    </div>
                                    <div className="flex gap-2">
                                        <div style={{ color: '#4285F4' }}><SiGooglecloud size={32} /></div>
                                        <div style={{ color: '#FFCA28' }}><SiFirebase size={32} /></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black text-slate-400 uppercase">Cloud Load</span>
                                            <Cloud className="w-3 h-3 text-blue-500" />
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-500"
                                                animate={{ width: `${Math.min(userCount / 5, 100)}%` }}
                                                transition={{ type: "spring", damping: 10 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 border-2 border-slate-100 p-5 rounded-2xl">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[10px] font-black text-slate-400 uppercase">Database Ops</span>
                                            <Database className="w-3 h-3 text-amber-500" />
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-amber-500"
                                                animate={{ width: `${Math.min(userCount / 6, 100)}%` }}
                                                transition={{ type: "spring", damping: 10, delay: 0.1 }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Main Chart Simulator */}
                                <div className="h-32 flex items-end gap-1.5 pt-4">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 bg-slate-950 rounded-t-lg"
                                            animate={{ height: `${Math.random() * 40 + (userCount / 7)}%` }}
                                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", delay: i * 0.1 }}
                                        />
                                    ))}
                                </div>

                                <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase">Service Status: Stable</span>
                                    </div>
                                    <span className="text-[10px] font-black text-slate-950 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                                        v5.2.0-Production
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Achievement Card */}
                        <motion.div
                            className="absolute -bottom-8 -left-8 bg-white border-4 border-slate-950 p-6 rounded-[2rem] shadow-2xl z-20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <DollarSign className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h5 className="font-black text-slate-950 text-sm">Cero Comisiones</h5>
                                    <p className="text-[10px] font-bold text-slate-500">Todo el beneficio queda en casa.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomDashboardDemo;
