import axios from 'axios';

const instance = axios.create({
    baseURL : "https://lousy-nodejs.vercel.app/"
})

export default instance;