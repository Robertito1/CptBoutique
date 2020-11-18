import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import ProductForm from '../../components/productFormAdmin/ProductForm'
import bagsServices from '../../services/bags'


const BagsAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [bagsArray, setBagsArray] = useState([])


    useEffect(() => {
        bagsServices
        .getBags()
        .then((res)=>{
          setBagsArray(bagsArray.concat(res.data))
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
        console.log(data)
              const config = {
           headers: { Authorization: `bearer ${user.token}` },
                   }
          
       bagsServices
       .createBags(data , config)
          .then( response => {
             console.log(response)
            setBagsArray(bagsArray => [response,...bagsArray])
            }).catch(error => {
              console.log('fail', error)
            })
      }


    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
  }

      bagsServices
      .deleteBags(id , config)
      .then(res => { 

        setBagsArray(bagsArray.filter(item => item.id !== id ? item : null))
       })   
    }

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
        <div>
        <h1>Bags</h1>
         {bagsArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
        <ProductForm uploadProduct={uploadProduct}/>
    </div> );
}
 
export default withRouter(BagsAdmin);