import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="main-footer" className="footer container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-white contact-container">
            <h5 className="mb-3">Contact</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> {"\u00A0"} Address Plot
              2a Omofade cresent Omole estate phase 1, Ikeja, Lagos
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> {"\u00A0"}
              Call/WhatsApp: 08033235283
            </p>
            <p>
              <i className="far fa-envelope email"></i> {"\u00A0"} Email:
              cherishprettythings@gmail.com
            </p>
          </div>
          <div className="col-sm-6 col-md-3 text-white social-container">
            <h5 className="mb-3">Social Media</h5>
            <a className="footer-links" href="https://www.instagram.com/cpt4eva/">
              <i className="fab fa-instagram"></i> {"\u00A0"} Instagram
            </a>
            <br />
            <a className="footer-links" href="https://facebook.com">
              <i className="fab fa-facebook"></i> {"\u00A0"} Facebook
            </a>
            <br />
            <a className="footer-links" href="https://wa.me/+2348033235283">
              <i className="fab fa-whatsapp"></i> {"\u00A0"}
              WhatsApp
            </a>{" "}
            <br />
          </div>
          <div className="col-sm-6 col-md-3 text-white categories-container">
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
      <div className="copyright container-fluid text-white text-center">
        Copyright &#169; 2020 könig Technologies
      </div>
    </div>
  );
};

export default Footer;
