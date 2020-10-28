import React, { useState } from 'react'
import salesServices from '../../../services/sales'


const BagsAdmin = () => {

    const formData = new FormData()
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    

    const uploadForm = (e) => {
        e.preventDefault()
        formData.append("title", title);
        formData.append("price", price);
        formData.append("images", images);


        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
     salesServices
     .createAccessory(formData , config)
        .then( response => {
           console.log(response)
           console.log(formData)
          }).catch(error => {
            console.log('fail', error)
          })
    }

    const setSelectedImages = (object) => {
        const array = Object.values(object)
           setImages(images.concat(array))
    }

    return ( <div>
        <h1>Bags</h1>
        <form onSubmit={uploadForm} id='form'>
            <input type='text' value={title} name='title'  onChange={(e) => setTitle(e.target.value)} />
            <input type='text' value={price} name='price'  onChange={(e) => setPrice(e.target.value)} />
            <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
            <button type='submit'>submit</button>
        </form>
    </div> );
}
 
export default BagsAdmin;