import { PackageItem } from '../models/package-item.model';

/**
 * Packages Data
 * 3 paquetes comerciales de NexaSoft IA
 */
export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'starter-digital',
    name: 'Starter Digital',
    description: 'Presencia digital profesional para negocios que quieren empezar a captar clientes en internet.',
    features: [
      'Landing page profesional',
      'Formulario de contacto',
      'Presentación de servicios',
      'Botón de WhatsApp',
      'Diseño responsive'
    ],
    highlighted: false,
    targetAudience: 'Ideal para emprendedores y pequeños negocios',
    ctaText: 'Solicitar cotización'
  },
  {
    id: 'business-saas',
    name: 'Business SaaS',
    description: 'Soluciones SaaS personalizadas para digitalizar procesos internos y mejorar la operación.',
    features: [
      'Módulos de inventario, tickets o citas',
      'Panel administrativo',
      'Gestión de usuarios',
      'Reportes básicos',
      'Arquitectura escalable'
    ],
    highlighted: true,
    targetAudience: 'Ideal para PYMEs en crecimiento',
    ctaText: 'Solicitar cotización'
  },
  {
    id: 'enterprise-ai',
    name: 'Enterprise AI',
    description: 'Automatización avanzada con IA, asistentes virtuales e integraciones para empresas que quieren escalar.',
    features: [
      'Plataforma SaaS avanzada',
      'Asistente virtual con IA',
      'Hooks, APIs e integraciones',
      'Automatizaciones inteligentes',
      'Acompañamiento técnico'
    ],
    highlighted: false,
    targetAudience: 'Ideal para empresas establecidas',
    ctaText: 'Solicitar cotización'
  }
];
