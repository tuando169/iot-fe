import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: '/home',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('@/pages/home-page/HomePage.vue')
        }
      ]
    }
  ],
})

export default router
