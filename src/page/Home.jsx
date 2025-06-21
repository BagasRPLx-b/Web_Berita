import React from "react";
import MyNavbar from "../component/navbar";
import { Link } from "react-router-dom";
import MyFooter from "../component/Footer";

const MyHome = () => {
  return (
    <div>
      <MyNavbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/background/20220714/original/pngtree-ripped-paper-with-white-color-at-damage-edge-picture-image_1608461.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">Welcome to NewsUp</h1>
            <p className="mb-5">
              Sebuah Web Berita yang berisikan tentang Olahraga Catur, Bridge,
              Hingga Perlombaan Esport
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/news">
                <button className="btn btn-primary">Lihat Berita</button>
              </Link>
              <Link to="/About">
                <button className="btn btn-primary">Lihat Profil</button>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
      <MyFooter/>
    </div>
  );
};

export default MyHome;
