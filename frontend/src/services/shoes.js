import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/shoes'


const getShoes = () => {
    return axios.get(baseUrl)
}

const createShoes = async(newObject, config) => { 
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deleteShoes = (id, config) => {
    return axios.delete(`${baseUrl}/${id}` , config)
}

// const updateShoes = (objectUpdate, id ,config) => {
//     return axios.put(`${baseUrl}/${id}`, objectUpdate , config)
// }

export default {
    getShoes,
    createShoes,
    deleteShoes,
    // updateSales
}