# Research: SmartFlow AI Landing Page

**Feature**: 001-landing-page  
**Date**: 2026-05-23  
**Purpose**: Resolve technical decisions and best practices for Angular landing page implementation

## Technology Decisions

### Angular Version & Configuration

**Decision**: Angular 19.x with standalone components  
**Rationale**: Latest stable version provides best performance, standalone simplifies architecture  
**Alternatives Considered**:
- Angular 18.x: Rejected - newer version available with better features
- Module-based architecture: Rejected - standalone is simpler for landing pages

### Styling Approach

**Decision**: SCSS with CSS custom properties for theming  
**Rationale**: SCSS provides nesting, mixins, variables; CSS properties enable runtime theming  
**Alternatives Considered**:
- Tailwind CSS: Rejected - adds build complexity, learning curve
- Plain CSS: Rejected - lacks organizational features needed

### Color Palette Implementation

**Decision**: CSS custom properties with SCSS variables fallback
```scss
// Primary colors (Purple innovation theme)
$primary-900: #1a0a2e;     // Morado muy oscuro
$primary-700: #2d1b4e;     // Morado oscuro
$primary-500: #6b21a8;     // Morado principal
$primary-300: #a855f7;     // Morado claro
$primary-100: #f3e8ff;     // Morado muy claro

// Accent colors (Blue gradient)
$accent-700: #1e3a8a;      // Azul oscuro
$accent-500: #3b82f6;      // Azul principal
$accent-300: #93c5fd;      // Azul claro

// Neutral colors
$neutral-900: #111827;     // Casi negro
$neutral-700: #374151;     // Gris oscuro
$neutral-500: #6b7280;     // Gris medio
$neutral-300: #d1d5db;     // Gris claro
$neutral-100: #f9fafb;     // Casi blanco
$white: #ffffff;
```
**Rationale**: Matches clarified "morado innovación + azul" requirement with accessibility

### Typography

**Decision**: Inter font family via Google Fonts  
**Rationale**: Modern, highly readable, excellent for tech websites, free  
**Alternatives Considered**:
- Poppins: Good alternative, slightly more playful
- System fonts: Rejected - less consistent across platforms

### Icons

**Decision**: SVG inline icons (no external library)  
**Rationale**: Zero dependencies, full control, optimal performance  
**Alternatives Considered**:
- Material Icons: Adds dependency, larger bundle
- Font Awesome: Adds dependency, licensing considerations
- Lucide: Good but adds build step

### Form Handling

**Decision**: Angular Reactive Forms with custom validators  
**Rationale**: Type-safe, testable, better control over validation  
**Alternatives Considered**:
- Template-driven forms: Rejected - less control, harder to test

### Smooth Scrolling

**Decision**: Native CSS `scroll-behavior: smooth` + ViewportScroller  
**Rationale**: Native is performant, ViewportScroller provides Angular integration  
**Alternatives Considered**:
- ngx-page-scroll: Rejected - adds dependency for simple feature

### Responsive Breakpoints

**Decision**: Mobile-first with standard breakpoints
```scss
$breakpoint-sm: 640px;   // Small devices
$breakpoint-md: 768px;   // Tablets
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large desktop
```
**Rationale**: Industry-standard breakpoints, mobile-first per constitution

## Best Practices Applied

### Angular Standalone Components

- Each component self-contained with imports
- Direct imports instead of shared modules
- Lazy loading not needed (single page)

### SCSS Organization

```
styles/
├── _variables.scss    # Colors, spacing, typography
├── _mixins.scss       # Responsive mixins, utilities
├── _base.scss         # Reset, typography, global
└── styles.scss        # Main entry point
```

### Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators (`:focus-visible`)
- Contrast ratio minimum 4.5:1

### Performance Optimization

- OnPush change detection for static components
- Lazy loading images with `loading="lazy"`
- Minimal bundle size (no large libraries)
- SVG icons instead of icon fonts

## Integration Patterns

### Contact Form Simulation

```typescript
// ContactService simulates API call
submitContact(data: ContactForm): Observable<boolean> {
  return of(true).pipe(delay(1500)); // Simulate network delay
}
```

### Navigation Scroll

```typescript
// Smooth scroll to section
scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
}
```

## Resolved Clarifications

| Item | Resolution |
|------|------------|
| Color palette | Morado (#6b21a8) + Azul (#3b82f6) theme |
| Accessibility | WCAG 2.1 AA compliance |
| Performance | <3s load time target |
| Typography | Inter font family |
| Icons | SVG inline (no library) |
| Form fields required | Nombre, Correo, Servicio de interés |
