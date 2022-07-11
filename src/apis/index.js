import axios from "axios";
import queryString from "query-string";
import apiConfig from "./apiConfig";

const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "content-type": "appication/json",
    },
    paramsSerializer: (params) =>
        queryString.stringify({ ...params, api_key: apiConfig.api_key }),
});

instance.interceptors.response.use(
    (res) => res.data || res,
    (err) => {
        throw err;
    }
);

export default instance;
