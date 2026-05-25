import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { PackageCardComponent } from '../../../../shared/components/package-card/package-card.component';
import { PACKAGES_DATA } from '../../../../shared/data/packages.data';
import { PackageItem } from '../../../../shared/models/package-item.model';

@Component({
  selector: 'app-packages-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, PackageCardComponent],
  templateUrl: './packages-section.component.html',
  styleUrl: './packages-section.component.scss'
})
export class PackagesSectionComponent {
  @Output() requestQuote = new EventEmitter<string>();

  packages: PackageItem[] = PACKAGES_DATA;
  sectionTitle = 'Paquetes comerciales';
  sectionSubtitle = 'Elige el plan que mejor se adapte a las necesidades de tu negocio';

  onPackageQuote(packageId: string): void {
    this.requestQuote.emit(packageId);
  }
}
