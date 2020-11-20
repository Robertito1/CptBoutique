import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import salesService from '../../services/sales'
import ModalComponent from '../../components/modalNew/modalNew'
import Notification from '../../components/notification/Notification'
import {FormattedNumber} from 'react-intl'
import getSymbolFromCurrency from 'currency-symbol-map'
import './product.css'


const SalesProductPage = ({match, updateCart}) => {
   

     const [product, setProduct] = useState(null)
     const [quantity, setQuantity] = useState(1)
     const [color, setColor] = useState('')
     const [size, setSize] = useState('')
     const [message, setMessage] = useState('')

     const nga = getSymbolFromCurrency('NGN')

     const id = match.params.product
     useEffect(()=>{
       salesService.getSingleSales(id)
              .then(res =>{
                  setProduct(res.data)
              })
      // eslint-disable-next-line
     },[])


     const showMessage = (text) =>{
         setMessage(text)
         setTimeout(()=>{
            setMessage('')
         }, 3000)
        }
   
        const generateId = () =>
        Number((Math.random() * 1000000).toFixed(0))

    const handleCartUpdate = () =>{
        if(color === '' || size === ''){
          showMessage('Please choose a color and a size')
        }else{
            const item = {
                name: product.title,
                price: product.price,
                preview:product.images[0],
                color: color,
                size: size,
                quantity: quantity,
                id: generateId()
            }
            updateCart(item)
            // setColor('') 
        }
     }
 const reduceQuantity = () =>{
     if(quantity === 1){
         return
     }
     else{
      setQuantity(quantity => quantity - 1)
     }
 }


   const renderProduct = () =>{
       if(product === null){
           return <div>loading</div>
       }else{
             return <div>
             <div className='row productInfoContainer'>
                   <div className='col-sm-12 col-lg-6'>
                     <ModalComponent details={product}/>
                   </div>
                   <div className='col-sm-12 col-lg-6 -flex align-self-center flex-column'>
                   <h5>{product.title}</h5>
                   <h3>{nga}<FormattedNumber value={product.price}/></h3>
                   <Notification message={message}/>
                   <h5 className='text-center selectPrefrenceHeader'>Choose Color and Size</h5>
                   <div className='row'>
                   <div className='col'>
                    <p className='char'>Color:</p>  
                    <select className='selectPrefrence' value={color} onChange={(e)=>setColor(e.target.value)}>
                       <option value='' className='char' disabled hidden>choose a color</option>
                        {product.colors[0].split(',').map(e => <option key={e} value={e} className='char'>{e}</option>)}
                    </select>  
                  </div>
                  <div className='col'>
                    <p className='char'>Size:</p>  
                    <select className='selectPrefrence' value={size} onChange={(e)=>setSize(e.target.value)}>
                      <option value='' className='char' disabled hidden>choose a size</option>
                        {product.sizes[0].split(',').map(e => <option key={e} value={e} className='char'>{e}</option>)}
                    </select>
                    </div>
                   </div>
                    <div className='row'>
                    <div className='col d-flex'>
                    <button type="button" onClick={()=>reduceQuantity()} className='char unitControl'>-</button>
                        <p className='counterDisplay char'>{quantity}</p>
                        <button type="button" onClick={()=>setQuantity(quantity => quantity + 1)} className='char unitControl' >+</button>
                    </div>
                    <div className='col'>
                       <button type="button" onClick={()=>handleCartUpdate()} className='char addToCart'>Add to cart</button>
                    </div>   
                    </div>
                   </div>
                </div>
                <div className='d-flex descriptionContainer'>
                        <div className='description'>
                            <h3 className='text-center descriptionHeader'>Description</h3>               
                            <ul className='descriptionList'>
                                {product.description[0].split(',').map(e => <li key={e}>{e}</li>)}
                            </ul>
                        </div>        
                </div> 
                </div>     
       }
   }
    return ( <div>
    <h1>{renderProduct()}</h1>       
    </div> );
}
 
export default withRouter(SalesProductPage);