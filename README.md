# Website KADIKA SV UNS

Website statis responsif untuk KADIKA SV UNS. Dibuat dengan HTML, CSS, dan JavaScript biasa sehingga mudah diedit melalui Visual Studio Code dan dapat dipublikasikan gratis menggunakan GitHub Pages.

## Menjalankan di komputer
1. Ekstrak file ZIP.
2. Buka folder `kadika-website` melalui Visual Studio Code (`File > Open Folder`).
3. Pasang ekstensi **Live Server** (opsional, tetapi memudahkan preview).
4. Klik kanan `index.html` lalu pilih **Open with Live Server**. Jika tidak memakai ekstensi, klik dua kali `index.html` untuk membukanya di browser.

## Mengedit isi website
- **Daftar proker, tugas, dan nama departemen:** buka `data.js`. Setiap departemen memiliki `name`, `logo`, `proker`, dan `tasks`. Ubah teks di dalam tanda kutip. Untuk menambah item, tambahkan teks baru di dalam array, dipisahkan koma.
- **Logo bagian atas:** ganti file gambar di folder `assets/` dengan nama file yang sama, atau ubah alamat gambar pada `index.html`.
- **Logo departemen:** gambar berada di `assets/departemen/`. Nama file logo yang dipakai diatur pada properti `logo` di `data.js`.
- **Warna, ukuran, font, dan tata letak:** edit `style.css`.
- **Susunan bagian, judul, menu, dan footer:** edit `index.html`.
- **Interaksi menu dan pop-up departemen:** edit `script.js`.

Simpan file lalu refresh browser untuk melihat perubahan. Jangan mengubah nama file gambar kecuali alamatnya juga diperbarui.

## Publikasi gratis menggunakan GitHub Pages
1. Buat akun atau masuk di https://github.com/.
2. Klik **New repository**. Beri nama misalnya `kadika-sv-uns`, pilih **Public**, lalu buat repository.
3. Ekstrak ZIP ini. Buka repository GitHub, pilih **Add file > Upload files**, lalu unggah seluruh isi folder website (pastikan `index.html` ada di root repository, bukan berada di dalam folder tambahan).
4. Klik **Commit changes**.
5. Buka **Settings > Pages**. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
7. Tunggu proses publikasi. Alamat website akan tampil di halaman Pages, biasanya `https://USERNAME.github.io/kadika-sv-uns/`.

Setelah mengubah website, unggah kembali file yang berubah ke repository atau gunakan Git. GitHub Pages akan memperbarui website secara otomatis setelah perubahan berhasil dipublikasikan.

## Catatan
- Website ini adalah template statis; tidak memerlukan database, server, atau biaya hosting untuk GitHub Pages.
- Tombol **Website utama** mengarah ke https://kadika.uns.ac.id/.
- Isi, logo, dan tautan dapat disesuaikan. Periksa kembali ejaan, izin penggunaan logo, dan informasi organisasi sebelum website dipublikasikan.
- Koneksi internet diperlukan untuk memuat Google Fonts; jika offline, website memakai font cadangan.
