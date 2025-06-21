import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MyNavbar = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/news?search=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            <li className="pb-1 border-b-2 border-transparent hover:border-accent transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a className="pb-1 border-b-2 border-transparent hover:border-accent transition duration-300" >Category</a>
              <ul className="p-2">
                <Link to="/news" className="block px-4 py-2 hover:bg-secondary">
                  Semua
                </Link>

                <Link to="/Catur" className="block px-4 py-2 hover:bg-secondary">
                  Catur
                </Link>
                <Link
                  to="/Bridge"
                  className="block px-4 py-2  hover:bg-secondary"
                >
                  Bridge
                </Link>
                <Link
                  to="/Esport"
                  className="block px-4 py-2   hover:bg-secondary"
                >
                  Esport
                </Link>
              </ul>
            </li>
            <li className="pb-1 border-b-2 border-transparent hover:border-accent transition duration-300">
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
        <a className="text-2xl md:mx-4 mr-4">NewsUp</a>
      </div>
      <div className="navbar-center hidden lg:flex z-[50]">
        <ul className="menu menu-horizontal px-1">
          <li className="pb-1 border-b-2 border-transparent hover:border-secondary transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary className="pb-1 border-b-2 border-transparent hover:border-secondary transition duration-300">Category</summary>
              <ul className="p-2">
                <li>
                  <Link
                    to="/news"
                    className="block px-4 py-2  hover:bg-accent"
                  >
                    Semua
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Catur"
                    className="block px-4 py-2  hover:bg-accent"
                  >
                    Catur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Bridge"
                    className="block px-4 py-2   hover:bg-accent"
                  >
                    Bridge
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Esport"
                    className="block px-4 py-2   hover:bg-accent"
                  >
                    Esport
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="pb-1 border-b-2 border-transparent hover:border-secondary transition duration-300">
            <Link to="/About">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-40 md:w-auto"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      
    </div>
  );
};

export default MyNavbar;
