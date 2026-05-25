import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { BenefitCardComponent } from '../../../../shared/components/benefit-card/benefit-card.component';
import { BENEFITS_DATA } from '../../../../shared/data/benefits.data';
import { BenefitItem } from '../../../../shared/models/benefit-item.model';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, BenefitCardComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss'
})
export class BenefitsSectionComponent {
  benefits: BenefitItem[] = BENEFITS_DATA;

  sectionTitle = '¿Por qué elegirnos?';
  sectionSubtitle = 'Descubre los beneficios de trabajar con NexaSoft IA';
}
