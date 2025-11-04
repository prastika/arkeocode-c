#!/bin/bash

# Arkeocode - Build Script for Hostinger Deployment
# This script builds the frontend for static hosting

echo "🚀 Building Arkeocode for Hostinger..."
echo ""

# Check if .env.production.local exists
if [ ! -f .env.production.local ]; then
  echo "⚠️  Warning: .env.production.local not found!"
  echo "Creating template file..."
  echo "VITE_API_URL=https://your-backend.vercel.app" > .env.production.local
  echo ""
  echo "📝 Please edit .env.production.local and add your Vercel backend URL"
  echo "Then run this script again."
  exit 1
fi

echo "✅ Environment file found"
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔨 Building frontend..."
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Build successful!"
  echo ""
  echo "📁 Your static files are in: dist/public/"
  echo ""
  echo "Next steps:"
  echo "1. Open FileZilla (or your FTP client)"
  echo "2. Connect to your Hostinger account"
  echo "3. Navigate to public_html/"
  echo "4. Upload ALL files from dist/public/"
  echo "5. Create .htaccess file (see DEPLOYMENT.md)"
  echo ""
  echo "📖 Full instructions: See DEPLOYMENT.md"
else
  echo ""
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi
