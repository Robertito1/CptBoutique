import React from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg";
import slide2 from "../../assets/israel-palacio-Y20JJ_ddy9M-unsplash.jpg";
import slide3 from "../../assets/jallen-fosati-kX8p3etvVq8-unsplash.jpg";
import "react-slideshow-image/dist/styles.css";

const slideImages = [slide1, slide2, slide3];

const Slides = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div
          className="each-slide"
          //   style={{
          //     width: "100vw",
          //     height: "100vh",
          //   }}
        >
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100vw",
              height: "100vh",
            }}
          >
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100vw",
              height: "100vh",
            }}
          >
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100vw",
              height: "100vh",
            }}
          >
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slides;
