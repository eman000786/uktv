# UK Streaming TV - IPTV Service Website

A professional IPTV service website with modern responsive design, pricing plans, and optional Notion CMS integration.

## Features

- 🎯 **Professional Design**: Modern, responsive layout with red/black color scheme
- 📱 **Mobile-First**: Fully responsive across all devices
- 🚀 **Fast Loading**: Optimized for performance and SEO
- 💬 **WhatsApp Integration**: Floating support button with direct messaging
- 📊 **Contact Forms**: Backend integration for lead capture
- 🎨 **Notion CMS**: Optional content management via Notion databases
- 🔍 **SEO Ready**: Complete meta tags, structured data, and sitemap

## Quick Start

1. **Clone and Install**
   ```bash
   npm install
   npm run dev
   ```

2. **Access the Site**
   - Development: http://localhost:5000
   - The site will work immediately with default content

## Notion CMS Setup (Optional)

To enable dynamic content management through Notion:

### 1. Create Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "UK Streaming TV CMS")
4. Copy the integration secret

### 2. Set Up Notion Page

1. Create a new page in Notion (or use existing)
2. Click the "..." menu → "Connections" → Add your integration
3. Copy the page URL

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
NOTION_INTEGRATION_SECRET=your_integration_secret_here
NOTION_PAGE_URL=https://www.notion.so/your-page-url-here
```

### 4. Initialize Notion Databases

Run the setup script to create the CMS databases:

```bash
npm run setup-notion
```

This creates three databases in your Notion page:
- **Testimonials**: Customer reviews and ratings
- **Pricing Plans**: Dynamic pricing configuration
- **FAQ**: Frequently asked questions

### 5. Managing Content

Once set up, you can manage content directly in Notion:

**Testimonials Database:**
- Name: Customer name
- Location: Customer location
- Review: Review text
- Rating: Star rating (1-5)
- Active: Show/hide testimonial

**Pricing Plans Database:**
- Name: Plan name (e.g., "1 Month Plan")
- Price: Display price (e.g., "£15.00")
- Period: Billing period (e.g., "per month")
- Savings: Savings text (e.g., "Save £50")
- Popular: Mark as popular plan
- PlanId: Internal identifier
- Active: Show/hide plan

**FAQ Database:**
- Question: FAQ question
- Answer: FAQ answer
- Order: Display order (1, 2, 3...)
- Active: Show/hide FAQ item

## Deployment

### Replit Deployment

1. Connect your Replit to this repository
2. Set environment variables in Replit Secrets:
   - `NOTION_INTEGRATION_SECRET` (if using Notion CMS)
   - `NOTION_PAGE_URL` (if using Notion CMS)
3. Click "Deploy" in Replit

### Other Platforms

The site is configured for easy deployment to:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository and deploy
- **Railway**: Connect repository and deploy

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages
│   │   ├── lib/          # Utilities and API client
│   │   └── hooks/        # Custom React hooks
│   └── public/           # Static assets
├── server/               # Backend Express application
│   ├── notion.ts         # Notion CMS integration
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage layer
├── shared/               # Shared types and schemas
└── package.json          # Dependencies and scripts
```

## Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run setup-notion # Initialize Notion CMS databases
```

## SEO Features

- Complete meta tags for social sharing
- Structured data for search engines
- Optimized images and lazy loading
- Semantic HTML structure
- Mobile-first responsive design
- Fast loading times

## Customization

### Colors and Branding

Edit `client/src/index.css` to customize:
- Brand colors (CSS variables)
- Typography
- Component styles

### Content

- **Static Content**: Edit React components directly
- **Dynamic Content**: Use Notion CMS (when configured)
- **Contact Info**: Update phone numbers and links in components

### Features

- **WhatsApp Number**: Update in `FloatingButtons.tsx` and `Header.tsx`
- **Pricing**: Modify plans in `Pricing.tsx` or use Notion CMS
- **Testimonials**: Edit in `Home.tsx` or use Notion CMS

## Support

For technical support or customization requests, contact the development team.

## License

All rights reserved. This is a commercial project template.