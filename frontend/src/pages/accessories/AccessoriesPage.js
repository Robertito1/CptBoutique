import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import accessoriesServices from '../../services/accessories'
import "./accessories.css";

const AccessoriesPage = () => {
  const [accessoriesArray, setAccessoriesArray] = useState([]);
  useEffect(() => {
    accessoriesServices
    .getAccessories()
    .then((res)=>{
      setAccessoriesArray(accessoriesArray.concat(res.data))
    })
  // eslint-disable-next-line
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
