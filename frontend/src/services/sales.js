import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/sales'


const getPersons = () => {
    return axios.get(baseUrl)
}

const createSales = async(newObject, config) => {
    // const config = {
    //     headers: { Authorization: token },
    //   }
  const response = await axios.post(baseUrl, newObject, config)
 return response.data
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (objectUpdate, name, id) => {
    return axios.put(`${baseUrl}/${id}`, objectUpdate)
}

export default {
    getPersons,
    createSales,
    deletePerson,
    updatePerson
}