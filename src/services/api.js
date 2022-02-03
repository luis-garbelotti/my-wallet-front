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

function login(body) {
    const promise = axios.post(`${BASE_URL}/`, body);

    return promise;
}

function deposit(body) {
    const promise = axios.post(`${BASE_URL}/`, body);

    return promise;
}

function payment(body) {
    const promise = axios.post(`${BASE_URL}/`, body);

    return promise;
}

const api = {
    register,
    login,
    deposit,
    payment
}

export default api;