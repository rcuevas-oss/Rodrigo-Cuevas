import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { Menu, ArrowRight, Palette } from "lucide-react"

const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Cómo trabajamos", href: "#como-trabajamos" },
    { label: "Contacto", href: "#contacto" },
]

interface SiteHeaderProps {
    theme: 'default' | 'emma';
    onToggleTheme: () => void;
}

export default function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#dbe3ec]/70 bg-[rgba(245,247,251,0.86)] backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[74px] lg:px-8">
                <div className="flex items-center gap-10">
                    <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-[0_14px_28px_rgba(17,24,39,0.14)]">
                            <span className="text-sm font-bold">N</span>
                        </div>
                        <div className="leading-none">
                            <span className="block text-lg font-bold tracking-tight text-foreground">
                                NexAI
                            </span>
                            <span className="hidden text-[11px] font-medium text-muted-foreground lg:block">
                                Soluciones digitales para pymes
                            </span>
                        </div>
                    </a>

                    <nav className="hidden lg:flex items-center gap-2 rounded-full border border-[#dbe3ec] bg-white/80 px-2 py-2 shadow-[0_10px_28px_rgba(70,85,98,0.05)]">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:bg-[#f4f7fb] hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={onToggleTheme}
                        className="h-10 rounded-full border border-[#dbe3ec] bg-white/85 px-4 text-muted-foreground shadow-[0_10px_22px_rgba(70,85,98,0.04)] hover:bg-white hover:text-foreground"
                    >
                        <Palette size={16} className={cn("transition-colors", theme === 'emma' ? "text-primary" : "text-muted-foreground")} />
                        <span className="text-xs font-semibold">{theme === 'default' ? 'Modo Emma' : 'Modo Original'}</span>
                    </Button>

                    <Button asChild variant="default" size="sm" className="h-10 rounded-full bg-[#111827] px-5 font-bold text-white shadow-[0_16px_36px_rgba(17,24,39,0.16)] hover:bg-[#0f172a]">
                        <a href="#contacto">Agendar diagnóstico</a>
                    </Button>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={onToggleTheme}
                        className="h-9 w-9 rounded-full border border-[#dbe3ec] bg-white/90 text-muted-foreground shadow-[0_10px_18px_rgba(70,85,98,0.04)] hover:text-primary transition-colors"
                        title={theme === 'default' ? "Modo Emma" : "Modo Original"}
                    >
                        <Palette size={20} className={cn(theme === 'emma' ? "text-primary animate-pulse" : "")} />
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full border border-[#dbe3ec] bg-white/90 shadow-[0_10px_18px_rgba(70,85,98,0.04)]">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[88vw] max-w-[320px] p-0">
                            <div className="flex h-full flex-col p-5 sm:p-6">
                                <SheetHeader>
                                    <SheetTitle className="text-left font-bold text-foreground">NexAI Menú</SheetTitle>
                                </SheetHeader>
                                <div className="mt-6 flex flex-col gap-3 overflow-y-auto pl-1">
                                    {navItems.map((item) => (
                                        <MobileNavLink key={item.label} href={item.href}>
                                            {item.label}
                                        </MobileNavLink>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
                                    <Button asChild variant="outline" className="w-full">
                                        <a href="#casos-de-uso">Ver ejemplos</a>
                                    </Button>
                                    <Button asChild variant="default" className="w-full">
                                        <a href="#contacto">
                                            Agendar diagnóstico
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

function MobileNavLink({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
    return (
        <a
            href={href}
            className={cn("flex items-center gap-4 text-base font-medium text-muted-foreground transition-colors hover:text-foreground", className)}
        >
            {children}
        </a>
    )
}
