import axios from 'axios'

axios.defaults.baseURL = '/api'

axios.defaults.timeout = 15000

axios.defaults.withCredentials = true

export default axios;

