import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

interface NavItem {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CtaButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navItems: NavItem[] = [
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'Servicios', sectionId: 'servicios' },
    { label: 'Soluciones', sectionId: 'soluciones' },
    { label: 'Beneficios', sectionId: 'beneficios' },
    { label: 'Paquetes', sectionId: 'paquetes' },
    { label: 'Contacto', sectionId: 'contacto' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact(): void {
    this.scrollToSection('contacto');
  }
}
