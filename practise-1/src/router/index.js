import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'
import MenuView from '@/views/MenuView.vue'
import Project1View from '@/views/project1View.vue'

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
    {
      path: '/project1',
      name: 'project1',
      component: Project1View,
    },
  ],
})

export default router
