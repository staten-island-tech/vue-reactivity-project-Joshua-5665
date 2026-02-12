import { createRouter, createWebHistory } from 'vue-router'
import Work from '@/components/Work.vue'
import About from '@/components/About.vue'

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
