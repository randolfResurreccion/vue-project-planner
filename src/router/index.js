import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddView from '@/views/AddView'
import EditView from '@/views/EditView'
import ErrorPage from '@/views/ErrorPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/add',
    name: 'addproject',
    component: AddView,
  },
  {
    path: '/projects/:id',
    name: 'edit',
    component: EditView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'errorpage',
    component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
