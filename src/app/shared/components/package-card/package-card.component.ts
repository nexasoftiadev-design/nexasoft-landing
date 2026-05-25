import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageItem } from '../../models/package-item.model';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'app-package-card',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './package-card.component.html',
  styleUrl: './package-card.component.scss'
})
export class PackageCardComponent {
  @Input({ required: true }) package!: PackageItem;
  @Output() requestQuote = new EventEmitter<string>();

  onRequestQuote(): void {
    this.requestQuote.emit(this.package.id);
  }
}
