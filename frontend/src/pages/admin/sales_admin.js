import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import ProductForm from '../../components/productFormAdmin/ProductForm'
import salesServices from '../../services/sales'


const SalesAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [salesArray, setSalesArray] = useState([])


    useEffect(() => {
        salesServices
        .getSales()
        .then((res)=>{
          setSalesArray(salesArray.concat(res.data))
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          console.log(user.token)
        }
      }, [])

    const uploadProduct = (data) => { 
            const config = {
         headers: { Authorization: `bearer ${user.token}` },
                 }   
     salesServices
     .createSales(data , config)
        .then( response => {
           console.log(response)
          setSalesArray(salesArray => [response,...salesArray])
          }).catch(error => {
            console.log('fail', error)
          })
    }

//     const updateProduct = (data, id) => { 
//       console.log(data)

//       const config = {
//    headers: { Authorization: `bearer ${user.token}` },
//            }
  
// salesServices
// .updateSales(data, id, config)
//   .then( response => {
//      console.log(response)
//     setSalesArray(salesArray)
//     }).catch(error => {
//       console.log('fail', error)
//     })
// }



    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
  }

      salesServices
      .deleteSales(id , config)
      .then(res => { 

        setSalesArray(salesArray.filter(item => item.id !== id ? item : null))
         })
       
    }
    

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
        <div>
        <h1>Sales</h1>
         {salesArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
      <ProductForm uploadProduct={uploadProduct}/>
    </div> );
}
 
export default withRouter(SalesAdmin);