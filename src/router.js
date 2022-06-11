import {createRouter, createWebHashHistory} from 'vue-router'

import loginPage from "@/Pages/LoginPage";
import goodsPage from "@/Pages/GoodsPage";

const routers = [
    {
        path : '/',
        redirect: "/login"
    },
    {
        path : '/goodsPage',
        name : 'goodsPage',
        component : goodsPage
    },
    {
        path : '/login',
        name : 'login',
        component : loginPage
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})