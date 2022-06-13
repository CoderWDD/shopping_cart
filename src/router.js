import {createRouter, createWebHashHistory} from 'vue-router'

import loginPage from "@/Pages/LoginPage";
import goodsPage from "@/Pages/GoodsPage";
import cartPage from "@/Pages/CartPage";
import orderPage from "@/Pages/OrderPage";
import registerPage from "@/Pages/RegisterPage";

const routers = [
    {
        path : '/',
        redirect: "/goodsPage"
    },
    {
        path : '/goodsPage',
        name : 'goodsPage',
        component : goodsPage
    },
    {
        path : '/cartPage',
        name : 'cartPage',
        component : cartPage
    },
    {
        path : '/orderPage',
        name : 'orderPage',
        component : orderPage
    },
    {
        path : '/login',
        name : 'login',
        component : loginPage
    },
    {
        path : '/register',
        name : 'register',
        component : registerPage
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})