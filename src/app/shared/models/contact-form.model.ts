/**
 * ContactForm Model
 * Represents the lead capture form data structure.
 */
export interface ContactForm {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicioInteres: ServiceOption;
  mensaje: string;
}

export type ServiceOption =
  | 'integracion-ia'
  | 'saas-personalizado'
  | 'sistema-inventario'
  | 'gestion-tickets'
  | 'gestion-citas'
  | 'asistente-virtual'
  | 'hooks-integraciones'
  | 'otro'
  | '';

export interface ServiceOptionItem {
  value: ServiceOption;
  label: string;
}

export const SERVICE_OPTIONS: ServiceOptionItem[] = [
  { value: 'integracion-ia', label: 'Integración con IA' },
  { value: 'saas-personalizado', label: 'SaaS personalizado' },
  { value: 'sistema-inventario', label: 'Sistema de inventario' },
  { value: 'gestion-tickets', label: 'Gestión de tickets' },
  { value: 'gestion-citas', label: 'Gestión de citas' },
  { value: 'asistente-virtual', label: 'Asistente virtual' },
  { value: 'hooks-integraciones', label: 'Hooks e integraciones' },
  { value: 'otro', label: 'Otro' }
];
