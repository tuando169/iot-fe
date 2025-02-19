import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'root',
      path: '/',
      redirect: '/',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
        {
          name: 'dashboard',
          path: '/',
          component: () => import('@/pages/dashboard/DashboardPage.vue')
        },
        {
          name: 'data-censor',
          path: 'data-censor',
          component: () => import('@/pages/data-censor/DataCensor.vue')
        },
        {
          name: 'history',
          path: 'history',
          component: () => import('@/pages/history/HistoryPage.vue')
        },
        {
          name: 'profile',
          path: 'profile',
          component: () => import('@/pages/profile/ProfilePage.vue')
        },
      ]
    }
  ],
})

export default router
