import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ServiceCardComponent } from '../../../../shared/components/service-card/service-card.component';
import { SERVICES_DATA } from '../../../../shared/data/services.data';
import { ServiceItem } from '../../../../shared/models/service-item.model';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, ServiceCardComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  services: ServiceItem[] = SERVICES_DATA;

  sectionTitle = 'Nuestros servicios';
  sectionSubtitle = 'Soluciones tecnológicas diseñadas para impulsar el crecimiento de tu empresa';
}
