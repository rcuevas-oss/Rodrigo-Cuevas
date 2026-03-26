import React, { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';
import {
  PiBicycleBold,
  PiCardsThreeDuotone,
  PiChartLineUpDuotone,
  PiCirclesThreePlusDuotone,
  PiDatabaseDuotone,
  PiLightningABold,
  PiLinkSimpleHorizontalDuotone,
  PiPipeWrenchDuotone,
  PiStorefrontDuotone,
} from 'react-icons/pi';
import {
  SiGoogleads,
  SiGoogleanalytics,
  SiInstagram,
  SiMercadopago,
  SiShopify,
  SiWhatsapp,
} from 'react-icons/si';

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const commerceModes = [
  {
    id: 'shopify',
    label: 'Shopify',
    title: 'Tienda lista para catalogo tecnico, variantes y marcas del rubro.',
    description:
      'La arquitectura de la tienda se piensa para bicicletas, repuestos, accesorios, tallas, fichas y una experiencia de compra mas clara.',
    bullets: ['Colecciones y navegacion util', 'Compatibilidad y variantes', 'Base preparada para crecer'],
    icon: SiShopify,
    gradient: 'from-[#b8ff38] via-[#d8ff92] to-[#eefad0]',
    note: 'Catalogo y estructura comercial',
  },
  {
    id: 'automation',
    label: 'Automatizacion',
    title: 'Consultas, seguimiento y procesos conectados a la operacion real.',
    description:
      'Menos trabajo manual para responder consultas tecnicas, ordenar pedidos, mover catalogo y ejecutar acciones comerciales con mas contexto.',
    bullets: ['WhatsApp y formularios', 'Seguimiento y clasificacion', 'Operacion mas ordenada'],
    icon: PiLinkSimpleHorizontalDuotone,
    gradient: 'from-[#7ee0ff] via-[#bceeff] to-[#edf8ff]',
    note: 'Atencion, catalogo y flujo interno',
  },
  {
    id: 'traffic',
    label: 'Trafico',
    title: 'Una estrategia para generar visitas utiles y no solo subir productos.',
    description:
      'Ads, contenido y embudos simples para llevar trafico de calidad hacia la tienda y convertir mejor segun el momento del negocio.',
    bullets: ['Google Ads e Instagram', 'Landing y captacion', 'Medicion y optimizacion'],
    icon: PiChartLineUpDuotone,
    gradient: 'from-[#ffffff] via-[#e7edf2] to-[#dce4ea]',
    note: 'Demanda y crecimiento comercial',
  },
];

const heroSignals = ['Rubro bicicleta', 'Shopify', 'Automatizacion', 'Mercado Libre', 'Performance ads'];

const platformLogos = [
  { name: 'Shopify', icon: SiShopify, color: '#95BF47' },
  { name: 'Mercado Pago', icon: SiMercadopago, color: '#009EE3' },
  { name: 'Google Ads', icon: SiGoogleads, color: '#4285F4' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#F9AB00' },
  { name: 'Instagram', icon: SiInstagram, color: '#E4405F' },
  { name: 'WhatsApp', icon: SiWhatsapp, color: '#25D366' },
];

const SpecializedLogo = ({ className = 'h-3.5 w-auto sm:h-4' }: { className?: string }) => (
  <svg viewBox="0 0 1540 160" aria-hidden="true" className={className}>
    <path fill="currentColor" d="m1098.04.03-.02-.03-45.65.07-91.57 159.89.02.03 47.4-.03h-.02L1098.04.03Z" />
    <path fill="currentColor" d="M903.35 146.4c-6.32 0-12.94-1.4-7.56-10.26C901.19 127.24 971.97.07 971.97.07L926.22 0s-69.67 122.07-78.1 137.07c-8.41 14.95-3.22 22.91 11.79 22.91l80.91-.04 7.03-13.49-.02-.05h-44.48Z" />
    <path fill="currentColor" d="M784.27 10.4C779.76 15.54 652.56 159.59 652.24 159.97h43.35l55.99-64.97h36.92v.04l-10.11 64.86h45.07L843.99 0l-39.26.05c-6.35-.03-15.9 5.23-20.46 10.35Zm5.74 72.93-26.62-.03 33.31-43.13-6.69 43.16Z" />
    <polygon fill="currentColor" points="675.28 0 583.75 160 631.21 159.95 721.02 .02 675.28 0" />
    <path fill="currentColor" d="M567.36 22.11c3.52-5.6 5.2-10.72 20.19-10.75l60.12.05L654.5.05V.02L556.65.07c-13.86 0-26.75 2.47-31.6 11.82-4.92 9.33-65.46 115.9-72.03 127.54-6.53 11.7-3.29 20.57 14.02 20.57h97.22l5.7-13.54-13.98-.02h-47.19c-9.81.02-9.98-4.2-6.53-9.85 3.51-5.63 61.63-108.84 65.11-114.48Z" />
    <path fill="currentColor" d="M389.75 84.79h56.55l8-11.57v-.04l-58.34.04s22.83-41.24 28.2-50.16c5.4-8.85 10.71-12.14 25.7-12.14h54.38l-.04-.02L511.53.03V0H415.2c-16.18 0-27.44 3.93-34.76 16.59-7.4 12.58-60.54 106.5-69.19 122.37-8.62 15.89.07 20.99 13.33 21.03l95.37-.05 7.45-13.51v-.04l-13.88-.04-47.17.07c-9.26-.02-10.37-2.83-4.74-12.64 5.54-9.8 28.15-49.01 28.15-49.01Z" />
    <path fill="currentColor" d="M1523.76.02 1413.12.05 1322.58 160h117.09c15.58-.02 24.83-8.42 31.42-20.07 6.53-11.7 61.81-108.18 66.72-117.46h-.02c4.94-9.4 2.09-22.4-14.04-22.45Zm-35.94 27.29c-5.89 11.14-57.69 101.64-61.97 108.2-4.3 6.56-7.61 11.18-19.14 11.22h-16.57l-14.39-.03 75.44-133.39 29.81-.04c8.65-.03 12.64 2.79 6.81 14.04Z" />
    <path fill="currentColor" d="M1248.15 146.44c-9.29-.02-10.41-2.86-4.82-12.64l-.02.02c5.58-9.78 28.23-49.04 28.23-49.04l56.48-.05 8.04-11.48h-58.38s22.84-41.24 28.22-50.13c5.36-8.89 10.66-12.18 25.67-12.23l54.4.07 7.29-10.9V.03L1297 .06c-16.2 0-27.44 3.88-34.82 16.51-7.35 12.59-60.49 106.5-69.12 122.41-8.66 15.84.09 20.97 13.33 21.01l95.34-.05 7.52-13.54v-.04h-13.95l-47.14.09Z" />
    <path fill="currentColor" d="M1094.77 146.47c-7.45-.03-5.54-3.75-1.29-7.48 4.28-3.71 131.36-110.82 143.88-120.61 12.48-9.88 6.83-18.27-5.88-18.34l-106.88.04-6.09 12.66.02.03h68.52c4.58-.02 5.93 1.88 1.03 6.06-4.99 4.21-133.73 111.28-147.13 122.46-13.38 11.27-8.53 18.7 5.27 18.7h117.22v.02l6.97-13.56-.02-.04-75.62.07Z" />
    <path fill="currentColor" d="M151.06 116.98c13.15-22.98 8.9-28.07-6.59-38.8-8.41-5.76-17.91-13.07-26.02-18.17-8.12-5.12-8.11-13.1-3.63-20.53 4.5-7.47 6.06-12.12 10.78-18.22 4.78-6.11 9.74-10.27 18.39-10.29l65.26.2L216.45 0 115.78.05c-12.13-.02-23.95 1.14-30.54 12.82-6.51 11.73-9.12 15.91-15.91 28.46-6.73 12.62-7.22 14.99 5.22 23.85 12.52 8.87 23.6 16.34 31.97 22.86 8.34 6.58 6.55 12.14.02 23.84-6.55 11.68-8.2 14.01-13.38 21.95-5.19 7.96-8.46 12.62-19.95 12.62H9.29L0 159.99l103.2-.07c15.01 0 24.92-3.27 33.9-18.17 8.96-14.99 3.82-7.08 13.97-24.76v-.02Z" />
    <path fill="currentColor" d="M328.17 72.63l.03-.02c11.98-20.62 19.97-33.67 27.14-48.14C362.52 10.01 355.16-.04 338.48 0h-97.99l-93.36 159.91v.05h44.52l31.99-55.35s40.89-4.43 62.79-6.75c21.82-2.4 29.79-4.69 41.75-25.23Zm-46.05-3.78c-7.15 11.68-12.02 16.39-18.14 17.76-4.83 1.17-25.12 3.47-31.79 4.34v-.02l45.32-79.94 23.52-.05-.02-.02c5.73.04 10.71 3.77 4.94 14.52-5.79 10.74-16.69 31.76-23.83 43.41Z" />
  </svg>
);

const SramLogo = () => (
  <svg viewBox="0 0 116 15" aria-hidden="true" className="h-3.5 w-auto sm:h-4 fill-current">
    <path d="M113.8 13.1v-.6h.4c.2 0 .4 0 .4.3s-.2.3-.4.3h-.4Zm0 .3h.3l.5.8h.3l-.5-.8c.3 0 .5-.2.5-.5 0-.4-.2-.5-.7-.5h-.7v1.9h.3v-1Zm.3 1.5c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6.8 1.6 1.6 1.6Zm-1.3-1.7c0-.8.6-1.4 1.3-1.4.7 0 1.3.6 1.3 1.4 0 .8-.6 1.4-1.3 1.4s-1.3-.6-1.3-1.4Zm-10.4 1.7 2.9-11.4h-4.9l-2.8 11.4h-7.8l2.9-11.4h-4.9l-3 11.4h-8.1L80.6 0s26.1-.1 28.9 0c1.7 0 4.1 1.7 3.3 5.1-1 4-1.7 7.4-2.3 9.8-2.8 0-3.7 0-8.1 0ZM66.8 6.8h-6.2l.9-3.6h6.1l-.8 3.6ZM58.7 0c-1.3 0-4-.2-5.4 4.2-.7 2.3-2.9 10.7-2.9 10.7s2.2 0 3.9 0c1.8 0 3.7.1 4.3-1.1.5-1.1 1.2-3.9 1.2-3.9h6.4l-1.3 5H73C76.7.7 76.9 0 76.9 0S58.7 0 58.7 0ZM11.4 3.2 10.7 6h13.1s-.6 2.2-1.2 4.4c-.8 3.1-2.5 4.5-5.9 4.5H0l.8-3.1h13.4L15 8.6H1.6s.1-.4.4-1.6c.2-.7.4-1.4.6-2.2.6-2.2 1.6-4.5 5.3-4.7h17.4l-.9 3.1H11.4ZM41.1 6.8h-6.2l1-3.6H42l-.9 3.6ZM46.3 0H33c-4.7 0-5.3 3.8-5.5 4.2-.2.5-2.1 8.2-2.8 10.7h8.1l1.6-6c.2.2 3.3 4.1 4.3 5.2.8.9 1.4.8 4.4.8H48l-4.5-5.4h5c.3-1.5.8-3.2 1.2-4.8C50.4 2 48.3 0 46.3 0Z" />
  </svg>
);

const FoxLogo = () => (
  <svg viewBox="0 0 218 144" aria-hidden="true" className="h-4 w-auto sm:h-[1.05rem]">
    <path
      fill="currentColor"
      d="M141.782 70.0849H134.948C140.616 62.8292 143.887 53.8382 143.897 43.6783C143.906 35.8831 141.837 28.5645 138.219 22.2348H145.282L164.044 44.2628L141.782 70.0849ZM147.596 103.576C134.702 104.952 107.619 95.5565 107.619 95.5565C107.619 95.5565 113.105 113.26 132.715 118.322C116.577 118.169 98.2791 110.814 98.2791 110.814C102.981 122.242 108.932 125.407 108.932 125.407C105.35 124.678 102.261 123.77 99.5913 122.781C92.7568 120.228 88.5468 117.081 85.0658 114.348C68.4172 102.183 68.0344 78.6624 68.0344 73.5105C68.1985 70.1569 68.9822 61.4266 72.4085 52.2737C79.899 34.2018 88.8567 26.7842 99.728 26.7842C109.096 26.7842 116.677 34.049 116.677 43.3007C116.677 53.8652 109.56 58.7653 109.56 68.2058C109.843 78.1409 120.869 95.4665 147.596 103.585M152.271 95.988C158.085 96.4646 164.892 96.1229 173.658 103.415C182.488 110.76 185.003 123.851 177.094 136.708C177.094 136.708 173.786 125.946 154.23 126.719C134.675 127.493 115.684 129.992 107.583 118.421C107.583 118.421 135.167 127.484 153.793 118.169C121.598 114.833 117.379 102.92 117.379 102.92C117.379 102.92 146.649 113.574 162.942 103.684C162.942 103.684 142.63 99.2068 133.198 92.8771C133.198 92.8771 137.891 94.8192 152.262 95.997M181.012 87.1319H217.973L218 70.1928H211.649L188.393 44.2718L207.739 22.3067H216.761V4.81022H181.012V22.2977H184.921L176.647 31.6304L168.364 22.2977H172.282V4.81022H136.315L136.297 19.1509C128.36 7.60642 114.973 0.0180154 99.7918 3.34303e-05C84.9383 -0.0179486 71.8162 7.21981 63.7971 18.3147V4.81022H0.0273377L0 22.064H7.93705L7.87326 69.9231H0.99327L0.975045 87.1229H39.3481L39.3663 69.9591H29.5794L29.5976 55.043L48.652 55.07V36.5125L29.625 36.4855L29.6432 23.3047H43.9317V30.8841L57.5003 30.9021C50.6203 53.4336 64.0705 69.2038 64.0705 69.2038C64.0705 69.2038 60.79 101.356 82.3867 117.683C88.5377 122.278 97.0033 127.771 110.809 130.055C128.751 133.022 146.712 130.621 159.37 131.008C169.239 131.305 173.385 136.097 175.098 144C181.759 139.702 187.692 129.21 185.787 116.371C183.892 103.531 171.982 93.992 161.894 92.7872C157.848 91.9151 150.877 91.9151 143.313 90.7553C136.042 89.5505 128.177 87.9231 121.726 81.5485C121.726 81.5485 128.852 77.6644 134.383 70.8132L134.365 87.0869V87.1319H172.2V70.1389H166.951L176.656 58.9001L186.261 70.1479H181.039V87.1229L181.012 87.1319Z"
    />
  </svg>
);

const GoogleLogo = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg viewBox="0 0 18 18" aria-hidden="true" className={className}>
    <path
      fill="#4285F4"
      d="M17.64 9.2045c0-.638-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2582h2.9086C16.6582 14.2532 17.64 11.9459 17.64 9.2045Z"
    />
    <path
      fill="#34A853"
      d="M9 18c2.43 0 4.4673-.8059 5.9564-2.18l-2.9086-2.2582c-.8059.54-1.8368.8582-3.0477.8582-2.3441 0-4.3282-1.5845-5.0364-3.7136H.9573v2.3359A8.998 8.998 0 0 0 9 18Z"
    />
    <path
      fill="#FBBC05"
      d="M3.9636 10.7064A5.409 5.409 0 0 1 3.6818 9c0-.5927.1018-1.1691.2818-1.7064V4.9577H.9573A8.9988 8.9988 0 0 0 0 9c0 1.4523.3477 2.8273.9573 4.0423l3.0063-2.3359Z"
    />
    <path
      fill="#EA4335"
      d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.3459l2.5813-2.5814C13.4636.8918 11.43 0 9 0 5.4818 0 2.4545 2.0218.9573 4.9577l3.0063 2.3359C4.6718 5.1641 6.6559 3.5795 9 3.5795Z"
    />
  </svg>
);

const marketAssets = [
  { name: 'Specialized', logo: <SpecializedLogo />, widthClass: 'min-w-[132px]' },
  { name: 'Shimano', text: 'SHIMANO' },
  { name: 'Trek', text: 'TREK' },
  { name: 'Scott', text: 'SCOTT' },
  { name: 'SRAM', logo: <SramLogo />, widthClass: 'min-w-[110px]' },
  { name: 'FOX', logo: <FoxLogo />, widthClass: 'min-w-[104px]' },
];

const clientHighlights = [
  {
    name: 'Buono Bike',
    detail: 'Distribuidor oficial de Specialized.',
    logo: <SpecializedLogo className="h-5 w-auto sm:h-6" />,
  },
  { name: 'Bicicletas Maino Curico', detail: 'Una de las tiendas de bicicletas mas grandes y surtidas de Chile.' },
];

const businessContext = [
  {
    text: 'Conocimiento real de la logica de una tienda y taller de bicicletas.',
    icon: PiPipeWrenchDuotone,
    badgeClass: 'bg-[#e8ffd1] text-[#6e9b11]',
  },
  {
    text: 'Experiencia en catalogos, marcas, repuestos, bicicletas, accesorios y variantes.',
    icon: PiCardsThreeDuotone,
    badgeClass: 'bg-[#dff4ff] text-[#1487bf]',
  },
  {
    text: 'Dominio de Shopify, Mercado Libre y Mercado Libre Full para este rubro.',
    icon: PiStorefrontDuotone,
    badgeClass: 'bg-[#eef1f4] text-[#111418]',
  },
  {
    text: 'Base de datos propia con marcas, imagenes y descripciones para acelerar carga de productos.',
    icon: PiDatabaseDuotone,
    badgeClass: 'bg-[#fff2d9] text-[#b06c00]',
  },
];

const painPoints = [
  'Catalogos extensos y dificiles de mantener actualizados.',
  'Productos con muchas variantes, tallas, colores y especificaciones tecnicas.',
  'Consultas repetitivas sobre stock, compatibilidad, taller y despachos.',
  'Trafico digital que no siempre se convierte en ventas o contactos utiles.',
];

const expertisePillars = [
  {
    title: 'Shopify con criterio de rubro',
    description: 'No se disena una tienda generica: se estructura para productos tecnicos, marcas, categorias y compra asistida.',
    icon: SiShopify,
    badgeClass: 'bg-[#e8ffd1] text-[#6f9d10]',
  },
  {
    title: 'Automatizacion comercial y operativa',
    description: 'Seguimiento, consultas, catalogo y procesos conectados para que vender no dependa de hacer todo a mano.',
    icon: PiCirclesThreePlusDuotone,
    badgeClass: 'bg-[#dff4ff] text-[#1487bf]',
  },
  {
    title: 'Trafico y captacion con foco',
    description: 'La tienda se acompana con estrategia para atraer visitas utiles y sostener crecimiento de forma medible.',
    icon: PiChartLineUpDuotone,
    badgeClass: 'bg-[#edf0f3] text-[#111418]',
  },
];

const seoCallout = {
  title: 'SEO base para Google',
  description: 'Categorias, fichas y estructura tecnica pensadas para que la tienda tambien pueda capturar busquedas organicas del rubro.',
};

const processSteps = [
  {
    title: 'Diagnostico del negocio',
    description: 'Revisamos catalogo, operacion, canales de venta y donde se esta perdiendo tiempo o conversion.',
  },
  {
    title: 'Arquitectura de la solucion',
    description: 'Definimos estructura Shopify, automatizaciones y forma de generar trafico segun la etapa de la tienda.',
  },
  {
    title: 'Implementacion con criterio comercial',
    description: 'Construimos, conectamos y dejamos una base lista para vender mejor y ordenar el crecimiento.',
  },
];

const closingPillars = [
  {
    title: 'Shopify',
    description: 'Arquitectura pensada para catalogo, variantes, marcas y conversion.',
    icon: SiShopify,
    badgeClass: 'bg-[#e8ffd1] text-[#6e9b11]',
  },
  {
    title: 'Automatizacion',
    description: 'Consultas, seguimiento y procesos con menos friccion.',
    icon: PiLinkSimpleHorizontalDuotone,
    badgeClass: 'bg-[#dff4ff] text-[#1487bf]',
  },
  {
    title: 'Catalogo',
    description: 'Carga y organizacion de productos con mas velocidad y criterio.',
    icon: PiCardsThreeDuotone,
    badgeClass: 'bg-[#fff2d9] text-[#b06c00]',
  },
];

const brandWordmarks = [
  'Especializacion bike commerce',
  'Shopify + Mercado Libre',
  'Taller, tienda y catalogo',
  'Automatizacion y trafico',
];

const showcaseViews = [
  {
    id: 'home',
    label: 'Home desktop',
    title: 'Home con direccion de marca y primera impresion fuerte',
    description: 'Vista principal pensada para marca, campaña activa y un ingreso visual con peso comercial.',
    image: '/cases/buono-bike/home.png',
    previewFrameClass: 'bg-[#0c1218]',
    previewImageClass: 'h-[220px] w-full object-cover object-top sm:h-[360px]',
    thumbFrameClass: 'bg-[#0c1218]',
    thumbImageClass: 'h-20 w-full object-cover object-top sm:h-24',
  },
  {
    id: 'category',
    label: 'Coleccion MTB',
    title: 'Coleccion MTB con mas variedad visible y mejor lectura del catalogo',
    description: 'Reemplace la captura anterior por una coleccion mas completa, con dos filas de bicicletas y mejor sensacion de surtido real.',
    image: '/cases/buono-bike/collection-mtb.png',
    previewFrameClass: 'bg-[#f3f7fa]',
    previewImageClass: 'h-[220px] w-full object-cover object-top sm:h-[360px]',
    thumbFrameClass: 'bg-[#f3f7fa]',
    thumbImageClass: 'h-20 w-full object-cover object-top sm:h-24',
  },
  {
    id: 'product',
    label: 'Producto',
    title: 'Ficha de producto con variantes, compra y contenido comercial',
    description: 'La ficha ahora se muestra mas abierta para que se entienda mejor la estructura de compra y no quede recortada.',
    image: '/cases/buono-bike/product.png',
    previewFrameClass: 'bg-[#f6f8fb]',
    previewImageClass: 'h-[260px] w-full object-contain bg-[#f6f8fb] p-3 sm:h-[420px] sm:p-4',
    thumbFrameClass: 'bg-[#f6f8fb]',
    thumbImageClass: 'h-20 w-full object-contain bg-[#f6f8fb] p-2 sm:h-24',
  },
  {
    id: 'mobile',
    label: 'Vista movil',
    title: 'Version movil lista para trafico y compra desde telefono',
    description: 'Tambien sumamos una vista compacta para mostrar que la tienda se defiende bien en mobile, donde llega gran parte del trafico.',
    image: '/cases/buono-bike/home-mobile.png',
    previewFrameClass: 'bg-[#0c1218]',
    previewImageClass: 'h-[260px] w-full object-contain bg-[#0c1218] p-3 sm:h-[420px] sm:p-4',
    thumbFrameClass: 'bg-[#0c1218]',
    thumbImageClass: 'h-20 w-full object-contain bg-[#0c1218] p-2 sm:h-24',
  },
];

const showcaseSignals = [
  'Shopify en produccion',
  'Distribuidor Specialized',
  'Tienda + taller',
  'Desktop + mobile',
  'Trabajo real publicado',
];

export const BikeCommerceLanding: React.FC = () => {
  const [activeMode, setActiveMode] = useState(commerceModes[0].id);
  const [activeShowcase, setActiveShowcase] = useState(showcaseViews[0].id);
  const currentMode = commerceModes.find((item) => item.id === activeMode) ?? commerceModes[0];
  const currentShowcase = showcaseViews.find((item) => item.id === activeShowcase) ?? showcaseViews[0];
  const CurrentIcon = currentMode.icon;

  return (
    <div className="min-h-screen bg-[#eef2f5] text-[#111418]">
      <header className="sticky top-0 z-50 border-b border-[#dbe4eb]/80 bg-[rgba(247,250,252,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[74px] lg:px-8">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111418] text-[#b8ff38] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition-transform duration-300 group-hover:-translate-y-0.5">
              <PiBicycleBold size={18} />
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-[#111418]">NexAI</p>
              <p className="text-[11px] text-[#6c7883]">Bike commerce landing</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#shopify-bikes" className="text-sm font-medium text-[#55616c] transition-colors hover:text-[#111418]">Shopify</a>
            <a href="/tiendas-bicicletas/layouts" className="text-sm font-medium text-[#55616c] transition-colors hover:text-[#111418]">Layouts</a>
            <a href="#credibilidad-bike" className="text-sm font-medium text-[#55616c] transition-colors hover:text-[#111418]">Credibilidad</a>
            <a href="#proceso-bike" className="text-sm font-medium text-[#55616c] transition-colors hover:text-[#111418]">Proceso</a>
            <a href="#contacto-bike" className="text-sm font-medium text-[#55616c] transition-colors hover:text-[#111418]">Contacto</a>
          </nav>

          <Button asChild className="rounded-2xl bg-[#111418] px-4 text-white shadow-[0_16px_36px_rgba(0,0,0,0.18)] hover:bg-[#1b2128] sm:px-5">
            <a href="#contacto-bike">
              <span className="sm:hidden">Cotizar</span>
              <span className="hidden sm:inline">Quiero esta solucion</span>
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section
          id="shopify-bikes"
          className="relative overflow-hidden bg-[linear-gradient(135deg,#091016_0%,#111920_52%,#0a1117_100%)] pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(184,255,56,0.22),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(73,212,255,0.20),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,72px_72px,72px_72px] opacity-75" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent_0%,rgba(12,17,22,0.16)_45%,rgba(238,242,245,1)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl pt-4 sm:pt-8"
              >
                <Badge
                  variant="outline"
                  className="rounded-full !border-[rgba(255,255,255,0.18)] !bg-[rgba(255,255,255,0.06)] px-4 py-1.5 !text-[rgba(255,255,255,0.82)] backdrop-blur-md"
                >
                  Shopify + automatizacion + trafico para tiendas de bicicletas
                </Badge>

                <h1 className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-5xl lg:text-[5.2rem]">
                  Ecommerce
                  <br />
                  especializado para
                  <br />
                  <span className="bg-[linear-gradient(135deg,#c7ff63_0%,#9fed00_52%,#d7ff8e_100%)] bg-clip-text text-transparent">
                    tiendas y talleres
                  </span>
                  <br />
                  de bicicletas
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c6d1dc] sm:text-lg">
                  No solo desarrollamos una tienda online. Entendemos la logica comercial y operativa del rubro bicicleta para construir Shopify, automatizaciones y estrategias que ayuden a vender mejor.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="w-full rounded-2xl bg-[#c7ff63] px-7 text-[#111418] shadow-[0_20px_50px_rgba(199,255,99,0.28)] hover:bg-[#d7ff8e] sm:w-auto">
                    <a href="#contacto-bike">
                      Quiero una tienda para mi negocio
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full rounded-2xl border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] px-7 text-white hover:bg-[rgba(255,255,255,0.10)] hover:text-white sm:w-auto"
                  >
                    <a href="#credibilidad-bike">Ver experiencia en el rubro</a>
                  </Button>
                </div>

                <a
                  href="/tiendas-bicicletas/layouts"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#d4dde6] transition-colors hover:text-white"
                >
                  Ver layouts y bloques de ejemplo
                  <ChevronRight className="h-4 w-4" />
                </a>

                <div className="mt-10 flex flex-wrap gap-2.5">
                  {heroSignals.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      className="rounded-full border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.06)] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.84)] backdrop-blur-md"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="mt-10 rounded-[2rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[rgba(255,255,255,0.64)]">Plataformas reales con las que trabajamos</p>
                    <div className="h-px min-w-[70px] flex-1 bg-[rgba(255,255,255,0.12)]" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {platformLogos.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.18)' }}
                        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                        className="flex items-center gap-3 rounded-[1.15rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(11,18,24,0.76)] px-4 py-3"
                      >
                        <item.icon size={18} style={{ color: item.color }} />
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.78, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="relative lg:pt-6"
              >
                <div className="relative overflow-hidden rounded-[2.4rem] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(160deg,#11181f_0%,#151e25_100%)] p-5 shadow-[0_40px_110px_rgba(0,0,0,0.35)] sm:p-6">
                  <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-[#c7ff63]/18 blur-3xl" />
                  <div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-[#4cd3ff]/12 blur-3xl" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[rgba(255,255,255,0.58)]">Bike commerce stack</p>
                        <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2.1rem]">
                          Una landing mas seria para un negocio que vende experiencia, no solo productos.
                        </h2>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] text-[#c7ff63]">
                        <PiLightningABold size={20} />
                      </div>
                    </div>

                    <LayoutGroup>
                      <div className="mt-8 flex flex-wrap gap-2 rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.18)] p-2">
                        {commerceModes.map((mode) => (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setActiveMode(mode.id)}
                            className="relative rounded-[1rem] px-3.5 py-2.5 text-left text-sm font-semibold tracking-tight text-[rgba(255,255,255,0.76)] transition-colors hover:text-white"
                          >
                            {activeMode === mode.id && (
                              <motion.div
                                layoutId="bike-mode-pill"
                                className={`absolute inset-0 rounded-[1rem] bg-gradient-to-r ${mode.gradient}`}
                                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                              />
                            )}
                            <span className={`relative z-10 ${activeMode === mode.id ? 'text-[#111418]' : ''}`}>{mode.label}</span>
                          </button>
                        ))}
                      </div>
                    </LayoutGroup>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentMode.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 grid gap-4"
                      >
                        <div className="rounded-[1.9rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(255,255,255,0.58)]">{currentMode.label}</p>
                              <h3 className="mt-3 max-w-md text-[1.7rem] font-semibold leading-tight tracking-[-0.04em] text-white">
                                {currentMode.title}
                              </h3>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#111418] shadow-[0_14px_34px_rgba(255,255,255,0.12)]">
                              <CurrentIcon size={20} />
                            </div>
                          </div>

                          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[rgba(255,255,255,0.8)]">
                            {currentMode.description}
                          </p>

                          <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {currentMode.bullets.map((item) => (
                              <div key={item} className="rounded-[1.3rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.18)] px-4 py-3">
                                <p className="text-xs font-semibold leading-relaxed text-[rgba(255,255,255,0.86)]">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                          <div className="rounded-[1.7rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(0,0,0,0.18)] p-5">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[rgba(255,255,255,0.56)]">Foco actual</p>
                            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{currentMode.note}</p>
                            <p className="mt-4 text-sm leading-relaxed text-[rgba(255,255,255,0.78)]">
                              La especializacion no esta solo en la tecnologia. Esta en entender como se mueve el catalogo, la consulta tecnica y la venta real del rubro.
                            </p>
                          </div>

                          <div className="rounded-[1.7rem] border border-[rgba(255,255,255,0.12)] bg-white px-5 py-5 text-[#111418]">
                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#78a90f]">Experiencia real</p>
                            <div className="mt-4 grid gap-3">
                              <div className="rounded-[1rem] border border-[#dfe6ec] bg-[#f7fafc] px-3 py-3">
                                <div className="text-[#111418]">
                                  <SpecializedLogo className="h-3.5 w-auto sm:h-4" />
                                </div>
                                <p className="mt-3 text-base font-semibold tracking-[-0.03em] text-[#111418]">Buono Bike</p>
                                <p className="mt-1 text-xs leading-relaxed text-[#5a6570]">Distribuidor oficial de Specialized.</p>
                              </div>
                              <div className="rounded-[1rem] border border-[#dfe6ec] bg-[#f7fafc] px-3 py-3">
                                <p className="text-base font-semibold tracking-[-0.03em] text-[#111418]">Maino Curico</p>
                                <p className="mt-1 text-xs leading-relaxed text-[#5a6570]">
                                  Una de las tiendas de bicicletas mas grandes y surtidas de Chile.
                                </p>
                              </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-[#5a6570]">
                              Referencias reales con conocimiento tecnico, comercial y operativo del rubro bicicleta.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {marketAssets.map((item) => (
                        <div
                          key={item.name}
                          title={item.name}
                          className={`inline-flex min-h-[40px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.92)] ${item.widthClass ?? 'min-w-[104px]'}`}
                        >
                          {item.logo ? (
                            <span className="flex items-center justify-center text-white">{item.logo}</span>
                          ) : (
                            <span>{item.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d7e0e8] bg-[#eef2f5] py-5">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8">
            <motion.div
              className="flex min-w-max gap-3"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
            >
              {[...brandWordmarks, ...brandWordmarks].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-full border border-[#d7e0e8] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#4f5b66]"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section
          id="credibilidad-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-[#d7e0e8] bg-[#f6f9fb] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Credibilidad en el rubro</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl lg:text-[3.4rem]">
                  La ventaja no es solo programar.
                  <span className="mt-2 block text-[#4e5b66]">Es entender tienda, taller, catalogo y operacion.</span>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#61707c] sm:text-base">
                  Tu diferencial profesional no esta en hacer una tienda mas. Esta en hablar el mismo idioma que el negocio que vende bicicletas, repuestos, accesorios y servicios tecnicos.
                </p>
              </div>

              <motion.div variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {clientHighlights.map((item) => (
                    <motion.div key={item.name} variants={sectionReveal}>
                      <Card className="h-full rounded-[2rem] border-[#d7e0e8] bg-white shadow-[0_24px_70px_rgba(70,85,98,0.08)]">
                        <CardContent className="p-6">
                          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#79aa0f]">Referencia</p>
                          {item.logo ? (
                            <div className="mt-5 space-y-4">
                              <div className="text-[#111418]">{item.logo}</div>
                              <div>
                                <p className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#111418]">{item.name}</p>
                                <p className="mt-2 text-sm leading-relaxed text-[#61707c]">{item.detail}</p>
                              </div>
                            </div>
                          ) : (
                            <>
                              <p className="mt-4 text-[1.6rem] font-semibold tracking-[-0.04em] text-[#111418]">{item.name}</p>
                              <p className="mt-3 text-sm leading-relaxed text-[#61707c]">{item.detail}</p>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {businessContext.map((item) => (
                    <motion.div
                      key={item.text}
                      variants={sectionReveal}
                      className="rounded-[1.7rem] border border-[#d7e0e8] bg-white px-5 py-5 shadow-[0_16px_45px_rgba(70,85,98,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${item.badgeClass}`}>
                          <item.icon size={18} />
                        </div>
                        <p className="text-sm leading-relaxed text-[#31404d]">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="trabajos-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-[#d7e0e8] bg-[#eef3f7] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Trabajo real</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                  Una muestra real del tipo de ecommerce que podemos construir
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#61707c] sm:text-base">
                  En vez de prometer una tienda cualquiera, aqui mostramos una referencia real en produccion. Buono Bike combina marca, catalogo, producto y una estructura ecommerce pensada para el rubro bicicleta.
                </p>

                <div className="mt-6 rounded-[2rem] border border-[#d7e0e8] bg-white p-5 shadow-[0_20px_55px_rgba(70,85,98,0.06)]">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#79aa0f]">Caso destacado</p>
                      <div className="mt-4 text-[#111418]">
                        <SpecializedLogo className="h-4 w-auto sm:h-5" />
                      </div>
                      <p className="mt-4 text-[1.5rem] font-semibold tracking-[-0.04em] text-[#111418]">Buono Bike</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#61707c]">
                        Distribuidor oficial de Specialized con tienda, taller y ecommerce en produccion.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="w-full rounded-full border-[#cfd9e1] bg-white text-[#111418] hover:bg-[#f5f8fb] sm:w-auto">
                      <a href="https://www.buonobike.cl" target="_blank" rel="noreferrer">
                        Ver sitio
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {showcaseSignals.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-[#d7e0e8] bg-[#f5f8fb] px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4f5b66]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.3rem] border border-[#d7e0e8] bg-white p-4 shadow-[0_24px_70px_rgba(70,85,98,0.08)] sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#7a8792]">Vistas reales del proyecto</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#61707c]">
                      Selecciona una captura para ver home, coleccion, producto y experiencia movil.
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-[#d7e0e8] bg-[#f7fafc] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#586571] sm:block">
                    {showcaseViews.length} vistas
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentShowcase.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4"
                  >
                    <div className={`overflow-hidden rounded-[1.8rem] border border-[#d7e0e8] ${currentShowcase.previewFrameClass}`}>
                      <img
                        src={currentShowcase.image}
                        alt={currentShowcase.title}
                        className={currentShowcase.previewImageClass}
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a8792]">Vista seleccionada</p>
                        <h3 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#111418]">{currentShowcase.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#61707c]">{currentShowcase.description}</p>
                      </div>
                      <div className="rounded-[1.2rem] border border-[#d7e0e8] bg-[#f7fafc] px-4 py-3 text-sm font-medium text-[#4f5b66]">
                        Caso real en vivo
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-4">
                  {showcaseViews.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveShowcase(item.id)}
                      className={`min-w-[250px] snap-start overflow-hidden rounded-[1.45rem] border text-left transition-all sm:min-w-0 ${
                        activeShowcase === item.id
                          ? 'border-[#111418] bg-[#111418] shadow-[0_20px_40px_rgba(17,20,24,0.18)]'
                          : 'border-[#d7e0e8] bg-[#f7fafc] hover:border-[#bcc8d1] hover:bg-white'
                      }`}
                    >
                      <div className={`border-b ${activeShowcase === item.id ? 'border-[rgba(255,255,255,0.08)]' : 'border-[#dfe7ee]'} ${item.thumbFrameClass}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={item.thumbImageClass}
                          loading="lazy"
                        />
                      </div>
                      <div className="px-4 py-3">
                        <p
                          className={`text-[10px] font-black uppercase tracking-[0.18em] ${
                            activeShowcase === item.id ? 'text-[#c7ff63]' : 'text-[#7a8792]'
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`mt-2 text-sm font-semibold leading-snug ${
                            activeShowcase === item.id ? 'text-white' : 'text-[#111418]'
                          }`}
                        >
                          {item.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-[#d7e0e8] bg-[#eaf0f4] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div className="overflow-hidden rounded-[2.5rem] border border-[#0f1419] bg-[linear-gradient(160deg,#11181f_0%,#151e25_100%)] p-6 text-white shadow-[0_34px_90px_rgba(10,15,20,0.28)] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c7ff63]">Que resolvemos</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Problemas reales del ecommerce bicicleta
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-[rgba(255,255,255,0.76)] sm:text-base">
                  La pagina no deberia sonar generica porque el negocio tampoco lo es. Aqui hay catalogo tecnico, compatibilidad, preguntas repetidas, stock y decisiones comerciales concretas.
                </p>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="mt-8 grid gap-3"
                >
                  {painPoints.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={sectionReveal}
                      className="flex items-start gap-4 rounded-[1.5rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] px-4 py-4"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[#c7ff63] text-sm font-black text-[#111418]">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.86)]">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="grid gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Que implementamos</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                    Una solucion pensada para vender mejor y operar con mas criterio
                  </h2>
                </div>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid gap-4"
                >
                  {expertisePillars.map((item, index) => (
                    <motion.div key={item.title} variants={sectionReveal}>
                      <Card className="overflow-hidden rounded-[2rem] border-[#d7e0e8] bg-white shadow-[0_24px_70px_rgba(70,85,98,0.07)]">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.badgeClass}`}>
                              <item.icon size={20} />
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a8792]">Pilar {index + 1}</p>
                              <h3 className="mt-2 text-[1.4rem] font-semibold tracking-[-0.04em] text-[#111418]">{item.title}</h3>
                              <p className="mt-3 text-sm leading-relaxed text-[#61707c]">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="rounded-[1.7rem] border border-[#d7e0e8] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(70,85,98,0.06)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f5f8fb]">
                      <GoogleLogo className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a8792]">SEO</p>
                      <h3 className="mt-2 text-[1.1rem] font-semibold tracking-[-0.03em] text-[#111418]">{seoCallout.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#61707c]">{seoCallout.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="proceso-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="border-b border-[#0e1419] bg-[linear-gradient(160deg,#0d1217_0%,#131b22_100%)] py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c7ff63]">Como lo trabajamos</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Un proceso simple para tiendas que ya quieren crecer
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[rgba(255,255,255,0.76)] sm:text-base">
                La implementacion tiene que verse bien, pero tambien tiene que conversar con el negocio, el catalogo y la forma real en que opera el equipo.
              </p>
            </div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              {processSteps.map((item, index) => (
                <motion.div key={item.title} variants={sectionReveal} className="relative">
                  <Card className="h-full rounded-[2rem] border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white shadow-[0_22px_60px_rgba(0,0,0,0.16)] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7ff63] text-sm font-black text-[#111418] shadow-[0_14px_34px_rgba(199,255,99,0.24)]">
                        {index + 1}
                      </div>
                      <h3 className="mt-6 text-[1.45rem] font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-[rgba(255,255,255,0.8)]">{item.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-10px] top-8 hidden h-px w-5 bg-[rgba(255,255,255,0.18)] md:block" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contacto-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#eef2f5] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.8rem] border border-[#d7e0e8] bg-[linear-gradient(135deg,#ffffff_0%,#f4f8fb_52%,#eaf1f5_100%)] shadow-[0_30px_90px_rgba(70,85,98,0.10)]">
              <div className="grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-12">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111418] text-[#c7ff63] shadow-[0_18px_40px_rgba(17,20,24,0.16)]">
                    <PiBicycleBold size={22} />
                  </div>
                  <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Cierre de la propuesta</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                    Si tu negocio es bicicleta, aqui tienes una propuesta mucho mas especializada
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#61707c] sm:text-base">
                    Shopify, automatizacion, catalogo, trafico y conocimiento real del rubro para construir una tienda online que no se vea generica y que si converse con la operacion del negocio.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg" className="w-full rounded-2xl bg-[#111418] text-white shadow-[0_20px_50px_rgba(17,20,24,0.18)] hover:bg-[#1a2026] sm:w-auto">
                      <a href="https://wa.me/" target="_blank" rel="noreferrer">
                        Hablar sobre mi tienda
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full rounded-2xl border-[#ccd6de] bg-white text-[#111418] hover:bg-[#f4f8fb] sm:w-auto">
                      <a href="/">
                        Volver a la home
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {closingPillars.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                      className="rounded-[1.8rem] border border-[#d7e0e8] bg-white px-5 py-5 shadow-[0_20px_50px_rgba(70,85,98,0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.badgeClass}`}>
                          <item.icon size={18} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7a8792]">Capability</p>
                          <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.04em] text-[#111418]">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#61707c]">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#d7e0e8] bg-[#f6f9fb] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-[#61707c] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111418] text-[#c7ff63]">
              <PiBicycleBold size={18} />
            </div>
            <div>
              <p className="font-semibold text-[#111418]">NexAI | Ecommerce bicicleta</p>
              <p className="text-xs text-[#61707c]">Landing especializada para tiendas y talleres del rubro</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/" className="inline-flex items-center gap-2 transition-colors hover:text-[#111418]">
              Volver a la home
              <ExternalLink size={14} />
            </a>
            <a href="/tiendas-bicicletas/layouts" className="transition-colors hover:text-[#111418]">Layouts visuales</a>
            <a href="#contacto-bike" className="transition-colors hover:text-[#111418]">Contacto</a>
            <a href="#credibilidad-bike" className="transition-colors hover:text-[#111418]">Experiencia</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BikeCommerceLanding;
