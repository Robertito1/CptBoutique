import React from "react";
import {withRouter} from 'react-router-dom'
// import ModalComponent from '../modalNew/modalNew'
import "./salesitem.css";

const SalesItem = ({ details, updateCart, history, match }) => {


  const viewProduct = (item) =>{
    if(match.path !== '/'){
          history.push(`${match.url}/${item.id}`)
    }else{
      history.push(`${item.id}`)
    }
    console.log(history)
  }
  return (
    <div className="card border-0">
      {/* <ModalComponent details={details} /> */}
      <img src={details.images[0]} alt='product' onClick={()=> viewProduct(details)}/>
      <div className="d-flex  justify-content-between card-body p-0 mb-0">
        <div className="order-1">
          <button href="/categories" className="btn text-center text-white m-2 order-btn" onClick={()=>updateCart()}>
            order
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

export default withRouter(SalesItem);
