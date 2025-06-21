import React from "react";
import MyNavbar from "../component/navbar";
import Foto from "../assets/foto.jpeg";
import Foto2 from "../assets/foto2.png";
import Foto3 from "../assets/foto3.png";
import Foto4 from "../assets/foto4.png";
import Foto5 from "../assets/foto5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faHtml5,
  faReact,
  faJs,
  faCss3Alt,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import MyFooter from "../component/Footer";

const MyAbout = () => {
  return (
    <div>
      <MyNavbar />
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        {/* Bagian teks */}
        <div className="order-2 md:order-none card bg-base-300 w-full md:w-1/2 rounded-box flex-grow grid place-items-start md:place-items-center justify-center">
          <div className="text-start p-6 md:p-12 ">
            <h1 className="text-3xl md:text-4xl font-bold">
              Bagas Aditya Putra
            </h1>
            <p className="font-extralight md:text-2xl text-lg">
              Saya adalah seorang junor web developer dan seorang pelajar yang
              masih duduk di bangku smk saya juga sudah mengerjakan beberapa
              project sederhana seperti web bahkan membuat 3d asset sederhana
            </p>
            <div className="flex mt-4 gap-4">
              <button
                className="p-2 rounded-3xl btn btn-outline btn-secondary"
                onClick={() =>
                  document
                    .getElementById("skills")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started
              </button>
              <FontAwesomeIcon
                className="fa-2x pt-1 cursor-pointer"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="fa-2x pt-1 cursor-pointer"
                icon={faTiktok}
              />
              <FontAwesomeIcon
                className="fa-2x pt-1 cursor-pointer"
                icon={faFacebook}
              />
            </div>
          </div>
        </div>

        {/* Bagian foto */}
        <div className="order-1  md:order-none card bg-base-300 w-full md:w-1/2 flex-grow grid place-items-center">
          <div className="flex flex-col text-center items-center">
            <img
              className=" rounded-full border-2 border-solid shadow-secondary border-secondary h-60 w-60 md:h-96 md:w-96 object-cover"
              src={Foto}
              alt="Foto Profil"
            />
          </div>
        </div>
      </div>

      {/* bagian Skill */}
      <div
        id="skills"
        className="flex flex-col md:flex-row min-h-screen w-full"
      >
        <div className="card bg-base-300 rounded-box grid  grow place-items-start justify-center">
          <div className="flex flex-col">
            <h1 className="text-center text-4xl font-bold px-2 md:px-0 mb-2">
              Keahlian Saya
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center p-3">
              {/* HTML */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-orange-400 transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-orange-600 pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faHtml5}
                />
                <p className="text-xl font-bold text-orange-600">HTML5</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>Struktur semantik (header, main, footer)</li>
                  <li>Form & input</li>
                  <li>SEO dasar</li>
                  <li>Table & multimedia</li>
                </ul>
              </div>

              {/* JavaScript */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-yellow-400 transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-yellow-400 pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faJs}
                />
                <p className="text-xl font-bold text-yellow-500">JavaScript</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>DOM Manipulation</li>
                  <li>Function, Arrow Function</li>
                  <li>Array & Object</li>
                  <li>Event Handling</li>
                </ul>
              </div>

              {/* CSS */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-blue-500 transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-blue-500 pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faCss3Alt}
                />
                <p className="text-xl font-bold text-blue-500">CSS3</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>Flexbox & Grid</li>
                  <li>Responsive Design</li>
                  <li>Animation & Transition</li>
                  <li>Custom Variable</li>
                </ul>
              </div>

              {/* Node.js */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-green-500 transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-green-500 pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faNode}
                />
                <p className="text-xl font-bold text-green-600">Node.js</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>Express.js dasar</li>
                  <li>Routing & Middleware</li>
                  <li>REST API</li>
                  <li>CRUD & koneksi ke MySQL</li>
                </ul>
              </div>

              {/* React */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-sky-400 transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-sky-400 pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faReact}
                />
                <p className="text-xl font-bold text-sky-600">React.js</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>Component & Props</li>
                  <li>useState & useEffect</li>
                  <li>Event & Conditional Render</li>
                  <li>Routing dengan React Router</li>
                </ul>
              </div>

              {/* Blender */}
              <div className="bg-white text-black p-6 md:w-96 w-full rounded-3xl text-center font-semibold shadow-md hover:shadow-xl  hover:outline-3 hover:outline-black transition-all duration-300">
                <FontAwesomeIcon
                  className="fa-6x text-black pt-1 mb-4 transition-transform duration-300 hover:scale-110"
                  icon={faCube}
                />
                <p className="text-xl font-bold text-black">Blender 3D</p>
                <ul className="mt-3 text-sm text-left font-normal list-disc list-inside text-gray-700">
                  <li>Modeling objek dasar</li>
                  <li>Texturing sederhana</li>
                  <li>Lighting & Camera</li>
                  <li>Export ke format glTF</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-screen w-full">
        <div className="card bg-base-300 px-4 rounded-box grid grow place-items-center justify-center">
          <h1 className="badge badge-soft badge-primary p-6 rounded-full text-center text-4xl w-full md:w-96 font-bold md:px-0 mb-4 mt-4">
            Project Terakhir
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-2">
            <div className="card  hover:shadow-xl w-full  hover:outline-3 hover:outline-info bg-base-100 md:w-96 shadow-sm">
              <figure className="">
                <img
                  src={Foto3}
                  alt="Shoes"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title ">
                  Web Sumpah Pemuda
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  Project membuat web tentang sumpah pemuda team kita dipercaya
                  untuk membuat ini, web ini dikembangkan menggunakan html dan
                  juga javadcript untuk css nya team kita menggunakan css murni
                  atau bawaan aplikasi vs code sendiri
                </p>
              </div>
            </div>

            <div className="card  hover:shadow-xl w-full  hover:outline-3 hover:outline-info bg-base-100 md:w-96 shadow-sm">
              <figure className="">
                <img
                  src="https://i0.wp.com/blog.orderonline.id/wp-content/uploads/2023/08/Screenshot_2-6-1024x469-1.png?resize=750%2C382&ssl=1g"
                  alt="Shoes"
                  className="h-60 transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title">
                  Web Penjualan Hp
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  Project membuat web E-comerce tentang penjualan hp , project
                  ini berjalan dengan baik pada semester 1 kemarin , web ini
                  dibuat menggunakan html dan javascript , serta dibantu oleh
                  bosstrap untuk memperindah tampilan
                </p>
              </div>
            </div>

            <div className="card  hover:shadow-xl  hover:outline-3 hover:outline-info bg-base-100 w-full md:w-96 shadow-sm">
              <figure className="">
                <img
                  src={Foto4}
                  alt="Shoes"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title">
                  Web Berita
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  Project membuat web berita tentang olahraga otak , yang isinya
                  ada catur , bridge , dan juga esport , web ini dibuat
                  menggunakan tailwind dan vite dengan bantuan tailwind untuk
                  membuat tampilan menjadi indah
                </p>
              </div>
            </div>

            <div className="card  hover:shadow-xl  hover:outline-3 hover:outline-info bg-base-100 w-full md:w-96 shadow-sm">
              <figure className="">
                <img
                  src={Foto2}
                  alt="Shoes"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title">
                  Web Penjualan Buku
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  project membuat sebuah web komersial yang menjual berbagai
                  macam buku , di project ini sudah memiliki fitur yang cukup
                  menarik terutama di bagian form pembelian , serta ui nya yang
                  sangat menarik , sehingga membuat customer nyaman
                </p>
              </div>
            </div>

            <div className="card  hover:shadow-xl  hover:outline-3 hover:outline-info bg-base-100 w-full md:w-96 shadow-sm">
              <figure className="">
                <img
                  src="https://www.zarla.com/images/zarla-kawasaki-motor-20240729-desktop.webp?width=1056&dpr=2&crop=400:248%2Coffset-x0%2Coffset-y0&format=jpg"
                  alt="Shoes"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center ">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title">
                  Web Penjualan Motor
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  project yang sama yaitu membuat web komersial , namun bedanya
                  di project ini saya membuat sebuah web penjualan motor , namun
                  web ini belum mempunyai daya tarik yang bagus , karena web ini
                  dibuat ketika saya pertama kali belajar ngoding
                </p>
              </div>
            </div>

            <div className="card  hover:shadow-xl  hover:outline-3 hover:outline-info bg-base-100 w-full md:w-96 shadow-sm">
              <figure className="">
                <img
                  src={Foto5}
                  alt="Shoes"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="badge border-accent p-2 badge-soft badge-accent card-title">
                  Pembuatan Asset Game
                </h2>
                <p className="font-serif text-base text-start mt-2">
                  saya juga terlibat dalam pembuatan game , disini saya bertugas
                  sebagai pembuat character beserta senjata senjata nya ,
                  project ini masih dalam tahap on going , masih banyak yang
                  harus di selesaikan , sebelum nantinya rilis di pasaran
                </p>
              </div>
            </div>
          </div>

          {/* price list */}
          <div className="flex min-h-screen w-full">
            <div className="card bg-base-300 rounded-box grow place-items-center justify-center">
              {/* pembuatan Asset */}
              <h1 className="badge badge-soft badge-info my-6 text-3xl font-bold text-center p-6">
                Price List
              </h1>

              <div className="grid md:grid-cols-3 w-full gap-4 grid-cols-1">
                <div className="card md:w-96 bg-base-100 shadow-sm">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">
                      Most Popular
                    </span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl text-start font-bold">
                        Pembuatan Website
                      </h2>
                      <span className="text-lg mt-1">Rp35.000/Project</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Bisa Menggunakan Framwork React</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Menggunakan Libray Tailwind css</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>fitur Javascript Yang Menarik</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Website yang responsif</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                {/* pembuatan web */}
                <div className="card md:w-96 w-full bg-base-100 shadow-sm">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">
                      Most Popular
                    </span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">Pembuatan Aplikasi</h2>
                      <span className="text-lg mt-1">Rp50.000/project</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Bisa Digunakan Di Desktop Maupun Mobile</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Menggunakan framework React</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Bisa Request fitur Sesuai Kemauan</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Desain Ui/Ux Yang Menarik</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                {/* pembuatan aplikasi */}
                <div className="card md:w-96 w-full bg-base-100 shadow-sm">
                  <div className="card-body">
                    <span className="badge badge-xs badge-warning">
                      Most Popular
                    </span>
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-bold">Pembuatan asset</h2>
                      <span className="text-lg mt-1">Rp40.000/Asset</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Menggunakan Blender Versi terbaru</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Dibuatkan animasi untuk assetnya</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Pemilihan Warna dan Desain Yang tepat</span>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Bisa Membuat animasi 2d juga </span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="btn btn-primary btn-block">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* From Contact */}
          <div className="flex w-full flex-col min-h-screen lg:flex-row">
            <div className="card bg-base-300 rounded-box grid grow place-items-center">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-4xl pt-6 font-bold">
                    Berminat Menggunakan Jasa Saya?
                  </h1>
                  <p className="pt-4">
                    Jika anda berminat menggunakan jasa saya silahkan isi form
                    yang sudah saya sediakan Tolong isi form dengan data yang
                    benar Agar mudah Ketika melakukan transaksi
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-base-300 rounded-box grid grow place-items-center">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <fieldset className="fieldset">
                    <label className="label">Nama</label>
                    <input type="text" className="input" placeholder="Nama Lengkap" />
                    <label className="label">No Whatsapp</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Masukan Nomor"
                    />

                    <label className="label">Email</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Email Anda"
                    />
                    
                    <label className="label pt-1">Pilih Jasa</label>
                    <select
                      defaultValue="Pick a language"
                      className="select select-secondary"
                    >
                      <option>Pembuatan website</option>
                      <option>Pembuatan Aplikasi</option>
                      <option>Pembuatan asset</option>
                    </select>
                    <button className="btn btn-neutral mt-4">Submit</button>
                  </fieldset>
                </div>
              </div>
            </div>

          </div>

          <MyFooter />
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
