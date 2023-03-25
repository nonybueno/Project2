import { createRouter, createWebHistory } from 'vue-router'
import AllBook from '../view/AllBook.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/allbook',
    name: 'AllBook',
    component: AllBook
    }
  ]
})

export default router
