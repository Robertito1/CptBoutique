import React, { useState, useEffect } from "react";
import SalesItem from "../SalesItem/SalesItem";
import salesServices from '../../services/sales'
import "./sales.css";


const Sales = ({updateCart}) => {
  const [salesArray, setSalesArray] = useState([]);
  useEffect(() => {
    salesServices
    .getSales()
    .then((res)=>{
      setSalesArray(salesArray.concat(res.data))
    })
// eslint-disable-next-line
  }, []);
  return (
    <div>
      <h3 className="quick-buys">Quick Buys</h3>
      <h1 className="sales">Sales</h1>
      <div className="container-fluid">
        <div className="row d-flex  justify-content-center">
          {salesArray.map((sales) => (
            <SalesItem details={sales} key={sales.title} updateCart={updateCart}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
