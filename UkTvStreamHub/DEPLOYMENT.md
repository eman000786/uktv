# Deployment Guide - UK Streaming TV

## 🚀 Quick Deploy (Replit)

1. **Fork this Repl** or import the code
2. **Click "Deploy"** in the Replit interface
3. **Your site is live!** - Access via your custom `.replit.app` domain

## 🎯 Live Demo

Once deployed, your site will be available at:
- `https://your-repl-name.your-username.replit.app`

## 📊 Optional: Notion CMS Setup

Transform your static site into a dynamic CMS-powered website:

### Step 1: Create Notion Integration

1. Visit [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name: "UK Streaming TV CMS"
4. Copy the **Integration Secret**

### Step 2: Prepare Notion Page

1. Create a new Notion page (or use existing)
2. Click "..." → "Connections" → Add your integration
3. Copy the **page URL**

### Step 3: Configure Secrets

In Replit, go to **Secrets** tab and add:

```
NOTION_INTEGRATION_SECRET = your_integration_secret_here
NOTION_PAGE_URL = https://www.notion.so/your-page-url-here
```

### Step 4: Initialize CMS

Run this command in the Shell:

```bash
tsx server/setup-notion.ts
```

This creates three databases in your Notion page with sample content:

#### 📝 **Testimonials Database**
- **Name**: Customer name
- **Location**: Customer location  
- **Review**: Review text
- **Rating**: 1-5 stars
- **Active**: Show/hide toggle

#### 💰 **Pricing Plans Database**
- **Name**: Plan name (e.g., "1 Month Plan")
- **Price**: Display price (e.g., "£15.00")
- **Period**: Billing period (e.g., "per month")
- **Savings**: Savings text (e.g., "Save £50")
- **Popular**: Mark as featured plan
- **PlanId**: Internal identifier (e.g., "1-month")
- **Active**: Show/hide toggle

#### ❓ **FAQ Database**
- **Question**: FAQ question
- **Answer**: FAQ answer
- **Order**: Display order (1, 2, 3...)
- **Active**: Show/hide toggle

### Step 5: Manage Content

After setup, manage all content directly in Notion:

1. **Add testimonials**: Create new entries in the Testimonials database
2. **Update pricing**: Modify prices and savings in Pricing Plans database
3. **Edit FAQs**: Add, edit, or reorder questions in FAQ database
4. **Toggle visibility**: Use the "Active" checkbox to show/hide content

Content changes appear instantly on your live website!

## 🌐 Alternative Deployments

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist/public`

### Railway
1. Connect your Git repository
2. Set environment variables
3. Deploy automatically

## 📱 Domain Setup

### Custom Domain (Replit)
1. Go to your Repl settings
2. Navigate to "Hosting"
3. Add your custom domain
4. Update DNS records as instructed

### Free Subdomains
Your site includes these free options:
- `your-repl.your-username.replit.app`
- `your-app.vercel.app`
- `your-site.netlify.app`

## 🔧 Configuration

### Environment Variables

```env
# Optional: Notion CMS
NOTION_INTEGRATION_SECRET=your_secret_here
NOTION_PAGE_URL=https://www.notion.so/your-page-url

# Auto-configured by platform
NODE_ENV=production
PORT=5000
```

### WhatsApp Integration

Update the WhatsApp number in:
- `client/src/components/FloatingButtons.tsx`
- `client/src/components/Header.tsx`
- `client/src/components/Footer.tsx`

Change `+923344135174` to your business number.

## 🚀 Performance Features

✅ **Fast Loading**: Vite optimized build
✅ **Mobile Responsive**: Works on all devices  
✅ **SEO Optimized**: Complete meta tags and structured data
✅ **Social Sharing**: Open Graph and Twitter cards
✅ **Progressive Enhancement**: Works without JavaScript

## 📊 Analytics & Monitoring

Add these services for insights:
- **Google Analytics**: Add tracking code to `index.html`
- **Hotjar**: User behavior analytics
- **Crisp Chat**: Live chat support
- **Uptime monitoring**: Monitor site availability

## 🎨 Customization

### Branding
- **Logo**: Replace in `Header.tsx` and `Footer.tsx`
- **Colors**: Update CSS variables in `index.css`
- **Content**: Edit components or use Notion CMS

### Features
- **Payment Integration**: Add Stripe/PayPal to pricing plans
- **User Accounts**: Implement authentication system
- **Blog**: Add blog section with Notion CMS
- **Live Chat**: Integrate customer support tools

## 🛡️ Security

✅ **HTTPS**: Automatic with all platforms
✅ **Input Validation**: Zod schema validation
✅ **XSS Protection**: React built-in protection
✅ **CSRF Protection**: Express session handling

## 📈 Marketing Checklist

- [ ] Google Business listing
- [ ] Social media accounts setup
- [ ] SEO keywords optimization
- [ ] Google Search Console
- [ ] Local directory listings
- [ ] Customer review management

## 🆘 Support

For technical issues:
1. Check the console for errors
2. Verify environment variables
3. Test API endpoints
4. Review deployment logs

Your professional IPTV website is now live and ready to attract customers!