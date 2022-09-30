import { createRouter, createWebHistory } from 'vue-router'
import Simulator from '../views/SimulatorView/SimulatorView.vue'

const routes = [
  {
    path: '/simulator',
    name: 'simulator',
    component: Simulator
  }
  // {
  //   path: '/simulator/results/:id',
  //   name: 'results',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
