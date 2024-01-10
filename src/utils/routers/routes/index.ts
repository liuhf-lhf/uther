import Home from "/@/views/home/index.vue";
import Login from "/@/views/login/index.vue";
import {PAGE_NOT_FOUND_ROUTE} from "/@/utils/routers/routes/basic";
import {RouteRecordRaw} from "vue-router";

const modules = import.meta.glob('./modules/**/*.ts', {eager: true});

const routeModuleList: RouteRecordRaw[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? mod : [mod];
    routeModuleList.push(...modList)
});

export const home: RouteRecordRaw = {
    path: '/home',
    name: 'Home',
    component: Home
}
export const login: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: Login,
}

export const basicRoute = [home, login, PAGE_NOT_FOUND_ROUTE, ...routeModuleList]