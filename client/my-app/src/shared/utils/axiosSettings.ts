import axios, { AxiosInstance } from 'axios';

export const instance = () => {
      const state = axios.create({
        baseURL: 'http://localhost:8080/',
      })

    return state;
};

