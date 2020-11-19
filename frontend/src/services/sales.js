import axios from 'axios'
const baseUrl = '/api/sales'


const getSales = () => {
    return axios.get(baseUrl)
}

const getSingleSales = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

const createSales = async(newObject, config) => { 
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deleteSales = (id, config) => {
    return axios.delete(`${baseUrl}/${id}` , config)
}

const updateSales = (objectUpdate, id ,config) => {
    return axios.put(`${baseUrl}/${id}`, objectUpdate , config)
}

export default {
    getSales,
    getSingleSales,
    createSales,
    deleteSales,
    updateSales
}