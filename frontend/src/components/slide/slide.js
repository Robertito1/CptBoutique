import React from "react";
import slide1 from "../../assets/hero4.png";
import slide2 from "../../assets/hero2.png";
import slide3 from "../../assets/hero5.png";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import AOS from 'aos'

const Slides = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      data-aos="fade-down-left"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-inline-block w-100 image"
            src={slide1}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-inline-block w-100 image"
            src={slide2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-inline-block w-100 image"
            src={slide3}
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slides;
