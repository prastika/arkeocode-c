# Quick Start Guide - Arkeocode Deployment

## 🎯 Your Goal
Deploy your Arkeocode website with:
- **Frontend**: Static files on Hostinger shared hosting
- **Backend**: Serverless API on Vercel (free)

## 📋 What I've Set Up For You

✅ **Backend API** (`api/index.ts`)
- Contact form endpoint
- Computer Vision detection endpoint
- Survey recommendation endpoint
- Health check endpoint

✅ **Frontend Configuration** (`client/src/lib/queryClient.ts`)
- Updated to use environment variables
- Will connect to your Vercel backend URL

✅ **Deployment Files**
- `vercel.json` - Vercel configuration
- `api/package.json` - Backend dependencies
- `.gitignore` - Prevents secrets from being committed
- `.env.example` - Template for environment variables

✅ **Helper Scripts**
- `build-for-hostinger.sh` - Automated build script

✅ **Documentation**
- `README.md` - Project overview
- `DEPLOYMENT.md` - Complete deployment guide
- `DEPLOYMENT-CHECKLIST.md` - Step-by-step checklist

## 🚀 Deployment in 3 Steps

### Step 1: Deploy Backend to Vercel (15 min)

1. Push your code to GitHub (use Replit's Git pane or shell)
2. Go to https://vercel.com and sign in with GitHub
3. Import your repository and deploy
4. **Copy your Vercel URL** (e.g., `https://arkeocode-xyz.vercel.app`)

### Step 2: Build Frontend (5 min)

1. Create `.env.production.local` file:
   ```bash
   VITE_API_URL=https://YOUR_VERCEL_URL.vercel.app
   ```

2. Run build script:
   ```bash
   ./build-for-hostinger.sh
   ```

3. Download the `dist/public` folder

### Step 3: Upload to Hostinger (15 min)

1. Connect via FTP (FileZilla)
2. Upload all files from `dist/public/` to `public_html/`
3. Create `.htaccess` file (see DEPLOYMENT.md)
4. Done! 🎉

## 📚 Which Guide to Use?

| Document | When to Use |
|----------|-------------|
| **QUICK-START.md** (this file) | Overview and next steps |
| **DEPLOYMENT-CHECKLIST.md** | Step-by-step deployment (start here!) |
| **DEPLOYMENT.md** | Detailed technical guide + troubleshooting |
| **README.md** | Project information and features |

## ⚡ Fastest Path

1. **Read this**: `DEPLOYMENT-CHECKLIST.md` ← Start here!
2. **Follow the checkboxes**: Each step has a checkbox
3. **Test everything**: Checklist includes testing section
4. **Get help if stuck**: See troubleshooting section

## 💡 Key Things to Know

**Environment Variables:**
- In development: Backend runs on same server (no config needed)
- In production: Frontend needs to know backend URL
- Set via `.env.production.local` file (see `.env.example`)

**Two Separate Deployments:**
- Backend = Vercel (handles /api/* routes)
- Frontend = Hostinger (serves HTML/CSS/JS)
- They communicate via HTTPS

**Cost:**
- Hostinger: $2-4/month (you already have this)
- Vercel: $0/month (free tier, plenty for your needs)

**What Works in Demo Mode:**
- ✅ All page navigation
- ✅ Contact form (logs to Vercel)
- ✅ Survey recommendations
- ✅ Computer Vision Demo (simulated detections)
- ⚠️ Real AI detection requires Python backend (future upgrade)

## 🆘 Quick Troubleshooting

**"CORS error in console"**
→ Add your domain to Vercel environment variables (see DEPLOYMENT.md)

**"Images not loading"**
→ Check that `attached_assets/` files were uploaded via FTP

**"API not responding"**
→ Verify VITE_API_URL in `.env.production.local` is correct

**"Routes give 404"**
→ Create `.htaccess` file in public_html/

## 📞 Support

- Email: arkeocode@gmail.com
- WhatsApp: +62 813-8787-3919

## ✅ Next Steps

👉 **Open `DEPLOYMENT-CHECKLIST.md` and start checking boxes!**

That's the easiest way to deploy your site successfully.

Good luck! 🚀
