# Vercel Deployment Guide

## Quick Deploy

### Option 1: GitHub Integration (Recommended)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect the configuration and deploy
5. Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: (your choice)
# - In which directory is your code? ./
# - Want to override settings? N
```

## Configuration Files

### vercel.json
The project includes a `vercel.json` file with optimal settings:
```json
{
  "buildCommand": "npx vite build",
  "outputDirectory": "dist/public",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### .vercelignore
Excludes unnecessary files from deployment:
- Server-side code (since this is now static)
- Node modules
- Development files

## Build Process

The deployment uses:
1. **Build Command**: `npx vite build`
2. **Output**: Static files in `dist/public/`
3. **Assets**: Optimized CSS and JavaScript bundles
4. **Routing**: SPA routing handled by rewrites

## Verification

After deployment:
1. Check that all sections load properly
2. Test navigation between sections
3. Verify external links (GitHub, LinkedIn, live demos)
4. Test on mobile devices for responsiveness

## Custom Domain (Optional)

To use a custom domain:
1. Go to your project dashboard on Vercel
2. Click "Domains" tab
3. Add your custom domain
4. Update your DNS records as instructed

## Performance

The deployed site includes:
- **Code Splitting**: Optimized bundle sizes
- **Asset Compression**: Gzip compression enabled
- **CDN**: Global content delivery network
- **Caching**: Optimal cache headers for static assets

## Troubleshooting

**Build fails**: Check that all dependencies are in package.json
**404 errors**: Verify vercel.json rewrites are configured
**Assets not loading**: Check asset paths in the built files

---

Your portfolio is now ready for professional deployment on Vercel! 🚀