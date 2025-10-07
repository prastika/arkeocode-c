# Overview

This is a full-stack web application built with React (frontend) and Express (backend), featuring a modern component library using shadcn/ui. The application appears to be a company/agency website showcasing services, products, and benefits with a contact form functionality. It uses Drizzle ORM for database operations with PostgreSQL (via Neon Database), and includes a complete setup for both development and production environments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component Strategy**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom design tokens
- **New York** style variant for shadcn components
- CSS custom properties for theming (supports light/dark modes)
- Component aliases configured for clean imports (`@/components`, `@/lib`, etc.)

**Form Handling**
- **React Hook Form** for form state management
- **Zod** for schema validation via `@hookform/resolvers`
- Type-safe form schemas shared between client and server

## Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running in ESM mode
- Middleware for JSON parsing and URL-encoded bodies
- Custom request logging middleware that tracks API calls with response times
- Centralized error handling middleware

**Development vs Production**
- **Development**: Vite dev server integrated via middleware for HMR
- **Production**: Serves pre-built static assets from `dist/public`
- **esbuild** bundles the server code for production deployment

**Data Layer**
- **Drizzle ORM** configured for PostgreSQL with schema-first approach
- Database schema defined in `shared/schema.ts` for type sharing
- Currently using **in-memory storage** (`MemStorage` class) as a fallback/development option
- Interface-based storage pattern (`IStorage`) allows swapping between memory and database implementations

## Database Design

**ORM Configuration**
- Drizzle configured with PostgreSQL dialect
- Migrations stored in `./migrations` directory
- Schema centralized in `shared/schema.ts` for frontend/backend sharing
- Connection via `@neondatabase/serverless` for Neon Database integration

**Current Schema**
- Contact form data types (email validation via Zod)
- User entity with basic CRUD operations (id, username)
- Type definitions for domain entities: Stats, Services, Products, Benefits

**Migration Strategy**
- `drizzle-kit push` command for schema synchronization
- Environment variable `DATABASE_URL` required for database connection

## External Dependencies

**Database & Infrastructure**
- **Neon Database** - Serverless PostgreSQL provider
- **PostgreSQL** - Primary database (via Neon's serverless driver)
- Connection pooling handled by `@neondatabase/serverless`

**UI Component Libraries**
- **Radix UI** - Headless component primitives (20+ components)
- **shadcn/ui** - Pre-built accessible components
- **Lucide React** - Icon library
- **cmdk** - Command menu component
- **embla-carousel-react** - Carousel functionality
- **react-day-picker** - Date picker component

**Development Tools**
- **Replit-specific plugins**:
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Development tooling
  - `@replit/vite-plugin-dev-banner` - Development banner
- These plugins only load in development on Replit

**Build & Type Safety**
- **TypeScript** with strict mode enabled
- **tsx** for running TypeScript in Node.js during development
- **esbuild** for production server bundling
- Path aliases for clean imports across the codebase

**State Management**
- No global state library (relies on React Query for server state)
- Local component state via React hooks
- Form state via React Hook Form

**Styling Utilities**
- **class-variance-authority** - Type-safe variant styling
- **clsx** & **tailwind-merge** - Conditional className utilities
- **date-fns** - Date formatting and manipulation

**Session Management**
- **connect-pg-simple** - PostgreSQL session store for Express (configured but not actively used in current routes)