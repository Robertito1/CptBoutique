import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import wearsData from "../../assets/wearsData";

const WearsPage = () => {
  const [wearsArray, setWearsArray] = useState([]);
  useEffect(() => {
    setWearsArray(wearsData);
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <h1>Wears</h1>
        <div className="row">
          {wearsArray.map((sales) => (
            <SalesItem key={sales.id} details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WearsPage;
