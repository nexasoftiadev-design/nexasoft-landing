import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-virtual-assistant-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './virtual-assistant-section.component.html',
  styleUrl: './virtual-assistant-section.component.scss'
})
export class VirtualAssistantSectionComponent {
  sectionTitle = 'Asistentes virtuales para atender y automatizar';
  sectionSubtitle = 'Creamos asistentes y chatbots para sitios web, sistemas internos y atención al cliente';

  useCases = [
    {
      icon: '🎧',
      title: 'Atención al cliente',
      description: 'Responde consultas y resuelve problemas las 24 horas del día, los 7 días de la semana.',
      highlight: true
    },
    {
      icon: '❓',
      title: 'Preguntas frecuentes',
      description: 'Automatiza respuestas a las consultas más comunes de tus clientes.',
      highlight: false
    },
    {
      icon: '🛠️',
      title: 'Soporte interno',
      description: 'Ayuda a tu equipo a encontrar información y resolver dudas rápidamente.',
      highlight: false
    },
    {
      icon: '🎯',
      title: 'Captura de clientes potenciales',
      description: 'Califica y recopila información de prospectos de forma automática.',
      highlight: true
    },
    {
      icon: '🧭',
      title: 'Guía de usuarios',
      description: 'Orienta a los visitantes a encontrar lo que buscan en tu sitio o aplicación.',
      highlight: false
    }
  ];

  stats = [
    { value: '24/7', label: 'Disponibilidad' },
    { value: '<1s', label: 'Tiempo de respuesta' },
    { value: '80%', label: 'Consultas automatizadas' }
  ];
}
