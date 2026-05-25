# Component Contracts: SmartFlow AI Landing Page

**Feature**: 001-landing-page  
**Date**: 2026-05-23  
**Purpose**: Define component interfaces, inputs, outputs, and behavior contracts

## Shared Components

### NavbarComponent

**Selector**: `app-navbar`  
**Location**: `src/app/shared/components/navbar/`

```typescript
// Inputs
@Input() brandName: string = 'SmartFlow AI';
@Input() navItems: NavItem[] = NAV_ITEMS;
@Input() isScrolled: boolean = false;

// Outputs
@Output() navigate = new EventEmitter<string>();  // sectionId

// Behavior
- Fixed position at top of viewport
- Transparent background when at top, solid when scrolled
- Collapses to hamburger menu on mobile (<768px)
- Emits navigate event when link clicked
```

---

### FooterComponent

**Selector**: `app-footer`  
**Location**: `src/app/shared/components/footer/`

```typescript
// Inputs
@Input() brandName: string = 'SmartFlow AI';
@Input() brandDescription: string;
@Input() services: string[];
@Input() contactInfo: { email: string; phone: string };
@Input() socialLinks: { platform: string; url: string }[];

// Behavior
- Displays brand info, services summary, contact placeholders
- Links to social media (placeholder URLs)
- Copyright with current year
```

---

### SectionTitleComponent

**Selector**: `app-section-title`  
**Location**: `src/app/shared/components/section-title/`

```typescript
// Inputs
@Input() title: string;           // Required
@Input() subtitle?: string;       // Optional
@Input() alignment: 'left' | 'center' = 'center';

// Behavior
- Renders consistent section headers
- Uses h2 for title, p for subtitle
- Applies standard spacing below
```

---

### ServiceCardComponent

**Selector**: `app-service-card`  
**Location**: `src/app/shared/components/service-card/`

```typescript
// Inputs
@Input() service: ServiceItem;    // Required

// Outputs
@Output() learnMore = new EventEmitter<string>();  // serviceId

// Behavior
- Displays icon, title, description, benefits list
- Hover effect for interactivity
- Emits learnMore when clicked
```

---

### PackageCardComponent

**Selector**: `app-package-card`  
**Location**: `src/app/shared/components/package-card/`

```typescript
// Inputs
@Input() package: PackageItem;    // Required

// Outputs
@Output() requestQuote = new EventEmitter<string>();  // packageId

// Behavior
- Displays name, description, features list
- Highlighted style if package.highlighted === true
- CTA button emits requestQuote event
```

---

### BenefitCardComponent

**Selector**: `app-benefit-card`  
**Location**: `src/app/shared/components/benefit-card/`

```typescript
// Inputs
@Input() benefit: BenefitItem;    // Required

// Behavior
- Displays icon, title, description
- Compact card design for grid layout
```

---

### CtaButtonComponent

**Selector**: `app-cta-button`  
**Location**: `src/app/shared/components/cta-button/`

```typescript
// Inputs
@Input() text: string;            // Required
@Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() fullWidth: boolean = false;
@Input() disabled: boolean = false;
@Input() type: 'button' | 'submit' = 'button';

// Outputs
@Output() clicked = new EventEmitter<void>();

// Behavior
- Renders styled button with variant
- Primary: solid purple background
- Secondary: solid blue background
- Outline: transparent with border
- Disabled state styling
```

---

## Feature Components

### HeroSectionComponent

**Selector**: `app-hero-section`  
**Location**: `src/app/features/landing/components/hero-section/`

```typescript
// Inputs
@Input() headline: string;
@Input() subtitle: string;
@Input() primaryCta: { text: string; action: string };
@Input() secondaryCta: { text: string; action: string };

// Outputs
@Output() ctaClick = new EventEmitter<string>();  // action

// Behavior
- Full-width hero with gradient background
- Headline, subtitle, two CTA buttons
- Visual element (SVG illustration) on right side
- Responsive: stacks vertically on mobile
```

---

### ServicesSectionComponent

**Selector**: `app-services-section`  
**Location**: `src/app/features/landing/components/services-section/`

```typescript
// Inputs
@Input() services: ServiceItem[] = SERVICES_DATA;

// Outputs
@Output() serviceSelected = new EventEmitter<string>();  // serviceId

// Behavior
- Displays 7 service cards in responsive grid
- 1 column mobile, 2 tablet, 3-4 desktop
- Section title "Nuestros Servicios"
```

---

### ContactSectionComponent

**Selector**: `app-contact-section`  
**Location**: `src/app/features/landing/components/contact-section/`

```typescript
// Inputs
@Input() preselectedService?: string;  // From package CTA

// State
contactForm: FormGroup;
isSubmitting: boolean = false;
isSubmitted: boolean = false;
submitError: string | null = null;

// Behavior
- Reactive form with validation
- Required: nombre, correo, servicioInteres
- Shows validation errors on blur/submit
- Shows loading indicator during submission
- Shows success message after successful submission
- Resets form after success
```

---

## Service Contracts

### ContactService

**Location**: `src/app/core/services/contact.service.ts`

```typescript
@Injectable({ providedIn: 'root' })
export class ContactService {
  
  /**
   * Simulates form submission to backend
   * @param data - Contact form data
   * @returns Observable<boolean> - true on success
   */
  submitContact(data: ContactForm): Observable<boolean>;
  
  // Implementation
  // - Simulates 1.5s network delay
  // - Always returns true (success)
  // - Logs form data to console in development
}
```

---

## Event Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                        LandingPageComponent                       │
│                                                                    │
│  ┌─────────────┐    navigate    ┌───────────────────────────────┐ │
│  │   Navbar    │ ─────────────▶ │  scrollToSection(sectionId)   │ │
│  └─────────────┘                └───────────────────────────────┘ │
│                                                                    │
│  ┌─────────────┐   ctaClick     ┌───────────────────────────────┐ │
│  │    Hero     │ ─────────────▶ │  scrollToSection('contacto')  │ │
│  └─────────────┘                │  or ('servicios')             │ │
│                                 └───────────────────────────────┘ │
│                                                                    │
│  ┌─────────────┐  requestQuote  ┌───────────────────────────────┐ │
│  │  Packages   │ ─────────────▶ │  scrollToSection('contacto')  │ │
│  └─────────────┘                │  + preselect service          │ │
│                                 └───────────────────────────────┘ │
│                                                                    │
│  ┌─────────────┐   submit       ┌───────────────────────────────┐ │
│  │   Contact   │ ─────────────▶ │  ContactService.submitContact │ │
│  │    Form     │                │  → show success message       │ │
│  └─────────────┘                └───────────────────────────────┘ │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```
