import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

// axios.defaults.baseURL = "http://8.140.24.15:8880";
// axios.defaults.withCredentials = true;

// 配置请求拦截
axios.interceptors.request.use(
    config => {
        let url = config.url;
        console.log(config);
        if (url === "/user/login") {
            return config;
        }
        else {
            config.headers.Authorization = localStorage.getItem("token");
        }

        return config;
    },
    err => {
        Promise.reject(err);
    }
);

// 配置响应拦截器
axios.interceptors.response.use(
    response => {
        // console.log(response);
        return response;
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    localStorage.clear();
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(err)
    }
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
