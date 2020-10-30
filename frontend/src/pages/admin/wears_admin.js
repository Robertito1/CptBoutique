import React, { useState, useEffect , useRef } from 'react'
import { withRouter } from 'react-router-dom'
import AdminItem from '../../components/adminItem/adminItem'
import wearsServices from '../../services/wears'


const WearsAdmin = ({history}) => {

    const [user, setUser] = useState(null)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('') 
    const [wearsArray, setWearsArray] = useState([])

    const form = useRef(null)

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

    const uploadForm = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)

        console.log(formData.getAll('images'))

            const config = {
         headers: { Authorization: `bearer ${user.token}` },
   }
        
     wearsServices
     .createWears(formData , config)
        .then( response => {
           console.log(response)
           console.log(formData)
           setPrice('')
           setTitle('')
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
      
        
        <form onSubmit={uploadForm} ref={form}>
        <p>
         Item Name: <input type='text' value={title} name='title' onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          Price: <input type='text' value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          Select Images: <input type='file' name="images" multiple onChange={(e) => setSelectedImages(e.target.files)} />
        </p>
            <input type='submit' name='submit' />
        </form>
    </div> );
}
 
export default withRouter(WearsAdmin);