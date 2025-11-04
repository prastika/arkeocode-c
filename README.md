# Arkeocode Cakravolo Website

A comprehensive website for Arkeocode's precision agriculture drone services, featuring AI-powered computer vision for oil palm plantation monitoring.

## Features

- 🚁 **Cakravolo AI Drone Services** - Automated drone-based yield forecasting
- 📊 **Plantation Readiness Survey** - Intelligent service recommendations
- 🤖 **Computer Vision Demo** - AI object detection demonstration
- 📱 **Mobile App Integration** - Connect to POSI system
- 🎯 **Service Pages** - Comprehensive Monitoring, AI Drone Census, AgriVision System
- 📈 **POSI System** - Real-time plantation monitoring dashboard

## Technology Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- TanStack Query (data fetching)
- Wouter (routing)

**Backend:**
- Express.js + TypeScript
- Multer (file uploads)
- In-memory storage (demo mode)

## Deployment Architecture

This project uses a **hybrid deployment** approach:

```
┌─────────────────────────────────────────┐
│                                         │
│  Frontend (Static Site)                 │
│  → Hostinger Shared Hosting             │
│  → HTML, CSS, JS, Images                │
│                                         │
└────────────┬────────────────────────────┘
             │
             │ API Calls
             │
             ▼
┌─────────────────────────────────────────┐
│                                         │
│  Backend (Serverless Functions)         │
│  → Vercel Free Tier                     │
│  → /api/contact, /api/detect, etc.      │
│                                         │
└─────────────────────────────────────────┘
```

**Benefits:**
- ✅ Cost-effective ($2-4/month total)
- ✅ Simple frontend hosting
- ✅ Serverless backend scaling
- ✅ Easy updates

## Quick Start (Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   - Visit `http://localhost:5000`

## Deployment Guide

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete deployment instructions.

### Quick Deploy Summary

**1. Deploy Backend to Vercel:**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/arkeocode-cakravolo.git
git push -u origin main

# Then deploy on Vercel.com (import from GitHub)
```

**2. Build Frontend:**
```bash
# Create environment file
echo "VITE_API_URL=https://YOUR_VERCEL_URL.vercel.app" > .env.production.local

# Build
npm run build

# Or use helper script
./build-for-hostinger.sh
```

**3. Upload to Hostinger:**
- Upload files from `dist/public/` to `public_html/`
- Create `.htaccess` file for routing
- Done! 🎉

## Project Structure

```
arkeocode-cakravolo/
├── api/                    # Backend for Vercel deployment
│   ├── index.ts           # API routes (contact, detect, survey)
│   └── package.json       # Backend dependencies
├── client/                # Frontend source
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # UI components (shadcn)
│   │   └── lib/          # Utilities & API client
│   └── index.html
├── server/               # Development server (not used in production)
├── shared/              # Shared types between frontend/backend
├── attached_assets/     # Images and media
├── vercel.json         # Vercel deployment config
├── DEPLOYMENT.md       # Deployment guide
└── package.json        # Main dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Run production build locally
- `npm run check` - TypeScript type checking
- `./build-for-hostinger.sh` - Build with deployment helper

## Environment Variables

### Development (.env)
```bash
# Backend runs on same port in dev
# No environment variables needed
```

### Production (.env.production.local)
```bash
VITE_API_URL=https://your-backend.vercel.app
```

## Features in Detail

### 1. Landing Page
- Hero section with brand messaging
- Service offerings overview
- Statistics and benefits
- Contact form

### 2. Cakravolo Workflow
- 5-stage drone operation workflow
- Interactive buttons to demos
- Mobile app integration link

### 3. Service Pages
- **Comprehensive Monitoring** - Spatial analysis (IDR 75k/ha)
- **AI Drone Census** - Real-time counting (IDR 100k/ha)
- **AgriVision System** - Complete platform overview
- **Landing Page Design** - Custom deployment service

### 4. Computer Vision Demo
- Image upload interface
- Simulated AI detection (demo mode)
- Production-ready with YOLO integration path

### 5. Plantation Survey
- 5-question assessment
- Intelligent recommendations
- Service package matching

### 6. POSI System Demo
- Dashboard preview
- Real-time monitoring features
- Mobile app download

## Contact

**Arkeocode**  
Email: arkeocode@gmail.com  
WhatsApp: +62 813-8787-3919  
Address: Jakarta Selatan, Indonesia

## License

© 2024 Arkeocode. All rights reserved.
