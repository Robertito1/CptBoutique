import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import wearsService from '../../services/wears'

const WearProductPage = ({match, updateCart}) => {
   
     const [product, setProduct] = useState(null)

     useEffect(()=>{
       wearsService.getSingleWear(match.params.product)
              .then(res =>{
                  setProduct(res.data)
                  console.log(product)
              })
      // eslint-disable-next-line
     },[])

   const renderProduct = () =>{
       if(product === null){
           return <div>loading</div>
       }else{
           return <div>
               <h1>{product.title}</h1>
               <img src={product.images[0]} alt='wear'/>
               <button onClick={()=>updateCart(product)}>add to cart</button>
           </div>
       }
   }
    return ( <div>
    <h1>{renderProduct()}</h1>       
    </div> );
}
 
export default withRouter(WearProductPage);