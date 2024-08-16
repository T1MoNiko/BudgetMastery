import axios from 'axios';

export const instance = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

    return axios.create({
        baseURL: 'http://localhost:5000/api/',
        headers: {
          'Authorization': `Bearer ${token}`
        }
    })
};

