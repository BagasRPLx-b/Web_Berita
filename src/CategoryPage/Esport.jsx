import MyNavbar from "../component/Navbar";
import MyFooter from "../component/Footer";
import { Link } from "react-router-dom";

const DataEsport = [
  {id: 13, 
    title: 'Timnas Esport Indonesia Dominasi SEA Games 2025 dengan 7 Emas', 
    date:"12-10-2024",
    category:"ESPORT",
    image: "https://awsimages.detik.net.id/visual/2023/05/15/team-mlbb-putra-dan-putri-indonesia-di-sea-games-2023-tangkapan-layar-esportid_169.png?w=1200",
    summary: 'Penampilan terbaik sepanjang sejarah kontingen esport Indonesia',
    detail: 'Kontingen esport Indonesia mencatatkan sejarah gemilang dengan meraih tujuh medali emas dari sembilan cabang yang dipertandingkan pada SEA Games 2025 di Bangkok. Prestasi ini melampaui target awal yang hanya empat emas. "Ini hasil dari pembinaan sistematis selama empat tahun terakhir," ujar Ketua PB ESI, Budi Gunawan. Cabang yang menyumbang emas antara lain Mobile Legends: Bang Bang (putra/putri), PUBG Mobile, Valorant, Free Fire, dan Dota 2. Yang paling membanggakan, tim Mobile Legends putri Indonesia berhasil mengalahkan rival berat Filipina dengan skor dramatis 3-2 di final. Kemenangan ini sekaligus membalas kekalahan pada edisi sebelumnya. Pemerintah melalui Kemenpora akan memberikan bonus total Rp7 miliar untuk atlet dan pelatih. PB ESI juga mengumumkan program "Road to Asian Games 2026" dengan anggaran Rp50 miliar untuk mempertahankan dominasi ini.'
  },
  { 
    id: 14, 
    title: 'RRQ Raya Juara Dunia M5 Mobile Legends, Bawa Pulang Rp28 Miliar',
    date:"12-10-2024",
    category:"ESPORT", 
    image: "https://api.duniagames.co.id/api/content/upload/file/16639824381700813548.jpg",
    summary: 'Kembalinya supremasi Mobile Legends Indonesia di kancah global',
    detail: 'Tim esport legendaris Indonesia, RRQ Raya, berhasil mengembalikan kejayaan Mobile Legends Indonesia dengan menjadi juara dunia M5 Championship di Kuala Lumpur. Dalam final yang berlangsung selama 2 jam ini, RRQ mengalahkan tim Filipina, Blacklist International, dengan skor 4-3 dalam pertandingan epik yang disaksikan lebih dari 5 juta penonton streaming. Kemenangan ini mengakhiri puasa gelar dunia selama tiga tahun terakhir. "Ini untuk semua fans yang terus mendukung di masa sulit," kata kapten tim, R7 usai pertandingan. RRQ berhak membawa pulang hadiah utama $2 juta (sekitar Rp28 miliar), terbesar dalam sejarah esport Indonesia. Pemerintah memberikan apresiasi khusus termasuk undangan ke Istana Negara dan beasiswa pendidikan untuk seluruh anggota tim. Moonton selaku pengembang game juga akan membuat skin hero khusus untuk menghormati prestasi RRQ ini.'
  },
  { 
    id: 15, 
    title: 'Pembangunan Esport Arena Terbesar se-ASEAN Dimulai di Jakarta', 
    date:"12-10-2024",
    category:"ESPORT",
    image: "https://cdn.antaranews.com/cache/1200x800/2022/07/14/FIBA-sekjend_1.jpeg",
    summary: 'Investasi Rp1 triliun untuk infrastruktur esport nasional',
    detail: 'Pemerintah Provinsi DKI Jakarta bersama Kemenparekraf dan PB ESI meresmikan pembangunan Jakarta Esport Arena (JEA), kompleks esport terbesar di ASEAN dengan kapasitas 10.000 penonton. Proyek senilai Rp1 triliun ini akan menjadi markas timnas esport Indonesia dan tuan rumah turnamen internasional. "Ini merupakan lompatan besar industri esport Indonesia," ujar Gubernur Jakarta Heru Budi Hartono. Arena seluas 5 hektar di kawasan SCBD ini dilengkapi fasilitas cutting-edge seperti panggung hologram, sistem streaming 8K, 200 unit PC high-end, hotel atlet, dan museum esport. Pembangunan akan selesai dalam 18 bulan dan ditargetkan menjadi tuan rumah M6 World Championship 2026. Selain sebagai venue kompetisi, JEA juga akan menjadi pusat pengembangan bibit atlet esport dengan akademi khusus yang dibimbing langsung oleh profesional. Investor dari Korea Selatan dan Amerika Serikat telah menyatakan minat menjadi mitra pengelolaan.'
  },
  { 
    id: 16, 
    
    title: 'Esport Resmi Masuk Kurikulum SMK Mulai 2026', 
    date:"12-10-2024",
    category:"ESPORT",
    image: "https://i.ytimg.com/vi/MF6M3NiV9-U/maxresdefault.jpg",
    summary: 'Terobosan pendidikan menjawab kebutuhan industri esport',
    detail: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) mengumumkan akan memasukkan esport sebagai mata pelajaran pilihan di SMK mulai tahun ajaran 2026/2027. Kebijakan ini menyusul berkembangnya industri esport yang membutuhkan tenaga profesional tidak hanya sebagai pemain. "Kami menyiapkan tiga konsentrasi: atlet esport, manajemen turnamen, dan game development," jelas Mendikbudristek Nadiem Makarim. Kurikulum dikembangkan bersama PB ESI dan asosiasi pengembang game Indonesia. Sebanyak 50 SMK di 20 provinsi akan menjadi pilot project dengan fasilitas laboratorium esport lengkap. Lulusan diharapkan bisa bersaing di industri esport yang diperkirakan bernilai Rp50 triliun di Indonesia pada 2030. Program ini mendapat dukungan penuh dari perusahaan teknologi seperti Gojek, Tokopedia, dan beberapa studio game lokal yang siap menyerap lulusan. Beasiswa akan diberikan untuk 100 siswa berprestasi setiap tahunnya.'
  },
{
  id: 17, 
  title: 'Atlet Esport Indonesia Raih Penghargaan di The Esports Awards 2025', 
  date:"12-10-2024",
  category:"ESPORT",
  image: "https://asset.indosport.com/article/image/q/80/272825/pro_gamer_indonesia_jess_no_li-169.jpg?w=750&h=423",
  summary: 'Pengakuan internasional untuk kontribusi esport Indonesia',
  detail: 'Untuk pertama kalinya, atlet esport Indonesia mendapatkan penghargaan dalam ajang bergengsi The Esports Awards 2025 di Las Vegas. Jessie Vann "JesNoLimit" (Mobile Legends) terpilih sebagai Female Player of the Year, santo "Lemon" (Valorant) mendapatkan Breakthrough Player of the Year. "Ini membuktikan bahwa esport Indonesia tidak kalah dengan negara lain," ujar Jessie usai menerima penghargaan. PB ESI juga mendapat nominasi untuk Esports Governing Body of the Year atas perkembangan pesat industri esport tanah air. Penghargaan ini semakin mengukuhkan posisi Indonesia sebagai salah satu kekuatan utama esport dunia. Dalam acara yang sama, Indonesia dipercaya menjadi tuan rumah The Esports Awards 2026, yang akan digelar di Bali dengan estimasi penonton global lebih dari 100 juta. Menteri Pariwisata Sandiaga Uno menyatakan ini akan menjadi momentum promosi pariwisata dan ekonomi digital Indonesia.'
},
{ 
  id: 18, 
  title: 'Game Lokal "Dewa Nusantara" Tembus Pasar Global', 
  date:"12-10-2024",
  category:"ESPORT",
  image: "https://www.researchgate.net/publication/327918053/figure/fig1/AS:675527329329152@1538069674008/sual-novel-Nusantara-Legend-of-The-Winged-Ones-Source.png",
  summary: 'Karya developer Indonesia sukses di Steam dan konsol internasional',
  detail: 'Game MOBA "Dewa Nusantara" karya studio lokal Altermyth Games sukses menembus pasar global dengan 5 juta download dalam dua bulan pertama peluncuran. Game yang mengangkat mitologi Nusantara ini telah tersedia di Steam, PlayStation Store, dan Xbox Marketplace dengan rating 4.8/5. "Kami ingin memperkenalkan kekayaan budaya Indonesia melalui medium esport," kata CEO Altermyth, Aditya Soebroto. Keunikan game ini terletak pada hero-hero yang terinspirasi tokoh pewayangan dan peta bertema candi-candi Indonesia. Beberapa tim esport profesional seperti RRQ dan ONIC telah membentuk divisi khusus untuk game ini. Altermyth bekerja sama dengan Kemenparekraf akan mengadakan turnamen internasional dengan hadiah $500,000 pada 2026 mendatang. Kesuksesan game ini telah menarik minet investor asing dan membuka peluang kolaborasi dengan franchise game besar seperti Capcom dan Blizzard untuk konten crossover.'
} , 
 ]

 const MyEsport = () => {
    return (
        <div className="min-h-screen bg-base-200">
          <MyNavbar />
          <div className="justify-center flex flex-wrap gap-5">
            {DataEsport.map((Datas) => (
              <Link to={`/news/${Datas.id}`} key={Datas.id}>
               <div className="card mt-2  bg-white text-black w-[360px] md:w-[400px]  min-h-[400px] rounded-2xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105 flex flex-col">
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

 export default MyEsport
