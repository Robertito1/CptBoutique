import React, { useState, useEffect } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import wearsServices from '../../services/wears'
import "./wears.css";

const WearsPage = () => {
  const [wearsArray, setWearsArray] = useState([]);
  useEffect(() => {
    wearsServices
    .getWears()
    .then((res)=>{
      setWearsArray(wearsArray.concat(res.data))
    })
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <h1 className="mt-5 title">Wears</h1>
        <div className="row d-flex  justify-content-center">
          {wearsArray.map((sales) => (
            <SalesItem key={sales.id} details={sales} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WearsPage;
