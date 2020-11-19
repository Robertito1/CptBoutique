import axios from 'axios'
const baseUrl = '/api/wears'


const getWears = () => {
    return axios.get(baseUrl)
}

const getSingleWear = (id) => {
    return axios.get(`${baseUrl}/${id}`)
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
    getSingleWear,
    createWears,
    deleteWears,
    // updateSales
}