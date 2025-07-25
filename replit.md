# Portfolio Website

## Overview

This is a single-page portfolio website built for Kishor Wadeyar, showcasing his skills as a Full Stack Developer and AIML Enthusiast. The application uses a modern React-based frontend with a backend infrastructure ready for future expansion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: Hot module replacement and error handling middleware

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current State**: In-memory storage implementation with interface for easy database migration

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Landing area with call-to-action buttons
3. **About Section**: Personal introduction and background
4. **Skills Section**: Technical skills organized by category
5. **Education Section**: Academic credentials display
6. **Projects Section**: Portfolio showcase with GitHub links
7. **Contact Section**: Contact information and social links

### Backend Infrastructure
1. **Express Server**: Main application server with middleware
2. **Route Registration**: Modular route handling system
3. **Storage Interface**: Abstracted storage layer for easy database integration
4. **Error Handling**: Centralized error handling middleware

### Development Tools
1. **Vite Configuration**: Development server with HMR and build optimization
2. **TypeScript**: Strict type checking with path aliases
3. **ESBuild**: Production server bundling
4. **Replit Integration**: Development environment optimization

## Data Flow

### Current Implementation
1. **Static Content**: All portfolio content is hardcoded in React components
2. **Client-Side Rendering**: Single-page application with React Router-like navigation
3. **API Ready**: Backend infrastructure prepared for dynamic content

### Future Database Integration
1. **User Management**: Basic user schema already defined
2. **Content Management**: Ready for dynamic portfolio content
3. **Session Management**: PostgreSQL session store configured

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, ReactDOM, TanStack Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, Class Variance Authority
- **Backend**: Express, Drizzle ORM, Neon Database client
- **Development**: Vite, TypeScript, ESBuild

### Styling and Icons
- **Icons**: React Icons (Font Awesome icons)
- **Fonts**: Inter font family from Google Fonts
- **Animations**: CSS transitions and Tailwind utilities

### Database and Storage
- **Database**: Neon Database (PostgreSQL serverless)
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **ORM**: Drizzle ORM with Zod validation

## Deployment Strategy

### Static Build Process
1. **Frontend Only**: Vite builds optimized React application to `dist/public`
2. **Static Assets**: All content served as static files
3. **No Backend**: Converted to static portfolio without server dependencies

### Vercel Deployment
- **Build Command**: `npx vite build` configured in vercel.json
- **Output Directory**: `dist/public` contains all static assets
- **SPA Routing**: Configured with rewrites for single-page application
- **Automatic Deployment**: Ready for GitHub integration with Vercel

### Environment Configuration
- **Development**: Vite development server
- **Production**: Static HTML, CSS, and JavaScript files
- **No Database**: All content is static/hardcoded in components
- **Vercel**: Optimized for Vercel serverless deployment

### Hosting Considerations
- **Static Only**: Pure frontend application, no server required
- **CDN**: Automatically served via Vercel's global CDN
- **Domain**: Can use custom domain or vercel.app subdomain
- **Performance**: Optimized build with code splitting and compression