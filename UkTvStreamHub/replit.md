# UK Streaming TV - IPTV Service Platform

## Overview

This is a modern web application for a UK-based IPTV (Internet Protocol Television) service provider. The platform serves as a marketing and subscription management system for customers to browse services, view pricing, and submit contact forms or subscription requests. The application is built with a full-stack architecture using React for the frontend and Express.js for the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod schemas shared between client and server
- **Development**: Hot reload with Vite middleware integration

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Session Storage**: PostgreSQL-backed sessions
- **Migration Management**: Drizzle Kit for schema migrations
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Contacts Table**: Customer inquiries and contact form submissions
- **Subscriptions Table**: Subscription requests with plan types and status tracking

### API Endpoints
- `POST /api/contact` - Submit contact form inquiries
- `POST /api/subscribe` - Submit subscription requests
- `GET /api/contacts` - Retrieve contact submissions (admin)
- `GET /api/subscriptions` - Retrieve subscription data (admin)

### Frontend Pages
- **Home**: Landing page with hero section, features, and pricing
- **How to Watch**: Setup instructions and device compatibility
- **Pricing**: Detailed pricing plans and subscription options
- **Contact**: Contact form and support information
- **FAQ**: Frequently asked questions

### UI Components
- Responsive design with mobile-first approach
- Modern component library built on Radix UI primitives
- Toast notifications for user feedback
- Floating action buttons for WhatsApp and quick signup
- Accordion-based FAQ sections

## Data Flow

1. **User Interaction**: Users browse the marketing site and interact with forms
2. **Form Submission**: Contact and subscription forms are validated client-side with Zod
3. **API Processing**: Server validates data again and stores in database
4. **Response Handling**: Success/error states displayed via toast notifications
5. **Admin Access**: Administrative endpoints provide access to submissions

## External Dependencies

### Core Dependencies
- **UI Framework**: React 18, Wouter routing
- **Database**: Neon PostgreSQL, Drizzle ORM
- **Styling**: Tailwind CSS, Radix UI components
- **Development**: Vite, TypeScript, ESBuild

### Third-party Integrations
- **WhatsApp**: Direct messaging integration for customer support
- **Replit**: Development environment with specific plugins and configuration

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Development Server**: Vite dev server with HMR
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Build Process**: Vite builds client assets, ESBuild bundles server
- **Output**: Static assets in `dist/public`, server bundle in `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **Environment**: Production mode with NODE_ENV=production

### Configuration Files
- **Vite**: Custom configuration with React plugin and Replit integrations
- **Drizzle**: Database configuration with PostgreSQL dialect
- **Tailwind**: Extended configuration with custom color scheme
- **TypeScript**: Strict mode with path aliases for clean imports

## Notion CMS Integration

The website now includes optional Notion CMS integration for dynamic content management:

### CMS Features
- **Testimonials Management**: Customer reviews, ratings, and locations
- **Dynamic Pricing Plans**: Pricing configuration, savings badges, and plan visibility
- **FAQ Management**: Questions, answers, ordering, and visibility controls
- **Real-time Updates**: Content changes in Notion appear immediately on the website

### Setup Instructions
1. Create Notion integration at notion.so/my-integrations
2. Set environment variables: NOTION_INTEGRATION_SECRET and NOTION_PAGE_URL
3. Run setup script to create databases with sample content
4. Manage content directly in Notion databases

### API Endpoints
- `GET /api/cms/testimonials` - Fetch testimonials from Notion
- `GET /api/cms/pricing-plans` - Fetch pricing plans from Notion  
- `GET /api/cms/faq` - Fetch FAQ items from Notion

## SEO Optimization

### Meta Tags & Social Sharing
- Complete Open Graph and Twitter Card meta tags
- Structured data for search engines (Organization schema)
- Optimized page titles and descriptions
- Favicon and Apple touch icons

### Performance Features
- Lazy loading images with optimized sizes
- Semantic HTML structure for accessibility
- Mobile-first responsive design
- Fast loading times with Vite optimization

## Deployment

### Replit Deployment
- Site is ready for instant deployment via Replit
- Environment variables configured for Notion CMS (optional)
- Production build process optimized
- Automatic HTTPS and custom domain support

### Alternative Deployment Options
- Vercel: Zero-config deployment with Git integration
- Netlify: Static site deployment with form handling
- Railway: Full-stack deployment with database support

## Changelog

```
Changelog:
- June 27, 2025. Initial setup with complete IPTV website
- June 27, 2025. Added Notion CMS integration for dynamic content
- June 27, 2025. Implemented SEO optimization and meta tags
- June 27, 2025. Prepared for production deployment with documentation
- June 27, 2025. Added PostgreSQL database integration for persistent data storage
- June 27, 2025. Updated contact information to user's business details
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Business contact information:
- Email: zaidisyed000786@gmail.com
- Phone: +92 334 4135174 (Pakistan)
- WhatsApp: +92 334 4135174
```