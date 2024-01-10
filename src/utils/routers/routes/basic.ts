import {RouteRecordRaw} from "vue-router";

export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
    path: '/:path(.*)*',
    name: "PAGE_NOT_FOUND",
    component: import('/@/views/error/404/index.vue'),
};

export const REDIRECT_ROUTE: RouteRecordRaw = {
    path: '/redirect',
    name: 'PAGE_REDIRECT',
    component: import('/@/views/error/redirect/index.vue'),
};

export const ERROR_PAGE: RouteRecordRaw = {
    path: '/error',
    name: 'PAGE_ERROR',
    component: import('/@/views/error/500/index.vue'),
};