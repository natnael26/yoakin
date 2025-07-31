# Overview

This is a construction company website for Habesha Construction, built with a modern full-stack architecture. The application features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration. The site showcases the company's services, portfolio, and includes a contact form system for lead generation.

## Recent Updates (January 2025)
- Added custom SVG illustrations for construction themes
- Implemented smooth animations and transitions throughout the site
- Created animated counters for statistics display
- Added hover effects and loading animations
- Enhanced visual appeal with Ethiopian-themed illustrations

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom Ethiopian-themed color palette
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with TypeScript using tsx for development
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schemas in `/shared/schema.ts`
- **Tables**: Users and contact forms with proper relationships
- **Development Storage**: In-memory storage implementation for development/testing

## API Design
- **Contact Form API**: POST `/api/contact` for form submissions, GET `/api/contact` for retrieving submissions
- **Validation**: Server-side validation using shared Zod schemas
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Logging**: Request/response logging for API endpoints

## Build System
- **Frontend Build**: Vite for fast development and optimized production builds
- **Backend Build**: esbuild for server-side bundling
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Development Environment
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Development Server**: Integrated Vite middleware in Express for seamless development
- **Environment**: Development and production configurations with appropriate optimizations

# External Dependencies

## Core Technologies
- **Database**: Neon Database (serverless PostgreSQL)
- **Image Hosting**: Unsplash for portfolio and service images
- **UI Components**: Radix UI primitives for accessible component foundation

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Build Tools**: Vite, esbuild, and TypeScript compiler
- **Database Migrations**: Drizzle Kit for schema management

## Runtime Dependencies
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Date Handling**: date-fns for date manipulation
- **Validation**: Zod for runtime type validation
- **HTTP Client**: Native fetch API for client-server communication