import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import bagsService from '../../services/bags'

const BagProductPage = ({match}) => {
   
     const [product, setProduct] = useState(null)

     useEffect(()=>{
       bagsService.getSingleBag(match.params.product)
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
               <img src={product.images[0]} alt='bag'/>
           </div>
       }
   }
    return ( <div>
    <h1>{renderProduct()}</h1>       
    </div> );
}
 
export default withRouter(BagProductPage);