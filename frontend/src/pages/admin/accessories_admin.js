import React, { useState, useEffect , useRef } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import accessoriesServices from '../../services/accessories'


const AccessoriesAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('') 
    const [accessoriesArray, setAccessoriesArray] = useState([])

    const form = useRef(null)

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

    const uploadForm = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)

        console.log(formData.getAll('images'))

            const config = {
         headers: { Authorization: `bearer ${user.token}` },
   }
        
     accessoriesServices
     .createAccessories(formData , config)
        .then( response => {
           console.log(response)
           setPrice('')
           setTitle('')
          //  setImages(images.map(e => e? null: null))
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
        <form onSubmit={uploadForm} ref={form}>
            <input type='text' value={title} name='title'  onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={price} name='price'  onChange={(e) => setPrice(e.target.value)} />
            <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
            <input type='submit' name='submit' />
        </form>
    </div> );
}
 
export default withRouter(AccessoriesAdmin);