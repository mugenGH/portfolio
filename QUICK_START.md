# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies

Open PowerShell or Command Prompt and run:

```bash
cd portfolio
npm install
```

**If you get execution policy errors in PowerShell:**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Or use Command Prompt (cmd) instead.

---

### Step 2: Update Your Information

Edit these files with your details:

#### `src/constants/data.js`
```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  // ... update all fields
};

export const PROJECTS = [
  // Add your projects here
];
```

#### `src/constants/seo.js`
```javascript
// Update SEO metadata
```

---

### Step 3: Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

### Step 4: Test Everything

- ✅ Check all pages load
- ✅ Verify your information is displayed
- ✅ Test on mobile view
- ✅ Check animations work

---

### Step 5: Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📝 Quick Customization

### Change Colors

Edit `src/styles_professional.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Add a Project

Edit `src/constants/data.js`:

```javascript
{
  id: 6,
  name: 'My New Project',
  tagline: 'Short description',
  link: 'https://demo.com',
  github: 'https://github.com/user/repo',
  summary: 'Full description...',
  technologies: ['React', 'Node.js'],
  highlights: ['Feature 1', 'Feature 2'],
  status: 'Live',
  featured: true
}
```

### Update Skills

Edit `src/constants/data.js`:

```javascript
SKILLS: {
  frontend: [
    { name: 'React', level: 90, category: 'Framework' }
  ]
}
```

---

## 🛠️ Available Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
npm run lint     # Check code quality
```

---

## 📚 Documentation

- **README_PROFESSIONAL.md** - Full documentation
- **DEPLOYMENT.md** - Deployment instructions
- **UPGRADE_SUMMARY.md** - What changed

---

## 🆘 Troubleshooting

### Dependencies not installing?
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Routes not working?
- Check `vite.config.js` base path
- Verify router configuration in `main.jsx`

### 3D elements not loading?
- Check internet connection
- Verify Spline URLs are accessible
- Check browser console for errors

---

## ✅ Checklist Before Deploying

- [ ] Updated personal information
- [ ] Added your projects
- [ ] Updated skills
- [ ] Customized colors (optional)
- [ ] Tested all pages
- [ ] Checked mobile responsiveness
- [ ] Verified links work
- [ ] Configured analytics (optional)
- [ ] Updated README with your info

---

## 🎯 Next Steps

1. Personalize the content
2. Add more projects as you build them
3. Share on LinkedIn
4. Add link to your resume
5. Monitor analytics
6. Keep it updated!

---

**Need help? Check the full documentation in README_PROFESSIONAL.md**

Good luck! 🚀
