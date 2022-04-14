import { createRouter, createWebHashHistory } from 'vue-router'
import MaleView from '../views/MaleView.vue'
import FemView from '../views/FemView.vue'

const routes = [
  {
    path: '/m',
    name: 'maleView',
    component: MaleView
  },
  {
    path: '/f',
    name: 'FemView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FemView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
