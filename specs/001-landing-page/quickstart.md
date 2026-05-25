# Quick Start: SmartFlow AI Landing Page

**Feature**: 001-landing-page  
**Date**: 2026-05-23

## Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Angular CLI (installed globally or via npx)

## Setup

```bash
# Navigate to project root
cd c:\repositorios\landin_Page

# Install dependencies
npm install

# Start development server
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200`

## Project Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on port 4200 |
| `npm run build` | Build production bundle |
| `npm test` | Run unit tests (if configured) |
| `ng generate component <name>` | Generate new component |

## Key Directories

```
src/app/
├── core/services/          # ContactService for form simulation
├── shared/components/      # Reusable UI components
├── shared/models/          # TypeScript interfaces
├── shared/data/            # Static data files
└── features/landing/       # Landing page sections
```

## Development Workflow

### Creating a New Section Component

```bash
# Generate a new section component
ng generate component features/landing/components/new-section --standalone
```

### Creating a New Shared Component

```bash
# Generate a reusable component
ng generate component shared/components/new-card --standalone
```

### Adding New Data

1. Define interface in `shared/models/`
2. Create data file in `shared/data/`
3. Import and use in components

## Styling Guidelines

### SCSS Variables (src/styles.scss)

```scss
// Use these variables for consistency
$primary-500: #6b21a8;    // Main purple
$accent-500: #3b82f6;     // Main blue
$neutral-900: #111827;    // Text color
$white: #ffffff;          // Background

// Spacing scale
$spacing-1: 0.25rem;      // 4px
$spacing-2: 0.5rem;       // 8px
$spacing-4: 1rem;         // 16px
$spacing-8: 2rem;         // 32px
$spacing-16: 4rem;        // 64px
```

### Responsive Mixins

```scss
// Mobile-first breakpoints
@mixin tablet {
  @media (min-width: 768px) { @content; }
}

@mixin desktop {
  @media (min-width: 1024px) { @content; }
}
```

## Testing Checklist

- [ ] All sections render correctly
- [ ] Navigation scrolls to sections
- [ ] Form validation works for required fields
- [ ] Form shows success message after submission
- [ ] Responsive layout works on mobile (320px)
- [ ] Responsive layout works on tablet (768px)
- [ ] Responsive layout works on desktop (1024px+)
- [ ] All text is in Spanish
- [ ] WCAG 2.1 AA contrast requirements met

## Deployment

```bash
# Build for production
npm run build

# Output will be in dist/smartflow-ai-landing/
```

The `dist/` folder can be deployed to any static hosting:
- Netlify
- Vercel
- GitHub Pages
- Azure Static Web Apps
- AWS S3 + CloudFront
