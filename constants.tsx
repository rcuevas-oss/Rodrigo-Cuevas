import {
  Globe,
  Workflow,
  Database,
  ClipboardList,
  Search,
  Layout,
  Rocket
} from 'lucide-react';
import { NavItem, ServiceItem, MethodologyStep, EngagementModel, PricingPlan } from './types';

export const APP_NAME = "La Refactoria";

export const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Contacto", href: "#contacto" },
];

export const HERO_CONTENT = {
  badge: "Sitios web, automatización, IA aplicada, sistemas internos y digitalización",
  title: "Soluciones digitales para pymes que ya están creciendo",
  subtitle: "Te ayudamos a vender mejor, ordenar procesos internos y digitalizar tu operación con automatización e IA aplicada a tu negocio y tu etapa actual.",
  ctaPrimary: "Agendar diagnóstico",
  ctaSecondary: "Ver ejemplos",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Sitios web y canales digitales",
    description: "Diseñamos sitios web, landing pages y canales digitales pensados para mostrar mejor tu negocio y abrir nuevas oportunidades.",
    icon: Globe,
    color: "#7ee0ff",
    tags: ["Presencia Profesional", "Canales Digitales", "Más Oportunidades"]
  },
  {
    title: "Automatización e IA aplicada",
    description: "Reducimos tareas manuales, conectamos herramientas y usamos IA para clasificar, responder, ordenar información y acelerar procesos repetitivos.",
    icon: Workflow,
    color: "#c7ff63",
    tags: ["IA Aplicada", "Más Orden", "Respuestas Más Rápidas"]
  },
  {
    title: "Sistemas internos a medida",
    description: "Creamos herramientas para recursos humanos, operación, seguimiento, formularios y control interno adaptadas a tu negocio.",
    icon: ClipboardList,
    color: "#ffbf47",
    tags: ["RRHH", "Operación Interna", "Procesos Claros"]
  },
  {
    title: "Digitalización y operación en la nube",
    description: "Organizamos documentos, datos, formularios y procesos para que tu empresa deje atrás el desorden y trabaje con información centralizada.",
    icon: Database,
    color: "#59d6b5",
    tags: ["Documentos", "Nube", "Orden Operativo"]
  },
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    id: "Paso 1",
    title: "Diagnóstico",
    content: "Primero entendemos cómo funciona tu negocio hoy, dónde se pierde tiempo y qué conviene resolver primero para generar impacto real.",
    icon: Search
  },
  {
    id: "Paso 2",
    title: "Propuesta Clara",
    content: "Te presentamos una solución aterrizada, con prioridades, alcance y una forma simple de avanzar sin sobredimensionar el proyecto.",
    icon: Layout
  },
  {
    id: "Paso 3",
    title: "Implementación y Acompañamiento",
    content: "Construimos, probamos, ajustamos y dejamos una solución útil para tu operación, con acompañamiento para que la puedas usar con confianza.",
    icon: Rocket
  },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    name: "Proyecto a Medida",
    description: "Ideal para una web, tienda, automatización o sistema con objetivos y alcance definidos.",
    features: [
      "Diagnóstico inicial y propuesta clara",
      "Alcance, tiempos y entregables definidos",
      "Implementación enfocada en tu operación",
      "Acompañamiento posterior a la entrega"
    ],
    cta: "Solicitar propuesta"
  },
  {
    name: "Acompañamiento Continuo",
    description: "Para negocios que quieren seguir mejorando procesos, herramientas y automatizaciones mes a mes.",
    features: [
      "Evolución continua de tu solución",
      "Nuevas mejoras según prioridad del negocio",
      "Soporte y ajustes sobre lo implementado",
      "Visión estratégica para seguir creciendo"
    ],
    cta: "Hablar sobre acompañamiento",
    highlight: true
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Inicial",
    price: "$2,900",
    description: "Automatización esencial para validar procesos y reducir carga operativa.",
    features: [
      "Auditoría de Procesos Base",
      "2 Agentes de IA dedicados",
      "Integración estándar (API)",
      "Soporte horario comercial"
    ],
    cta: "Iniciar Validación",
    highlight: false
  },
  {
    name: "Expansión",
    price: "$5,500",
    description: "Infraestructura robusta para empresas que requieren alta disponibilidad.",
    features: [
      "Arquitectura de Datos Completa",
      "Orquestación de flujos múltiples",
      "Panel de control en tiempo real",
      "Soporte técnico prioritario",
      "Mantenimiento proactivo"
    ],
    cta: "Escalar Operación",
    highlight: true
  },
  {
    name: "Corporativo",
    price: "A medida",
    description: "Transformación digital integral con seguridad y compliance corporativo.",
    features: [
      "Despliegue en nube privada",
      "SLA Garantizado 99.9%",
      "Auditoría de Seguridad & ISO",
      "Equipo de ingeniería dedicado",
      "Entrenamiento de modelos propios"
    ],
    cta: "Consultar Solución",
    highlight: false
  }
];
