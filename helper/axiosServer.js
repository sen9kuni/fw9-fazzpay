import axios from 'axios'

const axiosServer = axios.create({
  baseURL: process.env.BACK_END_URL
})

export default axiosServer