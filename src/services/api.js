import axios from "axios";

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/register`, body);

    return promise;
}

const api = {
    register
}

export default api;