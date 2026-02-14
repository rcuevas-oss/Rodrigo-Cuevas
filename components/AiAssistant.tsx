import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI, Chat } from "@google/genai";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Sparkles, ArrowRight, ShieldCheck, Send, Bot, User, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SYSTEM_INSTRUCTION = `
Eres un Consultor Técnico Senior en Automatización e IA de NexAI.
Tu objetivo NO es charlar, sino DIAGNOSTICAR la viabilidad técnica de automatización para empresas B2B.

IDIOMA: Español (España/Neutro).
TONO: Profesional, técnico, sobrio, directo. Cero marketing. Cero entusiasmo falso.

PROTOCOLO DE INTERACCIÓN:
1. ANÁLISIS INICIAL: El usuario te dará una descripción de un proceso. Analízalo inmediatamente.
2. DIAGNÓSTICO PRELIMINAR:
   - Identifica cuellos de botella obvios.
   - Sugiere tecnologías específicas (OCR, NLP, RPA, Webhooks).
3. PROFUNDIZACIÓN:
   - Haz 1 o 2 preguntas técnicas clave para afinar el diagnóstico (volumen de datos, herramientas actuales si no se mencionaron).
4. RECOMENDACIÓN FINAL:
   - Viabilidad (Alta/Media/Baja).
   - Impacto estimado.

REGLAS ESTRICTAS:
- NO inventes cifras.
- NO prometas resultados mágicos.
- Mantén respuestas cortas y estructuradas (uso de bullets).
- Si el input es muy vago, pide detalles específicos antes de diagnosticar.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AiAssistant: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);

  const [booting, setBooting] = useState(false);
  const [hasBooted, setHasBooted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Splash screen effect on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBooted) {
          setBooting(true);
          setHasBooted(true);
          setTimeout(() => setBooting(false), 2500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasBooted]);

  // Initialize Chat
  const initializeChat = async (initialMessage: string) => {
    try {
      setIsLoading(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash-latest',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.5,
        },
      });
      setChatSession(chat);

      // Add user message
      setMessages([{ role: 'user', text: initialMessage }]);

      // Get initial response
      const result = await chat.sendMessage({ message: initialMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "No pude generar un diagnóstico." }]);
    } catch (error) {
      console.error("Error initializing chat:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión. Por favor intenta más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartEvaluation = () => {
    if (!inputValue.trim()) return;
    setChatStarted(true);
    initializeChat(inputValue);
    setInputValue("");
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !chatSession) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "Error al procesar." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Error de conexión." }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, chatStarted]);

  return (
    <section
      ref={sectionRef}
      id="evaluador-ia"
      className="relative w-full overflow-hidden py-16 md:py-24 bg-background min-h-[600px]"
    >
      <AnimatePresence mode="wait">
        {booting ? (
          <motion.div
            key="boot"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.4 } }}
            className="flex items-center justify-center p-4 min-h-[500px]"
          >
            <div className="bg-[#000] border-0 shadow-2xl overflow-hidden rounded-[2.5rem] p-12 text-center aspect-square flex flex-col items-center justify-center w-full max-w-sm">
              <div className="relative mb-8 h-24 w-24">
                <div className="absolute inset-0 rounded-[30%] bg-gradient-to-br from-blue-400 via-blue-200 to-white opacity-80 blur-sm"></div>
                <div className="relative flex h-24 w-24 items-center justify-center rounded-[30%] bg-gradient-to-br from-blue-500 via-blue-300 to-white shadow-xl">
                  <Loader2 className="h-10 w-10 text-[#000]/20 animate-spin" />
                </div>
              </div>
              <h1 className="text-lg font-medium tracking-tight text-white mb-1">
                Engagement – Evaluador Ia
              </h1>
              <p className="text-xs text-slate-500 font-light">
                Installing packages
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-5xl px-4 relative z-10"
          >
            {/* Header */}
            <div className="text-center">
              <Badge variant="secondary" className="gap-2 rounded-full px-4 py-1 bg-white/80 backdrop-blur border border-slate-200 shadow-sm">
                <Sparkles className="h-4 w-4 text-violet-600" />
                Diagnóstico en tiempo real
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Evalúa tu caso con IA
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Describe tu proceso y recibe un diagnóstico preliminar: qué se puede automatizar,
                con qué integraciones y cuál sería el siguiente paso recomendado.
              </p>
            </div>

            {/* Card */}
            <div className="mx-auto mt-10 max-w-3xl">
              <Card className="rounded-2xl border-slate-200 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-5 sm:p-6">
                  {/* Card Header inside content */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-200">
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Evaluador inteligente (sin registro)
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Empieza con una descripción corta. La IA hará 2–3 preguntas y entregará un resumen.
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="h-4 w-4 text-green-600" />
                      No guardamos información
                    </div>
                  </div>

                  {!expanded ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                        Ejemplo: “Atendemos por WhatsApp y perdemos tiempo respondiendo lo mismo.
                        Queremos automatizar sin perder control.”
                      </div>

                      <Button
                        className="h-11 rounded-xl px-5 bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all hover:scale-105"
                        onClick={() => setExpanded(true)}
                      >
                        Iniciar evaluación
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <p className="sm:col-span-2 text-xs text-slate-500 mt-2">
                        Tiempo estimado: 60–90 segundos. Respuesta orientativa.
                      </p>
                    </div>
                  ) : !chatStarted ? (
                    <div className="mt-5 grid gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <label className="text-sm font-medium text-slate-900">
                        Describe el proceso que quieres automatizar
                      </label>

                      <Textarea
                        className="min-h-[110px] rounded-xl border-slate-200 text-base focus:ring-violet-500/20 bg-white"
                        placeholder="Ej: soporte por WhatsApp, validación de pedidos, reportes manuales, seguimiento de leads, conciliación, etc."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                      />

                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mt-2">
                        <p className="text-xs text-slate-500">
                          Consejo: menciona herramientas actuales (WhatsApp, CRM, ERP, planillas...)
                        </p>

                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="h-11 rounded-xl border-slate-200 hover:bg-slate-50"
                            onClick={() => setExpanded(false)}
                          >
                            Cancelar
                          </Button>

                          <Button
                            className="h-11 rounded-xl px-5 bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-200"
                            onClick={handleStartEvaluation}
                            disabled={!inputValue.trim()}
                          >
                            Evaluar con IA
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 animate-in fade-in duration-500">
                      <div className="h-[450px] flex flex-col rounded-xl border border-slate-100 bg-slate-50/50">
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                          {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm ${msg.role === 'user' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-violet-600 border-slate-200'
                                }`}>
                                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                              </div>
                              <div className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                ? 'bg-slate-900 text-white rounded-br-none'
                                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                                }`}>
                                <div className="prose-sm whitespace-pre-wrap">{msg.text}</div>
                              </div>
                            </div>
                          ))}

                          {isLoading && (
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-white text-violet-600 border border-slate-200 flex items-center justify-center shrink-0">
                                <Bot size={14} />
                              </div>
                              <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 shadow-sm">
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce"></span>
                              </div>
                            </div>
                          )}
                          <div ref={messagesEndRef} />
                        </div>

                        <div className="p-3 bg-white border-t border-slate-200 rounded-b-xl flex gap-2">
                          <input
                            className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                            placeholder="Escribe tu respuesta..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                              }
                            }}
                            disabled={isLoading}
                          />
                          <Button
                            onClick={handleSendMessage}
                            disabled={isLoading || !inputValue.trim()}
                            size="icon"
                            className="h-10 w-10 bg-violet-600 hover:bg-violet-700 text-white rounded-lg"
                          >
                            {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Send className="h-4 w-4" />}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 text-slate-400 hover:text-slate-600 rounded-lg"
                            onClick={() => {
                              setChatStarted(false);
                              setExpanded(false);
                              setMessages([]);
                              setChatSession(null);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="mt-4 text-center text-xs text-slate-500">
                Demostración de producto: diagnóstico, preguntas inteligentes y resumen accionable.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};