import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/views/Work.vue'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
  ],
})

export default router
