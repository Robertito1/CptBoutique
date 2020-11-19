import axios from 'axios'
const baseUrl = '/api/bags'


const getBags = () => {
    return axios.get(baseUrl)
}
const getSingleBag = (id) => {
    return axios.get(`${baseUrl}/${id}`)
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
    getSingleBag,
    createBags,
    deleteBags,
    updateSales
}