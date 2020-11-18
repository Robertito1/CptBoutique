import React, { useState, useEffect  } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import ProductForm from '../../components/productFormAdmin/ProductForm'
import accessoriesServices from '../../services/accessories'


const AccessoriesAdmin = ({history}) => {

    const [user, setUser] = useState(null)   
    const [accessoriesArray, setAccessoriesArray] = useState([])


    useEffect(() => {
     accessoriesServices
      .getAccessories()
      .then((res)=>{
        setAccessoriesArray(accessoriesArray.concat(res.data))
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
          
       accessoriesServices
       .createAccessories(data , config)
          .then( response => {
             console.log(response)
            setAccessoriesArray(accessoriesArray => [response,...accessoriesArray])
            }).catch(error => {
              console.log('fail', error)
            })
      }



    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
     }

      accessoriesServices
      .deleteAccessories(id ,config)
      .then(res => { 

        setAccessoriesArray(accessoriesArray.filter(item => item.id !== id ? item : null))
         console.log(res)})
       
      console.log(id)
    }

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
    <div>
        <h1>Accessories</h1>
         {accessoriesArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
        <ProductForm uploadProduct={uploadProduct}/>
    </div> );
}
 
export default withRouter(AccessoriesAdmin);