import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <footer id="main-footer" className="">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-white">
            <h5 className="mb-3">Contact</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> {"\u00A0"} Address 80
              Aminu Kano Crescent, Wuse, Abuja
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> {"\u00A0"}
              Call/WhatsApp: 08035083715
            </p>
            <p>
              <i className="far fa-envelope email"></i> {"\u00A0"} Email:
              dohrceconsulting@gmail.com
            </p>
          </div>
          <div className="col-sm-6 col-md-3 text-white">
            <h5 className="mb-3">Social Media</h5>
            <a className="footer-links" href="https://instagram.com">
              <i className="fab fa-instagram"></i> {"\u00A0"} Instagram
            </a>
            <br />
            <a className="footer-links" href="https://facebook.com">
              <i className="fab fa-facebook"></i> {"\u00A0"} Facebook
            </a>
            <br />
            <a className="footer-links" href="https://linktree.com">
              LinkTree
            </a>{" "}
            <br />
          </div>
          <div className="col-sm-6 col-md-3 text-white">
            <h5 className="mb-3">Categories</h5>
            <Link className="footer-links" to="/shoes">
              Shoes
            </Link>
            <br />
            <Link className="footer-links" to="/accessories">
              Accessories
            </Link>
            <br />
            <Link className="footer-links" to="/bags">
              Bags
            </Link>
            <br />
            <Link className="footer-links" to="/wears">
              Wears
            </Link>
            <br />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
