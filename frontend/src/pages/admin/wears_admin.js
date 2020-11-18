import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import ProductForm from '../../components/productFormAdmin/ProductForm'
import wearsServices from '../../services/wears'


const WearsAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [wearsArray, setWearsArray] = useState([])


    useEffect(() => {
        wearsServices
        .getWears()
        .then((res)=>{
          setWearsArray(wearsArray.concat(res.data))
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
 wearsServices
 .createWears(data , config)
    .then( response => {
       console.log(response)
      setWearsArray(wearsArray => [response,...wearsArray])
      }).catch(error => {
        console.log('fail', error)
      })
}



    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
  }
      wearsServices
      .deleteWears(id , config)
      .then(res => { 

        setWearsArray(wearsArray.filter(item => item.id !== id ? item : null))
         console.log(res)})
       
      console.log(id)
    }

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
        <div>
        <h1>Wears</h1>
         {wearsArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
        <ProductForm uploadProduct={uploadProduct}/>
    </div> );
}
 
export default withRouter(WearsAdmin);