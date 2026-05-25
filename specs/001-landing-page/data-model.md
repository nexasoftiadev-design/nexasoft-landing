# Data Model: SmartFlow AI Landing Page

**Feature**: 001-landing-page  
**Date**: 2026-05-23  
**Purpose**: Define TypeScript interfaces and data structures for the landing page

## Core Entities

### ServiceItem

Represents a service offered by SmartFlow AI displayed in service cards.

```typescript
// src/app/shared/models/service-item.model.ts

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;           // SVG path or emoji placeholder
  benefits: string[];     // Array of 3 benefit strings
}
```

**Usage**: Services section cards, navigation to detail sections

---

### PackageItem

Represents a commercial package with bundled services.

```typescript
// src/app/shared/models/package-item.model.ts

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  features: string[];     // List of included features
  highlighted: boolean;   // Is this the recommended package?
  targetAudience: string; // "Ideal para..."
  ctaText: string;        // Button text
}
```

**Usage**: Packages section cards

---

### BenefitItem

Represents a benefit of hiring SmartFlow AI services.

```typescript
// src/app/shared/models/benefit-item.model.ts

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;           // SVG path or emoji placeholder
}
```

**Usage**: Benefits section cards

---

### ContactForm

Represents the lead capture form data structure.

```typescript
// src/app/shared/models/contact-form.model.ts

export interface ContactForm {
  nombre: string;           // Required
  empresa: string;          // Optional
  correo: string;           // Required, email format
  telefono: string;         // Optional
  servicioInteres: string;  // Required, from ServiceOptions
  mensaje: string;          // Optional
}

export type ServiceOption =
  | 'integracion-ia'
  | 'saas-personalizado'
  | 'sistema-inventario'
  | 'gestion-tickets'
  | 'gestion-citas'
  | 'asistente-virtual'
  | 'hooks-integraciones'
  | 'otro';

export const SERVICE_OPTIONS: { value: ServiceOption; label: string }[] = [
  { value: 'integracion-ia', label: 'Integración con IA' },
  { value: 'saas-personalizado', label: 'SaaS personalizado' },
  { value: 'sistema-inventario', label: 'Sistema de inventario' },
  { value: 'gestion-tickets', label: 'Gestión de tickets' },
  { value: 'gestion-citas', label: 'Gestión de citas' },
  { value: 'asistente-virtual', label: 'Asistente virtual' },
  { value: 'hooks-integraciones', label: 'Hooks e integraciones' },
  { value: 'otro', label: 'Otro' }
];
```

**Usage**: Contact section form, form validation

---

### NavItem

Represents a navigation link in the header.

```typescript
// src/app/shared/models/nav-item.model.ts

export interface NavItem {
  label: string;
  sectionId: string;
  isButton?: boolean;     // For CTA styling
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', sectionId: 'inicio' },
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Soluciones', sectionId: 'soluciones' },
  { label: 'Beneficios', sectionId: 'beneficios' },
  { label: 'Paquetes', sectionId: 'paquetes' },
  { label: 'Contacto', sectionId: 'contacto' },
  { label: 'Solicitar demo', sectionId: 'contacto', isButton: true }
];
```

**Usage**: Navbar component

---

## Static Data Files

### services.data.ts

```typescript
// src/app/shared/data/services.data.ts

import { ServiceItem } from '../models/service-item.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'integracion-ia',
    title: 'Integración con IA',
    description: 'Automatiza procesos empresariales con inteligencia artificial.',
    icon: '🤖',
    benefits: [
      'Automatización de tareas repetitivas',
      'Análisis inteligente de datos',
      'Soporte en toma de decisiones'
    ]
  },
  // ... 6 more services
];
```

### packages.data.ts

```typescript
// src/app/shared/data/packages.data.ts

import { PackageItem } from '../models/package-item.model';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'starter-digital',
    name: 'Starter Digital',
    description: 'Presencia digital profesional para tu negocio.',
    features: [
      'Landing page profesional',
      'Formulario de contacto',
      'Presentación de servicios',
      'Botón de WhatsApp'
    ],
    highlighted: false,
    targetAudience: 'Ideal para negocios que quieren presencia digital',
    ctaText: 'Solicitar cotización'
  },
  // ... 2 more packages
];
```

### benefits.data.ts

```typescript
// src/app/shared/data/benefits.data.ts

import { BenefitItem } from '../models/benefit-item.model';

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 'automatizacion',
    title: 'Automatización de procesos',
    description: 'Reduce el trabajo manual y aumenta la eficiencia.',
    icon: '⚡'
  },
  // ... 6 more benefits
];
```

---

## Entity Relationships

```
┌─────────────────┐
│   LandingPage   │
│   (Container)   │
└────────┬────────┘
         │
         │ contains
         ▼
┌────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │ Services │  │ Packages │  │ Benefits │  │ Contact │ │
│  │  Data    │  │   Data   │  │   Data   │  │  Form   │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬────┘ │
│       │             │             │             │       │
│       ▼             ▼             ▼             ▼       │
│  ServiceItem   PackageItem   BenefitItem   ContactForm │
│  (7 items)     (3 items)     (7 items)     (1 form)    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Validation Rules

### ContactForm Validation

| Field | Required | Validation |
|-------|----------|------------|
| nombre | ✅ Yes | Min 2 characters, max 100 |
| empresa | ❌ No | Max 100 characters |
| correo | ✅ Yes | Valid email format |
| telefono | ❌ No | Max 20 characters |
| servicioInteres | ✅ Yes | Must be valid ServiceOption |
| mensaje | ❌ No | Max 500 characters |
