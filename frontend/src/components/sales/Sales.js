import React, { useState, useEffect } from "react";
import SalesItem from "../SalesItem/SalesItem";
import salesServices from '../../services/sales'
import "./sales.css";


const Sales = () => {
  const [salesArray, setSalesArray] = useState([]);
  useEffect(() => {
    salesServices
    .getSales()
    .then((res)=>{
      setSalesArray(salesArray.concat(res.data))
    })
// eslint-disable-next-line
  }, []);

  const renderSales = () =>{
    if(salesArray.length === 0){
      return <h3 style={{marginTop: '50px', marginBottom: '100vh'}}>loading</h3>
    }else{
     return salesArray.map((sales) => (
        <SalesItem key={sales.id} details={sales} />
      ))
    }
  }
  return (
    <div>
      <h3 className="quick-buys">Quick Buys</h3>
      <h1 className="sales">Sales</h1>
      <div className="container-fluid">
        <div className="row d-flex  justify-content-center">
          {renderSales()}
        </div>
      </div>
    </div>
  );
};

export default Sales;
