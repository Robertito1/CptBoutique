import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/wears'


const getWears = () => {
    return axios.get(baseUrl)
}

const createWears = async(newObject, config) => { 
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deleteWears = (id, config) => {
    return axios.delete(`${baseUrl}/${id}` , config)
}

// const updateSales = (objectUpdate, id ,config) => {
//     return axios.put(`${baseUrl}/${id}`, objectUpdate , config)
// }

export default {
    getWears,
    createWears,
    deleteWears,
    // updateSales
}