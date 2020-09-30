import React from "react";
import "./salesitem.css";

const SalesItem = ({ details }) => {
  return (
    <div className="card col-sm-6 col-md-3 mb-4 border-0">
      <img className="card-img-top mb-0 rounded" src={details.img} alt="item" />
      <div className="d-flex  justify-content-between card-body p-0 mb-0">
        <div className="order-1">
          <button href="/categories" class="btn text-center m-2">
            order
          </button>
        </div>
        <div className="order-2">
          <p className="card-text mb-0 text-center text-muted">
            {details.name}
          </p>
          <h5 className="card-title text-center text-muted">{details.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default SalesItem;
