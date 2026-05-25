import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ContactService } from '../../../../core/services/contact.service';
import { SERVICE_OPTIONS, ServiceOption, ContactForm } from '../../../../shared/models/contact-form.model';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {
  @Input() preselectedService: string = '';

  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  contactForm!: FormGroup;
  serviceOptions = SERVICE_OPTIONS;
  isSubmitting = false;
  isSubmitted = false;
  submitMessage = '';

  sectionTitle = 'Solicita una asesoría';
  sectionSubtitle = 'Cuéntanos sobre tu proyecto y te contactaremos para ayudarte a encontrar la mejor solución';

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      empresa: [''],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''],
      servicioInteres: [this.preselectedService || '', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Getters for form controls
  get nombre() { return this.contactForm.get('nombre'); }
  get empresa() { return this.contactForm.get('empresa'); }
  get correo() { return this.contactForm.get('correo'); }
  get telefono() { return this.contactForm.get('telefono'); }
  get servicioInteres() { return this.contactForm.get('servicioInteres'); }
  get mensaje() { return this.contactForm.get('mensaje'); }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control || !control.errors || !control.touched) return '';

    if (control.errors['required']) {
      return 'Este campo es requerido';
    }
    if (control.errors['email']) {
      return 'Ingresa un correo electrónico válido';
    }
    if (control.errors['minlength']) {
      const minLength = control.errors['minlength'].requiredLength;
      return `Debe tener al menos ${minLength} caracteres`;
    }
    return '';
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to show validation
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    const formData: ContactForm = this.contactForm.value;

    this.contactService.submitContactForm(formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.submitMessage = response.message;
        this.contactForm.reset();
      },
      error: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.';
      }
    });
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.submitMessage = '';
    this.contactForm.reset();
  }

  setServiceInterest(serviceId: string): void {
    // Map package IDs to service options
    const serviceMap: Record<string, ServiceOption> = {
      'starter-digital': 'saas-personalizado',
      'business-saas': 'saas-personalizado',
      'enterprise-ai': 'integracion-ia'
    };
    
    const service = serviceMap[serviceId] || '';
    this.contactForm.patchValue({ servicioInteres: service });
  }
}
