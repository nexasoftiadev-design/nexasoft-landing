import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-ai-integration-section',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './ai-integration-section.component.html',
  styleUrl: './ai-integration-section.component.scss'
})
export class AiIntegrationSectionComponent {
  sectionTitle = 'Integramos IA a tus procesos empresariales';
  
  mainDescription = 'Conectamos inteligencia artificial a tus procesos para que tu empresa pueda responder más rápido, automatizar tareas y aprovechar mejor sus datos.';

  capabilities = [
    {
      icon: '🔄',
      title: 'Automatización inteligente',
      description: 'Automatiza tareas repetitivas y libera tiempo para lo que realmente importa.'
    },
    {
      icon: '💬',
      title: 'Respuestas automáticas',
      description: 'Responde preguntas de clientes de forma instantánea y precisa.'
    },
    {
      icon: '📊',
      title: 'Análisis de información',
      description: 'Analiza grandes volúmenes de datos para extraer insights valiosos.'
    },
    {
      icon: '🎯',
      title: 'Mejores decisiones',
      description: 'Toma decisiones informadas basadas en datos y predicciones de IA.'
    }
  ];
}
