import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
// import ig from "../../assets/jallen-fosati-kX8p3etvVq8-unsplash.jpg";
import bagsData from "../../assets/bagsinfo";

const Bags = () => {
  const [bagsArray, setBagsArray] = useState([]);
  useEffect(() => {
    setBagsArray(bagsData);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h1>Bags</h1>
        <div className="row">
          {bagsArray.map((sales) => (
            <SalesItem key={sales.id} details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bags;
