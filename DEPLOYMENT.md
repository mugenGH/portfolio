# Deployment Guide - Professional Portfolio

This guide provides step-by-step instructions for deploying your professional portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Update personal information in `src/constants/data.js`
- [ ] Add your projects and accomplishments
- [ ] Customize colors and theme in `src/constants/theme.js`
- [ ] Update SEO metadata in `src/constants/seo.js`
- [ ] Add Google Analytics ID in `src/utils/analytics.js`
- [ ] Test locally with `npm run build && npm run preview`
- [ ] Check for console errors and warnings
- [ ] Test on mobile devices
- [ ] Validate accessibility
- [ ] Optimize images in `/public` folder

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

**Prerequisites:**
- GitHub account
- Repository pushed to GitHub

**Steps:**

1. **Install gh-pages** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Ensure these scripts exist:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio/",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Your repo name
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch as source
   - Your site will be live at `https://yourusername.github.io/portfolio/`

**Updating:**
```bash
npm run deploy
```

---

### Option 2: Vercel

**Prerequisites:**
- Vercel account (free)
- GitHub repository

**Steps:**

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web Interface:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
   - Click "Deploy"

3. **Or Deploy via CLI:**
   ```bash
   vercel
   ```

**Custom Domain:**
- Go to project settings
- Add your custom domain
- Update DNS records as shown

**Automatic Deployments:**
- Commits to `main` branch automatically deploy
- Pull requests get preview deployments

---

### Option 3: Netlify

**Prerequisites:**
- Netlify account (free)
- GitHub repository

**Steps:**

1. **Deploy via Web Interface:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure:
     - Build Command: `npm run build`
     - Publish Directory: `dist`
   - Click "Deploy site"

2. **Or Deploy via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

3. **Create netlify.toml** (optional):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

**Custom Domain:**
- Go to "Domain settings"
- Add custom domain
- Update DNS records

---

### Option 4: Firebase Hosting

**Prerequisites:**
- Firebase account
- Firebase CLI

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select or create project
   - Set public directory to `dist`
   - Configure as single-page app: `Yes`
   - Don't overwrite index.html

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

**Update firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

### Option 5: AWS S3 + CloudFront

**Prerequisites:**
- AWS account
- AWS CLI configured

**Steps:**

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

2. **Enable Static Website Hosting**
   ```bash
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```

3. **Build and Upload**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-portfolio-bucket
   ```

4. **Set Bucket Policy** (make public):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
       }
     ]
   }
   ```

5. **Optional: CloudFront CDN**
   - Create CloudFront distribution
   - Point to S3 bucket origin
   - Configure custom domain with SSL

---

## 🔧 Environment Variables

For production environments, create `.env.production`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_API_BASE_URL=https://api.yoursite.com
```

Access in code:
```javascript
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
```

---

## 🌐 Custom Domain Setup

### DNS Configuration

For most providers, add these records:

**For root domain (example.com):**
```
A Record: @ → Server IP
```

**For subdomain (portfolio.example.com):**
```
CNAME: portfolio → your-deployment-url
```

### Vercel/Netlify:
Follow their dashboard instructions for custom domains.

### GitHub Pages:
1. Add `CNAME` file to `/public` folder with your domain
2. Configure DNS as shown above
3. Enable HTTPS in repository settings

---

## 📊 Post-Deployment

### 1. Verify Deployment
- [ ] Check all pages load correctly
- [ ] Test navigation
- [ ] Verify 3D elements load
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

### 2. SEO Setup

**Google Search Console:**
1. Add your property
2. Verify ownership
3. Submit sitemap (if created)

**Google Analytics:**
1. Update measurement ID in code
2. Verify tracking is working

### 3. Performance Testing

**Tools to use:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Target Metrics:**
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 300ms

### 4. Security Headers

Add these headers in your hosting platform:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

**Netlify (_headers file):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🆘 Troubleshooting

### Issue: Routes not working after deployment

**Solution:** Ensure proper redirect rules for SPA:

**Netlify (_redirects file):**
```
/*    /index.html   200
```

**Vercel (vercel.json):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Issue: Assets not loading

**Solution:** Check `base` path in `vite.config.js` matches your deployment URL.

### Issue: 3D elements not loading

**Solution:** 
- Check CORS settings
- Verify Spline URLs are accessible
- Check browser console for errors

---

## 📞 Support

If you encounter issues:
1. Check deployment platform documentation
2. Review build logs for errors
3. Test locally first with `npm run preview`
4. Open an issue on GitHub

---

## ✅ Final Checklist

Before going live:
- [ ] All personal information updated
- [ ] Projects are current and accurate
- [ ] Links are working
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Analytics configured
- [ ] Performance optimized
- [ ] Accessibility verified
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled

---

**Congratulations! Your professional portfolio is now live! 🎉**

Don't forget to share it:
- LinkedIn profile
- GitHub README
- Resume
- Email signature
- Social media
