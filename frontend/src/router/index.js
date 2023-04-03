import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogIn from '../views/LogIn.vue';
import ConnexionFailed from '../views/ConnexionFailed.vue';
import CreateAccount from '../views/CreateAccount.vue';
import ForgottenID from '../views/ForgottenID.vue';
import ForgottenPassword from '../views/ForgottenPassword.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: LogIn,
        },
    ],
});

export default router;
