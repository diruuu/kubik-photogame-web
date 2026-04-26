import { LegalLayout } from '../components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="LEGAL · SYARAT"
      title="Syarat & Ketentuan"
      updated="26 APRIL 2026"
      intro="Dengan mengunduh, memasang, atau menggunakan Kubik Play, Anda menyetujui syarat dan ketentuan berikut. Bacalah dengan saksama. Bila ada bagian yang tidak Anda setujui, jangan gunakan aplikasi ini."
    >
      <h2>1. Definisi</h2>
      <ul>
        <li>
          <strong>"Kubik"</strong> berarti tim pengembang dan operator aplikasi
          Kubik Play.
        </li>
        <li>
          <strong>"Aplikasi"</strong> berarti aplikasi mobile Kubik Play, beserta
          situs web pendukung dan layanan backend yang menyertainya.
        </li>
        <li>
          <strong>"Operator"</strong> berarti Anda — pelaku usaha photo-booth yang
          menggunakan Aplikasi sebagai pengguna terdaftar.
        </li>
        <li>
          <strong>"Tamu"</strong> berarti pengunjung acara yang difoto melalui
          booth Operator dan/atau menerima tautan QR.
        </li>
        <li>
          <strong>"Frame Game"</strong> berarti template foto gamified seperti
          Love Meter, Personality Test, Career Scan, Soul Age, dst.
        </li>
        <li>
          <strong>"Kredit"</strong> berarti unit metering universal yang
          dikonsumsi setiap kali sesi menghasilkan foto.
        </li>
      </ul>

      <h2>2. Akun</h2>
      <p>
        Untuk menggunakan Aplikasi, Operator wajib mendaftar dengan akun Google
        atau email/password melalui Supabase Auth. Untuk paket Free, verifikasi
        nomor HP via OTP juga diperlukan. Operator bertanggung jawab menjaga
        kerahasiaan kredensialnya. Aktivitas yang terjadi melalui akun Operator
        dianggap dilakukan oleh Operator.
      </p>
      <p>
        Satu perangkat hanya dapat digunakan oleh satu studio. Pemindahan
        perangkat (mis. ganti HP) dilakukan dengan login menggunakan akun yang
        sama.
      </p>

      <h2>3. Paket langganan & kredit</h2>

      <h3>Tier</h3>
      <p>
        Kubik Play menawarkan empat tier: <strong>Free</strong>,{' '}
        <strong>Paket Personal</strong>, <strong>Paket Basic</strong>, dan{' '}
        <strong>Paket Pro</strong>. Detail fitur dan harga tersedia di halaman
        utama dan di dalam Aplikasi. Kubik dapat memperbarui daftar fitur dan
        harga; perubahan akan diumumkan dengan tenggat yang wajar.
      </p>

      <h3>Pembayaran</h3>
      <p>
        Langganan dan pembelian top-up diproses melalui <strong>Google Play
        Billing</strong>. Tagihan dikenakan pada metode pembayaran yang terkait
        dengan akun Google Play Operator. Kubik tidak menyimpan informasi kartu.
      </p>

      <h3>Pembaruan otomatis</h3>
      <p>
        Langganan otomatis diperpanjang setiap periode. Operator dapat
        membatalkan kapan saja melalui pengaturan akun Google Play. Top-up adalah
        pembelian satu kali dan tidak diperpanjang otomatis.
      </p>

      <h3>Kredit</h3>
      <ul>
        <li>
          Kredit langganan kedaluwarsa pada tanggal perpanjangan berikutnya.
          Tidak ada rollover.
        </li>
        <li>
          Kredit top-up tidak kedaluwarsa dan tetap dapat digunakan selama akun
          aktif.
        </li>
        <li>
          Kredit uji coba paket Free (15 kredit) sekali pemberian dan tidak dapat
          diisi ulang.
        </li>
        <li>
          Saat menghasilkan foto, urutan pemakaian: kredit uji coba, kredit
          langganan, kredit top-up.
        </li>
      </ul>

      <h2>4. Kebijakan pengembalian dana</h2>
      <p>
        Momen tagihan adalah <strong>saat foto dihasilkan</strong> — bukan saat
        memilih frame, mencetak, atau membagikan. Sesuai itu:
      </p>
      <ul>
        <li>
          Tidak ada pengembalian kredit untuk gagal cetak (cetak gratis dan dapat
          diulang).
        </li>
        <li>
          Tidak ada pengembalian kredit jika tamu tidak mencetak atau tidak
          mengunduh foto via QR.
        </li>
        <li>
          Tidak ada pengembalian kredit jika frame ditarik dari marketplace —
          salinan yang sudah terunduh di perangkat tetap berfungsi.
        </li>
        <li>
          <strong>Pengecualian:</strong> bila proses generate gagal teknis
          (mis. komposisi error, kehabisan memori), kredit dipulihkan otomatis
          dan sesi ditandai gagal — tidak ada tagihan.
        </li>
      </ul>
      <p>
        Pengembalian dana atas pembelian Play Billing tunduk pada kebijakan
        Google Play. Permintaan refund dapat diajukan langsung melalui Play.
      </p>

      <h2>5. Hak konten & lisensi</h2>

      <h3>Konten Operator dan Tamu</h3>
      <p>
        Foto yang dihasilkan melalui Aplikasi adalah milik Operator dan Tamu.
        Kubik tidak mengklaim kepemilikan atas foto sesi. Dengan mengaktifkan
        Cadangan Cloud atau membuat tautan bagikan, Operator memberikan Kubik
        lisensi terbatas non-eksklusif untuk menyimpan, menyalin, dan
        mengirimkan foto semata-mata untuk menjalankan fitur tersebut.
      </p>

      <h3>Konten Kubik</h3>
      <p>
        Frame Game first-party, ikon, tipografi, ilustrasi, dan kode Aplikasi
        adalah milik Kubik atau pemegang lisensinya. Operator memperoleh hak
        terbatas untuk memakai Frame Game dalam sesi sesuai paket yang dimiliki.
        Operator tidak boleh me-redistribusi, menjual ulang, atau mengubah
        Frame Game tanpa izin tertulis.
      </p>

      <h3>Frame kustom (Paket Pro)</h3>
      <p>
        Operator paket Pro dapat membuat frame kustom melalui Frame Editor.
        Frame kustom adalah milik Operator dan disimpan privat untuk studio
        tersebut. Bila di kemudian hari Kubik menyediakan jalur publikasi
        marketplace, partisipasi bersifat opt-in dan tunduk pada syarat
        terpisah (royalti, moderasi, dll.).
      </p>

      <h2>6. Perilaku yang dilarang</h2>
      <p>Operator setuju untuk tidak:</p>
      <ul>
        <li>
          Membuat banyak akun untuk menyalahgunakan kredit uji coba paket Free.
        </li>
        <li>
          Menggunakan Aplikasi untuk konten ilegal, melanggar privasi, atau
          mengandung pornografi anak.
        </li>
        <li>
          Memfoto seseorang tanpa persetujuan yang sesuai berdasarkan hukum
          yang berlaku.
        </li>
        <li>
          Melakukan reverse-engineering, dekompilasi, atau membypass kontrol
          akses pada Aplikasi atau backend Kubik.
        </li>
        <li>
          Menggunakan Aplikasi untuk merepresentasikan hasil game (Love Meter
          dst.) sebagai pengukuran ilmiah, medis, atau psikologis kepada Tamu.
          Hasil bersifat acak dan teatrikal.
        </li>
      </ul>

      <h2>7. Pembayaran QRIS dari Tamu (Paket Basic & Pro)</h2>
      <p>
        Aplikasi memfasilitasi penerimaan pembayaran QRIS dari Tamu ke Operator
        melalui Midtrans. Dana dilunaskan langsung ke rekening Operator yang
        terdaftar di Midtrans. Kubik tidak menyimpan dana Tamu maupun Operator
        dan tidak mengambil potongan dari transaksi QRIS Operator. Biaya
        per-transaksi Midtrans diteruskan apa adanya.
      </p>

      <h2>8. Mode offline</h2>
      <p>
        Inti loop sesi (ambil foto, generate, cetak) dirancang untuk berjalan
        tanpa koneksi internet. Saldo kredit yang dipakai offline disinkronkan
        kembali ke server saat koneksi pulih. Server adalah sumber kebenaran:
        ketidaksesuaian akan direkonsiliasi mendukung catatan server.
      </p>

      <h2>9. Ketersediaan layanan</h2>
      <p>
        Kubik berusaha menjaga ketersediaan layanan, tetapi tidak menjamin
        Aplikasi selalu bebas dari gangguan. Pemeliharaan terjadwal, gangguan
        penyedia pihak ketiga (Google, Midtrans, Cloudflare, Supabase), atau
        keadaan kahar dapat memengaruhi ketersediaan.
      </p>

      <h2>10. Penangguhan & penghentian</h2>
      <p>
        Kubik dapat menangguhkan atau menghentikan akses ke akun yang dengan
        wajar dianggap melanggar Syarat ini, dengan pemberitahuan bilamana
        memungkinkan. Operator dapat berhenti menggunakan Aplikasi kapan saja
        dengan menghapus akun.
      </p>

      <h2>11. Penafian jaminan</h2>
      <p>
        Aplikasi disediakan apa adanya. Sejauh diizinkan oleh hukum, Kubik
        menafikan semua jaminan tersurat maupun tersirat, termasuk jaminan
        kelaikan untuk tujuan tertentu, ketidaktercemaan hak, dan ketersediaan
        tanpa gangguan.
      </p>

      <h2>12. Batasan tanggung jawab</h2>
      <p>
        Sejauh diizinkan oleh hukum yang berlaku, tanggung jawab Kubik atas
        klaim yang timbul dari penggunaan Aplikasi terbatas pada jumlah yang
        dibayarkan Operator kepada Kubik dalam 12 bulan terakhir sebelum klaim
        muncul. Kubik tidak bertanggung jawab atas kerugian tidak langsung,
        kehilangan keuntungan, atau kehilangan data di luar yang diatur dalam
        kebijakan retensi.
      </p>

      <h2>13. Hukum yang berlaku</h2>
      <p>
        Syarat ini diatur oleh hukum Republik Indonesia. Sengketa yang tidak
        dapat diselesaikan secara musyawarah akan diajukan ke pengadilan yang
        berwenang di Indonesia.
      </p>

      <h2>14. Perubahan syarat</h2>
      <p>
        Kubik dapat memperbarui Syarat ini. Tanggal "Diperbarui" di atas
        mencerminkan revisi terbaru. Perubahan material akan diumumkan melalui
        Aplikasi atau email yang terdaftar paling lambat 14 hari sebelum
        berlaku.
      </p>

      <h2>15. Kontak</h2>
      <p>
        Pertanyaan tentang Syarat & Ketentuan ini dapat ditujukan ke{' '}
        <a href="mailto:support@kubikplay.com">support@kubikplay.com</a>.
      </p>
    </LegalLayout>
  )
}
