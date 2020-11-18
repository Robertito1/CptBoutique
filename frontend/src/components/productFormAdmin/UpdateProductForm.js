import React, {useState , useRef } from 'react'


const UpdateProductForm = ({updateProduct, details}) => {

    const [images, setImages] = useState(details.images)
    const [title, setTitle] = useState(`${details.title}`)
    const [price, setPrice] = useState(`${details.price}`) 
    const [description, setDescription] = useState(`${details.description}`)
    const [colors , setColors] = useState(`${details.colors}`)
    const [sizes, setSizes] = useState(`${details.sizes}`)

    const form = useRef(null)

    const raiseUpdateEvent = async (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        await updateProduct(formData, details.id)
          //  setImages([])
          //  setTitle('')
          //  setPrice('')

    }

    const setSelectedImages = (object) => {
        setImages(images.concat(object))
 }
    return(
        <div>
                  <form onSubmit={raiseUpdateEvent} ref={form}>
        <div>
          <p>Name: <span>
             <input type='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
           </span></p>
        </div>
        <div>
          <p>Price: <span>
                  <input type='text' value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </span></p>
        </div>
        <div>
          <p>Colors: <span>
                <input type='text' value={colors} name='colors' onChange={(e) => setColors(e.target.value)} />
          </span></p>
        </div>
        <div>
          <p>Sizes: <span>
               <input type='text' value={sizes} name='sizes' onChange={(e) => setSizes(e.target.value)} />
           </span></p>
        </div>
        <div>
          <p>Description: <span>
          <input type='text' value={description} name='description' onChange={(e)=>setDescription(e.target.value)} />
          </span></p>
        </div>
        <div>
          <p>Images: <span>
          <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
          </span></p>
        </div>   
            <input type='submit' name='submit' />
        </form>
        </div>
    )
}

export default UpdateProductForm;