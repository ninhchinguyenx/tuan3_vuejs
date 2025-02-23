import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'honme',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/UserList.vue'),
    },
    {
      path: '/user/edit/:id',
      name: 'UserEditForm',
      component: () => import('@/views/UserForm.vue'),
      props:true,
    },
    // Add more routes here...
  ],
})

export default router
