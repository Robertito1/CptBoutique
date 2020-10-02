import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import accessoriesData from "../../assets/accessoriesData";
import "./accessories.css";

const AccessoriesPage = () => {
  const [accessoriesArray, setAccessoriesArray] = useState([]);
  useEffect(() => {
    setAccessoriesArray(accessoriesData);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 title">Accessories</h1>
        <div className="row d-flex  justify-content-center">
          {accessoriesArray.map((sales) => (
            <SalesItem key={sales.id} details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
