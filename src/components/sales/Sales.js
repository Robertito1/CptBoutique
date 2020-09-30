import React, { useState, useEffect } from "react";
import SalesItem from "../SalesItem/SalesItem";
import "./sales.css";
import ig from "../../assets/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg";

const Sales = () => {
  const [salesArray, setSalesArray] = useState([]);
  useEffect(() => {
    setSalesArray([
      {
        name: "bag",
        price: "$200",
        img: ig,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
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
