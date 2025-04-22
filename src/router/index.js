import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/admin/HomeView.vue'
import Detail from '../views/admin/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/admin/AboutView.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/admin/Detail.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Sign-up.vue'),
    }
  ],
})

export default router
