# Budget Dumpsters - Project Documentation

## Overview

Budget Dumpsters is a full-stack web application for a locally-owned dumpster rental and junk removal service. The application provides a professional, user-friendly platform for customers to learn about services, view dumpster sizes, explore a gallery, and submit booking requests. The project emphasizes trust, clarity, and a frictionless booking experience while maintaining an approachable, service-industry aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for client-side routing and asset handling
- **Wouter** for lightweight client-side routing (file-based routing with pages in `client/src/pages/`)

**UI Framework & Styling**
- **Tailwind CSS** for utility-first styling with custom design system
- **shadcn/ui** component library (New York style variant) providing pre-built, accessible React components
- **Radix UI** primitives as the foundation for interactive components
- Custom CSS variables for theming (light/dark mode support via ThemeProvider)
- Design system based on service industry leaders (TaskRabbit, Thumbtack inspiration)

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management with custom query client configuration
- **React Hook Form** with **Zod** validation for form handling and schema validation
- Context API for theme management (light/dark mode toggle)

**Design Patterns**
- Component composition using shadcn/ui patterns
- Custom hooks for mobile detection (`use-mobile`), toast notifications (`use-toast`), and theme management
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system (type: "module" in package.json)
- Middleware for JSON parsing, URL encoding, and request logging

**Data Storage Strategy**
- **In-memory storage implementation** (`MemStorage` class) currently used for development
- Database schema defined with **Drizzle ORM** for PostgreSQL (prepared for migration)
- Schema includes `bookings` table with fields for customer info, service type, dumpster size, rental dates, and addresses

**API Design**
- RESTful API endpoints under `/api` prefix
- POST `/api/bookings` - Create new booking with Zod validation
- GET `/api/bookings` - Retrieve all bookings
- GET `/api/bookings/:id` - Retrieve single booking by ID
- Validation using `zod-validation-error` for user-friendly error messages

**Development Features**
- Vite middleware integration for HMR in development
- Custom logging middleware for API request tracking
- Replit-specific plugins for error overlays and development tools

### Data Layer

**ORM & Migrations**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- Schema location: `shared/schema.ts` (shared between client and server)
- Migration configuration in `drizzle.config.ts` pointing to Neon serverless PostgreSQL
- Type-safe database operations with inferred types from schema

**Schema Design**
```typescript
bookings {
  id: varchar (UUID primary key)
  name: text
  phone: text
  email: text
  serviceType: text (enum: dumpster-rental, junk-removal, property-cleanout)
  dumpsterSize: text (optional)
  rentalDate: text (optional)
  address: text
  message: text (optional)
  createdAt: timestamp
}
```

**Validation Layer**
- Zod schemas derived from Drizzle schema using `drizzle-zod`
- Shared validation between frontend forms and backend API
- Custom validation rules (min lengths, email format, enum constraints)

### Routing & Navigation

**Client-Side Routing**
- Wouter for minimal, hook-based routing
- Routes defined in `App.tsx`:
  - `/` - Home page with hero, services overview, and CTA
  - `/services` - Detailed service descriptions
  - `/sizes` - Dumpster size comparison guide
  - `/gallery` - Photo gallery with lightbox
  - `/about` - Company information and values
  - `/contact` - Booking form with validation
- 404 handling with custom NotFound page

**Navigation Components**
- Sticky header with scroll-based backdrop blur effect
- Mobile-responsive hamburger menu
- Theme toggle integrated into navigation
- Footer with service links, contact information, and company details

### Asset Management

**Static Assets**
- Images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` for importing images
- Hero images, service photos, and gallery content organized by category

**Build Configuration**
- Client build output: `dist/public`
- Server bundle: `dist/index.js`
- Separate client and server TypeScript compilation with `tsx` for development

## External Dependencies

### Database
- **Neon Serverless PostgreSQL** - Cloud-hosted PostgreSQL database
- Connection via `@neondatabase/serverless` package
- Connection string required in `DATABASE_URL` environment variable
- Drizzle ORM for type-safe database interactions

### UI Component Libraries
- **Radix UI** - Comprehensive suite of unstyled, accessible component primitives
- **shadcn/ui** - Pre-styled components built on Radix UI primitives
- **Lucide React** - Icon library for consistent iconography
- **Embla Carousel** - Carousel/slider functionality
- **cmdk** - Command palette component
- **vaul** - Drawer component for mobile interactions

### Form & Validation
- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation library
- **@hookform/resolvers** - Zod integration for React Hook Form
- **drizzle-zod** - Automatic Zod schema generation from Drizzle schemas

### Development Tools
- **Replit Vite Plugins** - Development error overlay, cartographer, and dev banner (development only)
- **PostCSS** with **Autoprefixer** - CSS processing
- **TypeScript** - Type checking without emit (build handled by Vite/esbuild)

### Session Management
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used in current implementation)
- Prepared for future authentication/session handling

### Utilities
- **date-fns** - Date manipulation and formatting
- **class-variance-authority** - Variant-based className generation
- **clsx** & **tailwind-merge** - Conditional className utilities
- **nanoid** - Unique ID generation