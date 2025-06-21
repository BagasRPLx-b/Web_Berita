import MyNavbar from "../component/navbar";
import { Link } from "react-router-dom";
import MyFooter from "../component/Footer";

const DataBridge = [
  { 
    id: 7, 
    title: 'Tim Bridge Indonesia Siap Bertarung di World Championship 2025', 
    date:"12-10-2024",
    category:"BRIDGE",
    image: "https://awsimages.detik.net.id/community/media/visual/2025/05/27/tim-bridge-indonesia-1748359228808_169.jpeg?w=1200",
    summary: 'Empat pasang atlet bridge terbaik Indonesia akan berlaga di kejuaraan dunia',
    detail: 'Persatuan Bridge Seluruh Indonesia (PBSI) resmi mengumumkan empat pasang atlet yang akan mewakili Indonesia pada World Bridge Championship 2025 di Roma, Italia. Tim yang dijuluki "Garuda Squad" ini terdiri dari atlet berpengalaman seperti pasangan Denny Sacul-Michael Bambang dan pasangan muda berbakat Fiona Wijaya-Ryan Pratama. "Kami telah mempersiapkan tim selama dua tahun terakhir dengan serangkaian turnamen dan pelatihan khusus," ujar ketua PBSI, Arief Tjahyono. Persiapan termasuk simulasi permainan menggunakan sistem komputer canggih yang mampu menganalisis ribuan kemungkinan bidding. Target tim adalah masuk 10 besar dunia, setelah pada edisi sebelumnya menempati peringkat 15. PBSI juga mendatangkan pelatih dari Prancis, Jean-Luc Dupont, yang pernah memenangkan tiga gelar dunia, untuk membimbing tim selama tiga bulan terakhir sebelum kejuaraan.'
  },
  { 
    id: 8, 
    title: 'Turnamen Bridge Nasional 2025 Hadirkan Sistem Digital Terbaru', 
    date:"12-10-2024",
    category:"BRIDGE",
    image: "https://api.minio.jatimprov.go.id/kominfo-jatim/images/WhatsApp%20Image%202025-02-05%20at%2006.24.24.jpeg",
    summary: 'Inovasi teknologi diterapkan dalam turnamen bridge terbesar se-Indonesia',
    detail: 'Untuk pertama kalinya dalam sejarah, Turnamen Bridge Nasional 2025 akan menggunakan sistem scoring dan monitoring digital canggih hasil pengembangan tim IT PBSI. Sistem bernama "BridgeTech ID" ini memungkinkan penilaian real-time, analisis statistik mendalam, dan deteksi kecurangan secara otomatis. "Ini merupakan lompatan besar bagi bridge Indonesia menuju era digital," kata ketua panitia, Budi Santoso. Turnamen yang berlangsung di Surabaya selama 10 hari ini diikuti oleh 300 pasang atlet dari 25 provinsi. Hadiah total mencapai Rp750 juta dengan juara umum berhak mendapatkan tiket ke turnamen Asia Pacific Bridge Championship. Sistem baru ini juga memungkinkan penonton mengikuti perkembangan pertandingan melalui aplikasi mobile dengan visualisasi kartu dan strategi permainan. PBSI berencana mematenkan teknologi ini dan menawarkannya ke federasi bridge internasional.'
  },
  { 
    id: 9, 
    title: 'Bridge Masuk Cabang Olahraga Resmi PON XXII 2028', 
    date:"12-10-2024",
    category:"BRIDGE",
    image: "https://jurnalborneo.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-09-at-00.03.40.jpeg",
    summary: 'Kemenpora resmi menetapkan bridge sebagai cabang olahraga kompetisi di PON mendatang',
    detail: 'Setelah melalui proses evaluasi selama tiga tahun, Kementerian Pemuda dan Olahraga akhirnya menetapkan bridge sebagai cabang olahraga resmi yang akan dipertandingkan dalam Pekan Olahraga Nasional (PON) XXII tahun 2028 di Kalimantan Timur. Keputusan ini berdasarkan perkembangan prestasi bridge Indonesia di kancah internasional dan tingginya minat masyarakat. "Bridge bukan sekadar permainan kartu, tapi olahraga otak yang membutuhkan strategi tinggi," tegas Menpora Dito Ariotedjo. PBSI segera membentuk tim khusus untuk menyusun kurikulum pelatnas dan sistem kompetisi pra-PON. Diperkirakan 25 provinsi akan mengirimkan kontingen bridge pada PON 2028. Cabang yang dipertandingkan meliputi pair open, pair wanita, dan team event. Ini menjadi momentum penting bagi atlet bridge Indonesia untuk mendapatkan pengakuan setara dengan cabang olahraga lainnya.'
  },
  { 
    id: 10, 
    title: 'Universitas Indonesia Buka Program Studi Bridge Pertama di Asia',
    date:"12-10-2024",
    category:"BRIDGE", 
    image: "https://www.scholarsofficial.com/wp-content/uploads/2024/10/ADB-JSP-2025-1.jpg",
    summary: 'Terobosan akademis untuk pengembangan bridge profesional',
    detail: 'Fakultas Ilmu Keolahragaan Universitas Indonesia (UI) membuat sejarah dengan membuka program konsentrasi Bridge dan Mind Sports pertama di Asia. Program yang akan dimulai September 2025 ini menawarkan gelar sarjana dengan kurikulum unik yang menggabungkan teori permainan bridge, psikologi olahraga, matematika terapan, dan manajemen turnamen. "Ini merupakan jawaban atas kebutuhan industri bridge profesional yang semakin berkembang," jelas Dekan FIK UI, Prof. Dr. Ahmad Muchlisin. Mahasiswa akan diajar oleh pakar bridge internasional dan praktisi industri. UI bekerja sama dengan PBSI dan World Bridge Federation menyediakan beasiswa untuk 20 mahasiswa berprestasi setiap tahunnya. Lulusan diharapkan bisa menjadi atlet profesional, pelatih, wasit, atau pengelola turnamen bridge. Program ini telah menarik minat calon mahasiswa tidak hanya dari Indonesia tapi juga negara Asia lainnya.'
  },
  { 
    id: 11, 
    title: 'Buku Strategi Bridge Karya Master Indonesia Laris di Pasar Global', 
    date:"12-10-2024",
    category:"BRIDGE",
    image: "https://down-id.img.susercontent.com/file/e0548d4fdbed425de4060f3cb04cd03b",
    summary: 'Karya maestro bridge Indonesia diakui dunia internasional',
    detail: 'Buku "The Art of Indonesian Bridge: Strategies from the Archipelago" karya Grand Master Bridge Indonesia, Denny Sacul, menjadi best seller di Amazon kategori permainan strategi. Buku setebal 450 halaman ini telah diterjemahkan ke 12 bahasa dan terjual lebih dari 50.000 eksemplar dalam tiga bulan pertama peluncuran. "Saya ingin membagikan filosofi permainan bridge ala Indonesia yang unik," ujar Denny yang telah 25 tahun berkecimpung di dunia bridge profesional. Buku ini mengupas tuntas strategi bidding dan permainan yang dikembangkan atlet Indonesia selama dekade terakhir, termasuk teknik "Batik Bid" yang menjadi ciri khas tim nasional. World Bridge Federation bahkan merekomendasikan buku ini sebagai referensi wajib bagi pemain bridge tingkat menengah ke atas. Denny berencana mengadakan tur promosi ke 15 negara dan membuat versi video tutorial berbasis buku tersebut.'
  },
  { 
    id: 12, 
    title: 'Anak Usia 12 Tahun Raih Gelar Master Bridge Termuda se-ASEAN', 
    date:"12-10-2024",
    category:"BRIDGE",
    image: "https://beritamanado.com/wp-content/uploads/2021/11/IMG_20211104_134405.jpg",
    summary: 'Prestasi luar biasa dari bintang muda bridge Indonesia',
    detail: 'Kejutan datang dari dunia bridge Indonesia ketika Nathan Wijaya, siswa kelas 6 SD asal Bandung, berhasil meraih gelar Master Bridge pada usia 12 tahun 3 bulan, menjadi yang termuda dalam sejarah ASEAN. Nathan menyelesaikan semua persyaratan gelar dalam waktu hanya 18 bulan sejak pertama kali belajar bridge secara serius. "Saya terinspirasi melihat ayah bermain, lalu mulai mempelajari strategi melalui aplikasi dan buku," cerita Nathan yang memiliki IQ 150 ini. Prestasinya termasuk memenangkan turnamen nasional kategori dewasa dan meraih skor sempurna dalam tes teori bridge tingkat master. PBSI memberikan penghargaan khusus dan menyiapkan program bimbingan intensif untuk Nathan. Psikolog anak menyarankan agar Nathan tetap menyeimbangkan aktivitas bridge dengan kehidupan sosial anak seusianya. Kedepan, Nathan bercita-cita menjadi juara dunia bridge termuda dan mengembangkan metode belajar bridge untuk anak-anak.'
  },
 ]

 const MyBridge = () => {
    return (
        <div className="min-h-screen bg-base-200">
          <MyNavbar />
          <div className="justify-center flex flex-wrap gap-5">
            {DataBridge.map((Datas) => (
              <Link to={`/news/${Datas.id}`} key={Datas.id}>
               <div className="card mt-2  bg-white text-black w-[360px] md:w-[400px] min-h-[400px] shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105 flex flex-col">
      <figure className="h-48 overflow-hidden">
        <img src={Datas.image} alt="Shoes" className="w-full h-full object-cover" />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <h2 className="card-title text-base font-semibold">{Datas.title}</h2>
          <p className="text-sm mt-2">{Datas.summary}</p>
        </div>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-secondary">NEW</div>
          <div className="flex gap-2">
            <div className="badge badge-outline">{Datas.category}</div>
            <div className="badge badge-outline">{Datas.date}</div>
          </div>
        </div>
      </div>
    </div>
    </Link>
            ))}
            <MyFooter/>
          </div>
        </div>
      );
 }

 export default MyBridge