# Tasks: SmartFlow AI Landing Page

**Input**: Design documents from `/specs/001-landing-page/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅

**Tests**: No se solicitaron tests automatizados. Validación manual según criterios de aceptación.

**Organization**: Tareas agrupadas por user story para habilitar implementación y testing independiente.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Puede ejecutarse en paralelo (archivos diferentes, sin dependencias)
- **[Story]**: A qué user story pertenece (US1, US2, US3, US4)
- Rutas exactas de archivos incluidas

## Path Conventions

- **Single project**: `src/app/` para componentes Angular
- **Styles**: `src/styles.scss` para estilos globales
- **Assets**: `src/assets/` para imágenes y recursos

---

## Phase 1: Setup (Project Infrastructure)

**Purpose**: Inicialización del proyecto y estructura base

- [X] T001 Configurar variables SCSS globales (colores, tipografía, espaciado) en `src/styles.scss`
- [X] T002 [P] Configurar mixins responsive (breakpoints mobile-first) en `src/styles.scss`
- [X] T003 [P] Importar fuente Inter desde Google Fonts en `src/index.html`
- [X] T004 Configurar estilos base y reset CSS en `src/styles.scss`

**Checkpoint**: Variables de diseño y estilos base listos para desarrollo de componentes

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Infraestructura core que DEBE completarse antes de cualquier user story

**⚠️ CRITICAL**: No puede comenzar trabajo de user stories hasta completar esta fase

- [X] T005 Crear modelo ServiceItem en `src/app/shared/models/service-item.model.ts`
- [X] T006 [P] Crear modelo PackageItem en `src/app/shared/models/package-item.model.ts`
- [X] T007 [P] Crear modelo BenefitItem en `src/app/shared/models/benefit-item.model.ts`
- [X] T008 [P] Crear modelo ContactForm y ServiceOptions en `src/app/shared/models/contact-form.model.ts`
- [X] T009 Crear datos de servicios (7 items) en `src/app/shared/data/services.data.ts`
- [X] T010 [P] Crear datos de paquetes (3 items) en `src/app/shared/data/packages.data.ts`
- [X] T011 [P] Crear datos de beneficios (7 items) en `src/app/shared/data/benefits.data.ts`
- [X] T012 Crear ContactService con simulación de envío en `src/app/core/services/contact.service.ts`
- [X] T013 Crear componente CtaButton reutilizable en `src/app/shared/components/cta-button/`
- [X] T014 [P] Crear componente SectionTitle reutilizable en `src/app/shared/components/section-title/`

**Checkpoint**: Modelos, datos y componentes base listos - implementación de user stories puede comenzar

---

## Phase 3: User Story 1 - Descubrir Servicios Ofrecidos (Priority: P1) 🎯 MVP

**Goal**: Visitante entiende la propuesta de valor y servicios de SmartFlow AI en menos de 10 segundos

**Independent Test**: Navegar el sitio y verificar que headline, servicios y secciones de detalle son visibles y claros

### Implementation for User Story 1

#### Navbar y Layout Base
- [X] T015 [US1] Crear componente Navbar con logo y navegación en `src/app/shared/components/navbar/`
- [X] T016 [US1] Implementar scroll suave a secciones desde Navbar
- [X] T017 [US1] Crear componente Footer en `src/app/shared/components/footer/`
- [X] T018 [US1] Crear componente LandingPage (shell) en `src/app/features/landing/landing-page.component.ts`
- [X] T019 [US1] Configurar AppComponent para usar LandingPage en `src/app/app.ts`

#### Hero Section
- [X] T020 [US1] Crear componente HeroSection en `src/app/features/landing/components/hero-section/`
- [X] T021 [US1] Implementar headline, subtítulo y CTAs en HeroSection
- [X] T022 [US1] Agregar elemento visual SVG (ilustración IA) en HeroSection

#### Services Section
- [X] T023 [US1] Crear componente ServiceCard en `src/app/shared/components/service-card/`
- [X] T024 [US1] Crear componente ServicesSection en `src/app/features/landing/components/services-section/`
- [X] T025 [US1] Implementar grid de 7 tarjetas de servicios con datos de services.data.ts

#### Detail Sections
- [X] T026 [P] [US1] Crear componente AiIntegrationSection en `src/app/features/landing/components/ai-integration-section/`
- [X] T027 [P] [US1] Crear componente SaasSection en `src/app/features/landing/components/saas-section/`
- [X] T028 [P] [US1] Crear componente VirtualAssistantSection en `src/app/features/landing/components/virtual-assistant-section/`
- [X] T029 [P] [US1] Crear componente HooksSection en `src/app/features/landing/components/hooks-section/`

#### Benefits Section
- [X] T030 [US1] Crear componente BenefitCard en `src/app/shared/components/benefit-card/`
- [X] T031 [US1] Crear componente BenefitsSection en `src/app/features/landing/components/benefits-section/`
- [X] T032 [US1] Implementar grid de 7 beneficios con datos de benefits.data.ts

#### Integration
- [X] T033 [US1] Integrar todas las secciones en LandingPage con IDs para navegación
- [X] T034 [US1] Verificar que todo el texto visible está en español

**Checkpoint**: User Story 1 completamente funcional - visitante puede descubrir servicios

---

## Phase 4: User Story 2 - Solicitar Demo o Contacto (Priority: P2)

**Goal**: Visitante puede completar y enviar formulario de contacto para solicitar demo

**Independent Test**: Completar formulario, ver validación de campos requeridos, ver mensaje de éxito

### Implementation for User Story 2

- [X] T035 [US2] Crear componente ContactSection en `src/app/features/landing/components/contact-section/`
- [X] T036 [US2] Implementar Reactive Form con campos: nombre, empresa, correo, teléfono, servicio, mensaje
- [X] T037 [US2] Implementar validación de campos requeridos (nombre, correo, servicio)
- [X] T038 [US2] Implementar validación de formato de correo electrónico
- [X] T039 [US2] Implementar selector de servicio de interés con 8 opciones
- [X] T040 [US2] Mostrar mensajes de error de validación en campos
- [X] T041 [US2] Implementar indicador de carga durante envío simulado
- [X] T042 [US2] Implementar mensaje de éxito tras envío
- [X] T043 [US2] Conectar CTAs de Hero y Navbar al formulario de contacto

**Checkpoint**: User Story 2 completamente funcional - formulario valida y simula envío

---

## Phase 5: User Story 3 - Comparar Paquetes Comerciales (Priority: P3)

**Goal**: Visitante puede ver y comparar 3 paquetes comerciales con sus características

**Independent Test**: Navegar a paquetes, ver 3 tarjetas con toda la información, hacer clic en cotización

### Implementation for User Story 3

- [X] T044 [US3] Crear componente PackageCard en `src/app/shared/components/package-card/`
- [X] T045 [US3] Implementar estilos destacados para paquete recomendado (highlighted)
- [X] T046 [US3] Crear componente PackagesSection en `src/app/features/landing/components/packages-section/`
- [X] T047 [US3] Implementar grid de 3 paquetes con datos de packages.data.ts
- [X] T048 [US3] Implementar navegación de "Solicitar cotización" a ContactSection con servicio preseleccionado
- [X] T049 [US3] Integrar PackagesSection en LandingPage

**Checkpoint**: User Story 3 completamente funcional - paquetes visibles y cotización funciona

---

## Phase 6: User Story 4 - Navegar el Sitio en Móvil (Priority: P4)

**Goal**: Sitio completamente usable en dispositivos móviles y tablets

**Independent Test**: Probar en viewports 320px, 768px y 1024px+

### Implementation for User Story 4

- [X] T050 [US4] Implementar menú hamburguesa en Navbar para móvil (<768px)
- [X] T051 [US4] Implementar overlay de menú móvil con animación
- [X] T052 [US4] Aplicar estilos responsive a HeroSection (stack vertical en móvil)
- [X] T053 [P] [US4] Aplicar estilos responsive a ServicesSection (1 col móvil, 2 tablet, 3-4 desktop)
- [X] T054 [P] [US4] Aplicar estilos responsive a BenefitsSection
- [X] T055 [P] [US4] Aplicar estilos responsive a PackagesSection
- [X] T056 [P] [US4] Aplicar estilos responsive a secciones de detalle (AI, SaaS, Virtual, Hooks)
- [X] T057 [US4] Aplicar estilos responsive a ContactSection (formulario full-width en móvil)
- [X] T058 [US4] Aplicar estilos responsive a Footer
- [X] T059 [US4] Verificar touch targets mínimos de 44x44px en botones y links
- [X] T060 [US4] Verificar legibilidad de texto en móvil (min 16px)

**Checkpoint**: User Story 4 completamente funcional - sitio usable en todos los dispositivos

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Refinamiento final, accesibilidad y verificación de criterios de éxito

### Accessibility (WCAG 2.1 AA)
- [X] T061 [P] Verificar contraste de colores 4.5:1 en todos los textos
- [X] T062 [P] Agregar atributos alt descriptivos a todas las imágenes/SVGs
- [X] T063 [P] Verificar navegación completa por teclado (Tab, Enter, Escape)
- [X] T064 [P] Agregar estados de focus visibles (:focus-visible) a elementos interactivos
- [X] T065 Agregar atributos ARIA donde sea necesario (aria-label, aria-expanded)

### Performance
- [X] T066 Agregar loading="lazy" a imágenes below-the-fold
- [X] T067 Verificar que bundle size es razonable (<500KB inicial)

### Final Validation
- [X] T068 Verificar SC-001: Propuesta de valor clara en <10 segundos
- [X] T069 Verificar SC-002: 7 tarjetas de servicios con contenido completo
- [X] T070 Verificar SC-003: Formulario completable en <2 minutos
- [X] T071 Verificar SC-004: Sitio funciona en 320px, 768px, 1024px+
- [X] T072 Verificar SC-005: 3 paquetes visibles con información completa
- [X] T073 Verificar SC-006: Scroll suave funciona en todas las navegaciones
- [X] T074 Verificar SC-007: 100% del texto visible en español
- [X] T075 Verificar SC-008: Validación de campos requeridos visible
- [X] T076 Verificar SC-009: Mensaje de éxito tras envío simulado
- [X] T077 Verificar SC-010: Tiempo de carga <3 segundos

**Checkpoint**: Todos los criterios de éxito validados - feature listo para entrega

---

## Dependencies

```
Phase 1 (Setup)
    │
    ▼
Phase 2 (Foundational) ─────────────────────────────────────┐
    │                                                        │
    ▼                                                        │
Phase 3 (US1: Servicios) ──────┬────────────────────────────▼
    │                          │                    Phase 4 (US2: Contacto)
    │                          │                             │
    │                          ▼                             │
    │                 Phase 5 (US3: Paquetes) ◄──────────────┘
    │                          │
    ▼                          ▼
Phase 6 (US4: Responsive) ◄────┘
    │
    ▼
Phase 7 (Polish)
```

## Parallel Execution Opportunities

| Phase | Parallelizable Tasks | Sequential Tasks |
|-------|---------------------|------------------|
| 1 | T002, T003 | T001 → T004 |
| 2 | T006-T008, T010-T011, T014 | T005 → T009, T012 → T013 |
| 3 | T026-T029 | T015-T025, T030-T034 |
| 4 | None | T035-T043 (form logic sequential) |
| 5 | None | T044-T049 |
| 6 | T053-T056 | T050-T052, T057-T060 |
| 7 | T061-T065 | T066-T077 |

## Implementation Strategy

**MVP First (User Story 1 only)**:
- Complete Phases 1-3 for minimum viable landing page
- Visitors can discover services and understand value proposition
- Estimated: 40% of total effort

**Incremental Delivery**:
1. **MVP**: Phases 1-3 (Servicios visibles)
2. **Lead Capture**: Phase 4 (Formulario funcional)
3. **Sales Enablement**: Phase 5 (Paquetes comparables)
4. **Mobile Ready**: Phase 6 (Responsive completo)
5. **Production Ready**: Phase 7 (Accesibilidad y polish)

---

## Summary

| Metric | Value |
|--------|-------|
| Total Tasks | 77 |
| Phase 1 (Setup) | 4 tasks |
| Phase 2 (Foundational) | 10 tasks |
| Phase 3 (US1 - P1) | 20 tasks |
| Phase 4 (US2 - P2) | 9 tasks |
| Phase 5 (US3 - P3) | 6 tasks |
| Phase 6 (US4 - P4) | 11 tasks |
| Phase 7 (Polish) | 17 tasks |
| Parallelizable | ~25 tasks |
| MVP Scope | Phases 1-3 (34 tasks) |
