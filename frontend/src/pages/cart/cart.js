import React from 'react'
import {FormattedNumber} from 'react-intl'
import getSymbolFromCurrency from 'currency-symbol-map'
import './cart.css'

const Cart = ({cartItems}) => {

  const nga = getSymbolFromCurrency('NGN') 

   const order = `${cartItems.map(e => ' '+ e.name + ' '+ e.quantity + ' selling for ₦'+e.price + ' each')}`
   const total = cartItems.reduce((a, c)=> {return  (c.price * c.quantity) + a }, 0)

  const renderTotal =() =>{
     if(cartItems.length === 0){
     return <div className='orderContainer'>
       <h3 className='emptyCartMessage text-center'>Your cart is looking very empty, please shop more!</h3>
     </div>
   }else{
   return <div className='orderContainer'>
         <h3 className='text-center'>Place an Order</h3>
          <h5>Subtotal: {nga}<FormattedNumber value={total}/></h5>
          <h5>Grand Total: {nga}<FormattedNumber value={total}/></h5>
          <a 
          href={`https://wa.me/2348033235283?text=Hello, I would like to purchase${order}. for a total bill of ₦${total}`} 
          type='button' className='orderButton'>
          <i class="fab fa-whatsapp m-1"></i>
          Order on Whatsapp</a>
       </div>
   }
  }
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
  <tr key={e.title + e.price + e.amount}>
  <td className='d-flex align-items-center'><img src={e.preview} alt='preview' className='previewImg'/><span className='productName'>{e.name}</span></td>
    <td>{nga}<FormattedNumber value={e.price}/></td>
    <td>{e.quantity}</td>
    <td>{nga}<FormattedNumber value={e.price*e.quantity}/></td>
  </tr>
  )}
  </tbody> 
</table> 
{renderTotal()}
    </div>
          );
}
 
export default Cart;

