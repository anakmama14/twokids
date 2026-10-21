const laguUtama = document.getElementById('laguUtama');
const videoSpesial = document.getElementById('videoSpesial');

// Fungsi untuk berpindah halaman
function pindah(halamanKe) {
  // Putar lagu utama jika dibuka dari halaman pertama
  if (laguUtama.paused) {
    laguUtama.play().catch(() => {
      console.log("Autoplay diblokir oleh browser, butuh interaksi pengguna.");
    });
  }

  // Sembunyikan semua halaman
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById('page' + i);
    if (el) el.classList.add('hidden');
  }

  // Tampilkan halaman yang dituju
  document.getElementById('page' + halamanKe).classList.remove('hidden');
}

// Fungsi mengecek password
function cekPassword() {
  const input = document.getElementById('inputPass').value;
  const errorMsg = document.getElementById('pesanError');

  if (input === '914') {
    errorMsg.classList.add('hidden');
    pindah(3); // Pindah ke menu utama ulang tahun
  } else {
    errorMsg.classList.remove('hidden');
  }
}

// Fungsi ketika membuka halaman video
function bukaHalamanVideo() {
  pindah(6);
  // Jeda lagu utama
  laguUtama.pause();
  // Putar video
  videoSpesial.pause();
}

// Fungsi ketika kembali dari video ke menu
function kembaliDariVideo() {
  // Hentikan video dan reset posisinya
  videoSpesial.pause();
  videoSpesial.currentTime = 0;

  // Lanjutkan musik utama dari posisi terakhir
  laguUtama.play();

  // Pindah ke menu utama
  pindah(3);
}

// Fungsi untuk memperbesar video ke layar penuh (Fullscreen)
function perbesarVideo() {
  if (videoSpesial.requestFullscreen) {
    videoSpesial.requestFullscreen();
  } else if (videoSpesial.webkitRequestFullscreen) { /* Safari / Chrome lama */
    videoSpesial.webkitRequestFullscreen();
  } else if (videoSpesial.msRequestFullscreen) { /* IE11 */
    videoSpesial.msRequestFullscreen();
  }
}