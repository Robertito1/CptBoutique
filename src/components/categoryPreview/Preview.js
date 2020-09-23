import React, { useEffect, useState } from "react";
import SalesItem from "../../components/SalesItem/SalesItem";
import { Link } from "react-router-dom";
import ig from "../../assets/jefferson-santos-fCEJGBzAkrU-unsplash.jpg";

const Preview = ({ category }) => {
  const [previewsArray, setPreviewsArray] = useState([]);
  useEffect(() => {
    setPreviewsArray([
      {
        name: "bag",
        price: "$200",
        img: ig,
        id: 1,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
        id: 2,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
        id: 3,
      },
      {
        name: "bag",
        price: "$200",
        img: ig,
        id: 4,
      },
    ]);
  }, []);
  return (
    <div className="mb-4 py-4">
      <Link className="link" to={`/${category}`}>
        <h1>{category}</h1>
      </Link>
      <div className="row">
        {previewsArray.map((sales) => (
          <SalesItem key={sales.id} details={sales} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
