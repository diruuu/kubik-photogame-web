import { LegalLayout } from '../components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL · PRIVASI"
      title="Kebijakan Privasi"
      updated="26 APRIL 2026"
      intro="Kebijakan ini menjelaskan data apa yang dikumpulkan Kubik Play, untuk apa kami memakainya, dan pilihan apa yang Anda miliki sebagai operator booth maupun sebagai tamu yang mengakses tautan unduhan foto."
    >
      <h2>1. Siapa kami</h2>
      <p>
        Kubik Play adalah aplikasi photo-booth gamified untuk operator studio acara
        di Indonesia. Aplikasi ini dikembangkan dan dioperasikan oleh tim Kubik. Bila
        Anda memiliki pertanyaan terkait privasi, hubungi kami di{' '}
        <a href="mailto:support@kubikplay.com">support@kubikplay.com</a>.
      </p>

      <h2>2. Data yang kami kumpulkan</h2>

      <h3>Akun & profil studio</h3>
      <ul>
        <li>
          <strong>Identitas autentikasi.</strong> Nama, alamat email, dan ID
          pengguna yang dikembalikan oleh Google Sign-In atau email/password lewat
          Supabase Auth.
        </li>
        <li>
          <strong>Profil studio.</strong> Nama operator dan nama studio yang Anda
          isi pada layar penyelesaian profil.
        </li>
        <li>
          <strong>Nomor HP (paket Free).</strong> Nomor HP yang diverifikasi via
          OTP semata-mata untuk mencegah penyalahgunaan paket Free (satu nomor =
          satu uji coba).
        </li>
      </ul>

      <h3>Aktivitas sesi</h3>
      <ul>
        <li>
          <strong>Foto sesi.</strong> Hasil tangkapan kamera dan kartu hasil yang
          dihasilkan dari frame game. Disimpan secara lokal di perangkat
          operator. Diunggah ke server Kubik untuk pelanggan paket berbayar
          (Cadangan Cloud) atau jika operator memilih membagikan tautan QR.
        </li>
        <li>
          <strong>Metadata sesi.</strong> ID sesi, frame yang digunakan, biaya
          kredit, hasil game (acak), waktu pembuatan, status cetak / bagikan.
        </li>
        <li>
          <strong>Log peristiwa kredit.</strong> Pemberian (allowance bulanan,
          top-up, uji coba) dan pemakaian kredit untuk akuntansi yang dapat
          diaudit.
        </li>
      </ul>

      <h3>Data pembayaran</h3>
      <ul>
        <li>
          <strong>Tidak ada data kartu kredit.</strong> Pembelian top-up dan
          langganan diproses oleh Google Play Billing. Kami menerima konfirmasi
          transaksi (token pembelian, ID order, tier) dari Google — bukan nomor
          kartu, bukan nama pemegang kartu.
        </li>
        <li>
          <strong>QRIS (Paket Basic & Pro).</strong> Saat operator menerima
          pembayaran tunai-elektronik dari tamu, transaksi diproses oleh Midtrans.
          Kubik menerima konfirmasi pembayaran (jumlah, status, ID order). Dana
          mengalir langsung dari tamu ke rekening operator yang terdaftar di
          Midtrans — Kubik tidak menyimpan saldo tamu maupun operator.
        </li>
      </ul>

      <h3>Data perangkat & teknis</h3>
      <ul>
        <li>
          <strong>Pengenal perangkat lokal.</strong> Diturunkan di perangkat dan
          dipakai untuk anti-replay pada antrean sinkronisasi sesi.
        </li>
        <li>
          <strong>Log galat & kinerja.</strong> Stack trace, versi aplikasi, model
          perangkat — dipakai untuk diagnosa, tidak dijadikan profil iklan.
        </li>
      </ul>

      <h2>3. Untuk apa data dipakai</h2>
      <ul>
        <li>Menjalankan inti aplikasi (sesi foto, generate hasil, cetak, bagikan).</li>
        <li>Mengelola saldo kredit dan langganan secara akurat.</li>
        <li>Menyediakan Cadangan Cloud bagi paket berbayar.</li>
        <li>Menyediakan tautan QR ke salinan digital bagi tamu.</li>
        <li>Mendeteksi dan mencegah penyalahgunaan (mis. pemalsuan uji coba).</li>
        <li>Memenuhi kewajiban hukum dan akuntansi.</li>
      </ul>
      <p>
        Kami <strong>tidak</strong> menjual data pribadi Anda. Kami{' '}
        <strong>tidak</strong> menggunakan foto sesi untuk melatih model AI.
      </p>

      <h2>4. Foto yang diambil di booth</h2>
      <p>
        Foto sesi adalah milik operator studio dan tamu yang difoto. Kubik menyimpan
        foto hanya bila:
      </p>
      <ul>
        <li>
          Operator berlangganan paket berbayar (Personal, Basic, Pro) — foto
          tersinkron sebagai bagian dari Cadangan Cloud, dan dapat dipulihkan saat
          ganti perangkat.
        </li>
        <li>
          Operator (atau tamu via QR) menggunakan tautan bagikan — satu foto per
          tautan, dengan masa kedaluwarsa sesuai tier (7 hari pada Free, 30 hari
          Personal, 90 hari Basic, 1 tahun Pro).
        </li>
      </ul>
      <p>
        Untuk paket Free tanpa tautan bagikan, foto tetap di perangkat operator dan
        tidak menyentuh server kami.
      </p>

      <h2>5. Hasil game adalah acak</h2>
      <p>
        Frame game (Love Meter, Personality Test, Career Scan, Soul Age, dst.)
        menghasilkan output acak yang teatrikal. Kubik <strong>tidak</strong>{' '}
        melakukan analisis wajah, pengenalan emosi, atau inferensi karakter atas
        foto. Tidak ada data biometrik yang diekstrak.
      </p>

      <h2>6. Berbagi data dengan pihak ketiga</h2>
      <p>
        Kami menggunakan penyedia berikut, sebatas yang diperlukan untuk
        menjalankan layanan:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — autentikasi, basis data, dan penyimpanan.
        </li>
        <li>
          <strong>Google Play Billing</strong> — pemrosesan pembelian dalam
          aplikasi.
        </li>
        <li>
          <strong>Google Sign-In</strong> — opsi login.
        </li>
        <li>
          <strong>Midtrans</strong> — pemrosesan pembayaran QRIS dari tamu ke
          operator (paket Basic & Pro).
        </li>
        <li>
          <strong>Cloudflare Workers / CDN</strong> — pengiriman tautan bagikan
          dan validasi webhook.
        </li>
      </ul>
      <p>
        Penyedia di atas memproses data sesuai instruksi Kubik dan kebijakan privasi
        masing-masing.
      </p>

      <h2>7. Penyimpanan & retensi</h2>
      <ul>
        <li>
          <strong>Sesi pada paket berbayar:</strong> tersimpan selama langganan
          aktif. Setelah pembatalan, ada masa tenggang 30 hari (data tetap
          terlihat dan dapat dipulihkan), kemudian disembunyikan hingga 120 hari
          untuk pemulihan bila berlangganan kembali, lalu dihapus permanen.
        </li>
        <li>
          <strong>Tautan bagikan:</strong> kedaluwarsa sesuai tier (lihat §4).
          Setelah kedaluwarsa, halaman 404 ditampilkan dan blob foto dihapus.
        </li>
        <li>
          <strong>Log akuntansi kredit:</strong> disimpan selama akun aktif
          ditambah masa wajib akuntansi sesuai hukum yang berlaku.
        </li>
        <li>
          <strong>Free tier:</strong> data sesi tidak menyentuh server kami kecuali
          via tautan bagikan.
        </li>
      </ul>

      <h2>8. Hak Anda</h2>
      <p>
        Anda berhak mengakses, memperbarui, atau menghapus data pribadi Anda. Anda
        dapat:
      </p>
      <ul>
        <li>
          Memperbarui profil studio dari layar Profil di dalam aplikasi.
        </li>
        <li>
          Mengekspor sesi sebagai paket file dari menu Profil → "Export sesi".
        </li>
        <li>
          Mengajukan penghapusan akun dan data terkait dengan mengirim permintaan
          ke <a href="mailto:support@kubikplay.com">support@kubikplay.com</a>. Permintaan
          akan diproses dalam 30 hari.
        </li>
      </ul>

      <h2>9. Anak di bawah umur</h2>
      <p>
        Kubik Play ditujukan untuk pelaku usaha dewasa (operator studio). Aplikasi
        tidak ditujukan untuk anak di bawah 13 tahun. Tamu yang difoto dapat
        berusia berapa pun — operatorlah yang bertanggung jawab memperoleh
        persetujuan yang sesuai dari subjek foto sebelum membagikan QR.
      </p>

      <h2>10. Keamanan</h2>
      <p>
        Kami menggunakan enkripsi in-transit (TLS), Row-Level Security (RLS) di
        database, dan kontrol akses berbasis peran pada infrastruktur kami. Tidak
        ada sistem yang sempurna, tetapi kami berkomitmen menerapkan praktik
        keamanan yang wajar dan memberi tahu pengguna bila terjadi insiden yang
        memengaruhi data mereka.
      </p>

      <h2>11. Perubahan kebijakan</h2>
      <p>
        Kami dapat memperbarui kebijakan ini. Tanggal "Diperbarui" di atas akan
        mencerminkan revisi terbaru. Perubahan signifikan akan kami sampaikan
        melalui aplikasi atau email yang terdaftar.
      </p>

      <h2>12. Kontak</h2>
      <p>
        Untuk pertanyaan terkait privasi, hubungi{' '}
        <a href="mailto:support@kubikplay.com">support@kubikplay.com</a>.
      </p>
    </LegalLayout>
  )
}
