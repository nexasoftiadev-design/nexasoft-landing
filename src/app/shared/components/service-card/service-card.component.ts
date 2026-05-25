import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceItem } from '../../models/service-item.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
