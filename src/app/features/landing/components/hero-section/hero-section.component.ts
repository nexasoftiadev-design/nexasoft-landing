import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from '../../../../shared/components/cta-button/cta-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Output() requestDemo = new EventEmitter<void>();
  @Output() viewServices = new EventEmitter<void>();

  headline = 'Software, IA y automatización para empresas modernas';
  subtitle = 'Creamos soluciones digitales personalizadas para optimizar procesos, centralizar información y mejorar la atención de tus clientes.';

  onRequestDemo(): void {
    this.requestDemo.emit();
  }

  onViewServices(): void {
    this.viewServices.emit();
  }
}
