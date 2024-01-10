import axios from "axios";
import {Result} from "/#/global";

function isSuccess(res: Result) {
    if (res.status == 200) {
        return res;
    }
    throw new Error(res.message)
}

const instance = axios.create({
    baseURL: import.meta.env.BASE_URL ?? '/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(function (config) {
    //do something
    return config;
}, function (error) {
    return Promise.reject(error)
});

instance.interceptors.response.use(function (response) {
    try {
        const {data} = isSuccess(response.data);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}, function (error) {
    return Promise.reject(error)
})
