import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://git.heroku.com/young-taiga-86471.git',
});

export default instance;