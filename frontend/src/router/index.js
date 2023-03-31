import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogIn from '../views/LogIn.vue';
import CreateAccount from '../views/CreateAccount.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: CreateAccount,
        },
    ],
});

export default router;
