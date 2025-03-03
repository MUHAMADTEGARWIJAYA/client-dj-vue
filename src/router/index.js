import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import DetailGame from '@/components/Details/DetailGame.vue'
import NotFound from '@/NotFound.vue'
import ComingSoon from '@/ComingSoon.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ComingSoon,
    },
    {
      path: '/ps2',
      name: 'ps2',
      component: LandingPage,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailGame,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
