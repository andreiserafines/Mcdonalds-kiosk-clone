import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Dining',
      component: () => import('@/views/Dining.vue'),
    },
    {
      path: '/AboutView',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/Construction',
      component: () => import('@/views/Construction.vue'),
    },
  ],
})

export default router
