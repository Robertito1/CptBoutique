import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import salesService from '../../services/sales'

const SalesProductPage = ({match, updateCart}) => {
   
     const [product, setProduct] = useState(null)
     const [count, setCount] = useState(1)
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
                size
            }
            updateCart(item)
            // setColor('')  
     }

   const renderProduct = () =>{
       if(product === null){
           return <div>loading</div>
       }else{
           console.log(product)
           return <div>
                    <select value={color} onChange={(e)=>setColor(e.target.value)}>
                        <option hidden disabled selected value> -- select a color -- </option>
                        {product.colors.map(e => <option value={e}>{e}</option>)}
                    </select>
                    <select value={size} onChange={(e)=>setSize(e.target.value)}>
                        <option hidden disabled selected value> -- select a size -- </option>
                        {product.sizes.map(e => <option value={e}>{e}</option>)}
                    </select>
                    <button type="button" onClick={()=>setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button type="button" onClick={()=>setCount(count + 1)}>+</button>
                    <button type="button" onClick={()=>handleCartUpdate()} >add to cart</button>
                   
               <h1>{product.title}</h1>
               <img src={product.images[0]} alt='sale'/>
           </div>
       }
   }
    return ( <div>
    <h1>{renderProduct()}</h1>       
    </div> );
}
 
export default withRouter(SalesProductPage);