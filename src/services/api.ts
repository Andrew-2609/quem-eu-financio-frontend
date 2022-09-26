import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/quem-eu-financio/1.0.0'
})

export default api
