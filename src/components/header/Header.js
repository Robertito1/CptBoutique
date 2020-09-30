import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header text-center">
      <nav className="navbar navbar-expand-md" id="navbar-section">
        <Link className="toHome navbar-brand" to="/">
          <p className="my-auto logo animate__animated animate__backInUp text-dark">
            CPT
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarResponsive">
          <ul className="navbar-nav text-nowrap ml-auto">
            <li className="nav-item ">
              <Link className="toHome nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="/categories"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/wears">
                  wears
                </Link>
                <Link className="dropdown-item" to="/shoes">
                  shoes
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/bags">
                  bagss
                </Link>
                <Link className="dropdown-item" to="/accessories">
                  accessories
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
