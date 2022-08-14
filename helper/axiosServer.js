import axios from 'axios'

const axiosServer = axios.create({
  baseURL: 'https://fazzpay.herokuapp.com/'
})

export default axiosServer