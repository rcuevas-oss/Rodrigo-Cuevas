import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  LayoutGrid,
  Layers3,
  MonitorSmartphone,
  PanelsTopLeft,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { Button } from './ui/button';
import BrandLogo from './BrandLogo';

type LayoutCategory = 'all' | 'hero' | 'collection' | 'product' | 'campaign' | 'trust' | 'service' | 'cta';

type LayoutCard = {
  id: string;
  category: Exclude<LayoutCategory, 'all'>;
  eyebrow: string;
  title: string;
  summary: string;
  bestFor: string;
  preview: string;
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const categoryFilters: Array<{
  id: LayoutCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { id: 'all', label: 'Todo', icon: LayoutGrid },
  { id: 'hero', label: 'Hero', icon: PanelsTopLeft },
  { id: 'collection', label: 'Collection', icon: Layers3 },
  { id: 'product', label: 'Product', icon: ShoppingBag },
  { id: 'campaign', label: 'Campana', icon: Sparkles },
  { id: 'trust', label: 'Confianza', icon: Search },
  { id: 'service', label: 'Taller', icon: Wrench },
  { id: 'cta', label: 'CTA', icon: ArrowRight },
];

const layoutCards: LayoutCard[] = [
  {
    id: 'hero-launch',
    category: 'hero',
    eyebrow: 'Hero Layout 01',
    title: 'Hero principal de la landing bike',
    summary: 'La apertura real de la propuesta: especializacion, CTA claro y lectura inmediata del rubro.',
    bestFor: 'Cuando quieres dejar claro desde el primer scroll que la tienda esta pensada para bike commerce.',
    preview: 'hero-launch',
  },
  {
    id: 'hero-split',
    category: 'hero',
    eyebrow: 'Hero Layout 02',
    title: 'Hero split con argumento comercial y categoria',
    summary: 'Mitad narrativa, mitad producto o categoria para que el cliente entienda y vea rapido.',
    bestFor: 'Tiendas que necesitan equilibrio entre visual y claridad comercial.',
    preview: 'hero-split',
  },
  {
    id: 'hero-mobile',
    category: 'hero',
    eyebrow: 'Hero Layout 03',
    title: 'Hero mobile-first con campana compacta',
    summary: 'Un formato pensado para trafico desde telefono y compra mas directa.',
    bestFor: 'Cuando el trafico principal viene de Instagram, anuncios o WhatsApp.',
    preview: 'hero-mobile',
  },
  {
    id: 'collection-grid',
    category: 'collection',
    eyebrow: 'Collection Layout 01',
    title: 'Grilla limpia con muchos productos visibles',
    summary: 'Coleccion enfocada en surtido, lectura rapida y sensacion de tienda fuerte.',
    bestFor: 'MTB, ruta, e-bike o categorias donde importa mostrar stock y variedad.',
    preview: 'collection-grid',
  },
  {
    id: 'collection-brands',
    category: 'collection',
    eyebrow: 'Collection Layout 02',
    title: 'Coleccion con enfoque en marcas y accesorios',
    summary: 'Una categoria mas contenida y tecnica, util para componentes, repuestos o accesorios.',
    bestFor: 'Repuestos, equipamiento, cascos, zapatillas y partes de menor ticket.',
    preview: 'collection-brands',
  },
  {
    id: 'collection-sidebar',
    category: 'collection',
    eyebrow: 'Collection Layout 03',
    title: 'Coleccion con filtros y ayuda de compra',
    summary: 'Distribucion mas utilitaria para tiendas con categorias complejas y mucha navegacion.',
    bestFor: 'Catalogos grandes, compatibilidad, tallas y atributos tecnicos.',
    preview: 'collection-sidebar',
  },
  {
    id: 'product-classic',
    category: 'product',
    eyebrow: 'Product Layout 01',
    title: 'Ficha clasica bien resuelta con compra a la vista',
    summary: 'Galeria grande, precio, variantes y CTA donde tienen que estar.',
    bestFor: 'Bicicletas completas, modelos premium y productos de decision mas cuidada.',
    preview: 'product-classic',
  },
  {
    id: 'product-tech',
    category: 'product',
    eyebrow: 'Product Layout 02',
    title: 'Ficha tecnica con bloques de especificacion y compatibilidad',
    summary: 'Pensada para transmitir criterio, detalle y orden cuando el cliente necesita mas informacion.',
    bestFor: 'Componentes, suspensiones, ruedas y articulos con compra mas racional.',
    preview: 'product-tech',
  },
  {
    id: 'product-story',
    category: 'product',
    eyebrow: 'Product Layout 03',
    title: 'Ficha con storytelling y argumento de marca',
    summary: 'Combina ecommerce con narrativa para que el producto se sienta mas deseable.',
    bestFor: 'Marcas premium, ediciones especiales y productos con contenido fuerte.',
    preview: 'product-story',
  },
  {
    id: 'campaign-band',
    category: 'campaign',
    eyebrow: 'Campaign Block',
    title: 'Bloque de campana para temporada o lanzamiento',
    summary: 'No todo es producto. A veces conviene vender una historia, un drop o una promesa visual.',
    bestFor: 'Campanas de temporada, navidad, bike season, e-bike y colecciones nuevas.',
    preview: 'campaign-band',
  },
  {
    id: 'trust-brands',
    category: 'trust',
    eyebrow: 'Trust Block',
    title: 'Bloque de marcas, referencias y confianza',
    summary: 'Muy util para reforzar nivel de tienda, relaciones comerciales y credibilidad del rubro.',
    bestFor: 'Tiendas que trabajan marcas fuertes o quieren verse mas serias rapido.',
    preview: 'trust-brands',
  },
  {
    id: 'service-workshop',
    category: 'service',
    eyebrow: 'Service Block',
    title: 'Bloque para taller, agenda o servicio tecnico',
    summary: 'Una capa que muchas tiendas bike necesitan y casi nunca muestran bien en su ecommerce.',
    bestFor: 'Negocios con taller, bike fit, mantenciones y atencion postventa.',
    preview: 'service-workshop',
  },
  {
    id: 'cta-diagnostic',
    category: 'cta',
    eyebrow: 'CTA Block',
    title: 'Cierre premium con llamado a diagnostico',
    summary: 'Para terminar la experiencia con un CTA serio, claro y alineado al valor del proyecto.',
    bestFor: 'Landings de servicios, ecommerce especializados y cierres comerciales.',
    preview: 'cta-diagnostic',
  },
];

const perfectProductModules = [
  'Galeria amplia con imagenes claras',
  'Titulo, precio y variantes sin friccion',
  'Specs tecnicas y compatibilidad',
  'CTA visible y seccion de confianza',
  'Relacionados y cross sell bien integrados',
];

const finalNotes = [
  'Esta biblioteca sirve para elegir estructuras, no solo colores.',
  'Ya podemos mezclar bicicletas, accesorios, banners y piezas de campana para mostrar una propuesta mas real.',
  'La pagina final puede mezclar bloques de distintas ideas segun el tipo de cliente, catalogo y marcas del negocio.',
];

const galleryFooterTags = ['Hero', 'Collection', 'Product', 'CTA', 'Mobile'];

const galleryFooterSections = [
  {
    title: 'Explorar',
    links: [
      { label: 'Biblioteca de layouts', href: '#biblioteca-bike' },
      { label: 'La ficha perfecta', href: '#ficha-bike' },
      { label: 'Vista movil', href: '#movil-bike' },
    ],
  },
  {
    title: 'Conectar esta idea',
    links: [
      { label: 'Ir al cierre de la landing', href: '/tiendas-bicicletas#contacto-bike' },
      { label: 'Volver a la landing principal', href: '/tiendas-bicicletas' },
      { label: 'Volver a la home', href: '/' },
    ],
  },
  {
    title: 'Uso recomendado',
    links: [
      { label: 'Elegir estructura antes que solo colores', href: '#bloques-bike' },
      { label: 'Pensar la conversion desde telefono', href: '#movil-bike' },
      { label: 'Cerrar con CTA y confianza', href: '#cta-bike-layouts' },
    ],
  },
];

const galleryAssets = {
  heroWindTunnel: '/bike-assets/gallery/6o15ynks.png',
  heroWorldTour: '/bike-assets/gallery/xf1p2n5p.png',
  heroRoadBanner: '/bike-assets/gallery/AdT_Gwev(12).png',
  roadRedHero: '/bike-assets/gallery/94926-03_TARMAC-SL8-SW-AXS-REDSKY-SHDWSIL-WHT_HERO-PDP_DARK.webp',
  roadRedPov: '/bike-assets/gallery/94926-03_TARMAC-SL8-SW-AXS-REDSKY-SHDWSIL-WHT_D1-POV_DARK.webp',
  roadRedRear: '/bike-assets/gallery/94926-03_TARMAC-SL8-SW-AXS-REDSKY-SHDWSIL-WHT_RDSQ_DARK.webp',
  roadWhitePov: '/bike-assets/gallery/94926-07_TARMAC-SL8-SW-AXS-METWHTSIL-CMLNREDGLD-BLK_D1-POV_DARK.webp',
  roadWhiteRear: '/bike-assets/gallery/94926-07_TARMAC-SL8-SW-AXS-METWHTSIL-CMLNREDGLD-BLK_FDSQ_DARK.webp',
  epicRed: '/bike-assets/gallery/90326-01_EPIC-8-SW-MRN-REDWD-METWHTSIL_HERO_DARK-PDP.webp',
  levoRed: '/bike-assets/gallery/95224-00_LEVO-SW-CARBON-G4-GCLMET-REDPRL-BLKPRL_HERO-PDP-DARK.webp',
  levoBlue: '/bike-assets/gallery/95224-01_LEVO-SW-CARBON-G4-REDPRL-BLK-METWHTSIL_HERO-PDP-DARK.webp',
  levoGreen: '/bike-assets/gallery/95226-06_LEVO-SW-CARBON-G4-LRLGRNMET-BNTGLDMET-CHRM_HERO_DARK-PDP.webp',
  riprockRed: '/bike-assets/gallery/96523-20_RIPROCK-CSTR-16-FRYRED-WHT_HERO.webp',
  riprockMint: '/bike-assets/gallery/96523-22_RIPROCK-CSTR-16-WHTSGE-DUNEWHT_HERO.webp',
  riprockPurple: '/bike-assets/gallery/96523-23_RIPROCK-CSTR-16-PRPHZ-LGNBLU_HERO.webp',
  shoeStory: '/bike-assets/gallery/AdT_Gwev(7).png',
  shoeFaq: '/bike-assets/gallery/AdT_Gwev(11).png',
  wheels: '/bike-assets/gallery/Pareja ruedas carretera mavic cosmic carbone sls negro aluminio LOGO-728x800.jpg',
  trainer: '/bike-assets/gallery/wahoo-kickr-move-1553302.jpg',
  cassette: '/bike-assets/gallery/xg-1275-cassette-842435.jpg',
  tdfBanner: '/bike-assets/gallery/RBH-TdF-Collection_Tarmac-1.webp',
  remcoClosing: '/bike-assets/gallery/tarmac_sl7_Remco_-Reign_7-edited-scaled.webp',
};

const PreviewShell: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`relative h-full overflow-hidden rounded-[1.7rem] border ${className}`}>{children}</div>
);

const BrowserTop: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <div className={`flex items-center gap-2 border-b px-4 py-3 ${dark ? 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)]' : 'border-[#dfe6ec] bg-[#f6f9fb]'}`}>
    <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-[rgba(255,255,255,0.18)]' : 'bg-[#d3dce4]'}`} />
    <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-[rgba(255,255,255,0.18)]' : 'bg-[#d3dce4]'}`} />
    <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-[rgba(255,255,255,0.18)]' : 'bg-[#d3dce4]'}`} />
  </div>
);

const renderPreview = (preview: string) => {
  switch (preview) {
    case 'hero-launch':
      return (
        <PreviewShell className="border-[#24313a] bg-[#0f151b]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(199,255,99,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(76,211,255,0.12),transparent_20%),linear-gradient(135deg,#091016_0%,#111920_52%,#0a1117_100%)]" />
          <div className="absolute inset-y-0 right-0 w-[44%] border-l border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]" />
          <div className="absolute right-4 top-4 w-[34%] overflow-hidden rounded-[1rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]">
            <img src={galleryAssets.heroWindTunnel} alt="" className="h-[118px] w-full object-cover object-center" />
          </div>
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="inline-flex w-fit rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(12,14,16,0.48)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[rgba(255,255,255,0.84)]">
              Shopify + automatizacion
            </div>
            <div className="max-w-[62%]">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b9ff3b]">Landing especializada</p>
              <h4 className="mt-3 text-[1.55rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
                Ecommerce especializado para tiendas y talleres de bicicletas.
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {['rubro bike', 'shopify', 'catalogo tecnico'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(12,14,16,0.46)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[rgba(255,255,255,0.82)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-4 inline-flex rounded-full bg-[#c7ff63] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#111418]">
                Quiero una tienda
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'hero-split':
      return (
        <PreviewShell className="border-[#dde5eb] bg-[#fcf8f1]">
          <div className="grid h-full sm:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-between p-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#94724e]">Collection hero</p>
                <h4 className="mt-3 text-[1.6rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111418]">
                  Coleccion, oferta y navegacion en un solo bloque.
                </h4>
              </div>
              <div className="inline-flex rounded-full border border-[#d8c8b3] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#6f573c]">
                Explorar bicicletas
              </div>
            </div>
            <div className="overflow-hidden">
              <img src={galleryAssets.heroWorldTour} alt="" className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </PreviewShell>
      );
    case 'hero-mobile':
      return (
        <PreviewShell className="border-[#24323b] bg-[#0d141a]">
          <div className="mx-auto h-full max-w-[220px] rounded-[1.7rem] border border-[rgba(255,255,255,0.08)] bg-[#0c1117] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,#15333f_0%,#091117_100%)] p-3">
              <div className="h-[150px] overflow-hidden rounded-[1.15rem]">
                <img src={galleryAssets.heroRoadBanner} alt="" className="h-full w-full object-cover object-center" />
              </div>
              <div className="mt-3 inline-flex rounded-full bg-[#c7ff63] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-[#111418]">
                Comprar ahora
              </div>
              <div className="mt-3 flex gap-2">
                <div className="h-8 flex-1 rounded-[0.85rem] bg-[rgba(255,255,255,0.08)]" />
                <div className="h-8 w-10 rounded-[0.85rem] bg-[rgba(255,255,255,0.08)]" />
              </div>
            </div>
            <div className="px-2 pb-2 pt-3">
              <div className="h-2 w-16 rounded-full bg-[rgba(255,255,255,0.18)]" />
              <div className="mt-2 h-2 w-12 rounded-full bg-[rgba(255,255,255,0.12)]" />
            </div>
          </div>
        </PreviewShell>
      );
    case 'collection-grid':
      return (
        <PreviewShell className="border-[#dfe6ec] bg-white">
          <BrowserTop />
          <div className="grid h-[260px] grid-cols-2 gap-3 p-4">
            {[
              galleryAssets.roadRedHero,
              galleryAssets.levoBlue,
              galleryAssets.riprockPurple,
              galleryAssets.epicRed,
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-[1.1rem] border border-[#e2e9ef] bg-[#f8fbfd] p-3">
                <img src={src} alt="" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </PreviewShell>
      );
    case 'collection-brands':
      return (
        <PreviewShell className="border-[#dfe6ec] bg-white">
          <BrowserTop />
          <div className="grid h-[260px] grid-cols-[1.15fr_0.85fr] gap-3 p-4">
            <div className="overflow-hidden rounded-[1.15rem] border border-[#e2e9ef] bg-[#0f1419]">
              <img src={galleryAssets.wheels} alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div className="grid gap-3">
              <div className="overflow-hidden rounded-[1.15rem] border border-[#e2e9ef] bg-white p-3">
                <img src={galleryAssets.cassette} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="overflow-hidden rounded-[1.15rem] border border-[#e2e9ef] bg-white p-3">
                <img src={galleryAssets.trainer} alt="" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'collection-sidebar':
      return (
        <PreviewShell className="border-[#dfe6ec] bg-[#f7fafc]">
          <div className="grid h-full grid-cols-[0.72fr_1.28fr]">
            <div className="border-r border-[#dfe6ec] bg-white p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Filtros</p>
              <div className="mt-4 grid gap-3">
                {['Marca', 'Disciplina', 'Talla', 'Precio'].map((item) => (
                  <div key={item} className="rounded-[1rem] border border-[#e2e9ef] bg-[#f8fbfd] px-3 py-3 text-xs font-semibold text-[#31404d]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  galleryAssets.levoGreen,
                  galleryAssets.roadWhitePov,
                  galleryAssets.riprockRed,
                  galleryAssets.levoRed,
                ].map((src, index) => (
                  <div key={index} className="rounded-[1rem] border border-[#e2e9ef] bg-white p-3">
                    <div className="h-20 overflow-hidden rounded-[0.9rem] bg-[linear-gradient(135deg,#ecf2f6_0%,#dce6ec_100%)]">
                      <img src={src} alt="" className="h-full w-full object-contain" />
                    </div>
                    <div className="mt-3 h-2 w-14 rounded-full bg-[#c7d3dc]" />
                    <div className="mt-2 h-2 w-10 rounded-full bg-[#d8e1e7]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'product-classic':
      return (
        <PreviewShell className="border-[#dfe6ec] bg-[#f6f8fb]">
          <div className="grid h-full sm:grid-cols-[1.02fr_0.98fr]">
            <div className="border-r border-[#dfe6ec] bg-white p-4">
              <div className="flex h-28 items-center justify-center overflow-hidden rounded-[1.15rem] bg-[linear-gradient(135deg,#edf3f7_0%,#dfe8ee_100%)]">
                <img src={galleryAssets.roadRedHero} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[galleryAssets.roadRedPov, galleryAssets.roadRedRear, galleryAssets.roadWhitePov].map((src, index) => (
                  <div key={index} className="h-12 overflow-hidden rounded-[0.9rem] bg-[#eef4f8]">
                    <img src={src} alt="" className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f8fbfd] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Producto</p>
              <div className="mt-3 h-3 w-24 rounded-full bg-[#c7d3dc]" />
              <div className="mt-2 h-3 w-16 rounded-full bg-[#d5dee5]" />
              <div className="mt-5 grid gap-2">
                {['Color', 'Talla', 'Agregar al carrito'].map((item, index) => (
                  <div key={item} className={`rounded-[0.95rem] px-3 py-3 text-xs font-semibold ${index === 2 ? 'bg-[#111418] text-white' : 'border border-[#d8e1e8] bg-white text-[#31404d]'}`}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'product-tech':
      return (
        <PreviewShell className="border-[#25313a] bg-[linear-gradient(160deg,#10171d_0%,#162028_100%)]">
          <div className="grid h-full sm:grid-cols-[0.98fr_1.02fr]">
            <div className="border-r border-[rgba(255,255,255,0.08)] p-4">
              <div className="flex h-28 items-center justify-center overflow-hidden rounded-[1.1rem] bg-[linear-gradient(135deg,#dde7ee_0%,#f4f7fa_100%)] p-3">
                <img src={galleryAssets.cassette} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[galleryAssets.wheels, galleryAssets.trainer, galleryAssets.shoeFaq].map((src, index) => (
                  <div key={index} className="h-14 overflow-hidden rounded-[0.9rem] bg-[rgba(255,255,255,0.08)] p-1.5">
                    <img src={src} alt="" className="h-full w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8fd8ff]">Ficha tecnica</p>
              <div className="mt-4 h-3 w-28 rounded-full bg-[rgba(255,255,255,0.18)]" />
              <div className="mt-2 h-3 w-20 rounded-full bg-[rgba(255,255,255,0.12)]" />
              <div className="mt-5 grid gap-2">
                {['Compatibilidad', 'Specs', 'Envio', 'Stock'].map((item) => (
                  <div key={item} className="rounded-[0.95rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-3 py-3 text-xs font-semibold text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'product-story':
      return (
        <PreviewShell className="border-[#e0d7c8] bg-[#faf5ed]">
          <div className="grid h-full sm:grid-cols-[1.06fr_0.94fr]">
            <div className="p-4">
              <div className="h-full overflow-hidden rounded-[1.4rem] bg-[linear-gradient(160deg,#dcc5a7_0%,#b79671_50%,#8a6747_100%)]">
                <img src={galleryAssets.shoeStory} alt="" className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#97744c]">Story block</p>
              <h4 className="mt-3 text-[1.45rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#111418]">
                Ficha con mas relato de producto y valor percibido.
              </h4>
              <div className="mt-5 grid gap-2">
                <div className="h-12 rounded-[0.95rem] bg-white/80" />
                <div className="h-20 rounded-[1rem] bg-white/70" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 rounded-[0.9rem] bg-white/75" />
                  <div className="h-10 rounded-[0.9rem] bg-white/75" />
                </div>
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'campaign-band':
      return (
        <PreviewShell className="border-[#25313a] bg-[linear-gradient(160deg,#0e1419_0%,#173240_100%)]">
          <img src={galleryAssets.heroRoadBanner} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,14,0.82)_0%,rgba(8,11,14,0.58)_46%,rgba(8,11,14,0.35)_100%)]" />
          <div className="relative flex h-full flex-col justify-between p-5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#d4f786]">Campaign block</p>
              <h4 className="mt-3 max-w-[70%] text-[1.55rem] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                Una publicacion visual para temporada, promo o lanzamiento.
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Nueva temporada', 'E-bike', 'Coleccion trail'].map((item) => (
                <span key={item} className="rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[rgba(255,255,255,0.82)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </PreviewShell>
      );
    case 'trust-brands':
      return (
        <PreviewShell className="border-[#dfe6ec] bg-white">
          <div className="p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Trust section</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] border border-[#e1e8ee] bg-[#f8fbfd] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">Dealer</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[#111418]">Buono Bike</p>
                <p className="mt-2 text-sm leading-relaxed text-[#61707c]">Distribuidor oficial de Specialized.</p>
              </div>
              <div className="rounded-[1.2rem] border border-[#e1e8ee] bg-[#f8fbfd] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">Referencia</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.04em] text-[#111418]">Maino Curico</p>
                <p className="mt-2 text-sm leading-relaxed text-[#61707c]">Tienda grande y surtida del rubro bicicleta.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['SPECIALIZED', 'SRAM', 'FOX', 'SHIMANO'].map((item) => (
                <span key={item} className="rounded-full border border-[#e1e8ee] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#586571]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </PreviewShell>
      );
    case 'service-workshop':
      return (
        <PreviewShell className="border-[#233039] bg-[linear-gradient(160deg,#0f151b_0%,#182129_100%)]">
          <div className="grid h-full sm:grid-cols-[0.88fr_1.12fr]">
            <div className="border-r border-[rgba(255,255,255,0.08)] p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c7ff63]">Taller</p>
              <h4 className="mt-3 text-[1.5rem] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                Agenda, bike fit y servicio tecnico.
              </h4>
              <div className="mt-5 grid gap-2">
                {['Reserva', 'WhatsApp', 'Entrega'].map((item) => (
                  <div key={item} className="rounded-[0.95rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] px-3 py-3 text-xs font-semibold text-[rgba(255,255,255,0.82)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <div className="rounded-[1.2rem] bg-[#d8edf8] p-4 text-[#111418]">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#4b6979]">Complementos</p>
                <div className="mt-4 overflow-hidden rounded-[1rem] bg-white/80 p-3">
                  <img src={galleryAssets.trainer} alt="" className="h-24 w-full object-contain" />
                </div>
              </div>
              <div className="mt-3 rounded-[1.2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-4">
                <div className="h-2 w-20 rounded-full bg-[rgba(255,255,255,0.18)]" />
                <div className="mt-3 h-2 w-12 rounded-full bg-[rgba(255,255,255,0.12)]" />
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    case 'cta-diagnostic':
      return (
        <PreviewShell className="border-[#26323c] bg-[#0e1419]">
          <img src={galleryAssets.remcoClosing} alt="" className="absolute inset-0 h-full w-full object-cover object-[34%_center] sm:object-[32%_center]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,12,0.34)_0%,rgba(8,10,12,0.44)_28%,rgba(8,10,12,0.78)_58%,rgba(8,10,12,0.94)_100%)] sm:bg-[linear-gradient(90deg,rgba(8,10,12,0.26)_0%,rgba(8,10,12,0.34)_22%,rgba(8,10,12,0.72)_52%,rgba(8,10,12,0.92)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(8,10,12,0)_0%,rgba(8,10,12,0.74)_100%)] sm:hidden" />
          <div className="relative flex h-full flex-col justify-between p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(8,10,12,0.36)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#c7ff63]">
                Closing CTA
              </p>
              <div className="rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(8,10,12,0.36)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[rgba(255,255,255,0.78)]">
                CTA
              </div>
            </div>
            <div className="ml-auto mt-auto max-w-[72%] sm:max-w-[56%]">
              <h4 className="text-[1.3rem] font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-[1.55rem]">
                Cierra con una propuesta clara y un siguiente paso serio.
              </h4>
              <p className="mt-3 max-w-[92%] text-[11px] leading-relaxed text-[rgba(255,255,255,0.72)] sm:text-xs">
                Un cierre con contexto visual, aspiracion de marca y un siguiente paso facil de tomar.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <div className="inline-flex rounded-full bg-[#c7ff63] px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#111418] shadow-[0_16px_36px_rgba(199,255,99,0.2)]">
                  Agendar diagnostico
                </div>
                <div className="inline-flex rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white">
                  Ver propuesta
                </div>
              </div>
            </div>
          </div>
        </PreviewShell>
      );
    default:
      return null;
  }
};

interface BikeThemesGalleryProps {
  theme: 'default' | 'emma';
  onToggleTheme: () => void;
}

const BikeThemesGallery: React.FC<BikeThemesGalleryProps> = ({ theme, onToggleTheme }) => {
  const [activeCategory, setActiveCategory] = useState<LayoutCategory>('all');

  const visibleCards =
    activeCategory === 'all'
      ? layoutCards
      : layoutCards.filter(card => card.category === activeCategory);

  return (
    <div className="bike-route-root bike-route-gallery min-h-screen w-full overflow-x-hidden bg-[#edf2f6] text-[#111418]">
      <header className="bike-theme-header sticky top-0 z-50 border-b border-[#d9e2e8]/80 bg-[rgba(248,251,253,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[74px] lg:px-8">
          <a href="/tiendas-bicicletas" className="group inline-flex items-center gap-3">
            <BrandLogo
              subtitle="Heroes, collections, product y bloques"
              subtitleClassName="bike-theme-subtitle hidden text-[11px] text-[#687480] sm:block"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={onToggleTheme}
              aria-label={theme === 'default' ? 'Activar modo Emma' : 'Volver al modo original'}
              className="bike-theme-toggle rounded-2xl border border-[#d1dbe3] bg-white px-3 text-[#111418] shadow-[0_12px_30px_rgba(70,85,98,0.06)] hover:bg-[#f5f8fb] sm:px-4"
            >
              <Palette size={16} className={theme === 'emma' ? 'text-[#c7ff63]' : ''} />
              <span className="hidden text-xs font-semibold sm:inline">{theme === 'default' ? 'Modo Emma' : 'Modo Original'}</span>
            </Button>
            <Button asChild variant="outline" className="bike-theme-outline-button rounded-2xl border-[#d1dbe3] bg-white px-3 text-[#111418] hover:bg-[#f5f8fb] sm:px-4">
              <a href="/tiendas-bicicletas">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Volver a la landing</span>
                <span className="sm:hidden">Volver</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section
          id="biblioteca-bike"
          className="bike-theme-section-muted relative overflow-hidden border-b border-[#d8e1e8] bg-[linear-gradient(180deg,#f8fbfd_0%,#edf2f6_100%)] pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(199,255,99,0.18),transparent_24%),radial-gradient(circle_at_88%_20%,rgba(124,222,255,0.16),transparent_20%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bike-theme-pill inline-flex items-center gap-2 rounded-full border border-[#d7e0e7] bg-white/90 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#5a6570] shadow-[0_14px_30px_rgba(70,85,98,0.06)] sm:px-4 sm:text-[11px] sm:tracking-[0.18em]">
                  <Sparkles className="h-3.5 w-3.5 text-[#79aa0f]" />
                  Biblioteca de layouts
                </div>

                <h1 className="bike-theme-heading mt-6 max-w-4xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#111418] sm:text-5xl sm:leading-[0.94] sm:tracking-[-0.05em] lg:text-[5rem]">
                  Heroes, collections, product layouts y bloques para vender una tienda bike con mas nivel.
                </h1>

                <p className="bike-theme-text mt-6 max-w-2xl text-[0.98rem] leading-[1.8] text-[#61707c] sm:text-lg sm:leading-relaxed">
                  Esta pagina ya no esta pensada como “tema visual”. Ahora funciona como biblioteca de piezas reales: layouts de coleccion, fichas, campanas, bloques de confianza y cierre comercial.
                </p>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
                  <Button asChild size="lg" className="bike-theme-primary-button h-auto min-h-14 w-full whitespace-normal rounded-2xl bg-[#111418] px-5 py-4 text-center leading-snug text-white shadow-[0_20px_50px_rgba(17,20,24,0.14)] hover:bg-[#1a2026] sm:h-12 sm:min-h-0 sm:w-auto sm:px-8 sm:py-0 sm:whitespace-nowrap">
                    <a href="/tiendas-bicicletas#contacto-bike">
                      <span className="sm:hidden">Elegir bloques para mi tienda</span>
                      <span className="hidden sm:inline">Elegir bloques para mi tienda</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bike-theme-outline-button h-auto min-h-14 w-full whitespace-normal rounded-2xl border-[#d1dbe3] bg-white px-5 py-4 text-center leading-snug text-[#111418] hover:bg-[#f5f8fb] sm:h-12 sm:min-h-0 sm:w-auto sm:px-8 sm:py-0 sm:whitespace-nowrap">
                    <a href="/tiendas-bicicletas">
                      <span className="sm:hidden">Ver landing bike</span>
                      <span className="hidden sm:inline">Ver landing principal</span>
                    </a>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {['Product layouts', 'Collection layouts', 'La ficha perfecta', 'Bloques de confianza', 'Taller y servicio'].map((item) => (
                    <div
                      key={item}
                      className="bike-theme-pill rounded-full border border-[#d9e2e8] bg-white/90 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#586571] sm:px-3.5 sm:text-[11px] sm:tracking-[0.14em]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {layoutCards.slice(0, 4).map((card, index) => (
                  <div
                    key={card.id}
                    className={`bike-theme-surface overflow-hidden rounded-[2rem] border border-[#d8e1e8] bg-white p-4 shadow-[0_20px_55px_rgba(70,85,98,0.06)] ${index % 2 === 0 ? 'sm:translate-y-4' : ''}`}
                  >
                    <div className="h-[190px] overflow-hidden rounded-[1.35rem] border border-[#e1e8ee] bg-[#f6f9fb]">
                      {renderPreview(card.preview)}
                    </div>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">{card.eyebrow}</p>
                    <p className="bike-theme-heading mt-2 text-[1.15rem] font-semibold tracking-[-0.04em] text-[#111418]">{card.title}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <motion.section
          id="ficha-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bike-theme-section-light border-b border-[#d8e1e8] bg-[#f7fafc] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:gap-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">La ficha perfecta</p>
                <h2 className="bike-theme-heading mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                  Una estructura ideal para vender mejor productos con decision tecnica
                </h2>
                <p className="bike-theme-text mt-5 text-sm leading-relaxed text-[#61707c] sm:text-base">
                  Aqui la idea no es solo que la pagina se vea linda. La idea es que el cliente entienda, confie y compre. Por eso esta ficha mezcla imagenes, compra clara, datos tecnicos y confianza comercial.
                </p>

                <div className="mt-6 grid gap-3">
                  {perfectProductModules.map((item) => (
                    <div
                      key={item}
                      className="bike-theme-surface flex items-start gap-4 rounded-[1.5rem] border border-[#d8e1e8] bg-white px-4 py-4 shadow-[0_14px_36px_rgba(70,85,98,0.05)]"
                    >
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-[#111418] text-white">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="bike-theme-text text-sm leading-relaxed text-[#31404d]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bike-theme-surface overflow-hidden rounded-[2.4rem] border border-[#d8e1e8] bg-white p-4 shadow-[0_28px_80px_rgba(70,85,98,0.08)] sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="overflow-hidden rounded-[1.8rem] border border-[#dfe6ec] bg-[#f6f8fb]">
                    <div className="grid h-full gap-3 p-4">
                      <div className="overflow-hidden rounded-[1.5rem] bg-white p-4">
                        <img src={galleryAssets.roadRedHero} alt="Ficha de producto de referencia" className="h-full w-full object-contain" />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {[galleryAssets.roadRedPov, galleryAssets.roadRedRear, galleryAssets.roadWhiteRear].map((src, index) => (
                          <div key={index} className="overflow-hidden rounded-[1rem] border border-[#e1e8ee] bg-white p-2">
                            <img src={src} alt="" className="h-16 w-full object-contain" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.6rem] border border-[#dfe6ec] bg-[#f7fafc] p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Sticky buy area</p>
                      <h3 className="bike-theme-heading mt-3 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#111418]">
                        Precio, variantes, stock y CTA en una zona muy clara.
                      </h3>
                      <div className="mt-4 grid gap-2">
                        {['Color', 'Talla', 'Agregar al carrito'].map((item, index) => (
                          <div
                            key={item}
                            className={`rounded-[1rem] px-3 py-3 text-sm font-semibold ${
                              index === 2 ? 'bg-[#111418] text-white' : 'border border-[#d9e2e8] bg-white text-[#31404d]'
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="bike-theme-surface-alt rounded-[1.4rem] border border-[#dfe6ec] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">Specs</p>
                        <div className="mt-4 grid gap-2">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="h-8 rounded-[0.8rem] bg-[#f3f7fa]" />
                          ))}
                        </div>
                      </div>
                        <div className="bike-theme-surface-alt rounded-[1.4rem] border border-[#dfe6ec] bg-white p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#79aa0f]">Confianza</p>
                        <div className="mt-4 grid gap-2">
                          {['Envio', 'Garantia', 'WhatsApp', 'Pago'].map((item) => (
                            <div key={item} className="rounded-[0.8rem] bg-[#f3f7fa] px-3 py-2 text-xs font-semibold text-[#31404d]">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.4rem] border border-[#dfe6ec] bg-[#f7fafc] p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Relacionados</p>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {[galleryAssets.levoBlue, galleryAssets.epicRed, galleryAssets.riprockMint].map((src, index) => (
                          <div key={index} className="rounded-[1rem] border border-[#e1e8ee] bg-white p-3">
                            <div className="flex h-14 items-center justify-center rounded-[0.9rem] bg-[#eef4f8]">
                              <img src={src} alt="" className="h-full w-full object-contain" />
                            </div>
                            <div className="mt-3 h-2 w-10 rounded-full bg-[#d0dae2]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section id="bloques-bike" className="bike-theme-section-muted py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Layouts y bloques</p>
                  <h2 className="bike-theme-heading mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                  Un showroom mas util para un cliente que decide por estructura y sensacion visual
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {categoryFilters.map((filter) => {
                  const Icon = filter.icon;
                  const isActive = activeCategory === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveCategory(filter.id)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] transition-colors ${
                        isActive
                          ? 'bg-[#111418] text-white shadow-[0_14px_34px_rgba(17,20,24,0.12)]'
                          : 'bike-theme-card-unselected border border-[#d8e1e8] bg-white text-[#586571] hover:bg-[#f5f8fb]'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {visibleCards.map((card) => (
                <motion.article
                  key={card.id}
                  variants={sectionReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="bike-theme-surface overflow-hidden rounded-[2.2rem] border border-[#d8e1e8] bg-white shadow-[0_22px_60px_rgba(70,85,98,0.06)]"
                >
                  <div className="border-b border-[#e1e8ee] bg-[#f8fbfd] p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#79aa0f]">{card.eyebrow}</p>
                      <div className="bike-theme-pill rounded-full border border-[#dde5eb] bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#61707c]">
                        {card.category}
                      </div>
                    </div>
                    <div className="mt-4 h-[250px] overflow-hidden rounded-[1.6rem]">
                      {renderPreview(card.preview)}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="bike-theme-heading text-[1.45rem] font-semibold tracking-[-0.04em] text-[#111418]">{card.title}</h3>
                    <p className="bike-theme-text mt-3 text-sm leading-relaxed text-[#61707c] sm:text-base">{card.summary}</p>
                    <div className="bike-theme-surface-alt mt-5 rounded-[1.3rem] border border-[#d8e1e8] bg-[#f8fbfd] px-4 py-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#7a8792]">Ideal para</p>
                      <p className="bike-theme-text mt-2 text-sm leading-relaxed text-[#31404d]">{card.bestFor}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          id="movil-bike"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bike-theme-section-light border-y border-[#d8e1e8] bg-[#f7fafc] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79aa0f]">Vista movil</p>
                <h2 className="bike-theme-heading mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111418] sm:text-4xl">
                  Cada layout tambien deberia poder venderse bien desde telefono
                </h2>
                <p className="bike-theme-text mt-5 text-sm leading-relaxed text-[#61707c] sm:text-base">
                  Esto importa mucho en bike commerce porque gran parte de la primera visita llega desde anuncios, Instagram, WhatsApp o una referencia directa. Por eso la biblioteca ya considera lectura mobile.
                </p>
                <div className="bike-theme-pill mt-6 inline-flex items-center gap-2 rounded-full border border-[#d8e1e8] bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#586571]">
                  <MonitorSmartphone className="h-4 w-4 text-[#79aa0f]" />
                  pensado para revision en telefono
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: 'Hero mobile',
                    frame: 'bg-[#10161b]',
                    inner: 'bg-[#0f151a]',
                    body: 'bg-[linear-gradient(180deg,#16242d_0%,#0d1419_100%)]',
                    image: galleryAssets.heroRoadBanner,
                    imageClass: 'object-cover object-center',
                    lineA: 'bg-[rgba(255,255,255,0.45)]',
                    lineB: 'bg-[rgba(255,255,255,0.18)]',
                  },
                  {
                    label: 'Product mobile',
                    frame: 'bg-[#11161b]',
                    inner: 'bg-white',
                    body: 'bg-[#f6f8fb]',
                    image: galleryAssets.roadRedHero,
                    imageClass: 'object-contain',
                    lineA: 'bg-[#202830]',
                    lineB: 'bg-[#c9d4dd]',
                  },
                  {
                    label: 'CTA mobile',
                    frame: 'bg-[#10161b]',
                    inner: 'bg-[#0f151a]',
                    body: 'bg-[linear-gradient(180deg,#11181f_0%,#0a0f14_100%)]',
                    image: galleryAssets.remcoClosing,
                    imageClass: 'object-cover object-[34%_center]',
                    lineA: 'bg-[#c7ff63]',
                    lineB: 'bg-[rgba(255,255,255,0.18)]',
                  },
                ].map((item) => (
                  <div key={item.label} className="bike-theme-surface rounded-[1.8rem] border border-[#d8e1e8] bg-white p-4 shadow-[0_16px_45px_rgba(70,85,98,0.06)]">
                    <div className={`mx-auto w-[8.7rem] rounded-[1.9rem] border border-[#d9e2e8] p-2 shadow-[0_16px_30px_rgba(17,20,24,0.12)] ${item.frame}`}>
                      <div className={`rounded-[1.35rem] p-2 ${item.inner}`}>
                        <div className={`overflow-hidden rounded-[1.1rem] p-3 ${item.body}`}>
                          <div className="h-20 overflow-hidden rounded-[0.95rem]">
                            <img src={item.image} alt="" className={`h-full w-full ${item.imageClass}`} />
                          </div>
                          <div className="mt-3 flex gap-2">
                            <div className={`h-2 w-10 rounded-full ${item.lineA}`} />
                            <div className={`h-2 w-6 rounded-full ${item.lineB}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="bike-theme-heading mt-4 text-sm font-semibold tracking-[-0.03em] text-[#111418]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <section id="cta-bike-layouts" className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2.8rem] border border-[#d8e1e8] bg-[linear-gradient(135deg,#111418_0%,#1a2229_55%,#11181f_100%)] px-6 py-8 text-white shadow-[0_32px_90px_rgba(17,20,24,0.18)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c7ff63]">Siguiente paso</p>
                  <h2 className="mt-4 text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-4xl sm:leading-none sm:tracking-[-0.05em]">
                    Esta biblioteca ya se puede sentir mas real, variada y especifica para una tienda del rubro
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-[rgba(255,255,255,0.76)] sm:text-base">
                    Ya no parte solo desde bloques abstractos. Ahora mezcla bicicletas, accesorios, banners y piezas reales para mostrar mas criterio visual, mas variedad de marcas y una propuesta mas creible frente al cliente.
                  </p>
                  <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
                    <Button asChild size="lg" className="h-auto min-h-14 w-full whitespace-normal rounded-2xl bg-[#c7ff63] px-5 py-4 text-center leading-snug text-[#111418] shadow-[0_20px_50px_rgba(199,255,99,0.20)] hover:bg-[#d8ff91] sm:h-12 sm:min-h-0 sm:w-auto sm:px-8 sm:py-0 sm:whitespace-nowrap">
                      <a href="/tiendas-bicicletas#contacto-bike">
                        Quiero convertir esto en una propuesta real
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-auto min-h-14 w-full whitespace-normal rounded-2xl border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] px-5 py-4 text-center leading-snug text-white hover:bg-[rgba(255,255,255,0.08)] hover:text-white sm:h-12 sm:min-h-0 sm:w-auto sm:px-8 sm:py-0 sm:whitespace-nowrap">
                      <a href="/tiendas-bicicletas">
                        Volver a la landing
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {finalNotes.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-[1.7rem] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.05)] px-5 py-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c7ff63] text-[#111418]">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bike-theme-footer border-t border-[#1b2430] bg-[#0f1622] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-2xl">
              <BrandLogo
                tone="light"
                subtitle="Biblioteca bike commerce · Layouts · Mobile"
                subtitleClassName="bike-theme-subtitle text-[11px] text-[rgba(255,255,255,0.62)]"
              />
              <p className="mt-5 text-[15px] leading-relaxed text-[rgba(255,255,255,0.68)] sm:text-base">
                Este showroom sirve para aterrizar estructura, jerarquia visual y recorrido comercial antes de pasar a una propuesta final para una tienda del rubro.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 lg:justify-end">
              {galleryFooterTags.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 sm:text-[11px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c7ff63]">Lectura final</p>
                <p className="mt-3 text-sm leading-relaxed text-[rgba(255,255,255,0.76)]">
                  La pagina ya no termina de golpe. Ahora cierra con un footer real, mas scroll util y una sensacion mas completa tanto en desktop como en telefono.
                </p>
              </div>
            </div>

            {galleryFooterSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-semibold text-white">{section.title}</h4>
                <ul className="space-y-3 text-sm text-[rgba(255,255,255,0.68)]">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="bike-theme-footer-link transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[rgba(255,255,255,0.52)] md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} La Refactoria. Biblioteca visual para ecommerce especializados del rubro bicicleta.</p>
            <p>Mas recorrido, sin corte brusco al final y con enlaces utiles para seguir navegando.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BikeThemesGallery;
