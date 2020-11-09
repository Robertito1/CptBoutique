import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom'
import bagsService from '../../services/bags'

const ProductPage = ({match}) => {
    console.log(match)
   
     const [product, setProduct] = useState(null)

     useEffect(()=>{
       bagsService.getSingleBag(match.params.product)
              .then(res =>{
                  setProduct(res.data)
                  console.log(product)
              })
     },[])

   const renderProduct = () =>{
       if(product === null){
           return <div>loading</div>
       }else{
           return <div>{product.title}</div>
       }
   }
    return ( <div>
    <h1>{renderProduct()}</h1>       
    </div> );
}
 
export default withRouter(ProductPage);