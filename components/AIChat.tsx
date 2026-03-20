import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Paperclip, Minimize2, Maximize2, Shrink, Home, MessageSquare, HelpCircle, Megaphone, Search, ChevronRight, X, Orbit, Zap } from 'lucide-react';
import { Button } from './ui/button';

type Tab = 'home' | 'messages' | 'help' | 'news';

interface Message {
  id: string;
  type: 'ai' | 'user';
  text: string;
  time: string;
}

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');
  
  // Messages Tab State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      text: '¡Hola! Soy el agente de inteligencia artificial de NexAI. ¿En qué puedo ayudarte a escalar tu agencia hoy?',
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
        text: 'Nuestros sistemas están analizando tu solicitud. Pronto un experto se unirá o la IA resolverá tu duda automáticamente con nuestra experiencia premium.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, newAIMsg]);
    }, 1500);
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'messages', icon: MessageSquare, label: 'Mensajes' },
    { id: 'help', icon: HelpCircle, label: 'Ayuda' },
    { id: 'news', icon: Megaphone, label: 'Noticias' },
  ];

  /* --- TABS RENDERING --- */

  const renderHomeTab = () => (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col gap-6 [&::-webkit-scrollbar]:hidden pb-10">
      <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-3xl border border-primary/20 shadow-inner">
        <h2 className="text-3xl font-bold text-foreground mb-2">¡Hola!</h2>
        <h3 className="text-xl font-medium text-muted-foreground tracking-tight">¿Cómo podemos ayudarte?</h3>
      </div>

      <button 
        onClick={() => setActiveTab('messages')}
        className="group relative flex items-center justify-between p-5 rounded-3xl bg-card/60 backdrop-blur border border-border/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-xl hover:border-primary/50 transition-all text-left"
      >
        <div>
          <h4 className="font-bold text-foreground mb-1">Hacer una pregunta</h4>
          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Nuestro bot y nuestro equipo te ayudarán</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex flex-shrink-0 items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-primary/20">
          <Sparkles className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
        </div>
      </button>

      {/* Sugerencias Rápidas */}
      <div className="mb-4">
        <h4 className="text-[11px] font-bold text-muted-foreground mb-3 px-2 uppercase tracking-wider">Ayuda rápida</h4>
        <div className="space-y-2">
          {['Quiero un sistema como este', 'Deseo conocer sus planes', 'Ver demostración en vivo'].map((q, i) => (
            <button 
              key={i}
              onClick={() => {
                setInputValue(q);
                setActiveTab('messages');
              }}
              className="flex items-center justify-between w-full p-4 rounded-2xl bg-muted/40 hover:bg-muted border border-transparent hover:border-border transition-all text-left group"
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
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            
            <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[85%]`}>
              <div 
                className={`px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                  msg.type === 'user' 
                    ? 'bg-primary text-primary-foreground rounded-2xl rounded-tr-sm' 
                    : 'bg-card text-foreground border border-border/50 rounded-2xl rounded-tl-sm backdrop-blur-sm'
                }`}
              >
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
            placeholder="Mandar un mensaje..."
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

  const renderHelpTab = () => (
    <div className="flex-1 flex flex-col overflow-hidden bg-background">
      <div className="p-4 sm:p-6 pb-2 shrink-0 border-b border-border/40">
        <div className="relative group">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar ayuda en artículos..." 
            className="w-full bg-card border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl py-3.5 pl-10 pr-4 text-[16px] md:text-sm text-foreground placeholder-muted-foreground outline-none transition-all shadow-inner"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-4 [&::-webkit-scrollbar]:hidden">
        <h4 className="text-[11px] font-bold text-muted-foreground mb-3 uppercase tracking-wider px-1">2 Colecciones principales</h4>
        <div className="space-y-2">
          {[
            { title: "¿Qué ofrecen como agencia?", articles: 5 },
            { title: "Plataforma de IA & Integraciones", articles: 12 },
          ].map((col, i) => (
            <button key={i} className="flex items-center justify-between w-full p-4 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-md transition-all text-left group">
              <div>
                <h5 className="font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">{col.title}</h5>
                <p className="text-[12px] text-muted-foreground">{col.articles} artículos</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>

        <h4 className="text-[11px] font-bold text-muted-foreground mt-8 mb-3 uppercase tracking-wider px-1">Artículos Recientes</h4>
        <div className="space-y-1">
          {['Tiempos de entrega promedio', '¿Cómo instalar el chat bot?', 'Estrategias de Growth Marketing'].map((art, i) => (
            <button key={i} className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-muted/50 transition-colors text-left group">
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{art}</span>
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-primary transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNewsTab = () => (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-background space-y-6 [&::-webkit-scrollbar]:hidden">
      <div className="mb-2">
        <h3 className="text-2xl font-bold text-foreground tracking-tight mb-1">Novedades</h3>
        <p className="text-sm text-muted-foreground">Del equipo de desarrollo de NexAI</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-border overflow-hidden bg-card hover:shadow-xl hover:border-primary/40 transition-all cursor-pointer group">
          <div className="h-40 bg-gradient-to-tr from-primary/30 to-background relative overflow-hidden flex items-center justify-center border-b border-border/40">
            <Bot className="w-16 h-16 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1.5 rounded-md uppercase tracking-wide">Nueva Función</span>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Agentes de Voz AI (Próximamente)</h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Nuestra nueva tecnología permite automatizar llamadas, agendar citas de ventas y resolver dudas usando voz sintética hiperrealista las 24 horas del día.</p>
            <Button variant="outline" className="w-full text-xs font-bold rounded-xl h-10 border-border/80 group-hover:border-primary/50 group-hover:bg-primary/5">Explorar Beta</Button>
          </div>
        </div>
        
        <div className="rounded-3xl border border-border p-5 bg-card hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <span className="bg-secondary text-foreground text-[10px] font-bold px-2 py-1.5 rounded-md uppercase border border-border">Actualización Menor</span>
            <span className="text-[11px] text-muted-foreground font-medium">Hace 3 días</span>
          </div>
          <h4 className="font-bold text-base text-foreground mb-2">Mejora en tiempos de carga</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">Optimizamos la infraestructura CDN reduciendo la latencia un 40% en toda América Latina para nuestros clientes de E-Commerce.</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 flex items-end justify-end"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="group relative flex items-center gap-3 rounded-full border border-border/50 bg-card px-5 py-4 text-foreground shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_0_1px_rgba(170,255,0,0.18),0_18px_50px_rgba(0,0,0,0.55)]"
              aria-label="Abrir chat"
            >
              <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_24px_rgba(170,255,0,0.35)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                  <path d="M8.5 10h7" />
                  <path d="M8.5 14h4" />
                </svg>
              </span>

              <div className="pr-1 text-left hidden sm:block">
                <div className="text-[15px] font-semibold tracking-tight leading-tight">Habla con un experto</div>
                <div className="text-xs text-muted-foreground">Respuesta rápida por chat</div>
              </div>

              <span className="hidden sm:inline-flex ml-1 rounded-full border border-border/50 bg-foreground/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition group-hover:border-primary/20 group-hover:text-primary">
                Online
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHAT/MESSENGER WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`fixed z-50 origin-bottom-right flex flex-col overflow-hidden bg-background/95 backdrop-blur-3xl border-border/80 shadow-[0_0_50px_-15px_rgba(0,0,0,0.6)] shadow-primary/10 ${
              isExpanded 
                ? 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[900px] h-[100dvh] sm:h-[85vh] sm:max-h-[900px] rounded-none sm:rounded-[2rem] border-0 sm:border' 
                : 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[480px] h-[100dvh] sm:h-[750px] sm:max-h-[calc(100vh-6rem)] rounded-none sm:rounded-[2rem] border-0 sm:border'
            }`}
          >
            {/* GLOBAL HEADER */}
            <div className={`px-6 py-5 flex flex-col justify-end z-10 relative shrink-0 border-b border-border/40 ${activeTab === 'home' ? 'bg-card/40' : 'bg-card/20'}`}>
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

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab === 'home' ? 'big' : 'small'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className={`relative z-10 flex items-end justify-between ${activeTab === 'home' ? 'mt-6' : 'mt-2'}`}
                >
                  <div>
                    <h3 className="font-extrabold text-foreground text-2xl tracking-tight leading-none mb-1.5">
                      {activeTab === 'home' || activeTab === 'messages' ? 'NexAI' : activeTab === 'help' ? 'Ayuda' : 'Noticias'}
                    </h3>
                    {(activeTab === 'home' || activeTab === 'messages') && (
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-80">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Soporte Activo en línea
                      </p>
                    )}
                  </div>
                  
                  {/* Dynamic Avatars right corner */}
                  {(activeTab === 'home' || activeTab === 'messages') && (
                    <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center relative z-20 shadow-md">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center relative z-10 shadow-md">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center relative z-0 shadow-md hidden sm:flex">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* TAB CONTENT AREA */}
            <div className="flex-1 overflow-hidden flex flex-col relative bg-background/50">
              {activeTab === 'home' && renderHomeTab()}
              {activeTab === 'messages' && renderMessagesTab()}
              {activeTab === 'help' && renderHelpTab()}
              {activeTab === 'news' && renderNewsTab()}
            </div>

            {/* BOTTOM NAVIGATION BAR */}
            <div className="flex items-center justify-around px-2 pt-2 pb-5 sm:pb-3 bg-card border-t border-border/50 shrink-0">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as Tab)}
                    className={`relative flex flex-col items-center justify-center w-full py-2.5 gap-1.5 rounded-2xl transition-all duration-300 ${
                      isActive 
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
