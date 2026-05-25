import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  @Input() phoneNumber: string = '+573000000000';
  @Input() message: string = '¡Hola! Me interesa conocer más sobre los servicios de NexaSoft IA.';

  get whatsappUrl(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
  }
}
