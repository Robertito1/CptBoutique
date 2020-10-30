import React, { useState, useEffect } from "react";
import SalesItem from "../SalesItem/SalesItem";
import salesServices from '../../services/sales'
import "./sales.css";
// import image1 from "../../assets/accessories1.png";
// import image2 from "../../assets/wears9.png";
// import image3 from "../../assets/shoes1.png";
// import image4 from "../../assets/bag10.png";
// import image5 from "../../assets/accessories6.png";
// import image6 from "../../assets/wears3.png";

const Sales = () => {
  const [salesArray, setSalesArray] = useState([]);
  useEffect(() => {
    salesServices
    .getSales()
    .then((res)=>{
      setSalesArray(salesArray.concat(res.data))
    })
  }, []);
  return (
    <div>
      <h3 className="quick-buys">Quick Buys</h3>
      <h1 className="sales">Sales</h1>
      <div className="container-fluid">
        <div className="row d-flex  justify-content-center">
          {salesArray.map((sales) => (
            <SalesItem details={sales} key={sales.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
