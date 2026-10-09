# Affiliate Suite

Gabungan dua aplikasi dalam satu project:

- **SHOPEEAFF-NALYZER** (`/analyzer`) — statistik & pembanding laporan Shopee Affiliate (komisi & klik).
- **Cora Viral Finder** (`/viral`) — merapikan & menganalisis data postingan viral dari file Excel/CSV.

Dibangun dengan Vite + React + TypeScript + Tailwind CSS (v3) + shadcn/ui.
Semua data diproses 100% lokal di browser — tanpa server, tanpa database.

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasil build di folder dist/
```

Butuh Node.js 20 atau lebih baru.

## Deploy ke GitHub + Vercel

1. Buat repository GitHub baru, lalu push project ini (folder ini adalah root repo):

   ```bash
   git init
   git add .
   git commit -m "init: affiliate suite"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

2. Di [Vercel](https://vercel.com): **Add New → Project → Import** repository tersebut.
3. Vercel otomatis mendeteksi Vite. Pengaturan sudah ada di `vercel.json`:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Semua rute diarahkan ke `index.html` (SPA), jadi `/analyzer` dan `/viral` berfungsi.
4. Klik **Deploy**. Setiap `git push` berikutnya akan di-deploy otomatis.

Tidak ada environment variable yang diperlukan.

## Struktur

```
src/pages/         Home (menu), AnalyzerPage, ViralPage
src/components/    Komponen Analyzer + SiteNav & SiteFooter bersama
src/sections/      Sections Viral Finder
src/lib/           affiliate.ts, viral.ts, utils.ts
src/types/         Type definitions
```

Credit: [Pranowo Yugo](https://instagram.com/pranowoyugo)
