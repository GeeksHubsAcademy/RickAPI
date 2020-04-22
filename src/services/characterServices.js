import axios from 'axios';

const URL = 'https://rickandmortyapi.com/api/character';

const characterServices = {};

characterServices.getByPage = (page) => {
    return axios.get(`${URL}?page=${page}`);
}

characterServices.getById = (id) => {
    return axios.get(`${URL}/${id}`);
}

export default characterServices;

