<!--
=============================================================================
SYNC IMPACT REPORT
=============================================================================
Version Change: N/A → 1.0.0 (Initial ratification)

Modified Principles: None (Initial creation)

Added Sections:
  - Core Principles (7 principles)
  - Services Catalog
  - Development Workflow
  - Governance

Removed Sections: None

Templates Status:
  - .specify/templates/plan-template.md: ✅ Compatible (no changes required)
  - .specify/templates/spec-template.md: ✅ Compatible (no changes required)
  - .specify/templates/tasks-template.md: ✅ Compatible (no changes required)

Follow-up TODOs: None
=============================================================================
-->

# SmartFlow AI Constitution

## Core Principles

### I. Angular-First Architecture

El proyecto DEBE utilizar Angular en su versión estable más reciente como framework principal.

**Requisitos obligatorios:**
- DEBE usar standalone components exclusivamente
- DEBE usar Angular Router solo si se requiere navegación entre secciones
- DEBE preferir una experiencia de landing page de una sola página (SPA)
- DEBE crear componentes reutilizables para elementos comunes (botones, cards, títulos, layouts)
- DEBE mantener el código limpio, modular y fácil de extender
- NO DEBE usar módulos NgModule tradicionales

**Justificación:** Angular standalone simplifica la arquitectura, reduce boilerplate y facilita el mantenimiento de una landing page comercial.

### II. Landing Page Comercial

El sitio web DEBE funcionar exclusivamente como una página de presentación comercial orientada a conversión.

**Requisitos obligatorios:**
- DEBE comunicar claramente los servicios ofrecidos en menos de 10 segundos
- DEBE incluir call-to-action (CTA) visibles y estratégicamente ubicados
- DEBE incluir formulario de contacto/demo visible y fácil de usar
- DEBE orientar todo el contenido hacia la generación de leads
- DEBE presentar propuesta de valor clara y diferenciada
- NO DEBE incluir funcionalidad de aplicación (dashboards, módulos, etc.)

**Justificación:** El objetivo es capturar leads y presentar servicios, no ofrecer funcionalidad de software.

### III. Diseño y Experiencia de Usuario

El diseño DEBE transmitir profesionalismo, innovación y confianza.

**Requisitos obligatorios:**
- DEBE ser moderno, elegante y orientado a tecnología
- DEBE ser completamente responsive (desktop, tablet, móvil)
- DEBE mantener layout limpio y visualmente equilibrado
- DEBE usar espaciado consistente, tipografía legible y jerarquía visual clara
- DEBE comunicar confianza, innovación y profesionalismo
- DEBE usar SCSS para estilos con organización modular

**Justificación:** La primera impresión visual determina la credibilidad percibida de los servicios ofrecidos.

### IV. Catálogo de Servicios

El sitio DEBE presentar los siguientes servicios de manera clara y atractiva:

**Servicios requeridos:**
- Integración de IA para procesos empresariales
- Desarrollo de software SaaS personalizado
- Sistemas de gestión de inventarios
- Sistemas de gestión de tickets
- Sistemas de agendamiento de citas
- Asistentes virtuales y chatbots
- Hooks, webhooks, APIs e integraciones de automatización

**Justificación:** Estos servicios representan la oferta comercial de SmartFlow AI.

### V. Restricciones Técnicas (NON-NEGOTIABLE)

El proyecto tiene restricciones estrictas sobre lo que NO DEBE incluir.

**Prohibiciones absolutas:**
- NO DEBE construir funcionalidad de backend
- NO DEBE crear una plataforma SaaS real
- NO DEBE implementar login o registro de usuarios
- NO DEBE crear modelos de base de datos
- NO DEBE crear módulos reales de tickets, inventario o citas
- NO DEBE incluir autenticación o autorización
- El formulario de contacto PUEDE simular envío (frontend only)

**Justificación:** El alcance está limitado exclusivamente a UI frontend, contenido, responsividad y generación de leads.

### VI. Calidad de Código

Todo el código DEBE seguir estándares de calidad consistentes.

**Requisitos obligatorios:**
- DEBE usar nomenclatura clara y descriptiva en inglés para código
- DEBE evitar código duplicado mediante componentes reutilizables
- DEBE organizar estilos de forma modular (SCSS)
- DEBE asegurar funcionamiento óptimo en dispositivos móviles
- DEBE escribir todo el texto visible al usuario en español
- DEBE seguir guías de estilo de Angular

**Justificación:** La calidad del código impacta directamente la mantenibilidad y escalabilidad del proyecto.

### VII. Tono de Marca

Toda comunicación visual y textual DEBE reflejar el tono de marca definido.

**Características obligatorias:**
- Profesional: lenguaje corporativo y serio
- Moderno: estética actual y tecnológica
- Claro: mensajes directos y comprensibles
- Orientado a negocios: enfocado en soluciones empresariales
- Enfocado en automatización: énfasis en software e inteligencia artificial

**Justificación:** La consistencia de marca genera confianza y reconocimiento.

## Services Catalog

El sitio DEBE presentar cada servicio con:
- Título descriptivo
- Descripción breve del valor que aporta
- Icono o representación visual
- CTA hacia formulario de contacto

| Servicio | Descripción Corta |
|----------|-------------------|
| Integración IA | Automatización inteligente de procesos empresariales |
| SaaS Personalizado | Desarrollo de plataformas a medida |
| Gestión de Inventarios | Control y optimización de stock |
| Gestión de Tickets | Seguimiento y resolución de incidencias |
| Agendamiento de Citas | Programación y gestión de reuniones |
| Asistentes Virtuales | Chatbots y atención automatizada |
| APIs y Automatización | Integraciones y webhooks empresariales |

## Development Workflow

### Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── header/
│   │   ├── footer/
│   │   ├── button/
│   │   ├── card/
│   │   └── section-title/
│   ├── sections/            # Secciones de la landing
│   │   ├── hero/
│   │   ├── services/
│   │   ├── about/
│   │   ├── contact/
│   │   └── testimonials/
│   ├── shared/              # Utilidades compartidas
│   └── app.ts
├── assets/
│   ├── images/
│   └── icons/
└── styles/
    ├── _variables.scss
    ├── _mixins.scss
    └── _base.scss
```

### Convenciones de Nomenclatura

- **Componentes**: PascalCase (HeroSection, ServiceCard)
- **Archivos**: kebab-case (hero-section.component.ts)
- **Variables SCSS**: $kebab-case ($primary-color)
- **Clases CSS**: BEM (block__element--modifier)

### Quality Gates

- [ ] Responsive: Funciona en móvil, tablet y desktop
- [ ] Contenido: Todo el texto visible está en español
- [ ] Performance: Lighthouse score > 80
- [ ] Accesibilidad: Cumple WCAG 2.1 básico
- [ ] Componentes: Sin duplicación de código

## Governance

Esta constitución establece los principios fundamentales del proyecto SmartFlow AI Landing Page.

**Reglas de gobernanza:**
- Esta constitución DEBE ser consultada antes de iniciar cualquier feature
- Todas las decisiones técnicas DEBEN alinearse con los principios aquí definidos
- Las violaciones a las restricciones técnicas (Principio V) son inaceptables
- Cualquier cambio a esta constitución requiere documentación explícita del motivo

**Proceso de enmienda:**
1. Documentar el cambio propuesto y su justificación
2. Verificar que no contradice las restricciones fundamentales
3. Actualizar versión según semántica:
   - MAJOR: Cambios incompatibles o redefinición de principios
   - MINOR: Nuevos principios o expansión material
   - PATCH: Clarificaciones o correcciones menores
4. Actualizar fecha de última enmienda

**Version**: 1.0.0 | **Ratified**: 2026-05-23 | **Last Amended**: 2026-05-23
