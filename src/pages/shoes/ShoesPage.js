import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import shoesData from "../../assets/shoesData";

const ShoesPage = () => {
  const [shoesArray, setShoesArray] = useState([]);
  useEffect(() => {
    setShoesArray(shoesData);
  }, []);
  return (
    <div>
      <h1>Shoes</h1>
      <div className="row">
        {shoesArray.map((sales) => (
          <SalesItem key={sales.id} details={sales} />
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
