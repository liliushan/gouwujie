import axios from 'axios'
import qs from 'qs'

function request(config) {
  let inte1 = axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3'
  })
  inte1.interceptors.request.use(config => {
    if (config.data) {
      config.data = qs.stringify(config.data)
    }
    return config
  })
  inte1.interceptors.response.use(res => {
    return res.data
  })
  return inte1(config)
}
export  {request}