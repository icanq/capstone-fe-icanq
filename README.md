# Tutorial integrasi FE dan BE

1. pastikan bahwa backend sudah bisa mensuplai data yang dibutuhkan oleh FE
2. kalian bikin file javascript di FE dimana untuk fetch data ke backend, dan juga untuk display data di FE, kalau bingung coba lihat file yang ada di `js/index.js` disitu ada comment petunjuknya
3. untuk pengerjaan pada fase development, kalian bisa fetch data tersebut pada url `localhost` terlebih dahulu, dengan syarat backend projectnya sudah di clone ke local machine kalian (laptop kalian masing masing) lalu jalankan aplikasinya, bila perlu kalian set up databasenya terlebih dahulu, atau apabila kalian sudah memakai prisma sebagai orm kalian, kalian bisa langsung singkronisasi database yang ada di local kalian dengan cara `npx prisma db push`.
4. kalau misal sudah selesai kalian bisa deploy FE kalian ke github.io dengan mengakses kolom settings yang ada di project kalian itu, klik `pages` di bagian side bar, lalu ganti branch yang tadinya `none` jadi `main` atau branch yang kalian inginkan.
5. kalau sudah tunggu dulu sejenak, github akan memproses deployment kalian, kalau ingin lihat prosesnya kalian bisa lihat kolom actions yang ada di atas
6. kalau sudah ke deploy FE nya, kalian bisa sembari deploy BE nya di railway atau di cyclic.
7. deploy be ke railway. bikin project baru dulu di railway -> pilih source deploy dari github -> pilih repo yang mau kalian deploy. Inget reponya kalau kosong isinya pasti bakal error
8. kalau aplikasinya lagi di proses deployment sama railway, kalian bisa sembari bikin database (mysql) di railway, dengan klik kanan di railwaynya -> new database (mysql)
9. kalian bisa melihat cara akses railwaynya lewat klik mysqlnya yang di railway -> variables -> `MYSQL_URL`. kalian copy mysql_url tadi lalu di ganti si `DATABASE_URL` yang ada di .env
10. kita harus singkronisasi database mysql yang ada di railway, karena db yang ada di railway masih kosong, belum ada tabelnya. untuk singkronisasi database dari local ke railway, setelah kalian ganti `DATABASE_URL` di `.env` kalian bisa langsung jalankan `npx prisma db push` untuk singkronisasi
11. kita juga harus expose domain yang ada di project mysqlnya, klik `add new domain` pada aplikasi source github yg ada di railway
12. url yang ada dari railway tadi bisa dipake di `index.js` di file js di FE untuk menggantikan url local ke url yang ada di railway. Jangan lupa untuk menambahkan data pada database di railway.
13. Tetap semangat
