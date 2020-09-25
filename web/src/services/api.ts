import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://rdpesquisa.herokuapp.com',
});

export default api;