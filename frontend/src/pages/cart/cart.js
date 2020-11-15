import React from 'react'

const Cart = ({cartItems}) => {

    return (
         <div>
            {cartItems.map(e => <p>{e.name}</p>)}
         </div>
          );
}
 
export default Cart;

