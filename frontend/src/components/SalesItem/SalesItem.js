import React from "react";
import ModalComponent from "../modal/modal"
import "./salesitem.css";

const SalesItem = ({ details }) => {
  return (
    <div className="card border-0">
      <ModalComponent details={details} />
      <div className="d-flex  justify-content-between card-body p-0 mb-0">
        <div className="order-1">
          <button href="/categories" className="btn text-center text-white m-2 order-btn">
            order
          </button>
        </div>
        <div className="order-2">
          <div className="card-text mb-0 text-center text-muted m-2">
            {details.name} <br />
            <p className="card-title text-center text-muted">
              {details.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesItem;
