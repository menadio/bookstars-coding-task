import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import EpisodePage from '@/pages/episode/EpisodePage.vue'
import EpisodeDetailsPage from '@/pages/episode/EpisodeDetailsPage.vue'
import LocationPage from '@/pages/LocationPage.vue'
import CharacterPage from '@/pages/CharacterPage.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/episodes',
            name: 'episodes',
            component: EpisodePage
        },
        {
            path: '/episodes/:id',
            name: 'episodes-details',
            component: EpisodeDetailsPage
        },
        {
            path: '/locations',
            name: 'locations',
            component: LocationPage
        },
        {
            path: '/characters',
            name: 'characters',
            component: CharacterPage
        }
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited
    ]
});

export default router;