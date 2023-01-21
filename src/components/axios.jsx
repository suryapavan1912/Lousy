import axios from 'axios';

const instance = axios.create({
    baseURL : "http://localhost:8000/products"
})

export default instance;