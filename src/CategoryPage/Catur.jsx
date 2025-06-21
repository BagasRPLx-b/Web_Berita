import MyNavbar from "../component/Navbar";
import MyFooter from "../component/Footer";
import { Link } from "react-router-dom";

const DataCatur = [
  { 
    id: 1, 
    title: 'Catur Indonesia Targetkan 5 Emas di SEA Games 2025', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://images.chesscomfiles.com/uploads/v1/news/1074469.ec2ea65b.668x375o.f1be9942f998@2x.jpeg",
    summary: 'Timnas Catur Indonesia menargetkan perolehan 5 medali emas dalam ajang SEA Games 2025 di Bangkok',
    detail: 'Persatuan Catur Seluruh Indonesia (Percasi) secara resmi mengumumkan target ambisius untuk meraih lima medali emas pada SEA Games 2025 mendatang. Target ini didasarkan pada performa gemilang atlet catur Indonesia di kancah internasional selama tiga tahun terakhir. "Kami telah melakukan analisis mendalam terhadap kekuatan tim dan pesaing utama seperti Vietnam dan Filipina," ujar Ketua Percasi, Utut Adianto. Pelatih tim, Susianah Handayani, menambahkan bahwa fokus utama akan diberikan pada nomor-nomor klasik seperti Standard Chess dan Rapid Chess, baik untuk kategori putra maupun putri. Persiapan termasuk pelatihan intensif di Eropa selama tiga bulan menjelang pertandingan.'
  },
  { 
    id: 2, 
    title: 'Grandmaster Irene Sukandar Raih Gelar Ke-10 di Turnamen Internasional', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://statik.tempo.co/data/2021/03/20/id_1008644/1008644_720.jpg",
    summary: 'Pecatur putri Indonesia kembali menorehkan prestasi membanggakan di kancah internasional',
    detail: 'Grandmaster Wanita Irene Kharisma Sukandar sukses meraih gelar juara pada turnamen Cairns Cup 2025 di Saint Louis, Amerika Serikat. Ini merupakan gelar internasional ke-10 dalam kariernya. Dengan kemenangan ini, rating Elo Irene melonjak menjadi 2520, menempatkannya di peringkat 15 dunia kategori putri. "Prestasi ini membuktikan bahwa catur Indonesia semakin diakui dunia," ujar Irene usai menerima piala. Turnamen yang berlangsung selama 12 hari ini diikuti oleh 20 grandmaster terbaik dunia. Irene mengaku persiapan khusus dengan mempelajari pola permainan lawan-lawan beratnya selama tiga bulan sebelum turnamen berhasil membuahkan hasil.'
  },
  { 
    id: 3, 
    title: 'Pelatnas Catur 2025 Dimulai, 30 Atlet Terbaik Dikarantina', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://cms.portaljtv.com/assets/upload-gambar/jtv_1745376576.jpg",
    summary: 'Percasi memulai program pelatihan nasional menjelang berbagai turnamen besar tahun 2025',
    detail: 'Sebanyak 30 atlet catur terbaik Indonesia resmi memulai program pelatihan nasional (pelatnas) tahap pertama di Bandung, Jawa Barat. Pelatnas yang berlangsung selama enam bulan ini bertujuan mempersiapkan atlet menghadapi serangkaian turnamen penting termasuk SEA Games 2025 dan Kejuaraan Asia. "Kami menerapkan sistem pelatihan holistik yang mencakup aspek teknik, fisik, dan mental," jelas kepala pelatih, GM Susanto Megaranto. Para atlet akan menjalani latihan intensif 8 jam sehari dengan dibimbing lima pelatih internasional. Selain itu, Percasi juga mendatangkan psikolog olahraga dan ahli gizi untuk memaksimalkan performa atlet. Pelatnas tahap kedua rencananya akan digelar di Eropa untuk mengaklimatisasi atlet dengan kondisi turnamen internasional.'
  },
  { 
    id: 4, 
    title: 'Kejuaraan Nasional Catur 2025 Hadiahkan Total Rp1 Miliar', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://awsimages.detik.net.id/community/media/visual/2025/04/29/pecatur-5-negara-berlaga-di-turnamen-catur-internasional-1745910242936_169.jpeg?w=600&q=90",
    summary: 'Turnamen catur dengan hadiah terbesar se-Asia Tenggara akan digelar di Jakarta',
    detail: 'Percasi bersama Kementerian Pemuda dan Olahraga mengumumkan akan menyelenggarakan Kejuaraan Nasional Catur 2025 dengan total hadiah mencapai Rp1 miliar. Turnamen yang akan digelar di Jakarta Convention Center pada Agustus mendatang ini terbuka untuk semua kategori usia. "Ini merupakan komitmen kami untuk meningkatkan kualitas catur nasional," ujar Menpora Dito Ariotedjo. Sistem turnamen menggunakan format Swiss dengan 11 ronde, diikuti oleh 500 pecatur terbaik dari seluruh Indonesia. Juara umum akan mendapatkan hadiah Rp250 juta, terbesar dalam sejarah catur Indonesia. Selain hadiah uang tunai, pemenang juga berkesempatan mengikuti turnamen internasional dengan biaya ditanggung pemerintah. Pendaftaran dibuka mulai 1 Maret 2025 melalui website resmi Percasi.'
  },
  { 
    id: 5, 
    title: 'Catur Masuk Kurikulum Pendidikan Dasar di 10 Provinsi', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://asset.kompas.com/crops/J1pqfrc38vQvO5z5kM0LIvJDNOQ=/0x0:675x450/1200x800/data/photo/2018/02/18/4232496006.jpg",
    summary: 'Kemendikbud resmi memasukkan catur sebagai mata pelajaran pilihan di sekolah dasar',
    detail: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) bekerja sama dengan Percasi akan menerapkan program pengenalan catur sebagai mata pelajaran pilihan di 10 provinsi percontohan. Program yang dimulai tahun ajaran 2025/2026 ini bertujuan meningkatkan kemampuan logika dan strategi siswa. "Catur terbukti meningkatkan kemampuan matematika dan berpikir kritis anak," jelas Mendikbudristek Nadiem Makarim. Sebanyak 500 guru telah dilatih khusus untuk mengajar catur dengan metode yang menyenangkan. Materi pembelajaran mencakup dasar-dasar catur, taktik sederhana, hingga sejarah perkembangan catur dunia. Percasi menyediakan 10.000 set papan catur untuk mendukung program ini. Provinsi yang terpilih sebagai percontohan antara lain DKI Jakarta, Jawa Barat, Jawa Timur, Bali, dan Sumatera Utara.'
  },
  { 
    id: 6, 
    title: 'Aplikasi Catur Indonesia Raih Penghargaan Internasional', 
    date:"12-10-2024",
    category:"CATUR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWs_btoiWtGbGNrCxyyUcwARdI3wJdT6rq0w&s",
    summary: 'Inovasi digital dari developer lokal sukses di kancah global',
    detail: 'Aplikasi pembelajaran catur "ChessMaster ID" karya developer Indonesia berhasil meraih penghargaan Best Educational App dalam ajang Global App Awards 2025 di San Francisco. Aplikasi yang diluncurkan setahun lalu ini telah diunduh lebih dari 1 juta pengguna dari 50 negara. "Kami bangga bisa mempromosikan catur sekaligus menunjukkan kemampuan IT Indonesia," kata CEO ChessTech Indonesia, Andi Wijaya. Aplikasi ini menawarkan fitur lengkap mulai dari tutorial pemula, analisis pertandingan menggunakan AI, hingga simulasi permainan dengan grandmaster virtual. Yang unik, aplikasi ini mengadaptasi gaya permainan pecatur Indonesia seperti Utut Adianto dan Irene Sukandar. Penghargaan ini semakin mengukuhkan posisi Indonesia sebagai salah satu pusat pengembangan catur digital dunia. Versi premium aplikasi ini akan diluncurkan bulan depan dengan fitur reality augmented untuk simulasi permainan lebih realistis.'
 },
    
 ]

 const MyCatur = () => {
    return (
        <div className="min-h-screen bg-base-200">
          <MyNavbar />
          <div className="justify-center flex flex-wrap gap-5">
            {DataCatur.map((Datas) => (
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
          </div>
             <MyFooter/>
        </div>
      );
 }

 export default MyCatur
