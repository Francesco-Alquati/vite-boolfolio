import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './pagesPageHome.vue';

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