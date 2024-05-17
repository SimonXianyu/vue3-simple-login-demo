import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    children:[
      {
        path: '/home/dashboard',
        name: 'dashboard',
        component: () => import('../views/home/dashboard.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
