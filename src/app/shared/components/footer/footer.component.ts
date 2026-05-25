import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  brandName = 'NexaSoft IA';
  brandDescription = 'Transformamos empresas con software personalizado, inteligencia artificial y automatización de procesos. Soluciones digitales que impulsan tu crecimiento.';

  services = [
    'Integración con IA',
    'SaaS Personalizado',
    'Gestión de Inventarios',
    'Gestión de Tickets',
    'Gestión de Citas',
    'Asistentes Virtuales',
    'APIs e Integraciones'
  ];

  contactInfo = {
    email: 'contacto@nexasoft.ai',
    phone: '+57 300 123 4567',
    address: 'Bogotá, Colombia'
  };

  socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'GitHub', url: '#', icon: '💻' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
