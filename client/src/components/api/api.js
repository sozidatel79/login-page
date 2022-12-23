import axios from 'axios';

const API = axios.create({
    baseURL: 'http://webbox.live',
    withCredentials: false,
    headers: {
        'Content-Type': 'text/plain',
    },
    timeout: 30000,
    responseType: 'json',
});

API.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error);
    },
);

class Request {

    get = async (url) => {
        await API.get(url)
    }

    post = async (url, data) => {
        return await API.post(url, data)
    }

    put = async (url, data) => {
        return await API.put(url, data)
    }

    remove = async (url, data) => {
        return await API.delete(url, data)
    }
}

export default new Request();
