import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogIn from '../views/LogIn.vue';
import CreateAccount from '../views/CreateAccount.vue';
import ForgottenID from '../views/ForgottenID.vue';
import ForgottenPassword from '../views/ForgottenPassword.vue';
import ConnexionFailed from '../views/ConnexionFailed.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ForgottenID,
        },
    ],
});

export default router;
