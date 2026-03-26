import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  BrainCircuit,
  User,
  Sparkles,
  Paperclip,
  Maximize2,
  Shrink,
  Home,
  MessageSquare,
  Briefcase,
  Phone,
  ChevronRight,
  X,
} from 'lucide-react';
import { Button } from './ui/button';

type Tab = 'home' | 'messages' | 'services' | 'contact';

interface Message {
  id: string;
  type: 'ai' | 'user';
  text: string;
  time: string;
}

const serviceCards = [
  {
    title: 'Páginas web y tiendas online',
    description: 'Para mostrar mejor tu negocio, generar confianza y vender más.',
  },
  {
    title: 'Automatizaciones',
    description: 'Para ahorrar tiempo, responder más rápido y ordenar tareas repetitivas.',
  },
  {
    title: 'Software a medida',
    description: 'Para crear herramientas internas adaptadas a tu operación real.',
  },
];

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      text: 'Hola. Cuéntame qué te gustaría mejorar: ventas, tiempos de respuesta, pedidos, seguimiento o procesos internos.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'messages') {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, activeTab, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');

    setTimeout(() => {
      const newAIMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: 'Perfecto. Podemos ayudarte a aterrizarlo y orientarte sobre si conviene una web, una automatización, una tienda online o un sistema a medida.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, newAIMsg]);
    }, 1000);
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'messages', icon: MessageSquare, label: 'Chat' },
    { id: 'services', icon: Briefcase, label: 'Servicios' },
    { id: 'contact', icon: Phone, label: 'Contacto' },
  ];

  const renderHomeTab = () => (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 [&::-webkit-scrollbar]:hidden pb-8 sm:pb-10">
      <div className="bg-gradient-to-br from-primary/10 to-transparent p-5 sm:p-6 rounded-[1.75rem] sm:rounded-3xl border border-primary/20 shadow-inner">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Hablemos</h2>
        <h3 className="text-lg sm:text-xl font-medium text-muted-foreground tracking-tight">Te orientamos según tu etapa y necesidad.</h3>
      </div>

      <button
        onClick={() => setActiveTab('messages')}
        className="group relative flex items-center justify-between p-4 sm:p-5 rounded-[1.5rem] sm:rounded-3xl bg-card/60 backdrop-blur border border-border/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl hover:border-primary/50 transition-all text-left"
      >
        <div>
          <h4 className="font-bold text-foreground mb-1">Cuéntanos tu caso</h4>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Podemos ayudarte a definir el siguiente paso.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/20">
          <Sparkles className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
        </div>
      </button>

      <div>
        <h4 className="text-[11px] font-bold text-muted-foreground mb-3 px-2 uppercase tracking-wider">Consultas frecuentes</h4>
        <div className="space-y-2">
          {[
            'Quiero automatizar tareas manuales',
            'Necesito una web o tienda online',
            'Quiero ordenar mi operación interna'
          ].map((q, i) => (
            <button
              key={i}
              onClick={() => {
                setInputValue(q);
                setActiveTab('messages');
              }}
              className="flex items-center justify-between w-full p-3.5 sm:p-4 rounded-2xl bg-muted/40 hover:bg-muted border border-transparent hover:border-border transition-all text-left group"
            >
              <span className="text-sm font-medium text-foreground">{q}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessagesTab = () => (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background/30">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scroll-smooth [&::-webkit-scrollbar]:hidden">
        {messages.map((msg) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={msg.id}
            className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.type === 'ai' && (
              <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center flex-shrink-0 mt-1 border border-border/50 shadow-sm">
                <BrainCircuit className="w-4 h-4 text-primary" />
              </div>
            )}

            <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
              <div className={`px-4 py-3 text-[14px] leading-relaxed shadow-sm ${msg.type === 'user'
                ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm'
                : 'bg-card text-foreground border border-border/50 rounded-2xl rounded-tl-sm backdrop-blur-sm'
                }`}>
                {msg.text}
              </div>
              <span className="text-[10px] text-muted-foreground mt-1.5 px-1 font-medium">
                {msg.time}
              </span>
            </div>

            {msg.type === 'user' && (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/20 shadow-sm">
                <User className="w-4 h-4 text-primary" />
              </div>
            )}
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-background border-t border-border shrink-0">
        <form
          onSubmit={handleSendMessage}
          className="relative flex items-center bg-card border border-border/80 rounded-full shadow-inner overflow-hidden focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all duration-300"
        >
          <button type="button" className="pl-4 pr-2 text-muted-foreground hover:text-foreground transition-colors outline-none">
            <Paperclip className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe qué necesitas mejorar..."
            className="flex-1 bg-transparent border-none focus:outline-none text-[16px] md:text-[14px] py-3.5 text-foreground placeholder-muted-foreground w-full"
          />
          <div className="pr-2 pl-2">
            <Button
              type="submit" size="icon" disabled={!inputValue.trim()}
              className="w-8 h-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-md disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send className="w-4 h-4 -ml-0.5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderServicesTab = () => (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-background space-y-4 [&::-webkit-scrollbar]:hidden">
      {serviceCards.map((service) => (
        <div key={service.title} className="rounded-3xl border border-border p-5 bg-card hover:shadow-md transition-shadow">
          <h4 className="font-bold text-base text-foreground mb-2">{service.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
        </div>
      ))}
      <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Si no tienes claro cuál necesitas, te orientamos en una primera conversación y te recomendamos el camino más útil para tu negocio.
        </p>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-background space-y-4 [&::-webkit-scrollbar]:hidden">
      <div className="rounded-3xl border border-border p-5 bg-card">
        <h4 className="font-bold text-base text-foreground mb-2">Próximo paso recomendado</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Agenda una conversación breve y te ayudamos a detectar qué conviene priorizar primero.
        </p>
      </div>
      <div className="rounded-3xl border border-border p-5 bg-card">
        <h4 className="font-bold text-base text-foreground mb-2">Qué puedes contarnos</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Qué vendes, dónde tienes más desorden, qué tareas son manuales y qué te gustaría mejorar primero.
        </p>
      </div>
      <Button className="w-full h-11 rounded-2xl font-semibold">Agendar diagnóstico</Button>
      <Button variant="outline" className="w-full h-11 rounded-2xl font-semibold">Hablar por WhatsApp</Button>
    </div>
  );

  const currentTitle =
    activeTab === 'home' ? 'NexAI' :
      activeTab === 'messages' ? 'Conversemos' :
        activeTab === 'services' ? 'Servicios' : 'Contacto';

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-3 right-3 z-50 flex items-end justify-end sm:bottom-6 sm:right-6"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-3 rounded-full border border-border/50 bg-card px-3 py-3 sm:px-5 sm:py-4 text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(170,255,0,0.18),0_18px_50px_rgba(0,0,0,0.55)]"
              aria-label="Abrir chat"
            >
              <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_24px_rgba(170,255,0,0.35)] sm:h-11 sm:w-11">
                <MessageSquare className="h-5 w-5" />
              </span>

              <div className="pr-1 text-left hidden sm:block">
                <div className="text-[15px] font-semibold tracking-tight leading-tight">Habla con un experto</div>
                <div className="text-xs text-muted-foreground">Te orientamos sin complicarte</div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`fixed z-50 origin-bottom-right flex flex-col overflow-hidden bg-background/95 backdrop-blur-3xl border-border/80 shadow-[0_0_50px_-15px_rgba(0,0,0,0.6)] shadow-primary/10 ${isExpanded
              ? 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[900px] h-[100dvh] sm:h-[85vh] sm:max-h-[900px] rounded-none sm:rounded-[2rem] border-0 sm:border'
              : 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[480px] h-[100dvh] sm:h-[750px] sm:max-h-[calc(100vh-6rem)] rounded-none sm:rounded-[2rem] border-0 sm:border'
              }`}
          >
            <div className={`px-4 py-3.5 sm:px-6 sm:py-5 flex flex-col justify-end z-10 relative shrink-0 border-b border-border/40 ${activeTab === 'home' ? 'bg-card/40' : 'bg-card/20'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30" />

              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden sm:flex w-9 h-9 rounded-full items-center justify-center text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors backdrop-blur-md"
                  title={isExpanded ? "Reducir" : "Ampliar"}
                >
                  {isExpanded ? <Shrink className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors backdrop-blur-md"
                  title="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className={`relative z-10 flex items-end justify-between ${activeTab === 'home' ? 'mt-4 sm:mt-6' : 'mt-2'}`}
              >
                <div>
                  <h3 className="mb-1 text-lg font-extrabold leading-none tracking-tight text-foreground sm:mb-1.5 sm:text-2xl">
                    {currentTitle}
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-80">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Atención comercial
                  </p>
                </div>

                <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center relative z-20 shadow-md">
                    <BrainCircuit className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center relative z-10 shadow-md">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center relative z-0 shadow-md hidden sm:flex">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col relative bg-background/50">
              {activeTab === 'home' && renderHomeTab()}
              {activeTab === 'messages' && renderMessagesTab()}
              {activeTab === 'services' && renderServicesTab()}
              {activeTab === 'contact' && renderContactTab()}
            </div>

            <div className="flex items-center justify-around bg-card px-2 pb-4 pt-2 sm:pb-3 border-t border-border/50 shrink-0">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as Tab)}
                    className={`relative flex flex-col items-center justify-center w-full py-2.5 gap-1.5 rounded-2xl transition-all duration-300 ${isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-primary/10 rounded-2xl border border-primary/20"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <item.icon
                      className={`w-[22px] h-[22px] relative z-10 transition-all ${isActive ? 'fill-primary/20 scale-110' : ''}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span className="text-[10px] font-bold tracking-wide relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
