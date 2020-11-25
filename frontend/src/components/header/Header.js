import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../assets/freeLogo.jpeg'
import "./header.css";

const Header = ({cartSize}) => {
  return (
    <div className="nav-container">
      <nav
        className="navbar navbar-expand-md navbar-light"
        id="navbar-section"
      >
        <Link className="toHome navbar-brand" to="/">
        <img src={logoImg} alt='logo' 
        className="my-auto logo animate__animated animate__backInUp logo"
        style={{height: '60px'}}
         />

          {/* <p className="my-auto logo animate__animated animate__backInUp text-dark logo">
            CPT
          </p> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-nowrap ml-auto">
            <li className="nav-item">
               <Link className="nav-link" to="/accessories">
                  Accessories
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/bags">
                  Bags
                </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/shoes">
                  Shoes
                </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/wears">
                  Wears
                </Link>
            </li>
          </ul>
        </div>
        <Link className="nav-link" to='/cart'><i className="fas fa-shopping-cart fa-sm cartIcon"></i>
            <span className='badge badge-pill badge-warning'>{cartSize}</span></Link>
      </nav>
    </div>
  );
};

export default Header;
