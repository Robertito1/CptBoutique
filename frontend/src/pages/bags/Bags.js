import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import bagsServices from '../../services/bags'
import "./bags.css";

const Bags = () => {
  const [bagsArray, setBagsArray] = useState([]);
  useEffect(() => {
    bagsServices
    .getBags()
    .then((res)=>{
      setBagsArray(bagsArray.concat(res.data))
    });
  // eslint-disable-next-line
  }, []);

  const renderBags = () =>{
    if(bagsArray.length === 0){
      return <h3 style={{marginTop: '50px', marginBottom: '100vh'}}>loading</h3>
    }else{
     return bagsArray.map((sales) => (
        <SalesItem key={sales.id} details={sales} />
      ))
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 title">Bags</h1>
        <div className="row d-flex  justify-content-center">
          {renderBags()}
        </div>
      </div>
    </div>
  );
};

export default Bags;
