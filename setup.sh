#!/bin/bash

# 🚀 Wedding Invitation - Quick Start Script
# This script will help you set up the project quickly

echo "🎉 Wedding Invitation Setup Wizard"
echo "===================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed"
fi

echo ""
echo "📁 Creating necessary folders..."

# Create image and music folders
mkdir -p public/images
mkdir -p public/music

echo "✅ Folders created"
echo ""
echo "📝 Next steps:"
echo "1. Add your photos to:"
echo "   - public/images/groom.jpg"
echo "   - public/images/bride.jpg"
echo "   - public/images/gallery-1.jpg, gallery-2.jpg, etc."
echo "   - public/images/qris.jpg"
echo "   - public/images/og-image.jpg"
echo ""
echo "2. Add background music to:"
echo "   - public/music/romantic.mp3"
echo ""
echo "3. Edit your data in:"
echo "   - src/data/mockData.js"
echo ""
echo "4. Update SEO tags in:"
echo "   - index.html"
echo ""
echo "5. Start development:"
echo "   npm run dev"
echo ""
echo "6. Build for production:"
echo "   npm run build"
echo ""
echo "7. Deploy:"
echo "   vercel (for Vercel)"
echo "   netlify deploy --prod --dir=dist (for Netlify)"
echo ""
echo "❓ For more details, see:"
echo "   - README.md"
echo "   - CUSTOMIZATION_GUIDE.md"
echo "   - DEPLOYMENT_GUIDE.md"
echo ""
echo "Happy Wedding! 💕"
