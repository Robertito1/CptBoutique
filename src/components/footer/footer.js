import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer id="main-footer" className="bg-primary">
        <h5 className="text-center text-warning py-4">Contact</h5>
        <span className="row  justify-content-center py-4">
          <i className="fas fa-mobile-alt email">Call/WhatsApp: 08035083715</i>
          <i className="far fa-envelope email">
            Email: dohrceconsulting@gmail.com
          </i>
        </span>
        <div className="row text-center text-nowrap justify-content-center">
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/dorcas-ekong-cshcm-09774815">
              <FontAwesomeIcon icon={faCoffee} />
            </a>
          </div>
          <div className="icon-container">
            <a href="https://web.facebook.com/dorcas.ekong ">
              <FontAwesomeIcon icon={faCoffee} />
            </a>
          </div>
          <div className="icon-container">
            <a href="https://twitter.com/dorcasekong1">
              <FontAwesomeIcon icon={faCoffee} className="bg-warning" />
            </a>
          </div>
          <div className="icon-container">
            <a href="https://www.instagram.com/didorc/">click</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
