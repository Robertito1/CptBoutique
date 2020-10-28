import React, { useState, useEffect , useRef } from 'react'
import salesServices from '../../../services/sales'


const SalesAdmin = () => {

    const [user, setUser] = useState(null)
    const form = useRef(null)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

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
          }).catch(error => {
            console.log('fail', error)
          })
    }

    const setSelectedImages = (object) => {
           setImages(object)
    }

    return ( <div>
        <h1>Bags</h1>
        <form onSubmit={uploadForm} ref={form}>
            <input type='text' value={title} name='title'  onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={price} name='price'  onChange={(e) => setPrice(e.target.value)} />
            <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
            <input type='submit' name='submit' />
        </form>
    </div> );
}
 
export default SalesAdmin;