import { useEffect, useMemo, useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Switch } from "./ui/switch"
import { Label } from "./ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import { Mic, Sparkles } from "lucide-react"

type Props = {
    targetId?: string // por defecto: evaluador-ia
}

export default function FloatingAssistantWidget({ targetId = "evaluador-ia" }: Props) {
    const storageKey = useMemo(() => "nexai_voice_enabled", [])
    const [voiceEnabled, setVoiceEnabled] = useState(false)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            if (saved === "true") setVoiceEnabled(true)
        } catch { }
    }, [storageKey])

    const toggleVoice = (v: boolean) => {
        setVoiceEnabled(v)
        try {
            localStorage.setItem(storageKey, String(v))
        } catch { }
    }

    const scrollToEvaluator = () => {
        const el = document.getElementById(targetId)
        if (!el) return
        el.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        aria-label="Abrir asistente"
                        className="h-12 w-12 rounded-full p-0 shadow-lg bg-violet-600 hover:bg-violet-700 text-white"
                        variant="default"
                    >
                        <Sparkles className="h-5 w-5" />
                    </Button>
                </PopoverTrigger>

                <PopoverContent
                    align="end"
                    sideOffset={10}
                    className="w-[300px] rounded-2xl border-slate-200 p-0 shadow-xl overflow-hidden"
                >
                    <Card className="border-0 shadow-none">
                        <div className="p-4">
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white">
                                        <Mic className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Asistente IA
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Voz opcional + acceso al evaluador
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2">
                                <div className="flex flex-col">
                                    <Label className="text-sm text-slate-900">Voz</Label>
                                    <span className="text-xs text-slate-500">
                                        {voiceEnabled ? "Activada" : "Desactivada"}
                                    </span>
                                </div>
                                <Switch checked={voiceEnabled} onCheckedChange={toggleVoice} />
                            </div>

                            <Button
                                onClick={scrollToEvaluator}
                                className="mt-3 h-11 w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white"
                            >
                                Abrir evaluador
                            </Button>

                            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                                Widget discreto: no interrumpe el contenido. La experiencia completa está en la sección “Evalúa tu caso con IA”.
                            </p>
                        </div>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    )
}
