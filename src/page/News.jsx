import NewsData from "../data/NewsData";
import MyNavbar from "../component/navbar";
import { Link, useLocation } from "react-router-dom";
import MyFooter from "../component/Footer";

const News = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  const search = query.get("search")?.toLowerCase() || "";

  const filteredData = NewsData.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.summary.toLowerCase().includes(search)
  );

  return (
    <div className="min-h-screen bg-base-200">
      <MyNavbar />
      <div className="justify-center flex flex-wrap gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((Datas) => (
            <Link to={`/news/${Datas.id}`} key={Datas.id}>
              <div className="card mt-2  transition-transform duration-300 hover:scale-105 bg-white text-black w-[360px] md:w-[400px] min-h-[400px] shadow-sm hover:shadow-md  flex flex-col">
                <figure className="h-48 overflow-hidden">
                  <img
                    src={Datas.image}
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h2 className="card-title text-base font-semibold">
                      {Datas.title}
                    </h2>
                    <p className="text-sm mt-2">{Datas.summary}</p>
                  </div>
                  <div className="card-actions justify-between mt-4">
                    <div className="badge badge-secondary">NEW</div>
                    <div className="flex gap-2">
                      <div className="badge badge-outline">
                        {Datas.category}
                      </div>
                      <div className="badge badge-outline">{Datas.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white text-lg mt-10">Berita tidak ditemukan.</p>
        )}
      </div>
      <MyFooter/>
    </div>
  );
};

export default News;
