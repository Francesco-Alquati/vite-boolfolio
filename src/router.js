import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PagePortfolio from './pages/PagePortfolio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: PageHome
        }
    ]
})

export { router }