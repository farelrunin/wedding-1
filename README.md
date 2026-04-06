# 💒 Premium Wedding Invitation Website

Sebuah website undangan pernikahan premium yang dibangun dengan React, Vite, dan Tailwind CSS. Menampilkan fitur-fitur lengkap untuk membuat undangan pernikahan yang tidak hanya cantik, tapi juga fungsional dan interaktif.

## ✨ Fitur Utama

### 🎨 Desain & Branding
- **Palet Warna Premium**: Krem, Cokelat Kayu, Putih Tulang, Emas Muda
- **Typography Profesional**: 
  - Serif (Cinzel) untuk judul
  - Script (Great Vibes) untuk nama pengantin
  - Sans-serif (Montserrat) untuk body text
- **Responsif Mobile-First**: Sempurna di semua perangkat
- **Dark Mode Toggle**: Dukungan untuk preferensi gelap

### 📋 Bagian-Bagian Utama

1. **Halaman Sampul (Envelope)**
   - Animasi pembukaan undangan 3D
   - Nama tamu otomatis dari URL parameter
   - Tombol "Buka Undangan" dengan animasi pulse

2. **Pembukaan (Introduction)**
   - Salam pembuka (Assalamu'alaikum)
   - Kutipan ayat suci atau kata-kata mutiara
   - Animasi fade-in yang elegan

3. **Profil Mempelai (Couple Profile)**
   - Foto mempelai pria dan wanita
   - Nama lengkap dan nama panggilan
   - Nama orang tua
   - Link Instagram
   - Deskripsi pribadi

4. **Acara & Jadwal (Events)**
   - Akad Nikah (waktu & tempat)
   - Resepsi (waktu & tempat)
   - Tombol "Add to Calendar"
   - Tombol "Buka Google Maps"

5. **Penghitung Mundur (Countdown)**
   - Real-time countdown (Hari, Jam, Menit, Detik)
   - Animasi visual yang menarik
   - Background gelap dengan aksen emas

6. **Galeri Foto & Video**
   - Grid foto pre-wedding responsif
   - Lightbox dengan navigasi
   - Video YouTube/Vimeo terintegrasi
   - Lazy loading untuk performa optimal

7. **Buku Tamu Digital (Guest Book)**
   - Form RSVP dengan status kehadiran
   - Area ucapan dan doa
   - Tampilan real-time ucapan tamu
   - Penyimpanan lokal menggunakan localStorage

8. **Hadiah Digital (Digital Gift)**
   - Nomor rekening bank multiple
   - Tombol copy-to-clipboard dengan notifikasi
   - QRIS untuk e-wallet
   - Alamat pengiriman kado fisik

9. **Background Music**
   - Auto-play musik romantis
   - Floating music player dengan kontrol
   - Animasi vinyl record berputar
   - Tombol pause/play

### 🎪 Micro-Interactions
- ✓ Smooth scroll navigation
- ✓ Fade-in animations saat scroll
- ✓ Copy to clipboard dengan notifikasi
- ✓ Guest name otomatis dari URL (?to=Nama)
- ✓ Responsive hover effects
- ✓ Loading animations
- ✓ Floating action buttons

## 🚀 Quick Start

### Instalasi

```bash
# Clone repository
cd wedding-invitation

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Mulai development server
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

Output akan disimpan di folder `dist/`

## 📝 Konfigurasi

Edit file `src/data/mockData.js` untuk mengubah:
- Data mempelai (nama, orang tua, foto)
- Tanggal dan lokasi acara
- Nomor rekening bank
- Alamat pengiriman kado
- Foto galeri dan video

### Menyesuaikan Warna

Edit `tailwind.config.js`:
```javascript
colors: {
  cream: '#F5F5F0',
  'wood-brown': '#8B735B',
  'bone-white': '#FFFFF0',
  'light-gold': '#D4AF37',
  'dark-brown': '#5C4A3D',
}
```

### Menambahkan Font Kustom

Di `src/index.css`, ubah import Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=FONT_NAME&display=swap');
```

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Drag & drop folder `dist/` ke Netlify
# Atau gunakan Netlify CLI:
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

## 🎯 Tips Optimasi

### Gambar
- Kompres gambar menggunakan TinyPNG atau ImageOptim
- Gunakan format WebP untuk performa lebih baik
- Optimal ukuran: ~200KB per gambar

### Music
- Gunakan format MP3 (lebih kecil dari WAV)
- Ukuran ideal: 3-5MB
- Durasi: 3-5 menit (loop)

### SEO
- Update meta tags di `index.html`
- Set URL yang benar di `og:url`
- Tambahkan Google Analytics (optional)

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion 11
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Date Handling**: date-fns
- **HTTP Client**: Axios

## 📱 Browser Support

- Chrome/Edge: ✓ (Latest)
- Firefox: ✓ (Latest)
- Safari: ✓ (Latest)
- Mobile browsers: ✓ (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- Tidak ada pengumpulan data pribadi tamu (data disimpan lokal)
- HTTPS recommended untuk deployment
- No external analytics (optional)
- Compliant dengan GDPR

## 📄 File Structure

```
src/
├── components/        # React components
│   ├── Header.jsx
│   ├── Envelope.jsx
│   ├── Introduction.jsx
│   ├── CoupleProfile.jsx
│   ├── Events.jsx
│   ├── Countdown.jsx
│   ├── Gallery.jsx
│   ├── GuestBook.jsx
│   ├── DigitalGift.jsx
│   ├── MusicPlayer.jsx
│   ├── Footer.jsx
│   └── Toast.jsx
├── pages/            # Page sections (future use)
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
├── data/             # Mock data & config
├── styles/           # Custom CSS
├── App.jsx           # Main component
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## 🎨 Customization Examples

### Mengubah Nama Pengantin
Di `src/data/mockData.js`:
```javascript
couple: {
  groom: {
    fullName: 'Nama Pria Anda',
    nickName: 'Panggilan',
    // ...
  }
}
```

### Mengubah Font
Di `tailwind.config.js`:
```javascript
fontFamily: {
  serif: ['Font Serif Anda'],
  script: ['Font Script Anda'],
  sans: ['Font Sans Anda'],
}
```

### Menambah Foto Galeri
Di `src/data/mockData.js`:
```javascript
gallery: [
  {
    id: 1,
    src: '/images/your-photo.jpg',
    caption: 'Deskripsi foto',
  }
]
```

## 🐛 Troubleshooting

**Musik tidak putar?**
- Pastikan file music.mp3 ada di public folder
- Periksa browser console untuk error
- Coba enable autoplay di browser settings

**Gambar tidak terlihat?**
- Letakkan gambar di folder `public/images/`
- Update path di mockData.js
- Check console untuk 404 errors

**Countdown tidak jalan?**
- Pastikan timezone servermu sesuai
- Update VITE_SITE_URL di .env

## 📞 Support

Untuk bantuan, silahkan:
1. Check documentation di atas
2. Lihat browser console untuk errors
3. Pastikan semua dependencies terinstall: `npm install`

## 📝 Lisensi

MIT License - Bebas digunakan untuk proyek pribadi atau komersial

## 🙏 Terima Kasih

Build dengan ❤️ untuk membuat hari istimewa Anda lebih berkesan!

---

**Happy Wedding! 💕**

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
