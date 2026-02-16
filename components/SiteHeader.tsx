import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { Menu, Github, ArrowRight, Bot, Zap, Code, Terminal, Sparkles, BookOpen, Database, Users, BarChart3, MessageSquare } from "lucide-react"

const solutions = [
    {
        title: "Automatización de Flujos",
        href: "#servicios",
        description: "Optimiza procesos repetitivos con agentes inteligentes.",
        icon: Zap
    },
    {
        title: "Software a Medida",
        href: "#servicios",
        description: "Construimos infraestructura robusta y escalable.",
        icon: Code
    },
    {
        title: "Modelos de IA",
        href: "#servicios",
        description: "Modelos personalizados entrenados con tus datos.",
        icon: Bot
    },
    {
        title: "Sistemas Cloud",
        href: "#servicios",
        description: "Infraestructura propia en tu nube de Google.",
        icon: Terminal
    }
]

const modules = [
    {
        title: "Vector DB",
        href: "#servicios",
        description: "Gestión de embeddings para IA.",
        icon: Database
    },
    {
        title: "Custom CRM",
        href: "#servicios",
        description: "Control total de tus clientes.",
        icon: Users
    },
    {
        title: "Realtime API",
        href: "#servicios",
        description: "Sincronización instantánea.",
        icon: Sparkles
    }
]

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* LOGO & DESKTOP NAV */}
                <div className="flex items-center gap-10">
                    <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                            <span className="text-sm font-bold">N</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-foreground">
                            NexAI
                        </span>
                    </a>

                    <nav className="hidden lg:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground border-none bg-transparent">
                                        Soluciones
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex w-[600px] gap-3 p-4 md:w-[700px] lg:w-[850px]">
                                            <div className="flex-1 border-r border-border pr-4">
                                                <h4 className="mb-4 px-3 text-[11px] font-black uppercase tracking-widest text-muted-foreground">Core Services</h4>
                                                <ul className="grid gap-3">
                                                    {solutions.map((item) => (
                                                        <ListItem
                                                            key={item.title}
                                                            title={item.title}
                                                            href={item.href}
                                                            icon={item.icon}
                                                        >
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="w-[300px] pl-4">
                                                <h4 className="mb-4 px-3 text-[11px] font-black uppercase tracking-widest text-muted-foreground">Modules</h4>
                                                <ul className="grid gap-3">
                                                    {modules.map((item) => (
                                                        <ListItem
                                                            key={item.title}
                                                            title={item.title}
                                                            href={item.href}
                                                            icon={item.icon}
                                                            small
                                                        >
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                    <div className="mt-4 pt-4 border-t border-border">
                                                        <ListItem
                                                            title="Ver todas las features"
                                                            href="#servicios"
                                                            icon={Sparkles}
                                                            className="bg-muted/50"
                                                        >
                                                            Explora todo el ecosistema NexAI.
                                                        </ListItem>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-accent hover:text-accent font-bold border-none bg-transparent">
                                        Agentes IA
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                                            <ListItem title="Soporte 24/7" href="#evaluador-ia" icon={MessageSquare}>
                                                Automatiza la atención al cliente sin fricciones.
                                            </ListItem>
                                            <ListItem title="Análisis Pro" href="#evaluador-ia" icon={BarChart3}>
                                                IA que procesa tus métricas críticas.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                                        Industrias
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                                            <ListItem title="E-commerce" href="#servicios">
                                                Escalabilidad y logística inteligente.
                                            </ListItem>
                                            <ListItem title="SaaS" href="#servicios">
                                                Infraestructura propia para startups.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <a href="#precios" className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground bg-transparent")}>
                                        Precios
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#metodologia" className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground bg-transparent")}>
                                        Tecnología
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#blog" className={cn(navigationMenuTriggerStyle(), "text-muted-foreground hover:text-foreground bg-transparent")}>
                                        Blog
                                    </a>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                </div>

                {/* ACCIONES DESKTOP */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <Github size={18} />
                        <span className="text-xs text-muted-foreground/80">97.6k</span>
                    </a>

                    <Button variant="ghost" className="h-9 px-4 text-sm font-semibold text-muted-foreground hover:text-foreground">
                        Login
                    </Button>

                    <Button variant="default" size="sm" className="h-9 rounded-lg font-bold shadow-primary/10 hover:shadow-primary/20">
                        Comenzar
                    </Button>
                </div>

                {/* MOBILE NAV */}
                <div className="flex items-center gap-3 lg:hidden">
                    <Button variant="default" size="sm" className="h-9 px-4 rounded-lg">
                        Comenzar
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] p-0">
                            <div className="flex flex-col h-full p-6">
                                <SheetHeader>
                                    <SheetTitle className="text-left font-bold text-slate-900">NexAI Menú</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8 flex flex-col gap-4 overflow-y-auto">
                                    <MobileNavLink href="#servicios">Soluciones</MobileNavLink>
                                    <MobileNavLink href="#ia" className="text-primary font-bold">Agentes IA</MobileNavLink>
                                    <MobileNavLink href="#industrias">Industrias</MobileNavLink>
                                    <MobileNavLink href="#precios">Precios</MobileNavLink>
                                    <MobileNavLink href="#metodologia">Tecnología</MobileNavLink>
                                    <MobileNavLink href="#blog">Blog</MobileNavLink>
                                </div>
                                <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
                                    <Button variant="outline" className="w-full">Login</Button>
                                    <Button variant="default" className="w-full">
                                        Comenzar Ahora
                                        <ArrowRight className="ml-2 h-4 w-4" />
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

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: any, small?: boolean }
>(({ className, title, children, icon: Icon, small, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "flex select-none items-center gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-muted/50 hover:text-foreground group",
                        className
                    )}
                    {...props}
                >
                    {Icon && (
                        <div className={cn(
                            "flex shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors group-hover:border-accent/50",
                            small ? "h-9 w-9" : "h-12 w-12"
                        )}>
                            <Icon className={cn("text-muted-foreground transition-colors group-hover:text-foreground", small ? "h-4 w-4" : "h-6 w-6")} />
                        </div>
                    )}
                    <div className="flex flex-col gap-1">
                        <div className="text-sm font-bold leading-none tracking-tight text-foreground">{title}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground font-medium opacity-80">
                            {children}
                        </p>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

function MobileNavLink({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
    return (
        <a
            href={href}
            className={cn("text-lg font-medium text-muted-foreground transition-colors hover:text-foreground", className)}
        >
            {children}
        </a>
    )
}
