import {
  GitBranch,
  Terminal,
  Database,
  Search,
  Layout,
  Rocket
} from 'lucide-react';
import { NavItem, ServiceItem, MethodologyStep, EngagementModel, PricingPlan } from './types';

export const APP_NAME = "NexAI";

export const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Modelos", href: "#modelos" },
];

export const HERO_CONTENT = {
  badge: "Páginas web, automatización y sistemas a medida",
  title: "Soluciones digitales para negocios que ya están creciendo",
  subtitle: "Creamos páginas web, automatizaciones y software a medida para pymes, emprendedores y negocios que necesitan vender mejor, ordenar procesos y ahorrar tiempo.",
  ctaPrimary: "Solicitar diagnóstico",
  ctaSecondary: "Ver soluciones",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Páginas web para mostrar mejor tu negocio",
    description: "Diseñamos sitios web claros, profesionales y pensados para generar confianza, mostrar bien lo que haces y ayudarte a captar más oportunidades.",
    icon: GitBranch,
    color: "#8b5cf6",
    tags: ["Presencia Profesional", "Sitios Web", "Más Confianza"]
  },
  {
    title: "Automatizaciones para ahorrar tiempo",
    description: "Reducimos tareas manuales, ordenamos procesos repetitivos y te ayudamos a trabajar con menos fricción en el día a día.",
    icon: Terminal,
    color: "#3b82f6",
    tags: ["Menos Tareas Manuales", "Más Orden", "Procesos Simples"]
  },
  {
    title: "Sistemas a medida para tu operación",
    description: "Creamos herramientas internas, formularios, bases de datos y soluciones adaptadas a la forma en que realmente funciona tu negocio.",
    icon: Database,
    color: "#10b981",
    tags: ["Software a Medida", "Bases de Datos", "Orden Operativo"]
  },
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    id: "Fase 1",
    title: "Discovery & Diagnóstico",
    content: "No escribimos una sola línea de código sin entender tu negocio. Realizamos sesiones de inmersión con tus equipos para mapear procesos y dolores operativos.",
    icon: Search
  },
  {
    id: "Fase 2",
    title: "Arquitectura & Prototipado",
    content: "Diseñamos la solución técnica y validamos la viabilidad con pruebas de concepto (PoC) rápidas. Aseguramos que la solución escale antes de implementarla.",
    icon: Layout
  },
  {
    id: "Fase 3",
    title: "Implementación & Transferencia",
    content: "Desarrollo iterativo con entregables quincenales. Al finalizar, capacitamos a tu equipo y entregamos documentación exhaustiva para garantizar autonomía.",
    icon: Rocket
  },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    name: "Proyecto Llave en Mano",
    description: "Ideal para soluciones específicas con alcance definido.",
    features: [
      "Alcance y presupuesto cerrados",
      "Cronograma de entrega garantizado",
      "Documentación técnica completa",
      "Garantía post-implementación"
    ],
    cta: "Cotizar Proyecto"
  },
  {
    name: "Staff Augmentation",
    description: "Potencia tu equipo interno con nuestros ingenieros expertos.",
    features: [
      "Ingenieros Senior en IA/Automatización",
      "Integración total a tus ceremonias",
      "Flexibilidad de dedicación (Part/Full)",
      "Transferencia de conocimiento continua"
    ],
    cta: "Solicitar Perfiles",
    highlight: true
  },
  {
    name: "Consultoría Continua",
    description: "Acompañamiento estratégico y evolución tecnológica.",
    features: [
      "Bolsa de horas mensual",
      "Sesiones de estrategia trimestrales",
      "Auditoría de nuevos procesos",
      "Soporte preferencial"
    ],
    cta: "Hablar con Asesor"
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