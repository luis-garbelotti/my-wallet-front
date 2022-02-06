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
    const promise = axios.post(`${BASE_URL}/deposit`, body);

    return promise;
}

function payment(body) {
    const promise = axios.post(`${BASE_URL}/payment`, body);

    return promise;
}

function getTransactions(token) {
    const config = createConfig(token);

    const promise = axios.get(`${BASE_URL}/historic`, config);

    return promise;
}

function updateThisDeposit(token, idTransaction, body) {
    const config = createConfig(token);

    const promise = axios.put(`${BASE_URL}/update-deposit/${idTransaction}`, body, config);

    return promise;
}

function updateThisPayment(token, idTransaction, body) {
    const config = createConfig(token);

    const promise = axios.put(`${BASE_URL}/update-payment/${idTransaction}`, body, config);

    return promise;
}

function deleteTransaction(token, idTransaction) {
    const config = createConfig(token);

    const promise = axios.delete(`${BASE_URL}/historic/${idTransaction}`, config);

    return promise;
}

const api = {
    register,
    login,
    deposit,
    payment,
    getTransactions,
    updateThisDeposit,
    updateThisPayment,
    deleteTransaction
}

export default api;