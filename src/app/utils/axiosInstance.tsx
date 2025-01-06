'use client'

import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL : process.env.BASE_URL
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        const accessToken = token? JSON.parse(token) : null;

        if (accessToken) {
            if (config.headers) {
                config.headers.token = accessToken;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }

)