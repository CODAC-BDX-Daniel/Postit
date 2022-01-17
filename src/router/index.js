import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nouveau',
    name: 'La page du Clique',
    component: () => import(/* webpackChunkName: "nouveau" */ '../views/nouveau.vue')
  },
  {
    path: '/ModifPostitV/:id',
    name: 'ModifPostitV',
    props: true,
    component: () => import(/* webpackChunkName: "Modif postit" */ '../views/ModifPostitV.vue')
  },
  {
    path: '/noteZoom/:id',
    name: 'NoteZoom',
    props: true,
    component: () => import(/* webpackChunkName: "MonPostIt" */ '../views/noteZoom.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
