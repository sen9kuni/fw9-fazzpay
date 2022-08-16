import axios from 'axios'
import Cookies from 'js-cookie'

const axiosApiIntance = axios.create({
  baseURL: 'https://fazzpay.herokuapp.com/'
})

// Add a request interceptor
axiosApiIntance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // ========
  config.headers = {
    Authorization: `Bearer ${Cookies.get('token')}`
  }
  // ========
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosApiIntance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // ========
  console.log(error.response);
  if (error.response.status === 403) {
    Cookies.remove('token')
    window.location.href = '/login'
  }
  // =======
  return Promise.reject(error);
});

export default axiosApiIntance