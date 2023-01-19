import axios from "axios";
import {getToken, removeToken} from "../utils/token";

import Constants from "expo-constants";

const {manifest} = Constants;

const axiosInstance = axios.create({
    baseURL: `http://${manifest.debuggerHost.split(':').shift()}:8888`,
    headers: {
        "Content-type": "application/json"
    }
})

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (config) => config,
    (error) => {
        const responseError = error?.response?.data;
        if (responseError.code === "X06") {
            removeToken().then(() => console.log("Logout"));
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;
