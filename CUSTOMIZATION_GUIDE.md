# 🎨 Wedding Invitation - Customization Guide

Panduan lengkap untuk mengkustomisasi Wedding Invitation Website sesuai dengan kebutuhan Anda.

## 🔤 Mengubah Nama & Data Pengantin

Edit file: `src/data/mockData.js`

### Couple Data
```javascript
couple: {
  groom: {
    fullName: 'Ahmad Rizki Pratama',      // → Nama lengkap pria
    nickName: 'Rizki',                    // → Nama panggilan
    father: 'Bapak Setiaw Wibowo',        // → Nama ayah
    mother: 'Ibu Dewi Astuti',            // → Nama ibu
    photo: '/images/groom.jpg',           // → Path foto
    instagram: 'https://instagram.com/...', // → Link Instagram
    description: 'Seorang profesional...'  // → Bio singkat
  },
  bride: {
    fullName: 'Siti Nurhaliza Wijaya',
    // ... sama seperti groom
  }
}
```

### Opening Message
```javascript
opening: {
  greeting: 'Assalamu\'alaikum Warahmatullahi Wabarakatuh',
  quote: '"Pernikahan adalah permulaan dari cerita cinta..."'
}
```

### Events & Schedule
```javascript
events: [
  {
    id: 1,
    name: 'Akad Nikah',
    date: '2024-12-15T09:00:00',        // Format: YYYY-MM-DDTHH:mm:ss
    endDate: '2024-12-15T11:00:00',
    location: 'Masjid Al-Ikhlas',
    address: 'Jln. Ahmad Yani No. 45, Jakarta Selatan',
    description: 'Acara akad nikah berlangsung khidmat...',
    gmap: 'https://maps.google.com/?q=...'
  }
]
```

## 🎨 Menyesuaikan Warna

Edit file: `tailwind.config.js`

### Color Palette
```javascript
colors: {
  cream: '#F5F5F0',         // Background utama
  'wood-brown': '#8B735B',  // Warna teks sekunder
  'bone-white': '#FFFFF0',  // Warna aksen
  'light-gold': '#D4AF37',  // Highlight/accent
  'dark-brown': '#5C4A3D',  // Teks utama
}
```

### Contoh Palet Warna Lain

**Minimalis Modern:**
```javascript
cream: '#F9F7F4',
'wood-brown': '#6B4C3A',
'bone-white': '#FEFEF8',
'light-gold': '#C0A57C',
'dark-brown': '#3E3731'
```

**Romantic Pink:**
```javascript
cream: '#FFF5F7',
'wood-brown': '#D85A6A',
'bone-white': '#FFFBFC',
'light-gold': '#E8A5B5',
'dark-brown': '#8B4654'
```

**Elegant Blue:**
```javascript
cream: '#F0F3F7',
'wood-brown': '#2E5090',
'bone-white': '#F7F9FB',
'light-gold': '#5B8AC5',
'dark-brown': '#1C3A5F'
```

## 🔤 Mengubah Fonts

Edit file: `src/index.css`

### Mengganti Google Fonts
```css
/* Dari: */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Ke: */
@import url('https://fonts.googleapis.com/css2?family=YOUR_SERIF_FONT&family=YOUR_SCRIPT_FONT&family=YOUR_SANS_FONT&display=swap');
```

Edit file: `tailwind.config.js`
```javascript
fontFamily: {
  serif: ['Cinzel', 'serif'],              // Judul
  script: ['Great Vibes', 'cursive'],      // Nama pengantin
  sans: ['Montserrat', 'sans-serif'],      // Body text
}
```

### Popular Font Combinations

**Classic Elegant:**
- Serif: Playfair Display
- Script: Dancing Script
- Sans: Lato

**Modern Chic:**
- Serif: Merriweather
- Script: Pacifico
- Sans: Open Sans

**Romantic Luxury:**
- Serif: Cormorant Garamond
- Script: Allura
- Sans: Raleway

## 📸 Menambahkan Foto

### Create Image Folder
```bash
# Create public folder if not exists
mkdir -p public/images

# Place your images in public/images/
# Examples:
# - groom.jpg
# - bride.jpg
# - gallery-1.jpg
# - qris.jpg
# - og-image.jpg
```

### Update Image Paths
Di `src/data/mockData.js`:

```javascript
couple: {
  groom: {
    photo: '/images/groom.jpg',  // Ganti dengan nama file Anda
    // ...
  }
}

gallery: [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    thumbnail: '/images/gallery-1-thumb.jpg',
    alt: 'Deskripsi foto',
    caption: 'Momen indah di pantai'
  }
]
```

### Image Optimization

```bash
# Compress images (install ImageOptim atau gunakan online tools)
# Target size: ~200KB per image
# Recommended: Use WebP format untuk performa lebih baik

# Minimal image sizes:
# - Groom/Bride: 600x800px
# - Gallery: 800x800px
# - QRIS: 256x256px
# - OG Image: 1200x630px
```

## 🎵 Mengubah Background Music

### Add Audio File
```bash
# Letakkan file musik di:
public/music/YOUR_MUSIC.mp3
```

### Update Music Path
Di `src/data/mockData.js`:
```javascript
musicUrl: '/music/YOUR_MUSIC.mp3',  // Ganti nama file
```

### Music Recommendations
- Format: MP3 (smaller size)
- Duration: 3-5 menit (auto-loop)
- Size: Max 5MB
- Genre: Romantic/instrumental

**Recommended Royalty-Free:**
- Epidemic Sound
- Artlist
- AudioJungle
- Free Music Archive

## 💰 Bank Account & Gift Info

Di `src/data/mockData.js`:

```javascript
bankAccounts: [
  {
    id: 1,
    bankName: 'BCA',
    accountName: 'NAMA PENERIMA',
    accountNumber: '1234567890',
  }
],

qrisCode: '/images/qris.jpg',

giftAddress: 'Jln. Anda No. 123, Kota, Provinsi, 12345'
```

## 🗓️ Countdown Timer

Di `src/data/mockData.js`:

```javascript
countdown: '2024-12-15T09:00:00',  // Target date & time
```

Format: `YYYY-MM-DDTHH:mm:ss`

## 📱 SEO & Meta Tags

Edit file: `index.html`

```html
<title>Undangan Pernikahan Ahmad & Haliza | 15 Desember 2024</title>
<meta name="description" content="Undangan pernikahan Ahmad & Haliza..." />

<!-- Open Graph untuk Social Media -->
<meta property="og:title" content="Undangan Pernikahan Ahmad & Haliza" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/images/og-image.jpg" />
<meta property="og:url" content="https://yourwebsite.com" />
```

## 🔗 Custom URLs & Slugs

### Personalized Guest Link

```
https://www.yourdomain.com/?to=Nama+Tamu
```

Akan otomatis mengubah nama di Envelope.

### WhatsApp Share

```javascript
// Di komponen mana pun:
import { generateWhatsAppShare } from './utils/helpers';

const whatsappUrl = generateWhatsAppShare(
  'https://www.yourdomain.com',
  'Bapak Ahmad'
);
// Buka: window.open(whatsappUrl)
```

## 🎨 Custom CSS

Edit file: `src/index.css` untuk menambahkan custom styles:

```css
/* Custom hover effects */
.btn-primary {
  @apply px-6 py-3 bg-light-gold text-dark-brown rounded-lg;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}
```

## 🌙 Dark Mode Customization

Di `src/components/Header.jsx`, toggle dark mode:

```javascript
// Dark mode akan menambahkan class 'dark' ke <html>
// Customize dark styles di tailwind.config.js:

darkMode: 'class',  // Add this to config
```

## 📊 Advanced Customizations

### Custom Component

Buat file: `src/components/MyCustomSection.jsx`

```javascript
import { motion } from 'framer-motion';

const MyCustomSection = () => {
  return (
    <section className="py-20 px-4">
      {/* Your custom content */}
    </section>
  );
};

export default MyCustomSection;
```

Kemudian import di `src/App.jsx`:

```javascript
import MyCustomSection from './components/MyCustomSection';

// Di dalam return:
<MyCustomSection />
```

### Custom Animations

Edit `tailwind.config.js`:

```javascript
keyframes: {
  fadeIn: { /* ... */ },
  slideUp: { /* ... */ },
  // Add your custom animations here
  customAnimation: {
    '0%': { opacity: '0', transform: 'scale(0.9)' },
    '100%': { opacity: '1', transform: 'scale(1)' }
  }
}
```

## 🧪 Testing Changes

```bash
# Development mode tetap terbuka
npm run dev

# Buka di browser: http://localhost:5173

# Setiap change akan auto-reload (HMR)
# Edit data, klik save, lihat hasilnya langsung!
```

## 📝 Checklist Kustomisasi

- [ ] Nama pengantin & data keluarga
- [ ] Tanggal & lokasi acara
- [ ] Foto groom & bride
- [ ] Foto galeri pre-wedding
- [ ] Background music
- [ ] Bank account & QRIS
- [ ] Alamat pengiriman kado
- [ ] Warna sesuai tema
- [ ] Font sesuai keinginan
- [ ] Meta tags di-update
- [ ] Tested di mobile
- [ ] Ready untuk deploy

---

**Happy customizing! Semoga hasilnya sempurna untuk hari istimewa Anda! 💕**
