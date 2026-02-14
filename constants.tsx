import {
  GitBranch,
  Terminal,
  Database,
} from 'lucide-react';
import { NavItem, ServiceItem, MethodologyStep, TestimonialItem, EngagementModel, PricingPlan } from './types';

export const APP_NAME = "NexAI";

export const NAV_ITEMS: NavItem[] = [
  { label: "Servicios", href: "#servicios" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Modelos", href: "#modelos" },
];

export const HERO_CONTENT = {
  badge: "Consultora Especializada en IA & Procesos",
  title: "Tu socio estratégico para la transformación inteligente.",
  subtitle: "Diseñamos e implementamos ecosistemas de automatización a medida para empresas B2B. Sin plataformas genéricas, solo soluciones que se adaptan a tu operación.",
  ctaPrimary: "Agendar Consultoría",
  ctaSecondary: "Ver Casos de Éxito",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Consultoría & Estrategia",
    description: "Analizamos tu arquitectura actual para identificar oportunidades de alto impacto. Entregamos un roadmap técnico claro y un análisis de ROI proyectado.",
    icon: GitBranch,
    color: "#8b5cf6",
    tags: ["Auditoría Técnica", "Diseño de Arquitectura", "Análisis ROI"]
  },
  {
    title: "Desarrollo de Soluciones",
    description: "Ingeniería de software a medida para integrar modelos de IA (LLMs) y automatizaciones complejas directamente en tu stack tecnológico existente.",
    icon: Terminal,
    color: "#3b82f6",
    tags: ["Desarrollo Python/TS", "Integración API", "Agentes IA"]
  },
  {
    title: "Ingeniería de Datos",
    description: "Preparamos y estructuramos tus datos empresariales para que sean consumibles por sistemas inteligentes. ETLs robustos y gobernanza de datos.",
    icon: Database,
    color: "#10b981",
    tags: ["Data Warehousing", "Limpieza de Datos", "Vector Stores"]
  },
];

export const METHODOLOGY: MethodologyStep[] = [
  {
    id: "Fase 1",
    title: "Discovery & Diagnóstico",
    content: "No escribimos una sola línea de código sin entender tu negocio. Realizamos sesiones de inmersión con tus equipos para mapear procesos y dolores operativos."
  },
  {
    id: "Fase 2",
    title: "Arquitectura & Prototipado",
    content: "Diseñamos la solución técnica y validamos la viabilidad con pruebas de concepto (PoC) rápidas. Aseguramos que la solución escale antes de implementarla."
  },
  {
    id: "Fase 3",
    title: "Implementación & Transferencia",
    content: "Desarrollo iterativo con entregables quincenales. Al finalizar, capacitamos a tu equipo y entregamos documentación exhaustiva para garantizar autonomía."
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "NexAI no solo nos entregó un software, rediseñaron cómo operamos. Su equipo técnico tiene un nivel de seniority que es difícil de encontrar.",
    author: "Elena Vásquez",
    role: "Directora de Operaciones",
    company: "Logística Andina",
    metric: "40% Ahorro Operativo"
  },
  {
    quote: "Buscábamos expertos en IA, no generalistas. Entendieron nuestra necesidad de privacidad de datos y cumplimiento normativo desde el día uno.",
    author: "Roberto Méndez",
    role: "VP de Ingeniería",
    company: "FinTech Corp",
    metric: "ISO 27001 Compliant"
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