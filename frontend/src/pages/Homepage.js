import React from "react";
import Sales from "../components/sales/Sales";
import Slides from "../components/slide/slide";

const Homepage = ({updateCart}) => {
  return (
    <div>
      <Slides />
      <Sales updateCart={updateCart}/>
    </div>
  );
};

export default Homepage;
