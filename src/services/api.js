import axios from 'axios'
import { FLOURISH_BASE_URL } from "@env"

const api = axios.create({
    baseURL: FLOURISH_BASE_URL
})

export default api