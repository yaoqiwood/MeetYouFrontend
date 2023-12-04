import {createRouter, createWebHistory} from 'vue-router';
import Login from '../views/Login.vue';
import AdminPage from "../views/AdminPage.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    // 添加其他路由配置
    {
        path: '/admin',
        name: 'admin',
        component: AdminPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
