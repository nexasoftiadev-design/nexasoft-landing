import { ServiceItem } from '../models/service-item.model';

/**
 * Services Data
 * 7 servicios ofrecidos por NexaSoft IA
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'integracion-ia',
    title: 'Integración con IA',
    description: 'Potencia tu negocio con inteligencia artificial. Automatiza análisis, predicciones y toma de decisiones basadas en datos.',
    icon: '🤖',
    benefits: [
      'Análisis predictivo avanzado',
      'Automatización de decisiones',
      'Procesamiento de lenguaje natural'
    ]
  },
  {
    id: 'saas-personalizado',
    title: 'SaaS personalizado',
    description: 'Desarrollamos soluciones de software como servicio adaptadas a las necesidades específicas de tu empresa.',
    icon: '☁️',
    benefits: [
      'Escalabilidad automática',
      'Actualizaciones continuas',
      'Acceso desde cualquier lugar'
    ]
  },
  {
    id: 'sistema-inventario',
    title: 'Sistema de inventario',
    description: 'Control total de tu inventario con seguimiento en tiempo real, alertas automáticas y reportes detallados.',
    icon: '📦',
    benefits: [
      'Seguimiento en tiempo real',
      'Alertas de stock bajo',
      'Reportes automatizados'
    ]
  },
  {
    id: 'gestion-tickets',
    title: 'Gestión de tickets',
    description: 'Sistema de soporte y atención al cliente con asignación automática, seguimiento y métricas de rendimiento.',
    icon: '🎫',
    benefits: [
      'Asignación automática',
      'Priorización inteligente',
      'Métricas de SLA'
    ]
  },
  {
    id: 'gestion-citas',
    title: 'Gestión de citas',
    description: 'Agenda inteligente para programación de citas, recordatorios automáticos y sincronización de calendarios.',
    icon: '📅',
    benefits: [
      'Reservas en línea 24/7',
      'Recordatorios automáticos',
      'Sincronización de calendarios'
    ]
  },
  {
    id: 'asistente-virtual',
    title: 'Asistente virtual',
    description: 'Chatbots inteligentes que atienden a tus clientes las 24 horas, responden preguntas y gestionan solicitudes.',
    icon: '💬',
    benefits: [
      'Atención 24/7',
      'Respuestas instantáneas',
      'Escalamiento a humanos'
    ]
  },
  {
    id: 'hooks-integraciones',
    title: 'Hooks e integraciones',
    description: 'Conecta tus sistemas existentes con APIs, webhooks y automatizaciones para un flujo de trabajo unificado.',
    icon: '🔗',
    benefits: [
      'APIs RESTful',
      'Webhooks en tiempo real',
      'Integraciones personalizadas'
    ]
  }
];
