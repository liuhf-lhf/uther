import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import type {App} from 'vue';
import {basicRoute} from './routes/index'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/home'
    },
]
routes.push(...basicRoute)
export const instance = createRouter({
    history: createWebHashHistory(),
    routes,
});

export function initRoute(app: App<Element>) {
    app.use(instance)
}