import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/bags'


const getBags = () => {
    return axios.get(baseUrl)
}

const createBags = async(newObject, config) => { 
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deleteBags = (id, config) => {
    return axios.delete(`${baseUrl}/${id}` , config)
}

const updateSales = (objectUpdate, id ,config) => {
    return axios.put(`${baseUrl}/${id}`, objectUpdate , config)
}

export default {
    getBags,
    createBags,
    deleteBags,
    updateSales
}