import axios from 'axios';
import { getEnvVariables } from '../utils/';

const { VITE_API_URL } = getEnvVariables()

const OfficesApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})


export default OfficesApi