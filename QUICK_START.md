# ⚡ Quick Start - Wedding Invitation Website

Panduan cepat untuk mulai menggunakan wedding invitation website.

## 1️⃣ Installation (5 menit)

```bash
cd wedding-invitation
npm install
```

## 2️⃣ Add Your Files

### Folder Structure
```
public/
├── images/
│   ├── groom.jpg              # Foto pria
│   ├── bride.jpg              # Foto wanita
│   ├── gallery-1.jpg          # Galeri
│   ├── gallery-2.jpg
│   ├── qris.jpg               # QRIS code
│   └── og-image.jpg           # Social media preview
└── music/
    └── romantic.mp3            # Background music
```

## 3️⃣ Customize Data

Edit: `src/data/mockData.js`

```javascript
// Ganti data ini:
couple: {
  groom: {
    fullName: 'NAMA PRIA',
    nickName: 'PANGGILAN',
    father: 'NAMA AYAH',
    mother: 'NAMA IBU',
    // ...
  }
}

events: [
  {
    name: 'Akad Nikah',
    date: '2024-12-15T09:00:00',  // Ganti tanggal
    location: 'LOKASI ANDA',
    // ...
  }
]
```

## 4️⃣ Test Locally

```bash
npm run dev
```

Buka: `http://localhost:5173`

## 5️⃣ Deploy

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder "dist" ke netlify.com
```

## ✨ Features Ready to Use

✅ Envelope dengan animasi 3D
✅ Countdown timer
✅ Photo gallery dengan lightbox
✅ Guest book & RSVP
✅ Bank accounts & QRIS
✅ Background music
✅ Mobile responsive
✅ Dark mode
✅ SEO optimized

## 📝 Important Files to Edit

| File | What to Change |
|------|---|
| `src/data/mockData.js` | Names, dates, photos, bank accounts |
| `index.html` | SEO meta tags, title, description |
| `tailwind.config.js` | Colors (optional) |
| `src/index.css` | Custom fonts (optional) |

## 🔗 Share with Guests

```
https://yourwebsite.com/?to=Nama+Tamu
```

Akan otomatis mengubah nama di sampul undangan.

## 📚 Full Documentation

- **README.md** - Complete guide
- **CUSTOMIZATION_GUIDE.md** - How to customize colors, fonts, etc
- **DEPLOYMENT_GUIDE.md** - Various deployment options
- **PROJECT_SUMMARY.md** - Full project overview

## 🆘 Troubleshooting

**Musik tidak putar?**
- Cek file ada di `public/music/`
- Cek nama file di `mockData.js` benar

**Gambar tidak terlihat?**
- Cek file ada di `public/images/`  
- Cek nama file di `mockData.js` benar

**Build error?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🎯 Workflow Recommendation

1. **Day 1-2**: Install + Customize data
2. **Day 3-5**: Add photos & music
3. **Day 6-7**: Test thoroughly
4. **Day 8**: Deploy
5. **Day 9**: Share with guests

## 📱 Test on Mobile

```bash
# While npm run dev is running:
# Find your computer IP (Ctrl+G in Vite)
# On mobile, visit: http://YOUR_IP:5173
```

## 💾 Backup Important

Before making changes, backup:
```bash
git init
git add .
git commit -m "Initial setup"
```

## ✅ Pre-Launch Checklist

- [ ] All names updated
- [ ] Dates correct
- [ ] Photos added
- [ ] Music added
- [ ] Bank accounts added
- [ ] Meta tags updated
- [ ] Tested on mobile
- [ ] Build successful
- [ ] Deployed
- [ ] Link shared

## 💡 Performance Tips

- Compress images: TinyPNG.com
- Use MP3 (not WAV) for music
- Max image size: 200KB
- Max music size: 5MB

## 🎨 Quick Customizations

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  cream: '#F5F5F0',         // Main background
  'light-gold': '#D4AF37',  // Accent
  'wood-brown': '#8B735B',  // Secondary text
}
```

### Change Font
Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['YourFont', 'serif'],
}
```

## 🚀 Production Build

```bash
npm run build

# Result in "dist" folder:
# - index.html
# - css/ & js/ files
# - Total size: ~50KB gzipped
```

## 📊 Browser Support

✅ Chrome, Firefox, Safari, Edge (Latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
✅ Responsive from 320px to 4K

## 💬 Need Help?

1. Check README.md for full docs
2. Check CUSTOMIZATION_GUIDE.md for specific tasks
3. Check DEPLOYMENT_GUIDE.md for deployment issues
4. Check browser console (F12) for errors

---

## ⏱️ Est. Time to Launch

- Installation: 5 min
- Data customization: 15 min
- Add photos/music: 10 min
- Testing: 20 min
- Deploy: 5 min

**Total: ~1 hour from zero to live! 🚀**

---

**Good luck! Semoga undangan Anda sempurna! 💕**

For detailed instructions, see **README.md**
