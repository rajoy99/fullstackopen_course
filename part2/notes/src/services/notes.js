import axios from 'axios'
const baseUrl='http://localhost/3001/notes'

const getUrl = () =>{
    return axios.get(baseUrl)
}

const create = newobject =>{
    return axios.post(baseUrl,newobject)
}

const update = (id,newobject) =>{
    return axios.put(`${baseUrl}/${id}`,newobject)
}

export default { 
    getAll: getAll, 
    create: create, 
    update: update 
  }