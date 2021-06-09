import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://young-taiga-86471.herokuapp.com',
});

export default instance;