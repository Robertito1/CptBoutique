import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import accessoriesData from "../../assets/accessoriesData";

const AccessoriesPage = () => {
  const [accessoriesArray, setAccessoriesArray] = useState([]);
  useEffect(() => {
    setAccessoriesArray(accessoriesData);
  }, []);
  return (
    <div>
      <h1>Accessories</h1>
      <div className="row">
        {accessoriesArray.map((sales) => (
          <SalesItem key={sales.id} details={sales} />
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
