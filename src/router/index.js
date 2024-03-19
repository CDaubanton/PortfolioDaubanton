import { createRouter, createWebHistory } from 'vue-router'
import PortfolioView from '@/views/PortfolioView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PortfolioView
    },
    {
      path: '/:notFound',
      component: NotFound
    }
  ]
})

export default router
