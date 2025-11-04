# Deployment Checklist

Use this checklist to deploy your Arkeocode website step by step.

## ☑️ Pre-Deployment

- [ ] GitHub account created
- [ ] Vercel account created (sign up at vercel.com with GitHub)
- [ ] Hostinger shared hosting active
- [ ] FileZilla or FTP client installed
- [ ] Code is working in Replit (test all features)

---

## 📤 Part 1: Backend to Vercel (30 minutes)

### Step 1: Push to GitHub

- [ ] Create new repository on GitHub named `arkeocode-cakravolo`
- [ ] In Replit, open the Git pane (left sidebar)
- [ ] Stage all files
- [ ] Commit with message: "Initial deployment"
- [ ] Connect to your GitHub repository
- [ ] Push to GitHub

**Alternative (Shell):**
```bash
git init
git add .
git commit -m "Initial deployment"
git remote add origin https://github.com/YOUR_USERNAME/arkeocode-cakravolo.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub
- [ ] Click "Add New..." → "Project"
- [ ] Select your `arkeocode-cakravolo` repository
- [ ] Click "Import"
- [ ] Leave all settings as default
- [ ] Click "Deploy"
- [ ] Wait for deployment (2-3 minutes)
- [ ] **COPY YOUR VERCEL URL** (e.g., `https://arkeocode-cakravolo.vercel.app`)

### Step 3: Test Backend

- [ ] Visit: `https://YOUR_VERCEL_URL.vercel.app/api/health`
- [ ] Should see: `{"status":"ok","service":"arkeocode-backend"}`
- [ ] If not working, check Vercel deployment logs

---

## 🏗️ Part 2: Build Frontend (10 minutes)

### Step 1: Configure Environment

- [ ] In Replit, create file `.env.production.local`
- [ ] Add this line (replace with YOUR Vercel URL):
   ```
   VITE_API_URL=https://your-actual-vercel-url.vercel.app
   ```
- [ ] Save the file

### Step 2: Build

**Option A: Using helper script (recommended)**
```bash
./build-for-hostinger.sh
```

**Option B: Manual build**
```bash
npm install
npm run build
```

- [ ] Build completed successfully
- [ ] Check that `dist/public/` folder exists
- [ ] Folder contains: `index.html`, `assets/`, images, etc.

### Step 3: Download Build Files

- [ ] In Replit, download the entire `dist/public` folder as ZIP
- [ ] Extract ZIP on your computer
- [ ] You should have a folder with all website files

---

## 📤 Part 3: Upload to Hostinger (15 minutes)

### Step 1: Connect via FTP

- [ ] Open FileZilla
- [ ] Get FTP credentials from Hostinger hPanel:
  - Go to hPanel → Hosting → Manage
  - Look for "FTP Accounts" or "File Manager"
  - Note: Host, Username, Password
- [ ] In FileZilla:
  - **Host**: ftp.yourdomain.com (or IP from hPanel)
  - **Username**: Your FTP username
  - **Password**: Your FTP password
  - **Port**: 21
- [ ] Click "Quickconnect"
- [ ] Should connect successfully

### Step 2: Upload Files

- [ ] On right side (remote), navigate to `public_html/` folder
- [ ] Delete default files (index.html, default images) if they exist
- [ ] On left side (local), navigate to your extracted `dist/public` folder
- [ ] Select ALL files and folders
- [ ] Right-click → Upload
- [ ] Wait for upload to complete (may take 5-10 minutes)
- [ ] Verify all files uploaded:
  - [ ] index.html
  - [ ] assets/ folder
  - [ ] All image files
  - [ ] favicon.ico (if exists)

### Step 3: Create .htaccess File

- [ ] Right-click in `public_html/` → Create file
- [ ] Name it `.htaccess` (yes, with the dot)
- [ ] Right-click → Edit
- [ ] Paste this content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```
- [ ] Save and close

### Step 4: Set Permissions (if needed)

- [ ] Select all uploaded files
- [ ] Right-click → File permissions
- [ ] Set to **644** for files
- [ ] Set to **755** for directories
- [ ] Click OK

---

## ✅ Part 4: Testing (10 minutes)

### Test Your Website

- [ ] Visit your domain: `https://yourdomain.com`
- [ ] Home page loads correctly
- [ ] Navigate to "Cakravolo" page
- [ ] Click "Service" dropdown
- [ ] Visit each service page:
  - [ ] Comprehensive Monitoring
  - [ ] AI Drone Census  
  - [ ] AgriVision System
  - [ ] Landing Page Design
- [ ] Test "Computer Vision Demo"
  - [ ] Upload an image
  - [ ] Should show simulated detections
- [ ] Test "Plantation Readiness Survey"
  - [ ] Complete all questions
  - [ ] Should show recommendation
- [ ] Visit "POSI System Demo"
- [ ] Test "Drone Specifications"

### Test Contact Form

- [ ] Fill out contact form
- [ ] Submit
- [ ] Check browser console (F12) for errors
- [ ] If working, you'll see success message

### Check for Errors

- [ ] Press F12 → Console tab
- [ ] Look for red errors
- [ ] Common issues:
  - **CORS errors**: Backend needs updating (see below)
  - **404 for /api/...**: Check VITE_API_URL in build
  - **Images not loading**: Check file paths/permissions

---

## 🐛 Troubleshooting

### CORS Errors

If you see "CORS policy blocked" in console:

- [ ] This is normal - Vercel backend needs CORS configuration
- [ ] Go to Vercel dashboard → Your Project → Settings
- [ ] Add Environment Variable:
  - Key: `ALLOWED_ORIGINS`
  - Value: `https://yourdomain.com`
- [ ] Redeploy backend
- [ ] Wait 2 minutes and test again

### Images Not Loading

- [ ] Verify all files in `attached_assets/` were included in build
- [ ] Check file names are correct (case-sensitive)
- [ ] Check file permissions (644)

### Routes Not Working (404 errors)

- [ ] Verify `.htaccess` file exists in `public_html/`
- [ ] Check file content is correct
- [ ] Contact Hostinger support to enable mod_rewrite

### API Not Responding

- [ ] Test backend directly: `https://YOUR_VERCEL_URL.vercel.app/api/health`
- [ ] If that works, check your `.env.production.local` setting
- [ ] Rebuild frontend with correct VITE_API_URL
- [ ] Re-upload to Hostinger

---

## 🔄 Making Updates

### Update Frontend Only

1. [ ] Make changes in Replit
2. [ ] Run `npm run build`
3. [ ] Download `dist/public` folder
4. [ ] Upload to Hostinger via FTP
5. [ ] Clear browser cache and test

### Update Backend Only

1. [ ] Make changes in Replit
2. [ ] Commit and push to GitHub
3. [ ] Vercel auto-deploys (or click "Redeploy" in Vercel dashboard)
4. [ ] Test API endpoints
5. [ ] No need to update frontend

### Update Both

Follow both procedures above!

---

## 📊 Success Criteria

Your deployment is successful when:

- [x] Website loads at your domain
- [x] All pages accessible
- [x] All images load correctly
- [x] Contact form submits (check console for success)
- [x] Computer Vision Demo accepts uploads
- [x] Survey gives recommendations
- [x] No console errors (except expected demo warnings)
- [x] Mobile responsive (test on phone)
- [x] Links to WhatsApp/Mobile App Demo work

---

## 📞 Need Help?

- **Vercel Issues**: https://vercel.com/docs
- **Hostinger Issues**: https://support.hostinger.com
- **Email**: arkeocode@gmail.com

---

## 💰 Cost Summary

| Item | Cost |
|------|------|
| Hostinger Shared Hosting | $2-4/month |
| Vercel Free Tier | $0/month |
| Domain (if buying new) | $10-15/year |
| **Monthly Total** | **$2-4** |

---

## ⏱️ Time Estimate

- Part 1 (Backend): 30 minutes
- Part 2 (Build): 10 minutes  
- Part 3 (Upload): 15 minutes
- Part 4 (Testing): 10 minutes
- **Total**: ~65 minutes (first time)

Updates later: 5-10 minutes each

---

**Good luck! 🚀**
