import React from "react";
import { Link } from "react-router-dom";
// import './Header.css'

const Header = () => {
  return (
    <div className="header text-center">
      <nav
        className="navbar navbar-expand-md navbar-light "
        id="navbar-section"
      >
        <a href="/" className="navbar-brand">
          <p className=" pink my-auto logo animate__animated animate__backInUp">
            CPT
          </p>
        </a>

        <div id="navbarResponsive">
          <ul className="navbar-nav text-nowrap ml-auto">
            <li className="nav-item ">
              <Link className="toHome " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="toCategories " to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
