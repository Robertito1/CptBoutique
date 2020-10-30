import React, { useState, useEffect , useRef } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import salesServices from '../../services/sales'


const SalesAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('') 
    const [salesArray, setSalesArray] = useState([])

    const form = useRef(null)

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

    const uploadForm = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)

        console.log(formData.getAll('images'))

            const config = {
         headers: { Authorization: `bearer ${user.token}` },
   }
        
     salesServices
     .createSales(formData , config)
        .then( response => {
           console.log(response)
           console.log(formData)
          //  setSalesArray(salesArray.concat(formData))
           setImages([])
           setTitle('')
           setPrice('')
          }).catch(error => {
            console.log('fail', error)
          })
    }

    const setSelectedImages = (object) => {
           setImages(images.concat(object))
    }

    const handleDelete = (id) =>{
      const config = {
        headers: { Authorization: `bearer ${user.token}` },
  }

      salesServices
      .deleteSales(id , config)
      .then(res => { 

        setSalesArray(salesArray.filter(item => item.id !== id ? item : null))
         console.log(res)})
       
      console.log(id)
    }

    return ( <div>
    <button onClick={()=> history.push('/admin')}>back</button>
        <div>
        <h1>Sales</h1>
         {salesArray.map(item => <AdminItem details={item} key={item.id} handleDelete={handleDelete} />)} 
        </div>
      
        
        <form onSubmit={uploadForm} ref={form}>
            <input type='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
            <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
            <input type='submit' name='submit' />
        </form>
    </div> );
}
 
export default withRouter(SalesAdmin);