import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import salesService from '../../services/sales'
import ModalComponent from '../../components/modalNew/modalNew'
import './product.css'

const SalesProductPage = ({match, updateCart}) => {
   
     const [product, setProduct] = useState(null)
     const [quantity, setQuantity] = useState(1)
     const [color, setColor] = useState(0)
     const [size, setSize] = useState(0)

     useEffect(()=>{
       salesService.getSingleSales(match.params.product)
              .then(res =>{
                  setProduct(res.data)
                  console.log(product)
              })
      // eslint-disable-next-line
     },[])

    const handleCartUpdate = () =>{
        // if(color === '' || size === ''){
        //   console.log('please select the specifications for this product')
        // }else{
            const item = {
                name: product.title,
                price: product.price,
                preview:product.images[0],
                color,
                size,
                quantity
            }
            updateCart(item)
            // setColor('')  
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
           console.log(product)
             return <div>
             <div className='row productInfoContainer'>
                   <div className='col'>
                     <ModalComponent details={product}/>
                   </div>
                   <div className='col'>
                   <h5>{product.title}</h5>
                   <h3>{product.price}</h3>
                   <h5 className='text-center selectPrefrenceHeader'>Choose Color and Size</h5>
                   <div className='row'>
                   <div className='col'>
                    <p className='char'>Color:</p>  
                    <select className='selectPrefrence' value={color} onChange={(e)=>setColor(e.target.value)}>
                        {product.colors.map(e => <option value={e} className='char'>{e}</option>)}
                    </select>  
                  </div>
                  <div className='col'>
                    <p className='char'>Size:</p>  
                    <select className='selectPrefrence' value={size} onChange={(e)=>setSize(e.target.value)}>
                        {product.sizes.map(e => <option value={e} className='char'>{e}</option>)}
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
                        <div className='descriptionHeader d-flex justify-content-center'>
                            <h3>Description</h3>
                        </div>
                        <div>
                            {product.description}
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