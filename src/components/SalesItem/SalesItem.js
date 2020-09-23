import React from 'react';
import './salesitem.css'

const SalesItem = ({ details }) => {
    return (<div className='col-3'>
        <img src={details.img} alt='item' />
        <p>
            {details.name}
            {details.price}
        </p>
    </div>);
}

export default SalesItem;