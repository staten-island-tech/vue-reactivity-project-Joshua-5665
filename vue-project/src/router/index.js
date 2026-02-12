import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/views/Work.vue'
import About from '@/views/About.vue'

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
      name: 'about',
      component: About,
    },
  ],
})

export default router
