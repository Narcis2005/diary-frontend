/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { logoutUser } from "../redux/slices/auth";

let store: any;

export const initializeStore = (_store: any) => {
    store = _store;
};
const api = axios.create({
    baseURL:
        process.env.NODE_ENV == "development" ? "http://localhost:3026/api" : "https://diary.chirilovnarcis.ro/api",
    headers: {
        "Content-Type": "application/json",
    },
});
export interface IResult {
    message: string;
}
export interface ICall {
    status: "success" | "failed" | "idle" | "loading";
    error: any;
    result: IResult | null;
}

api.interceptors.request.use(
    (config) => {
        if (!config.headers) {
            config.headers = {};
        }
        config.headers["x-token"] = localStorage.getItem("token") ?? "";
        config.headers["x-refresh-token"] = localStorage.getItem("refresh-token") ?? "";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
api.interceptors.response.use(
    (res) => {
        if (res.headers["x-token"] && res.headers["x-refresh-token"]) {
            localStorage.setItem("token", res.headers["x-token"]);
            localStorage.setItem("refresh-token", res.headers["x-refresh-token"]);
        }
        return res;
    },
    (err) => {
        if (err.response.data?.message === "Please login in order to acces this") {
            void store.dispatch(logoutUser());
            return;
        }
        return Promise.reject(err);
    },
);

export default api;
