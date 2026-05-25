import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { AiIntegrationSectionComponent } from './components/ai-integration-section/ai-integration-section.component';
import { SaasSectionComponent } from './components/saas-section/saas-section.component';
import { VirtualAssistantSectionComponent } from './components/virtual-assistant-section/virtual-assistant-section.component';
import { HooksSectionComponent } from './components/hooks-section/hooks-section.component';
import { PackagesSectionComponent } from './components/packages-section/packages-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { WhatsappButtonComponent } from '../../shared/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    BenefitsSectionComponent,
    AiIntegrationSectionComponent,
    SaasSectionComponent,
    VirtualAssistantSectionComponent,
    HooksSectionComponent,
    PackagesSectionComponent,
    ContactSectionComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @ViewChild(ContactSectionComponent) contactSection!: ContactSectionComponent;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onRequestDemo(): void {
    this.scrollToSection('contacto');
  }

  onViewServices(): void {
    this.scrollToSection('servicios');
  }

  onPackageQuote(packageId: string): void {
    // Scroll to contact and preselect service
    this.scrollToSection('contacto');
    // Give time for scroll, then set service
    setTimeout(() => {
      if (this.contactSection) {
        this.contactSection.setServiceInterest(packageId);
      }
    }, 500);
  }
}
