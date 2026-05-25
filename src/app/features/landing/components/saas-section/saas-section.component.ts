import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-saas-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './saas-section.component.html',
  styleUrl: './saas-section.component.scss'
})
export class SaasSectionComponent {
  sectionTitle = 'SaaS personalizado para operar desde la nube';
  sectionSubtitle = 'Desarrollamos plataformas de software como servicio adaptadas a las necesidades específicas de tu empresa';

  modules = [
    { icon: '📦', name: 'Inventario', description: 'Control de stock en tiempo real' },
    { icon: '🎫', name: 'Tickets', description: 'Gestión de soporte y solicitudes' },
    { icon: '📅', name: 'Citas', description: 'Agenda y reservas automatizadas' },
    { icon: '👥', name: 'Clientes', description: 'CRM y gestión de relaciones' },
    { icon: '🔐', name: 'Usuarios y roles', description: 'Control de acceso y permisos' },
    { icon: '📊', name: 'Reportes', description: 'Análisis y métricas en tiempo real' },
    { icon: '⚙️', name: 'Panel administrativo', description: 'Configuración centralizada' }
  ];

  features = [
    'Acceso desde cualquier dispositivo',
    'Actualizaciones automáticas',
    'Escalabilidad según demanda',
    'Seguridad de nivel empresarial',
    'Integración con sistemas existentes',
    'Soporte técnico incluido'
  ];
}
