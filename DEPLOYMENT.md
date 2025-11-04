# Arkeocode Deployment Guide

This guide will help you deploy the Arkeocode website using a hybrid approach:
- **Frontend**: Hostinger Shared Hosting (static files)
- **Backend**: Vercel Free Tier

## Prerequisites

1. GitHub account
2. Vercel account (sign up at vercel.com)
3. Hostinger shared hosting account
4. FileZilla or similar FTP client

---

## Part 1: Deploy Backend to Vercel

### Step 1: Push Code to GitHub

1. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it `arkeocode-cakravolo`
   - Make it public or private
   - Don't initialize with README (we already have code)

2. **Initialize Git in your Replit project** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/arkeocode-cakravolo.git
   git branch -M main
   git push -u origin main
   ```

   Or use Replit's built-in Git pane (see sidebar).

### Step 2: Deploy Backend on Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import your repository**:
   - Click "Add New..." → "Project"
   - Select your `arkeocode-cakravolo` repository
   - Click "Import"

3. **Configure the project**:
   - **Framework Preset**: Other
   - **Root Directory**: Leave as `./` (root)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `cd api && npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your Vercel URL (e.g., `https://arkeocode-cakravolo.vercel.app`)

### Step 3: Test Backend API

Visit these URLs to verify:
- `https://YOUR_VERCEL_URL.vercel.app/api/health` - Should return `{"status":"ok"}`

---

## Part 2: Build Frontend for Hostinger

### Step 1: Update Frontend Configuration

1. **Create `.env.production.local` file** in your project root:
   ```
   VITE_API_URL=https://YOUR_VERCEL_URL.vercel.app
   ```
   Replace `YOUR_VERCEL_URL` with your actual Vercel deployment URL.

2. **Build the frontend**:
   ```bash
   npm run build
   ```

   This creates a `dist/public` folder with your static files.

### Step 2: Upload to Hostinger

1. **Connect via FTP**:
   - Open FileZilla
   - Host: Your Hostinger FTP host (found in hPanel)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
   - Click "Quickconnect"

2. **Upload files**:
   - Navigate to `public_html` folder on the remote server
   - Delete default files (index.html, etc.)
   - Upload ALL files from your local `dist/public` folder
   - Make sure `index.html`, `assets/` folder, and all other files are uploaded

3. **Set permissions** (if needed):
   - Right-click uploaded files → File permissions
   - Set to 644 for files, 755 for directories

### Step 3: Configure .htaccess for React Router

Create a `.htaccess` file in `public_html`:

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

This ensures routes like `/cakravolo` work correctly.

---

## Part 3: Verify Deployment

1. **Test your website**:
   - Visit `https://yourdomain.com`
   - Navigate through all pages
   - Test the contact form
   - Try the Computer Vision Demo (upload an image)
   - Complete the Plantation Readiness Survey

2. **Check browser console**:
   - Press F12 → Console tab
   - Look for any errors (especially CORS or API errors)
   - If you see CORS errors, the backend needs updating

---

## Troubleshooting

### CORS Errors

If you see "CORS policy" errors in the browser console:

1. Go to your Vercel dashboard
2. Navigate to your project → Settings → Environment Variables
3. Add:
   - Key: `ALLOWED_ORIGINS`
   - Value: `https://yourdomain.com,https://www.yourdomain.com`
4. Redeploy the backend

### Images Not Loading

- Make sure all files in `attached_assets` folder are uploaded
- Check that paths are correct (case-sensitive)
- Verify file permissions (644 for files)

### Contact Form/Survey Not Working

- Open browser console (F12)
- Check Network tab for failed requests
- Verify the `VITE_API_URL` is correctly set in your build
- Test backend directly: `https://YOUR_VERCEL_URL.vercel.app/api/health`

### Computer Vision Demo Shows Error

This is expected! The demo shows:
- ✅ **Upload functionality works** (frontend)
- ✅ **Backend receives image** (API working)
- ⚠️ **Simulated detections** (actual YOLO model requires Python setup)

For production AI detection, you'd need to:
1. Deploy Python backend separately (Railway, Render, or dedicated server)
2. Install PyTorch + Ultralytics
3. Update the detection endpoint

---

## Updating Your Site

### Update Frontend Only

1. Make changes in Replit
2. Run `npm run build`
3. Upload new files from `dist/public` to Hostinger via FTP

### Update Backend Only

1. Make changes in Replit
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update backend"
   git push
   ```
3. Vercel auto-deploys from GitHub (or trigger manual deploy in dashboard)

### Update Both

Do both steps above!

---

## Cost Breakdown

| Service | Plan | Cost |
|---------|------|------|
| Hostinger Shared Hosting | Single/Premium | $2-4/month |
| Vercel | Free Tier | $0/month |
| **Total** | | **$2-4/month** |

**Vercel Free Tier Limits**:
- 100 GB bandwidth/month
- Unlimited API requests
- Perfect for small-medium traffic sites

---

## Alternative: Deploy Both to Vercel (Optional)

If you want to avoid Hostinger shared hosting entirely:

1. Deploy as described above
2. Vercel automatically serves the frontend from `dist/public`
3. Use your Vercel URL as your main site
4. Point your custom domain to Vercel in DNS settings

Benefits:
- One platform for everything
- Automatic HTTPS
- No FTP needed
- Free tier available

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Hostinger Support: https://support.hostinger.com
- Contact: arkeocode@gmail.com
