import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/sales'


const getSales = () => {
    return axios.get(baseUrl)
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
    createSales,
    deleteSales,
    updateSales
}