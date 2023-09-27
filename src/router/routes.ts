import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('@/views/Home/index.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]