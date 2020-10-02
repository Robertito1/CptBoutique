import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import bagsData from "../../assets/bagsinfo";
import "./bags.css";

const Bags = () => {
  const [bagsArray, setBagsArray] = useState([]);
  useEffect(() => {
    setBagsArray(bagsData);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 title">Bags</h1>
        <div className="row d-flex  justify-content-center">
          {bagsArray.map((sales) => (
            <SalesItem key={sales.id} details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
