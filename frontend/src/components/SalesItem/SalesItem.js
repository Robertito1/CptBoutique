import React from "react";
import {withRouter} from 'react-router-dom'
import {FormattedNumber} from 'react-intl'
import getSymbolFromCurrency from 'currency-symbol-map'
import "./salesitem.css";

const SalesItem = ({ details, history, match }) => {

  const nga = getSymbolFromCurrency('NGN')

  const viewProduct = (item) =>{
    if(match.path !== '/'){
          history.push(`${match.url}/${item.id}`)
    }else{
      history.push(`${item.id}`)
    }
    console.log(history)
  }
  return (
    <div className="card salesItem border-0" onClick={()=> viewProduct(details)}>
      <img className='card-img-top' src={details.images[0]} alt='product'/>
      <div className="d-flex  justify-content-center card-body p-0 mb-0">
        <div className="order-1">
        </div>
        <div className="order-2">
          <div className="card-text mb-0 text-center text-dark m-2">
             <h5 className='text-uppercase font-weight-bold'>{details.title}</h5>
            <p className="card-title text-center text-muted font-weight-bold">
             {nga}<FormattedNumber value={details.price}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SalesItem);
