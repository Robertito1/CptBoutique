import React from 'react'
import {FormattedNumber} from 'react-intl'
import getSymbolFromCurrency from 'currency-symbol-map'
import './cart.css'

const Cart = ({cartItems}) => {

  const nga = getSymbolFromCurrency('NGN')

   const order = `${cartItems.map(e => e.name + ' '+ e.quantity + ' selling for ' + e.price + ' each')}`
   const total = cartItems.reduce((a, c)=> {
    return  (c.price * c.quantity) + a
  }, 0)
    return (
         <div>
<table>
  <thead>
  <tr>
    <th>Product</th>
    <th>Price</th>
    <th>Unit</th>
    <th>Amout</th>
  </tr> 
  </thead>
  <tbody>
  {cartItems.map(e =>
  <tr>
  <td><img src={e.preview} alt='preview' className='previewImg'/><span className='ml-4'>{e.name}</span></td>
    <td>{nga}<FormattedNumber value={e.price}/></td>
    <td>{e.quantity}</td>
    <td>{nga}<FormattedNumber value={e.price*e.quantity}/></td>
  </tr>
  )}
  </tbody> 
</table> 
<div className='orderContainer'>
   <h3 className='text-center'>Place an Order</h3>
   <h2>Subtotal: {nga}<FormattedNumber value={total}/></h2>
   <h2>Grand Total: {nga}<FormattedNumber value={total}/></h2>
   <a 
   href={`https://wa.me/2347034562923?text=Hello I would to purchase ${order}. for a total bill of`} 
   type='button' className='orderButton'>
   Order on Whatsapp</a>
</div>  
    </div>
          );
}
 
export default Cart;

