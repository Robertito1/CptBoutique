import React from "react";
import ModalComponent from "../modalNew/modalNew"
import "../SalesItem/salesitem.css";

const AdminItem = ({ details, handleDelete}) => {

  const raiseDelete =(id) =>{
    handleDelete(id)
  }

  // const raiseUpdate = ()

  return (
    <div className="card border-0">
      <ModalComponent details={details} />
      <div className="d-flex  justify-content-between card-body p-0 mb-0">
        <div className="order-1">
          <button onClick={()=> raiseDelete(details.id)} className="btn text-center text-white m-2 order-btn">
            delete
          </button>
          <button href="/categories" className="btn text-center text-white m-2 order-btn">
            update
          </button>
        </div>
        <div className="order-2">
          <div className="card-text mb-0 text-center text-muted m-2">
            {details.title} <br />
            <p className="card-title text-center text-muted">
              {details.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminItem;
