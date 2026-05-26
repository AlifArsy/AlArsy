# 🎵 Website Lagu Pribadi

Situs musik sederhana ini dibuat dengan HTML, CSS, dan JavaScript. Kamu bisa menggunakannya untuk memutar daftar lagu lokal dari AlArsy dan mengganti foto profil secara interaktif.

## 🚀 Cara Pakai

1. Pastikan file lagu `.wav` milikmu sudah ada di dalam folder `audio/`.
2. Buka `index.html` di browser (Chrome/Edge/Safari).
3. Klik tombol `Putar` pada lagu yang kamu inginkan.

## ➕ Menambahkan Lagu Baru
Jika ingin menambahkan lagu baru, buka file `script.js` dan tambahkan objek lagu baru di dalam array `playlist` dengan format seperti ini:

```js
{
  title: "Judul Lagu Baru",
  artist: "AlArsy",
  src: "audio/Nama-File-Lagu-Kamu.wav",
}
```

> **Penting:** Simpan file lagu barumu di dalam folder `audio/`. Sangat disarankan nama filenya tidak menggunakan spasi (gunakan tanda hubung `-` sebagai pengganti spasi) agar lagu lancar diputar di semua browser.

## 🔒 Fitur Ganti Foto Profil
Kamu bisa mengganti foto profil langsung dari halaman website:
1. Klik pada area foto profil.
2. Masukkan password admin: `AlArsy123`
3. Pilih foto baru dari laptopmu.
