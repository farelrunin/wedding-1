# 🎉 Wedding Invitation Project - Deployment Guide

Panduan lengkap untuk men-deploy Wedding Invitation Website ke Vercel, Netlify, atau hosting lainnya.

## 📦 Pre-Deployment Checklist

- [ ] Semua data di `src/data/mockData.js` sudah diupdate
- [ ] Foto dan musik sudah diletakkan di folder `public/`
- [ ] Meta tags di `index.html` sudah diupdate
- [ ] Warna dan font sudah disesuaikan (optional)
- [ ] Testing di localhost sudah sempurna: `npm run dev`
- [ ] Build production berhasil: `npm run build`

## 🚀 Deployment Steps

### 1. Vercel (Recommended - Fastest)

**Step-by-step:**

```bash
# Install Vercel CLI (jika belum)
npm install -g vercel

# Di folder project
vercel

# Follow prompts - semuanya bisa di-skip dengan Enter
# Vercel akan otomatis mendetect Vite project
```

**Atau melalui GitHub:**
1. Push code ke GitHub
2. Buka https://vercel.com
3. Klik "New Project"
4. Select repository
5. Klik "Deploy"

### 2. Netlify

**Method 1: Drag & Drop (Paling Mudah)**
```bash
npm run build
# Drag folder `dist/` ke https://app.netlify.com/drop
```

**Method 2: CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login dan deploy
netlify deploy --prod --dir=dist
```

**Method 3: Connect GitHub**
1. Push ke GitHub
2. Buka https://netlify.com
3. Klik "New site from Git"
4. Select repository
5. Deploy

### 3. GitHub Pages

```bash
# Update vite.config.js
# Uncomment: base: '/repository-name/',

npm run build

# Push ke gh-pages branch
npm run deploy
```

### 4. Self-Hosting (VPS/cPanel)

```bash
# Build project
npm run build

# Upload folder `dist/` ke hosting
# Set root directory ke folder `dist/`
# Done!
```

## 🔧 Post-Deployment Configuration

### Custom Domain

**Vercel:**
- Settings → Domains → Add domain

**Netlify:**
- Domain settings → Add custom domain

### SSL Certificate

- Vercel & Netlify: Otomatis (free)
- Self-hosting: Setup Let's Encrypt (free)

### Environment Variables

Buat file `.env.production` untuk config production:

```env
VITE_SITE_URL=https://www.yourdomain.com
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_ENABLE_ANALYTICS=true
```

## 📊 URL Parameters

**Untuk personalisasi guest name:**

```
https://www.yourdomain.com/?to=Nama+Tamu
```

**Contoh share di WhatsApp:**
```
https://wa.me/?text=Assalamu'alaikum,%20undangan%20pernikahan%20kami:%20https://www.yourdomain.com/?to=Bapak+Ahmad
```

## 🔍 Testing Sebelum Deploy

```bash
# Build testing
npm run build

# Preview production build
npm run preview

# Check untuk errors
npm run lint
```

## 📈 Analytics & Tracking

Untuk menambahkan Google Analytics (optional):

1. Tambahkan ke `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. Ganti `GA_ID` dengan ID dari Google Analytics

## 🎯 Performance Optimization

### Image Optimization
```bash
# Install imagemin
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

### Check Performance
- Lighthouse: F12 → Lighthouse Tab
- Target: 90+ score

## 🚨 Troubleshooting Deployment

**Build Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**CSS not loading**
- Check `index.html` untuk link rel
- Vercel/Netlify akan handle otomatis

**Images 404**
- Pastikan path relatif dari root
- Contoh: `/images/photo.jpg` bukan `images/photo.jpg`

**White screen after deploy**
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console untuk errors
- Verify build output di `dist/`

## 📱 Mobile Testing

**Test responsiveness:**
```bash
npm run dev
# Buka di mobile browser atau device simulator
```

**Share & test di messaging apps:**
- WhatsApp, Telegram, Facebook
- Pastikan preview image dan title terlihat

## 🔐 Security Checklist

- [ ] No sensitive data di frontend
- [ ] HTTPS enabled
- [ ] Meta tags sudah di-update
- [ ] robots.txt sudah di-setup (optional)
- [ ] CORS tidak perlu untuk static site

## 📞 Deployment Support

**Common Issues:**

1. **Undefined variable**: Check `.env` file
2. **Font tidak load**: Verify Google Fonts import
3. **Music tidak putar**: Check CORS, use same domain
4. **Slow loading**: Optimize images, check bundle size
5. **Mobile issue**: Test dengan Chrome DevTools mobile view

## 💡 Best Practices

✅ Do:
- Backup kode sebelum deploy
- Test di staging area dulu
- Monitor performance setelah deploy
- Update konten sebelum hari H
- Backup database/localStorage secara berkala

❌ Don't:
- Deploy langsung ke production tanpa test
- Expose sensitive data di frontend
- Gunakan old dependencies
- Neglect mobile testing
- Forget to update meta tags

## 📝 Version Control

```bash
# Setup .gitignore
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo ".env" >> .gitignore

# Initial commit
git init
git add .
git commit -m "Initial commit: Wedding Invitation Website"
git remote add origin https://github.com/yourusername/repo.git
git push -u origin main
```

---

## Support & Help

- 📚 Full docs: [Vite Docs](https://vitejs.dev)
- 🎨 Tailwind: [Tailwind Docs](https://tailwindcss.com)
- ⚛️ React: [React Docs](https://react.dev)
- 🚀 Vercel: [Vercel Docs](https://vercel.com/docs)

**Good luck dengan deployment! 🎉💕**
