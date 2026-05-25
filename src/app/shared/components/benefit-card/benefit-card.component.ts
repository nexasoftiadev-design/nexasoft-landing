import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitItem } from '../../models/benefit-item.model';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss'
})
export class BenefitCardComponent {
  @Input({ required: true }) benefit!: BenefitItem;
}
