import React from 'react'
import {FormattedNumber} from 'react-intl'
import getSymbolFromCurrency from 'currency-symbol-map'
import './cart.css'

const Cart = ({cartItems, deleteItem, increase, decrease}) => {

  const nga = getSymbolFromCurrency('NGN') 

   const order = `${cartItems.map(e => ' '+ e.quantity + ' '+e.color + ' '+ e.name+ ' of size '+ e.size+' selling for ₦'+e.price + ' each')}`
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
          onClick={()=> window.localStorage.removeItem('productsInCart')}
          href={`https://wa.me/2348033235183?text=Hello, I would like to purchase${order}, for a total bill of ₦${total}`} 
          type='button' className='orderButton'>
          <i className="fab fa-whatsapp m-1"></i>
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
  <tr key={e.id}>
  <td className='d-flex align-items-center'><img src={e.preview} alt='preview' className='previewImg'/><span className='productName'>{e.name}</span></td>
    <td>{nga}<FormattedNumber value={e.price}/></td>
    <td className='text-center'>
        <p>{e.quantity}</p>
        <div className='d-flex justify-content-around'>
        <div onClick={()=>decrease(e.id)} className='cartControl p-1 minus'><i className="fas fa-minus"></i></div>
        <div onClick={()=>increase(e.id)} className='cartControl p-1 plus'><i className="fas fa-plus"></i></div>
        </div>        
    </td>
    <td className='text-center'>
        <p>{nga}<FormattedNumber value={e.price*e.quantity}/></p>
        <button onClick={()=>deleteItem(e.id)} className='cartItemDelete'><i class="fas fa-times"></i></button>
        </td>
  </tr>
  )}
  </tbody> 
</table> 
{renderTotal()}
    </div>
          );
}
 
export default Cart;

