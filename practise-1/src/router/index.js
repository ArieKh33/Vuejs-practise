import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'
import MenuView from '@/views/MenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: IntroductionView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
  ],
})

export default router
