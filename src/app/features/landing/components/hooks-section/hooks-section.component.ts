import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-hooks-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './hooks-section.component.html',
  styleUrl: './hooks-section.component.scss'
})
export class HooksSectionComponent {
  sectionTitle = 'Hooks, APIs e integraciones para conectar tu operación';
  sectionSubtitle = 'Conecta tus sistemas y reduce el trabajo manual con automatizaciones inteligentes';

  integrations = [
    { icon: '💬', name: 'WhatsApp', category: 'Comunicación' },
    { icon: '📧', name: 'Correo', category: 'Comunicación' },
    { icon: '📋', name: 'CRM', category: 'Gestión' },
    { icon: '🔔', name: 'Notificaciones', category: 'Alertas' },
    { icon: '🔄', name: 'Sincronización de datos', category: 'Datos' },
    { icon: '⚡', name: 'Automatización de procesos', category: 'Automatización' }
  ];

  benefits = [
    {
      title: 'APIs RESTful',
      description: 'Interfaces estándar para conectar cualquier sistema',
      icon: '🔌'
    },
    {
      title: 'Webhooks en tiempo real',
      description: 'Notificaciones instantáneas cuando ocurren eventos',
      icon: '📡'
    },
    {
      title: 'Sin intervención manual',
      description: 'Los datos fluyen automáticamente entre sistemas',
      icon: '🤖'
    }
  ];
}
