import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/accessories'


const getAccessories = () => {
    return axios.get(baseUrl)
}

const getSingleAccessory = (id) =>{
    return axios.get(`${baseUrl}/${id}`)
}

const createAccessories = async(newObject, config) => {
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deleteAccessories = (id , config) => {
    return axios.delete(`${baseUrl}/${id}` , config)
}

// const updateAccesories = (objectUpdate, id ,config) => {
//     return axios.put(`${baseUrl}/${id}`, objectUpdate, config)
// }

export default {
    getAccessories,
    getSingleAccessory,
    createAccessories,
    deleteAccessories,
    // updatePerson
}