import React, { useState, useEffect } from "react";
import SalesItem from "../SalesItem/SalesItem";
import "./sales.css";
import image1 from "../../assets/accessories1.png";
import image2 from "../../assets/wears9.png";
import image3 from "../../assets/shoes1.png";
import image4 from "../../assets/bag10.png";
import image5 from "../../assets/accessories6.png";
import image6 from "../../assets/wears3.png";

const Sales = () => {
  const [salesArray, setSalesArray] = useState([]);
  useEffect(() => {
    setSalesArray([
      {
        name: "bag",
        price: "$200",
        img: image1,
      },
      {
        name: "bag",
        price: "$200",
        img: image2,
      },
      {
        name: "bag",
        price: "$200",
        img: image3,
      },
      {
        name: "bag",
        price: "$200",
        img: image4,
      },
      {
        name: "bag",
        price: "$200",
        img: image5,
      },
      {
        name: "bag",
        price: "$200",
        img: image6,
      },
    ]);
  }, []);
  return (
    <div>
      <h3 className="ml-4 quick-buys">Quick Buys</h3>
      <h1 className="ml-4 sales">Sales</h1>
      <div className="container-fluid">
        <div className="row d-flex  justify-content-center">
          {salesArray.map((sales) => (
            <SalesItem details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
