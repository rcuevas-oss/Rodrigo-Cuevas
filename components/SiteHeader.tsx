import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"
import { Menu, ArrowRight } from "lucide-react"

const nav = [
    { label: "Servicios", href: "#servicios" },
    { label: "Demos", href: "#evaluador-ia" },
    { label: "Modelos", href: "#modelos" },
]

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

                {/* LOGO */}
                <a href="#top" className="flex items-center gap-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <span className="text-sm font-semibold">N</span>
                    </div>
                    <span className="text-base font-semibold text-slate-900">
                        NexAI
                    </span>
                </a>

                {/* NAV DESKTOP */}
                <nav className="hidden items-center gap-1 md:flex">
                    {nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* ACCIONES DESKTOP */}
                <div className="hidden items-center gap-2 md:flex">
                    <Button variant="ghost" className="rounded-xl font-medium text-slate-600 hover:text-slate-900">
                        Login
                    </Button>

                    <Button className="rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                        Contactar
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                {/* MOBILE */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button size="sm" className="h-10 rounded-xl px-4 bg-slate-900 text-white hover:bg-slate-800">
                        Contactar
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10 rounded-xl border-slate-200"
                            >
                                <Menu className="h-5 w-5 text-slate-600" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[320px] p-0">
                            <div className="p-5">
                                <SheetHeader>
                                    <SheetTitle className="text-left font-bold text-slate-900">NexAI</SheetTitle>
                                </SheetHeader>

                                <div className="mt-6 grid gap-2">
                                    {nav.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-6 grid gap-2 border-t border-slate-100 pt-6">
                                    <Button variant="outline" className="h-11 rounded-xl border-slate-200 text-slate-700">
                                        Login
                                    </Button>
                                    <Button className="h-11 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
                                        Contactar
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>

                                <p className="mt-6 text-[11px] leading-relaxed text-slate-500">
                                    Menú optimizado para móvil. Simple, rápido y sin ruido visual.
                                </p>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
