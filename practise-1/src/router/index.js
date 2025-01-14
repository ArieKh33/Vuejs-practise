import { createRouter, createWebHistory } from 'vue-router'
import IntroductionView from '@/views/IntroductionView.vue'
import MenuView from '@/views/MenuView.vue'
import Project1View from '@/views/Project1View.vue'
import Project2View from '@/views/Project2View.vue'
import Project3View from '@/views/Project3View.vue'


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
    {
      path: '/project2',
      name: 'project2',
      component: Project2View,
    },
    {
      path: '/project3',
      name: 'project3',
      component: Project3View,
    },
  ],
})

export default router
