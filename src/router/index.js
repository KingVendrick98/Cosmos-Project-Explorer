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
    component: () => import('../views/About.vue')
  },
  {
    path: '/blocks/number',
    name: 'BlockByNumber',
    component: () => import( '../components/blockByNumber.vue')
  },
  {
    path: '/blocks',
    name: 'BlocksCount',
    component: () => import('../components/blocksCount.vue')
  },
  {
    path: '/blocks/number/x',
    name: 'GetXBlocks',
    component: () => import('../components/getXBlocks.vue')
  },
  {
    path: '/block/:hash',
    name: 'BlockDetails',
    component: () => import('../components/blockDetails.vue')
  },
  {
    path: '/blocks/hash',
    name: 'BlockByHash',
    component: () => import('../components/blockByHash.vue')
  },
  {
    path: '/address',
    name: 'AddressInfo',
    component: () => import('../components/getAddressInfo.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router