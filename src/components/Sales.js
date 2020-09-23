import React, { useState, useEffect } from "react";
import SalesItem from "./SalesItem/SalesItem";
import ig from "../assets/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg";

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
      <h2 className="text-center">Sales</h2>
      <div className="container-fluid">
        <div className="row">
          {salesArray.map((sales) => (
            <SalesItem details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
