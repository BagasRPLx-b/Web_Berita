import React from "react";
import { useParams, Link } from "react-router-dom";
import MyNavbar from "../component/Navbar";
import NewsData from "../data/NewsData"; 
import MyFooter from "../component/Footer";//Sesuaikan path jika perlu/

const NewsDetail = () => {
    const { id } = useParams();
    const currentNews = NewsData.find(item => item.id === parseInt(id));
    const otherNews = NewsData
    .filter(news => news.id !== currentNews.id) // Kecuali berita yang sedang dibaca
    .sort(() => Math.random() - 0.18)           // Acak urutan
    .slice(0, 6);

    if (!currentNews) {
      return (
        <div className="min-h-screen bg-base-200">
          <MyNavbar />
          <div className="text-center p-10 text-xl text-red-500">
            Berita tidak ditemukan.
          </div>
        </div>
      );
    }
  
    return (
     <div>

       <div className="min-h-screen bg-base-200">
         <MyNavbar />
         <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md mt-6 rounded-lg">
           <div className="flex mb-4 gap-4">
            <Link to="/news">
           <button className="btn btn-accent h-8 rounded-md"> Kembali</button>
            </Link>
           <div className="badge badge-soft badge-primary">{currentNews.category}</div>
           <div className="badge badge-soft badge-secondary">{currentNews.date}</div>
           </div>
           <h1 className="text-3xl font-bold mt-4 mb-2">{currentNews.title}</h1>
           <img
             src={currentNews.image}
             alt={currentNews.title}
             className="w-full h-96 object-cover rounded-md mb-2"
           />
           <p className="text-grey text-justify">{currentNews.detail}</p>
         </div>
       </div>

       <div className="">
  <h3 className="text-xl text-center font-bold mt-12 mb-4">Berita Lainnya</h3>
  <div className="grid gap-4 p-2 mt-2 md:grid-cols-3">
    {otherNews.map((item) => (
      <Link to={`/news/${item.id}`} key={item.id}>
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
          <figure className="h-46 overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-base">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.summary.slice(0, 80)}...</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

       <MyFooter/> 
        

     </div>

);
};
  
  export default NewsDetail;
  
