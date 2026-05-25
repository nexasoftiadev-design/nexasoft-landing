import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactForm } from '../../shared/models/contact-form.model';

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * ContactService
 * Simulates form submission without actual backend
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  /**
   * Simulates sending the contact form
   * @param formData The contact form data
   * @returns Observable with simulated response after delay
   */
  submitContactForm(formData: ContactForm): Observable<ContactResponse> {
    // Log to console for demo purposes
    console.log('📧 Formulario de contacto recibido:', formData);
    
    // Simulate API call with 1.5 second delay
    return of({
      success: true,
      message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.'
    }).pipe(delay(1500));
  }
}
