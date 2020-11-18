import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import ProductForm from '../../components/productFormAdmin/ProductForm'
import shoesServices from '../../services/shoes'


const ShoesAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [shoesArray, setShoesArray] = useState([])


    useEffect(() => {
        shoesServices
        .getShoes()
        .then((res)=>{
          setShoesArray(shoesArray.concat(res.data))
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
       shoesServices
       .createShoes(data , config)
          .then( response => {
             console.log(response)
            setShoesArray(shoesArray => [response,...shoesArray])
            }).catch(error => {
              console.log('fail', error)
            })
      }

    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
  }

      shoesServices
      .deleteShoes(id , config)
      .then(res => { 

        setShoesArray(shoesArray.filter(item => item.id !== id ? item : null))
        })
    }

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
        <div>
        <h1>Shoes</h1>
         {shoesArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
        <ProductForm uploadProduct={uploadProduct}/>
    </div> );
}
 
export default withRouter(ShoesAdmin);