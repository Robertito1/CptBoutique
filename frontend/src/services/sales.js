import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/sales'

const getPersons = () => {
    return axios.get(baseUrl)
}

const createAccessory = (newObject, config) => {
    return axios.post(baseUrl, newObject, config)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson = (objectUpdate, name, id) => {
    return axios.put(`${baseUrl}/${id}`, objectUpdate)
}

export default {
    getPersons,
    createAccessory,
    deletePerson,
    updatePerson
}