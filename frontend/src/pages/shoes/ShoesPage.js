import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import shoesServices from '../../services/shoes'
import "./shoes.css";

const ShoesPage = () => {
  const [shoesArray, setShoesArray] = useState([]);
  useEffect(() => {
    shoesServices
    .getShoes()
    .then((res)=>{
      setShoesArray(shoesArray.concat(res.data))
    });
 // eslint-disable-next-line
  }, []);

  const renderShoes = () =>{
    if(shoesArray.length === 0){
      return <p style={{marginTop: '50px', marginBottom: '100vh'}}></p>
    }else{
     return shoesArray.map((sales) => (
        <SalesItem key={sales.id} details={sales} />
      ))
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 title">Shoes</h1>
        <div className="row d-flex  justify-content-center">
          {renderShoes()}
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;
